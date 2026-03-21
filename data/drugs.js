const DRUGS = [
  {
    id: "epinephrine",
    summary: "The first-line drug for anaphylaxis — a potent sympathomimetic that rapidly reverses bronchoconstriction, vasodilation, and cardiovascular collapse.",
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
    summary: "A rapid-onset sedative used for RSI induction; preferred for hemodynamically unstable patients because it has minimal effect on blood pressure.",
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
    summary: "An H2 blocker that suppresses gastric acid secretion; used for GERD and peptic ulcers, and sometimes as adjunct therapy in anaphylaxis protocols.",
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
    summary: "A potent opioid analgesic used for rapid management of severe pain and procedural sedation; roughly 100x more potent than morphine by weight.",
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
    summary: "A benzodiazepine antagonist used to reverse benzo-induced sedation and respiratory depression; short duration means resedation is common — watch your patient.",
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
    summary: "A loop diuretic used to offload fluid in pulmonary edema and heart failure; reduces preload by driving rapid urination and has a direct vasodilatory effect.",
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
    summary: "A hormone that rapidly raises blood glucose in hypoglycemia when IV access isn't available; also used as an antidote for beta-blocker and calcium channel blocker overdose.",
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
  ,{
    id: "haloperidol",
    summary: "A first-generation antipsychotic used to manage acute psychosis and severe agitation; blocks dopamine receptors to calm combative or actively psychotic patients.",
    genericName: "Haloperidol",
    tradeName: "Haldol",
    classes: ["Antipsychotic"],
    moaBrief: 'Blocks <span class="hl hl--beta">dopamine D2 receptors</span> in the CNS <span class="moa-arrow">→</span> reduces dopaminergic activity <span class="moa-arrow">→</span> <strong>decreases psychotic symptoms, agitation, and hallucinations</strong>. Also affects serotonin and norepinephrine pathways.',
    indications: ["Acute Psychosis", "Acute Agitation"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Prolonged QT Interval" },
      { text: "CNS Depression / Coma" },
      { text: "Parkinson's Disease" },
      { text: "Dementia with Lewy Bodies" }
    ],
    doses: [
      { population: "Adult", amount: "2–5 mg IV/IM", notes: ["NS flush if IV", "Repeat q45–60 min", "Max total 15 mg"] },
      { population: "Pediatric", amount: "Not recommended in EMS", notes: [] }
    ],
    onset: "15–20 min",
    duration: "6–12 hrs",
    adverseEffects: ["Drowsiness", "Nausea / Vomiting", "Dystonia", "Hypotension", "Tachycardia", "QT Prolongation", "Seizures", "Neuroleptic Malignant Syndrome"],
    precautions: 'If hypotension occurs, treat with <strong>fluids — not epinephrine</strong>. Haldol reverses epi\'s vasopressor effect and can worsen hypotension. <span class="hl hl--danger">IV route</span> carries significantly higher risk of QT prolongation and torsades de pointes. Use caution with <span class="hl hl--warn">alcohol use</span> and <span class="hl hl--warn">liver disease</span>. Lowers seizure threshold.'
  }
  ,{
    id: "heparin",
    summary: "An anticoagulant used in STEMI and ACS to prevent further clot formation by inhibiting clotting factors; does not dissolve existing clots.",
    genericName: "Heparin Sodium",
    tradeName: "Heparin",
    classes: ["Anticoagulant"],
    moaBrief: 'Binds to and activates <span class="hl hl--beta">antithrombin III</span> <span class="moa-arrow">→</span> inhibits thrombin and Factor Xa <span class="moa-arrow">→</span> <strong>prevents new clot formation</strong>. Does NOT break down existing clots.',
    indications: ["Acute STEMI", "ACS", "Deep Vein Thrombosis", "Pulmonary Embolism"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Active Bleeding" },
      { text: "Severe Thrombocytopenia" },
      { text: "Severe Hypertension", relative: true },
      { text: "Active Anticoagulant Use (warfarin, DOACs)" },
      { text: "Aortic Dissection" },
      { text: "Recent Surgery (< 14 days)", relative: true }
    ],
    doses: [
      { population: "Adult", amount: "70–80 units/kg IV/IO", notes: ["Max 4,000 units", "Maintenance: 10–20 units/kg/hr", "Max maintenance 1,000 units/hr"] },
      { population: "Pediatric", amount: "Not recommended in EMS", notes: [] }
    ],
    onset: "Immediate",
    duration: "4–8 hrs",
    adverseEffects: ["Bruising", "GI Bleeding", "Hypotension", "Hyperkalemia", "Thrombocytopenia (HIT)", "Injection Site Pain"],
    precautions: 'Use caution with <span class="hl hl--warn">head trauma</span> — risk of intracranial bleeding. <span class="hl hl--danger">Do not give for stroke</span> — cannot rule out hemorrhagic stroke in the field. <span class="hl hl--warn">Liver/kidney failure</span> alters metabolism and clearance. <strong>Reversal:</strong> Protamine sulfate 1 mg per 100 units heparin given.'
  }
  ,{
    id: "hydralazine",
    summary: "A direct arteriolar vasodilator used for hypertensive emergencies and acute heart failure; effective but unpredictable — causes reflex tachycardia, often paired with a beta-blocker.",
    genericName: "Hydralazine",
    tradeName: "Apresoline",
    classes: ["Vasodilator", "Antihypertensive"],
    moaBrief: 'Directly relaxes <span class="hl hl--beta">arteriolar smooth muscle</span> <span class="moa-arrow">→</span> vasodilation of resistance vessels <span class="moa-arrow">→</span> ↓ SVR &amp; afterload <span class="moa-arrow">→</span> <strong>↓ blood pressure</strong>. Triggers compensatory reflex tachycardia via baroreceptors.',
    indications: ["Severe Hypertension", "Acute Heart Failure"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Aortic Dissection" },
      { text: "Acute MI" },
      { text: "Coronary Artery Disease" }
    ],
    doses: [
      { population: "Adult", amount: "10–20 mg IV/IM", notes: ["Slow bolus + NS flush if IV", "Repeat q20–30 min", "Max total 40 mg"] },
      { population: "Pediatric", amount: "0.1–0.2 mg/kg IV/IM", notes: ["Slow bolus + NS flush if IV", "Repeat q20–30 min", "Max total 20 mg"] }
    ],
    onset: "5–20 min",
    duration: "2–6 hrs",
    adverseEffects: ["Dizziness", "Headache", "Flushing", "Nausea / Vomiting", "Hypotension", "Palpitations", "Reflex Tachycardia"],
    precautions: 'Use caution with <span class="hl hl--warn">underlying tachycardia</span> — reflex tachycardia ↑ myocardial O₂ demand. Consider co-administering a <strong>beta-blocker</strong> to blunt reflex HR response. Interactions: MAOIs, NSAIDs, other antihypertensives may potentiate hypotension.'
  }
  ,{
    id: "dopamine",
    summary: "A dose-dependent vasopressor and inotrope used for cardiogenic and distributive shock; beta effects dominate at moderate doses, alpha vasoconstriction takes over at high doses.",
    genericName: "Dopamine",
    tradeName: "Intropin",
    classes: ["Vasopressor", "Inotropic Agent", "Sympathomimetic"],
    moaTiered: [
      { tier: "Low",  range: "2–5 mcg/kg/min",  label: "Renal",       brief: 'D1 receptors → vasodilation of renal and splanchnic (gut) vessels → increases kidney and intestinal blood flow' },
      { tier: "Mod",  range: "5–10 mcg/kg/min", label: "Cardiac",     brief: '<span class="hl hl--beta">β-1</span> receptors → increases heart contractility and heart rate. Cardiac output rises.' },
      { tier: "High", range: ">10 mcg/kg/min",  label: "Vasopressor", brief: '<span class="hl hl--alpha">α-1</span> receptors → widespread vasoconstriction → SVR and blood pressure rise. Increased afterload — heart works harder against tighter vessels.' }
    ],
    indications: ["Severe Hypotension", "Cardiogenic Shock", "Distributive Shock", "Symptomatic Bradycardia (refractory to atropine)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Tachyarrhythmias" },
      { text: "V-Fib" },
      { text: "Pheochromocytoma" },
      { text: "Uncorrected Hypovolemia", relative: true }
    ],
    doses: [
      { population: "Adult", amount: "2–20 mcg/kg/min IV/IO", notes: ["Continuous drip in NS or D5W", "Titrate to patient response", "Start low, titrate slowly"] },
      { population: "Pediatric", amount: "2–20 mcg/kg/min IV/IO", notes: ["Continuous drip in NS or D5W", "Titrate to patient response"] }
    ],
    onset: "1–3 min",
    duration: "2–5 min after infusion stopped",
    adverseEffects: ["Anxiety", "Dyspnea", "Nausea / Vomiting", "Hyper/Hypotension", "Palpitations", "Arrhythmias", "Tissue Necrosis (extravasation)", "Ischemia"],
    precautions: '<strong>Incompatible with alkaline solutions</strong> (sodium bicarbonate). <span class="hl hl--danger">MAOI use:</span> reduce dose to 1/10 the normal starting dose — metabolism is blocked, causing severe HTN and arrhythmias. Use caution with <span class="hl hl--warn">ischemic heart disease</span> — increases myocardial O₂ demand. Correct hypovolemia before starting. Monitor IV site closely — extravasation causes tissue necrosis.'
  }
  ,{
    id: "hydromorphone",
    summary: "A potent opioid analgesic (roughly 7–10x stronger than morphine) used for moderate to severe pain; faster onset and smaller doses needed compared to morphine.",
    genericName: "Hydromorphone",
    tradeName: "Dilaudid",
    classes: ["Opioid Analgesic"],
    moaBrief: 'Binds to <span class="hl hl--beta">μ-opioid receptors</span> in the CNS <span class="moa-arrow">→</span> inhibits pain signal transmission at spinal cord and brain level <span class="moa-arrow">→</span> <strong>potent analgesia, sedation, and respiratory depression</strong>. ~7–10x more potent than morphine by weight.',
    indications: ["Moderate to Severe Pain"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypotension" },
      { text: "GI Obstruction" },
      { text: "CNS / Respiratory Depression" },
      { text: "MAOI Use (within 14 days)" }
    ],
    doses: [
      { population: "Adult", amount: "0.5–2 mg IV/IO/IM", notes: ["Slow bolus + NS flush if IV", "Repeat q10–15 min PRN"] },
      { population: "Pediatric", amount: "0.01–0.02 mg/kg IV/IO/IM", notes: ["Slow bolus + NS flush if IV", "Max 0.5 mg/dose"] }
    ],
    onset: "5–15 min",
    duration: "4–6 hrs",
    adverseEffects: ["Drowsiness", "Nausea / Vomiting", "Pruritus", "Apnea", "Hypotension", "Respiratory Depression", "Chest Wall Rigidity", "Miosis"],
    precautions: 'Use caution with <span class="hl hl--warn">head injury</span> — may ↑ intracranial pressure. Avoid or reduce dose in <span class="hl hl--warn">hepatic/renal impairment</span>. Use extreme caution with known <span class="hl hl--danger">opioid dependence</span>. <strong>Equianalgesic:</strong> 1.5 mg hydromorphone IV ≈ 10 mg morphine IV. Have naloxone immediately available.'
  }
  ,{
    id: "droperidol",
    summary: "A powerful antipsychotic and antiemetic used to sedate agitated patients and stop nausea/vomiting; carries an FDA black box warning for fatal heart rhythm problems.",
    genericName: "Droperidol",
    tradeName: "Inapsine",
    classes: ["Antipsychotic", "Antiemetic", "Butyrophenone"],
    moaBrief: 'Blocks <span class="hl hl--beta">D2 dopamine receptors</span> in the CNS <span class="moa-arrow">→</span> sedation, reduced agitation, and antiemetic effect. Butyrophenone class (related to haloperidol).',
    indications: ["Agitation / Acute Psychosis", "Nausea / Vomiting"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Prolonged QT Interval" },
      { text: "Parkinson's Disease" },
      { text: "CNS Depression" },
      { text: "Pheochromocytoma" }
    ],
    doses: [
      { population: "Adult", amount: "1.25–5 mg IV/IM", notes: ["Slow bolus + NS flush if IV", "May repeat q15–30 min", "Max 10 mg total"] },
      { population: "Pediatric", amount: "Not recommended in EMS", notes: [] }
    ],
    onset: "3–10 min",
    duration: "2–4 hrs",
    adverseEffects: ["Drowsiness", "Dystonia", "Akathisia", "Tachycardia", "Hypotension", "QT Prolongation", "CNS Depression", "Respiratory Depression", "Neuroleptic Malignant Syndrome (rare)"],
    precautions: '<span class="hl hl--danger">⚠ FDA BLACK BOX:</span> Fatal QT prolongation and torsade de pointes reported at or below recommended doses. Obtain <strong>12-lead ECG before administration</strong> and monitor 2–3 hrs after. Use caution with <span class="hl hl--warn">heart disease</span>, electrolyte imbalances (hypoK⁺, hypoMg²⁺), and <span class="hl hl--warn">seizure disorders</span> (lowers threshold). Treat extrapyramidal reactions with diphenhydramine.'
  }
];
