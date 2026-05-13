// One-shot migration: replace classes:[...] arrays in data/drugs.js and
// data/home_meds.js with snake_case keys from the new drug-class registry.
// Also emits data/drug_classes.js (the registry as a JS object).
//
// Run: node scripts/migrate-classes.js
//
// Inputs:
//   ~/Downloads/final_med_class_files/drug_classes.json
//   ~/Downloads/final_med_class_files/field_meds_classes.final.json
//   ~/Downloads/final_med_class_files/home_meds_classes.final.json
//
// Strategy: for each entry, locate `genericName: 'X'` (or "X") then replace
// the *next* `classes: [...]` block within the same drug object. Arrays
// contain only quoted strings, no nested brackets — a non-greedy match on
// `[ ... ]` is safe.

const fs = require('fs');
const path = require('path');
const os = require('os');

const SRC_DIR = path.join(os.homedir(), 'Downloads', 'final_med_class_files');
const REPO = path.resolve(__dirname, '..');

const registry = JSON.parse(fs.readFileSync(path.join(SRC_DIR, 'drug_classes.json'), 'utf8')).classes;
const fieldAssignments = JSON.parse(fs.readFileSync(path.join(SRC_DIR, 'field_meds_classes.final.json'), 'utf8'));
const homeAssignments = JSON.parse(fs.readFileSync(path.join(SRC_DIR, 'home_meds_classes.final.json'), 'utf8'));

function toMap(arr) {
  const m = new Map();
  for (const e of arr) m.set(e.genericName, e.classes);
  return m;
}
const fieldMap = toMap(fieldAssignments);
const homeMap = toMap(homeAssignments);

// Validate every assigned key exists in the registry.
const registryKeys = new Set(Object.keys(registry));
const badField = fieldAssignments.flatMap(e => e.classes.filter(k => !registryKeys.has(k)));
const badHome = homeAssignments.flatMap(e => e.classes.filter(k => !registryKeys.has(k)));
if (badField.length || badHome.length) {
  console.error('Unknown class keys:', { field: badField, home: badHome });
  process.exit(1);
}

function rewriteFile(relPath, assignmentMap, indent) {
  const file = path.join(REPO, relPath);
  let text = fs.readFileSync(file, 'utf8');

  // Quote-aware match: capture content between a matching pair so apostrophes
  // inside double-quoted names (Lactated Ringer's Solution) survive.
  const nameRe = /genericName:\s*(?:'([^']+)'|"([^"]+)")/g;
  const positions = [];
  let m;
  while ((m = nameRe.exec(text)) !== null) {
    positions.push({ name: m[1] || m[2], idx: m.index });
  }

  const migrated = [];
  const missing = [];
  // Walk positions in reverse so earlier offsets remain valid as we mutate.
  for (let i = positions.length - 1; i >= 0; i--) {
    const { name, idx } = positions[i];
    const keys = assignmentMap.get(name);
    if (!keys) { missing.push(name); continue; }

    const classesRe = /classes:\s*\[([^\]]*)\]/;
    const slice = text.slice(idx);
    const cm = classesRe.exec(slice);
    if (!cm) { missing.push(`${name} (no classes block)`); continue; }

    const absStart = idx + cm.index;
    const absEnd = absStart + cm[0].length;
    const original = cm[0];
    const isMultiline = original.includes('\n');
    // Match the quote style the original block used (default single).
    const q = /"/.test(original) ? '"' : "'";

    let replacement;
    if (isMultiline) {
      const lines = keys.map(k => `${indent}  ${q}${k}${q}`).join(',\n');
      replacement = `classes: [\n${lines}\n${indent}]`;
    } else {
      replacement = `classes: [${keys.map(k => `${q}${k}${q}`).join(', ')}]`;
    }

    text = text.slice(0, absStart) + replacement + text.slice(absEnd);
    migrated.push(name);
  }

  fs.writeFileSync(file, text);
  return { migrated: migrated.length, missing };
}

const fieldResult = rewriteFile('data/drugs.js', fieldMap, '    ');
const homeResult = rewriteFile('data/home_meds.js', homeMap, '    ');

// Emit the registry as a JS object literal.
const registryOut =
  '// Auto-generated from drug_classes.json — canonical class keys → display names.\n' +
  'const DRUG_CLASSES = ' +
  JSON.stringify(registry, null, 2) +
  ';\n';
fs.writeFileSync(path.join(REPO, 'data/drug_classes.js'), registryOut);

console.log('drugs.js  — migrated:', fieldResult.migrated, '/ missing:', fieldResult.missing);
console.log('home_meds.js — migrated:', homeResult.migrated, '/ missing:', homeResult.missing);
console.log('data/drug_classes.js written (' + Object.keys(registry).length + ' keys)');
