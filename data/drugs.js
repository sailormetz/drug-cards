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
];
