const DRUGS = [
  {
    id: "epinephrine",
    genericName: "Epinephrine",
    tradeName: "Adrenalin / EpiPen",
    classes: ["Sympathomimetic", "Catecholamine", "Vasopressor"],
    moa: [
      { receptor: "α-1", effect: "Vasoconstriction", type: "alpha" },
      { receptor: "β-1", effect: "↑ HR & contractility", type: "beta" },
      { receptor: "β-2", effect: "Bronchodilation", type: "beta" }
    ],
    indications: ["Anaphylaxis", "Severe Allergic Reaction", "Refractory Bronchospasm", "Asthma (refractory)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypovolemic Shock" },
      { text: "Coronary insuff.", relative: true },
      { text: "Hypertension", relative: true }
    ],
    doses: [
      { population: "Adult", amount: "0.3–0.5 mg IM", notes: ["Lateral thigh", "Repeat every 5–15 min"] },
      { population: "Pediatric", amount: "0.01 mg/kg IM", notes: ["Max 0.3 mg", "Lateral thigh"] },
      { population: "Asthma", amount: "0.3–0.5 mg SQ" }
    ],
    onset: "1–2 min",
    duration: "5–15 min",
    adverseEffects: ["Tachycardia", "Hypertension", "Dysrhythmias", "Anxiety / Tremor", "Pallor / Headache", "Angina"],
    precautions: 'Use caution in <strong>elderly</strong>, known <span class="hl hl--warn">cardiac disease</span>, <span class="hl hl--warn">HTN</span>, and <span class="hl hl--warn">diabetes</span>. May precipitate angina or MI in susceptible patients.'
  },
  {
    id: "etomidate",
    genericName: "Etomidate",
    tradeName: "Amidate",
    classes: ["Anesthetic", "Sedative"],
    moaBrief: 'Enhances <span class="hl hl--beta">GABA-A</span> activity <span class="moa-arrow">→</span> neuronal inhibition <span class="moa-arrow">→</span> <strong>rapid sedation &amp; unconsciousness</strong>',
    indications: ["Procedural Sedation", "RSI Induction"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Labor & Delivery" }
    ],
    doses: [
      { population: "Adult", amount: "0.2–0.6 mg/kg IV/IO", notes: ["Slow bolus + NS flush", "Max 40 mg"] },
      { population: "Pediatric", amount: "0.1–0.4 mg/kg IV/IO", notes: ["Slow bolus + NS flush", "Max 20 mg"] }
    ],
    onset: "30–60 sec",
    duration: "5–10 min",
    adverseEffects: ["Apnea", "Myoclonus", "Nausea / Vomiting", "Adrenal Suppression", "Resp. Depression", "BP Changes"],
    precautions: 'Use caution in <strong>adrenal insufficiency</strong> — may ↓ cortisol. May cause transient <span class="hl hl--warn">hypotension</span> in unstable BP or <span class="hl hl--warn">cardiac</span> patients. Lower dose in <strong>elderly</strong>.'
  }
  ,{
    id: "famotidine",
    genericName: "Famotidine",
    tradeName: "Pepcid",
    classes: ["Antihistamine", "H2 Blocker"],
    moaBrief: 'Blocks <span class="hl hl--beta">H2 receptors</span> on gastric parietal cells <span class="moa-arrow">→</span> suppresses gastric acid secretion. Used to treat acid-related GI conditions.',
    indications: ["Peptic Ulcers", "Gastroesophageal Reflux Disease (GERD)"],
    contraindications: [
      { text: "Hypersensitivity" }
    ],
    doses: [
      { population: "Adult", amount: "20–40 mg IV", notes: ["Slow bolus + NS flush"] },
      { population: "Pediatric", amount: "0.25–0.5 mg/kg IV", notes: ["Slow bolus + NS flush"] }
    ],
    onset: "10–30 min",
    duration: "8–10 hrs",
    adverseEffects: ["Dizziness", "Nausea / Vomiting", "Constipation", "Diarrhea", "Fatigue"],
    precautions: 'Use caution in <span class="hl hl--warn">porphyria</span> — may exacerbate the condition. Primarily renally excreted; reduce dose in <span class="hl hl--warn">kidney disease</span>. Efficacy in <strong>pediatric patients</strong> not fully established — consult peds dosing guidelines.'
  }
  ,{
    id: "fentanyl",
    genericName: "Fentanyl",
    tradeName: "Sublimaze",
    classes: ["Opioid Analgesic"],
    moaBrief: 'Binds to <span class="hl hl--beta">μ-opioid receptors</span> in the CNS <span class="moa-arrow">→</span> ↑ K⁺ efflux &amp; ↓ Ca²⁺ influx <span class="moa-arrow">→</span> blocks neurotransmitter release (substance P) <span class="moa-arrow">→</span> <strong>potent analgesia &amp; sedation</strong>',
    indications: ["Moderate to Severe Pain", "Procedural Sedation"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Myasthenia Gravis" },
      { text: "Hypotension", relative: true },
      { text: "Dysrhythmias", relative: true },
      { text: "CNS / Respiratory Depression" }
    ],
    doses: [
      { population: "Adult", amount: "0.5–2 mcg/kg IV/IO", notes: ["Slow bolus + NS flush", "Max 100 mcg/dose", "Repeat q5–10 min", "Max total 300 mcg"] },
      { population: "Pediatric", amount: "0.5–1 mcg/kg IV/IO", notes: ["Slow bolus + NS flush", "Max 100 mcg/dose", "Repeat q5–10 min", "Max total 3 mcg/kg"] }
    ],
    onset: "1–2 min",
    duration: "30–60 min",
    adverseEffects: ["Drowsiness", "Delirium", "Nausea / Vomiting", "Hypotension", "Bradycardia", "Respiratory Depression", "Chest Wall Rigidity"],
    precautions: 'Use caution in <span class="hl hl--warn">head injury</span> — may ↑ intracranial pressure. Use extreme caution with known <span class="hl hl--danger">opioid dependence</span>. <strong>Equianalgesic:</strong> 100 mcg fentanyl ≈ 10 mg morphine.'
  }
  ,{
    id: "flumazenil",
    genericName: "Flumazenil",
    tradeName: "Romazicon",
    classes: ["Benzodiazepine Antagonist", "Antidote"],
    moaBrief: 'Competitively binds <span class="hl hl--beta">benzodiazepine receptors</span> in the CNS <span class="moa-arrow">→</span> blocks benzo activity at the GABA receptor <span class="moa-arrow">→</span> <strong>reverses sedation, respiratory depression, and CNS depression</strong> caused by benzodiazepines',
    indications: ["Benzodiazepine Overdose", "Reversal of Procedural Sedation"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Seizure-prone patients" },
      { text: "TCA Overdose" },
      { text: "Benzo used for ICP/status epilepticus" }
    ],
    doses: [
      { population: "Adult", amount: "0.2–0.3 mg IV/IO", notes: ["Slow bolus + NS flush", "Repeat q1–2 min", "Max total 3 mg"] },
      { population: "Pediatric", amount: "0.01–0.02 mg/kg IV/IO", notes: ["Max 0.2 mg/dose", "Repeat q1–2 min", "Max total 1 mg"] }
    ],
    onset: "1–3 min",
    duration: "30–60 min",
    adverseEffects: ["Dizziness", "Nausea / Vomiting", "Rebound Sedation", "Agitation", "Hyper/Hypotension", "Seizures"],
    precautions: 'Use extreme caution with <span class="hl hl--danger">benzo dependence</span> — abrupt reversal can precipitate seizures and withdrawal. Avoid when <span class="hl hl--warn">CNS depression cause is unknown</span>. Short duration — monitor for <strong>resedation</strong> at 20–90 min.'
  }
  ,{
    id: "furosemide",
    genericName: "Furosemide",
    tradeName: "Lasix",
    classes: ["Loop Diuretic"],
    moaBrief: 'Inhibits the <span class="hl hl--beta">Na-K-Cl cotransporter</span> in the ascending loop of Henle <span class="moa-arrow">→</span> blocks sodium, chloride &amp; water reabsorption <span class="moa-arrow">→</span> <strong>↓ fluid volume, ↓ preload, reduces edema</strong>',
    indications: ["Pulmonary Edema", "Heart Failure"],
    contraindications: [
      { text: "Hypersensitivity / Sulfonamide allergy" },
      { text: "Hypovolemia" },
      { text: "Anuria" },
      { text: "Hepatic Coma" }
    ],
    doses: [
      { population: "Adult", amount: "0.5–1 mg/kg IV/IO", notes: ["Slow bolus + NS flush", "Repeat q15–30 min", "Max total 80 mg"] },
      { population: "Pediatric", amount: "1 mg/kg IV/IO", notes: ["Slow bolus + NS flush", "Repeat q15–30 min", "Max total 6 mg/kg"] }
    ],
    onset: "5–10 min",
    duration: "4–6 hrs",
    adverseEffects: ["Dizziness", "Nausea / Vomiting", "Hypovolemia", "Hypotension", "Electrolyte Imbalances", "Hyperglycemia", "Dysrhythmias", "Ototoxicity"],
    precautions: 'Use caution with underlying <span class="hl hl--warn">hypotension</span> — may worsen further. Correct severe <span class="hl hl--warn">electrolyte imbalances</span> before administering. Rapid infusion risks <span class="hl hl--danger">ototoxicity</span> (hearing loss). Monitor BP closely; hold if SBP 100–115.'
  }
  ,{
    id: "glucagon",
    genericName: "Glucagon",
    tradeName: "GlucaGen",
    classes: ["Hormone", "Antihypoglycemic"],
    moaBrief: 'Stimulates <span class="hl hl--beta">glycogenolysis</span> in the liver <span class="moa-arrow">→</span> rapid ↑ blood glucose. Also ↑ myocardial <span class="hl hl--beta">cAMP</span> <span class="moa-arrow">→</span> positive inotropic &amp; chronotropic effects <strong>bypassing the β-receptor</strong> (useful in CCB/BB overdose). Relaxes GI smooth muscle.',
    indications: ["Hypoglycemia", "Insulin Overdose", "Esophageal Obstruction", "CCB / Beta-Blocker Overdose"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Pheochromocytoma" },
      { text: "Insulinoma" },
      { text: "Hyperglycemia", relative: true }
    ],
    doses: [
      { population: "Adult — Hypoglycemia", amount: "1 mg IM/IN", notes: ["Repeat after 10–15 min if needed"] },
      { population: "Adult — CCB/BB OD", amount: "3–10 mg IV", notes: ["Slow bolus + NS flush", "Maintenance: 3–5 mg/hr drip if needed"] },
      { population: "Peds — Hypoglycemia", amount: "0.5–1 mg IM/IN", notes: ["Max total 1 mg", "Repeat after 10–15 min if needed"] },
      { population: "Peds — CCB/BB OD", amount: "0.05–0.15 mg/kg IV", notes: ["Slow bolus + NS flush", "Maintenance: 0.05–0.10 mg/kg/hr if needed"] }
    ],
    onset: "3–15 min",
    duration: "1–2 hrs",
    adverseEffects: ["Dizziness", "Nausea / Vomiting", "Tachycardia", "Hypertension", "Rebound Hyperglycemia"],
    precautions: 'Requires adequate <span class="hl hl--warn">hepatic glycogen stores</span> to work — may be ineffective in <strong>malnourished</strong> patients or those with <span class="hl hl--warn">adrenal insufficiency</span>. Give oral carbs as soon as patient can swallow to prevent rebound hypoglycemia.'
  }
];
