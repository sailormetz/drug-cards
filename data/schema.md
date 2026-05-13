# Drug Object Schema

Full reference for `data/drugs.js` entries.

**Source of truth.** This file defines the contract between data and front-end.

---

## EMS Scope

Every field is filtered through one lens: **a paramedic on a prehospital call**.

**Include:**
- Indications a paramedic would treat in the field
- Single-encounter prehospital doses only — no multi-day regimens, no drips requiring lab monitoring
- Adverse effects observable within the prehospital window
- CIs and precautions clinically relevant to the field

**Exclude:**
- Hospital maintenance dosing or discharge prescriptions
- Indications specific to ICU, OR, or inpatient care
- Dosing that requires real-time lab values to titrate safely

> **When in doubt:** Would a paramedic give this, at this dose, for this reason, on a call? If no — leave it out.

---

## Data Sources

Every drug entry is verified against authoritative sources before being committed. Use sources in this order:

**1. Primary (always check first)**
- **NASEMSO EMS Pharmacology Reference** (`references/NASEMSO-pharmacology-reference.md`) — the curated prehospital pharmacology reference derived from NASEMSO 2022 v3.0. Check here first for indications, doses, CIs, and MOA.

**2. Secondary (fill gaps NASEMSO doesn't cover)**
- **AHA ACLS/PALS Guidelines** — gold standard for cardiac arrest, arrhythmia, and resuscitation dosing. Most recent major update 2020, focused updates 2023 and 2025.
- **StatPearls** (statpearls.com) — peer-reviewed, continuously updated. Good general clinical reference.
- **DailyMed** (dailymed.nlm.nih.gov) — FDA official drug labeling. Best source for adverse effects, exact formulations, pregnancy warnings, and pharmacokinetics.
- **NAEMSP Position Statements** — high-quality, peer-reviewed papers on specific prehospital topics (ketamine for agitation, prehospital blood products, etc.).
- **ITLS / PHTLS textbooks** — trauma-related pharmacology context. Less granular on dosing.
- **Lexicomp / Epocrates** — excellent for onset/duration, drug interactions, and renal/hepatic dosing adjustments.

**Rule:** NASEMSO pharmacology reference is always checked first. All other sources are secondary and may be consulted in any order to fill gaps.

---

## JS Object Template

```js
{
  id: "generic-name",             // lowercase, hyphenated
  summary: "",                    // One-liner: what it is + when you reach for it
  genericName: "",
  tradeNames: [],                 // Array of trade name strings
  category: [],                   // Clinical categories — array (see Category Enums)
  classes: [],                    // Pharmacological class keys (snake_case, from drug_classes.js)
  source: "",                     // Primary data source (see Source Values)
  moa: [],                        // Array of MOA entries (see MOA section below)

  indications: [                  // Array of indication objects (see Indications section)
    {
      name: "",                   // Clinical condition — tab label
      notes: [],                  // Indication-wide notes — apply to all doses for this indication
      doses: [                    // Dose entries owned by this indication
        {
          population: "Adult",    // Enum (see Population Enums)
          // qualifier: "",       // Optional — age/weight split (e.g. "<25 kg"). Omit if not needed.
          // formulation: "",     // Optional — vial/concentration. Omit if single concentration.
          routes: [
            {
              via: ["IV", "IO"],
              amount: "5 mg",
              onset: "",          // Time to clinical effect — route-specific
              duration: "",       // Duration of clinical effect — route-specific
              // repeat: "",      // Optional — omit if not repeatable
              // maxDose: "",     // Optional — omit if no ceiling
              notes: []           // Route-specific admin notes (keep brief)
            }
          ],
          notes: []               // General notes for this population entry
        }
      ]
    },
    { name: "", sameDoseAs: "" }  // Pointer — shares another indication's dosing
  ],
  contraindications: [
    { text: "" },
    { text: "", relative: true }
  ],
  adverseEffects: [],            // Array of plain text strings — no HTML
  precautions: []                // Array of HTML strings — rendered as list items
}
```

---

## Field Reference

### `id`
Lowercase, hyphenated generic name. Must be unique.

**Do:**
- `"epinephrine"`, `"calcium-chloride"`, `"lactated-ringers"`

### `summary`
One to two sentences. What it is + when a paramedic reaches for it. No HTML. Clinical and direct: states what the drug is and why you reach for it without editorializing or overselling. No figurative language, no hype words.

- **Fentanyl:** `"A synthetic opioid analgesic used for severe pain and procedural sedation. Roughly 100 times more potent than morphine by weight."`
- **Flumazenil:** `"A benzodiazepine antagonist used to reverse benzo-induced sedation and respiratory depression. Short duration means resedation is common."`
- **Glucagon:** `"A hormone that raises blood glucose in hypoglycemia when IV access is not available. Also used as an antidote for beta-blocker and calcium channel blocker overdose."`
- **Droperidol:** `"An antipsychotic and antiemetic used for acute agitation and nausea. Carries an FDA black box warning for QT prolongation and fatal dysrhythmias."`
- **Hydralazine:** `"A direct arteriolar vasodilator used for hypertensive emergencies and acute heart failure. Causes reflex tachycardia, often paired with a beta-blocker."`

### `genericName`
Proper-case generic name as it appears on the drug label.

### `tradeNames`
Array of trade name strings. One entry per distinct brand.

**Do:**
- `["Adrenalin", "EpiPen"]`
- `["Proventil", "Ventolin", "ProAir"]`
- `["Narcan"]` — single-brand drugs still use an array
- If no trade name exists: `[]`

### `category`
Array of clinical groupings for front-end filtering. A drug appears under every category it belongs to.

Design rule: Categories describe *clinical scenarios on a call* — not pharmacological classes. If a category name also appears in classes, it belongs in classes only.

### Category Enums

| Value | Definition |
|-------|------------|
| `"Airway & Respiratory"` | Drugs used to open, maintain, or protect the airway, or treat respiratory distress. Includes bronchodilators, supplemental oxygen, nebulized agents, and neuromuscular blockers used for intubation. |
| `"Allergic & Immune"` | Drugs used to treat allergic reactions and immune-mediated responses short of anaphylaxis. Includes H1 and H2 blockers and corticosteroids given for allergic indications. Does not include epinephrine for anaphylaxis (that's Resuscitation). |
| `"Cardiovascular"` | Drugs used to manage heart rate, rhythm, blood pressure, or cardiac output in patients with a pulse. Includes antiarrhythmics, rate controllers, vasopressors outside of arrest, antihypertensives, nitrates, antiplatelet agents, inotropes, and diuretics. |
| `"Endocrine & Metabolic"` | Drugs that correct metabolic derangements in the field. Includes glucose replacement, electrolyte correction, cofactors like thiamine, and acid-base agents like sodium bicarbonate when given for a metabolic indication. |
| `"IV Fluids"` | Crystalloid and colloid solutions administered for volume resuscitation, medication dilution, or maintenance access. |
| `"Nausea & Vomiting"` | Drugs given primarily to treat or prevent nausea and vomiting in the field. A drug belongs here when nausea/vomiting is the clinical reason it's being administered — not when antiemesis is a secondary pharmacological property. |
| `"Neurological"` | Drugs used to manage seizures, acute psychosis, or behavioral emergencies. Includes anticonvulsants and antipsychotics when used for a neurological or behavioral indication. Does not include the same drugs when used purely for procedural sedation (that's Sedation & Anesthesia). |
| `"OB/GYN"` | Drugs used in obstetric and gynecological emergencies. Includes tocolytics, uterotonics, and eclampsia management. A drug belongs here when the clinical indication is pregnancy- or delivery-specific. |
| `"Pain Management"` | Drugs administered to treat pain in the prehospital setting. Includes opioids, non-opioids, dissociatives, and local anesthetics when the clinical reason is analgesia. |
| `"Resuscitation"` | Drugs used during cardiac arrest or in the immediate post-ROSC period. A drug belongs here when it's being given as part of ACLS/PALS arrest algorithms or post-arrest stabilization — not simply because it can support blood pressure. |
| `"Sedation & Anesthesia"` | Drugs used for procedural sedation, RSI induction, or neuromuscular blockade. Includes induction agents, dissociatives, benzodiazepines, and paralytics when the clinical reason is facilitating a procedure — not seizure control or behavioral management. |
| `"Toxicology"` | Drugs used to treat poisoning, overdose, or toxic exposure. Includes specific antidotes, reversal agents, and decontamination agents. A drug belongs here when the indication is reversing or counteracting a toxin. |
| `"Trauma & Hemorrhage"` | Drugs used to control bleeding or support hemostasis in trauma. Includes antifibrinolytics, procoagulant reversal agents, and topical/nasal vasoconstrictors given for hemorrhage control. |

**Rule:** Include every category that applies. List the primary use first. Front-end filters with `drug.category.includes(filter)`.

**Note:** `category` is a coarse clinical filter maintained by the author — it is NOT derived from `indications[].name`. Categories group drugs by *call type* (e.g. "Cardiovascular"), while indications list specific conditions (e.g. "Cardiac Arrest"). They will overlap conceptually but are maintained independently.

- **Epinephrine:** `["Resuscitation", "Cardiovascular", "Airway & Respiratory"]`
- **Amiodarone:** `["Cardiovascular", "Resuscitation"]`
- **Magnesium Sulfate:** `["Cardiovascular", "OB/GYN", "Airway & Respiratory"]`
- **Ketamine:** `["Pain Management", "Neurological", "Sedation & Anesthesia"]`
- **Naloxone:** `["Toxicology"]` — single-category drugs still use an array
- **Ondansetron:** `["Nausea & Vomiting"]`
- **Tranexamic Acid:** `["Trauma & Hemorrhage"]`
- **Droperidol:** `["Neurological", "Nausea & Vomiting", "Sedation & Anesthesia"]`

### `classes`
Array of snake_case class keys referencing `data/drug_classes.js`. These are the drug's formal pharmacological classifications, not its use category.

The canonical list of valid keys and their display names lives in `data/drug_classes.js` (`DRUG_CLASSES` object). Always use keys from that file. If a new class is needed, add it to `drug_classes.js` first, then reference the key here.

**Examples:**
- **Epinephrine:** `["sympathomimetic", "catecholamine", "vasopressor", "inotrope", "chronotrope", "bronchodilator", "alpha1_agonist", "beta1_agonist", "beta2_agonist"]`
- **Diltiazem:** `["antiarrhythmic", "calcium_channel_blocker", "antihypertensive"]`
- **Naloxone:** `["opioid_antagonist", "antidote"]`
- **Albuterol:** `["bronchodilator", "beta2_agonist", "sympathomimetic"]`
- **Magnesium Sulfate:** `["electrolyte", "antiarrhythmic", "anticonvulsant", "bronchodilator", "tocolytic"]`
- **Aspirin:** `["nsaid", "antiplatelet", "analgesic", "antipyretic"]`
- **Atropine:** `["anticholinergic"]`
- **Ketamine:** `["dissociative_anesthetic", "analgesic", "sedative", "bronchodilator", "sympathomimetic"]`
- **Droperidol:** `["typical_antipsychotic", "antiemetic", "butyrophenone", "sedative"]`

**Key format:** All lowercase, words separated by underscores (e.g. `"calcium_channel_blocker"`, `"beta2_agonist"`). The front-end resolves display names via `DRUG_CLASSES[key]`.

### `source`
Primary data source for this entry. Gives credibility and audit trail.

### Source Values

| Value | When to use |
|-------|-------------|
| `"NASEMSO 2022 v3.0"` | Data sourced from NASEMSO pharmacology reference |
| `"AHA 2020/2023"` | Data sourced from AHA ACLS/PALS guidelines |
| `"StatPearls"` | Supplemental data from StatPearls |
| `"DailyMed"` | Data from FDA official drug labeling |
| `"NAEMSP"` | Data from NAEMSP position statement |
| `"Mixed"` | Core from NASEMSO, supplemented by other sources |

---

## Indications & Dosing

Indications **own** their doses. Each indication object either contains its own `doses` array or points to a sibling indication via `sameDoseAs`.

### Top-Level Shape

```js
indications: [
  {
    name: "Anaphylaxis",
    notes: [],
    doses: [ /* dose entries */ ]
  },
  {
    name: "Cardiac Arrest",
    notes: ["All doses assume refractory VF/pVT after initial defib attempts"],
    doses: [ /* dose entries */ ]
  },
  {
    name: "Severe Allergic Reaction",
    sameDoseAs: "Anaphylaxis"
  }
]
```

`indications` is an array of indication objects. Each object is one of two types:

| Type | Shape | Meaning |
|------|-------|---------|
| **Dose-owning** | `{ name, notes, doses }` | This indication has its own unique dosing |
| **Pointer** | `{ name, sameDoseAs }` | This indication uses another indication's dosing |

Every drug has at least one dose-owning indication. Pointer indications are optional.

---

## Indication Object

### `name`

| | |
|---|---|
| **Type** | `string` |
| **Required** | Yes |
| **Unique** | Yes — no two indications on the same drug may share a name |

Short clinical label for the indication. This string appears on the card's indication list and, if the indication owns doses, as a tab label.

**Ordering:** List the most common or life-threatening EMS use first. Array order determines tab order on the front end.

**Style:** Use the clinical condition name a paramedic would recognize. Capitalize each word. Keep it concise. Don't append mechanism suffixes like "/ Reversal".

**Do:**
- `"Anaphylaxis"`, `"Cardiac Arrest"`, `"Acute Pain (Subdissociative)"`
- `"Torsades de Pointes"`, `"Eclampsia / Pre-eclampsia"`, `"Croup / Bronchospasm"`
- `"Opioid Overdose"`, `"CCB/BB Overdose"`

**Don't:**
- `"For treatment of anaphylaxis"` — not a label
- `"anaphylaxis"` — capitalize
- `"Opioid Overdose / Reversal"` — drop the mechanism suffix

### `sameDoseAs`

| | |
|---|---|
| **Type** | `string` |
| **Required** | No — only for pointer indications |
| **Constraint** | Must exactly match the `name` of a dose-owning sibling indication on the same drug |

When present, tells the student: "this condition uses the same dose as [that other indication]." The front end resolves the pointer and navigates to the referenced indication's dose tab.

- `sameDoseAs` and `doses` are **mutually exclusive**. An indication has one or the other, never both, never neither.
- The referenced name must belong to a sibling indication **on the same drug** that has a `doses` array.
- If the dose differs at all (different amount, different route, different max) — create a separate dose-owning indication instead.

**When to use:** The drug is indicated for a condition, but the dose is identical to another condition's dose. Instead of duplicating dose entries with the same numbers, use a pointer.

**Do:**
```js
// Correct — Severe Allergic Reaction uses Anaphylaxis dosing
{ name: "Severe Allergic Reaction", sameDoseAs: "Anaphylaxis" }
```

**Don't:**
```js
// Wrong — "Allergic Reaction" doesn't match any sibling name exactly
{ name: "Severe Allergic Reaction", sameDoseAs: "Allergic Reaction" }

// Wrong — has both doses and sameDoseAs
{ name: "Severe Allergic Reaction", sameDoseAs: "Anaphylaxis", doses: [...] }
```

### `notes` (indication)

| | |
|---|---|
| **Type** | `string[]` |
| **Required** | Yes (use `[]` if empty) |

Notes that apply to **all doses** under this indication, regardless of population or route. Use for clinical context, protocol guidance, or safety reminders that are tied to the indication itself — not to how a specific population is dosed or how a specific route is administered.

**Keep notes brief.** Same rules as dose-entry and route notes: one short sentence per note, protocol-sidebar style.

**Do:**
- `["Give early — do not delay for IV access"]`
- `["All doses assume refractory VF/pVT after initial defib attempts"]`
- `["Monitor capnography throughout"]`
- `[]` — no notes

**Don't:**
- Notes that only apply to one population → put on that dose entry's `notes`
- Notes about a specific route of administration → put on the route's `notes`

### `doses`

| | |
|---|---|
| **Type** | `Array<DoseEntry>` |
| **Required** | Yes, unless `sameDoseAs` is present |
| **Min length** | 1 |

Array of dose entry objects for this indication. Each entry represents one population (+ optional qualifier) and contains the routes, amounts, and timing for that group.

---

## Dose Entry Object

Each dose entry answers: **who gets this dose, what do they get, and how is it administered?**

```js
{
  population: "Adult",           // Required — enum
  qualifier: "<25 kg",           // Optional — age/weight refinement
  formulation: "1 mg/mL (1:1,000)", // Optional — vial/concentration
  routes: [                      // Required — at least one route
    {
      via: ["IM"],
      amount: "0.3 mg",
      onset: "3–5 min",
      duration: "5–15 min",
      repeat: "q5–15 min PRN",
      notes: ["Anterolateral thigh"]
    }
  ],
  notes: []                      // Required — general notes for this entry
}
```

### `population`

| | |
|---|---|
| **Type** | `string` (enum) |
| **Required** | Yes |

Who gets this dose.

| Value | Description |
|-------|-------------|
| `"Adult"` | Standard adult |
| `"Pediatric"` | Standard pediatric |
| `"Geriatric"` | Geriatric (typically ≥65) |
| `"Neonatal"` | Neonatal / newborn |

**Rule:** Only use these four values. Age/weight splits go in `qualifier`. Never bake qualifiers into population.

**Don't:**
- `"Pediatric (>10 kg)"` → use `population: "Pediatric"` + `qualifier: ">10 kg"`

**Omitting populations:** If a drug is not used for a population in EMS, do not create a dose entry. The front end displays "Not indicated in prehospital setting" when no entry exists.

### `qualifier`

| | |
|---|---|
| **Type** | `string` |
| **Required** | No — only when the population needs subdivision |

Free text string for age or weight splits within a population.

**Do:**
- `"<25 kg"`, `">8 yrs"`, `"≤10 kg"`, `"6–12 yrs"`, `"≥20 kg"`, `"<65 yrs"`

**Don't:**
- Don't use if the population has no splits — omit the field entirely

**When multiple qualifiers exist for the same population under the same indication**, create separate dose entry objects:

```js
// Dextrose — Hypoglycemia — two pediatric splits
{
  name: "Hypoglycemia",
  doses: [
    { population: "Adult", ... },
    { population: "Pediatric", qualifier: ">8 yrs", formulation: "D25W (25%)", ... },
    { population: "Pediatric", qualifier: "≤8 yrs", formulation: "D10W (10%)", ... },
    { population: "Neonatal", formulation: "D10W (10%)", ... }
  ]
}
```

### `formulation`

| | |
|---|---|
| **Type** | `string` |
| **Required** | No — only when a drug has multiple concentrations that determine clinical use |

Identifies which vial or concentration to use. This is **safety information** — it tells the provider which preparation to grab.

**Front-end behavior:** Rendered as an inline badge on the dose entry. Not a tab dimension.

**When to use:** The drug comes in multiple concentrations that map to different clinical situations. Currently applies to epinephrine and dextrose.

```js
// Epinephrine — different concentrations per indication
formulation: "1 mg/mL (1:1,000)"      // Anaphylaxis — IM
formulation: "0.1 mg/mL (1:10,000)"   // Cardiac arrest — IV

// Dextrose — different concentrations per population
formulation: "D10W (10%) preferred"    // Adult
formulation: "D25W (25%)"             // Pediatric >8 yrs
formulation: "D10W (10%)"             // Pediatric ≤8 yrs, Neonatal
```

**When NOT to use:** If the drug comes in a single concentration (most drugs), omit entirely. Don't use empty strings.

Free text — include both the concentration and the common name.

### `routes`

| | |
|---|---|
| **Type** | `Array<RouteObject>` |
| **Required** | Yes |
| **Min length** | 1 |

Array of route objects. Each route object describes one way to administer the drug for this population.

### `notes` (dose entry)

| | |
|---|---|
| **Type** | `string[]` |
| **Required** | Yes (use `[]` if empty) |

General notes that apply to **all routes** for this dose entry. Protocol references, clinical pearls, safety reminders that aren't route-specific.

**Keep notes brief.** One short sentence per note. Think protocol sidebar, not paragraph. Front-end renders these in a compact space — long notes crowd the card and compete with the dose data for attention.

**Do:**
- `["Prioritize early administration for non-shockable rhythms"]`
- `["IM/IN preferred if IV not already established"]`
- `["Do NOT use D50 in pediatric patients"]`
- `[]` — no notes

**Don't:**
- `["NASEMSO: IV placement is not necessary for treatment of seizures - IM/IN routes are preferred over IV or IO if not already established"]` — too long; trim to the actionable point
- `["Subdissociative ketamine provides potent analgesia WITHOUT respiratory depression - a key advantage over opioids, especially in trauma patients where hemodynamic stability matters"]` — clinical rationale this long belongs in `precautions`

---

## Route Object

Each route object answers: **by what route, how much, how fast does it work, and can you repeat it?**

```js
{
  via: ["IV", "IO"],           // Required — route enum(s)
  amount: "1 mg",              // Required — dose amount
  onset: "1–2 min",            // Required — time to clinical effect
  duration: "30–90 min",       // Required — duration of effect
  repeat: "q2–3 min PRN",     // Optional — redose instructions
  maxDose: "10 mg total",     // Optional — ceiling
  notes: [                     // Required — route-specific admin notes
    "Titrate to respiratory effort"
  ]
}
```

### `via`

| | |
|---|---|
| **Type** | `string[]` (array of route enums) |
| **Required** | Yes |
| **Min length** | 1 |

Which route(s) this dose applies to. When multiple routes share identical dosing, onset, duration, and notes, group them in one `via` array (e.g. `["IV", "IO"]`). When routes differ on any field, create separate route objects.

### Route Enums

| Enum | Meaning |
|------|---------|
| `"IV"` | Intravenous push/bolus |
| `"IO"` | Intraosseous |
| `"IM"` | Intramuscular |
| `"IN"` | Intranasal |
| `"SQ"` | Subcutaneous |
| `"SL"` | Sublingual |
| `"PO"` | Oral |
| `"PR"` | Rectal |
| `"BUC"` | Buccal |
| `"ET"` | Endotracheal |
| `"NEB"` | Nebulized |
| `"NGT"` | Nasogastric tube |
| `"IV drip"` | Continuous IV infusion |
| `"Inhaled"` | Demand valve / mask |
| `"Topical"` | Applied to skin/wound |

**Grouping rule:** IV and IO almost always share identical pharmacokinetics and can be grouped as `["IV", "IO"]`. Other combinations should only be grouped if every field on the route object is truly identical. When in doubt, separate them.

### `amount`

| | |
|---|---|
| **Type** | `string` |
| **Required** | Yes |

The dose amount: number + unit only. No administration instructions, no repeat info.

**Do:**
- `"5 mg"`, `"0.2 mg/kg"`, `"2.5 mg in 3 mL NS"`, `"1–2 L"`, `"5–10 mcg/min"`

**Don't:**
- `"5 mg slow push"` — admin instruction belongs in `notes`
- `"5 mg, may repeat"` — repeat info belongs in `repeat`
- `"Not recommended in EMS"` — omit the route entirely

### `onset`

| | |
|---|---|
| **Type** | `string` |
| **Required** | Yes |

Time from administration to clinical effect **for this specific route**. Because onset is route-specific (IV is faster than IM which is faster than IN), it lives on the route object rather than the dose entry.

**Do:**
- `"1–2 min"` — IV/IO push
- `"3–5 min"` — IM
- `"5–15 min"` — IM slow absorption
- `"Immediate"` — IV in arrest
- `"<5 min"` — fast infusion
- `"15–30 min"` — PO

**When routes are grouped in one `via` array** (e.g. `["IV", "IO"]`), a single onset value applies to all of them. This is why IV and IO are safe to group — their onset is functionally identical.

### `duration`

| | |
|---|---|
| **Type** | `string` |
| **Required** | Yes |

Duration of clinical effect **for this specific route**. Kept on the route object alongside onset for consistency, even though duration is often the same across routes.

**Do:**
- `"5–15 min"`, `"30–60 min"`, `"4–6 hrs"`
- `"Duration of infusion"` — for continuous drips
- `"30–90 min"` — naloxone

When duration is identical across all routes on a dose entry, repeat the same value on each route object. A small amount of duplication is acceptable — it keeps the mental model uniform (everything about giving the drug a certain way lives in one place).

### `repeat`

| | |
|---|---|
| **Type** | `string` |
| **Required** | No — omit if not repeatable |

Redose interval and instructions.

**Do:**
- `"q3–5 min"`, `"q5–15 min PRN"`, `"May repeat once after 15 min"`
- `"Repeat q5–10 min until secretions dry"`
- `"Single dose"` — when explicitly emphasizing no repeat

**Don't:**
- Don't use empty strings — omit the field entirely if not repeatable

### `maxDose`

| | |
|---|---|
| **Type** | `string` |
| **Required** | No — omit if no ceiling |

Ceiling dose for this route or encounter.

**Do:**
- `"3 mg total"`, `"10 mg/dose"`, `"300 mcg total"`, `"3 mg/kg cumulative"`, `"25 g total field dose"`

**Don't:**
- Don't use empty strings — omit if no ceiling

### `notes` (route)

| | |
|---|---|
| **Type** | `string[]` |
| **Required** | Yes (use `[]` if empty) |

Route-specific administration notes. Short, actionable instructions about how to physically give the drug by this route.

**Keep notes brief.** Each note should be a short phrase or single sentence — the kind of thing you'd see on a protocol card, not a textbook paragraph. If it takes more than ~10 words to say, ask whether it can be tighter. These render in a compact UI alongside dose numbers; walls of text defeat the purpose.

**Do:**
- `["Anterolateral thigh"]`
- `["Slow push over 1–2 min"]`
- `["Use 5 mg/mL — divide between nares"]`
- `["Titrate to respiratory effort"]`
- `[]` — no notes

**Don't:**
- `["IM is the PREFERRED route when IV is not established - NASEMSO evidence supports midazolam IM as at least as safe and effective as IV lorazepam for prehospital seizure cessation"]` — too long, belongs in precautions
- `["Onset 3-5 min - IM is often the practical choice for combative patients where IV is impossible"]` — onset is already a field; rationale belongs elsewhere

**Rules:**
- One idea per note. Don't chain sentences with semicolons or dashes.
- Admin instructions only: site, rate, dilution, device, technique.
- Clinical rationale, protocol citations, and comparative statements belong in the dose entry's `notes` or in `precautions` — not here.
- If a note applies to all routes for the dose entry, put it on the dose entry's `notes` array instead.

---

## Notes Field Hierarchy

Three `notes` arrays exist within the indications structure, each scoped to a different level:

| Field | Scope | What belongs here |
|-------|-------|-------------------|
| `indications[].notes` | All doses for this indication | Clinical context or protocol guidance tied to the indication itself — applies regardless of who gets the dose or how it's given. Example: `"Give early — do not delay for IV access"` |
| `doses[].notes` | All routes for this population entry | Notes specific to dosing this population — safety reminders, clinical pearls, or protocol references that apply to every route within the entry. Example: `"Prioritize early administration for non-shockable rhythms"` |
| `routes[].notes` | One specific route of administration | Administration technique only — site, rate, dilution, device. Example: `"Anterolateral thigh"` |

**Push notes to the narrowest scope that fits.** If a note applies to all populations for an indication, it goes on the indication. If it applies to all routes for one population, it goes on the dose entry. If it only matters for one route, it goes on the route.

**Don't duplicate across levels.** A note should appear at exactly one level. If you're tempted to repeat a note on every dose entry, it probably belongs on the indication instead.

---

## Tab Rendering Logic

The front end derives tabs from the indication structure:

```js
// Indications that own doses → potential tabs
const tabIndications = drug.indications.filter(i => i.doses);

// Tabs only render when there are 2+ dose-owning indications
const hasTabs = tabIndications.length > 1;

// If hasTabs: render tab bar, each tab shows its indication's doses
// If !hasTabs: no tab bar, render the single indication's doses as a flat list
```

| Scenario | Tabs? | Example |
|----------|-------|---------|
| 1 dose-owning indication, 0 pointers | No | Naloxone (Opioid Overdose) |
| 1 dose-owning indication, 1+ pointers | No | — |
| 2+ dose-owning indications, 0 pointers | Yes | Midazolam (Seizures, Agitation) |
| 2+ dose-owning indications, 1+ pointers | Yes | Epinephrine (4 dose tabs, Severe Allergic Reaction → Anaphylaxis) |

### Indication list rendering

The card's full indication list always shows **every** indication, including pointers:

```js
drug.indications.forEach(ind => {
  renderIndicationBadge(ind.name);
  if (ind.sameDoseAs) {
    renderSharedDoseNote(ind.sameDoseAs);  // e.g. "→ see Anaphylaxis dosing"
  }
});
```

### Navigating from indication list to dose tab

When a user taps an indication name on the card:

```js
function handleIndicationTap(ind, drug, setActiveTab) {
  const target = ind.sameDoseAs || ind.name;
  const tabIndex = drug.indications
    .filter(i => i.doses)
    .findIndex(i => i.name === target);
  if (tabIndex >= 0) setActiveTab(tabIndex);
}
```

---

## Validation Rules

```js
function validateIndications(drug) {
  const names = drug.indications.map(i => i.name);
  const doseOwning = drug.indications.filter(i => i.doses);
  const pointers = drug.indications.filter(i => i.sameDoseAs);

  // Rule 1: Every indication must have either doses or sameDoseAs, not both, not neither
  drug.indications.forEach(ind => {
    const hasDoses = Array.isArray(ind.doses) && ind.doses.length > 0;
    const hasPointer = typeof ind.sameDoseAs === "string";
    if (hasDoses && hasPointer) {
      error(`${ind.name} has both doses and sameDoseAs — pick one`);
    }
    if (!hasDoses && !hasPointer) {
      error(`${ind.name} has neither doses nor sameDoseAs — data incomplete`);
    }
  });

  // Rule 2: Every sameDoseAs must point to a dose-owning sibling
  const doseOwningNames = new Set(doseOwning.map(i => i.name));
  pointers.forEach(ind => {
    if (!doseOwningNames.has(ind.sameDoseAs)) {
      error(`${ind.name} sameDoseAs "${ind.sameDoseAs}" does not match any dose-owning indication`);
    }
  });

  // Rule 3: Names must be unique
  const seen = new Set();
  names.forEach(n => {
    if (seen.has(n)) error(`Duplicate indication name: "${n}"`);
    seen.add(n);
  });

  // Rule 4: At least one dose-owning indication
  if (doseOwning.length === 0) {
    error(`Drug has no dose-owning indications`);
  }

  // Rule 5: Every dose-owning indication must have a notes array
  doseOwning.forEach(ind => {
    if (!Array.isArray(ind.notes)) {
      error(`${ind.name}: indication notes must be an array`);
    }
  });

  // Rule 6: Every dose entry must have at least one route
  doseOwning.forEach(ind => {
    ind.doses.forEach((entry, i) => {
      if (!Array.isArray(entry.routes) || entry.routes.length === 0) {
        error(`${ind.name} dose entry ${i} has no routes`);
      }
    });
  });

  // Rule 7: Population must be a valid enum
  const validPops = ["Adult", "Pediatric", "Geriatric", "Neonatal"];
  doseOwning.forEach(ind => {
    ind.doses.forEach((entry, i) => {
      if (!validPops.includes(entry.population)) {
        error(`${ind.name} dose entry ${i}: invalid population "${entry.population}"`);
      }
    });
  });

  // Rule 8: Every route must have via, amount, onset, duration, and notes
  doseOwning.forEach(ind => {
    ind.doses.forEach((entry, ei) => {
      entry.routes.forEach((route, ri) => {
        if (!route.via || route.via.length === 0) error(`${ind.name} entry ${ei} route ${ri}: missing via`);
        if (!route.amount) error(`${ind.name} entry ${ei} route ${ri}: missing amount`);
        if (!route.onset) error(`${ind.name} entry ${ei} route ${ri}: missing onset`);
        if (!route.duration) error(`${ind.name} entry ${ei} route ${ri}: missing duration`);
        if (!Array.isArray(route.notes)) error(`${ind.name} entry ${ei} route ${ri}: notes must be an array`);
      });
    });
  });
}
```

---

## Quick-Reference Cheat Sheet

```
indications[]
├── Dose-owning indication
│   ├── name: string (required, unique)
│   ├── notes: string[] (required, may be empty)
│   └── doses[]
│       └── Dose entry
│           ├── population: enum (required)
│           ├── qualifier: string (optional)
│           ├── formulation: string (optional)
│           ├── routes[]
│           │   └── Route object
│           │       ├── via: string[] (required, route enums)
│           │       ├── amount: string (required)
│           │       ├── onset: string (required)
│           │       ├── duration: string (required)
│           │       ├── repeat: string (optional)
│           │       ├── maxDose: string (optional)
│           │       └── notes: string[] (required, may be empty)
│           └── notes: string[] (required, may be empty)
│
└── Pointer indication
    ├── name: string (required, unique)
    └── sameDoseAs: string (required, must match a dose-owning sibling's name)
```

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
  brief: "",      // Required — HTML string for card display (rendered via innerHTML).
                  // Clinical and direct: states the mechanism plainly, then connects it to patient
                  // outcome where it adds value without editorializing or over-explaining.
                  // Written for someone who already knows the basics; does not define terms or
                  // justify itself. Target data (receptor names, actions) can appear when used
                  // conversationally — e.g. "Potentiates and directly activates the GABA-A
                  // receptor" — but should not mechanically restate the target object verbatim.
                  // One to three sentences, verbosity is fine when the mechanism warrants it.
                  // No figurative language.
  tier: "",       // Optional — only for dose-dependent drugs (see TIER enum)
  label: "",      // Optional — pairs with tier, free text (e.g. "Renal", "Cardiac")
  target: {       // Required — queryable metadata
    name: "",     // What the drug binds to / acts on
    action: "",   // How it acts on the target (see ACTION enum)
    result: "",   // Clinical effect for the patient
    system: "",   // Biological system (see SYSTEM enum)
    dose: ""      // Optional — only for dose-dependent drugs (e.g. "2–5 mcg/kg/min")
                  // NOTE: This is a DISPLAY LABEL for the MOA card only. The indications[].doses[]
                  // array is the source of truth for actual dosing. These may overlap but are maintained independently.
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
    brief: 'Suppresses pain signal transmission in the CNS by inhibiting neurotransmitter release. Produces potent analgesia and sedation with a rapid onset.',
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
    brief: 'Causes widespread vasoconstriction and a rapid rise in systemic vascular resistance. This is what restores blood pressure in anaphylaxis.',
    target: { name: "α-1 receptors", action: "agonist", result: "Vasoconstriction, ↑ SVR", system: "adrenergic" }
  },
  {
    brief: 'Increases heart rate and myocardial contractility. In cardiac arrest, this raises coronary perfusion pressure between compressions and improves the likelihood of successful defibrillation.',
    target: { name: "β-1 receptors", action: "agonist", result: "↑ HR & contractility", system: "adrenergic" }
  },
  {
    brief: 'Relaxes bronchial smooth muscle, reversing bronchoconstriction. In anaphylaxis, this works faster and more reliably than any inhaled bronchodilator.',
    target: { name: "β-2 receptors", action: "agonist", result: "Bronchodilation", system: "adrenergic" }
  }
]
```

**Dose-dependent tiers (dopamine):**
```js
moa: [
  {
    tier: "Low", label: "Renal",
    brief: 'Dilates renal and splanchnic vessels, increasing blood flow to the kidneys.',
    target: { name: "D1 receptors", action: "agonist", result: "↑ renal blood flow", system: "dopaminergic", dose: "2–5 mcg/kg/min" }
  },
  {
    tier: "Mod", label: "Cardiac",
    brief: 'Increases heart rate and contractility, raising cardiac output.',
    target: { name: "β-1 receptors", action: "agonist", result: "↑ cardiac output", system: "adrenergic", dose: "5–10 mcg/kg/min" }
  },
  {
    tier: "High", label: "Vasopressor",
    brief: 'Causes widespread vasoconstriction, increasing systemic vascular resistance and blood pressure.',
    target: { name: "α-1 receptors", action: "agonist", result: "↑ SVR, ↑ BP", system: "adrenergic", dose: ">10 mcg/kg/min" }
  }
]
```

**Multi-pathway, different clinical uses (glucagon):**
```js
moa: [
  {
    brief: 'Triggers glycogen breakdown in the liver, releasing glucose into the bloodstream within minutes. Requires adequate hepatic glycogen stores to be effective.',
    target: { name: "Hepatic glycogen stores", action: "stimulator", result: "Rapid ↑ blood glucose", system: "metabolic" }
  },
  {
    brief: 'Increases cardiac contractility and heart rate by bypassing the beta-receptor entirely. This is what makes glucagon useful in beta-blocker overdose — the drug works even when those receptors are blocked.',
    target: { name: "Adenylyl cyclase (cardiac)", action: "stimulator", result: "Positive inotropy & chronotropy", system: "adrenergic" }
  },
  {
    brief: 'Relaxes lower esophageal sphincter tone, which can allow an impacted foreign body to pass. Effect is temporary and inconsistent.',
    target: { name: "GI smooth muscle", action: "relaxant", result: "Relieves esophageal obstruction", system: "other" }
  }
]
```

**Physical mechanism (activated charcoal):**
```js
moa: [
  {
    brief: 'Adsorbs toxins and drugs within the GI tract, preventing them from being absorbed into the bloodstream. Does not bind iron, lithium, potassium, ethanol, caustics, or hydrocarbons.',
    target: { name: "Toxins / drugs in GI lumen", action: "adsorbent", result: "Prevents systemic absorption", system: "other" }
  }
]
```

---

## Safety Fields — Why Three Different Shapes

The drug object has three fields that all relate to "warnings," each with a different data shape. This is intentional:

| Field | Shape | Why |
|-------|-------|-----|
| `contraindications` | `[{ text, relative? }]` | Needs the `relative` boolean for absolute vs. relative distinction — quiz and display logic depend on it |
| `precautions` | `["html strings"]` | Needs HTML for inline emphasis (`hl--danger`, `hl--warn`) — these are displayed as formatted list items |
| `adverseEffects` | `["plain strings"]` | Plain text is sufficient — these are simple labels rendered as a flat list, no formatting needed |

Do not normalize these into a single shape. The different structures serve different rendering and querying needs.

---

## Contraindications

```js
contraindications: [
  { text: "Hypersensitivity" },
  { text: "Heart failure", relative: true }
]
```

- `text` — the contraindication statement
- `relative` — set to `true` for relative/controversial CIs. Omit (or `false`) for absolute CIs.

### Style rules

Contraindications should include only major, identifiable reasons to not give the drug. Written for a paramedic making quick decisions on a call.

**Keep it short.** No clinical reasoning, mechanism explanations, or verbose notes.

**Don't:**
```
"Wolff-Parkinson-White syndrome (WPW) — AV nodal blockade can cause VF via unopposed accessory pathway conduction"
```

**Do:**
```
"Wolff-Parkinson-White syndrome (WPW)"
```

**Drop unnecessary qualifiers.** Don't prefix with "Known," "Documented," "Active," "Severe," or "Suspected" unless the qualifier changes the clinical meaning.

**Don't:**
```
"Known ventricular tachycardia"
"Symptomatic severe hypotension (SBP <90 mmHg)"
```

**Do:**
```
"Ventricular tachycardia"
"Hypotension"
```

**One concept per entry.** Split compound contraindications into separate items.

**Don't:**
```
{ text: "Cardiogenic shock; decompensated heart failure" }
```

**Do:**
```
{ text: "Cardiogenic shock" }
{ text: "Decompensated heart failure" }
```

**Collapse redundant entries.** Don't list the same concept twice at different severity levels.

**Don't:**
```
{ text: "Cardiogenic shock" }       // these are the same concept
    { text: "Decompensated heart failure" }
```

**Do:**
```
{ text: "Heart failure" }
```

**No circular entries.** Don't state that the drug has no contraindications in the conditions it's indicated for — that provides no new information.

**Don't:**
```
"No contraindications in anaphylaxis or cardiac arrest"  (on epinephrine)
```

**No route contraindications.** Route restrictions (e.g., "Do not give IV") belong in precautions or administration notes, not here.

**Don't:**
```
"IV administration"
"Subcutaneous or intra-arterial injection"
```

**Skip niche or non-field-assessable items.** If a paramedic can't identify the condition on a call, it doesn't belong here.

**Don't:**
```
"Glucose-galactose malabsorption syndrome"
"Paraquat poisoning (theoretical — high FiO₂ may worsen lung injury)"
```

---

## Adverse Effects

Array of plain text strings. Each string is one adverse effect, rendered as a flat list on the card.

```js
adverseEffects: [
  "Hypotension",
  "Respiratory depression",
  "Bradycardia",
  "Nausea / vomiting"
]
```

**2–5 entries max.** These are not a package insert — cut to the effects a paramedic actually needs to anticipate. If an effect is benign or self-limiting, leave it out.

**6 words or fewer. No parentheses. No HTML.** If an effect needs context, it belongs in `precautions`.

### Style rules
- Title case, no trailing punctuation
- Use `/` for closely related effects: `"Nausea / vomiting"`, `"Tachycardia / palpitations"`
- No parentheses — ever

### Do
```js
adverseEffects: ["Hypotension", "Bradycardia", "Respiratory depression", "QT prolongation"]
```

### Don't
```js
adverseEffects: [
  "Hypotension (especially in volume-depleted patients)",  // no parentheses
  "May cause nausea, vomiting, or GI upset",              // sentence, not a label
  "Bradycardia, heart block, and asystole",               // split these out
  "Headache",                                             // benign, not actionable
  "Agranulocytosis"                                       // not observable in the field
]
```

### The filter question

Before adding an entry: *Can a paramedic observe or measure this, and does it require a clinical response?* Benign or self-limiting effects don't make the cut — only what changes how you manage the patient.

---

## Precautions

Array of HTML strings. Each string is one discrete precaution, rendered as a list item. Use `hl--danger`, `hl--warn`, and `<strong>` for emphasis — see [HTML Span Classes](#html-span-classes).

```js
precautions: [
  '<span class="hl hl--danger">No reversal agent.</span> Maintain BVM until drug metabolizes.',
  'Use caution in <span class="hl hl--warn">renal failure</span> — prolonged duration.',
  'Masks hypoglycemia signs in diabetic patients. Monitor blood glucose.'
]
```

### What belongs here

An entry earns its place if it answers one of:

- Does this patient population change how or whether you give it?
- Is there a compatibility, timing, or administration rule that matters in the field?
- Is there a risk specific to this drug not captured in contraindications or adverse effects?

### Style rules

- One concern per string — don't combine multiple warnings
- Plain sentences. Use a period between related thoughts, not an em dash chain
- No mechanism explanations — state what to do or watch for, not why
- No doses — dosing belongs in the doses section
- About this drug only — if the concern is really about another drug, a procedure, or a general EMS principle, cut it
- Order by severity: `hl--danger` first, `hl--warn` next, plain last

**Don't:**
```js
precautions: [
  'Does not provide sedation — always give an induction agent before the paralytic.',
  // procedural concern, not about this drug

  'Give dextrose before thiamine in hypoglycemia.',
  // about dextrose, not thiamine

  'Magnesium deficiency can reduce efficacy — it is a required cofactor, and chronic alcoholics are often deficient in both.',
  // mechanism lecture; too long

  'Does not alter the natural course — always pair with dexamethasone (0.6 mg/kg) for inflammation control.'
  // dose in precautions; about another drug
]
```

**Do:**
```js
precautions: [
  '<span class="hl hl--danger">No reversal agent.</span> Maintain BVM until drug metabolizes.',
  'Use caution in <span class="hl hl--warn">hepatic impairment</span> — prolonged sedation.',
  'Masks hypoglycemia signs in diabetic patients. Monitor blood glucose.'
]
```

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
  summary: "The first-line drug for anaphylaxis and cardiac arrest. A sympathomimetic that reverses bronchoconstriction, vasodilation, and cardiovascular collapse.",
  genericName: "Epinephrine",
  tradeNames: ["Adrenalin", "EpiPen"],
  category: ["Resuscitation", "Cardiovascular", "Airway & Respiratory"],
  classes: ["sympathomimetic", "catecholamine", "vasopressor", "inotrope", "chronotrope", "bronchodilator", "alpha1_agonist", "beta1_agonist", "beta2_agonist"],
  source: "NASEMSO 2022 v3.0",
  moa: [
    {
      brief: 'Causes widespread vasoconstriction and a rapid rise in systemic vascular resistance. This is what restores blood pressure in anaphylaxis.',
      target: { name: "α-1 receptors", action: "agonist", result: "Vasoconstriction, ↑ SVR", system: "adrenergic" }
    },
    {
      brief: 'Increases heart rate and myocardial contractility. In cardiac arrest, this raises coronary perfusion pressure between compressions and improves the likelihood of successful defibrillation.',
      target: { name: "β-1 receptors", action: "agonist", result: "↑ HR & contractility", system: "adrenergic" }
    },
    {
      brief: 'Relaxes bronchial smooth muscle, reversing bronchoconstriction. In anaphylaxis, this works faster and more reliably than any inhaled bronchodilator.',
      target: { name: "β-2 receptors", action: "agonist", result: "Bronchodilation", system: "adrenergic" }
    }
  ],
  indications: [
    {
      name: "Anaphylaxis",
      notes: [],
      doses: [
        {
          population: "Adult",
          formulation: "1 mg/mL (1:1,000)",
          routes: [
            {
              via: ["IM"],
              amount: "0.3 mg",
              onset: "3–5 min",
              duration: "5–15 min",
              repeat: "q5–15 min PRN",
              notes: ["Anterolateral thigh"]
            }
          ],
          notes: []
        },
        {
          population: "Pediatric",
          qualifier: "<25 kg",
          formulation: "1 mg/mL (1:1,000)",
          routes: [
            {
              via: ["IM"],
              amount: "0.15 mg",
              onset: "3–5 min",
              duration: "5–15 min",
              repeat: "q5–15 min PRN",
              notes: ["Anterolateral thigh"]
            }
          ],
          notes: []
        }
      ]
    },
    {
      name: "Cardiac Arrest",
      notes: [],
      doses: [
        {
          population: "Adult",
          formulation: "0.1 mg/mL (1:10,000)",
          routes: [
            {
              via: ["IV", "IO"],
              amount: "1 mg",
              onset: "Immediate",
              duration: "5–10 min",
              repeat: "q3–5 min",
              notes: ["Rapid push + 20 mL flush"]
            }
          ],
          notes: ["Prioritize early administration for non-shockable rhythms"]
        },
        {
          population: "Pediatric",
          formulation: "0.1 mg/mL (1:10,000)",
          routes: [
            {
              via: ["IV", "IO"],
              amount: "0.01 mg/kg",
              onset: "Immediate",
              duration: "5–10 min",
              maxDose: "1 mg/dose",
              repeat: "q3–5 min",
              notes: []
            }
          ],
          notes: []
        }
      ]
    },
    {
      name: "Shock",
      notes: [],
      doses: [
        {
          population: "Adult",
          formulation: "0.1 mg/mL (1:10,000)",
          routes: [
            {
              via: ["IV drip"],
              amount: "0.05–0.3 mcg/kg/min",
              onset: "Immediate",
              duration: "Duration of infusion",
              notes: ["Titrate to MAP ≥65 mmHg"]
            }
          ],
          notes: []
        },
        {
          population: "Pediatric",
          formulation: "0.1 mg/mL (1:10,000)",
          routes: [
            {
              via: ["IV drip"],
              amount: "0.05–0.3 mcg/kg/min",
              onset: "Immediate",
              duration: "Duration of infusion",
              notes: ["Titrate to physiologic targets"]
            }
          ],
          notes: []
        }
      ]
    },
    {
      name: "Croup / Bronchospasm",
      notes: [],
      doses: [
        {
          population: "Adult",
          formulation: "1 mg/mL (1:1,000)",
          routes: [
            {
              via: ["NEB"],
              amount: "5 mg (5 mL)",
              onset: "1–5 min",
              duration: "1–2 hrs",
              repeat: "May repeat in 20 min",
              notes: []
            }
          ],
          notes: []
        }
      ]
    },
    {
      name: "Severe Allergic Reaction",
      sameDoseAs: "Anaphylaxis"
    }
  ],
  contraindications: [
    { text: "Coronary insufficiency", relative: true },
    { text: "Uncontrolled hypertension", relative: true }
  ],
  adverseEffects: [
    "Tachycardia / hypertension",
    "Dysrhythmias",
    "Angina / myocardial ischemia"
  ],
  precautions: [
    'Use caution in <span class="hl hl--warn">elderly</span>, known <span class="hl hl--warn">cardiac disease</span>, <span class="hl hl--warn">hypertension</span>, and <span class="hl hl--warn">diabetes</span>.',
    'May precipitate angina or MI in susceptible patients.',
    'IM is the correct route for anaphylaxis — IV push epinephrine in a patient with a pulse risks fatal arrhythmia.'
  ]
}
```
