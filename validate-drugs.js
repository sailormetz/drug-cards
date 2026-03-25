#!/usr/bin/env node
/**
 * Drug Data Validator
 * Validates drugs.js against schema.md rules.
 * Run: node validate-drugs.js [path-to-drugs-file]
 */

const fs = require('fs');
const path = require('path');

// ─── Enums from schema.md ──────────────────────────────────────────
const CATEGORY_ENUMS = [
  "Airway & Respiratory", "Analgesic", "Cardiovascular",
  "Endocrine & Metabolic", "Neurological", "OB/GYN",
  "Resuscitation", "Toxicology", "IV Fluids",
  "Allergy & Immunology", "Electrolyte" // found in data but not in schema — flag separately
];

const POPULATION_ENUMS = ["Adult", "Pediatric", "Geriatric", "Neonatal"];

const ROUTE_ENUMS = [
  "IV", "IO", "IM", "IN", "SQ", "SL", "PO", "PR", "BUC", "ET",
  "NEB", "NGT", "IV drip", "Inhaled", "Topical",
  "MDI", "Nebulizer" // found in data
];

const SOURCE_ENUMS = [
  "NASEMSO 2022 v3.0", "AHA 2020/2023", "StatPearls",
  "DailyMed", "NAEMSP", "Mixed"
];

const MOA_ACTION_ENUMS = [
  "agonist", "antagonist", "blocker", "enhancer", "inhibitor",
  "stimulator", "relaxant", "adsorbent", "donor", "stabilizer",
  "restorer", "chelator" // found in data
];

const MOA_SYSTEM_ENUMS = [
  "adrenergic", "cholinergic", "opioid", "GABAergic", "serotonergic",
  "dopaminergic", "glutamatergic", "ion-channel", "enzymatic",
  "metabolic", "inflammatory", "coagulation", "histaminergic",
  "purinergic", "other"
];

const MOA_TIER_ENUMS = ["Low", "Mod", "High"];

// ─── Helpers ───────────────────────────────────────────────────────
const errors = [];
const warnings = [];

function error(drugId, msg) {
  errors.push({ drug: drugId, message: msg, severity: 'ERROR' });
}

function warn(drugId, msg) {
  warnings.push({ drug: drugId, message: msg, severity: 'WARN' });
}

function isNonEmptyString(val) {
  return typeof val === 'string' && val.trim().length > 0;
}

function isArray(val) {
  return Array.isArray(val);
}

// ─── Validators ────────────────────────────────────────────────────

function validateId(drug, seenIds) {
  const id = drug.id;
  if (!isNonEmptyString(id)) {
    error('(unknown)', 'Missing or empty id');
    return;
  }
  if (id !== id.toLowerCase()) {
    error(id, `id "${id}" must be lowercase`);
  }
  if (/\s/.test(id)) {
    error(id, `id "${id}" contains whitespace`);
  }
  if (seenIds.has(id)) {
    error(id, `Duplicate id "${id}"`);
  }
  seenIds.add(id);
}

function validateTopLevelStrings(drug) {
  const id = drug.id || '(unknown)';

  if (!isNonEmptyString(drug.summary)) {
    error(id, 'Missing summary');
  }
  if (!isNonEmptyString(drug.genericName)) {
    error(id, 'Missing genericName');
  }
  if (!isNonEmptyString(drug.source)) {
    error(id, 'Missing source');
  } else if (!SOURCE_ENUMS.includes(drug.source)) {
    warn(id, `source "${drug.source}" not in schema enum list`);
  }
}

function validateTradeNames(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.tradeNames)) {
    error(id, 'tradeNames must be an array');
  }
}

function validateCategory(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.category) || drug.category.length === 0) {
    error(id, 'category must be a non-empty array');
    return;
  }
  const schemaCategories = [
    "Airway & Respiratory", "Analgesic", "Cardiovascular",
    "Endocrine & Metabolic", "Neurological", "OB/GYN",
    "Resuscitation", "Toxicology", "IV Fluids"
  ];
  drug.category.forEach(cat => {
    if (!schemaCategories.includes(cat)) {
      warn(id, `category "${cat}" not in schema enum — may need to add to schema`);
    }
  });
}

function validateClasses(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.classes) || drug.classes.length === 0) {
    error(id, 'classes must be a non-empty array');
  }
}

function validateMoa(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.moa) || drug.moa.length === 0) {
    error(id, 'moa must be a non-empty array');
    return;
  }

  drug.moa.forEach((entry, i) => {
    const prefix = `moa[${i}]`;

    if (!isNonEmptyString(entry.brief)) {
      error(id, `${prefix}.brief is missing or empty`);
    }

    if (!entry.target || typeof entry.target !== 'object') {
      error(id, `${prefix}.target is missing or not an object`);
      return;
    }

    const t = entry.target;
    if (!isNonEmptyString(t.name)) error(id, `${prefix}.target.name is missing`);
    if (!isNonEmptyString(t.action)) {
      error(id, `${prefix}.target.action is missing`);
    } else if (!MOA_ACTION_ENUMS.includes(t.action)) {
      warn(id, `${prefix}.target.action "${t.action}" not in schema enum`);
    }
    if (!isNonEmptyString(t.result)) error(id, `${prefix}.target.result is missing`);
    if (!isNonEmptyString(t.system)) {
      error(id, `${prefix}.target.system is missing`);
    } else if (!MOA_SYSTEM_ENUMS.includes(t.system)) {
      warn(id, `${prefix}.target.system "${t.system}" not in schema enum`);
    }

    // Tier validation
    if (entry.tier !== undefined) {
      if (!MOA_TIER_ENUMS.includes(entry.tier)) {
        error(id, `${prefix}.tier "${entry.tier}" not in enum [Low, Mod, High]`);
      }
    }
  });
}

function validateIndications(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.indications) || drug.indications.length === 0) {
    error(id, 'indications must be a non-empty array');
    return;
  }

  const names = drug.indications.map(i => i.name);
  const doseInds = new Set(drug.doses.map(d => d.indication).filter(Boolean));

  // Each indication must have a name
  drug.indications.forEach((ind, i) => {
    if (!isNonEmptyString(ind.name)) {
      error(id, `indications[${i}].name is missing`);
    }
  });

  // Rule 0: multi-indication drugs must use indication field on doses
  if (drug.indications.length > 1 && doseInds.size === 0) {
    error(id, `Has ${drug.indications.length} indications but no dose entries use the indication field`);
  }

  // Rule 1: every dose indication must match an indications[].name
  drug.doses.forEach((d, i) => {
    if (d.indication && !names.includes(d.indication)) {
      error(id, `doses[${i}].indication "${d.indication}" not found in indications[].name`);
    }
  });

  // Rule 2: every sameDoseAs must point to a name with dose entries
  drug.indications.forEach(ind => {
    if (ind.sameDoseAs && !doseInds.has(ind.sameDoseAs)) {
      error(id, `${ind.name}: sameDoseAs "${ind.sameDoseAs}" has no matching dose entry`);
    }
  });

  // Rule 3: every indication must be accounted for (has doses or sameDoseAs)
  if (doseInds.size > 0) {
    drug.indications.forEach(ind => {
      if (!ind.sameDoseAs && !doseInds.has(ind.name)) {
        error(id, `"${ind.name}" has no dose entries and no sameDoseAs — data incomplete`);
      }
    });
  }

  // Rule 4: sameDoseAs must not coexist with own dose entries
  drug.indications.forEach(ind => {
    if (ind.sameDoseAs && doseInds.has(ind.name)) {
      error(id, `"${ind.name}" has both dose entries AND sameDoseAs — pick one`);
    }
  });

  // Consistency: if ANY dose has indication, ALL should
  const dosesWithInd = drug.doses.filter(d => d.indication);
  const dosesWithoutInd = drug.doses.filter(d => !d.indication);
  if (dosesWithInd.length > 0 && dosesWithoutInd.length > 0) {
    // Check if the ones without indication also lack population-only entries for single-indication drugs
    warn(id, `Mixed: ${dosesWithInd.length} dose entries have indication, ${dosesWithoutInd.length} do not — orphaned entries won't appear under any tab`);
  }
}

function validateContraindications(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.contraindications)) {
    error(id, 'contraindications must be an array');
    return;
  }
  drug.contraindications.forEach((ci, i) => {
    if (!ci || typeof ci !== 'object') {
      error(id, `contraindications[${i}] must be an object`);
      return;
    }
    if (!isNonEmptyString(ci.text)) {
      error(id, `contraindications[${i}].text is missing`);
    }
    if (ci.relative !== undefined && typeof ci.relative !== 'boolean') {
      warn(id, `contraindications[${i}].relative should be boolean, got ${typeof ci.relative}`);
    }
  });
}

function validateDoses(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.doses)) {
    error(id, 'doses must be an array');
    return;
  }
  if (drug.doses.length === 0) {
    warn(id, 'doses array is empty');
    return;
  }

  drug.doses.forEach((dose, i) => {
    const prefix = `doses[${i}]`;

    // Population
    if (!isNonEmptyString(dose.population)) {
      error(id, `${prefix}.population is missing`);
    } else if (!POPULATION_ENUMS.includes(dose.population)) {
      error(id, `${prefix}.population "${dose.population}" not in enum [Adult, Pediatric, Geriatric, Neonatal]`);
    }

    // Onset & Duration — required
    if (!isNonEmptyString(dose.onset)) {
      error(id, `${prefix}.onset is missing`);
    }
    if (!isNonEmptyString(dose.duration)) {
      error(id, `${prefix}.duration is missing`);
    }

    // Routes
    if (!isArray(dose.routes) || dose.routes.length === 0) {
      // Some dose entries (like pediatric droperidol) have no routes, just notes
      if (!dose.notes || dose.notes.length === 0) {
        error(id, `${prefix}.routes is missing or empty and no notes present`);
      } else {
        warn(id, `${prefix} has no routes — notes-only entry`);
      }
      return;
    }

    dose.routes.forEach((route, j) => {
      const rPrefix = `${prefix}.routes[${j}]`;

      // via
      if (!isArray(route.via) || route.via.length === 0) {
        error(id, `${rPrefix}.via must be a non-empty array`);
      } else {
        const validRoutes = [
          "IV", "IO", "IM", "IN", "SQ", "SL", "PO", "PR", "BUC", "ET",
          "NEB", "NGT", "IV drip", "Inhaled", "Topical", "MDI", "Nebulizer"
        ];
        route.via.forEach(v => {
          if (!validRoutes.includes(v)) {
            error(id, `${rPrefix}.via "${v}" not in route enum`);
          }
        });
      }

      // amount
      if (!isNonEmptyString(route.amount)) {
        error(id, `${rPrefix}.amount is missing`);
      }

      // notes must be array
      if (!isArray(route.notes)) {
        error(id, `${rPrefix}.notes must be an array (use [] if empty)`);
      }

      // repeat and maxDose should be strings if present
      if (route.repeat !== undefined && !isNonEmptyString(route.repeat)) {
        warn(id, `${rPrefix}.repeat is present but empty`);
      }
      if (route.maxDose !== undefined && !isNonEmptyString(route.maxDose)) {
        warn(id, `${rPrefix}.maxDose is present but empty`);
      }
    });

    // Dose-level notes
    if (dose.notes !== undefined && !isArray(dose.notes)) {
      error(id, `${prefix}.notes must be an array`);
    }
  });
}

function validateAdverseEffects(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.adverseEffects)) {
    error(id, 'adverseEffects must be an array');
    return;
  }
  if (drug.adverseEffects.length === 0) {
    warn(id, 'adverseEffects is empty');
  }
  drug.adverseEffects.forEach((ae, i) => {
    if (typeof ae !== 'string') {
      error(id, `adverseEffects[${i}] must be a string`);
    }
  });
}

function validatePrecautions(drug) {
  const id = drug.id || '(unknown)';
  if (!isArray(drug.precautions)) {
    error(id, 'precautions must be an array');
    return;
  }
  if (drug.precautions.length === 0) {
    warn(id, 'precautions is empty');
  }
  drug.precautions.forEach((p, i) => {
    if (typeof p !== 'string') {
      error(id, `precautions[${i}] must be a string`);
    }
  });
}

// ─── Main ──────────────────────────────────────────────────────────

function validate(drugs) {
  const seenIds = new Set();

  console.log(`\n🔍 Validating ${drugs.length} drug entries against schema.md...\n`);

  drugs.forEach(drug => {
    validateId(drug, seenIds);
    validateTopLevelStrings(drug);
    validateTradeNames(drug);
    validateCategory(drug);
    validateClasses(drug);
    validateMoa(drug);
    validateContraindications(drug);
    validateDoses(drug);
    validateIndications(drug);
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
    // Group by drug
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

// Strip export/const wrapper to get the array
// Handle: const DRUGS = [...]; / module.exports = [...]; / export default [...];
fileContent = fileContent
  .replace(/^(?:const\s+\w+\s*=\s*|module\.exports\s*=\s*|export\s+default\s+)/m, '')
  .replace(/;\s*$/, '');

// Use Function constructor to eval safely-ish (it's our own data)
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
