# Drug Object Schema

Full reference for `data/drugs.js` entries.

## JS Object Template

```js
{
  id: "generic-name",           // lowercase, hyphenated
  summary: "",                  // One-liner for paramedics: what it is + when you reach for it
  genericName: "",
  tradeName: "",
  classes: [],                  // Array of strings

  // MOA — use ONE of the three formats below:
  moaBrief: "",                 // HTML string — use for most drugs
  moa: [],                      // Receptor array — only for receptor-based drugs (e.g. epinephrine)
  moaTiered: [],                // Dose-dependent drugs (e.g. dopamine) — see format below

  indications: [],
  contraindications: [
    { text: "" },
    { text: "", relative: true }  // relative: true when not an absolute CI
  ],
  doses: [
    {
      population: "Adult",        // WHO: "Adult", "Pediatric", "Elderly (≥65 yrs)", etc.
      indication: "Seizures",     // WHAT FOR: optional — only when dose varies by use case
      routes: [                   // Array of route-specific dosing
        {
          via: ["IV", "IO"],      // Array of route enums (see Route Enums below)
          amount: "5 mg",         // Number + unit ONLY — no admin instructions
          frequency: "May repeat every 5 min (max 10 mg total)",  // Repeat + max in one string (optional)
          notes: ["Slow push"]    // Route-specific admin notes
        }
      ],
      notes: []                   // General notes for this population/indication combo
    }
  ],
  onset: "",
  duration: "",
  adverseEffects: [],
  precautions: ""               // HTML string with spans
}
```

## Dose Structure: `doses` → `routes` → `via`

### `doses` — top-level array
Each object = one population + optional indication combo.

### `doses[].population` — WHO gets this dose
Only the age/weight group. Keep it clean.

Valid values:
- `"Adult"` — standard adult
- `"Adult (<65 yrs)"` — when age-split dosing exists
- `"Elderly (≥65 yrs)"` — when elderly dose is different
- `"Pediatric"` — standard peds
- `"Pediatric (>10 kg)"` / `"Pediatric (≤10 kg)"` — weight-split peds
- `"Neonatal"` — if needed

### `doses[].indication` — WHAT FOR (optional)
Only present when the drug has different doses for different conditions.

**Rule:** If no `indication` field, the dose applies to ALL indications for that population.
**Rule:** Err on the side of granularity. Multiple dose entries is fine if clinically accurate.

### `doses[].routes` — array of route objects
Each object = one route (or set of interchangeable routes) with its own dosing.

Every drug uses this array — single-route drugs just have one object.

### Route object fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `via` | `string[]` | Yes | Array of route enums |
| `amount` | `string` | Yes | Number + unit ONLY. No admin instructions. |
| `frequency` | `string` | No | Repeat interval + max dose in one descriptive string |
| `notes` | `string[]` | Yes | Route-specific admin notes (slow push, flush, dilution, etc.) |

### `amount` rules
✅ Good: `"5 mg"`, `"0.2 mg/kg"`, `"2.5 mg in 3 mL NS"`, `"1–2 L"`
❌ Bad: `"5 mg slow push"` — admin instruction belongs in notes
❌ Bad: `"5 mg, may repeat"` — repeat belongs in frequency
❌ Bad: `"5 mg (preferred)"` — recommendation belongs in notes

### `doses[].notes` — general notes (array)
Notes that apply to ALL routes for this population/indication combo. Avoids duplication across route objects.

## Route Enums

Valid values for the `via` array:

| Enum | Meaning |
|------|---------|
| `IV` | Intravenous push/bolus |
| `IO` | Intraosseous |
| `IM` | Intramuscular |
| `IN` | Intranasal |
| `SQ` | Subcutaneous |
| `SL` | Sublingual |
| `PO` | Oral |
| `BUC` | Buccal |
| `ET` | Endotracheal |
| `NEB` | Nebulized |
| `NGT` | Nasogastric tube |
| `IV drip` | Continuous IV infusion |
| `Inhaled` | Demand valve / mask |

## MOA Formats

### `moa` array — receptor-based (e.g. epinephrine)
```js
moa: [
  { receptor: "α-1", effect: "Vasoconstriction", type: "alpha" },
  { receptor: "β-1", effect: "↑ HR & contractility", type: "beta" },
  { receptor: "β-2", effect: "Bronchodilation", type: "beta" }
]
```

### `moaTiered` — dose-dependent (e.g. dopamine)
```js
moaTiered: [
  { tier: "Low",  range: "2–5 mcg/kg/min",  label: "Renal",       brief: "D1 receptors → vasodilation of renal and splanchnic vessels" },
  { tier: "Mod",  range: "5–10 mcg/kg/min", label: "Cardiac",     brief: '<span class="hl hl--beta">β-1</span> receptors → increases heart contractility and heart rate.' },
  { tier: "High", range: ">10 mcg/kg/min",  label: "Vasopressor", brief: '<span class="hl hl--alpha">α-1</span> receptors → widespread vasoconstriction → SVR and blood pressure rise.' }
]
```

### `moaBrief` — HTML string (most drugs)
```js
moaBrief: 'Blocks <span class="hl hl--beta">μ-opioid receptors</span> in the CNS <span class="moa-arrow">→</span> inhibits pain transmission <span class="moa-arrow">→</span> <strong>analgesia and sedation</strong>.'
```

## HTML Span Classes

| Class | Use | Color |
|-------|-----|-------|
| `hl hl--alpha` | Alpha receptor or vasoconstrictive effect | Red |
| `hl hl--beta` | Beta receptor or cardiac/vasodilatory effect | Blue |
| `hl hl--danger` | Critical warning, black box, life-threatening | Red |
| `hl hl--warn` | Caution, use carefully | Yellow/orange |
| `moa-arrow` | → arrow between MOA steps | Muted |

## review-notes.txt Format

Prepend new entries at top of file, below the header block:

```
DRUG NAME (Trade Name)
- ⚠️ Issue description (source if applicable)
- ➕ Added: field/info (reason)
- ✅ Card accurate — no significant changes
```
