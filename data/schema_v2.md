# Drug Object Schema v2

Full reference for `data/drugs.js` entries.

**Source of truth.** This file defines the contract between data and front-end.
**Version:** 2.0 — rebuilt for NASEMSO-first data pipeline.

## Changes from v1

| Change | v1 | v2 |
|--------|----|----|
| Trade names | `tradeName: "string"` | `tradeNames: ["array"]` |
| Category | (none) | `category: ["array"]` |
| Source | (none) | `source: "string"` |
| Protocols | (none) | `protocols: ["array"]` |
| Frequency/max | Single `frequency` string | Split into `repeat` + `maxDose` |
| Population | Free text with qualifiers baked in | Enum `population` + optional `qualifier` |
| Formulation | Concentration in route `notes` | `formulation: "string"` on dose entry |
| Indication consistency | No rule | If any entry has `indication`, all must |
| No peds dose | `amount: "Not recommended in EMS"` | Omit the entry entirely |
| Precautions | Single HTML string | Array of HTML strings |
| MOA | Three mutually exclusive properties | Unified `moa: []` array with `target` metadata |

---

## JS Object Template

```js
{
  id: "generic-name",             // lowercase, hyphenated
  summary: "",                    // One-liner: what it is + when you reach for it
  genericName: "",
  tradeNames: [],                 // Array of trade name strings
  category: [],                   // Clinical categories — array (see Category Enums)
  classes: [],                    // Pharmacological classes
  source: "",                     // Primary data source (see Source Values)
  protocols: [],                  // NASEMSO guidelines referencing this drug (see Protocol Enums)

  moa: [],                          // Array of MOA entries (see MOA section below)

  indications: [],
  contraindications: [
    { text: "" },
    { text: "", relative: true }
  ],
  doses: [
    {
      population: "Adult",        // Enum (see Population Enums)
      qualifier: "",              // Optional — age/weight split (e.g. "<65 yrs", ">10 kg")
      indication: "",             // Optional — only when dose varies by use case
      formulation: "",            // Optional — vial/concentration (see Formulation below)
      routes: [
        {
          via: ["IV", "IO"],
          amount: "5 mg",
          repeat: "",             // How often to re-dose (optional)
          maxDose: "",            // Ceiling per encounter (optional)
          notes: []               // Route-specific admin notes
        }
      ],
      notes: []                   // General notes for this population/indication combo
    }
  ],
  onset: "",
  duration: "",
  adverseEffects: [],
  precautions: []                 // Array of HTML strings — rendered as list items
}
```

---

## Field Reference

### `id`
Lowercase, hyphenated generic name. Must be unique.
- ✅ `"epinephrine"`, `"calcium-chloride"`, `"lactated-ringers"`

### `summary`
One sentence. What it is + when a paramedic reaches for it. No HTML. Write like you're explaining it to a medic student — clinical but conversational.

Examples from current data:
- **Fentanyl:** `"A potent opioid analgesic used for rapid management of severe pain and procedural sedation; roughly 100x more potent than morphine by weight."`
- **Flumazenil:** `"A benzodiazepine antagonist used to reverse benzo-induced sedation and respiratory depression; short duration means resedation is common — watch your patient."`
- **Glucagon:** `"A hormone that rapidly raises blood glucose in hypoglycemia when IV access isn't available; also used as an antidote for beta-blocker and calcium channel blocker overdose."`
- **Droperidol:** `"A powerful antipsychotic and antiemetic used to sedate agitated patients and stop nausea/vomiting; carries an FDA black box warning for fatal heart rhythm problems."`
- **Hydralazine:** `"A direct arteriolar vasodilator used for hypertensive emergencies and acute heart failure; effective but unpredictable — causes reflex tachycardia, often paired with a beta-blocker."`

### `genericName`
Proper-case generic name as it appears on the drug label.

### `tradeNames`
Array of trade name strings. One entry per distinct brand.
- ✅ `["Adrenalin", "EpiPen"]`
- ✅ `["Proventil", "Ventolin", "ProAir"]`
- ✅ `["Narcan"]` — single-brand drugs still use an array
- If no trade name exists: `[]`

### `category`
Array of clinical groupings for front-end filtering. A drug appears under every category it belongs to.

#### Category Enums

| Value | Covers |
|-------|--------|
| `"Airway & Respiratory"` | Bronchodilators, oxygen, airway adjuncts |
| `"Analgesic"` | Opioid and non-opioid pain management |
| `"Cardiovascular"` | Antiarrhythmics, vasopressors, antihypertensives, nitrates, antiplatelet |
| `"Endocrine & Metabolic"` | Glucose management, steroids, electrolytes |
| `"Neurological"` | Anticonvulsants, sedatives, antipsychotics |
| `"OB/GYN"` | Drugs primarily used in obstetric emergencies |
| `"Resuscitation"` | Cardiac arrest drugs, post-ROSC agents |
| `"Toxicology"` | Antidotes, reversal agents, poisoning management |
| `"IV Fluids"` | Crystalloids, colloids |

**Rule:** Include every category that applies. List the primary use first. Front-end filters with `drug.category.includes(filter)`.

Examples:
- **Epinephrine:** `["Resuscitation", "Cardiovascular", "Airway & Respiratory"]`
- **Amiodarone:** `["Cardiovascular", "Resuscitation"]`
- **Magnesium Sulfate:** `["Cardiovascular", "OB/GYN", "Airway & Respiratory"]`
- **Ketamine:** `["Analgesic", "Neurological"]`
- **Naloxone:** `["Toxicology"]` — single-category drugs still use an array
- **Ondansetron:** `["Neurological"]`

### `classes`
Array of pharmacological class strings. These are the drug's formal classifications, not its use category.
- ✅ `["Sympathomimetic", "Catecholamine", "Vasopressor"]`

### `source`
Primary data source for this entry. Gives credibility and audit trail.

#### Source Values

| Value | When to use |
|-------|-------------|
| `"NASEMSO 2022 v3.0"` | Drug appears in NASEMSO guidelines (appendix + treatment sections) |
| `"StatPearls"` | Supplemental drug not in NASEMSO, sourced from StatPearls |
| `"AHA 2023"` | Data sourced from AHA guidelines |
| `"Mixed"` | Core data from NASEMSO, supplemented by other sources |

### `protocols`
Array of NASEMSO guideline names where this drug appears in a Treatment and Interventions section. Enables "where is this drug used?" lookups.

#### Protocol Enums

Use the NASEMSO guideline name. Common values:

| Value |
|-------|
| `"Anaphylaxis and Allergic Reaction"` |
| `"Agitated or Violent Patient/Behavioral Emergency"` |
| `"Bradycardia"` |
| `"Cardiac Arrest"` |
| `"Chest Pain/ACS/STEMI"` |
| `"Eclampsia/Pre-Eclampsia"` |
| `"Hypoglycemia"` |
| `"Hyperglycemia"` |
| `"Nausea-Vomiting"` |
| `"Pain Management"` |
| `"Respiratory Distress"` |
| `"Seizures"` |
| `"Shock"` |
| `"Tachycardia with a Pulse"` |
| `"Poisoning/Overdose Universal Care"` |
| `"Beta Blocker Poisoning/Overdose"` |
| `"Calcium Channel Blocker Poisoning/Overdose"` |
| `"Cyanide Exposure"` |
| `"Stimulant Poisoning/Overdose"` |
| `"Pediatric Respiratory Distress (Croup)"` |
| `"Pediatric Respiratory Distress (Bronchiolitis)"` |
| `"Neonatal Resuscitation"` |
| `"General Trauma Management"` |
| `"Head Injury"` |
| `"Crush Injury/Crush Syndrome"` |
| `"Burns"` |

Not exhaustive — add new protocols as needed, matching the NASEMSO guideline title exactly.

---

## Dose Structure

### `doses` — top-level array
Each object = one population + optional qualifier + optional indication.

### `doses[].population` — WHO gets this dose

#### Population Enums

| Value | Description |
|-------|-------------|
| `"Adult"` | Standard adult |
| `"Pediatric"` | Standard pediatric |
| `"Elderly"` | Geriatric (typically ≥65) |
| `"Neonatal"` | Neonatal / newborn |

**Rule:** Only use these four values. Age/weight splits go in `qualifier`.

### `doses[].qualifier` — optional refinement
Free text string for age or weight splits. Only present when the population needs subdivision.

- ✅ `qualifier: "<65 yrs"`
- ✅ `qualifier: ">10 kg"`
- ✅ `qualifier: "≤10 kg"`
- ✅ `qualifier: "6–12 yrs"`
- ✅ `qualifier: "≥20 kg"`
- ❌ Don't bake qualifiers into population: `"Pediatric (>10 kg)"` → use `population: "Pediatric", qualifier: ">10 kg"`

### `doses[].indication` — WHAT FOR (optional)
Only present when the drug has different doses for different conditions.

**Rule:** If no `indication` field, the dose applies to ALL indications for that population.

**Consistency rule:** If ANY dose entry on a drug has `indication`, then ALL entries on that drug must have it. Orphaned entries without `indication` won't appear under any pathology tab.

```js
// ✅ Good — all entries have indication
{ population: "Adult",     indication: "Seizures",  routes: [...] }
{ population: "Adult",     indication: "Agitation",  routes: [...] }
{ population: "Pediatric", indication: "Seizures",  routes: [...] }
{ population: "Pediatric", indication: "Agitation",  routes: [...] }

// ❌ Bad — peds entry has no indication, won't land under any tab
{ population: "Adult",     indication: "Seizures",  routes: [...] }
{ population: "Adult",     indication: "Agitation",  routes: [...] }
{ population: "Pediatric", routes: [...] }
```

**When NOT to use:** If the dose is identical across all the drug's indications, omit `indication` entirely. No tabs will render. Don't create redundant tabs that show the same numbers — it looks like a bug.

**Front-end behavior:**
- 0 unique indications → no tabs, flat dose list
- 2+ unique indications → pathology tabs; each tab shows all populations for that indication

Free text — not a strict enum. Use short clinical labels that match the drug's `indications[]` array where possible.

### `doses[].formulation` — WHICH vial or concentration (optional)
Only needed when a single drug comes in multiple concentrations that determine clinical use. Currently applies to epinephrine and dextrose.

```js
// Epinephrine
{ formulation: "1 mg/mL (1:1,000)",    indication: "Anaphylaxis",    ... }
{ formulation: "0.1 mg/mL (1:10,000)", indication: "Cardiac Arrest", ... }

// Dextrose
{ formulation: "D50W (50%)",  population: "Adult",     ... }
{ formulation: "D25W (25%)",  population: "Pediatric", qualifier: ">8 yrs", ... }
{ formulation: "D10W (10%)",  population: "Pediatric", ... }
```

**Front-end behavior:** Rendered as an inline badge on each dose row. This is safety information — NOT a tab dimension. Tabs are driven by `indication` only.

**When NOT to use:** If the drug comes in a single concentration (most drugs), omit entirely. Don't use empty strings.

Free text — include both the concentration and the common name.

### `doses[].routes` — array of route objects

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `via` | `string[]` | Yes | Array of route enums |
| `amount` | `string` | Yes | Number + unit ONLY |
| `repeat` | `string` | No | Re-dose interval and instructions |
| `maxDose` | `string` | No | Ceiling for this route/encounter |
| `notes` | `string[]` | Yes | Route-specific admin notes |

#### `amount` rules
✅ `"5 mg"`, `"0.2 mg/kg"`, `"2.5 mg in 3 mL NS"`, `"1–2 L"`, `"5–10 mcg/min"`
❌ `"5 mg slow push"` → admin instruction belongs in `notes`
❌ `"5 mg, may repeat"` → repeat info belongs in `repeat`
❌ `"Not recommended in EMS"` → omit the dose entry entirely

#### `repeat` examples
- `"q3–5 min"`
- `"q5–15 min PRN"`
- `"May repeat once after 15 min"`
- `"Repeat q5–10 min until secretions dry"`
- `"Single dose"` (when emphasizing no repeat)

#### `maxDose` examples
- `"3 mg total"`
- `"10 mg/dose"`
- `"300 mcg total"`
- `"3 mg/kg cumulative"`
- `"15 mg/kg/day"`

**Rule:** If there's no repeat or ceiling, omit the field entirely. Don't use empty strings.

### `doses[].notes` — general notes (array)
Notes that apply to ALL routes for this population/indication combo.

### Omitting populations — the "not available" rule
If a drug is not used for a population in EMS, **do not create a dose entry**. The front-end should display "Not indicated in prehospital setting" when no entry exists for a population.

### Front-end rendering logic

```js
function renderDoses(drug, container) {
  // 1. Derive tabs from unique indications in the data
  const indications = [...new Set(
    drug.doses.map(d => d.indication).filter(Boolean)
  )];

  // 2. Tabs only appear when multiple indications exist
  if (indications.length > 1) {
    renderTabs(indications, container);
  }

  // 3. Filter doses by active tab (or show all if no tabs)
  const activeInd = indications[activeTabIndex] || null;
  const filtered = activeInd
    ? drug.doses.filter(d => d.indication === activeInd)
    : drug.doses;

  // 4. Group by population within the active indication
  const byPop = groupBy(filtered, d => d.population);

  Object.entries(byPop).forEach(([pop, entries]) => {
    renderPopulationHeader(pop, container);

    entries.forEach(entry => {
      entry.routes.forEach(route => {
        // formulation renders as inline badge if present
        renderDoseRow(route, entry.formulation, container);
      });
    });
  });
}
```

---

## Route Enums

| Enum | Meaning |
|------|---------|
| `IV` | Intravenous push/bolus |
| `IO` | Intraosseous |
| `IM` | Intramuscular |
| `IN` | Intranasal |
| `SQ` | Subcutaneous |
| `SL` | Sublingual |
| `PO` | Oral |
| `PR` | Rectal |
| `BUC` | Buccal |
| `ET` | Endotracheal |
| `NEB` | Nebulized |
| `NGT` | Nasogastric tube |
| `IV drip` | Continuous IV infusion |
| `Inhaled` | Demand valve / mask |
| `Topical` | Applied to skin/wound |

---

## MOA Structure

Every drug has `moa: [...]` — an array of MOA entry objects.

The renderer checks `moa[0].tier` to decide layout:
- **`tier` exists** → dose-tiered layout (dopamine)
- **No `tier`, length > 1** → simultaneous multi-target layout (epinephrine, glucagon)
- **No `tier`, length = 1** → plain prose (fentanyl, naloxone, most drugs)

### MOA Entry Object

```js
{
  brief: "",      // Required — HTML string for card display (rendered via innerHTML)
  tier: "",       // Optional — only for dose-dependent drugs (see TIER enum)
  label: "",      // Optional — pairs with tier, free text (e.g. "Renal", "Cardiac")
  target: {       // Required — queryable metadata
    name: "",     // What the drug binds to / acts on
    action: "",   // How it acts on the target (see ACTION enum)
    result: "",   // Clinical effect for the patient
    system: "",   // Biological system (see SYSTEM enum)
    dose: ""      // Optional — only for dose-dependent drugs (e.g. "2–5 mcg/kg/min")
  }
}
```

### Action Enum

| Value | Meaning | Example |
|-------|---------|---------|
| `"agonist"` | Activates the receptor | Epinephrine → β-1 |
| `"antagonist"` | Blocks by competing for the receptor | Naloxone → μ-opioid |
| `"blocker"` | Blocks an ion channel or transporter | Amiodarone → K⁺ channels |
| `"enhancer"` | Potentiates existing activity | Midazolam → GABA-A |
| `"inhibitor"` | Inhibits an enzyme | Aspirin → COX |
| `"stimulator"` | Triggers a biological process | Glucagon → glycogenolysis |
| `"relaxant"` | Relaxes smooth muscle | Glucagon → GI smooth muscle |
| `"adsorbent"` | Physical binding | Activated charcoal → toxins |
| `"donor"` | Provides a substrate | Dextrose → glucose |
| `"stabilizer"` | Stabilizes cell membranes | Calcium chloride → cardiac membranes |

### System Enum

| Value | Covers |
|-------|--------|
| `"adrenergic"` | α and β receptors — epi, dopamine, dobutamine, albuterol, labetalol, metoprolol |
| `"cholinergic"` | Muscarinic / nicotinic receptors — atropine, ipratropium |
| `"opioid"` | μ, κ, δ receptors — fentanyl, morphine, hydromorphone, naloxone |
| `"GABAergic"` | GABA-A receptors — midazolam, diazepam, lorazepam, flumazenil, etomidate |
| `"serotonergic"` | 5-HT receptors — ondansetron |
| `"dopaminergic"` | D1/D2 receptors — haloperidol, droperidol |
| `"glutamatergic"` | NMDA receptors — ketamine, nitrous oxide |
| `"ion-channel"` | Na⁺/K⁺/Ca²⁺ channels — amiodarone, lidocaine, diltiazem, nicardipine, magnesium |
| `"enzymatic"` | COX, PDE, other enzymes — aspirin, ketorolac, acetaminophen, nitroglycerin |
| `"metabolic"` | Glucose / glycogen pathways — dextrose, glucagon, oral glucose |
| `"inflammatory"` | Glucocorticoid receptors — methylprednisolone, dexamethasone |
| `"coagulation"` | Clotting cascade — heparin, aspirin (antiplatelet) |
| `"histaminergic"` | H1/H2 receptors — diphenhydramine, famotidine |
| `"other"` | Physical / chemical mechanisms — activated charcoal, hydroxocobalamin, sodium bicarb, mannitol |

### Tier Enum

| Value | Description |
|-------|-------------|
| `"Low"` | Lowest dose range |
| `"Mod"` | Moderate dose range |
| `"High"` | Highest dose range |

### MOA Examples

**Simple — single mechanism (most drugs):**
```js
moa: [
  {
    brief: 'Binds to <span class="hl hl--beta">μ-opioid receptors</span> in the CNS <span class="moa-arrow">→</span> increases K⁺ efflux and decreases Ca²⁺ influx <span class="moa-arrow">→</span> blocks neurotransmitter release (substance P) <span class="moa-arrow">→</span> <strong>potent analgesia and sedation</strong>.',
    target: {
      name: "μ-opioid receptors",
      action: "agonist",
      result: "Potent analgesia & sedation",
      system: "opioid"
    }
  }
]
```

**Multi-receptor, simultaneous (epinephrine):**
```js
moa: [
  {
    brief: '<span class="hl hl--alpha">α-1 receptors</span> on vascular smooth muscle <span class="moa-arrow">→</span> <strong>vasoconstriction</strong> and increased SVR.',
    target: { name: "α-1 receptors", action: "agonist", result: "Vasoconstriction, ↑ SVR", system: "adrenergic" }
  },
  {
    brief: '<span class="hl hl--beta">β-1 receptors</span> on the myocardium <span class="moa-arrow">→</span> <strong>increased heart rate and contractility</strong>.',
    target: { name: "β-1 receptors", action: "agonist", result: "↑ HR & contractility", system: "adrenergic" }
  },
  {
    brief: '<span class="hl hl--beta">β-2 receptors</span> on bronchial smooth muscle <span class="moa-arrow">→</span> <strong>bronchodilation</strong>.',
    target: { name: "β-2 receptors", action: "agonist", result: "Bronchodilation", system: "adrenergic" }
  }
]
```

**Dose-dependent tiers (dopamine):**
```js
moa: [
  {
    tier: "Low", label: "Renal",
    brief: '<span class="hl hl--beta">D1 receptors</span> <span class="moa-arrow">→</span> renal and splanchnic vasodilation <span class="moa-arrow">→</span> increases kidney blood flow',
    target: { name: "D1 receptors", action: "agonist", result: "↑ renal blood flow", system: "dopaminergic", dose: "2–5 mcg/kg/min" }
  },
  {
    tier: "Mod", label: "Cardiac",
    brief: '<span class="hl hl--beta">β-1 receptors</span> <span class="moa-arrow">→</span> increases heart contractility and heart rate. Cardiac output rises.',
    target: { name: "β-1 receptors", action: "agonist", result: "↑ cardiac output", system: "adrenergic", dose: "5–10 mcg/kg/min" }
  },
  {
    tier: "High", label: "Vasopressor",
    brief: '<span class="hl hl--alpha">α-1 receptors</span> <span class="moa-arrow">→</span> widespread vasoconstriction <span class="moa-arrow">→</span> SVR and blood pressure rise.',
    target: { name: "α-1 receptors", action: "agonist", result: "↑ SVR, ↑ BP", system: "adrenergic", dose: ">10 mcg/kg/min" }
  }
]
```

**Multi-pathway, different clinical uses (glucagon):**
```js
moa: [
  {
    brief: 'Stimulates <span class="hl hl--beta">glycogenolysis</span> in the liver <span class="moa-arrow">→</span> <strong>blood glucose rises within minutes</strong>. Requires adequate hepatic glycogen stores.',
    target: { name: "Hepatic glycogen stores", action: "stimulator", result: "Rapid ↑ blood glucose", system: "metabolic" }
  },
  {
    brief: 'Directly activates <span class="hl hl--beta">adenylyl cyclase</span> on cardiac myocytes <span class="moa-arrow">→</span> increases cAMP <strong>bypassing the β-receptor entirely</strong> <span class="moa-arrow">→</span> positive inotropic and chronotropic effects.',
    target: { name: "Adenylyl cyclase (cardiac)", action: "stimulator", result: "Positive inotropy & chronotropy", system: "adrenergic" }
  },
  {
    brief: 'Relaxes <span class="hl hl--beta">GI smooth muscle</span> <span class="moa-arrow">→</span> reduces LES tone <span class="moa-arrow">→</span> <strong>can relieve esophageal foreign body obstruction</strong>.',
    target: { name: "GI smooth muscle", action: "relaxant", result: "Relieves esophageal obstruction", system: "other" }
  }
]
```

**Physical mechanism (activated charcoal):**
```js
moa: [
  {
    brief: 'Highly porous charcoal <span class="moa-arrow">→</span> adsorbs toxins and drugs in the GI tract <span class="moa-arrow">→</span> <strong>prevents absorption into bloodstream</strong>. Does NOT bind iron, lithium, potassium, ethanol, caustics, or hydrocarbons.',
    target: { name: "Toxins / drugs in GI lumen", action: "adsorbent", result: "Prevents systemic absorption", system: "other" }
  }
]
```

---

## Contraindications

```js
contraindications: [
  { text: "Hypersensitivity" },
  { text: "Decompensated Heart Failure", relative: true }
]
```

- `text` — the contraindication statement
- `relative` — set to `true` for relative/controversial CIs. Omit (or `false`) for absolute CIs.

---

## Precautions

Array of HTML strings. Each string = one discrete precaution, rendered as a list item.

```js
precautions: [
  'Use caution in <span class="hl hl--warn">elderly</span> — increased sensitivity to hypotension.',
  '<span class="hl hl--danger">Do not mix with sodium bicarbonate</span> — forms insoluble precipitate.',
  'Have <strong>naloxone</strong> immediately available when administering opioids.',
  'Masks hypoglycemia symptoms (tachycardia, tremor) in diabetic patients — monitor BGL.'
]
```

**Rules:**
- One concern per string — don't combine multiple warnings
- Use HTML spans for emphasis (same classes as MOA)
- Order by severity: critical warnings first, clinical pearls last
- Keep each string concise — aim for 1–2 sentences max

---

## HTML Span Classes

| Class | Use | Color |
|-------|-----|-------|
| `hl hl--alpha` | Alpha receptor or vasoconstrictive effect | Red |
| `hl hl--beta` | Beta receptor or cardiac/vasodilatory effect | Blue |
| `hl hl--danger` | Critical warning, black box, life-threatening | Red |
| `hl hl--warn` | Caution, use carefully | Yellow/orange |
| `moa-arrow` | → arrow between MOA steps | Muted |

---

## Worked Example: Epinephrine

```js
{
  id: "epinephrine",
  summary: "The first-line drug for anaphylaxis and cardiac arrest — a potent sympathomimetic that rapidly reverses bronchoconstriction, vasodilation, and cardiovascular collapse.",
  genericName: "Epinephrine",
  tradeNames: ["Adrenalin", "EpiPen"],
  category: ["Resuscitation", "Cardiovascular", "Airway & Respiratory"],
  classes: ["Sympathomimetic", "Catecholamine", "Vasopressor"],
  source: "NASEMSO 2022 v3.0",
  protocols: [
    "Anaphylaxis and Allergic Reaction",
    "Cardiac Arrest",
    "Shock",
    "Respiratory Distress",
    "Pediatric Respiratory Distress (Croup)",
    "Neonatal Resuscitation"
  ],
  moa: [
    {
      brief: '<span class="hl hl--alpha">α-1 receptors</span> on vascular smooth muscle <span class="moa-arrow">→</span> <strong>vasoconstriction</strong> and increased SVR. Reverses vasodilation of anaphylaxis.',
      target: { name: "α-1 receptors", action: "agonist", result: "Vasoconstriction, ↑ SVR", system: "adrenergic" }
    },
    {
      brief: '<span class="hl hl--beta">β-1 receptors</span> on the myocardium <span class="moa-arrow">→</span> <strong>increased heart rate and contractility</strong>. Increases cardiac output.',
      target: { name: "β-1 receptors", action: "agonist", result: "↑ HR & contractility", system: "adrenergic" }
    },
    {
      brief: '<span class="hl hl--beta">β-2 receptors</span> on bronchial smooth muscle <span class="moa-arrow">→</span> <strong>bronchodilation</strong>. Reverses bronchoconstriction in anaphylaxis.',
      target: { name: "β-2 receptors", action: "agonist", result: "Bronchodilation", system: "adrenergic" }
    }
  ],
  indications: [
    "Anaphylaxis",
    "Cardiac Arrest",
    "Severe Allergic Reaction",
    "Shock (vasopressor)",
    "Refractory Bronchospasm"
  ],
  contraindications: [
    { text: "Hypersensitivity" },
    { text: "Coronary insufficiency", relative: true },
    { text: "Uncontrolled hypertension", relative: true }
  ],
  doses: [
    {
      population: "Adult",
      indication: "Anaphylaxis",
      formulation: "1 mg/mL (1:1,000)",
      routes: [
        {
          via: ["IM"],
          amount: "0.3 mg",
          repeat: "q5–15 min PRN",
          notes: ["Anterolateral thigh"]
        }
      ],
      notes: []
    },
    {
      population: "Adult",
      indication: "Cardiac Arrest",
      formulation: "0.1 mg/mL (1:10,000)",
      routes: [
        {
          via: ["IV", "IO"],
          amount: "1 mg",
          repeat: "q3–5 min",
          notes: ["Rapid push + flush"]
        }
      ],
      notes: ["Prioritize early administration for non-shockable rhythms"]
    },
    {
      population: "Adult",
      indication: "Shock",
      formulation: "0.1 mg/mL (1:10,000)",
      routes: [
        {
          via: ["IV drip"],
          amount: "0.05–0.3 mcg/kg/min",
          notes: ["Titrate to MAP ≥65 mmHg"]
        }
      ],
      notes: []
    },
    {
      population: "Pediatric",
      qualifier: "<25 kg",
      indication: "Anaphylaxis",
      formulation: "1 mg/mL (1:1,000)",
      routes: [
        {
          via: ["IM"],
          amount: "0.15 mg",
          repeat: "q5–15 min PRN",
          notes: ["Anterolateral thigh"]
        }
      ],
      notes: []
    },
    {
      population: "Pediatric",
      indication: "Cardiac Arrest",
      formulation: "0.1 mg/mL (1:10,000)",
      routes: [
        {
          via: ["IV", "IO"],
          amount: "0.01 mg/kg",
          maxDose: "1 mg/dose",
          repeat: "q3–5 min",
          notes: []
        }
      ],
      notes: []
    },
    {
      population: "Pediatric",
      indication: "Shock",
      formulation: "0.1 mg/mL (1:10,000)",
      routes: [
        {
          via: ["IV drip"],
          amount: "0.05–0.3 mcg/kg/min",
          notes: ["Titrate to physiologic targets"]
        }
      ],
      notes: []
    }
  ],
  onset: "1–2 min (IM); immediate (IV)",
  duration: "5–15 min",
  adverseEffects: [
    "Tachycardia",
    "Hypertension",
    "Dysrhythmias",
    "Anxiety / Tremor",
    "Pallor / Headache",
    "Angina"
  ],
  precautions: [
    'Use caution in <span class="hl hl--warn">elderly</span>, known <span class="hl hl--warn">cardiac disease</span>, <span class="hl hl--warn">hypertension</span>, and <span class="hl hl--warn">diabetes</span>.',
    'May precipitate angina or MI in susceptible patients.',
    '<span class="hl hl--danger">No contraindications in anaphylaxis or cardiac arrest</span> — benefits always outweigh risks.',
    'IM is the correct route for anaphylaxis — IV push epinephrine in a patient with a pulse risks fatal arrhythmia.'
  ]
}
```

---

## review-notes.txt Format

Prepend new entries at top of file, below the header block:

```
DRUG NAME (Trade Name)
- ⚠️ Issue description (source if applicable)
- ➕ Added: field/info (reason)
- ✅ Verified against NASEMSO — no changes needed
```
