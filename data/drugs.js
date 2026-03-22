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
  ,{
    id: "dobutamine",
    summary: "A beta-1 selective inotrope that strengthens the heart's squeeze without major vasoconstriction; first-line for cardiogenic shock and decompensated heart failure.",
    genericName: "Dobutamine",
    tradeName: "Dobutrex",
    classes: ["Inotropic Agent", "Sympathomimetic"],
    moaBrief: 'Stimulates <span class="hl hl--beta">β-1 receptors</span> on the heart <span class="moa-arrow">→</span> ↑ contractility and cardiac output with minimal vasoconstriction. Some <span class="hl hl--beta">β-2</span> activity causes mild vasodilation, reducing afterload.',
    indications: ["Cardiogenic Shock", "Decompensated Heart Failure", "Severe Hypotension"],
    contraindications: [
      { text: "Hypersensitivity (includes sulfite allergy)" },
      { text: "Drug-Induced Shock" },
      { text: "Hypovolemic Shock" },
      { text: "Acute MI", relative: true },
      { text: "Idiopathic Hypertrophic Subaortic Stenosis" }
    ],
    doses: [
      { population: "Adult", amount: "2–20 mcg/kg/min IV/IO drip", notes: ["Dilute in NS or D5W", "Titrate to patient response", "Avoid HR increase >10% of baseline"] },
      { population: "Pediatric", amount: "2–20 mcg/kg/min IV/IO drip", notes: ["Dilute in NS or D5W", "Titrate to patient response"] }
    ],
    onset: "1–2 min",
    duration: "2–10 min after infusion stopped",
    adverseEffects: ["Headache", "Nausea / Vomiting", "Dyspnea", "Tachycardia", "Hyper/Hypotension", "Palpitations", "Arrhythmias"],
    precautions: 'Use extreme caution with <span class="hl hl--warn">myocardial ischemia</span> — increases O₂ demand. May worsen hypotension at higher doses; monitor BP closely. <strong>Correct hypovolemia before starting.</strong> Do not mix with sodium bicarbonate. Contains sulfite preservative.'
  }
  ,{
    id: "dextrose",
    summary: "Simple sugar given IV to rapidly reverse hypoglycemia; also used in altered mental status and seizures of unknown cause when low blood sugar can't be ruled out.",
    genericName: "Dextrose",
    tradeName: "D10W / D25W / D50W",
    classes: ["Carbohydrate", "Hyperglycemic"],
    moaBrief: 'Provides an immediate source of glucose <span class="moa-arrow">→</span> rapidly raises serum blood glucose <span class="moa-arrow">→</span> reverses CNS effects of hypoglycemia.',
    indications: ["Hypoglycemia", "Altered Mental Status (unknown etiology)", "Seizures (unknown etiology)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Intracranial Hemorrhage", relative: true }
    ],
    doses: [
      { population: "Adult", amount: "12.5–25 g IV/IO", notes: ["25–50 mL of D50W or 125–250 mL of D10W", "Bolus or drip, titrate to response", "Check BGL before and 10 min after"] },
      { population: "Pediatric", amount: "0.5–1 g/kg IV/IO", notes: ["2–4 mL/kg of D25W or 5–10 mL/kg of D10W", "Bolus or drip, titrate to response"] }
    ],
    onset: "30–60 sec",
    duration: "15–90 min",
    adverseEffects: ["Hyperglycemia", "Fluid Overload", "Electrolyte Imbalance", "Tissue Necrosis (extravasation)", "Cerebral Hemorrhage (worsening)"],
    precautions: '<span class="hl hl--warn">Thiamine-deficient patients</span> (chronic alcoholism, malnutrition): administer Thiamine 100 mg IV <strong>before</strong> dextrose to prevent Wernicke\'s encephalopathy. Use a large, patent vein — extravasation causes severe tissue necrosis. Avoid in head injury or stroke unless hypoglycemia is confirmed.'
  }
  ,{
    id: "dexamethasone",
    summary: "A long-acting steroid that suppresses inflammation; used in anaphylaxis, severe asthma, croup, and cerebral edema — effects take hours to peak but last 1–3 days.",
    genericName: "Dexamethasone",
    tradeName: "Decadron",
    classes: ["Corticosteroid", "Anti-inflammatory"],
    moaBrief: 'Binds <span class="hl hl--beta">glucocorticoid receptors</span> <span class="moa-arrow">→</span> suppresses production of pro-inflammatory cytokines <span class="moa-arrow">→</span> reduces inflammation and immune response.',
    indications: ["Anaphylaxis", "Asthma Exacerbation", "Croup", "Cerebral Edema"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Systemic Fungal Infection" },
      { text: "GI Bleeding", relative: true },
      { text: "Active Infection", relative: true }
    ],
    doses: [
      { population: "Adult", amount: "5–10 mg IV/IM", notes: ["NS flush if IV"] },
      { population: "Pediatric", amount: "0.6 mg/kg IV/IM", notes: ["Max 10 mg", "NS flush if IV"] }
    ],
    onset: "4–6 hrs (anti-inflammatory effect)",
    duration: "24–72 hrs",
    adverseEffects: ["Nausea / Vomiting", "Hyperglycemia", "Hypertension", "Behavioral Changes", "Fluid Retention", "Immunosuppression"],
    precautions: 'Use caution in <span class="hl hl--warn">diabetes</span> (↑ BGL) and <span class="hl hl--warn">heart/renal failure</span> (fluid retention). Monitor BP and BGL. Single prehospital doses are generally well tolerated — most adverse effects are associated with prolonged use.'
  }
  ,{
    id: "calcium-chloride",
    summary: "An electrolyte used to stabilize the heart in hyperkalemia and counteract calcium channel blocker overdose; also a first-line agent in cardiac arrest from suspected electrolyte causes.",
    genericName: "Calcium Chloride",
    tradeName: "",
    classes: ["Electrolyte", "Hypertonic Solution"],
    moaBrief: 'Increases ionized calcium <span class="moa-arrow">→</span> stabilizes cardiac cell membranes, increases myocardial contractility and ventricular automaticity <span class="moa-arrow">→</span> counteracts effects of hyperkalemia, hypermagnesemia, and calcium channel blockade.',
    indications: ["Hyperkalemia", "Hypocalcemia", "Hypermagnesemia", "Cardiac Arrest", "CCB / Beta Blocker Overdose"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypercalcemia" },
      { text: "Digitalis Toxicity" },
      { text: "V-Fib (unless from hyperkalemia)", relative: true }
    ],
    doses: [
      { population: "Adult", amount: "0.5–1 g IV/IO (5–10 mL of 10% solution)", notes: ["Slow bolus + NS flush", "May repeat q5–10 min"] },
      { population: "Pediatric", amount: "20 mg/kg IV/IO (0.2 mL/kg of 10% solution)", notes: ["Max 1 g", "Slow bolus + NS flush", "May repeat q5–10 min"] }
    ],
    onset: "1–3 min",
    duration: "20–30 min",
    adverseEffects: ["Nausea / Vomiting", "Bradycardia", "Hypotension", "Arrhythmias", "Tissue Necrosis (extravasation)"],
    precautions: '<span class="hl hl--danger">Do not mix with sodium bicarbonate</span> — forms insoluble precipitate. Use separate IV lines or flush thoroughly between. Confirm IV patency before administration — extravasation causes severe tissue necrosis. Use extreme caution in patients on <span class="hl hl--warn">digoxin</span> — can precipitate fatal toxicity.'
  }
  ,{
    id: "aspirin",
    summary: "An antiplatelet drug that prevents platelets from clumping — used in suspected ACS and cardiac chest pain to reduce clot formation in the coronary arteries.",
    genericName: "Aspirin",
    tradeName: "Acetylsalicylic Acid (ASA)",
    classes: ["NSAID", "Antiplatelet"],
    moaBrief: 'Irreversibly inhibits <span class="hl hl--beta">cyclooxygenase (COX)</span> <span class="moa-arrow">→</span> blocks thromboxane A2 production <span class="moa-arrow">→</span> prevents platelet aggregation. Antiplatelet effect lasts the life of the platelet (~7–10 days).',
    indications: ["Suspected MI / ACS", "Angina"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hemorrhagic Stroke" },
      { text: "Active GI Bleeding / Gastric Ulcer" },
      { text: "Bleeding Disorders" }
    ],
    doses: [
      { population: "Adult", amount: "162–324 mg PO", notes: ["Chew — do not swallow whole", "Non-enteric coated only", "Single dose for ACS"] },
      { population: "Pediatric", amount: "Not recommended in EMS", notes: ["Risk of Reye syndrome"] }
    ],
    onset: "10–20 min",
    duration: "Antiplatelet effect irreversible (~7–10 days)",
    adverseEffects: ["Nausea / Vomiting", "GI Irritation / Bleeding", "Bronchospasm", "Reye Syndrome (peds)"],
    precautions: 'Use caution in <span class="hl hl--warn">asthma/COPD</span> — may trigger bronchospasm (higher rate in asthmatics ~26%). Have patient <strong>chew</strong>, not swallow whole — faster absorption. If patient already took aspirin today, top up to 324 mg total. Aortic dissection or ripping/tearing chest pain → withhold aspirin.'
  }
  ,{
    id: "atropine",
    summary: "An anticholinergic that speeds up the heart by blocking the vagus nerve; first-line for symptomatic bradycardia and critical for reversing organophosphate/nerve agent poisoning.",
    genericName: "Atropine Sulfate",
    tradeName: "",
    classes: ["Anticholinergic", "Vagolytic"],
    moaBrief: 'Blocks <span class="hl hl--beta">muscarinic acetylcholine receptors</span> at the SA/AV node <span class="moa-arrow">→</span> removes parasympathetic brake on the heart <span class="moa-arrow">→</span> ↑ heart rate and AV conduction. Also dries secretions (organophosphate use).',
    indications: ["Symptomatic Bradycardia", "Organophosphate / Nerve Agent Poisoning"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Tachycardia" },
      { text: "2nd Degree Type II (Mobitz II) Block" },
      { text: "3rd Degree Block (wide QRS)" },
      { text: "Narrow-Angle Glaucoma", relative: true }
    ],
    doses: [
      { population: "Adult — Bradycardia", amount: "1 mg IV/IO rapid push", notes: ["May repeat q3–5 min", "Max 3 mg total", "ET/SGA if no IV access"] },
      { population: "Adult — Organophosphate", amount: "2–5 mg IV/IO/IM", notes: ["Repeat q5–10 min until secretions dry", "No max dose in severe poisoning"] },
      { population: "Pediatric — Bradycardia", amount: "0.02–0.06 mg/kg IV/IO", notes: ["Max single dose 0.5 mg", "Max total 1 mg", "Repeat q3–5 min PRN"] },
      { population: "Pediatric — Organophosphate", amount: "0.05 mg/kg IV/IO/IM", notes: ["Repeat q5–10 min until secretions dry"] }
    ],
    onset: "Immediate (IV)",
    duration: "4–6 hrs",
    adverseEffects: ["Tachycardia", "Paradoxical Bradycardia (if given too slowly)", "Dizziness", "Urinary Retention", "Dry Mouth", "Dilated Pupils", "Arrhythmias"],
    precautions: 'Give as <strong>rapid IV push</strong> — slow administration or doses &lt;0.5 mg can cause <span class="hl hl--danger">paradoxical bradycardia</span>. Ineffective in <span class="hl hl--warn">heart transplant patients</span> (denervated heart — go straight to pacing). Effects enhanced by antihistamines and antidepressants. Use caution in <span class="hl hl--warn">myocardial ischemia</span> — increases O₂ demand.'
  }
  ,{
    id: "bumetanide",
    summary: "A loop diuretic (~40x more potent than furosemide) used to pull fluid off in pulmonary edema and CHF; doesn't have furosemide's vasodilatory effect.",
    genericName: "Bumetanide",
    tradeName: "Bumex",
    classes: ["Loop Diuretic"],
    moaBrief: 'Blocks Na⁺/K⁺/Cl⁻ reabsorption in the <span class="hl hl--beta">ascending loop of Henle</span> <span class="moa-arrow">→</span> ↑ urine output <span class="moa-arrow">→</span> reduces fluid volume and edema. ~40x more potent than furosemide by weight.',
    indications: ["Pulmonary Edema", "Congestive Heart Failure"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Anuria" },
      { text: "Hypovolemia" },
      { text: "Hepatic Coma" },
      { text: "Severe Electrolyte Imbalance" }
    ],
    doses: [
      { population: "Adult", amount: "0.5–1 mg IV slow bolus", notes: ["NS flush after", "May repeat q2–3 hrs", "Max 10 mg/day"] },
      { population: "Pediatric", amount: "Not recommended in EMS", notes: [] }
    ],
    onset: "3–8 min",
    duration: "3–6 hrs",
    adverseEffects: ["Dizziness", "Nausea / Vomiting", "Muscle Cramps", "Hypovolemia", "Hypokalemia", "Metabolic Alkalosis", "Hypotension", "Ototoxicity", "ECG Changes"],
    precautions: 'Use caution in patients with <span class="hl hl--warn">sulfonamide allergy</span> — cross-sensitivity possible. Unlike furosemide, <strong>no vasodilatory effect</strong> — consider this in CHF management. Monitor for hypokalemia, especially in patients on digoxin — low K⁺ potentiates digitalis toxicity. Ototoxicity risk increases with high doses, rapid IV push, or concurrent aminoglycosides.'
  }
  ,{
    id: "acetaminophen",
    summary: "A non-opioid pain reliever and fever reducer; available IV for patients who can't take it orally — no anti-inflammatory effect, and overdose causes serious liver damage.",
    genericName: "Acetaminophen",
    tradeName: "Tylenol / Ofirmev",
    classes: ["Analgesic", "Antipyretic"],
    moaBrief: 'Inhibits <span class="hl hl--beta">prostaglandin synthesis</span> in the CNS <span class="moa-arrow">→</span> raises pain threshold and reduces fever. Unlike NSAIDs, has minimal peripheral anti-inflammatory effect.',
    indications: ["Mild to Moderate Pain", "Fever"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hepatic Failure" },
      { text: "Severe Renal Impairment", relative: true }
    ],
    doses: [
      { population: "Adult", amount: "650–1000 mg PO or 1000 mg IV over 15 min", notes: ["Max 4 g/day (healthy adults)", "Max 2 g/day in elderly, chronic alcohol use, or hepatic impairment"] },
      { population: "Pediatric", amount: "15 mg/kg PO/IV", notes: ["Max 75 mg/kg/day", "IV over 15 min"] }
    ],
    onset: "PO 30–60 min | IV 5–10 min",
    duration: "4–6 hrs",
    adverseEffects: ["Nausea / Vomiting", "Hepatotoxicity (overdose)", "Rash", "Hypotension (IV)"],
    precautions: 'Primary danger is <span class="hl hl--danger">overdose-induced hepatotoxicity</span> — often delayed 24–72 hrs. Chronic alcohol use, malnutrition, and hepatic disease significantly lower the toxic threshold. N-acetylcysteine (NAC) is the antidote. Safe at therapeutic doses; dangerous when stacked with other acetaminophen-containing products.'
  }
  ,{
    id: "activated-charcoal",
    summary: "A binding agent given after toxic ingestions to trap the poison in the gut before it absorbs — only works early (within ~1 hour) and only for drugs it can bind.",
    genericName: "Activated Charcoal",
    tradeName: "Actidose / CharcoAid",
    classes: ["Antidote", "Adsorbent"],
    moaBrief: 'Highly porous charcoal <span class="moa-arrow">→</span> adsorbs (binds) toxins and drugs in the GI tract <span class="moa-arrow">→</span> prevents absorption into bloodstream. Does NOT work for all substances (see precautions).',
    indications: ["Toxic Ingestion (within ~1 hr of ingestion)"],
    contraindications: [
      { text: "Altered Mental Status / Unprotected Airway" },
      { text: "Caustic Ingestion (acids, alkalis)" },
      { text: "Hydrocarbon / Petroleum Ingestion" },
      { text: "Hypersensitivity" }
    ],
    doses: [
      { population: "Adult", amount: "50–100 g PO or via NGT", notes: ["Premixed slurry (25 g/120 mL)", "Give with sorbitol if available to reduce constipation"] },
      { population: "Pediatric", amount: "1 g/kg PO or via NGT", notes: ["Max 50 g", "Premixed slurry preferred"] }
    ],
    onset: "Immediate (binds in GI tract)",
    duration: "N/A",
    adverseEffects: ["Vomiting", "Aspiration", "Constipation / Bowel Obstruction", "Black Stools"],
    precautions: '<span class="hl hl--danger">Does NOT bind:</span> iron, lithium, potassium, ethanol, caustics, or hydrocarbons — charcoal is ineffective and dangerous for these. Most effective within <strong>1 hour of ingestion</strong>; benefit diminishes rapidly after. <span class="hl hl--danger">Aspiration risk is high</span> — never give to a patient with an unprotected airway or decreased LOC. Contact Poison Control before administration when possible.'
  }
  ,{
    id: "adenosine",
    summary: "The first-line drug for SVT — briefly stops the heart's electrical conduction to break a reentrant loop and restore normal rhythm. Short-acting, works in seconds.",
    genericName: "Adenosine",
    tradeName: "Adenocard",
    classes: ["Antiarrhythmic"],
    moaBrief: 'Activates <span class="hl hl--beta">A1 adenosine receptors</span> at SA and AV nodes <span class="moa-arrow">→</span> hyperpolarizes nodal cells, transiently blocks AV conduction <span class="moa-arrow">→</span> interrupts reentry circuit <span class="moa-arrow">→</span> restores sinus rhythm. Half-life &lt;10 seconds.',
    indications: ["SVT (narrow complex, regular, stable)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "2nd or 3rd Degree Heart Block (without pacemaker)" },
      { text: "Sick Sinus Syndrome (without pacemaker)" },
      { text: "WPW with Atrial Fibrillation" },
      { text: "Bronchospasm / Asthma" },
      { text: "Irregular or Polymorphic Wide-Complex Tachycardia" }
    ],
    doses: [
      { population: "Adult", amount: "6 mg rapid IV/IO push + 20 mL NS flush", notes: ["If no conversion in 1–2 min → 12 mg rapid push", "May repeat 12 mg once more", "Use most proximal access available"] },
      { population: "Pediatric", amount: "0.1 mg/kg rapid IV/IO push (max 6 mg)", notes: ["If no conversion → 0.2 mg/kg (max 12 mg)", "Rapid push + immediate flush"] },
      { population: "Special — Heart transplant / dipyridamole / carbamazepine", amount: "3 mg starting dose", notes: [] }
    ],
    onset: "Immediate",
    duration: "&lt;10 sec (metabolized in &lt;30 sec)",
    adverseEffects: ["Transient Asystole", "Flushing", "Chest Pressure / Dyspnea", "Sense of Impending Doom", "Hypotension", "Bronchospasm", "New Arrhythmias"],
    precautions: '<strong>Warn the patient</strong> before giving — transient chest pressure, flushing, and "doom" sensation are expected and last only seconds. <span class="hl hl--danger">Must be given as rapid bolus</span> — slow administration metabolizes before reaching the heart. Have defibrillator ready. <span class="hl hl--warn">Caffeine and theophylline</span> block adenosine receptors — higher doses may be needed. <span class="hl hl--warn">Dipyridamole</span> potentiates effect — use 3 mg dose.'
  }
  ,{
    id: "albuterol",
    summary: "A fast-acting bronchodilator that relaxes the airways — first-line for asthma, COPD exacerbations, and bronchospasm from anaphylaxis.",
    genericName: "Albuterol",
    tradeName: "Proventil / Ventolin / ProAir",
    classes: ["Bronchodilator", "Beta-2 Agonist", "Sympathomimetic"],
    moaBrief: 'Stimulates <span class="hl hl--beta">β-2 adrenergic receptors</span> in bronchial smooth muscle <span class="moa-arrow">→</span> relaxation and bronchodilation. Minimal β-1 (cardiac) activity at standard doses.',
    indications: ["Asthma", "COPD Exacerbation / Bronchospasm", "Anaphylaxis (bronchospasm component)"],
    contraindications: [
      { text: "Hypersensitivity" }
    ],
    doses: [
      { population: "Adult", amount: "2.5 mg in 3 mL NS via nebulizer", notes: ["May repeat q20 min × 3 if needed", "Drive with 6 LPM O₂"] },
      { population: "Pediatric (>10 kg)", amount: "2.5 mg in 3 mL NS via nebulizer", notes: ["May repeat q20 min × 3"] },
      { population: "Pediatric (≤10 kg)", amount: "1.25 mg in 3 mL NS via nebulizer", notes: ["May repeat q20 min × 3"] }
    ],
    onset: "5–15 min",
    duration: "3–6 hrs",
    adverseEffects: ["Tachycardia", "Tremors", "Palpitations", "Anxiety / Nervousness", "Hypokalemia (repeat doses)", "Hypertension", "Paradoxical Bronchospasm (rare)"],
    precautions: 'Use caution with <span class="hl hl--warn">tachycardia or known cardiac disease</span> — consult medical direction if HR >150. <strong>Not a substitute for epinephrine</strong> in severe anaphylaxis — epi is still first-line. Often combined with ipratropium (Atrovent) for COPD exacerbations. Paradoxical bronchospasm is rare but discontinue immediately if it occurs.'
  }
  ,{
    id: "amiodarone",
    summary: "A broad-spectrum antiarrhythmic for life-threatening rhythms — first-line for shock-refractory VF and pulseless VT in cardiac arrest, and for stable wide-complex tachycardia.",
    genericName: "Amiodarone",
    tradeName: "Cordarone / Pacerone",
    classes: ["Antiarrhythmic (Class III)"],
    moaBrief: 'Blocks <span class="hl hl--beta">K⁺ channels</span> (prolongs repolarization), <span class="hl hl--alpha">Na⁺ channels</span> (slows conduction), and <span class="hl hl--beta">Ca²⁺ channels</span> + <span class="hl hl--alpha">α/β-adrenergic receptors</span> <span class="moa-arrow">→</span> ↓ automaticity, ↓ AV conduction, stabilizes membranes <span class="moa-arrow">→</span> terminates reentrant and ectopic arrhythmias.',
    indications: ["VF / Pulseless VT (shock-refractory)", "Stable Wide-Complex Tachycardia"],
    contraindications: [
      { text: "Hypersensitivity (includes iodine allergy)" },
      { text: "2nd or 3rd Degree Heart Block (without pacemaker)" },
      { text: "Sinus Bradycardia (without pacemaker)" },
      { text: "WPW with Atrial Fibrillation" }
    ],
    doses: [
      { population: "Adult — Cardiac Arrest (VF/pulseless VT)", amount: "300 mg IV/IO bolus", notes: ["After 3rd defibrillation", "May repeat 150 mg IV/IO once"] },
      { population: "Adult — Stable Wide-Complex VT", amount: "150 mg IV over 10 min", notes: ["Mix 150 mg in 50 mL NS", "May repeat 150 mg once"] },
      { population: "Pediatric — Cardiac Arrest", amount: "5 mg/kg IV/IO bolus (max 300 mg)", notes: ["May repeat × 2", "Max total 15 mg/kg"] },
      { population: "Pediatric — Stable VT", amount: "5 mg/kg IV over 20 min", notes: ["Max 300 mg"] }
    ],
    onset: "&lt;30 min (IV antiarrhythmic effect)",
    duration: "Variable (half-life 40–55 days with chronic use)",
    adverseEffects: ["Hypotension", "Bradycardia", "QT Prolongation", "Torsades de Pointes", "AV Block", "Nausea / Vomiting"],
    precautions: '<span class="hl hl--danger">No CIs in pulseless cardiac arrest</span> — benefits outweigh all risks. For stable VT, <strong>slow infusion</strong> if hypotension develops. Amiodarone + digoxin can double digoxin plasma levels — monitor carefully. Solution is viscous — do not shake; give through proximal IV.'
  },
  {
    id: "diltiazem",
    summary: "Class IV antiarrhythmic — the go-to for rate control in A-Fib and A-Flutter with RVR.",
    genericName: "Diltiazem",
    tradeName: "Cardizem",
    classes: ["Class IV Antiarrhythmic", "Calcium Channel Blocker (Non-DHP)"],
    moaBrief: 'Blocks <span class="hl hl--beta">calcium channels</span> in the AV node <span class="moa-arrow">→</span> slows conduction and prolongs AV refractory period <span class="moa-arrow">→</span> <strong>controlled ventricular response</strong> in A-Fib and A-Flutter.',
    indications: ["Atrial Fibrillation with RVR", "Atrial Flutter with RVR"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypotension" },
      { text: "Ventricular Tachycardia (Wide-Complex Tachycardia)" },
      { text: "WPW / Pre-excitation Syndrome — may accelerate accessory pathway → VF" },
      { text: "Sick Sinus Syndrome (without pacemaker)" },
      { text: "2nd or 3rd Degree AV Block (without pacemaker)" },
      { text: "Cardiogenic Shock" },
      { text: "Acute Decompensated Heart Failure / Reduced EF (<40%)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "0.25 mg/kg IV (max 20 mg) slow push over 2 min",
        notes: [
          "May repeat after 15 min at 0.35 mg/kg IV (max 25 mg)",
          "Maintenance drip: 5–15 mg/hr titrated to response"
        ]
      },
      {
        population: "Pediatric",
        amount: "Not recommended in EMS setting",
        notes: []
      }
    ],
    onset: "2–5 min",
    duration: "1–3 hrs",
    adverseEffects: ["Hypotension", "Bradycardia", "Transient AV Block", "Dizziness", "Headache", "Dyspnea", "Palpitations", "Peripheral Edema"],
    precautions: 'Use with extreme caution in <span class="hl hl--warn">heart failure with reduced EF</span> — may worsen hemodynamics; consider amiodarone instead. Administer <strong>slowly over 2 minutes</strong> to reduce hypotension risk. If severe hypotension develops, <span class="hl hl--warn">calcium chloride 1 g IV</span> can be used as a reversal agent. Avoid with beta-blockers or antiarrhythmics — additive AV block or hypotension risk.'
  },
  {
    id: "diazepam",
    summary: "Long-acting benzodiazepine for seizures, sedation, and agitation — largely superseded prehospital by midazolam but still widely carried.",
    genericName: "Diazepam",
    tradeName: "Valium",
    classes: ["Benzodiazepine", "Anticonvulsant", "Sedative"],
    moaBrief: 'Binds to <span class="hl hl--beta">GABA-A receptors</span> in the CNS <span class="moa-arrow">→</span> enhances chloride channel opening and neuronal inhibition <span class="moa-arrow">→</span> <strong>raises seizure threshold</strong>, sedation, and anxiolysis.',
    indications: ["Active Seizures / Status Epilepticus", "Agitation & Anxiety", "Procedural Sedation"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Myasthenia Gravis" },
      { text: "Narrow-Angle Glaucoma" },
      { text: "Significant Respiratory Depression" },
      { text: "Acute Alcohol Intoxication with CNS Depression", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "5–10 mg IV/IM slow push",
        notes: [
          "May repeat once after 5–10 min (max 20 mg total)",
          "Administer IV no faster than 5 mg/min"
        ]
      },
      {
        population: "Pediatric",
        amount: "0.2–0.3 mg/kg IV/IM (max 5 mg/dose)",
        notes: [
          "May repeat once after 5–10 min (max 10 mg total)",
          "Administer IV slowly"
        ]
      }
    ],
    onset: "2–5 min (IV); 15–30 min (IM)",
    duration: "20–60 min (anticonvulsant); sedation may persist several hours",
    adverseEffects: ["Respiratory Depression", "CNS Depression", "Hypotension", "Drowsiness", "Muscle Weakness", "Nausea & Vomiting", "Paradoxical Agitation (rare)"],
    precautions: 'Monitor closely for <span class="hl hl--danger">respiratory depression</span> — have airway management immediately available, especially with repeat doses or combined with opioids/CNS depressants. <span class="hl hl--warn">Long half-life</span> — sedative effects can persist for hours. Most EMS systems now prefer <strong>midazolam IM</strong> as first-line for active seizures (faster and more reliable absorption, no refrigeration required). Reduce dose in elderly and patients with hepatic impairment.'
  },
  {
    id: "diphenhydramine",
    summary: "First-generation antihistamine for allergic reactions and dystonic reactions — adjunct in anaphylaxis, never primary treatment.",
    genericName: "Diphenhydramine",
    tradeName: "Benadryl",
    classes: ["Antihistamine", "Anticholinergic"],
    moaBrief: 'Blocks <span class="hl hl--beta">H1 histamine receptors</span> → reduces allergic symptoms (itching, urticaria, bronchoconstriction). Anticholinergic properties contribute to reversal of <strong>dystonic reactions</strong>.',
    indications: ["Allergic Reactions (mild-to-moderate)", "Anaphylaxis (adjunct to epinephrine)", "Dystonic Reactions / EPS"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Neonates / Premature Infants" },
      { text: "Narrow-Angle Glaucoma" },
      { text: "MAOI Use (within 14 days)" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "25–50 mg IV/IM",
        notes: ["May repeat after 4–6 hrs", "Administer IV slowly"]
      },
      {
        population: "Pediatric",
        amount: "1 mg/kg IV/IM (max 50 mg/dose)",
        notes: ["May repeat after 4–6 hrs", "Administer IV slowly"]
      }
    ],
    onset: "10–30 min",
    duration: "3–12 hrs",
    adverseEffects: ["Drowsiness / Sedation", "CNS Depression", "Hypotension", "Tachycardia / Palpitations", "Paradoxical Agitation or Hallucinations (rare)", "Nausea & Vomiting", "Seizures (rare, overdose)"],
    precautions: '<span class="hl hl--danger">Not a first-line treatment for anaphylaxis</span> — <strong>epinephrine is always first</strong>. Diphenhydramine is adjunct only. Use caution in CNS or respiratory depression — may potentiate sedation. Caution with underlying cardiac conditions — can cause tachycardia. Monitor for paradoxical reactions (hyperactivity, agitation, hallucinations) — discontinue if they occur.'
  },
  {
    id: "hydroxocobalamin",
    summary: "Cyanide antidote — directly binds cyanide ions. First-line for suspected cyanide poisoning in EMS, especially smoke inhalation and closed-space fires.",
    genericName: "Hydroxocobalamin",
    tradeName: "Cyanokit",
    classes: ["Antidote", "Cyanide Antagonist"],
    moaBrief: 'Directly binds <span class="hl hl--danger">cyanide ions</span> in the bloodstream <span class="moa-arrow">→</span> forms nontoxic <strong>cyanocobalamin</strong> (Vitamin B12) <span class="moa-arrow">→</span> renally excreted <span class="moa-arrow">→</span> restores cellular oxygen utilization.',
    indications: ["Cyanide Poisoning (suspected or confirmed)"],
    contraindications: [
      { text: "Hypersensitivity" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "5 g IV over 15 min",
        notes: [
          "May repeat once after 5–10 min if inadequate response (max 10 g total)",
          "Dilute in 200 mL NS or D5W; invert/rock vial ≥60 sec — do not shake"
        ]
      },
      {
        population: "Pediatric",
        amount: "70 mg/kg IV over 15 min (max 5 g/dose)",
        notes: [
          "May repeat once (max 10 g total)",
          "Same preparation as adult"
        ]
      }
    ],
    onset: "5–10 min",
    duration: "12–24 hrs",
    adverseEffects: ["Hypertension (transient)", "Skin / Urine Discoloration (red-crimson — expected and transient)", "Injection Site Pain", "Nausea & Vomiting", "Dizziness", "Dyspnea"],
    precautions: 'Expect <span class="hl hl--warn">red/crimson skin and urine discoloration</span> — normal, temporary side effect; communicate to patient and receiving hospital. Monitor BP during infusion — may cause transient hypertension. Reassess airway, oxygenation, and hydration continuously. Think cyanide in: <strong>closed-space fire victims, smoke inhalation with altered mental status, or unexplained cardiac arrest with fire exposure</strong>.'
  },
  {
    id: "hydroxyzine",
    summary: "Antihistamine/anxiolytic for mild allergic reactions and anxiety — IM only in EMS; IV is absolutely contraindicated.",
    genericName: "Hydroxyzine",
    tradeName: "Vistaril",
    classes: ["Antihistamine", "Anxiolytic", "Antiemetic"],
    moaBrief: 'Blocks <span class="hl hl--beta">H1 histamine receptors</span> and acts on the CNS <span class="moa-arrow">→</span> reduces allergic symptoms, anxiety, and agitation. Anticholinergic and antiemetic properties contribute to sedation.',
    indications: ["Mild Allergic Reactions", "Anxiety & Agitation"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Early Pregnancy (teratogenic)" },
      { text: "IV or subcutaneous administration — vesicant; causes severe tissue necrosis and gangrene" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "25–50 mg IM deep injection",
        notes: ["May repeat after 4–6 hrs", "Inject deep into ventrogluteal or midlateral thigh — IM only"]
      },
      {
        population: "Pediatric",
        amount: "0.5–1 mg/kg IM deep injection",
        notes: ["May repeat after 4–6 hrs", "Inject into midlateral thigh"]
      }
    ],
    onset: "15–30 min",
    duration: "4–6 hrs",
    adverseEffects: ["Drowsiness / Sedation", "Hypotension", "Nausea & Vomiting", "Constipation", "Urinary Retention", "Injection Site Pain / Necrosis (if extravasated)", "QTc Prolongation"],
    precautions: '<span class="hl hl--danger">IM ONLY — IV is absolutely contraindicated.</span> IV/subcutaneous administration causes severe tissue necrosis, thrombosis, and gangrene. Potentiates CNS depressants — use caution with opioids, benzodiazepines, and alcohol. <span class="hl hl--warn">Can inhibit epinephrine\'s vasopressor effect</span> — if a vasopressor is needed, use norepinephrine, not epi. Monitor for QTc prolongation.'
  },
  {
    id: "ipratropium",
    summary: "Anticholinergic bronchodilator — most effective when combined with albuterol (DuoNeb) for asthma/COPD exacerbations.",
    genericName: "Ipratropium Bromide",
    tradeName: "Atrovent",
    classes: ["Anticholinergic", "Bronchodilator"],
    moaBrief: 'Blocks <span class="hl hl--beta">muscarinic (M3) receptors</span> in bronchial smooth muscle <span class="moa-arrow">→</span> prevents acetylcholine-induced bronchoconstriction and reduces secretions <span class="moa-arrow">→</span> bronchodilation and improved airflow.',
    indications: ["Asthma Exacerbation", "COPD Exacerbation", "Acute Bronchospasm"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Peanut or Soy Allergy (MDI/inhaler form only — nebulized solution is typically safe)" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "0.5 mg nebulized in NS",
        notes: ["May repeat after 15–20 min (max 3 doses)", "Commonly combined with albuterol 2.5 mg in same neb (DuoNeb)"]
      },
      {
        population: "Pediatric",
        amount: "0.25–0.5 mg nebulized in NS",
        notes: ["May repeat after 15–20 min (max 3 doses)", "Use in children requires careful risk/benefit assessment"]
      }
    ],
    onset: "10–20 min",
    duration: "1–4 hrs",
    adverseEffects: ["Tachycardia", "Arrhythmias", "Blurred Vision (if mist contacts eyes)", "Dizziness", "Nausea & Vomiting", "Tremors", "Anxiety"],
    precautions: 'More effective in <span class="hl hl--beta">COPD</span> than in pure asthma — bronchospasm in COPD is more parasympathetically mediated. <strong>Combine with albuterol</strong> for maximum effect — neither alone is as effective as the combination. Caution in narrow-angle glaucoma — nebulized mist entering the eyes can increase intraocular pressure. Caution in underlying cardiovascular conditions — may cause tachycardia or arrhythmias.'
  },
  {
    id: "ketamine",
    summary: "Dissociative anesthetic — preserves hemodynamics and airway reflexes. Ideal for RSI, procedural sedation, and analgesia in hypotensive or combative patients.",
    genericName: "Ketamine",
    tradeName: "Ketalar",
    classes: ["Dissociative Anesthetic", "Analgesic", "Sedative"],
    moaBrief: 'Blocks <span class="hl hl--beta">NMDA receptors</span> in the CNS <span class="moa-arrow">→</span> dissociative anesthesia, profound analgesia, amnesia, and sedation. Stimulates catecholamine release <span class="moa-arrow">→</span> <strong>maintains or increases BP and HR</strong> — beneficial in shock.',
    indications: ["Moderate to Severe Pain (sub-dissociative)", "Procedural Sedation", "RSI Induction", "Excited Delirium / Acute Agitation"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Severe / Uncontrolled Hypertension" },
      { text: "Known Active Psychosis / Schizophrenia", relative: true },
      { text: "Severe Hepatic Impairment", relative: true }
    ],
    doses: [
      {
        population: "Adult — Sub-dissociative Analgesia",
        amount: "0.1–0.3 mg/kg IV slow push over 10–15 min",
        notes: ["May repeat PRN", "Alternatively: 50 mg IM for field analgesia"]
      },
      {
        population: "Adult — Procedural Sedation",
        amount: "1–2 mg/kg IV slow push OR 4–5 mg/kg IM",
        notes: ["May repeat 0.5 mg/kg IV PRN"]
      },
      {
        population: "Adult — RSI Induction",
        amount: "2 mg/kg IV (max 200 mg)",
        notes: ["Drug of choice in hypotensive or asthmatic patients", "Follow immediately with paralytic"]
      },
      {
        population: "Adult — Excited Delirium / Agitation",
        amount: "3–5 mg/kg IM",
        notes: ["IM preferred — avoids IV needle stick in combative patients", "5 mg/kg IM — be prepared to manage airway"]
      },
      {
        population: "Pediatric",
        amount: "1–2 mg/kg IV OR 4–5 mg/kg IM",
        notes: ["Not recommended <3 months (laryngospasm risk)", "Weight-based dosing required"]
      }
    ],
    onset: "30–60 sec (IV); 5–10 min (IM)",
    duration: "10–15 min (IV); 20–60 min (IM)",
    adverseEffects: ["Hallucinations / Emergence Reactions", "Tachycardia", "Hypertension", "Hypersalivation", "Nausea & Vomiting", "Laryngospasm (rare)", "Transient Apnea (rapid IV push)"],
    precautions: '<span class="hl hl--warn">Elevated ICP is NOT a contraindication</span> — the ICP concern originated from flawed 1970s studies. The 2020 ACS-COT/ACEP/NAEMSP consensus confirms ketamine has minimal effects on ICP and does not worsen neurologic outcomes in head trauma. <strong>Administer IV slowly</strong> — rapid push can cause transient apnea. Treat emergence reactions with midazolam if needed; do not pre-medicate prophylactically. Document GCS before administration in head-injured patients — dissociative state complicates neuro monitoring. Caution in severe CAD — increases myocardial O₂ demand.'
  },
  {
    id: "ketorolac",
    summary: "Potent non-narcotic NSAID — excellent for moderate to severe pain without addiction risk, no respiratory depression, opioid-sparing.",
    genericName: "Ketorolac",
    tradeName: "Toradol",
    classes: ["NSAID", "Non-opioid Analgesic"],
    moaBrief: 'Inhibits <span class="hl hl--beta">COX-1 and COX-2 enzymes</span> <span class="moa-arrow">→</span> reduces prostaglandin synthesis <span class="moa-arrow">→</span> <strong>decreases pain, inflammation, and fever</strong>. No opioid receptor activity — no addiction potential or respiratory depression.',
    indications: ["Moderate to Severe Pain"],
    contraindications: [
      { text: "Hypersensitivity to ketorolac or NSAIDs" },
      { text: "Bleeding Disorders / Active Bleeding" },
      { text: "NSAID-Exacerbated Respiratory Disease (aspirin-sensitive asthma)" },
      { text: "3rd Trimester Pregnancy" },
      { text: "Severe Renal Impairment", relative: true },
      { text: "Active Peptic Ulcer Disease", relative: true }
    ],
    doses: [
      {
        population: "Adult (<65 yrs)",
        amount: "15–30 mg IV/IM",
        notes: ["Administer IV slowly over ≥15 sec"]
      },
      {
        population: "Adult (≥65 yrs)",
        amount: "15 mg IV/IM",
        notes: ["Higher risk of GI bleeding and renal toxicity — use lower dose"]
      },
      {
        population: "Pediatric",
        amount: "Not recommended in EMS setting",
        notes: []
      }
    ],
    onset: "10–30 min",
    duration: "4–6 hrs",
    adverseEffects: ["GI Bleeding / Irritation", "Nausea & Vomiting", "Drowsiness", "Hypertension", "Dyspnea", "Allergic Reaction", "Renal Toxicity"],
    precautions: 'Excellent choice for patients with <span class="hl hl--beta">substance use history or opioid addiction</span> — potent analgesia without addiction risk or respiratory depression. Separate elderly dosing (15 mg max) — higher risk of GI bleeding and renal damage; elderly patients should never receive the full adult dose. Caution in renal impairment — NSAIDs reduce renal blood flow. Avoid in aspirin-sensitive asthma — may trigger severe bronchospasm. Caution in hypertension and cardiovascular disease — may increase CV event risk.'
  },
  {
    id: "labetalol",
    summary: "Non-selective alpha-1 and beta blocker — lowers BP without reflex tachycardia. Go-to for hypertensive emergencies including preeclampsia and aortic dissection.",
    genericName: "Labetalol",
    tradeName: "Trandate",
    classes: ["Alpha-1 and Beta Blocker (Non-selective)", "Antihypertensive"],
    moaBrief: 'Blocks <span class="hl hl--alpha">alpha-1 receptors</span> (vasodilation) and <span class="hl hl--beta">beta-1/beta-2 receptors</span> (↓ HR and contractility) <span class="moa-arrow">→</span> reduces peripheral vascular resistance and cardiac output <span class="moa-arrow">→</span> <strong>lowers BP without reflex tachycardia</strong>.',
    indications: ["Moderate to Severe Hypertension", "Hypertensive Emergency in Pregnancy (Preeclampsia / Eclampsia)", "Hypertensive Emergency with Stroke or Aortic Dissection (with medical direction)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypotension" },
      { text: "Bradycardia" },
      { text: "Cardiogenic Shock" },
      { text: "Severe Asthma or COPD (beta-2 blockade causes bronchospasm)" },
      { text: "2nd or 3rd Degree AV Block" },
      { text: "Decompensated Heart Failure", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "10–20 mg IV slow push over 2 min",
        notes: [
          "May repeat after 10–15 min at 40–80 mg IV",
          "Maintenance drip: 0.5–2 mg/min IV if needed, titrated to response",
          "Max total: 300 mg"
        ]
      },
      {
        population: "Pediatric",
        amount: "Not recommended in EMS setting",
        notes: []
      }
    ],
    onset: "2–5 min",
    duration: "3–6 hrs",
    adverseEffects: ["Hypotension", "Orthostatic Hypotension", "Bradycardia", "Bronchospasm", "Headache", "Drowsiness", "Nausea & Vomiting", "Dyspnea"],
    precautions: 'Keep patient <span class="hl hl--warn">supine during and after administration</span> — alpha-1 blockade causes significant orthostatic hypotension; have IV fluids and vasopressors immediately available. <strong>Masks hypoglycemia symptoms</strong> (tachycardia, tremor) in diabetic patients — monitor BGL. Caution in hepatic impairment — extensively liver-metabolized. Beta-blocker overdose reversal: <strong>glucagon 50 mcg/kg IV</strong> loading dose, then 1–15 mg/hr infusion. Most EMS systems require medical direction approval before administration.'
  },
  {
    id: "lactated-ringers",
    summary: "Balanced isotonic crystalloid — preferred over NS in trauma, burns, and sepsis due to more physiologic electrolyte composition.",
    genericName: "Lactated Ringer's Solution",
    tradeName: "LR / Hartmann's Solution",
    classes: ["Isotonic Crystalloid", "Intravenous Fluid"],
    moaBrief: 'Balanced electrolyte solution with osmolarity close to plasma <span class="moa-arrow">→</span> expands intravascular volume <span class="moa-arrow">→</span> <strong>improves organ perfusion and blood pressure</strong>. Lactate metabolized by the liver to bicarbonate <span class="moa-arrow">→</span> mild buffering of metabolic acidosis.',
    indications: ["Hypovolemia / Fluid Resuscitation", "Dehydration", "Burns"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Do NOT run with blood products — calcium content causes clotting in the IV line (use NS for blood administration)" },
      { text: "Significant Hyperkalemia — LR contains potassium (4 mEq/L)", relative: true }
    ],
    doses: [
      {
        population: "Adult — Fluid Resuscitation",
        amount: "1–2 L IV/IO open infusion",
        notes: ["Titrate to HR, BP, and mental status", "In penetrating trauma — target permissive hypotension (SBP ~80–90 mmHg); avoid aggressive resuscitation"]
      },
      {
        population: "Adult — Maintenance",
        amount: "100–150 mL/hr IV",
        notes: ["Titrate to response"]
      },
      {
        population: "Pediatric — Fluid Resuscitation",
        amount: "20 mL/kg IV/IO",
        notes: ["May repeat as needed, titrated to response"]
      },
      {
        population: "Pediatric — Maintenance",
        amount: "40–70 mL/hr IV",
        notes: ["Titrate to response"]
      }
    ],
    onset: "Immediate",
    duration: "Variable",
    adverseEffects: ["Fluid Overload / Pulmonary Edema", "Electrolyte Imbalance", "Dilutional Coagulopathy (large volumes)", "Metabolic Alkalosis (rare, large volumes)"],
    precautions: 'Preferred over NS in <span class="hl hl--beta">trauma, burns, and sepsis</span> — more balanced electrolytes reduce hyperchloremic metabolic acidosis seen with large-volume NS. <span class="hl hl--danger">Never run with blood products</span> — LR\'s calcium causes clotting in IV tubing; prime blood lines with NS. Caution in heart failure and renal failure — risk of fluid overload. Caution in liver failure — impaired lactate clearance. In penetrating trauma, avoid aggressive resuscitation — dilutes clotting factors before hemorrhage is surgically controlled.'
  },
  {
    id: "levalbuterol",
    summary: "R-enantiomer of albuterol — same bronchodilator action with theoretically fewer cardiac side effects, though real-world clinical advantage over albuterol is debated.",
    genericName: "Levalbuterol",
    tradeName: "Xopenex",
    classes: ["Beta-2 Agonist", "Bronchodilator", "Sympathomimetic"],
    moaBrief: 'Selectively binds <span class="hl hl--beta">beta-2 adrenergic receptors</span> in bronchial smooth muscle <span class="moa-arrow">→</span> ↑ cAMP via adenylyl cyclase <span class="moa-arrow">→</span> <strong>smooth muscle relaxation and bronchodilation</strong>. As the pure R-enantiomer of albuterol, avoids the S-enantiomer linked to some adverse cardiac effects.',
    indications: ["Asthma Exacerbation", "COPD Exacerbation", "Acute Bronchospasm"],
    contraindications: [
      { text: "Hypersensitivity" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "0.63–1.25 mg nebulized",
        notes: ["May repeat after 15–20 min (max 3 doses)", "Often combined with ipratropium and oxygen therapy"]
      },
      {
        population: "Pediatric",
        amount: "0.31–0.63 mg nebulized",
        notes: ["May repeat after 15–20 min (max 3 doses)"]
      }
    ],
    onset: "5–15 min",
    duration: "2–6 hrs",
    adverseEffects: ["Tachycardia", "Palpitations", "Hypertension", "Tremors", "Headache", "Anxiety", "Hypokalemia"],
    precautions: 'Theoretically fewer cardiac side effects than racemic albuterol (tachycardia, tremor), but <span class="hl hl--warn">clinical trials show mixed evidence</span> of meaningful real-world advantage — albuterol remains acceptable in most EMS settings. Consider levalbuterol when cardiac tachycardia is a significant concern. Monitor BGL in diabetic patients — beta-2 agonists stimulate glycogenolysis. Hypokalemia can develop with repeated doses — relevant in arrhythmia-prone patients.'
  },
  {
    id: "lidocaine",
    summary: "Class 1b antiarrhythmic — suppresses ventricular ectopy and raises the VF threshold. AHA-equivalent alternative to amiodarone for shock-refractory VF/pVT.",
    genericName: "Lidocaine",
    tradeName: "Xylocaine",
    classes: ["Class 1b Antiarrhythmic", "Sodium Channel Blocker"],
    moaBrief: 'Blocks <span class="hl hl--beta">fast sodium channels</span> in ventricular myocardium <span class="moa-arrow">→</span> suppresses phase 4 depolarization and decreases automaticity <span class="moa-arrow">→</span> <strong>raises VF threshold</strong> and suppresses PVCs and ventricular tachycardia.',
    indications: ["Cardiac Arrest (V-Fib / Pulseless V-Tach)", "Ventricular Tachycardia with Pulse"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Bradycardia" },
      { text: "Stokes-Adams Syndrome (idioventricular pacemaker)" },
      { text: "2nd or 3rd Degree AV Block" },
      { text: "Prophylactic Use in Acute MI (no benefit per current guidelines)" }
    ],
    doses: [
      {
        population: "Adult — Cardiac Arrest (V-Fib / pVT)",
        amount: "1–1.5 mg/kg IV/IO",
        notes: [
          "May repeat at 0.5–0.75 mg/kg every 3–5 min (max total 3 mg/kg)",
          "ET/SGA dose: 2–2.5× the IV dose, diluted in 10 mL NS",
          "Maintenance drip: 1–4 mg/min IV after ROSC"
        ]
      },
      {
        population: "Adult — V-Tach with Pulse",
        amount: "1–1.5 mg/kg IV/IO",
        notes: [
          "May repeat at 0.5–0.75 mg/kg every 3–5 min (max total 3 mg/kg)",
          "Maintenance drip: 1–4 mg/min IV"
        ]
      },
      {
        population: "Pediatric",
        amount: "1–1.5 mg/kg IV/IO (max 100 mg/dose)",
        notes: [
          "May repeat after 3–5 min (max total 3 mg/kg)",
          "Maintenance drip: 20–50 mcg/kg/min IV"
        ]
      }
    ],
    onset: "1–3 min",
    duration: "20–60 min",
    adverseEffects: ["Drowsiness", "CNS Toxicity (tinnitus, perioral numbness, confusion)", "Seizures (toxicity)", "Hypotension", "Bradycardia", "Cardiac Arrest (overdose)"],
    precautions: 'Per 2018/2023 AHA guidelines, amiodarone and lidocaine are <span class="hl hl--warn">equivalent alternatives</span> for shock-refractory VF/pVT — neither is formally preferred. 2023 in-hospital data showed lidocaine associated with higher ROSC and survival to discharge than amiodarone. Reduce dose by 50% in hepatic impairment or heart failure — hepatically metabolized and prone to accumulation. Watch for early CNS toxicity signs (tinnitus, perioral tingling) before seizures develop. <strong>ET/SGA dose is 2–2.5× the IV dose</strong> — card lists the same dose for all routes which understates the ET requirement.'
  },
  {
    id: "lorazepam",
    summary: "Intermediate-acting benzodiazepine — preferred over diazepam for seizures in many EMS systems due to longer anticonvulsant effect and more predictable IM absorption.",
    genericName: "Lorazepam",
    tradeName: "Ativan",
    classes: ["Benzodiazepine", "Anticonvulsant", "Sedative"],
    moaBrief: 'Binds to <span class="hl hl--beta">GABA-A receptors</span> in the CNS <span class="moa-arrow">→</span> enhances chloride channel opening and neuronal inhibition <span class="moa-arrow">→</span> <strong>raises seizure threshold</strong>, sedation, and anxiolysis.',
    indications: ["Active Seizures / Status Epilepticus", "Agitation & Anxiety"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Significant Respiratory Depression" },
      { text: "Suspected CNS Depressant Overdose (opioids, alcohol, other benzos) — additive respiratory depression risk", relative: true },
      { text: "Hypotension", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "2–4 mg IV/IM slow push",
        notes: [
          "Administer IV no faster than 2 mg/min",
          "May repeat after 15–20 min (max total 8 mg)"
        ]
      },
      {
        population: "Pediatric",
        amount: "0.05–0.1 mg/kg IV/IM (max 4 mg/dose)",
        notes: [
          "May repeat after 15–20 min (max total 4 mg)",
          "Administer IV slowly"
        ]
      }
    ],
    onset: "2–5 min (IV); 15–30 min (IM)",
    duration: "6–8 hrs (sedation); 1–2 hrs (anticonvulsant)",
    adverseEffects: ["Respiratory Depression", "CNS Depression", "Hypotension", "Drowsiness", "Bradycardia", "Nausea & Vomiting"],
    precautions: 'Monitor closely for <span class="hl hl--danger">respiratory depression</span> — have airway management immediately available; risk increases with repeat doses or combined with opioids, alcohol, or other CNS depressants. Administer IV <strong>no faster than 2 mg/min</strong>. Lorazepam is more potent mg-for-mg than diazepam — smaller doses achieve equivalent effect. Caution in hepatic impairment and pregnancy (crosses the placenta). Most EMS systems favor midazolam IM as first-line for active seizures.'
  },
  {
    id: "magnesium-sulfate",
    summary: "Electrolyte and smooth muscle relaxant — cornerstone drug for TdP, eclampsia seizures, and refractory status asthmaticus.",
    genericName: "Magnesium Sulfate",
    tradeName: "MgSO₄",
    classes: ["Electrolyte", "Anticonvulsant", "Antiarrhythmic", "Bronchodilator"],
    moaBrief: 'Acts as a physiological <span class="hl hl--beta">calcium antagonist</span> — blocks calcium entry into smooth muscle and neural cells <span class="moa-arrow">→</span> smooth muscle relaxation, membrane stabilization <span class="moa-arrow">→</span> <strong>suppresses seizures, TdP, and bronchospasm</strong>.',
    indications: ["Torsades de Pointes (TdP)", "Seizures of Eclampsia / Preeclampsia", "Status Asthmaticus (refractory to initial treatment)", "Hypomagnesemia"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "2nd or 3rd Degree AV Block / Heart Block" },
      { text: "Cardiogenic Shock / Hypotension" },
      { text: "Myasthenia Gravis" }
    ],
    doses: [
      {
        population: "Adult — Torsades de Pointes (with pulse)",
        amount: "1–2 g IV over 5–20 min",
        notes: ["Pulseless TdP: 1–2 g IV slow push over 1–2 min"]
      },
      {
        population: "Adult — Eclampsia Seizures",
        amount: "4–6 g IV over 2–15 min",
        notes: [
          "Preeclampsia (prophylaxis): 4 g IV over 20 min",
          "If seizures recur: may repeat 2 g IV"
        ]
      },
      {
        population: "Adult — Status Asthmaticus",
        amount: "2 g IV over 10–20 min",
        notes: ["Use only when refractory to albuterol + ipratropium"]
      },
      {
        population: "Pediatric",
        amount: "25–50 mg/kg IV/IO over 10–20 min (max 2 g)",
        notes: ["Pulseless TdP: push over 1–2 min", "Dilute in NS or D5W"]
      }
    ],
    onset: "1–2 min",
    duration: "30–45 min",
    adverseEffects: ["Hypotension", "Bradycardia", "Transient AV Block", "Respiratory Depression", "Loss of Deep Tendon Reflexes", "Drowsiness", "Flushing / Diaphoresis"],
    precautions: '<span class="hl hl--warn">Loss of deep tendon reflexes (DTR) is the earliest sign of toxicity</span> — precedes respiratory depression. Check patellar reflex before each dose; if absent, hold drug and notify medical direction. <span class="hl hl--danger">Respiratory paralysis and cardiac arrest can occur at toxic levels.</span> Reversal: <strong>calcium chloride 1 g IV</strong>. Caution in myasthenia gravis — magnesium exacerbates neuromuscular blockade. Rapid IV push reserved for pulseless TdP only — all other indications require infusion over 10+ minutes.'
  },
  {
    id: "mannitol",
    summary: "Osmotic diuretic — draws water out of brain tissue to reduce ICP. Also used in rhabdomyolysis to protect kidneys via forced diuresis.",
    genericName: "Mannitol",
    tradeName: "Osmitrol",
    classes: ["Osmotic Diuretic"],
    moaBrief: 'Increases plasma osmolarity <span class="moa-arrow">→</span> draws water from brain tissue and interstitial spaces into the bloodstream <span class="moa-arrow">→</span> <strong>reduces cerebral edema and intracranial pressure</strong>. In the kidneys, osmotic gradient increases urine output <span class="moa-arrow">→</span> forced diuresis.',
    indications: ["Cerebral Edema / Elevated ICP", "Rhabdomyolysis (renal protection via forced diuresis)", "Blood Transfusion Reactions"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Pulmonary Edema — osmotic fluid shifts can worsen it" },
      { text: "Hypovolemia / Hypotension — osmotic diuresis worsens volume depletion" },
      { text: "Anuria / Severe Renal Failure" },
      { text: "Decompensated Heart Failure" },
      { text: "Intracranial Hemorrhage — initial plasma expansion may worsen bleeding", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "0.5–1 g/kg IV/IO over 15–20 min",
        notes: ["Use in-line filter — solution can crystallize", "Warm crystallized solution before use; do not administer if crystals remain"]
      },
      {
        population: "Pediatric",
        amount: "0.25–1 g/kg IV/IO over 15–20 min",
        notes: ["Use in-line filter"]
      }
    ],
    onset: "15–60 min",
    duration: "3–8 hrs",
    adverseEffects: ["Dehydration / Hypovolemia", "Electrolyte Imbalances (hyponatremia, hypokalemia)", "Hypotension", "Nausea & Vomiting", "Headache", "Pulmonary Edema (fluid shift)", "Acute Heart Failure"],
    precautions: '<span class="hl hl--warn">Inspect solution before administration</span> — mannitol crystallizes at low temperatures. Use an in-line filter (0.22 micron) to catch any crystals; warm the bag if crystals are present and do not administer until fully dissolved. Monitor fluid status closely — osmotic diuresis can cause significant dehydration and electrolyte shifts (hyponatremia, hypokalemia). Caution in intracranial hemorrhage — initial plasma volume expansion may transiently worsen bleeding before ICP effects take hold. Avoid in severe renal failure — depends on intact kidney function for diuresis.'
  },
  {
    id: "meperidine",
    summary: "Short-acting opioid analgesic — largely being phased out of EMS due to normeperidine toxicity risk. Use fentanyl or morphine when available.",
    genericName: "Meperidine",
    tradeName: "Demerol",
    classes: ["Opioid Analgesic"],
    moaBrief: 'Binds to <span class="hl hl--beta">mu-opioid receptors</span> in the CNS <span class="moa-arrow">→</span> inhibits ascending pain pathways <span class="moa-arrow">→</span> <strong>analgesia, sedation, and euphoria</strong>. Faster onset but shorter duration than morphine.',
    indications: ["Moderate to Severe Pain"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "MAOI Use (within 14 days) — risk of fatal serotonin syndrome" },
      { text: "CNS or Respiratory Depression" },
      { text: "Head Injury (masks neurological exam, elevates ICP)", relative: true },
      { text: "Renal Impairment — normeperidine accumulates and causes seizures", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "25–100 mg IV/IO/IM slow push",
        notes: ["Start at 25–50 mg IV due to rapid onset and hypotension risk", "Administer IV slowly — rapid push causes histamine release and hypotension"]
      },
      {
        population: "Pediatric",
        amount: "1–1.5 mg/kg IV/IO/IM (max 100 mg/dose)",
        notes: ["Administer IV slowly"]
      }
    ],
    onset: "2–15 min",
    duration: "2–4 hrs",
    adverseEffects: ["Respiratory Depression", "Hypotension", "Bradycardia", "Nausea & Vomiting", "Dizziness", "Seizures (normeperidine toxicity)", "Constipation"],
    precautions: '<span class="hl hl--danger">MAOI interaction is potentially fatal</span> — can cause serotonin syndrome (hyperthermia, agitation, neuromuscular instability) or severe respiratory depression. Do not use within 14 days of MAOI use. Meperidine is metabolized to <span class="hl hl--warn">normeperidine</span>, which accumulates in renal impairment and causes CNS excitability, tremors, and seizures — risk increases with repeat dosing. Many EMS systems have replaced meperidine with fentanyl or morphine for this reason. Use caution in patients with seizure history — normeperidine lowers seizure threshold.'
  },
  {
    id: "methylprednisolone",
    summary: "Synthetic corticosteroid — reduces airway inflammation in asthma/COPD and anaphylaxis. Effects are delayed 1–4 hours but durable.",
    genericName: "Methylprednisolone",
    tradeName: "Solu-Medrol",
    classes: ["Corticosteroid", "Anti-inflammatory"],
    moaBrief: 'Binds to <span class="hl hl--beta">glucocorticoid receptors</span> in cells <span class="moa-arrow">→</span> activates anti-inflammatory and immunosuppressive gene expression <span class="moa-arrow">→</span> <strong>reduces cytokine release, airway inflammation, and edema</strong>.',
    indications: ["Asthma / COPD Exacerbation", "Anaphylaxis (adjunct to epinephrine)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Systemic Fungal Infection (steroids can promote fungal spread)" },
      { text: "Active GI Bleed", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "125–250 mg IV/IM slow push",
        notes: ["Most EMS protocols use 125 mg as the standard dose", "Follow IV dose with NS flush"]
      },
      {
        population: "Pediatric",
        amount: "1–2 mg/kg IV/IM (max 125 mg)",
        notes: ["Follow IV dose with NS flush"]
      }
    ],
    onset: "1–4 hrs (clinical anti-inflammatory effect)",
    duration: "8–24 hrs",
    adverseEffects: ["Hyperglycemia", "Hypokalemia", "Fluid Retention / Hypertension", "Nausea & Vomiting", "Immunosuppression"],
    precautions: 'Effects are <span class="hl hl--warn">delayed 1–4 hours</span> — methylprednisolone does not provide immediate bronchodilation; administer early and continue bronchodilator therapy. In anaphylaxis, <strong>epinephrine is always first-line</strong> — methylprednisolone is adjunct only and will not reverse anaphylaxis acutely. Monitor BGL in diabetic patients — steroids cause hyperglycemia. Avoid in systemic fungal infection — steroids can promote dissemination. Current evidence does <strong>not support</strong> routine use in acute spinal cord injury (NASCIS III failed to confirm benefit; AANS guidelines recommend against it).'
  },
  {
    id: "metoprolol",
    summary: "Selective beta-1 blocker — rate control for A-Fib/flutter, AMI, and hypertension. Selectivity is lost at high doses, risking bronchospasm.",
    genericName: "Metoprolol",
    tradeName: "Lopressor",
    classes: ["Class II Antiarrhythmic", "Selective Beta-1 Blocker"],
    moaBrief: 'Selectively blocks <span class="hl hl--beta">beta-1 adrenergic receptors</span> in the heart <span class="moa-arrow">→</span> decreases HR, contractility, and conduction velocity <span class="moa-arrow">→</span> <strong>reduces myocardial O₂ demand and ventricular rate</strong>.',
    indications: ["Acute MI / Angina", "Atrial Fibrillation with RVR", "Atrial Flutter with RVR", "SVT / PSVT", "Hypertension"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypotension" },
      { text: "Bradycardia" },
      { text: "Cardiogenic Shock" },
      { text: "2nd or 3rd Degree AV Block" },
      { text: "Decompensated Heart Failure" },
      { text: "Severe Asthma or COPD (beta-1 selectivity lost at higher doses)", relative: true },
      { text: "Sick Sinus Syndrome (without pacemaker)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "5 mg IV slow push over 2 min",
        notes: [
          "May repeat every 5–10 min (max total 15 mg)",
          "Elderly patients may require lower doses — more sensitive to bradycardia and hypotension"
        ]
      },
      {
        population: "Pediatric",
        amount: "Not recommended in EMS setting",
        notes: []
      }
    ],
    onset: "1–3 min",
    duration: "3–6 hrs",
    adverseEffects: ["Hypotension", "Bradycardia", "Bronchospasm", "Transient AV Block", "Dizziness", "Nausea & Vomiting", "Dyspnea", "Palpitations"],
    precautions: 'Unlike labetalol, metoprolol is a <span class="hl hl--beta">selective beta-1 blocker</span> — minimal bronchospasm risk at standard doses, but selectivity is lost at high doses. Use with caution in asthma/COPD — not absolutely contraindicated at standard EMS doses. Monitor closely for bradycardia and AV block after each dose. Have atropine and IV fluids ready. Caution in sick sinus syndrome without a pacemaker — may suppress the sinus node. Beta-blocker overdose reversal: glucagon 50 mcg/kg IV.'
  },
  {
    id: "midazolam",
    summary: "Short-acting benzodiazepine — now first-line for prehospital seizures via IM/IN route per AHA guidelines. Also used for procedural sedation and agitation.",
    genericName: "Midazolam",
    tradeName: "Versed",
    classes: ["Benzodiazepine", "Anticonvulsant", "Sedative"],
    moaBrief: 'Binds to <span class="hl hl--beta">GABA-A receptors</span> in the CNS <span class="moa-arrow">→</span> enhances chloride channel opening and neuronal inhibition <span class="moa-arrow">→</span> <strong>raises seizure threshold</strong>, sedation, amnesia, and anxiolysis.',
    indications: ["Active Seizures / Status Epilepticus", "Procedural Sedation", "Agitation"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Narrow-Angle Glaucoma" },
      { text: "Significant CNS or Respiratory Depression" },
      { text: "Shock or Coma", relative: true },
      { text: "Hypotension", relative: true }
    ],
    doses: [
      {
        population: "Adult — Seizures",
        amount: "5–10 mg IM (preferred) OR 0.2 mg/kg IN",
        notes: [
          "IV: 2–4 mg slow push, may repeat every 5 min",
          "IM preferred over IV in active seizures — no IV access needed, faster prehospital delivery (RAMPART trial)"
        ]
      },
      {
        population: "Adult — Procedural Sedation / Agitation",
        amount: "2–5 mg IV/IM/IN",
        notes: ["May repeat after 5–10 min (max total 10 mg)", "Reduce dose by 50% in elderly or hepatic/renal impairment"]
      },
      {
        population: "Pediatric",
        amount: "0.1–0.2 mg/kg IV/IM/IN (max 10 mg)",
        notes: ["IM/IN preferred for active seizures", "May repeat after 5–10 min"]
      }
    ],
    onset: "1–3 min (IV); 5–10 min (IM/IN)",
    duration: "30–60 min (IV); 1–2 hrs (IM/IN)",
    adverseEffects: ["Respiratory Depression", "Oversedation", "Hypotension", "Drowsiness", "Amnesia", "Nausea & Vomiting"],
    precautions: 'Per 2023 AHA/ILCOR guidelines, <span class="hl hl--beta">IM midazolam is now first-line for prehospital seizures</span> (RAMPART trial: equivalent efficacy to IV lorazepam with faster delivery). Monitor for <span class="hl hl--danger">respiratory depression</span> — have airway management immediately available; risk greatly increases with opioids, alcohol, or other CNS depressants. Reduce dose by 50% in elderly and patients with hepatic/renal impairment. Profound sedation in alcohol use disorder patients — use lowest effective dose.'
  },
  {
    id: "morphine-sulfate",
    summary: "Classic opioid analgesic with vasodilatory properties — effective for pain and STEMI. Use caution in NSTEMI — evidence suggests worse outcomes.",
    genericName: "Morphine Sulfate",
    tradeName: "MS Contin (oral) / generic IV",
    classes: ["Opioid Analgesic"],
    moaBrief: 'Binds to <span class="hl hl--beta">mu-opioid receptors</span> in the CNS <span class="moa-arrow">→</span> inhibits ascending pain pathways <span class="moa-arrow">→</span> <strong>analgesia and sedation</strong>. Peripheral vasodilation <span class="moa-arrow">→</span> reduces preload and systemic vascular resistance.',
    indications: ["Moderate to Severe Pain", "STEMI with Severe Pain (adjunct)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypotension / Hypovolemia" },
      { text: "CNS or Respiratory Depression" },
      { text: "MAOI Use (within 14 days) — risk of serotonin syndrome" },
      { text: "Head Injury / Elevated ICP — respiratory depression elevates CO₂ → increases ICP", relative: true },
      { text: "NSTEMI — associated with worse outcomes (CRUSADE registry)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "2–5 mg IV/IO slow push",
        notes: [
          "May repeat every 5–15 min (max total 15 mg)",
          "IM: 5–10 mg — slower onset, less titratable",
          "Administer slowly — rapid IV push causes histamine release and hypotension"
        ]
      },
      {
        population: "Pediatric",
        amount: "0.1–0.2 mg/kg IV/IO slow push (max 10 mg total)",
        notes: ["May repeat every 5–15 min", "Administer slowly"]
      }
    ],
    onset: "3–5 min (IV); 15–30 min (IM)",
    duration: "2–5 hrs",
    adverseEffects: ["Respiratory Depression", "Hypotension", "Bradycardia", "Bronchospasm", "Nausea & Vomiting", "Drowsiness", "Dyspnea"],
    precautions: 'Administer <strong>slowly</strong> — rapid IV push causes histamine release, hypotension, and bronchospasm. <span class="hl hl--warn">Use with extreme caution in inferior MI</span> — RV involvement causes preload-dependence; morphine\'s vasodilation + bradycardia can cause severe hypotension. <span class="hl hl--warn">Avoid in NSTEMI</span> — CRUSADE registry data associated morphine with higher mortality in NSTEMI patients; fentanyl is generally preferred. Head injury is a relative CI — respiratory depression → CO₂ retention → elevated ICP. MAOI interaction can cause serotonin syndrome.'
  },
  {
    id: "naloxone",
    summary: "Pure opioid antagonist — reverses respiratory depression from opioid overdose. Titrate to breathing, not consciousness.",
    genericName: "Naloxone",
    tradeName: "Narcan",
    classes: ["Opioid Antagonist", "Antidote"],
    moaBrief: 'Competitively binds to <span class="hl hl--beta">mu, kappa, and delta opioid receptors</span> in the CNS <span class="moa-arrow">→</span> displaces opioids from receptor sites <span class="moa-arrow">→</span> <strong>reverses respiratory depression, sedation, and hypotension</strong>.',
    indications: ["Known or Suspected Opioid Overdose", "Altered Mental Status of Unknown Etiology (diagnostic)"],
    contraindications: [
      { text: "Hypersensitivity" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "0.4–2 mg IV/IO/IM/IN, titrate to respiratory effort",
        notes: [
          "IN: 4 mg (2 mg per nostril) using concentrated formulation",
          "ET: 2–2.5x IV dose",
          "May repeat every 2–3 min as needed",
          "Titrate to adequate respirations — NOT full consciousness"
        ]
      },
      {
        population: "Pediatric",
        amount: "0.1 mg/kg IV/IO/IM/IN (max 2 mg/dose)",
        notes: ["May repeat every 2–3 min"]
      }
    ],
    onset: "30–90 sec (IV); 2–5 min (IM/IN)",
    duration: "30–90 min",
    adverseEffects: ["Acute Opioid Withdrawal (agitation, combativeness, diaphoresis)", "Nausea & Vomiting", "Tachycardia", "Hypertension", "Seizures (rare)", "Pulmonary Edema (rare)", "Arrhythmias (rare)"],
    precautions: '<span class="hl hl--danger">Titrate to respiratory effort, NOT consciousness</span> — full reversal precipitates acute withdrawal (agitation, vomiting, combativeness, aspiration risk). Start low and titrate up. <span class="hl hl--warn">Duration is shorter than most opioids</span> — patients can re-sedate after naloxone wears off (30–90 min), especially with long-acting opioids or synthetic fentanyl analogs. Monitor closely and be prepared to re-dose or start a drip. Ensure scene safety and appropriate PPE — potential fentanyl/carfentanil exposure risk.'
  },
  {
    id: "nicardipine",
    summary: "Dihydropyridine CCB — IV drip for hypertensive emergencies. Targets vascular smooth muscle, not cardiac conduction (unlike diltiazem/verapamil).",
    genericName: "Nicardipine",
    tradeName: "Cardene",
    classes: ["Calcium Channel Blocker (Dihydropyridine)", "Antihypertensive"],
    moaBrief: 'Selectively blocks <span class="hl hl--beta">L-type calcium channels</span> in vascular smooth muscle <span class="moa-arrow">→</span> reduces calcium influx <span class="moa-arrow">→</span> <strong>vasodilation and decreased systemic vascular resistance</strong>. Minimal effect on cardiac conduction — NOT a Class IV antiarrhythmic.',
    indications: ["Hypertensive Emergency", "Stroke-Associated Hypertension"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Severe Aortic Stenosis" },
      { text: "Acute MI" },
      { text: "Cardiogenic Shock" },
      { text: "Decompensated Heart Failure", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        amount: "5 mg/hr IV drip, titrate by 2.5 mg/hr every 5–15 min",
        notes: [
          "Max 15 mg/hr",
          "Dilute in NS or D5W",
          "Dedicated IV line preferred — incompatible with some solutions"
        ]
      },
      {
        population: "Pediatric",
        amount: "Not recommended in EMS setting",
        notes: []
      }
    ],
    onset: "3–5 min",
    duration: "3–6 hrs (after infusion stopped)",
    adverseEffects: ["Hypotension", "Reflex Tachycardia", "Peripheral Edema", "Dizziness", "Nausea & Vomiting", "Palpitations", "Headache"],
    precautions: 'Titrate carefully — <span class="hl hl--warn">effects persist 3–6 hours after stopping the drip</span>; overcorrection of BP is difficult to reverse quickly. Monitor for reflex tachycardia. Use caution with concurrent beta-blockers or other antihypertensives — additive hypotension. Unlike diltiazem/verapamil, nicardipine is a <strong>dihydropyridine</strong> CCB — it targets vascular smooth muscle, not cardiac conduction tissue, so it is NOT used for rate control.'
  },
  {
    id: "nitroglycerin",
    summary: "Potent vasodilator — reduces preload and myocardial O₂ demand. First-line for angina, ACS, and acute pulmonary edema. Always rule out RV infarct first.",
    genericName: "Nitroglycerin",
    tradeName: "Nitrostat",
    classes: ["Vasodilator", "Antianginal", "Nitrate"],
    moaBrief: 'Metabolized to <span class="hl hl--beta">nitric oxide (NO)</span> <span class="moa-arrow">→</span> activates guanylate cyclase <span class="moa-arrow">→</span> increases cGMP in vascular smooth muscle <span class="moa-arrow">→</span> <strong>venous and arterial vasodilation</strong>. Primarily reduces preload (venodilation) <span class="moa-arrow">→</span> decreases myocardial O₂ demand. At higher doses, arterial dilation reduces afterload.',
    indications: ["Angina / Acute Coronary Syndrome", "Hypertension", "Acute Pulmonary Edema (cardiogenic)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypotension (SBP < 100 mmHg)" },
      { text: "Hypovolemia" },
      { text: "Right Ventricular MI — preload-dependent; vasodilation causes cardiovascular collapse" },
      { text: "PDE-5 Inhibitors — sildenafil/vardenafil within 24 hrs, tadalafil within 48–72 hrs" },
      { text: "Intracranial Hemorrhage" },
      { text: "Severe Anemia", relative: true }
    ],
    doses: [
      {
        population: "Adult — Sublingual",
        amount: "0.4 mg SL tablet or spray, repeat every 3–5 min",
        notes: ["Max 3 doses (1.2 mg total)", "Check BP before each dose — hold if SBP < 100"]
      },
      {
        population: "Adult — IV Drip",
        amount: "5–10 mcg/min, titrate by 5–10 mcg/min every 3–5 min",
        notes: ["Dilute in NS or D5W", "Use non-PVC tubing — NTG adsorbs to standard PVC", "No fixed max — titrate to effect and BP tolerance"]
      },
      {
        population: "Pediatric",
        amount: "Not recommended in EMS setting",
        notes: []
      }
    ],
    onset: "1–3 min (SL); 1–2 min (IV)",
    duration: "20–30 min (SL); duration of infusion (IV)",
    adverseEffects: ["Headache (most common)", "Hypotension", "Reflex Tachycardia", "Dizziness / Syncope", "Nausea & Vomiting", "Palpitations"],
    precautions: '<span class="hl hl--danger">Always rule out right ventricular MI before administration</span> — if inferior STEMI on 12-lead, obtain right-sided ECG (V4R) first. RV infarction is preload-dependent; nitro causes cardiovascular collapse. <span class="hl hl--warn">Check BP before every dose</span> — hold if SBP &lt; 100 mmHg. PDE-5 inhibitor interaction causes severe, refractory hypotension — ask about sildenafil (Viagra), vardenafil (Levitra) within 24 hrs and tadalafil (Cialis) within 48–72 hrs. Store away from light and heat — potency degrades rapidly.'
  },
  {
    id: "nitrous-oxide",
    summary: "Inhaled 50/50 N₂O:O₂ analgesic — rapid onset, patient-controlled via demand valve. Expands trapped gas spaces — contraindicated in pneumothorax.",
    genericName: "Nitrous Oxide",
    tradeName: "Nitronox",
    classes: ["Gaseous Analgesic / Anesthetic"],
    moaBrief: 'Acts as an <span class="hl hl--beta">NMDA receptor antagonist</span> and enhances <span class="hl hl--beta">GABA-mediated inhibition</span> <span class="moa-arrow">→</span> <strong>suppresses pain signal transmission, produces sedation and euphoria</strong>.',
    indications: ["Moderate to Severe Pain", "Anxiety (procedural)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Pneumothorax — N₂O expands trapped gas (34x more soluble than N₂)" },
      { text: "Suspected Bowel Obstruction — gas expansion worsens distension" },
      { text: "Decompression Sickness (the bends)" },
      { text: "Decreased Level of Consciousness — cannot self-administer safely" },
      { text: "Head Injury — risk of expanding pneumocephalus" },
      { text: "Respiratory Distress / Hypoxia" },
      { text: "Hypotension / Shock" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "Self-administered via demand valve — 50% N₂O / 50% O₂",
        notes: [
          "Patient MUST hold the mask — built-in safety (drops mask if oversedated)",
          "Do not strap mask to patient's face"
        ]
      },
      {
        population: "Pediatric",
        amount: "Self-administered via demand valve — 50% N₂O / 50% O₂",
        notes: ["Patient must be old enough to follow instructions and hold mask independently"]
      }
    ],
    onset: "2–5 min",
    duration: "5–10 min (effects cease rapidly after stopping inhalation)",
    adverseEffects: ["Nausea & Vomiting", "Dizziness", "Hallucinations", "Hypoxia (if improperly mixed)", "Respiratory Depression (rare at 50/50)"],
    precautions: 'N₂O is 34x more soluble than nitrogen in blood — it <span class="hl hl--danger">rapidly expands any trapped gas space</span> (pneumothorax, bowel obstruction, middle ear, pneumocephalus). <strong>Patient must hold the mask themselves</strong> — this is the primary safety mechanism; never strap it on. Ensure adequate ventilation of the treatment area — chronic provider exposure causes B12 depletion and neuropathy. Administer <span class="hl hl--warn">diffusion oxygen after discontinuation</span> to prevent diffusion hypoxia (N₂O floods out of blood into alveoli, displacing O₂).'
  },
  {
    id: "ondansetron",
    summary: "5-HT3 antagonist antiemetic — blocks serotonin receptors to suppress the vomiting reflex. Watch for QT prolongation.",
    genericName: "Ondansetron",
    tradeName: "Zofran",
    classes: ["Antiemetic", "5-HT3 Receptor Antagonist"],
    moaBrief: 'Selectively blocks <span class="hl hl--beta">serotonin 5-HT3 receptors</span> in the CNS (chemoreceptor trigger zone) and GI tract <span class="moa-arrow">→</span> inhibits vagal nerve activity <span class="moa-arrow">→</span> <strong>suppresses the vomiting reflex and alleviates nausea</strong>.',
    indications: ["Nausea & Vomiting"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Congenital Long QT Syndrome — risk of torsades de pointes" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "4 mg IV/IO/IM or 4 mg ODT (orally disintegrating tablet)",
        notes: [
          "May repeat after 10–15 min",
          "Administer IV slowly over 2–5 min",
          "ODT: place on tongue — dissolves without water"
        ]
      },
      {
        population: "Pediatric",
        amount: "0.15 mg/kg IV/IO/IM (max 4 mg)",
        notes: ["May repeat after 10–15 min"]
      }
    ],
    onset: "~5 min (IV); 15–30 min (ODT/oral)",
    duration: "3–6 hrs",
    adverseEffects: ["QT Prolongation", "Headache", "Drowsiness", "Constipation", "Fatigue", "Abdominal Pain"],
    precautions: '<span class="hl hl--warn">QT prolongation risk</span> — monitor ECG, especially in patients with electrolyte abnormalities (hypokalemia, hypomagnesemia) or concurrent QT-prolonging medications. Congenital long QT syndrome is a contraindication. Reduce dose in severe hepatic impairment — impaired metabolism leads to drug accumulation. FDA black box warning applies to IV doses &gt;16 mg (removed from market); standard 4 mg EMS dose is within safety margin but QT effect is dose-dependent.'
  },
  {
    id: "oral-glucose",
    summary: "Simple carbohydrate for conscious hypoglycemic patients. Requires intact gag reflex — never give to altered patients.",
    genericName: "Oral Glucose",
    tradeName: "Glutose / Insta-Glucose",
    classes: ["Carbohydrate", "Hyperglycemic"],
    moaBrief: 'Provides <span class="hl hl--beta">rapidly absorbable glucose</span> through the oral/buccal mucosa and GI tract <span class="moa-arrow">→</span> directly raises blood glucose levels <span class="moa-arrow">→</span> <strong>restores cellular energy substrate</strong>.',
    indications: ["Hypoglycemia (in conscious patients with intact gag reflex)"],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Decreased LOC / Inability to Swallow — aspiration risk" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "15–25 g buccal/oral (one tube of glucose gel)",
        notes: ["May repeat after 10–15 min", "Obtain BGL before and after administration"]
      },
      {
        population: "Pediatric",
        amount: "0.5–1 g/kg buccal/oral",
        notes: ["May repeat after 10–15 min", "Patient must be conscious with intact gag reflex"]
      }
    ],
    onset: "10–15 min",
    duration: "1–2 hrs",
    adverseEffects: ["Nausea & Vomiting", "Hyperglycemia", "Rebound Hypoglycemia", "Aspiration (if LOC deteriorates)"],
    precautions: 'Patient <span class="hl hl--danger">must be conscious with an intact gag reflex</span> — aspiration risk is the primary safety concern. Obtain BGL before administration to confirm hypoglycemia. Monitor for rebound hypoglycemia after initial response — oral glucose is short-acting. If patient cannot protect airway or deteriorates, switch to IV dextrose or IM glucagon.'
  },
  {
    id: "oxygen",
    summary: "Supplemental O₂ — titrate to SpO₂ 94–99% (88–92% for CO₂ retainers). Hyperoxia harms stroke, ACS, and post-ROSC patients.",
    genericName: "Oxygen",
    tradeName: "O₂",
    classes: ["Medical Gas"],
    moaBrief: '<span class="hl hl--beta">Increases inspired O₂ concentration (FiO₂)</span> <span class="moa-arrow">→</span> raises alveolar O₂ partial pressure <span class="moa-arrow">→</span> <strong>increases blood oxygen saturation and tissue oxygen delivery</strong>.',
    indications: ["Hypoxemia (SpO₂ < 94%)", "Cardiac Arrest", "Carbon Monoxide Poisoning", "Respiratory Insufficiency", "Shock / Trauma"],
    contraindications: [
      { text: "No absolute contraindications — oxygen should never be withheld from a hypoxic patient" }
    ],
    doses: [
      {
        population: "Adult",
        amount: "Titrate to SpO₂ target",
        notes: [
          "Nasal Cannula: 1–6 L/min (24–44% FiO₂)",
          "Non-Rebreather Mask: 10–15 L/min (60–90% FiO₂)",
          "BVM: 15 L/min (100% FiO₂)",
          "Target SpO₂ 94–99% (general) or 88–92% (suspected CO₂ retainers / COPD)"
        ]
      },
      {
        population: "Pediatric",
        amount: "Titrate to SpO₂ target",
        notes: [
          "Nasal Cannula: 0.25–4 L/min (24–35% FiO₂)",
          "Non-Rebreather Mask: 8–10 L/min (60–80% FiO₂)",
          "BVM: 10–15 L/min (100% FiO₂)",
          "Blow-by O₂ for infants who won't tolerate a mask"
        ]
      }
    ],
    onset: "Immediate",
    duration: "Duration of administration",
    adverseEffects: ["Hyperoxia (tissue damage at prolonged high FiO₂)", "Dry Mucous Membranes", "Absorption Atelectasis (high FiO₂ washes out nitrogen)", "CO₂ Retention in COPD (reduced hypoxic drive)"],
    precautions: '<span class="hl hl--warn">Titrate to target — more is not always better.</span> Hyperoxia worsens outcomes in stroke, ACS, and post-cardiac arrest (AVOID trial). In suspected CO₂ retainers (severe COPD), titrate to SpO₂ 88–92% — high-flow O₂ can blunt hypoxic respiratory drive and worsen CO₂ retention, but <strong>never withhold oxygen from a hypoxic patient</strong>. CO poisoning requires high-flow 100% O₂ regardless of SpO₂ reading (pulse ox is unreliable — reads COHb as O₂Hb). Oxygen supports combustion — ensure no open flames or ignition sources.'
  }
];
