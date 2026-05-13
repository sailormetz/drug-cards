// One-shot migration: replace polypharmacy:[...] arrays in data/home_meds.js
// with snake_case class keys from the conservative polypharmacy assignment file.
//
// Run: node scripts/migrate-polypharmacy.js

const fs = require('fs');
const path = require('path');
const os = require('os');

const SRC = path.join(os.homedir(), 'Downloads', 'home_meds_polypharmacy.conservative.json');
const REPO = path.resolve(__dirname, '..');

const assignments = JSON.parse(fs.readFileSync(SRC, 'utf8'));

// Validate every key resolves in the canonical registry.
const registryText = fs.readFileSync(path.join(REPO, 'data/drug_classes.js'), 'utf8');
const registry = JSON.parse(registryText.replace(/^[^{]*/, '').replace(/;\s*$/, ''));
const registryKeys = new Set(Object.keys(registry));
const bad = assignments.flatMap(e => e.polypharmacy.filter(k => !registryKeys.has(k)));
if (bad.length) {
  console.error('Unknown class keys:', bad);
  process.exit(1);
}

const polyMap = new Map();
for (const e of assignments) polyMap.set(e.id, e.polypharmacy);

const filePath = path.join(REPO, 'data/home_meds.js');
let text = fs.readFileSync(filePath, 'utf8');

// Quote-aware id match (defensive against apostrophes).
const idRe = /id:\s*(?:'([^']+)'|"([^"]+)")/g;
const positions = [];
let m;
while ((m = idRe.exec(text)) !== null) {
  positions.push({ id: m[1] || m[2], idx: m.index });
}

const migrated = [];
const missing = [];
// Walk in reverse so earlier offsets stay valid as we mutate.
for (let i = positions.length - 1; i >= 0; i--) {
  const { id, idx } = positions[i];
  const keys = polyMap.get(id);
  if (!keys) { missing.push(id); continue; }

  const polyRe = /polypharmacy:\s*\[([^\]]*)\]/;
  const slice = text.slice(idx);
  const pm = polyRe.exec(slice);
  if (!pm) { missing.push(`${id} (no polypharmacy block)`); continue; }

  const absStart = idx + pm.index;
  const absEnd = absStart + pm[0].length;
  const replacement = `polypharmacy: [${keys.map(k => `"${k}"`).join(', ')}]`;
  text = text.slice(0, absStart) + replacement + text.slice(absEnd);
  migrated.push(id);
}

fs.writeFileSync(filePath, text);
console.log('home_meds.js — migrated:', migrated.length, '/ missing:', missing);
