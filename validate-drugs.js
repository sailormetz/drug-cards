#!/usr/bin/env node
/**
 * Drug Data Validator
 * Validates drugs.js against schema.md rules.
 * Run: node validate-drugs.js [path-to-drugs-file]
 *
 * Updated for schema v2:
 *   - Doses are nested inside indications[].doses[] (no flat drug.doses[])
 *   - onset/duration live at route level (not dose level)
 *   - sameDoseAs pointer indications have no doses
 *   - Expanded category enums
 */

const fs = require('fs');
const path = require('path');

// ─── Enums from schema.md ──────────────────────────────────────────

const CATEGORY_ENUMS = [
  "Airway & Respiratory",
  "Allergic & Immune",
  "Cardiovascular",
  "Endocrine & Metabolic",
  "IV Fluids",
  "Nausea & Vomiting",
  "Neurological",
  "OB/GYN",
  "Pain Management",
  "Resuscitation",
  "Sedation & Anesthesia",
  "Toxicology",
  "Trauma & Hemorrhage",
  // Legacy / found in data before enum update — flag separately
  "Analgesic",
  "Allergy & Immunology",
  "Electrolyte",
];

// Categories that are in schema (not legacy)
const SCHEMA_CATEGORIES = new Set([
  "Airway & Respiratory",
  "Allergic & Immune",
  "Cardiovascular",
  "Endocrine & Metabolic",
  "IV Fluids",
  "Nausea & Vomiting",
  "Neurological",
  "OB/GYN",
  "Pain Management",
  "Resuscitation",
  "Sedation & Anesthesia",
  "Toxicology",
  "Trauma & Hemorrhage",
]);

const POPULATION_ENUMS = new Set(["Adult", "Pediatric", "Geriatric", "Neonatal"]);

const ROUTE_ENUMS = new Set([
  "IV", "IO", "IM", "IN", "SQ", "SL", "PO", "PR", "BUC", "ET",
  "NEB", "NGT", "IV drip", "Inhaled", "Topical", "MDI", "Nebulizer",
]);

const SOURCE_ENUMS = new Set([
  "NASEMSO 2022 v3.0",
  "AHA 2020/2023",
  "StatPearls",
  "DailyMed",
  "NAEMSP",
  "Mixed",
]);

const MOA_ACTION_ENUMS = new Set([
  "agonist", "antagonist", "blocker", "enhancer", "inhibitor",
  "stimulator", "relaxant", "adsorbent", "donor", "stabilizer",
  "restorer", "chelator",
]);

const MOA_SYSTEM_ENUMS = new Set([
  "adrenergic", "cholinergic", "opioid", "GABAergic", "serotonergic",
  "dopaminergic", "glutamatergic", "ion-channel", "enzymatic",
  "metabolic", "inflammatory", "coagulation", "histaminergic",
  "purinergic", "other",
]);

const MOA_TIER_ENUMS = new Set(["Low", "Mod", "High"]);

// ─── Helpers ───────────────────────────────────────────────────────

const errors = [];
const warnings = [];

function error(drugId, msg) {
  errors.push({ drug: drugId, message: msg });
}

function warn(drugId, msg) {
  warnings.push({ drug: drugId, message: msg });
}

function isStr(val) {
  return typeof val === 'string' && val.trim().length > 0;
}

function isArr(val) {
  return Array.isArray(val);
}

// ─── Field validators ──────────────────────────────────────────────

function validateId(drug, seenIds) {
  const id = drug.id;
  if (!isStr(id)) { error('(unknown)', 'Missing or empty id'); return; }
  if (id !== id.toLowerCase()) error(id, `id must be lowercase`);
  if (/\s/.test(id)) error(id, `id contains whitespace`);
  if (seenIds.has(id)) error(id, `Duplicate id`);
  seenIds.add(id);
}

function validateTopLevel(drug) {
  const id = drug.id || '(unknown)';
  if (!isStr(drug.summary)) error(id, 'Missing summary');
  if (!isStr(drug.genericName)) error(id, 'Missing genericName');
  if (!isStr(drug.source)) {
    error(id, 'Missing source');
  } else if (!SOURCE_ENUMS.has(drug.source)) {
    warn(id, `source "${drug.source}" not in schema enum`);
  }
}

function validateTradeNames(drug) {
  const id = drug.id || '(unknown)';
  if (!isArr(drug.tradeNames)) error(id, 'tradeNames must be an array');
}

function validateCategory(drug) {
  const id = drug.id || '(unknown)';
  if (!isArr(drug.category) || drug.category.length === 0) {
    error(id, 'category must be a non-empty array');
    return;
  }
  drug.category.forEach(cat => {
    if (!SCHEMA_CATEGORIES.has(cat)) {
      warn(id, `category "${cat}" not in schema enum — may be legacy or needs update`);
    }
  });
}

function validateClasses(drug) {
  const id = drug.id || '(unknown)';
  if (!isArr(drug.classes) || drug.classes.length === 0) {
    error(id, 'classes must be a non-empty array');
  }
}

function validateMoa(drug) {
  const id = drug.id || '(unknown)';
  if (!isArr(drug.moa) || drug.moa.length === 0) {
    error(id, 'moa must be a non-empty array');
    return;
  }

  drug.moa.forEach((entry, i) => {
    const pfx = `moa[${i}]`;
    if (!isStr(entry.brief)) error(id, `${pfx}.brief is missing or empty`);

    if (!entry.target || typeof entry.target !== 'object') {
      error(id, `${pfx}.target is missing or not an object`);
      return;
    }
    const t = entry.target;
    if (!isStr(t.name))   error(id, `${pfx}.target.name is missing`);
    if (!isStr(t.action)) {
      error(id, `${pfx}.target.action is missing`);
    } else if (!MOA_ACTION_ENUMS.has(t.action)) {
      warn(id, `${pfx}.target.action "${t.action}" not in schema enum`);
    }
    if (!isStr(t.result)) error(id, `${pfx}.target.result is missing`);
    if (!isStr(t.system)) {
      error(id, `${pfx}.target.system is missing`);
    } else if (!MOA_SYSTEM_ENUMS.has(t.system)) {
      warn(id, `${pfx}.target.system "${t.system}" not in schema enum`);
    }
    if (entry.tier !== undefined && !MOA_TIER_ENUMS.has(entry.tier)) {
      error(id, `${pfx}.tier "${entry.tier}" not in enum [Low, Mod, High]`);
    }
  });
}

function validateRoute(id, pfx, route) {
  // via[]
  if (!isArr(route.via) || route.via.length === 0) {
    error(id, `${pfx}.via must be a non-empty array`);
  } else {
    route.via.forEach(v => {
      if (!ROUTE_ENUMS.has(v)) error(id, `${pfx}.via "${v}" not in route enum`);
    });
  }

  // amount
  if (!isStr(route.amount)) error(id, `${pfx}.amount is missing`);

  // onset & duration — required at route level in v2 schema
  if (!isStr(route.onset))    error(id, `${pfx}.onset is missing`);
  if (!isStr(route.duration)) error(id, `${pfx}.duration is missing`);

  // optional strings
  if (route.repeat   !== undefined && !isStr(route.repeat))   warn(id, `${pfx}.repeat is present but empty`);
  if (route.maxDose  !== undefined && !isStr(route.maxDose))  warn(id, `${pfx}.maxDose is present but empty`);

  // notes must be array
  if (!isArr(route.notes)) error(id, `${pfx}.notes must be an array (use [] if empty)`);
}

function validateDose(id, pfx, dose) {
  // population
  if (!isStr(dose.population)) {
    error(id, `${pfx}.population is missing`);
  } else if (!POPULATION_ENUMS.has(dose.population)) {
    error(id, `${pfx}.population "${dose.population}" not in enum [Adult, Pediatric, Geriatric, Neonatal]`);
  }

  // routes[]
  if (!isArr(dose.routes) || dose.routes.length === 0) {
    if (!isArr(dose.notes) || dose.notes.length === 0) {
      error(id, `${pfx}.routes is missing/empty and no notes present`);
    } else {
      warn(id, `${pfx} has no routes — notes-only entry`);
    }
  } else {
    dose.routes.forEach((route, j) => {
      validateRoute(id, `${pfx}.routes[${j}]`, route);
    });
  }

  // dose-level notes
  if (dose.notes !== undefined && !isArr(dose.notes)) {
    error(id, `${pfx}.notes must be an array`);
  }

  // Old schema fields that should NOT appear in v2
  if (dose.onset    !== undefined) warn(id, `${pfx}.onset is at dose level — should be inside each route`);
  if (dose.duration !== undefined) warn(id, `${pfx}.duration is at dose level — should be inside each route`);
  if (dose.indication !== undefined) warn(id, `${pfx}.indication is a v1 field — doses now nested under indications[]`);
}

function validateIndications(drug) {
  const id = drug.id || '(unknown)';

  if (!isArr(drug.indications) || drug.indications.length === 0) {
    error(id, 'indications must be a non-empty array');
    return;
  }

  // Check for flat drug.doses — v1 artifact
  if (drug.doses !== undefined) {
    warn(id, 'drug.doses is a v1 field — doses should be nested inside indications[].doses[]');
  }

  const indicationNames = new Set();
  const doseOwningNames = new Set();

  // First pass: collect names and identify dose-owning vs pointer
  drug.indications.forEach((ind, i) => {
    const pfx = `indications[${i}]`;

    if (!isStr(ind.name)) {
      error(id, `${pfx}.name is missing`);
      return;
    }

    if (indicationNames.has(ind.name)) {
      error(id, `Duplicate indication name "${ind.name}"`);
    }
    indicationNames.add(ind.name);

    const hasDoses     = isArr(ind.doses);
    const hasSameDoseAs = isStr(ind.sameDoseAs);

    if (hasDoses && hasSameDoseAs) {
      error(id, `${pfx} "${ind.name}" has both doses and sameDoseAs — pick one`);
    } else if (!hasDoses && !hasSameDoseAs) {
      error(id, `${pfx} "${ind.name}" has neither doses nor sameDoseAs — every indication must have one`);
    }

    if (hasDoses) {
      doseOwningNames.add(ind.name);

      if (ind.doses.length === 0) {
        warn(id, `${pfx} "${ind.name}" has an empty doses array`);
      }

      // Validate indication-level notes
      if (ind.notes !== undefined && !isArr(ind.notes)) {
        error(id, `${pfx}.notes must be an array`);
      }

      // Validate each dose
      ind.doses.forEach((dose, j) => {
        validateDose(id, `${pfx}.doses[${j}]`, dose);
      });
    }
  });

  // Second pass: validate sameDoseAs references
  drug.indications.forEach((ind, i) => {
    if (!isStr(ind.sameDoseAs)) return;
    if (!doseOwningNames.has(ind.sameDoseAs)) {
      error(id, `indications[${i}] "${ind.name}": sameDoseAs "${ind.sameDoseAs}" does not match any dose-owning indication name`);
    }
  });

  // At least one dose-owning indication required
  if (doseOwningNames.size === 0) {
    error(id, 'No dose-owning indications found — every drug must have at least one indication with doses[]');
  }
}

function validateContraindications(drug) {
  const id = drug.id || '(unknown)';
  if (!isArr(drug.contraindications)) {
    error(id, 'contraindications must be an array');
    return;
  }
  drug.contraindications.forEach((ci, i) => {
    if (!ci || typeof ci !== 'object') {
      error(id, `contraindications[${i}] must be an object`);
      return;
    }
    if (!isStr(ci.text)) error(id, `contraindications[${i}].text is missing`);
    if (ci.relative !== undefined && typeof ci.relative !== 'boolean') {
      warn(id, `contraindications[${i}].relative should be boolean`);
    }
  });
}

function validateAdverseEffects(drug) {
  const id = drug.id || '(unknown)';
  if (!isArr(drug.adverseEffects)) {
    error(id, 'adverseEffects must be an array');
    return;
  }
  if (drug.adverseEffects.length === 0) warn(id, 'adverseEffects is empty');
  drug.adverseEffects.forEach((ae, i) => {
    if (typeof ae !== 'string') error(id, `adverseEffects[${i}] must be a string`);
  });
}

function validatePrecautions(drug) {
  const id = drug.id || '(unknown)';
  if (!isArr(drug.precautions)) {
    error(id, 'precautions must be an array');
    return;
  }
  if (drug.precautions.length === 0) warn(id, 'precautions is empty');
  drug.precautions.forEach((p, i) => {
    if (typeof p !== 'string') error(id, `precautions[${i}] must be a string`);
  });
}

// ─── Main ──────────────────────────────────────────────────────────

function validate(drugs) {
  const seenIds = new Set();

  console.log(`\n🔍 Validating ${drugs.length} drug entries against schema v2...\n`);

  drugs.forEach(drug => {
    validateId(drug, seenIds);
    validateTopLevel(drug);
    validateTradeNames(drug);
    validateCategory(drug);
    validateClasses(drug);
    validateMoa(drug);
    validateIndications(drug);
    validateContraindications(drug);
    validateAdverseEffects(drug);
    validatePrecautions(drug);
  });

  // ─── Report ────────────────────────────────────────────────────
  console.log('═'.repeat(60));

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ ALL CLEAR — no errors or warnings.\n');
    return;
  }

  if (errors.length > 0) {
    console.log(`\n❌ ERRORS (${errors.length}):\n`);
    const byDrug = {};
    errors.forEach(e => {
      if (!byDrug[e.drug]) byDrug[e.drug] = [];
      byDrug[e.drug].push(e.message);
    });
    Object.entries(byDrug).forEach(([drug, msgs]) => {
      console.log(`  📦 ${drug}`);
      msgs.forEach(m => console.log(`     ❌ ${m}`));
    });
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${warnings.length}):\n`);
    const byDrug = {};
    warnings.forEach(w => {
      if (!byDrug[w.drug]) byDrug[w.drug] = [];
      byDrug[w.drug].push(w.message);
    });
    Object.entries(byDrug).forEach(([drug, msgs]) => {
      console.log(`  📦 ${drug}`);
      msgs.forEach(m => console.log(`     ⚠️  ${m}`));
    });
  }

  console.log('\n' + '═'.repeat(60));
  console.log(`📊 Summary: ${drugs.length} drugs | ${errors.length} errors | ${warnings.length} warnings`);
  console.log('═'.repeat(60) + '\n');

  if (errors.length > 0) process.exit(1);
}

// ─── Load drugs ────────────────────────────────────────────────────

const filePath = process.argv[2] || path.join(__dirname, 'data', 'drugs.js');

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

let fileContent = fs.readFileSync(filePath, 'utf-8');

// Strip export/const wrapper to get the raw array
fileContent = fileContent
  .replace(/^(?:const\s+\w+\s*=\s*|module\.exports\s*=\s*|export\s+default\s+)/m, '')
  .replace(/;\s*$/, '');

let drugs;
try {
  drugs = new Function(`return ${fileContent}`)();
} catch (e) {
  console.error(`❌ Failed to parse drugs file: ${e.message}`);
  console.error(`   Tip: The file may be truncated or have syntax errors.`);
  process.exit(1);
}

if (!Array.isArray(drugs)) {
  console.error('❌ Parsed result is not an array');
  process.exit(1);
}

validate(drugs);
