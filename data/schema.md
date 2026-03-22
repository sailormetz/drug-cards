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
      population: "Adult",        // WHO: "Adult", "Pediatric", "Elderly (≥65 yrs)", "Adult (<65 yrs)", "Pediatric (>10 kg)", etc.
      indication: "Seizures",     // WHAT FOR: optional — only when dose varies by use case
      amount: "",                 // DOSE + ROUTE only — no titration guidance, no repeat intervals
      notes: []                   // Titration, repeat intervals, max doses, special instructions go here
    }
  ],
  onset: "",
  duration: "",
  adverseEffects: [],
  precautions: ""               // HTML string with spans
}
```

## Dose Field Rules

### `population` — WHO gets this dose
Only the age/weight group. Keep it clean.

Valid values:
- `"Adult"` — standard adult
- `"Adult (<65 yrs)"` — when age-split dosing exists
- `"Elderly (≥65 yrs)"` — when elderly dose is different
- `"Pediatric"` — standard peds
- `"Pediatric (>10 kg)"` / `"Pediatric (≤10 kg)"` — weight-split peds
- `"Neonatal"` — if needed

### `indication` — WHAT FOR (optional)
Only present when the drug has different doses for different conditions.

Examples:
- `"Seizures"`, `"Procedural Sedation / Agitation"` (midazolam)
- `"Cardiac Arrest (VF / pulseless VT)"`, `"Stable Wide-Complex VT"` (amiodarone)
- `"Bradycardia"`, `"Organophosphate / Nerve Agent"` (atropine)
- `"Hypoglycemia"`, `"CCB/BB Overdose"` (glucagon)
- `"Torsades de Pointes (with pulse)"`, `"Eclampsia Seizures"`, `"Status Asthmaticus"` (magnesium)
- `"Fluid Resuscitation"`, `"Maintenance"` (LR)
- `"Sublingual"`, `"IV Drip"` (nitroglycerin — route-based split)

**Rule:** If no `indication` field is present, the dose applies to ALL indications for that population.

**Rule:** Err on the side of granularity. 5+ dose entries is fine if that's what's clinically accurate.

### `amount` — DOSE + ROUTE only
The amount field contains ONLY the dose and route of administration. Nothing else.

✅ Good: `"5 mg IV slow push over 2 min"`
✅ Good: `"0.4 mg SL tablet or spray"`
✅ Good: `"5 mg/hr IV drip"`

❌ Bad: `"5 mg/hr IV drip, titrate by 2.5 mg/hr every 5–15 min"` — titration is a note
❌ Bad: `"0.4–2 mg IV/IO/IM/IN, titrate to respiratory effort"` — guidance is a note
❌ Bad: `"0.4 mg SL tablet or spray, repeat every 3–5 min"` — repeat interval is a note
❌ Bad: `"5–10 mg IM (preferred) OR 0.2 mg/kg IN"` — "(preferred)" is a recommendation

### `notes` — everything else
Titration guidance, repeat intervals, max doses, special instructions, clinical pearls.

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
