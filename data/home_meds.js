const home_meds = [
  {
    id: "metoprolol",
    summary: "A cardioselective beta-1 blocker used for hypertension, angina, heart failure, and rate control in atrial fibrillation.",
    genericName: "Metoprolol",
    tradeNames: ["Lopressor", "Toprol-XL"],
    category: ["Cardiovascular"],
    classes: ["Beta Blocker", "Antihypertensive", "Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks beta-1 adrenergic receptors in cardiac tissue, reducing the effects of catecholamines on heart rate, contractility, and blood pressure.",
        target: {
          name: "Beta-1 adrenergic receptors",
          action: "antagonist",
          result: "↓ HR, ↓ contractility, ↓ AV conduction, ↓ renin release",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Hypertension", "Angina", "Heart Failure", "Atrial Fibrillation", "Post-MI", "SVT", "Migraine Prophylaxis"],
    considerations: [
      'Causes <span class="hl hl--ci">bradycardia</span> and <span class="hl hl--ci">hypotension</span> — worsened by calcium channel blockers, digoxin, or clonidine.',
      'Masks <span class="hl hl--warn">tachycardia</span> in hypoglycemia, hypovolemia, and anaphylaxis — a normal heart rate does not mean stable.',
      'Patients may be <span class="hl hl--warn">unresponsive to standard epi doses</span> during anaphylaxis.',
      'Abrupt discontinuation causes <span class="hl hl--ci">rebound hypertension</span> and can precipitate angina or MI.',
      '<span class="hl hl--ci">Overdose</span>: severe bradycardia, hypotension, heart block. Prehospital: atropine, glucagon, calcium, transcutaneous pacing.'
    ]
  },
  {
    id: "atenolol",
    summary: "A cardioselective beta-1 blocker used for hypertension, angina, and acute MI. Similar to metoprolol but with lower lipid solubility, resulting in fewer CNS side effects.",
    genericName: "Atenolol",
    tradeNames: ["Tenormin"],
    category: ["Cardiovascular"],
    classes: ["Beta Blocker", "Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks beta-1 adrenergic receptors in the heart, reducing heart rate, contractility, and blood pressure. At higher doses, loses selectivity and also blocks beta-2 receptors in bronchial and vascular smooth muscle.",
        target: {
          name: "Beta-1 adrenergic receptors",
          action: "antagonist",
          result: "↓ HR, ↓ contractility, ↓ BP, ↓ AV conduction",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Hypertension", "Angina", "Acute MI", "SVT", "Migraine Prophylaxis"],
    considerations: [
      'Causes <span class="hl hl--ci">bradycardia</span> and <span class="hl hl--ci">hypotension</span> — compounded by concurrent use of calcium channel blockers, digoxin, or amiodarone.',
      'Masks <span class="hl hl--warn">tachycardia</span> in hypoglycemia, hypovolemia, thyrotoxicosis, and anaphylaxis — do not rely on heart rate alone to gauge hemodynamic status.',
      'Patients on atenolol may have a <span class="hl hl--warn">blunted response to epinephrine</span> during anaphylaxis — larger doses may be needed, risking unopposed alpha stimulation.',
      'Abrupt discontinuation can cause <span class="hl hl--ci">rebound hypertension</span>, worsening angina, or acute MI — never assume a missed dose is benign.',
      '<span class="hl hl--ci">Overdose</span>: lethargy, severe bradycardia, hypotension, bronchospasm, hypoglycemia. Prehospital: atropine, glucagon, vasopressors, transcutaneous pacing. Hemodialysis effective for removal.'
    ]
  },
  {
    id: "carvedilol",
    summary: "A nonselective beta blocker with alpha-1 blocking activity used for heart failure, post-MI left ventricular dysfunction, and hypertension. One of only three beta blockers recommended for heart failure with reduced ejection fraction.",
    genericName: "Carvedilol",
    tradeNames: ["Coreg", "Coreg CR"],
    category: ["Cardiovascular"],
    classes: ["Beta Blocker", "Antihypertensive", "Vasodilator"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks alpha-1 adrenergic receptors in peripheral vasculature, causing vasodilation and reducing systemic vascular resistance. This alpha blockade is what distinguishes carvedilol from selective beta blockers.",
        target: {
          name: "Alpha-1 adrenergic receptors",
          action: "antagonist",
          result: "Vasodilation, ↓ SVR, ↓ afterload",
          system: "adrenergic"
        }
      },
      {
        brief: "Non-selectively blocks beta-1 and beta-2 adrenergic receptors, reducing heart rate, contractility, and renin release. The combined alpha and beta blockade lowers blood pressure while maintaining cardiac output better than pure beta blockers.",
        target: {
          name: "Beta-1 & Beta-2 adrenergic receptors",
          action: "antagonist",
          result: "↓ HR, ↓ contractility, ↓ BP",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Heart Failure", "Hypertension", "Post-MI Left Ventricular Dysfunction", "Atrial Fibrillation", "Angina"],
    considerations: [
      'Causes <span class="hl hl--ci">hypotension</span> and <span class="hl hl--ci">orthostatic syncope</span> more than selective beta blockers due to alpha-1 blockade — especially during initial dosing and in volume-depleted patients.',
      'Masks <span class="hl hl--warn">tachycardia</span> in hypoglycemia, hypovolemia, and anaphylaxis. Also blunts the autonomic warning signs of hypoglycemia in diabetics.',
      'Non-selective beta blockade means it can cause <span class="hl hl--ci">bronchospasm</span> — a risk in patients with COPD or asthma that selective beta blockers largely avoid.',
      'Patients may be <span class="hl hl--warn">resistant to epinephrine</span> during anaphylaxis due to beta-2 blockade. Consider higher epi doses and glucagon.',
      '<span class="hl hl--ci">Overdose</span>: severe bradycardia, hypotension, heart block, bronchospasm, seizures. Long half-life (7–10 hrs) means prolonged toxicity. Prehospital: atropine, glucagon, vasopressors, transcutaneous pacing.'
    ]
  },
  {
    id: "labetalol",
    summary: "A combined alpha-1 and nonselective beta blocker used for hypertension, particularly hypertensive emergencies. Commonly used IV in the ED and prehospitally for acute blood pressure control, including in pregnancy.",
    genericName: "Labetalol",
    tradeNames: ["Trandate", "Normodyne"],
    category: ["Cardiovascular"],
    classes: ["Beta Blocker", "Antihypertensive", "Vasodilator"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks alpha-1 adrenergic receptors, causing vasodilation and reducing peripheral vascular resistance. The alpha-to-beta blockade ratio is approximately 1:3 orally and 1:7 intravenously.",
        target: {
          name: "Alpha-1 adrenergic receptors",
          action: "antagonist",
          result: "Vasodilation, ↓ SVR",
          system: "adrenergic"
        }
      },
      {
        brief: "Non-selectively blocks beta-1 and beta-2 adrenergic receptors, reducing heart rate and contractility. The combined alpha and beta blockade lowers blood pressure without reflex tachycardia.",
        target: {
          name: "Beta-1 & Beta-2 adrenergic receptors",
          action: "antagonist",
          result: "↓ HR, ↓ contractility, ↓ BP without reflex tachycardia",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Hypertension", "Hypertensive Emergency", "Hypertension in Pregnancy", "Preeclampsia", "Aortic Dissection"],
    considerations: [
      'Causes <span class="hl hl--ci">orthostatic hypotension</span> due to alpha-1 blockade — blood pressure drops more in the standing position. Keep patients supine after administration.',
      'Non-selective beta blockade can cause <span class="hl hl--ci">bronchospasm</span> — contraindicated in asthma and use with caution in COPD. May blunt the effects of beta-agonist bronchodilators.',
      'Masks <span class="hl hl--warn">tachycardia</span> in hypoglycemia, hypovolemia, and anaphylaxis. Patients may require higher epinephrine doses due to beta-2 blockade.',
      'Abrupt discontinuation can cause <span class="hl hl--ci">rebound hypertension</span>, tachyarrhythmias, and worsening angina from catecholamine upregulation.',
      '<span class="hl hl--ci">Overdose</span>: severe bradycardia, hypotension, heart block, bronchospasm. Prehospital: atropine, glucagon, vasopressors, transcutaneous pacing.'
    ]
  },
  {
    id: "lisinopril",
    summary: "An ACE inhibitor used for hypertension, heart failure, and diabetic nephropathy.",
    genericName: "Lisinopril",
    tradeNames: ["Zestril", "Prinivil"],
    category: ["Cardiovascular"],
    classes: ["ACE Inhibitor", "Antihypertensive"],
    source: "DailyMed",
    moa: [
      {
        brief: "Inhibits ACE, blocking the conversion of angiotensin I to angiotensin II — reducing vasoconstriction and aldosterone release, which lowers blood pressure and decreases cardiac preload and afterload.",
        target: {
          name: "Angiotensin-converting enzyme (ACE)",
          action: "inhibitor",
          result: "↓ Vasoconstriction, ↓ aldosterone, ↓ preload/afterload",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Hypertension", "Heart Failure", "Diabetic Nephropathy", "Post-MI"],
    considerations: [
      'Can cause significant <span class="hl hl--ci">hypotension</span>, especially in volume-depleted patients or those on multiple antihypertensives.',
      '<span class="hl hl--ci">Angioedema</span> is a rare but life-threatening adverse effect — rapid swelling of the lips, tongue, or airway. Manage as an airway emergency.',
      'A persistent dry cough is the most common adverse effect — not dangerous, but useful for history-taking.',
      'Does not cause reflex tachycardia — heart rate will not reliably compensate for hypotension.',
      'Hyperkalemia risk, especially in renal impairment or when combined with potassium-sparing diuretics.'
    ]
  },
  {
    id: "losartan",
    summary: "An angiotensin II receptor blocker (ARB) used for hypertension, diabetic nephropathy, and stroke prevention in patients with left ventricular hypertrophy.",
    genericName: "Losartan",
    tradeNames: ["Cozaar", "Hyzaar"],
    category: ["Cardiovascular"],
    classes: ["ARB", "Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks angiotensin II at the AT1 receptor, preventing vasoconstriction and aldosterone secretion. Unlike ACE inhibitors, does not affect bradykinin metabolism, which is why cough and angioedema are less common.",
        target: {
          name: "Angiotensin II type 1 (AT1) receptor",
          action: "antagonist",
          result: "↓ Vasoconstriction, ↓ aldosterone, ↓ BP",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Hypertension", "Diabetic Nephropathy", "Stroke Prevention with LVH", "Heart Failure"],
    considerations: [
      'Can cause <span class="hl hl--ci">hypotension</span>, especially in volume-depleted patients or those on diuretics — assess volume status before attributing low BP to other causes.',
      '<span class="hl hl--ci">Angioedema</span> is less common than with ACE inhibitors but still occurs. Patients with prior ACE inhibitor angioedema have increased risk on ARBs.',
      '<span class="hl hl--warn">Hyperkalemia</span> risk, particularly in renal impairment or with concurrent potassium-sparing diuretics, NSAIDs, or potassium supplements.',
      'Does not cause the dry cough associated with ACE inhibitors — if a patient switched from an ACE inhibitor to losartan, this is likely why.',
      'NSAIDs can blunt the antihypertensive effect and worsen renal function — relevant when assessing a hypertensive patient who also takes ibuprofen or naproxen.'
    ]
  },
  {
    id: "amlodipine",
    summary: "A dihydropyridine calcium channel blocker used for hypertension and angina.",
    genericName: "Amlodipine",
    tradeNames: ["Norvasc"],
    category: ["Cardiovascular"],
    classes: ["Calcium Channel Blocker", "Antihypertensive"],
    source: "DailyMed",
    moa: [
      {
        brief: "Inhibits L-type calcium channels in vascular smooth muscle, preventing calcium influx and reducing smooth muscle contraction. This produces peripheral arterial vasodilation and lowers blood pressure without significantly affecting heart rate at therapeutic doses.",
        target: {
          name: "L-type calcium channels (vascular smooth muscle)",
          action: "blocker",
          result: "Vasodilation, ↓ PVR, ↓ BP",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Hypertension", "Chronic Stable Angina", "Vasospastic Angina", "Coronary Artery Disease"],
    considerations: [
      'Causes <span class="hl hl--ci">peripheral edema</span> in up to 10% of patients — dose-related and more common in women. Not a sign of heart failure.',
      'Can cause <span class="hl hl--ci">hypotension</span>, especially in volume-depleted patients or those on multiple antihypertensives. Gradual onset makes acute hypotension unlikely.',
      'Long half-life (30–50 hours) means effects persist well after a missed dose — and overdose toxicity is prolonged.',
      'Unlike non-dihydropyridine CCBs (diltiazem, verapamil), amlodipine does not significantly slow heart rate or AV conduction at therapeutic doses.',
      '<span class="hl hl--ci">Overdose</span>: severe hypotension, reflex tachycardia, shock. Prehospital: IV calcium, vasopressors, IV fluids. Effects are prolonged — expect extended resuscitation.'
    ]
  },
  {
    id: "diltiazem",
    summary: "A non-dihydropyridine calcium channel blocker used for hypertension, angina, and rate control in atrial fibrillation and flutter. Unlike dihydropyridine CCBs such as amlodipine, diltiazem slows AV conduction and heart rate.",
    genericName: "Diltiazem",
    tradeNames: ["Cardizem", "Tiazac", "Cartia XT", "Dilacor XR"],
    category: ["Cardiovascular"],
    classes: ["Calcium Channel Blocker", "Antihypertensive", "Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits L-type calcium channels in cardiac and vascular smooth muscle, reducing intracellular calcium during depolarization. This slows SA and AV node conduction, decreases heart rate, and relaxes vascular smooth muscle to lower blood pressure and peripheral vascular resistance.",
        target: {
          name: "L-type calcium channels (cardiac & vascular smooth muscle)",
          action: "blocker",
          result: "↓ HR, ↓ AV conduction, vasodilation, ↓ BP",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Hypertension", "Chronic Stable Angina", "Vasospastic Angina", "Atrial Fibrillation", "Atrial Flutter", "Supraventricular Tachycardia"],
    considerations: [
      'Causes <span class="hl hl--ci">bradycardia</span> and <span class="hl hl--ci">hypotension</span> — risk increases with concurrent beta blockers, digoxin, or other AV-nodal blocking agents.',
      'Contraindicated in <span class="hl hl--warn">WPW syndrome</span> with atrial fibrillation — blocking the AV node can force conduction down the accessory pathway, causing ventricular fibrillation.',
      'Avoid in <span class="hl hl--warn">wide-complex tachycardia</span> — if the rhythm is actually VT, diltiazem can cause cardiovascular collapse.',
      'Patients on chronic diltiazem who present hypotensive or bradycardic should be treated as possible <span class="hl hl--ci">calcium channel blocker toxicity</span> — IV calcium, atropine, vasopressors, and consider high-dose insulin therapy.',
      '<span class="hl hl--ci">Overdose</span>: profound bradycardia, hypotension, heart block, cardiogenic shock. Prehospital: IV calcium, atropine, glucagon, vasopressors, transcutaneous pacing. Refractory cases may need ECMO.'
    ]
  },
  {
    id: "nifedipine",
    summary: "A dihydropyridine calcium channel blocker used for hypertension and angina. Unlike diltiazem and verapamil, nifedipine acts almost exclusively on vascular smooth muscle with minimal cardiac conduction effects.",
    genericName: "Nifedipine",
    tradeNames: ["Procardia", "Adalat"],
    category: ["Cardiovascular"],
    classes: ["Calcium Channel Blocker", "Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks voltage-dependent L-type calcium channels in vascular smooth muscle, reducing calcium influx and causing arterial vasodilation. This lowers peripheral vascular resistance and blood pressure. Also dilates coronary arteries, relieving vasospasm and increasing myocardial oxygen delivery.",
        target: {
          name: "L-type calcium channels (vascular smooth muscle)",
          action: "blocker",
          result: "Arterial vasodilation, ↓ SVR, ↓ BP, coronary dilation",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Hypertension", "Chronic Stable Angina", "Vasospastic Angina", "Raynaud Phenomenon"],
    considerations: [
      'Causes <span class="hl hl--ci">hypotension</span> and <span class="hl hl--warn">reflex tachycardia</span> — especially the immediate-release formulation. Volume-depleted patients and those on other antihypertensives are at highest risk.',
      'Immediate-release nifedipine should <span class="hl hl--ci">never be used sublingually</span> for hypertensive emergencies — associated with uncontrolled BP drops, MI, and stroke.',
      'Common adverse effects include <span class="hl hl--warn">peripheral edema</span>, flushing, headache, and dizziness. The edema is from arteriolar vasodilation, not heart failure.',
      'Unlike diltiazem and verapamil, nifedipine does not slow heart rate or AV conduction — tachycardia is the expected reflex response to vasodilation.',
      '<span class="hl hl--ci">Overdose</span>: severe hypotension, reflex tachycardia, shock. Prehospital: IV calcium, vasopressors (norepinephrine), glucagon, high-dose insulin. Extended-release forms may cause prolonged toxicity.'
    ]
  },
  {
    id: "clonidine",
    summary: "A centrally acting alpha-2 adrenergic agonist used for hypertension, ADHD, and off-label for opioid withdrawal, anxiety, and insomnia. Frequently encountered on home med lists across multiple patient populations.",
    genericName: "Clonidine",
    tradeNames: ["Catapres", "Kapvay", "Duraclon"],
    category: ["Cardiovascular"],
    classes: ["Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: "Stimulates alpha-2 adrenergic receptors in the brainstem (nucleus tractus solitarii and locus coeruleus), reducing sympathetic outflow from the CNS. This decreases peripheral vascular resistance, heart rate, and blood pressure.",
        target: {
          name: "Central alpha-2 adrenergic receptors",
          action: "agonist",
          result: "↓ Sympathetic outflow, ↓ HR, ↓ BP, ↓ SVR",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Hypertension", "ADHD", "Tourette Syndrome", "Opioid Withdrawal", "Anxiety", "Insomnia"],
    considerations: [
      'Causes <span class="hl hl--ci">bradycardia</span> and <span class="hl hl--ci">hypotension</span> — worsened significantly when combined with beta blockers, calcium channel blockers, or digoxin.',
      'Abrupt discontinuation causes <span class="hl hl--ci">rebound hypertension</span> with agitation, headache, and tremor — rare cases of hypertensive encephalopathy, stroke, and death have been reported.',
      'Significant <span class="hl hl--warn">sedation</span> is common even at therapeutic doses — compounded by alcohol, benzodiazepines, and other CNS depressants.',
      '<span class="hl hl--ci">Overdose</span> mimics opioid toxicity: bradycardia, hypotension, respiratory depression, miosis, and altered consciousness. Hypothermia helps differentiate from opioids. Naloxone may improve CNS depression.',
      'Available as a <span class="hl hl--warn">transdermal patch</span> — patches contain up to 9 mg and can cause prolonged toxicity if chewed or ingested, especially in pediatric patients.'
    ]
  },
  {
    id: "hydrochlorothiazide",
    summary: "A thiazide diuretic used for hypertension and peripheral edema. Often listed as 'HCTZ' on med lists.",
    genericName: "Hydrochlorothiazide",
    tradeNames: ["Microzide", "HydroDIURIL"],
    category: ["Cardiovascular"],
    classes: ["Thiazide Diuretic", "Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits the sodium-chloride cotransporter in the distal convoluted tubule, blocking sodium and chloride reabsorption. This promotes natriuresis and diuresis, reducing intravascular volume and lowering blood pressure.",
        target: {
          name: "Na⁺/Cl⁻ cotransporter (NCC) in distal convoluted tubule",
          action: "inhibitor",
          result: "↓ Na⁺ reabsorption, ↓ intravascular volume, ↓ BP",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Hypertension", "Peripheral edema", "Heart failure", "Nephrotic syndrome", "Calcium nephrolithiasis"],
    considerations: [
      '<span class="hl hl--ci">Hypokalemia</span> is the most common adverse effect — can cause cardiac arrhythmias and potentiate digitalis toxicity. Patients are often co-prescribed potassium supplements.',
      'Causes <span class="hl hl--ci">orthostatic hypotension</span> and volume depletion, especially in elderly or volume-depleted patients and those on multiple antihypertensives.',
      '<span class="hl hl--warn">Hyponatremia</span> can develop, particularly in elderly patients — presents with confusion, weakness, lethargy, and seizures. A common cause of EMS calls in older adults on thiazides.',
      'Can elevate <span class="hl hl--warn">blood glucose</span> levels — diabetic patients on HCTZ may present with worsened glycemic control.',
      'Contains a sulfonamide moiety — use caution in patients reporting <span class="hl hl--warn">sulfa allergy</span>, though cross-reactivity is rare.'
    ]
  },
  {
    id: "furosemide",
    summary: "A loop diuretic used for edema from heart failure, liver disease, and kidney disease. Seeing Lasix on a med list strongly suggests the patient has a volume-management problem.",
    genericName: "Furosemide",
    tradeNames: ["Lasix"],
    category: ["Cardiovascular"],
    classes: ["Loop Diuretic", "Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits the sodium-potassium-chloride cotransporter (NKCC2) in the thick ascending loop of Henle, blocking reabsorption of sodium, chloride, potassium, and water. This produces rapid, high-volume diuresis and reduces intravascular volume and preload.",
        target: {
          name: "Na⁺/K⁺/2Cl⁻ cotransporter (NKCC2) — loop of Henle",
          action: "inhibitor",
          result: "Rapid diuresis, ↓ intravascular volume, ↓ preload",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Heart Failure", "Peripheral Edema", "Pulmonary Edema", "Cirrhosis With Ascites", "Renal Disease", "Hypertension"],
    considerations: [
      'Causes <span class="hl hl--ci">hypotension</span> and <span class="hl hl--ci">orthostatic hypotension</span> — volume-depleted patients on furosemide are at high risk for hemodynamic instability.',
      'Depletes <span class="hl hl--ci">potassium</span> and magnesium — hypokalemia can cause cardiac dysrhythmias, muscle weakness, and cramping. Often co-prescribed with potassium supplements.',
      'Patients on furosemide who present with <span class="hl hl--warn">weakness, fatigue, or altered mental status</span> should be evaluated for dehydration and electrolyte imbalance before assuming other causes.',
      'May reduce arterial responsiveness to <span class="hl hl--drug">norepinephrine</span> — vasopressors can still be used but may require higher doses.',
      'Contains a sulfonamide moiety — ask about <span class="hl hl--warn">sulfa allergy</span>, though cross-reactivity is uncommon.'
    ]
  },
  {
    id: "spironolactone",
    summary: "A potassium-sparing diuretic and aldosterone antagonist used for heart failure, resistant hypertension, and edema from cirrhosis. Commonly paired with loop diuretics like furosemide.",
    genericName: "Spironolactone",
    tradeNames: ["Aldactone"],
    category: ["Cardiovascular"],
    classes: ["Potassium-Sparing Diuretic", "Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: "Competitively blocks aldosterone at mineralocorticoid receptors in the distal convoluted tubule and collecting duct, preventing sodium reabsorption and potassium secretion. Also reduces cardiac fibrosis and remodeling in heart failure.",
        target: {
          name: "Mineralocorticoid (aldosterone) receptors",
          action: "antagonist",
          result: "↑ Na⁺/H₂O excretion, ↑ K⁺ retention, ↓ cardiac remodeling",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Heart failure", "Resistant hypertension", "Cirrhosis with ascites", "Edema", "Primary hyperaldosteronism", "Hypokalemia prevention"],
    considerations: [
      '<span class="hl hl--ci">Hyperkalemia</span> is the most dangerous adverse effect — risk increases significantly when combined with ACE inhibitors, ARBs, or beta blockers.',
      'Causes <span class="hl hl--ci">hypotension</span> and <span class="hl hl--warn">dehydration</span> through diuresis — assess volume status carefully in patients on spironolactone plus other diuretics.',
      'Increases the half-life of <span class="hl hl--drug">digoxin</span> — patients on both drugs are at higher risk for digitalis toxicity.',
      'Often seen alongside <span class="hl hl--drug">furosemide</span> in heart failure and cirrhosis patients — the combination indicates significant fluid management issues.',
      'Can cause <span class="hl hl--warn">hyponatremia</span> with lethargy, confusion, and drowsiness — especially in hot weather or when combined with other diuretics.'
    ]
  },
  {
    id: "atorvastatin",
    summary: "An HMG-CoA reductase inhibitor (statin) used to lower cholesterol and reduce cardiovascular event risk.",
    genericName: "Atorvastatin",
    tradeNames: ["Lipitor"],
    category: ["Cardiovascular"],
    classes: ["Statin"],
    source: "Mixed",
    moa: [
      {
        brief: "Competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. Reduced intracellular cholesterol upregulates LDL receptor expression on hepatocytes, increasing clearance of LDL from the blood.",
        target: {
          name: "HMG-CoA reductase",
          action: "inhibitor",
          result: "↓ Hepatic cholesterol synthesis, ↑ LDL receptor expression, ↓ LDL-C",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Hyperlipidemia", "Coronary Artery Disease", "Stroke Prevention", "Familial Hypercholesterolemia", "Type 2 Diabetes Cardiovascular Risk Reduction"],
    considerations: [
      'Statins themselves rarely cause acute prehospital emergencies — their presence on a med list indicates <span class="hl hl--indication">established cardiovascular disease risk</span> or known CAD.',
      '<span class="hl hl--ci">Rhabdomyolysis</span> is rare but serious — patient may present with diffuse muscle pain, weakness, and dark urine. Risk increases with CYP3A4 inhibitors and renal impairment.',
      'Myalgias (muscle aches without CK elevation) are the most common complaint — reported in up to 10% of patients and may be the reason a patient stopped taking the drug.',
      'Statin use signals the patient likely also takes <span class="hl hl--drug">aspirin</span>, antihypertensives, or anticoagulants — build a complete med picture on scene.',
      'High-dose atorvastatin is associated with a slightly increased risk of <span class="hl hl--warn">hemorrhagic stroke</span>, particularly in patients with recent stroke or TIA history.'
    ]
  },
  {
    id: "rosuvastatin",
    summary: "A high-intensity statin used for hyperlipidemia and cardiovascular disease prevention.",
    genericName: "Rosuvastatin",
    tradeNames: ["Crestor", "Ezallor"],
    category: ["Cardiovascular"],
    classes: ["Statin", "Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. Reduced intracellular cholesterol upregulates LDL receptors on hepatocytes, increasing clearance of circulating LDL.",
        target: {
          name: "HMG-CoA reductase",
          action: "inhibitor",
          result: "↓ Hepatic cholesterol synthesis, ↑ LDL receptor expression, ↓ circulating LDL-C",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Hyperlipidemia", "Hypertriglyceridemia", "Atherosclerotic cardiovascular disease prevention", "Familial hypercholesterolemia"],
    considerations: [
      '<span class="hl hl--ci">Rhabdomyolysis</span> is rare but the most dangerous adverse effect — presents with diffuse muscle pain, weakness, and dark urine. Can progress to acute renal failure.',
      'Myalgia is the most common complaint — patients frequently report muscle aches and weakness. Important for history-taking on any musculoskeletal complaint.',
      'Statin use signals the patient is being treated for <span class="hl hl--warn">cardiovascular risk factors</span> — expect concurrent use of antihypertensives, antiplatelets, or anticoagulants.',
      'May increase fasting glucose and <span class="hl hl--warn">HbA1c</span> — slightly elevated risk of new-onset diabetes, though cardiovascular benefits outweigh this risk.',
      'Rosuvastatin has a <span class="hl hl--general">longer half-life</span> than most statins and higher potency — considered high-intensity at standard doses, making it one of the most effective LDL-lowering agents.'
    ]
  },
  {
    id: "nitroglycerin",
    summary: "An organic nitrate vasodilator used for acute relief and prevention of angina pectoris. Patients carry sublingual tablets or spray for chest pain episodes.",
    genericName: "Nitroglycerin",
    tradeNames: ["Nitrostat", "Nitrolingual", "NitroMist", "Nitro-Bid", "Nitro-Dur"],
    category: ["Cardiovascular"],
    classes: ["Nitrate", "Vasodilator"],
    source: "Mixed",
    moa: [
      {
        brief: "Releases nitric oxide (NO), which activates guanylate cyclase and increases cyclic GMP in vascular smooth muscle, causing relaxation. At lower doses, venodilation predominates, reducing preload. At higher doses, arterial dilation also occurs, reducing afterload.",
        target: {
          name: "Vascular smooth muscle (via nitric oxide / cGMP pathway)",
          action: "donor",
          result: "Venodilation, ↓ preload, ↓ afterload, ↓ myocardial O₂ demand",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Angina Pectoris", "Coronary Artery Disease", "Acute Coronary Syndrome", "Heart Failure"],
    considerations: [
      'Causes <span class="hl hl--ci">hypotension</span> through venodilation — patients should be seated or supine during use. Volume-depleted patients are at highest risk for hemodynamic collapse.',
      '<span class="hl hl--ci">Absolutely contraindicated</span> with PDE-5 inhibitors (<span class="hl hl--drug">sildenafil</span>, <span class="hl hl--drug">tadalafil</span>) taken within 24–48 hours — combination causes severe, refractory hypotension.',
      'Use extreme caution with suspected <span class="hl hl--warn">right ventricular infarction</span> (inferior STEMI) — these patients are preload-dependent and NTG can cause precipitous hemodynamic collapse.',
      'Relief of chest pain by NTG is not diagnostic — esophageal spasm, biliary colic, and other non-cardiac conditions also respond to nitroglycerin.',
      'Contraindicated with <span class="hl hl--ci">increased intracranial pressure</span> — vasodilation increases cerebral blood volume and can worsen ICP in head injuries or hemorrhagic stroke.'
    ]
  },
  {
    id: "digoxin",
    summary: "A cardiac glycoside used for heart failure and ventricular rate control in atrial fibrillation. Has an extremely narrow therapeutic index — toxicity is a well-known prehospital emergency.",
    genericName: "Digoxin",
    tradeNames: ["Lanoxin"],
    category: ["Cardiovascular"],
    classes: ["Cardiac Glycoside", "Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits the Na⁺/K⁺-ATPase pump in cardiac myocytes, increasing intracellular sodium and subsequently intracellular calcium via the Na⁺/Ca²⁺ exchanger. The increased calcium enhances contractility and slows conduction through the AV node.",
        target: {
          name: "Na⁺/K⁺-ATPase",
          action: "inhibitor",
          result: "↑ Contractility, ↓ AV conduction, ↓ ventricular rate",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Heart Failure", "Atrial Fibrillation", "Atrial Flutter"],
    considerations: [
      'Has a <span class="hl hl--warn">very narrow therapeutic index</span> — the difference between therapeutic and toxic levels is small. Toxicity risk increases with renal impairment, hypokalemia, hypomagnesemia, and hypercalcemia.',
      'Causes <span class="hl hl--ci">bradycardia</span> and can produce any dysrhythmia, including AV block, PVCs, ventricular tachycardia, and ventricular fibrillation. <span class="hl hl--ci">Bidirectional ventricular tachycardia</span> is pathognomonic for digoxin toxicity.',
      'Toxicity presents with GI symptoms (nausea, vomiting, anorexia), neurological changes (confusion, weakness), and classic <span class="hl hl--warn">yellow-tinted vision</span> (xanthopsia).',
      '<span class="hl hl--ci">Hyperkalemia</span> in acute toxicity is a marker of severity and a predictor of mortality. Avoid IV calcium in digoxin toxicity due to risk of fatal cardiac arrest ("stone heart").',
      '<span class="hl hl--ci">Overdose</span>: life-threatening dysrhythmias and hyperkalemia. Prehospital: atropine for bradycardia, avoid cardioversion (can trigger V-fib). Definitive treatment is digoxin immune Fab (Digibind/DigiFab).'
    ]
  },
  {
    id: "amiodarone",
    summary: "A class III antiarrhythmic used for life-threatening ventricular arrhythmias and off-label for atrial fibrillation rate/rhythm control.",
    genericName: "Amiodarone",
    tradeNames: ["Cordarone", "Pacerone"],
    category: ["Cardiovascular"],
    classes: ["Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: "Primarily blocks potassium rectifier currents during phase 3 of the cardiac action potential, prolonging action potential duration and the effective refractory period. Also exhibits sodium channel, calcium channel, and beta-adrenergic blocking properties, contributing to slowed conduction and suppression of re-entrant arrhythmias.",
        target: {
          name: "Potassium channels (+ Na⁺, Ca²⁺, β-adrenergic)",
          action: "blocker",
          result: "↑ Refractory period, ↓ conduction velocity, ↓ HR",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Ventricular Fibrillation", "Ventricular Tachycardia", "Atrial Fibrillation", "Atrial Flutter", "Supraventricular Tachycardia"],
    considerations: [
      'Causes <span class="hl hl--ci">bradycardia</span> and <span class="hl hl--ci">hypotension</span> — do not administer to patients who are already bradycardic or hypotensive.',
      'Has an extremely long half-life (40–55 days). Adverse effects persist long after discontinuation, and drug interactions may linger for weeks.',
      'Chronic use causes <span class="hl hl--warn">thyroid dysfunction</span> (both hypo- and hyperthyroidism) in up to 10% of patients. Thyroid storm from amiodarone-induced hyperthyroidism is a rare but critical presentation.',
      '<span class="hl hl--ci">Pulmonary toxicity</span> resembling interstitial lung disease can develop — presents with progressive dyspnea and cough. Carries ~10% mortality.',
      'Prolongs <span class="hl hl--warn">QTc</span> and can cause torsades de pointes, especially with concurrent beta-blockers, digoxin, or electrolyte imbalances. Also increases serum <span class="hl hl--drug">digoxin</span> levels by ~70%.'
    ]
  },
  {
    id: "aspirin",
    summary: "An NSAID and antiplatelet agent used at low doses for cardiovascular prevention and at higher doses for pain, fever, and inflammation.",
    genericName: "Aspirin",
    tradeNames: ["Bayer", "Ecotrin", "Bufferin"],
    category: ["Anticoagulation", "Cardiovascular", "Pain & Anti-inflammatory"],
    classes: ["Antiplatelet", "NSAID", "Antipyretic"],
    source: "Mixed",
    moa: [
      {
        brief: "Irreversibly inhibits COX-1, blocking the synthesis of thromboxane A2 — a lipid that drives platelet aggregation. Because the inhibition is irreversible and platelets cannot synthesize new COX, the antiplatelet effect lasts the entire 7–10 day lifespan of the platelet.",
        target: {
          name: "Cyclooxygenase-1 (COX-1)",
          action: "inhibitor",
          result: "↓ Thromboxane A2, ↓ platelet aggregation",
          system: "enzymatic"
        }
      },
      {
        brief: "At higher doses, inhibits both COX-1 and COX-2, reducing prostaglandin synthesis. This decreases inflammation, lowers fever via hypothalamic thermoregulation, and blocks peripheral pain signaling.",
        target: {
          name: "Cyclooxygenase-1 & 2 (COX-1/COX-2)",
          action: "inhibitor",
          result: "↓ Prostaglandins → ↓ inflammation, ↓ fever, ↓ pain",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["ACS Prevention", "Post-MI", "Post-Stent", "Stroke Prevention", "Peripheral Artery Disease", "Pain", "Fever", "Rheumatoid Arthritis"],
    considerations: [
      'Irreversibly inhibits platelets, creating <span class="hl hl--ci">bleeding risk</span> that persists 7–10 days after the last dose. Even minor trauma (especially head injuries in elderly patients) can produce significant hemorrhage.',
      'Patients often take aspirin alongside other anticoagulants (<span class="hl hl--drug">warfarin</span>, <span class="hl hl--drug">apixaban</span>, <span class="hl hl--drug">clopidogrel</span>), compounding bleeding risk substantially.',
      'GI irritation is common — chronic use causes <span class="hl hl--ci">gastric ulcers</span> and GI bleeding. A patient on daily aspirin presenting with hematemesis or melena should raise suspicion for upper GI bleed.',
      '<span class="hl hl--warn">Aspirin allergy</span> is more common in asthmatics (aspirin-exacerbated respiratory disease). Can trigger severe bronchospasm. Always confirm allergy status before field administration for suspected ACS.',
      '<span class="hl hl--ci">Overdose</span>: salicylate toxicity produces tinnitus, tachypnea, mixed respiratory alkalosis and metabolic acidosis, hyperthermia, and altered mental status. Prehospital: supportive care, IV fluids, sodium bicarbonate if available per protocol.'
    ]
  },
  {
    id: "clopidogrel",
    summary: "A thienopyridine antiplatelet agent used to prevent thrombotic events in patients with acute coronary syndrome, recent MI or stroke, peripheral arterial disease, and coronary stents. Often prescribed alongside aspirin as dual antiplatelet therapy (DAPT).",
    genericName: "Clopidogrel",
    tradeNames: ["Plavix"],
    category: ["Anticoagulation", "Cardiovascular"],
    classes: ["Antiplatelet"],
    source: "Mixed",
    moa: [
      {
        brief: "A prodrug converted by hepatic CYP2C19 into an active metabolite that irreversibly binds the P2Y12 ADP receptor on platelets, preventing ADP-mediated platelet activation and aggregation for the platelet's lifespan (7–10 days).",
        target: {
          name: "P2Y12 ADP receptor (platelets)",
          action: "antagonist",
          result: "↓ Platelet aggregation, ↓ thrombus formation",
          system: "coagulation"
        }
      }
    ],
    patientIndications: ["Acute Coronary Syndrome", "Post-MI", "Recent Stroke", "Peripheral Arterial Disease", "Post-PCI With Stenting", "Atrial Fibrillation"],
    considerations: [
      '<span class="hl hl--ci">Bleeding</span> is the primary adverse effect and can occur at any site, including intracranial. No reversal agent exists — platelet transfusion may partially restore hemostasis but is less effective within 6 hours of the last dose.',
      'Patients on clopidogrel with <span class="hl hl--warn">head trauma</span> are at increased risk for traumatic intracranial hemorrhage. Field triage guidelines recommend transport to a trauma center capable of rapid neurosurgical evaluation.',
      'Platelet inhibition is <span class="hl hl--warn">irreversible</span> — effects persist 7–10 days after discontinuation. A patient who stopped clopidogrel 2–3 days ago still has significant antiplatelet activity.',
      '<span class="hl hl--ci">Premature discontinuation</span> — especially in post-stent patients — dramatically increases the risk of stent thrombosis, MI, and death. Do not advise patients to skip doses.',
      'CYP2C19 poor metabolizers have reduced conversion to the active drug and may have inadequate platelet inhibition despite taking clopidogrel as prescribed.'
    ]
  },
  {
    id: "warfarin",
    summary: "A vitamin K antagonist anticoagulant used to prevent and treat thromboembolic disorders. Patients take it for atrial fibrillation, mechanical heart valves, DVT/PE treatment, and stroke prevention.",
    genericName: "Warfarin",
    tradeNames: ["Coumadin", "Jantoven"],
    category: ["Anticoagulation"],
    classes: ["Anticoagulant", "Vitamin K Antagonist"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits vitamin K epoxide reductase, preventing the recycling of vitamin K to its active form. This leaves clotting factors II, VII, IX, and X unable to undergo gamma-carboxylation, rendering them inactive and reducing the blood's ability to clot.",
        target: {
          name: "Vitamin K epoxide reductase",
          action: "inhibitor",
          result: "↓ Active clotting factors II, VII, IX, X → ↓ coagulation",
          system: "coagulation"
        }
      }
    ],
    patientIndications: ["Atrial Fibrillation", "DVT", "Pulmonary Embolism", "Mechanical Heart Valve", "Stroke Prevention", "Hypercoagulable States"],
    considerations: [
      'Significant <span class="hl hl--ci">bleeding risk</span> — any trauma patient on warfarin should be treated as high-risk for hemorrhage, including occult intracranial bleeding after even minor head injuries.',
      'Narrow therapeutic index with an extremely long list of drug and food interactions. Vitamin K-rich foods (leafy greens), antibiotics, NSAIDs, and many other medications can push INR dangerously high or low.',
      'Anticoagulant effect is <span class="hl hl--warn">not immediately reversible</span> — vitamin K takes 6–24 hours to restore clotting factor production. Life-threatening bleeding requires 4-factor PCC or FFP for immediate reversal.',
      'Fall risk patients on warfarin are a high-priority transport — subdural hematomas can develop insidiously and expand over hours even from minor mechanisms.',
      '<span class="hl hl--ci">Supratherapeutic INR</span> can present with spontaneous bleeding: gingival bleeding, epistaxis, hematuria, melena, hematemesis, or extensive bruising without significant trauma.'
    ]
  },
  {
    id: "apixaban",
    summary: "A direct oral anticoagulant (DOAC) that inhibits factor Xa, used to prevent stroke in nonvalvular atrial fibrillation and to treat or prevent DVT and PE. Unlike warfarin, it does not require INR monitoring.",
    genericName: "Apixaban",
    tradeNames: ["Eliquis"],
    category: ["Anticoagulation"],
    classes: ["Anticoagulant", "Direct Oral Anticoagulant (DOAC)", "Factor Xa Inhibitor"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively and reversibly inhibits free and clot-bound factor Xa, blocking the propagation phase of the coagulation cascade without requiring antithrombin III as a cofactor.",
        target: {
          name: "Factor Xa",
          action: "inhibitor",
          result: "↓ Thrombin generation, ↓ clot formation",
          system: "coagulation"
        }
      }
    ],
    patientIndications: ["Nonvalvular Atrial Fibrillation", "Deep Vein Thrombosis", "Pulmonary Embolism", "DVT Prophylaxis Post-Hip/Knee Surgery"],
    considerations: [
      'Primary risk is <span class="hl hl--ci">bleeding</span> — can cause serious or fatal hemorrhage. Assess for signs of occult blood loss (weakness, pallor, hypotension) in any patient on apixaban.',
      'Reversal agent <span class="hl hl--drug">andexanet alfa (Andexxa)</span> is available but hospital-based. Prehospital management of major bleeding is supportive — direct pressure, IV fluids, rapid transport.',
      'Unlike warfarin, <span class="hl hl--general">no INR monitoring</span> is required — standard coagulation studies (PT/INR, aPTT) do not reliably reflect apixaban activity. A normal INR does not rule out anticoagulation.',
      'Abrupt discontinuation increases <span class="hl hl--ci">thrombotic risk</span> — patients who stopped taking their apixaban are at elevated risk for stroke or PE.',
      'Concurrent use with <span class="hl hl--warn">aspirin, NSAIDs, or other anticoagulants</span> significantly increases bleeding risk. Check the full med list for stacked anticoagulation.'
    ]
  },
  {
    id: "rivaroxaban",
    summary: "A direct oral anticoagulant (DOAC) that inhibits Factor Xa, used for stroke prevention in atrial fibrillation, treatment and prevention of DVT/PE, and secondary prevention after acute coronary syndrome or peripheral artery disease.",
    genericName: "Rivaroxaban",
    tradeNames: ["Xarelto"],
    category: ["Anticoagulation", "Cardiovascular"],
    classes: ["Anticoagulant", "Direct Oral Anticoagulant (DOAC)", "Factor Xa Inhibitor"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds directly and reversibly to Factor Xa, blocking the final common pathway of the coagulation cascade and preventing thrombin generation. Inhibits both free and clot-bound Factor Xa without requiring antithrombin as a cofactor.",
        target: {
          name: "Factor Xa",
          action: "inhibitor",
          result: "↓ Thrombin generation, ↓ clot formation",
          system: "coagulation"
        }
      }
    ],
    patientIndications: ["Nonvalvular Atrial Fibrillation", "Deep Vein Thrombosis", "Pulmonary Embolism", "DVT/PE Prophylaxis", "Coronary Artery Disease", "Peripheral Artery Disease"],
    considerations: [
      'Primary risk is <span class="hl hl--ci">bleeding</span> — GI hemorrhage rates are slightly higher than warfarin. Any trauma patient on rivaroxaban should be treated as high-risk for hemorrhagic complications.',
      'No routine lab monitoring exists — standard coagulation tests (PT, aPTT) are unreliable for measuring rivaroxaban effect. A normal PT with a sensitive reagent suggests minimal drug activity.',
      '<span class="hl hl--drug">Andexanet alfa</span> is the specific reversal agent for life-threatening bleeding. Prothrombin complex concentrate (PCC) is an alternative when andexanet is unavailable.',
      'Short half-life (5–9 hours, longer in elderly) means anticoagulant effect diminishes faster than warfarin after the last dose — relevant when timing surgery or assessing bleeding risk.',
      'Abrupt discontinuation increases <span class="hl hl--ci">thrombotic risk</span> — patients who stopped taking rivaroxaban are at elevated risk for stroke, DVT, or PE.'
    ]
  },
  {
    id: "potassium-chloride",
    summary: "An oral potassium supplement used to prevent and treat hypokalemia. Patients on diuretics, particularly loop and thiazide diuretics, are the most likely to have this on their med list.",
    genericName: "Potassium Chloride",
    tradeNames: ["K-Dur", "Klor-Con", "Micro-K", "K-Tab"],
    category: ["Cardiovascular"],
    classes: ["Electrolyte Supplement"],
    source: "StatPearls",
    moa: [
      {
        brief: "Directly replenishes potassium stores. Potassium is the primary intracellular cation responsible for maintaining cell membrane potential, cardiac electrical conduction, and skeletal muscle function.",
        target: {
          name: "Intracellular potassium stores",
          action: "donor",
          result: "Restores normal serum K⁺ levels, stabilizes cardiac conduction",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Hypokalemia", "Hypokalemia Prevention (Diuretic-Induced)", "Heart Failure", "Chronic Kidney Disease"],
    considerations: [
      'Presence on a med list signals the patient is at risk for <span class="hl hl--ci">hypokalemia</span> — check for concurrent diuretic use and consider potassium-related dysrhythmias if the patient presents with cardiac complaints.',
      'Both <span class="hl hl--ci">hypokalemia</span> and <span class="hl hl--ci">hyperkalemia</span> cause life-threatening dysrhythmias — peaked T waves (high K⁺) and flattened T waves with U waves (low K⁺) are key ECG findings.',
      'Concurrent use of <span class="hl hl--warn">ACE inhibitors, ARBs, or potassium-sparing diuretics</span> increases the risk of hyperkalemia — look for these combinations on the med list.',
      'Patients on <span class="hl hl--drug">digoxin</span> are especially vulnerable to hypokalemia — low potassium potentiates digitalis toxicity and increases the risk of fatal dysrhythmias.',
      'Non-compliance or missed doses can cause rapid potassium drops in patients dependent on supplementation, presenting as <span class="hl hl--ci">muscle weakness</span>, cramping, or cardiac irritability.'
    ]
  },
  {
    id: "metformin",
    summary: "A biguanide oral antihyperglycemic used for type 2 diabetes. Lowers blood glucose by decreasing hepatic glucose production, reducing intestinal absorption, and improving peripheral insulin sensitivity — without directly causing hypoglycemia.",
    genericName: "Metformin",
    tradeNames: ["Glucophage", "Glucophage XR", "Fortamet", "Glumetza", "Riomet"],
    category: ["Endocrine"],
    classes: ["Biguanide"],
    source: "Mixed",
    moa: [
      {
        brief: "Decreases hepatic glucose production, reduces intestinal glucose absorption, and increases peripheral glucose uptake and utilization by improving insulin sensitivity. Unlike sulfonylureas, does not stimulate insulin secretion or cause hyperinsulinemia.",
        target: {
          name: "Hepatic gluconeogenesis & peripheral insulin receptors",
          action: "inhibitor",
          result: "↓ Hepatic glucose output, ↑ peripheral glucose uptake, ↓ blood glucose",
          system: "metabolic"
        }
      }
    ],
    patientIndications: ["Type 2 Diabetes", "Prediabetes", "Polycystic Ovary Syndrome", "Gestational Diabetes"],
    considerations: [
      '<span class="hl hl--ci">Lactic acidosis</span> is rare but carries high mortality — risk increases with renal impairment, hepatic disease, sepsis, hypoxia, and alcoholism. Suspect it in a metformin patient presenting with malaise, tachypnea, and altered mental status.',
      'Does not cause <span class="hl hl--indication">hypoglycemia</span> when used alone — but can when combined with insulin or sulfonylureas. A hypoglycemic patient on metformin monotherapy likely has another cause.',
      'Contraindicated in low-perfusion states — <span class="hl hl--warn">shock, sepsis, and acute MI</span> all increase lactic acidosis risk. Relevant when assessing a critically ill diabetic patient.',
      'GI effects (nausea, vomiting, diarrhea) are the most common adverse effects and can mimic other abdominal complaints on EMS calls.',
      'Long-term use causes <span class="hl hl--warn">vitamin B12 deficiency</span>, which can present as peripheral neuropathy — relevant for history-taking in patients with numbness or weakness complaints.'
    ]
  },
  {
    id: "insulin-glargine",
    summary: "A long-acting basal insulin analog injected once daily to maintain background glycemic control in type 1 and type 2 diabetes. Provides a steady insulin level over 24 hours without a pronounced peak.",
    genericName: "Insulin Glargine",
    tradeNames: ["Lantus", "Basaglar", "Semglee", "Toujeo"],
    category: ["Endocrine"],
    classes: ["Insulin", "Hormone"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds to insulin receptors on skeletal muscle and adipose tissue, promoting cellular glucose uptake. Simultaneously suppresses hepatic glucose production and inhibits lipolysis and proteolysis. Modified amino acid structure forms microprecipitates at physiologic pH after subcutaneous injection, creating a slow, peakless absorption over 24 hours.",
        target: {
          name: "Insulin receptors (IR)",
          action: "agonist",
          result: "↑ Cellular glucose uptake, ↓ hepatic glucose output, ↓ blood glucose",
          system: "metabolic"
        }
      }
    ],
    patientIndications: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes"],
    considerations: [
      '<span class="hl hl--ci">Hypoglycemia</span> is the primary risk — presents with diaphoresis, tremors, tachycardia, altered mental status, seizures, or coma. Check blood glucose on any insulin-dependent patient with AMS.',
      'Beta blockers and clonidine can <span class="hl hl--warn">mask tachycardia and diaphoresis</span> in hypoglycemia — a patient on both insulin and a beta blocker may present with AMS as the only sign.',
      '<span class="hl hl--ci">Overdose</span> causes prolonged hypoglycemia lasting up to 24 hours due to the long-acting formulation. Dextrose boluses may need to be repeated; a single correction does not mean the patient is safe.',
      'Insulin-dependent patients found unresponsive should be assumed hypoglycemic until proven otherwise — <span class="hl hl--warn">treat empirically with dextrose or glucagon</span> if glucose check is delayed.',
      'Patients may also take rapid-acting insulin (e.g., lispro, aspart) in addition to glargine — the presence of <span class="hl hl--drug">multiple insulin types</span> increases overdose and dosing-error risk.'
    ]
  },
  {
    id: "glipizide",
    summary: "A second-generation sulfonylurea used to lower blood glucose in type 2 diabetes. Works by stimulating insulin release from pancreatic beta cells, which means hypoglycemia can occur independently of food intake.",
    genericName: "Glipizide",
    tradeNames: ["Glucotrol", "Glucotrol XL"],
    category: ["Endocrine"],
    classes: ["Sulfonylurea"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks ATP-sensitive potassium channels on pancreatic beta cells, causing depolarization and calcium influx that triggers insulin granule exocytosis. Insulin release occurs regardless of blood glucose level, which is why hypoglycemia is the dominant risk.",
        target: {
          name: "ATP-sensitive K⁺ channels (pancreatic beta cells)",
          action: "blocker",
          result: "↑ Insulin secretion, ↓ blood glucose",
          system: "metabolic"
        }
      }
    ],
    patientIndications: ["Type 2 Diabetes"],
    considerations: [
      '<span class="hl hl--ci">Hypoglycemia</span> is the primary adverse effect — presents with diaphoresis, tremors, tachycardia, confusion, seizures, or coma. Because the drug forces insulin release independent of glucose levels, hypoglycemia can be severe and prolonged.',
      'Sulfonylurea-induced hypoglycemia has a high risk of <span class="hl hl--warn">recurrence after initial dextrose correction</span>. These patients should not be treated and released in the field — transport is indicated even if glucose normalizes after treatment.',
      'Elderly, malnourished, and renally impaired patients are at <span class="hl hl--warn">highest risk</span> for severe hypoglycemia due to decreased drug clearance and reduced glycogen stores.',
      'Extended-release formulations (<span class="hl hl--drug">Glucotrol XL</span>) can cause delayed-onset hypoglycemia up to 24–48 hours post-ingestion, making accidental or intentional overdose particularly dangerous.',
      '<span class="hl hl--ci">Overdose</span>: prolonged, refractory hypoglycemia that may require repeated dextrose boluses and continuous dextrose infusion. Glucagon is a temporizing measure only — it can paradoxically stimulate further insulin release. Octreotide is the definitive adjunct in-hospital.'
    ]
  },
  {
    id: "glimepiride",
    summary: "A second-generation sulfonylurea used to lower blood glucose in type 2 diabetes. Stimulates insulin release from functioning pancreatic beta cells, making hypoglycemia the primary prehospital concern.",
    genericName: "Glimepiride",
    tradeNames: ["Amaryl"],
    category: ["Endocrine"],
    classes: ["Sulfonylurea"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks ATP-sensitive potassium channels on pancreatic beta cells, triggering membrane depolarization, calcium influx, and insulin exocytosis. Insulin release is glucose-independent, meaning the drug can drive blood glucose dangerously low even in fasting states.",
        target: {
          name: "ATP-sensitive K⁺ channels (pancreatic beta cells)",
          action: "blocker",
          result: "↑ Insulin secretion, ↓ blood glucose",
          system: "metabolic"
        }
      }
    ],
    patientIndications: ["Type 2 Diabetes"],
    considerations: [
      '<span class="hl hl--ci">Hypoglycemia</span> is the dominant adverse effect — presents with diaphoresis, tremors, tachycardia, altered mental status, seizures, or coma. Occurs because insulin release is not glucose-dependent.',
      'Sulfonylurea-induced hypoglycemia is prone to <span class="hl hl--warn">recurrence after dextrose correction</span>. The drug continues stimulating insulin release for hours — these patients require transport even if glucose normalizes on scene.',
      'Glimepiride has a longer duration of action than glipizide, increasing the risk of <span class="hl hl--warn">delayed and prolonged hypoglycemia</span> — especially in elderly and renally impaired patients with decreased clearance.',
      'Contraindicated in patients with <span class="hl hl--warn">sulfonamide allergy</span> — cross-reactivity is possible. Ask about sulfa allergies during history-taking.',
      '<span class="hl hl--ci">Overdose</span>: severe, prolonged hypoglycemia that can persist 24–72 hours. Repeated dextrose boluses are temporizing. Glucagon may paradoxically worsen hypoglycemia by stimulating further insulin release. Octreotide is the definitive in-hospital adjunct.'
    ]
  },
  {
    id: "semaglutide",
    summary: "A GLP-1 receptor agonist used for type 2 diabetes and chronic weight management. Available as a weekly subcutaneous injection (Ozempic, Wegovy) and a daily oral tablet (Rybelsus).",
    genericName: "Semaglutide",
    tradeNames: ["Ozempic", "Wegovy", "Rybelsus"],
    category: ["Endocrine"],
    classes: ["GLP-1 Agonist"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds to and activates GLP-1 receptors, stimulating glucose-dependent insulin secretion and suppressing glucagon release. Also delays gastric emptying and activates central satiety pathways, reducing appetite and food intake.",
        target: {
          name: "GLP-1 receptors",
          action: "agonist",
          result: "↑ Insulin secretion, ↓ glucagon, delayed gastric emptying, ↓ appetite",
          system: "metabolic"
        }
      }
    ],
    patientIndications: ["Type 2 Diabetes", "Obesity", "Chronic Weight Management", "Cardiovascular Risk Reduction in T2DM"],
    considerations: [
      'GI effects are the most common reason for EMS contact — <span class="hl hl--ci">nausea, vomiting, diarrhea, and abdominal pain</span> can cause significant dehydration. Assess fluid status carefully and consider IV fluid resuscitation.',
      '<span class="hl hl--ci">Hypoglycemia</span> risk increases substantially when combined with sulfonylureas or insulin. Check blood glucose on all patients taking semaglutide, especially diabetics on multiple agents.',
      'Delayed gastric emptying raises <span class="hl hl--warn">aspiration risk</span> in patients with altered mental status. Treat airway management with heightened caution.',
      'Associated with <span class="hl hl--ci">acute pancreatitis</span> — consider in patients presenting with severe epigastric pain radiating to the back.',
      '<span class="hl hl--ci">Overdose</span>: presents with severe nausea/vomiting, hypotension, hypoglycemia, and altered mental status. Counterfeit and compounded products are increasingly encountered — the patient may not be taking FDA-approved semaglutide.'
    ]
  },
  {
    id: "empagliflozin",
    summary: "An SGLT2 inhibitor used for type 2 diabetes, heart failure, and chronic kidney disease. Lowers blood glucose by blocking renal glucose reabsorption, and has significant cardiovascular and renal protective effects independent of glycemic control.",
    genericName: "Empagliflozin",
    tradeNames: ["Jardiance"],
    category: ["Endocrine", "Cardiovascular"],
    classes: ["SGLT2 Inhibitor"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits SGLT2 in the proximal renal tubule, preventing reabsorption of filtered glucose and sodium. This increases urinary glucose excretion (lowering blood glucose independent of insulin) and produces natriuresis and osmotic diuresis, reducing intravascular volume and cardiac preload.",
        target: {
          name: "Sodium-glucose co-transporter 2 (SGLT2)",
          action: "inhibitor",
          result: "↑ Urinary glucose excretion, ↓ blood glucose, ↓ intravascular volume",
          system: "metabolic"
        }
      }
    ],
    patientIndications: ["Type 2 Diabetes", "Heart Failure", "Chronic Kidney Disease"],
    considerations: [
      'Causes <span class="hl hl--ci">volume depletion</span> through osmotic diuresis — can present as hypotension, dehydration, or syncope, especially in patients also taking diuretics, ACE inhibitors, or ARBs.',
      'Can cause <span class="hl hl--ci">euglycemic diabetic ketoacidosis</span> — DKA with normal or near-normal blood glucose. A BGL in range does not rule out DKA in a patient on an SGLT2 inhibitor.',
      'Increases risk of <span class="hl hl--warn">urinary tract infections</span> and genital mycotic infections due to elevated urinary glucose concentration.',
      '<span class="hl hl--ci">Fournier gangrene</span> (necrotizing fasciitis of the perineum) is a rare but serious complication — FDA black box concern. Suspect in patients with perineal pain, tenderness, or swelling.',
      'Does not typically cause <span class="hl hl--indication">hypoglycemia</span> as monotherapy because the mechanism is insulin-independent — but risk increases when combined with insulin or sulfonylureas.'
    ]
  },
  {
    id: "dapagliflozin",
    summary: "An SGLT2 inhibitor used for type 2 diabetes, heart failure, and chronic kidney disease. Blocks glucose reabsorption in the kidneys, causing glucosuria and osmotic diuresis that lowers blood glucose and reduces fluid volume.",
    genericName: "Dapagliflozin",
    tradeNames: ["Farxiga"],
    category: ["Endocrine", "Cardiovascular"],
    classes: ["SGLT2 Inhibitor"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits the sodium-glucose cotransporter 2 in the proximal tubule, preventing reabsorption of filtered glucose. This produces glucosuria and osmotic diuresis, lowering blood glucose and reducing intravascular volume.",
        target: {
          name: "Sodium-glucose cotransporter 2 (SGLT2)",
          action: "inhibitor",
          result: "↓ Glucose reabsorption, glucosuria, osmotic diuresis",
          system: "metabolic"
        }
      }
    ],
    patientIndications: ["Type 2 Diabetes", "Heart Failure", "Chronic Kidney Disease"],
    considerations: [
      '<span class="hl hl--ci">Euglycemic DKA</span> — SGLT2 inhibitors can cause diabetic ketoacidosis with normal or near-normal blood glucose levels. Suspect in any patient on this drug presenting with nausea, vomiting, abdominal pain, or Kussmaul breathing, even without hyperglycemia.',
      'Causes <span class="hl hl--ci">volume depletion</span> through osmotic diuresis — risk of symptomatic hypotension and dehydration, especially in elderly patients or those on loop diuretics.',
      '<span class="hl hl--ci">Fournier gangrene</span> (necrotizing fasciitis of the perineum) is a rare but serious complication — FDA black box concern. Suspect in patients with perineal pain, tenderness, or swelling.',
      'Increases risk of <span class="hl hl--warn">genitourinary infections</span> (genital mycotic infections, UTIs) due to persistent glucosuria.',
      'Does not typically cause <span class="hl hl--indication">hypoglycemia</span> as monotherapy because the mechanism is insulin-independent — but risk increases when combined with insulin or sulfonylureas.'
    ]
  },
  {
    id: "albuterol",
    summary: "A short-acting beta-2 agonist (SABA) used as a rescue inhaler for acute bronchospasm in asthma and COPD. Patients carrying an albuterol inhaler have reactive airway disease until proven otherwise.",
    genericName: "Albuterol",
    tradeNames: ["ProAir", "Ventolin", "AccuNeb", "Proventil"],
    category: ["Pulmonary"],
    classes: ["Beta-2 Agonist", "Bronchodilator"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively activates beta-2 adrenergic receptors on bronchial smooth muscle, increasing intracellular cAMP and causing rapid bronchodilation. Also enhances mucociliary clearance.",
        target: {
          name: "Beta-2 adrenergic receptors",
          action: "agonist",
          result: "Bronchodilation, ↑ mucociliary clearance",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Asthma", "COPD", "Exercise-Induced Bronchospasm"],
    considerations: [
      'Causes <span class="hl hl--ci">tachycardia</span> and <span class="hl hl--warn">tremor</span> — the two most predictable side effects. Stop or hold in the setting of tachyarrhythmia.',
      'Can cause <span class="hl hl--ci">hypokalemia</span> through intracellular potassium shift — this is a transcellular redistribution, not a true body deficit. Significant after repeated or high doses.',
      '<span class="hl hl--ci">Paradoxical bronchospasm</span> can occur, especially with nebulizers containing benzalkonium chloride preservative. If wheezing worsens after treatment, discontinue immediately.',
      '<span class="hl hl--drug">Beta blockers</span> neutralize the bronchodilatory effect and can trigger severe bronchospasm in asthma patients — a critical interaction on calls where both drugs are in play.',
      'Albuterol is an adjunct in anaphylaxis for lower airway wheezing — <span class="hl hl--drug">epinephrine</span> remains first-line. Do not substitute albuterol for epi in anaphylaxis.'
    ]
  },
  {
    id: "ipratropium",
    summary: "An inhaled anticholinergic bronchodilator used for maintenance treatment of COPD and as an add-on to albuterol in acute asthma exacerbations.",
    genericName: "Ipratropium",
    tradeNames: ["Atrovent", "Combivent"],
    category: ["Pulmonary"],
    classes: ["Bronchodilator", "LAMA"],
    source: "Mixed",
    moa: [
      {
        brief: "Antagonizes acetylcholine at muscarinic receptors on bronchial smooth muscle, reducing vagally mediated bronchoconstriction and decreasing mucus secretion.",
        target: {
          name: "Muscarinic cholinergic receptors (M3)",
          action: "antagonist",
          result: "Bronchodilation, ↓ airway secretions",
          system: "cholinergic"
        }
      }
    ],
    patientIndications: ["COPD", "Chronic Bronchitis", "Emphysema", "Asthma Exacerbation"],
    considerations: [
      'In EMS, ipratropium is combined with <span class="hl hl--drug">albuterol</span> in the first nebulizer for acute bronchospasm — the anticholinergic and beta-agonist mechanisms are complementary.',
      'Use caution in patients with <span class="hl hl--warn">narrow-angle glaucoma</span> — nebulized ipratropium can worsen intraocular pressure, especially if mist contacts the eyes. Use a mouthpiece over a face mask when possible.',
      'Can cause <span class="hl hl--ci">paradoxical bronchospasm</span> on initial use. If wheezing worsens after administration, discontinue immediately.',
      '<span class="hl hl--warn">Anticholinergic effects</span> include dry mouth, urinary retention, and tachycardia — assess for these in patients already taking other anticholinergic medications.',
      'Overdose by inhalation is unlikely due to poor systemic absorption. High-dose toxicity would present as classic <span class="hl hl--ci">anticholinergic syndrome</span>: hyperthermia, agitation, mydriasis, mucosal dryness.'
    ]
  },
  {
    id: "fluticasone",
    summary: "An inhaled corticosteroid used as a maintenance controller for asthma and COPD. Patients take it daily to reduce airway inflammation — it does not treat acute bronchospasm.",
    genericName: "Fluticasone",
    tradeNames: ["Flovent", "ArmonAir", "Flonase"],
    category: ["Pulmonary"],
    classes: ["Corticosteroid"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds intracellular glucocorticoid receptors, suppressing inflammatory gene transcription and reducing airway inflammation, mucus production, and bronchial hyperresponsiveness.",
        target: {
          name: "Glucocorticoid receptors",
          action: "agonist",
          result: "↓ Airway inflammation, ↓ mucus production, ↓ bronchial hyperresponsiveness",
          system: "inflammatory"
        }
      }
    ],
    patientIndications: ["Asthma", "COPD", "Allergic Rhinitis"],
    considerations: [
      'Not a rescue inhaler — fluticasone does <span class="hl hl--ci">not treat acute bronchospasm</span>. If a patient in respiratory distress is only using their fluticasone inhaler, they need a beta-2 agonist.',
      'Long-term use can cause <span class="hl hl--warn">adrenal suppression</span>. Patients who abruptly stop or who are under physiological stress may develop adrenal crisis — consider this in unexplained hypotension or altered mental status.',
      '<span class="hl hl--warn">Immunosuppression</span> increases susceptibility to infections. Oropharyngeal candidiasis (thrush) is the most common local adverse effect.',
      'Patients on high-dose inhaled corticosteroids may have <span class="hl hl--warn">blunted stress responses</span> — their cortisol production may be insufficient during acute illness, trauma, or surgery.',
      'Systemic effects are generally minimal at standard inhaled doses, but co-administration with strong <span class="hl hl--drug">CYP3A4 inhibitors</span> (ritonavir, ketoconazole) can significantly increase systemic exposure and toxicity.'
    ]
  },
  {
    id: "fluticasone-salmeterol",
    summary: "A combination inhaled corticosteroid and long-acting beta-2 agonist (ICS/LABA) used for maintenance treatment of asthma and COPD. Not a rescue inhaler — patients still need albuterol for acute symptoms.",
    genericName: "Fluticasone/Salmeterol",
    tradeNames: ["Advair Diskus", "Advair HFA", "AirDuo RespiClick"],
    category: ["Pulmonary"],
    classes: ["Corticosteroid", "LABA", "Bronchodilator"],
    source: "Mixed",
    moa: [
      {
        brief: "Fluticasone suppresses airway inflammation by inhibiting the release of inflammatory cytokines, leukotrienes, and prostaglandins, reducing mucosal edema, mucus production, and bronchial hyperresponsiveness.",
        target: {
          name: "Glucocorticoid receptors (airway)",
          action: "agonist",
          result: "↓ Airway inflammation, ↓ mucus production, ↓ bronchial hyperreactivity",
          system: "inflammatory"
        }
      },
      {
        brief: "Salmeterol activates beta-2 receptors on bronchial smooth muscle, producing sustained bronchodilation lasting approximately 12 hours per dose.",
        target: {
          name: "Beta-2 adrenergic receptors (bronchial smooth muscle)",
          action: "agonist",
          result: "Sustained bronchodilation, ↑ airflow",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Asthma", "COPD", "Chronic Bronchitis", "Emphysema"],
    considerations: [
      'This is a <span class="hl hl--warn">maintenance inhaler, not a rescue inhaler</span> — it will not relieve acute bronchospasm. Patients should still carry a short-acting beta-2 agonist (albuterol) for acute episodes.',
      'The salmeterol component can cause <span class="hl hl--ci">tachycardia</span>, palpitations, and QTc prolongation, particularly in overdose or when combined with other sympathomimetics.',
      '<span class="hl hl--ci">Paradoxical bronchospasm</span> can occur after inhalation — treat with a short-acting bronchodilator and discontinue the combination inhaler.',
      'Long-term inhaled corticosteroid use can cause <span class="hl hl--warn">adrenal suppression</span> — patients on high doses may have blunted cortisol responses during acute illness or trauma.',
      'Concurrent use with <span class="hl hl--drug">MAOIs or TCAs</span> can potentiate the cardiovascular effects of salmeterol — use extreme caution.'
    ]
  },
  {
    id: "montelukast",
    summary: "A leukotriene receptor antagonist used for chronic asthma prophylaxis, exercise-induced bronchoconstriction prevention, and allergic rhinitis. Not a rescue medication — does not treat acute asthma attacks.",
    genericName: "Montelukast",
    tradeNames: ["Singulair"],
    category: ["Pulmonary"],
    classes: ["Leukotriene Modifier"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks the cysteinyl leukotriene CysLT1 receptor, preventing LTD4 and LTE4 from triggering airway smooth muscle contraction, mucus secretion, and eosinophilic inflammation.",
        target: {
          name: "Cysteinyl leukotriene receptor (CysLT1)",
          action: "antagonist",
          result: "↓ Bronchoconstriction, ↓ airway inflammation, ↓ mucus production",
          system: "inflammatory"
        }
      }
    ],
    patientIndications: ["Asthma", "Exercise-Induced Bronchoconstriction", "Seasonal Allergic Rhinitis", "Perennial Allergic Rhinitis"],
    considerations: [
      '<span class="hl hl--ci">Neuropsychiatric effects</span> including agitation, depression, hallucinations, and suicidal ideation have been reported — carries an FDA boxed warning. Ask about behavioral changes during history-taking.',
      'Not a rescue inhaler and has <span class="hl hl--warn">no role in acute asthma attacks</span>. If a patient is relying on montelukast during an exacerbation, they need appropriate bronchodilator therapy.',
      'Systemic <span class="hl hl--warn">eosinophilia</span> and vasculitis consistent with Churg-Strauss syndrome have been reported rarely, particularly when oral corticosteroid doses are being reduced.',
      'Generally well tolerated with a wide therapeutic margin — <span class="hl hl--general">overdose is not a significant prehospital concern</span>. No specific toxidrome or antidote.',
      'Seeing montelukast on a med list confirms a history of <span class="hl hl--indication">reactive airway disease or allergies</span> — factor this into respiratory assessment and treatment decisions.'
    ]
  },
  {
    id: "prednisone",
    summary: "A synthetic corticosteroid used for a wide range of inflammatory, autoimmune, and allergic conditions. Patients on chronic prednisone have suppressed adrenal function and are immunocompromised — both directly affect prehospital assessment and management.",
    genericName: "Prednisone",
    tradeNames: ["Deltasone", "Rayos", "Sterapred"],
    category: ["Endocrine", "Pulmonary"],
    classes: ["Corticosteroid"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds intracellular glucocorticoid receptors, modifying gene transcription to suppress inflammatory mediators (prostaglandins, leukotrienes, cytokines) and reduce immune cell activation. The result is broad anti-inflammatory and immunosuppressive activity across multiple organ systems.",
        target: {
          name: "Glucocorticoid receptors",
          action: "agonist",
          result: "↓ Inflammatory mediators, ↓ immune response",
          system: "inflammatory"
        }
      }
    ],
    patientIndications: ["Asthma", "COPD exacerbation", "Rheumatoid arthritis", "Systemic lupus erythematosus", "Inflammatory bowel disease", "Allergic reactions", "Adrenal insufficiency", "Organ transplant rejection prophylaxis"],
    considerations: [
      'Chronic use causes <span class="hl hl--ci">adrenal suppression</span> — patients cannot mount an appropriate stress response to illness or injury. Abrupt discontinuation or physiological stress without supplemental steroids can precipitate <span class="hl hl--ci">adrenal crisis</span> (refractory hypotension, altered mental status).',
      '<span class="hl hl--ci">Immunosuppression</span> masks signs of infection — fever, tachycardia, and localized tenderness may be blunted or absent. Maintain a high index of suspicion for sepsis even with a benign-appearing exam.',
      'Causes <span class="hl hl--warn">hyperglycemia</span> — can worsen diabetic control or unmask latent diabetes. Check blood glucose in any prednisone patient with altered mental status.',
      'Chronic use leads to <span class="hl hl--warn">osteoporosis</span>, thin fragile skin, and poor wound healing — expect increased fracture risk from minor mechanisms and easy bruising or skin tears during assessment and IV access.',
      'Can cause psychiatric effects including <span class="hl hl--ci">agitation, psychosis, and severe mood changes</span> — consider steroid-induced psychiatric disturbance in patients on high-dose prednisone presenting with behavioral emergencies.'
    ]
  },
  {
    id: "levothyroxine",
    summary: "A synthetic thyroid hormone (T4) used to replace deficient thyroid function in patients with hypothyroidism. Patients on levothyroxine have an underlying thyroid disorder — typically Hashimoto's thyroiditis or prior thyroidectomy — and depend on this medication to maintain normal metabolism.",
    genericName: "Levothyroxine",
    tradeNames: ["Synthroid", "Levoxyl", "Levothroid", "Unithroid", "Tirosint"],
    category: ["Endocrine"],
    classes: ["Thyroid Agent", "Hormone"],
    source: "Mixed",
    moa: [
      {
        brief: "Provides exogenous T4 identical to the hormone produced by the thyroid gland. T4 is converted peripherally to T3, which binds nuclear thyroid receptors and regulates metabolic rate, cardiac output, and thermogenesis.",
        target: {
          name: "Thyroid hormone receptors",
          action: "donor",
          result: "Restores normal metabolic rate, HR, and thermogenesis",
          system: "metabolic"
        }
      }
    ],
    patientIndications: ["Hypothyroidism", "Hashimoto's Thyroiditis", "Post-Thyroidectomy", "Thyroid Cancer (TSH Suppression)", "Myxedema"],
    considerations: [
      'Excessive replacement produces a <span class="hl hl--ci">hyperthyroid state</span> — tachycardia, hypertension, tremor, anxiety, and heat intolerance. Consider levothyroxine overdosage in any patient presenting with unexplained sinus tachycardia.',
      'Patients on levothyroxine with <span class="hl hl--warn">uncorrected adrenal insufficiency</span> can develop acute adrenal crisis — thyroid hormone replacement increases cortisol metabolism and unmasks the deficiency.',
      'A hypothyroid patient who has missed or discontinued levothyroxine is at risk for <span class="hl hl--ci">myxedema coma</span> — altered mental status, hypothermia, bradycardia, and hypotension. This is a life-threatening emergency.',
      'Levothyroxine <span class="hl hl--warn">potentiates oral anticoagulants</span> — patients on concurrent warfarin have increased bleeding risk.',
      'Symptoms of overdose may be <span class="hl hl--warn">delayed several days</span> due to the long half-life of T4. An asymptomatic patient with a recent large ingestion still requires monitoring and follow-up.'
    ]
  },
  {
    id: "omeprazole",
    summary: "A proton pump inhibitor used for GERD, peptic ulcer disease, and erosive esophagitis. Available OTC and by prescription, making it one of the most frequently seen GI medications on home med lists.",
    genericName: "Omeprazole",
    tradeNames: ["Prilosec"],
    category: ["GI"],
    classes: ["Proton Pump Inhibitor"],
    source: "Mixed",
    moa: [
      {
        brief: "Irreversibly inhibits the H⁺/K⁺ ATPase pump on gastric parietal cells, blocking the final step of acid secretion. Suppresses both basal and stimulated acid production regardless of the stimulus.",
        target: {
          name: "H⁺/K⁺ ATPase (proton pump)",
          action: "inhibitor",
          result: "↓ Gastric acid secretion",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["GERD", "Peptic Ulcer Disease", "Erosive Esophagitis", "Zollinger-Ellison Syndrome", "H. pylori Eradication"],
    considerations: [
      'Long-term use increases risk of <span class="hl hl--ci">C. difficile</span>-associated diarrhea — relevant if a patient presents with severe watery diarrhea and is on chronic PPI therapy.',
      'Chronic use can cause <span class="hl hl--ci">hypomagnesemia</span>, potentially leading to tetany, seizures, or cardiac arrhythmias. Consider in patients with unexplained QT prolongation or neuromuscular symptoms.',
      'Reduces absorption of <span class="hl hl--warn">clopidogrel</span> by inhibiting CYP2C19 — patients on both drugs may have reduced antiplatelet effect and higher thrombotic risk.',
      'Overdose is clinically benign — confusion, drowsiness, tachycardia, and nausea reported at massive doses, but no serious outcomes with monotherapy. No specific antidote exists.',
      'Masks symptoms of <span class="hl hl--warn">gastric malignancy</span> — symptomatic relief does not rule out serious underlying pathology in patients with persistent GI complaints.'
    ]
  },
  {
    id: "pantoprazole",
    summary: "A proton pump inhibitor used for erosive esophagitis, GERD maintenance, and pathological hypersecretory conditions including Zollinger-Ellison syndrome. Also used off-label for stress ulcer prophylaxis and prevention of NSAID-induced ulcers.",
    genericName: "Pantoprazole",
    tradeNames: ["Protonix"],
    category: ["GI"],
    classes: ["Proton Pump Inhibitor"],
    source: "Mixed",
    moa: [
      {
        brief: "Irreversibly binds to the H+/K+ ATPase proton pump on gastric parietal cells, blocking the final step of acid secretion. The effect persists for up to 24 hours regardless of the stimulus for acid production.",
        target: {
          name: "H+/K+ ATPase (proton pump)",
          action: "inhibitor",
          result: "↓ Gastric acid secretion (basal and stimulated)",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["GERD", "Erosive Esophagitis", "Zollinger-Ellison Syndrome", "Peptic Ulcer Disease", "Stress Ulcer Prophylaxis"],
    considerations: [
      'Long-term use causes <span class="hl hl--ci">hypomagnesemia</span>, which can present as tetany, seizures, or arrhythmias — secondary hypocalcemia and hypokalemia may also occur.',
      'Reduces absorption of <span class="hl hl--drug">clopidogrel</span> by inhibiting CYP2C19 — patients on both drugs may have diminished antiplatelet effect.',
      'Chronic use increases risk of <span class="hl hl--warn">C. difficile</span> infection, bone fractures, and vitamin B12/iron deficiency — particularly in older adults.',
      'Overdose is not clinically significant — no serious outcomes reported with pantoprazole alone, no specific antidote, not removable by hemodialysis.',
      'Masks symptoms of <span class="hl hl--warn">gastric malignancy</span> — symptomatic improvement does not rule out serious underlying GI pathology.'
    ]
  },
  {
    id: "gabapentin",
    summary: "An anticonvulsant and nerve pain medication used for partial seizures, postherpetic neuralgia, and a wide range of off-label pain and psychiatric conditions. Structurally related to GABA but does not act directly on GABA receptors.",
    genericName: "Gabapentin",
    tradeNames: ["Neurontin", "Gralise", "Horizant"],
    category: ["Neurological", "Pain & Anti-inflammatory"],
    classes: ["Anticonvulsant"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds the α2δ-1 subunit of voltage-gated calcium channels in the CNS, reducing presynaptic calcium influx and inhibiting the release of excitatory neurotransmitters including glutamate, norepinephrine, and substance P.",
        target: {
          name: "α2δ-1 voltage-gated calcium channels",
          action: "blocker",
          result: "↓ Excitatory neurotransmitter release, ↓ neuronal hyperexcitability",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Postherpetic Neuralgia", "Partial Seizures", "Neuropathic Pain", "Restless Legs Syndrome", "Fibromyalgia", "Anxiety Disorders"],
    considerations: [
      'Causes <span class="hl hl--ci">sedation</span>, dizziness, and ataxia — contributes to fall risk, especially in elderly patients. Effects are amplified with concurrent CNS depressants.',
      'Combined with <span class="hl hl--ci">opioids</span>, gabapentin significantly increases the risk of respiratory depression and death — increasingly recognized as a dangerous combination.',
      'Abrupt discontinuation can trigger <span class="hl hl--ci">withdrawal seizures</span> and status epilepticus, even in patients not originally prescribed it for epilepsy.',
      'Gabapentin is <span class="hl hl--warn">renally excreted</span> — patients with kidney disease or on dialysis accumulate toxic levels, presenting with altered consciousness, tremors, and respiratory depression.',
      'Increasingly a <span class="hl hl--warn">drug of misuse</span> — patients may take supratherapeutic amounts or combine it with opioids and benzodiazepines for potentiated euphoria. No specific antidote exists for overdose.'
    ]
  },
  {
    id: "phenytoin",
    summary: "A first-generation anticonvulsant used for tonic-clonic and complex partial seizures. Also used for seizure prophylaxis following neurosurgery. Has a narrow therapeutic index with concentration-dependent neurotoxicity.",
    genericName: "Phenytoin",
    tradeNames: ["Dilantin", "Phenytek"],
    category: ["Neurological"],
    classes: ["Anticonvulsant"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks voltage-gated sodium channels by stabilizing their inactive state, prolonging the neuronal refractory period and preventing the high-frequency repetitive firing that propagates seizure activity.",
        target: {
          name: "Voltage-gated sodium channels",
          action: "blocker",
          result: "↓ Seizure propagation, stabilized neuronal membranes",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Generalized Tonic-Clonic Seizures", "Complex Partial Seizures", "Seizure Prophylaxis Post-Neurosurgery"],
    considerations: [
      '<span class="hl hl--warn">Narrow therapeutic index</span> — toxicity is concentration-dependent: nystagmus at lower levels, progressing to ataxia, slurred speech, lethargy, and eventually coma and paradoxical seizures at very high levels.',
      'Heavily protein-bound (~90% to albumin) — patients with <span class="hl hl--warn">hypoalbuminemia</span> (liver disease, renal failure, malnutrition) can be toxic despite "normal" total phenytoin levels.',
      'Potent <span class="hl hl--warn">CYP450 inducer</span> with extensive drug interactions — new medications, illness, or formulation changes can push levels into toxicity without any dose change.',
      'Chronic use causes <span class="hl hl--ci">gingival hyperplasia</span>, folate-deficiency anemia, peripheral neuropathy, and decreased bone density.',
      '<span class="hl hl--ci">Overdose</span>: primarily neurotoxicity — nystagmus, ataxia, dysarthria, altered mental status. No specific antidote; treatment is supportive. Paradoxical seizures possible at extreme levels.'
    ]
  },
  {
    id: "levetiracetam",
    summary: "An anticonvulsant used for partial-onset seizures, myoclonic seizures, and primary generalized tonic-clonic seizures. Chemically unrelated to other antiepileptic drugs, with minimal drug interactions and a favorable safety profile.",
    genericName: "Levetiracetam",
    tradeNames: ["Keppra", "Keppra XR"],
    category: ["Neurological"],
    classes: ["Anticonvulsant"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds to synaptic vesicle protein 2A (SV2A), modulating neurotransmitter release by decreasing the rate of vesicle fusion. This reduces excitatory neurotransmission and raises the seizure threshold.",
        target: {
          name: "Synaptic vesicle protein 2A (SV2A)",
          action: "modulator",
          result: "↓ Excitatory neurotransmitter release, ↑ seizure threshold",
          system: "other"
        }
      }
    ],
    patientIndications: ["Partial-Onset Seizures", "Myoclonic Seizures", "Primary Generalized Tonic-Clonic Seizures", "Seizure Prophylaxis (TBI)", "Status Epilepticus (Off-Label)"],
    considerations: [
      'Causes <span class="hl hl--ci">somnolence</span> and fatigue in up to 15% of patients — may present as altered mental status or excessive drowsiness on a call.',
      '<span class="hl hl--warn">Behavioral changes</span> including aggression, irritability, agitation, and psychosis occur in roughly 13% of patients. Ask about recent medication changes in psychiatric-appearing calls.',
      'Does <span class="hl hl--indication">not cause respiratory depression</span> at therapeutic levels — an important distinction from benzodiazepines and phenytoin when evaluating a seizure patient.',
      'Abrupt discontinuation can precipitate <span class="hl hl--ci">breakthrough seizures</span> or status epilepticus — ask whether the patient has been taking their medication as prescribed.',
      'Minimal drug interactions and no hepatic metabolism — unlikely to complicate medication administration in the field.'
    ]
  },
  {
    id: "valproic-acid",
    summary: "An anticonvulsant and mood stabilizer used for seizure disorders, bipolar disorder, and migraine prophylaxis. Available as valproic acid, sodium valproate, and divalproex sodium (Depakote).",
    genericName: "Valproic Acid",
    tradeNames: ["Depakote", "Depakene", "Depacon", "Stavzor"],
    category: ["Neurological", "Psychiatric"],
    classes: ["Anticonvulsant", "Mood Stabilizer"],
    source: "Mixed",
    moa: [
      {
        brief: "Enhances GABA activity by inhibiting GABA degradation and increasing GABA synthesis, raising inhibitory tone in the CNS. Also blocks voltage-gated sodium, calcium, and potassium channels, reducing high-frequency neuronal firing.",
        target: {
          name: "GABA pathways & voltage-gated ion channels",
          action: "enhancer",
          result: "↑ GABAergic inhibition, ↓ neuronal excitability",
          system: "GABAergic"
        }
      }
    ],
    patientIndications: ["Complex Partial Seizures", "Absence Seizures", "Bipolar Disorder", "Migraine Prophylaxis"],
    considerations: [
      'Has a <span class="hl hl--warn">narrow therapeutic index</span> (50–100 mcg/mL) — toxicity can occur with dose adjustments, drug interactions, or hypoalbuminemia even at "normal" total levels.',
      'Causes <span class="hl hl--ci">thrombocytopenia</span> and platelet dysfunction — increases bleeding risk, relevant when assessing trauma patients or those on concurrent anticoagulants.',
      '<span class="hl hl--ci">Hyperammonemic encephalopathy</span> can occur even at therapeutic levels — presents as confusion, lethargy, and vomiting that may mimic stroke or postictal state.',
      'Abrupt discontinuation can trigger <span class="hl hl--ci">breakthrough seizures</span> or status epilepticus — confirm medication adherence in any seizure patient.',
      '<span class="hl hl--ci">Overdose</span>: CNS depression ranging from drowsiness to coma, hypotension, tachycardia, metabolic acidosis, and cerebral edema. Naloxone may partially reverse mild CNS depression. Benzodiazepines for seizures.'
    ]
  },
  {
    id: "topiramate",
    summary: "An anticonvulsant used for epilepsy, migraine prevention, and weight management. Acts through multiple mechanisms including sodium channel blockade, GABA enhancement, and glutamate antagonism.",
    genericName: "Topiramate",
    tradeNames: ["Topamax", "Trokendi XR", "Qudexy XR"],
    category: ["Neurological"],
    classes: ["Anticonvulsant"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks voltage-gated sodium channels, controlling sustained neuronal depolarization during seizures. Also enhances GABA-A receptor activity, antagonizes AMPA/kainate glutamate receptors, and weakly inhibits carbonic anhydrase.",
        target: {
          name: "Voltage-gated Na⁺ channels, GABA-A receptors, AMPA/kainate receptors",
          action: "modulator",
          result: "↓ Neuronal excitability, ↑ inhibitory tone",
          system: "ion-channel"
        }
      }
    ],
    patientIndications: ["Epilepsy", "Migraine Prevention", "Weight Management"],
    considerations: [
      'Causes significant <span class="hl hl--ci">cognitive impairment</span> — patients report word-finding difficulty, memory problems, and psychomotor slowing. Relevant when assessing altered mental status.',
      'Inhibits carbonic anhydrase, causing <span class="hl hl--ci">metabolic acidosis</span> (non-anion gap, hyperchloremic). Risk increases when combined with <span class="hl hl--drug">metformin</span> or other carbonic anhydrase inhibitors.',
      'Can cause <span class="hl hl--warn">decreased sweating and hyperthermia</span>, particularly in pediatric patients or hot environments — consider in heat-related illness presentations.',
      'Concomitant use with <span class="hl hl--drug">valproic acid</span> increases risk of <span class="hl hl--ci">hyperammonemic encephalopathy</span> — presents as lethargy, vomiting, confusion, or hypothermia.',
      'Abrupt discontinuation can trigger <span class="hl hl--ci">breakthrough seizures</span> — confirm medication adherence in any seizure patient on topiramate.'
    ]
  },
  {
    id: "sertraline",
    summary: "An SSRI antidepressant used for depression, anxiety disorders, OCD, PTSD, and panic disorder. One of the first-line agents for unipolar major depression.",
    genericName: "Sertraline",
    tradeNames: ["Zoloft"],
    category: ["Psychiatric"],
    classes: ["Antidepressant", "SSRI"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively inhibits presynaptic reuptake of serotonin (5-HT), increasing serotonin concentration in the synaptic cleft. Has minor dopaminergic reuptake inhibition compared to other SSRIs.",
        target: {
          name: "Serotonin reuptake transporter (SERT)",
          action: "inhibitor",
          result: "↑ Synaptic serotonin → improved mood regulation",
          system: "serotonergic"
        }
      }
    ],
    patientIndications: ["Depression", "Obsessive-Compulsive Disorder", "Panic Disorder", "PTSD", "Social Anxiety Disorder", "Premenstrual Dysphoric Disorder"],
    considerations: [
      '<span class="hl hl--ci">Serotonin syndrome</span> risk when combined with other serotonergic drugs (tramadol, fentanyl, MAOIs, triptans, lithium) — presents with clonus, hyperreflexia, hyperthermia, agitated delirium, and muscle rigidity.',
      'Inhibits platelet aggregation, increasing <span class="hl hl--warn">bleeding risk</span> — especially when combined with aspirin, NSAIDs, or anticoagulants. Ask about bruising or epistaxis.',
      'Abrupt discontinuation causes a <span class="hl hl--ci">withdrawal syndrome</span> — dizziness, paresthesias ("brain zaps"), irritability, nausea, and sensory disturbances. Confirm adherence in patients with new neurologic complaints.',
      '<span class="hl hl--ci">Overdose</span> is generally well-tolerated compared to TCAs, but large ingestions or polypharmacy can produce serotonin syndrome. Prehospital: supportive care, benzodiazepines for agitation or seizures, active cooling for hyperthermia.',
      'In elderly patients, can cause <span class="hl hl--warn">hyponatremia</span> via SIADH — presents as confusion, lethargy, or seizures. Consider in any altered geriatric patient on an SSRI.'
    ]
  },
  {
    id: "escitalopram",
    summary: "An SSRI used for major depressive disorder and generalized anxiety disorder. The S-enantiomer of citalopram, considered one of the most selective serotonin reuptake inhibitors available.",
    genericName: "Escitalopram",
    tradeNames: ["Lexapro"],
    category: ["Psychiatric"],
    classes: ["Antidepressant", "SSRI"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively inhibits the reuptake of serotonin at the presynaptic neuron, increasing serotonin concentration in the synaptic cleft and enhancing serotonergic neurotransmission.",
        target: {
          name: "Serotonin reuptake transporter (SERT)",
          action: "inhibitor",
          result: "↑ Synaptic serotonin, enhanced serotonergic transmission",
          system: "serotonergic"
        }
      }
    ],
    patientIndications: ["Major Depressive Disorder", "Generalized Anxiety Disorder", "Social Anxiety Disorder", "Panic Disorder", "OCD", "PTSD"],
    considerations: [
      'Risk of <span class="hl hl--ci">serotonin syndrome</span> when combined with other serotonergic agents (MAOIs, SNRIs, triptans, tramadol, fentanyl). Presents with agitation, clonus, hyperreflexia, hyperthermia, and diaphoresis.',
      '<span class="hl hl--ci">QT prolongation</span> is dose-dependent and more pronounced than with other SSRIs. Risk increases with electrolyte imbalances, concurrent QT-prolonging drugs, or overdose.',
      'Inhibits platelet function, increasing <span class="hl hl--warn">bleeding risk</span> — especially when combined with anticoagulants, antiplatelets, or NSAIDs.',
      'Abrupt discontinuation causes <span class="hl hl--warn">withdrawal symptoms</span>: dizziness, nausea, irritability, paresthesias ("brain zaps"), and lethargy.',
      '<span class="hl hl--ci">Overdose</span> above 300 mg carries significant risk of QT prolongation and torsades de pointes. Prehospital: cardiac monitoring, benzodiazepines for seizures or agitation, magnesium sulfate for TdP.'
    ]
  },
  {
    id: "citalopram",
    summary: "An SSRI used for depression, with off-label use for anxiety disorders, OCD, and panic disorder. Notable among SSRIs for dose-dependent QT prolongation, which carries prehospital significance in overdose.",
    genericName: "Citalopram",
    tradeNames: ["Celexa"],
    category: ["Psychiatric"],
    classes: ["Antidepressant", "SSRI"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively inhibits serotonin reuptake at the presynaptic neuron, increasing serotonin concentration in the synaptic cleft. Has minimal effects on norepinephrine and dopamine reuptake.",
        target: {
          name: "Serotonin reuptake transporter (SERT)",
          action: "inhibitor",
          result: "↑ Synaptic serotonin, improved mood regulation",
          system: "serotonergic"
        }
      }
    ],
    patientIndications: ["Depression", "Generalized Anxiety Disorder", "Panic Disorder", "OCD", "PTSD"],
    considerations: [
      'Causes dose-dependent <span class="hl hl--ci">QT prolongation</span> — the highest cardiac risk among SSRIs. Patients on citalopram with other QT-prolonging drugs (amiodarone, antipsychotics) are at increased risk for torsades de pointes.',
      '<span class="hl hl--ci">Serotonin syndrome</span> risk increases with co-ingestion of other serotonergic drugs (tramadol, triptans, MAOIs). Presents with hyperthermia, rigidity, clonus, and autonomic instability.',
      'Increases <span class="hl hl--warn">bleeding risk</span> by depleting platelet serotonin — relevant when patients are also on warfarin, aspirin, or NSAIDs.',
      'Abrupt discontinuation causes <span class="hl hl--warn">withdrawal symptoms</span>: dizziness, nausea, irritability, paresthesias ("brain zaps"), and lethargy.',
      '<span class="hl hl--ci">Overdose</span> above 600 mg carries significant risk of QT prolongation, seizures, and torsades de pointes. Prehospital: cardiac monitoring, benzodiazepines for seizures or agitation, magnesium sulfate for TdP.'
    ]
  },
  {
    id: "fluoxetine",
    summary: "An SSRI antidepressant used for major depression, OCD, panic disorder, and bulimia nervosa. Has the longest half-life of any SSRI, which means drug effects and interactions persist for weeks after discontinuation.",
    genericName: "Fluoxetine",
    tradeNames: ["Prozac", "Sarafem"],
    category: ["Psychiatric"],
    classes: ["Antidepressant", "SSRI"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks the serotonin reuptake transporter on presynaptic neurons, increasing serotonin availability in the synaptic cleft and enhancing serotonergic neurotransmission.",
        target: {
          name: "Serotonin reuptake transporter (SERT)",
          action: "inhibitor",
          result: "↑ Synaptic serotonin, improved mood regulation",
          system: "serotonergic"
        }
      }
    ],
    patientIndications: ["Major Depressive Disorder", "Obsessive-Compulsive Disorder", "Panic Disorder", "Bulimia Nervosa", "PTSD", "Premenstrual Dysphoric Disorder"],
    considerations: [
      '<span class="hl hl--ci">Serotonin syndrome</span> risk when combined with other serotonergic agents (tramadol, fentanyl, triptans, lithium, MAOIs). Look for agitation, clonus, hyperreflexia, diaphoresis, and hyperthermia.',
      'Fluoxetine has an exceptionally <span class="hl hl--warn">long half-life</span> (~1–3 days for parent drug, ~4–16 days for active metabolite norfluoxetine). Drug effects and interactions can persist 5+ weeks after discontinuation.',
      'Can prolong the <span class="hl hl--ci">QT interval</span> — use caution in patients with cardiac history or those on other QT-prolonging medications.',
      'May increase <span class="hl hl--warn">bleeding risk</span> due to impaired platelet aggregation, especially when combined with anticoagulants or NSAIDs.',
      '<span class="hl hl--ci">Overdose</span>: generally less toxic than TCAs, but large ingestions cause serotonin syndrome, seizures, and QT prolongation. Prehospital: supportive care, benzodiazepines for seizures and agitation, cardiac monitoring.'
    ]
  },
  {
    id: "venlafaxine",
    summary: "An SNRI antidepressant used for major depressive disorder, generalized anxiety disorder, social anxiety disorder, and panic disorder. Also prescribed off-label for neuropathic pain, migraines, and fibromyalgia.",
    genericName: "Venlafaxine",
    tradeNames: ["Effexor", "Effexor XR"],
    category: ["Psychiatric"],
    classes: ["Antidepressant", "SNRI"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits reuptake of serotonin and norepinephrine, increasing their synaptic concentrations. At higher doses, also weakly inhibits dopamine reuptake. The dual monoamine effect provides both antidepressant and anxiolytic action.",
        target: {
          name: "Serotonin & norepinephrine reuptake transporters",
          action: "inhibitor",
          result: "↑ Synaptic serotonin & norepinephrine",
          system: "serotonergic"
        }
      }
    ],
    patientIndications: ["Major Depressive Disorder", "Generalized Anxiety Disorder", "Social Anxiety Disorder", "Panic Disorder", "Neuropathic Pain", "Migraine Prophylaxis"],
    considerations: [
      'Can cause dose-dependent <span class="hl hl--ci">hypertension</span> — one of the few antidepressants that raises blood pressure. Factor this in when assessing a hypertensive patient.',
      'Risk of <span class="hl hl--ci">serotonin syndrome</span> in overdose or when combined with other serotonergic drugs (SSRIs, tramadol, fentanyl, MAOIs). Look for clonus, hyperthermia, agitation, and hyperreflexia.',
      'Abrupt discontinuation causes a severe <span class="hl hl--warn">withdrawal syndrome</span> — "brain zaps," dizziness, nausea, irritability, and rebound anxiety. Non-compliance or missed doses can mimic new neurological complaints.',
      '<span class="hl hl--ci">Overdose</span>: more dangerous than SSRIs — causes tachycardia, seizures, QRS/QTc prolongation, and ventricular dysrhythmias. Carries the highest mortality rate among SNRI/SSRI overdoses. Prehospital: benzodiazepines for seizures, cardiac monitoring, sodium bicarbonate for wide QRS.',
      'May increase <span class="hl hl--warn">bleeding risk</span> by impairing platelet serotonin uptake, especially when combined with anticoagulants or NSAIDs.'
    ]
  },
  {
    id: "duloxetine",
    summary: "An SNRI antidepressant used for depression, generalized anxiety, diabetic neuropathy, fibromyalgia, and chronic musculoskeletal pain. Also inhibits norepinephrine reuptake, giving it dual utility for mood disorders and pain syndromes.",
    genericName: "Duloxetine",
    tradeNames: ["Cymbalta"],
    category: ["Psychiatric", "Pain & Anti-inflammatory", "Neurological"],
    classes: ["Antidepressant", "SNRI"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits reuptake of both serotonin and norepinephrine at the presynaptic terminal, increasing their availability in the synaptic cleft. The dual mechanism addresses both mood regulation and descending pain inhibition pathways.",
        target: {
          name: "Serotonin & norepinephrine transporters (SERT/NET)",
          action: "inhibitor",
          result: "↑ Serotonin & norepinephrine in synaptic cleft",
          system: "serotonergic"
        }
      }
    ],
    patientIndications: ["Major Depressive Disorder", "Generalized Anxiety Disorder", "Diabetic Peripheral Neuropathy", "Fibromyalgia", "Chronic Musculoskeletal Pain"],
    considerations: [
      'Causes <span class="hl hl--ci">orthostatic hypotension</span>, falls, and syncope — particularly within the first week of therapy or after dose increases. Assess orthostatics in patients reporting dizziness or falls.',
      '<span class="hl hl--ci">Serotonin syndrome</span> risk when combined with other serotonergic drugs (SSRIs, MAOIs, tramadol, fentanyl). Look for agitation, clonus, tremor, diaphoresis, and hyperthermia.',
      'Abrupt discontinuation causes a pronounced <span class="hl hl--warn">withdrawal syndrome</span> — dizziness, nausea, paresthesia, irritability, and insomnia. A distressed patient who recently stopped duloxetine may be in withdrawal rather than having a new complaint.',
      '<span class="hl hl--ci">Overdose</span>: produces tachycardia, hypertension, and serotonin toxicity. Isolated duloxetine OD is generally survivable without major complications, but co-ingestions significantly increase severity. Prehospital: benzodiazepines for agitation/seizures, cardiac monitoring.',
      'Increases <span class="hl hl--warn">bleeding risk</span> by impairing platelet serotonin uptake — particularly relevant in patients also on anticoagulants or NSAIDs.'
    ]
  },
  {
    id: "bupropion",
    summary: "An aminoketone antidepressant used for major depressive disorder, seasonal affective disorder, and smoking cessation. Also prescribed off-label for ADHD and as augmentation for treatment-resistant depression.",
    genericName: "Bupropion",
    tradeNames: ["Wellbutrin", "Wellbutrin SR", "Wellbutrin XL", "Zyban", "Aplenzin", "Forfivo XL"],
    category: ["Psychiatric"],
    classes: ["Antidepressant"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits reuptake of norepinephrine and dopamine, increasing their synaptic availability. Also antagonizes nicotinic acetylcholine receptors, which contributes to its efficacy in smoking cessation.",
        target: {
          name: "Norepinephrine-dopamine reuptake transporters",
          action: "inhibitor",
          result: "↑ Synaptic norepinephrine and dopamine",
          system: "dopaminergic"
        }
      }
    ],
    patientIndications: ["Major Depressive Disorder", "Seasonal Affective Disorder", "Smoking Cessation", "ADHD"],
    considerations: [
      '<span class="hl hl--ci">Seizures</span> are the primary danger — risk is dose-dependent and increases sharply above therapeutic range. Bupropion lowers the seizure threshold more than other antidepressants.',
      'Can cause <span class="hl hl--warn">tachycardia</span>, agitation, insomnia, and tremor at therapeutic doses. These symptoms also serve as warning signs of toxicity.',
      'May cause a false-positive <span class="hl hl--warn">urine amphetamine</span> screen due to structural similarity — do not assume stimulant use based on UDS alone.',
      'Contraindicated in patients with <span class="hl hl--ci">seizure disorders</span>, eating disorders (bulimia/anorexia), and those undergoing abrupt alcohol or benzodiazepine withdrawal.',
      '<span class="hl hl--ci">Overdose</span>: seizures (17–47% of cases), tachycardia, agitation, QRS/QT prolongation, and potential cardiogenic shock. Extended-release formulations cause delayed seizures up to 24 hours post-ingestion. Prehospital: benzodiazepines for seizures, cardiac monitoring. No specific antidote exists.'
    ]
  },
  {
    id: "trazodone",
    summary: "A serotonin antagonist and reuptake inhibitor (SARI) used for major depressive disorder and widely prescribed off-label as a sleep aid. Also used to manage agitation in dementia patients.",
    genericName: "Trazodone",
    tradeNames: ["Desyrel"],
    category: ["Psychiatric"],
    classes: ["Antidepressant", "Sedative"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks 5-HT2A receptors and weakly inhibits serotonin reuptake, enhancing serotonergic transmission. The 5-HT2A antagonism produces sedation and anxiolysis, while serotonin reuptake inhibition contributes to antidepressant effects.",
        target: {
          name: "5-HT2A receptors & serotonin transporter",
          action: "antagonist",
          result: "↑ Serotonergic activity, sedation, anxiolysis",
          system: "serotonergic"
        }
      },
      {
        brief: "Blocks alpha-1 adrenergic receptors, causing vasodilation and contributing to orthostatic hypotension — the primary hemodynamic effect seen in both therapeutic use and overdose.",
        target: {
          name: "Alpha-1 adrenergic receptors",
          action: "antagonist",
          result: "Vasodilation, ↓ BP",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Major Depressive Disorder", "Insomnia", "Anxiety", "Agitation in Dementia"],
    considerations: [
      'Causes significant <span class="hl hl--ci">orthostatic hypotension</span> and syncope via alpha-1 blockade — assess for fall risk and positional vitals, especially in elderly patients.',
      'Prolongs the <span class="hl hl--ci">QT interval</span> and can cause torsades de pointes, particularly in patients with preexisting cardiac disease, hypokalemia, or hypomagnesemia.',
      '<span class="hl hl--ci">Serotonin syndrome</span> risk increases with coadministration of other serotonergic drugs (SSRIs, SNRIs, fentanyl, tramadol). Look for agitation, clonus, hyperthermia, and diaphoresis.',
      '<span class="hl hl--warn">Priapism</span> is a rare but well-documented adverse effect — a sustained painful erection requiring emergent urological intervention.',
      '<span class="hl hl--ci">Overdose</span>: CNS depression, severe hypotension from alpha blockade, QT prolongation with risk of fatal arrhythmias, and seizures. Prehospital: supportive care, IV fluids for hypotension, benzodiazepines for seizures, cardiac monitoring.'
    ]
  },
  {
    id: "alprazolam",
    summary: "A short-acting benzodiazepine used for generalized anxiety disorder and panic disorder. Has a high potential for dependence and is more toxic in overdose than most other benzodiazepines.",
    genericName: "Alprazolam",
    tradeNames: ["Xanax", "Xanax XR"],
    category: ["Psychiatric"],
    classes: ["Benzodiazepine", "Sedative"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds the benzodiazepine site on GABA-A receptors, enhancing GABA-mediated chloride influx and increasing inhibitory neurotransmission throughout the CNS.",
        target: {
          name: "GABA-A receptors (benzodiazepine site)",
          action: "enhancer",
          result: "↑ GABAergic inhibition, CNS depression",
          system: "GABAergic"
        }
      }
    ],
    patientIndications: ["Generalized Anxiety Disorder", "Panic Disorder"],
    considerations: [
      'Causes <span class="hl hl--ci">CNS depression</span> — sedation, impaired coordination, slurred speech, and respiratory depression, especially when combined with <span class="hl hl--warn">opioids or alcohol</span>.',
      'High dependence potential with chronic use. Abrupt discontinuation can cause life-threatening <span class="hl hl--ci">withdrawal seizures</span>, rebound anxiety, and autonomic instability.',
      'Masks tachycardia and agitation that would otherwise signal an underlying condition — altered patients on alprazolam may have a coingestant or other pathology driving the presentation.',
      'More toxic in overdose than other benzodiazepines — higher rates of ICU admission, mechanical ventilation, and <span class="hl hl--ci">respiratory depression</span> compared to diazepam or lorazepam.',
      '<span class="hl hl--ci">Overdose</span>: CNS depression with near-normal vitals in isolated ingestion. Coingestants (alcohol, opioids, TCAs) dramatically worsen respiratory compromise. Prehospital: airway management, supportive care. <span class="hl hl--warn">Flumazenil is generally avoided</span> — risk of seizures in chronic users or mixed ingestions.'
    ]
  },
  {
    id: "clonazepam",
    summary: "A long-acting, high-potency benzodiazepine used for seizure disorders and panic disorder. Also prescribed off-label for REM sleep behavior disorder, restless leg syndrome, and acute mania.",
    genericName: "Clonazepam",
    tradeNames: ["Klonopin"],
    category: ["Psychiatric", "Neurological"],
    classes: ["Benzodiazepine", "Anticonvulsant", "Sedative"],
    source: "Mixed",
    moa: [
      {
        brief: "Acts as a positive allosteric modulator at GABA-A receptors, enhancing the inhibitory effect of GABA in the CNS. This increases chloride conductance, hyperpolarizing neurons and reducing neuronal excitability.",
        target: {
          name: "GABA-A receptors",
          action: "enhancer",
          result: "↑ GABA-mediated inhibition, ↓ neuronal excitability",
          system: "GABAergic"
        }
      }
    ],
    patientIndications: ["Panic Disorder", "Seizure Disorders", "Lennox-Gastaut Syndrome", "Myoclonic Seizures", "Absence Seizures", "REM Sleep Behavior Disorder", "Restless Leg Syndrome"],
    considerations: [
      'Causes <span class="hl hl--ci">sedation</span>, drowsiness, and <span class="hl hl--ci">ataxia</span> — expect impaired coordination and slowed mentation. Falls are a major concern, especially in elderly patients.',
      'Concurrent use with <span class="hl hl--ci">opioids or alcohol</span> dramatically increases the risk of respiratory depression, coma, and death. Ask about other CNS depressants on every call.',
      '<span class="hl hl--warn">Abrupt discontinuation</span> after chronic use can precipitate life-threatening withdrawal — seizures, status epilepticus, hallucinations, and autonomic instability. A patient without their clonazepam is a seizure risk.',
      'High abuse and dependence potential. Long half-life (18–50 hours) means effects and toxicity can persist or recur well after ingestion.',
      '<span class="hl hl--ci">Overdose</span>: CNS depression with near-normal vitals in isolated ingestion — somnolence, confusion, slurred speech, coma. Coingestants (opioids, alcohol) cause severe respiratory depression. Prehospital: airway management, supportive care. <span class="hl hl--warn">Flumazenil is generally avoided</span> — seizure risk in chronic users or mixed ingestions.'
    ]
  },
  {
    id: "zolpidem",
    summary: "A non-benzodiazepine sedative-hypnotic (Z-drug) used for short-term treatment of insomnia. Acts on the same GABA-A receptor complex as benzodiazepines but with more selective sedative effects.",
    genericName: "Zolpidem",
    tradeNames: ["Ambien", "Ambien CR", "Edluar", "Intermezzo", "Zolpimist"],
    category: ["Psychiatric"],
    classes: ["Hypnotic", "Sedative"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds selectively to the alpha-1 subunit of the GABA-A receptor, increasing chloride channel opening frequency and enhancing GABA-mediated neuronal inhibition. This selectivity produces sedation with less anxiolytic, anticonvulsant, and muscle relaxant activity compared to benzodiazepines.",
        target: {
          name: "GABA-A receptor (alpha-1 subunit)",
          action: "enhancer",
          result: "↑ GABA inhibition → sedation, ↓ sleep latency",
          system: "GABAergic"
        }
      }
    ],
    patientIndications: ["Insomnia"],
    considerations: [
      'Causes <span class="hl hl--ci">CNS depression</span> — drowsiness, confusion, ataxia, and impaired coordination. Effects are amplified significantly when combined with alcohol, opioids, benzodiazepines, or other CNS depressants.',
      '<span class="hl hl--warn">Complex sleep behaviors</span> (FDA boxed warning): sleepwalking, sleep-driving, cooking, phone calls — all with no memory of the event. Can occur at recommended doses without coingestants.',
      'Causes <span class="hl hl--ci">falls</span>, especially in elderly patients — hip fractures and intracranial hemorrhage have been reported. Increased risk of delirium in older adults.',
      'Does <span class="hl hl--warn">not cross-react</span> on standard urine drug screens for benzodiazepines, opiates, barbiturates, or amphetamines — a negative UDS does not rule out zolpidem use.',
      '<span class="hl hl--ci">Overdose</span>: isolated zolpidem ingestion typically causes somnolence to light coma with relatively preserved hemodynamics. Combined ingestion with other CNS depressants can produce severe respiratory depression and cardiovascular collapse. <span class="hl hl--drug">Flumazenil</span> may partially reverse effects but risks seizures.'
    ]
  },
  {
    id: "quetiapine",
    summary: "An atypical antipsychotic used for schizophrenia, bipolar disorder (manic and depressive episodes), and off-label as a sleep aid. Antagonizes multiple receptor types, producing significant sedation and orthostatic hypotension.",
    genericName: "Quetiapine",
    tradeNames: ["Seroquel", "Seroquel XR"],
    category: ["Psychiatric"],
    classes: ["Atypical Antipsychotic", "Antipsychotic"],
    source: "Mixed",
    moa: [
      {
        brief: "Antagonizes serotonin 5-HT2A and dopamine D2 receptors in the mesolimbic pathway, with higher affinity for 5-HT2A than D2. This ratio accounts for its antipsychotic effect with relatively lower risk of extrapyramidal symptoms compared to typical antipsychotics.",
        target: {
          name: "Serotonin 5-HT2A & Dopamine D2 receptors",
          action: "antagonist",
          result: "↓ Psychosis, mood stabilization",
          system: "dopaminergic"
        }
      },
      {
        brief: "Potent antagonism of histamine H1 receptors produces significant sedation and weight gain. Also blocks alpha-1 adrenergic receptors, causing orthostatic hypotension and reflex tachycardia.",
        target: {
          name: "Histamine H1 & Alpha-1 adrenergic receptors",
          action: "antagonist",
          result: "Sedation, orthostatic hypotension",
          system: "histaminergic"
        }
      }
    ],
    patientIndications: ["Schizophrenia", "Bipolar Disorder (Manic Episodes)", "Bipolar Disorder (Depressive Episodes)", "Insomnia (Off-Label)", "Major Depressive Disorder (Adjunct)"],
    considerations: [
      'Causes significant <span class="hl hl--ci">orthostatic hypotension</span> via alpha-1 blockade — assess positional vitals carefully, especially in elderly patients or those on other antihypertensives.',
      '<span class="hl hl--ci">Neuroleptic malignant syndrome</span> (NMS) is rare but life-threatening: hyperthermia, rigidity, altered mental status, autonomic instability. Treat as a medical emergency.',
      'Can cause <span class="hl hl--warn">hyperglycemia</span> and metabolic syndrome with chronic use — a patient on quetiapine with altered mental status should have a glucose check.',
      'Produces dose-dependent <span class="hl hl--warn">sedation</span> and anticholinergic effects (dry mouth, urinary retention, tachycardia). Sedation can mask assessment findings.',
      '<span class="hl hl--ci">Overdose</span>: CNS depression progressing to coma, tachycardia, and hypotension. Alpha-1 blockade means <span class="hl hl--drug">epinephrine</span> can paradoxically worsen hypotension — use norepinephrine for vasopressor support. No specific antidote.'
    ]
  },
  {
    id: "aripiprazole",
    summary: "An atypical (third-generation) antipsychotic used for schizophrenia, bipolar mania, and as adjunctive therapy in major depressive disorder. Acts as a partial dopamine agonist rather than a pure antagonist, giving it a more favorable metabolic and extrapyramidal side effect profile than older antipsychotics.",
    genericName: "Aripiprazole",
    tradeNames: ["Abilify"],
    category: ["Psychiatric"],
    classes: ["Atypical Antipsychotic"],
    source: "Mixed",
    moa: [
      {
        brief: "Partially activates D2 dopamine receptors — acting as a functional antagonist in hyperdopaminergic pathways (mesolimbic) while preserving dopamine signaling in hypodopaminergic pathways (mesocortical). Also partially agonizes 5-HT1A and antagonizes 5-HT2A serotonin receptors, contributing to mood stabilization and reduced EPS.",
        target: {
          name: "D2 dopamine receptors",
          action: "modulator",
          result: "Stabilized dopamine signaling, ↓ positive symptoms, improved negative/cognitive symptoms",
          system: "dopaminergic"
        }
      }
    ],
    patientIndications: ["Schizophrenia", "Bipolar I Disorder (Manic/Mixed Episodes)", "Major Depressive Disorder (Adjunctive)", "Irritability Associated with Autism", "Tourette Syndrome"],
    considerations: [
      '<span class="hl hl--ci">Akathisia</span> (inner restlessness and inability to sit still) is the most common movement-related side effect. Can be mistaken for agitation from the underlying psychiatric condition.',
      'Causes <span class="hl hl--ci">orthostatic hypotension</span> due to alpha-1 antagonism — use caution in dehydrated or hypovolemic patients.',
      '<span class="hl hl--ci">Neuroleptic malignant syndrome</span> is rare but potentially fatal: hyperthermia, muscle rigidity, altered mental status, and autonomic instability. Treat as a medical emergency.',
      'Impairs <span class="hl hl--warn">thermoregulation</span> — patients on aripiprazole are at increased risk of heat-related illness, especially during exertion or in hot environments.',
      '<span class="hl hl--ci">Overdose</span>: somnolence, tachycardia, and CNS depression. No specific antidote — management is supportive with continuous cardiac monitoring. Activated charcoal may help if given early.'
    ]
  },
  {
    id: "risperidone",
    summary: "An atypical antipsychotic used for schizophrenia, acute mania in bipolar I disorder, and irritability associated with autism. Also used off-label for agitation in dementia, delirium, and behavioral disorders.",
    genericName: "Risperidone",
    tradeNames: ["Risperdal"],
    category: ["Psychiatric"],
    classes: ["Atypical Antipsychotic", "Antipsychotic"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks dopamine D2 receptors in the mesolimbic pathway, reducing positive psychotic symptoms such as hallucinations and delusions. Also antagonizes serotonin 5-HT2A receptors, which reduces extrapyramidal side effects compared to typical antipsychotics and may improve negative symptoms.",
        target: {
          name: "Dopamine D2 & Serotonin 5-HT2A receptors",
          action: "antagonist",
          result: "↓ Psychotic symptoms, ↓ EPS risk vs typicals",
          system: "dopaminergic"
        }
      }
    ],
    patientIndications: ["Schizophrenia", "Bipolar I Disorder (Acute Mania)", "Autism-Associated Irritability", "Agitation", "Delirium"],
    considerations: [
      'Causes <span class="hl hl--ci">orthostatic hypotension</span>, tachycardia, and syncope due to alpha-1 adrenergic blockade — risk increases with dehydration, concurrent antihypertensives, or volume depletion.',
      'Can cause <span class="hl hl--ci">extrapyramidal symptoms</span> including acute dystonia, akathisia, and parkinsonism, especially at higher doses. More EPS-prone than other atypicals like quetiapine.',
      '<span class="hl hl--ci">Neuroleptic malignant syndrome</span> is rare but life-threatening — presents with hyperthermia, severe muscle rigidity, altered mental status, and autonomic instability. Treat as a medical emergency.',
      'Impairs <span class="hl hl--warn">thermoregulation</span> — patients are at increased risk of heat-related illness during exertion or in hot environments.',
      '<span class="hl hl--ci">Overdose</span>: drowsiness, tachycardia, hypotension, extrapyramidal effects, and QT prolongation. No specific antidote — management is supportive with cardiac monitoring.'
    ]
  },
  {
    id: "haloperidol",
    summary: "A first-generation (typical) antipsychotic used for schizophrenia, acute psychosis, Tourette syndrome, and severe agitation. Also carried on many EMS units for chemical restraint of acutely violent patients.",
    genericName: "Haloperidol",
    tradeNames: ["Haldol"],
    category: ["Psychiatric"],
    classes: ["Antipsychotic"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks postsynaptic dopamine D2 receptors in the mesolimbic and mesocortical pathways, reducing positive psychotic symptoms such as hallucinations and delusions.",
        target: {
          name: "Dopamine D2 receptors",
          action: "antagonist",
          result: "↓ Dopaminergic transmission, ↓ psychotic symptoms",
          system: "dopaminergic"
        }
      }
    ],
    patientIndications: ["Schizophrenia", "Acute Psychosis", "Tourette Syndrome", "Severe Agitation", "Acute Mania"],
    considerations: [
      '<span class="hl hl--ci">Extrapyramidal symptoms</span> — acute dystonia (muscle spasms, oculogyric crisis), akathisia, and rigidity can develop within hours of administration. Treat acute dystonia with diphenhydramine or benztropine.',
      'Prolongs the <span class="hl hl--ci">QT interval</span> — risk of torsades de pointes increases with higher doses, IV administration, hypokalemia, or hypomagnesemia. Cardiac monitoring is essential.',
      '<span class="hl hl--ci">Neuroleptic malignant syndrome</span> (NMS) — hyperthermia, severe rigidity, altered mental status, and autonomic instability. Rare but life-threatening; discontinue the drug and provide aggressive supportive care.',
      'Causes <span class="hl hl--warn">hypotension</span> and sedation — worsened in elderly patients, those on other CNS depressants, or volume-depleted patients. Avoid epinephrine for hypotension (paradoxical BP drop); use norepinephrine or phenylephrine.',
      '<span class="hl hl--ci">Contraindicated</span> in Parkinson disease and dementia with Lewy bodies — dopamine blockade worsens motor symptoms and increases mortality in elderly dementia patients.'
    ]
  },
  {
    id: "lithium",
    summary: "A mood stabilizer used for bipolar disorder, particularly for acute mania and long-term prophylaxis against manic and depressive episodes. Has a narrow therapeutic index — toxic levels are close to therapeutic levels.",
    genericName: "Lithium",
    tradeNames: ["Lithobid", "Eskalith"],
    category: ["Psychiatric"],
    classes: ["Mood Stabilizer"],
    source: "Mixed",
    moa: [
      {
        brief: "Alters sodium transport in nerve and muscle cells and shifts intraneuronal catecholamine metabolism. The exact mechanism in mania is unknown, but lithium modulates multiple second messenger systems including inositol phosphate and glycogen synthase kinase-3, stabilizing neuronal activity.",
        target: {
          name: "Multiple intracellular second messenger systems",
          action: "modulator",
          result: "Mood stabilization, ↓ manic episodes",
          system: "other"
        }
      }
    ],
    patientIndications: ["Bipolar Disorder", "Acute Mania", "Bipolar Depression Prophylaxis"],
    considerations: [
      '<span class="hl hl--ci">Narrow therapeutic index</span> — therapeutic range is 0.6–1.2 mEq/L, and toxicity begins at 1.5 mEq/L. Dehydration, febrile illness, vomiting, diarrhea, and renal impairment all raise lithium levels toward toxicity.',
      'Chronic use causes <span class="hl hl--warn">nephrogenic diabetes insipidus</span> (polyuria, polydipsia) and <span class="hl hl--warn">hypothyroidism</span> — both relevant to understanding the patient\'s baseline presentation.',
      'NSAIDs, ACE inhibitors, ARBs, and diuretics all <span class="hl hl--warn">increase serum lithium levels</span> and can precipitate toxicity. Ask about recent medication changes or new prescriptions.',
      'Can precipitate <span class="hl hl--ci">serotonin syndrome</span> when combined with SSRIs, SNRIs, or other serotonergic drugs — watch for agitation, clonus, hyperthermia, and diaphoresis.',
      '<span class="hl hl--ci">Overdose</span>: progressive neurotoxicity — tremor, ataxia, slurred speech, confusion, seizures, coma. Cardiac effects include bradycardia and QT prolongation. No antidote exists; prehospital care is supportive with IV normal saline to promote renal excretion.'
    ]
  },
  {
    id: "hydrocodone-acetaminophen",
    summary: "A combination opioid analgesic pairing hydrocodone with acetaminophen, prescribed for moderate to moderately severe pain. Found on scene as Norco or Vicodin — its presence flags both opioid and acetaminophen toxicity risks.",
    genericName: "Hydrocodone/Acetaminophen",
    tradeNames: ["Norco", "Vicodin", "Lortab"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Opioid Analgesic", "Antipyretic"],
    source: "Mixed",
    moa: [
      {
        brief: "Hydrocodone is a full mu-opioid receptor agonist that inhibits ascending pain pathways and alters the perception of and emotional response to pain. Acetaminophen provides additive analgesia through central COX inhibition and activation of descending serotonergic inhibitory pathways.",
        target: {
          name: "Mu-opioid receptors",
          action: "agonist",
          result: "Analgesia, ↓ pain perception, CNS depression",
          system: "opioid"
        }
      }
    ],
    patientIndications: ["Moderate to Severe Pain", "Post-Surgical Pain", "Trauma Pain", "Cancer Pain"],
    considerations: [
      '<span class="hl hl--ci">Respiratory depression</span> is the primary life threat — worsened significantly by concurrent benzodiazepines, alcohol, or other CNS depressants.',
      'Overdose presents as a <span class="hl hl--ci">polydrug toxicity</span>: opioid toxidrome (miosis, respiratory depression, sedation) plus delayed acetaminophen hepatotoxicity that may not manifest for 48–72 hours.',
      '<span class="hl hl--ci">Naloxone</span> reverses the hydrocodone component but does not address acetaminophen toxicity — all overdose patients require ED evaluation for NAC consideration regardless of naloxone response.',
      'Causes <span class="hl hl--warn">orthostatic hypotension</span>, sedation, and suppressed cough reflex — relevant during patient positioning and airway assessment.',
      'High abuse potential (Schedule II controlled substance). Abrupt discontinuation in dependent patients causes <span class="hl hl--warn">opioid withdrawal</span> — tachycardia, diaphoresis, agitation, GI distress.'
    ]
  },
  {
    id: "oxycodone",
    summary: "A semisynthetic opioid analgesic prescribed for moderate to severe pain. Available as immediate-release and extended-release (OxyContin) formulations, and in combination with acetaminophen (Percocet).",
    genericName: "Oxycodone",
    tradeNames: ["OxyContin", "Percocet", "Roxicodone", "Oxaydo"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Opioid Analgesic"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds mu-opioid receptors in the CNS, activating descending inhibitory pain pathways and altering the perception and emotional response to pain. Also depresses respiratory centers in the brainstem and suppresses the cough reflex.",
        target: {
          name: "Mu-opioid receptors",
          action: "agonist",
          result: "Analgesia, ↓ respiratory drive, CNS depression",
          system: "opioid"
        }
      }
    ],
    patientIndications: ["Moderate to Severe Pain", "Chronic Pain", "Post-Surgical Pain", "Cancer Pain"],
    considerations: [
      '<span class="hl hl--ci">Respiratory depression</span> is the primary lethal risk — worsened by concurrent benzodiazepines, alcohol, or other CNS depressants.',
      'Causes <span class="hl hl--ci">hypotension</span> through peripheral vasodilation — significant in hypovolemic or hemodynamically unstable patients.',
      '<span class="hl hl--ci">Overdose</span> presents with the classic opioid triad: pinpoint pupils, respiratory depression, and decreased LOC. Cold, clammy skin, bradycardia, and skeletal muscle flaccidity follow. Prehospital: BVM ventilation and <span class="hl hl--drug">naloxone</span> — titrate to restore respirations, not full consciousness.',
      'Patients on chronic oxycodone develop tolerance — a "normal" heart rate and blood pressure do not rule out toxicity. Monitor respiratory rate and mental status closely.',
      'Naloxone reversal in opioid-dependent patients can precipitate acute <span class="hl hl--warn">withdrawal</span> and combative behavior. Use the lowest effective dose and be prepared to manage agitation.'
    ]
  },
  {
    id: "tramadol",
    summary: "A centrally acting synthetic opioid analgesic with a dual mechanism — weak mu-opioid agonism plus norepinephrine and serotonin reuptake inhibition. Prescribed for moderate-to-severe pain, classified as Schedule IV.",
    genericName: "Tramadol",
    tradeNames: ["Ultram", "Ultram ER", "ConZip"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Opioid Analgesic", "SNRI"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds mu-opioid receptors in the CNS, producing analgesia. Affinity is weaker than traditional opioids, but the active metabolite (M1, via CYP2D6) has significantly higher mu-receptor binding.",
        target: {
          name: "Mu-opioid receptors",
          action: "agonist",
          result: "Analgesia, CNS depression, respiratory depression",
          system: "opioid"
        }
      },
      {
        brief: "Inhibits reuptake of norepinephrine and serotonin, contributing to analgesia through descending pain inhibition pathways. This monoamine activity also accounts for its seizure and serotonin syndrome risk.",
        target: {
          name: "Norepinephrine & serotonin reuptake transporters",
          action: "inhibitor",
          result: "↑ Norepinephrine & serotonin in synaptic cleft",
          system: "serotonergic"
        }
      }
    ],
    patientIndications: ["Moderate-to-Severe Pain", "Chronic Pain"],
    considerations: [
      '<span class="hl hl--ci">Seizures</span> can occur at therapeutic doses — risk increases with SSRIs, SNRIs, TCAs, MAOIs, and in patients with epilepsy or head trauma. Unique among opioids.',
      'Risk of <span class="hl hl--ci">serotonin syndrome</span> when combined with serotonergic drugs (SSRIs, SNRIs, MAOIs, triptans). Look for agitation, clonus, hyperthermia, and diaphoresis.',
      'Causes <span class="hl hl--ci">respiratory depression</span> like other opioids, particularly with CNS depressants or in CYP2D6 ultra-rapid metabolizers who generate excess active metabolite.',
      '<span class="hl hl--ci">Overdose</span> presents with classic opioid toxidrome (miosis, respiratory depression, altered mental status) plus seizures, hypertension, and tachycardia. <span class="hl hl--drug">Naloxone</span> is effective but may require repeated doses.',
      'Schedule IV controlled substance with significant <span class="hl hl--warn">misuse potential</span> — often underestimated because of its "weaker opioid" reputation. Physical dependence and withdrawal occur with chronic use.'
    ]
  },
  {
    id: "acetaminophen",
    summary: "An analgesic and antipyretic used for mild to moderate pain and fever. Found in hundreds of OTC and prescription combination products, making unintentional overdose a major concern.",
    genericName: "Acetaminophen",
    tradeNames: ["Tylenol"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Antipyretic"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits prostaglandin synthesis centrally, reducing pain perception and resetting the hypothalamic thermoregulatory center. Unlike NSAIDs, it has minimal peripheral anti-inflammatory activity.",
        target: {
          name: "Central cyclooxygenase (COX) enzymes",
          action: "inhibitor",
          result: "↓ Central pain signaling, ↓ fever",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Pain", "Fever", "Osteoarthritis", "Headache"],
    considerations: [
      '<span class="hl hl--ci">Hepatotoxicity</span> is the primary danger — doses exceeding 4 g/day or acute ingestion above 150 mg/kg can cause fatal hepatic necrosis. Risk increases with alcohol use and chronic liver disease.',
      '<span class="hl hl--ci">Overdose</span> is deceptive: patients are asymptomatic or have only mild nausea for the first 24 hours, then develop liver failure at 72–96 hours. Do not be reassured by a well-appearing patient with a reported large ingestion.',
      'Present in hundreds of OTC and prescription combination products (Norco, Percocet, NyQuil). <span class="hl hl--warn">Unintentional overdose</span> from stacking multiple acetaminophen-containing products accounts for roughly half of all cases.',
      '<span class="hl hl--drug">N-acetylcysteine (NAC)</span> is the antidote — most effective within 8 hours of ingestion. Prehospital: establish IV access, obtain ingestion history and timing, transport promptly.',
      'At therapeutic doses, acetaminophen has no effect on platelet function, blood pressure, or respiratory drive — making it safe in patients where NSAIDs or opioids are contraindicated.'
    ]
  },
  {
    id: "ibuprofen",
    summary: "An NSAID with analgesic, antipyretic, and anti-inflammatory properties used for pain, fever, and inflammatory conditions. Found in nearly every medicine cabinet — relevant to EMS because of GI bleeding risk, renal effects, and interactions with antihypertensives and anticoagulants.",
    genericName: "Ibuprofen",
    tradeNames: ["Advil", "Motrin"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["NSAID", "Antipyretic"],
    source: "Mixed",
    moa: [
      {
        brief: "Nonselectively inhibits cyclooxygenase (COX-1 and COX-2), reducing prostaglandin synthesis. This decreases inflammation, pain signaling, and fever. COX-1 inhibition also reduces the protective prostaglandin layer in the GI mucosa, accounting for the GI bleeding risk.",
        target: {
          name: "Cyclooxygenase (COX-1 & COX-2)",
          action: "inhibitor",
          result: "↓ Prostaglandin synthesis → ↓ inflammation, pain, fever",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Osteoarthritis", "Rheumatoid Arthritis", "Mild to Moderate Pain", "Fever", "Dysmenorrhea", "Headache", "Pericarditis"],
    considerations: [
      'Increases risk of <span class="hl hl--ci">GI bleeding</span>, ulceration, and perforation — risk compounds with anticoagulants, antiplatelets, corticosteroids, or alcohol use. Can occur without warning symptoms.',
      'Can cause <span class="hl hl--ci">acute kidney injury</span>, especially in dehydrated patients, those on ACE inhibitors or diuretics, or patients with preexisting renal impairment. Volume status matters.',
      'Interferes with <span class="hl hl--warn">aspirin\'s antiplatelet effect</span> if taken before or concurrently with aspirin — relevant for patients on daily aspirin for cardiac protection.',
      'Reduces the antihypertensive effect of <span class="hl hl--drug">ACE inhibitors</span>, <span class="hl hl--drug">ARBs</span>, and <span class="hl hl--drug">diuretics</span> by inhibiting renal prostaglandin synthesis. Can also cause fluid retention and edema.',
      'Increases plasma <span class="hl hl--drug">lithium</span> levels by reducing renal lithium clearance — patients on both medications are at risk for lithium toxicity.'
    ]
  },
  {
    id: "naproxen",
    summary: "An NSAID with analgesic, anti-inflammatory, and antipyretic properties used for arthritis, musculoskeletal pain, gout, and dysmenorrhea. Available OTC and by prescription, with a longer half-life than ibuprofen allowing twice-daily dosing.",
    genericName: "Naproxen",
    tradeNames: ["Aleve", "Naprosyn", "Anaprox"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["NSAID"],
    source: "Mixed",
    moa: [
      {
        brief: "Competitively inhibits both COX-1 and COX-2, blocking arachidonic acid conversion to prostaglandins. This reduces inflammation, pain signaling, and fever.",
        target: {
          name: "COX-1 & COX-2",
          action: "inhibitor",
          result: "↓ Prostaglandin synthesis, ↓ inflammation, ↓ pain",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Osteoarthritis", "Rheumatoid Arthritis", "Acute Gout", "Musculoskeletal Pain", "Dysmenorrhea", "Ankylosing Spondylitis", "Migraine"],
    considerations: [
      'Inhibits platelet aggregation via <span class="hl hl--moa">COX-1 inhibition</span>, increasing bleeding time. This effect is reversible on discontinuation but significant in trauma or when combined with <span class="hl hl--drug">anticoagulants</span>.',
      'Causes <span class="hl hl--ci">GI bleeding</span>, ulceration, and perforation — can occur without warning symptoms. Risk increases with age, alcohol use, concurrent corticosteroids, and anticoagulant therapy.',
      'Increases the risk of <span class="hl hl--ci">cardiovascular thrombotic events</span> including MI and stroke, particularly with prolonged use or in patients with existing heart disease. Avoid in severe heart failure.',
      'Reduces renal prostaglandin synthesis, causing <span class="hl hl--warn">fluid retention</span> and worsening renal function in volume-depleted patients. Can blunt the effect of <span class="hl hl--drug">antihypertensives</span> and <span class="hl hl--drug">diuretics</span>.',
      'Cross-reactivity with <span class="hl hl--drug">aspirin</span> — contraindicated in patients with NSAID- or aspirin-induced asthma. Can trigger <span class="hl hl--ci">bronchospasm</span> and <span class="hl hl--ci">anaphylaxis</span> in sensitized patients.'
    ]
  },
  {
    id: "meloxicam",
    summary: "A preferential COX-2 NSAID used for osteoarthritis and rheumatoid arthritis. Patients take it for chronic joint pain and inflammation.",
    genericName: "Meloxicam",
    tradeNames: ["Mobic"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["NSAID"],
    source: "DailyMed",
    moa: [
      {
        brief: "Preferentially inhibits COX-2 over COX-1, reducing prostaglandin synthesis involved in inflammation, pain, and fever while partially sparing COX-1-mediated gastric mucosal protection.",
        target: {
          name: "COX-2 (preferential)",
          action: "inhibitor",
          result: "↓ Prostaglandin synthesis, ↓ inflammation, ↓ pain",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Osteoarthritis", "Rheumatoid Arthritis", "Juvenile Rheumatoid Arthritis"],
    considerations: [
      'Increases risk of serious <span class="hl hl--ci">GI bleeding</span>, ulceration, and perforation — can occur without warning, especially in elderly patients or those with prior peptic ulcer disease.',
      'Increases risk of <span class="hl hl--ci">cardiovascular thrombotic events</span> including MI and stroke, particularly with prolonged use or in patients with existing CV disease.',
      'Causes <span class="hl hl--warn">fluid retention</span> and edema — can worsen heart failure and blunt the effect of <span class="hl hl--drug">antihypertensives</span>, <span class="hl hl--drug">ACE inhibitors</span>, <span class="hl hl--drug">ARBs</span>, and <span class="hl hl--drug">diuretics</span>.',
      'Impairs renal prostaglandin synthesis — risk of <span class="hl hl--ci">acute renal failure</span> in dehydrated, hypovolemic, or elderly patients, and those on ACE inhibitors or diuretics.',
      'Contraindicated in <span class="hl hl--warn">aspirin-sensitive asthma</span> — can trigger bronchospasm and anaphylaxis in sensitized patients.'
    ]
  },
  {
    id: "cyclobenzaprine",
    summary: "A centrally acting muscle relaxant structurally related to tricyclic antidepressants, used for acute musculoskeletal pain and muscle spasm. Its anticholinergic and sedating properties make it relevant on EMS calls.",
    genericName: "Cyclobenzaprine",
    tradeNames: ["Flexeril", "Amrix", "Fexmid"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Muscle Relaxant"],
    source: "Mixed",
    moa: [
      {
        brief: "Acts centrally in the brainstem to reduce tonic somatic motor activity, relieving skeletal muscle spasm without affecting muscle function directly. Also antagonizes muscarinic receptors and alpha-1 adrenergic receptors, producing anticholinergic and vasodilatory effects.",
        target: {
          name: "Brainstem motor neurons",
          action: "inhibitor",
          result: "↓ Muscle hyperactivity, ↓ spasm",
          system: "other"
        }
      }
    ],
    patientIndications: ["Acute Musculoskeletal Pain", "Muscle Spasm", "Fibromyalgia"],
    considerations: [
      'Causes significant <span class="hl hl--ci">sedation</span> — drowsiness reported in up to 39% of patients. Combined with alcohol, opioids, or benzodiazepines, CNS depression can become dangerous.',
      'Strong <span class="hl hl--warn">anticholinergic effects</span>: dry mouth, tachycardia, urinary retention, confusion, and mydriasis. Elderly patients are especially susceptible.',
      'Structurally related to TCAs — <span class="hl hl--ci">overdose mimics TCA toxicity</span> with tachycardia, QRS widening, seizures, and dysrhythmias. Treat with sodium bicarbonate for QRS prolongation.',
      'Can precipitate <span class="hl hl--ci">serotonin syndrome</span> when combined with SSRIs, SNRIs, or MAOIs — look for agitation, hyperthermia, clonus, and altered mental status.',
      'Contraindicated in patients with <span class="hl hl--warn">arrhythmias, heart block, heart failure</span>, or recent MI — can worsen conduction disturbances.'
    ]
  },
  {
    id: "amphetamine-salts",
    summary: "A mixed amphetamine salt CNS stimulant used for ADHD and narcolepsy. Contains a 3:1 ratio of d-amphetamine to l-amphetamine, producing sustained increases in attention and wakefulness through enhanced catecholamine signaling.",
    genericName: "Amphetamine Salts",
    tradeNames: ["Adderall", "Adderall XR"],
    category: ["Psychiatric", "Neurological"],
    classes: ["CNS Stimulant"],
    source: "Mixed",
    moa: [
      {
        brief: "Increases synaptic dopamine and norepinephrine by promoting vesicular release and blocking reuptake at presynaptic terminals. The net effect is enhanced catecholamine signaling in prefrontal and subcortical circuits involved in attention and executive function.",
        target: {
          name: "Dopamine & norepinephrine transporters",
          action: "inhibitor",
          result: "↑ Synaptic dopamine, ↑ norepinephrine",
          system: "dopaminergic"
        }
      }
    ],
    patientIndications: ["ADHD", "Narcolepsy"],
    considerations: [
      'Causes <span class="hl hl--ci">tachycardia</span> and <span class="hl hl--ci">hypertension</span> at therapeutic doses — a patient on amphetamine salts with chest pain warrants a full cardiac workup.',
      'Schedule II controlled substance with high abuse potential. Patients may take supratherapeutic doses or use the drug recreationally, altering the expected clinical picture.',
      'Contraindicated with <span class="hl hl--warn">MAOIs</span> (within 14 days) — combination can trigger hypertensive crisis.',
      'Can cause <span class="hl hl--ci">agitation, psychosis, and paranoia</span>, especially at high doses or with chronic use — presentation may mimic a primary psychiatric emergency.',
      '<span class="hl hl--ci">Overdose</span> produces a sympathomimetic toxidrome: hypertension, tachycardia, hyperthermia, mydriasis, agitation, and seizures. Prehospital: benzodiazepines for agitation and seizures, active cooling for hyperthermia, IV fluids. No specific antidote.'
    ]
  },
  {
    id: "methylphenidate",
    summary: "A CNS stimulant used for ADHD and narcolepsy. Blocks reuptake of dopamine and norepinephrine, increasing catecholamine activity in the prefrontal cortex to improve attention and impulse control.",
    genericName: "Methylphenidate",
    tradeNames: ["Ritalin", "Concerta", "Metadate", "Methylin", "Daytrana", "Quillivant XR", "QuilliChew ER", "Jornay PM"],
    category: ["Psychiatric"],
    classes: ["CNS Stimulant"],
    source: "Mixed",
    moa: [
      {
        brief: "Blocks reuptake of dopamine and norepinephrine at presynaptic transporters, increasing the concentration of both neurotransmitters in the synaptic cleft. The net effect is enhanced catecholamine signaling in the prefrontal cortex, improving sustained attention and executive function.",
        target: {
          name: "Dopamine & norepinephrine reuptake transporters",
          action: "inhibitor",
          result: "↑ Dopamine & norepinephrine in synaptic cleft",
          system: "dopaminergic"
        }
      }
    ],
    patientIndications: ["ADHD", "Narcolepsy"],
    considerations: [
      'Causes <span class="hl hl--ci">tachycardia</span> and <span class="hl hl--ci">hypertension</span> — avoid in patients with structural cardiac abnormalities, cardiomyopathy, or serious arrhythmias due to risk of sudden death.',
      'Schedule II controlled substance with significant <span class="hl hl--warn">abuse potential</span> — can be crushed and snorted or injected for a cocaine-like high. Consider diversion or misuse in any stimulant-related call.',
      'Can precipitate <span class="hl hl--ci">psychosis, hallucinations, or mania</span> even at therapeutic doses — presentation may be indistinguishable from a primary psychiatric emergency.',
      'Contraindicated with <span class="hl hl--drug">MAOIs</span> — concurrent use can trigger <span class="hl hl--ci">hypertensive crisis</span>. Check the med list for phenelzine, tranylcypromine, or selegiline.',
      '<span class="hl hl--ci">Overdose</span> produces sympathomimetic toxicity: tachycardia, hypertension, hyperthermia, agitation, tremors, seizures, and delirium. Prehospital: benzodiazepines for agitation and seizures, active cooling for hyperthermia. Avoid beta blockers due to unopposed alpha stimulation.'
    ]
  },
  {
    id: "diphenhydramine",
    summary: "A first-generation antihistamine with strong anticholinergic and sedative properties, used for allergic reactions, urticaria, pruritus, motion sickness, and as an OTC sleep aid. Also used to treat drug-induced dystonia and extrapyramidal symptoms.",
    genericName: "Diphenhydramine",
    tradeNames: ["Benadryl"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Antihistamine"],
    source: "Mixed",
    moa: [
      {
        brief: "Competitively blocks H1 histamine receptors on effector cells, reducing the vascular permeability, bronchoconstriction, and pruritus caused by histamine release. Readily crosses the blood-brain barrier, producing significant sedation and suppressing the medullary cough center.",
        target: {
          name: "H1 histamine receptors",
          action: "antagonist",
          result: "↓ Allergic response, ↓ vascular permeability, sedation",
          system: "histaminergic"
        }
      },
      {
        brief: "Competitively antagonizes muscarinic acetylcholine receptors, producing anticholinergic effects including dry mucous membranes, urinary retention, tachycardia, and decreased GI motility.",
        target: {
          name: "Muscarinic acetylcholine receptors",
          action: "antagonist",
          result: "Anticholinergic effects: dry mouth, urinary retention, tachycardia",
          system: "cholinergic"
        }
      }
    ],
    patientIndications: ["Allergic Rhinitis", "Urticaria", "Pruritus", "Insomnia", "Motion Sickness", "Drug-Induced Dystonia"],
    considerations: [
      'Causes significant <span class="hl hl--ci">sedation</span> and CNS depression — additive with alcohol, opioids, benzodiazepines, and other CNS depressants. High fall risk in elderly patients.',
      'Strong <span class="hl hl--warn">anticholinergic effects</span>: dry mouth, urinary retention, tachycardia, constipation, blurred vision. Beers Criteria lists it as high-risk in older adults.',
      'Blocks sodium channels at supratherapeutic levels, causing <span class="hl hl--ci">QRS widening</span> and <span class="hl hl--ci">QT prolongation</span> — structurally and toxicologically similar to TCAs in overdose.',
      '<span class="hl hl--ci">Overdose</span> produces the classic anticholinergic toxidrome: delirium, hallucinations, mydriasis, tachycardia, dry flushed skin, hyperthermia, seizures. Prehospital: benzodiazepines for agitation and seizures, sodium bicarbonate for QRS widening.',
      'Paradoxical <span class="hl hl--warn">excitation</span> in pediatric patients — confusion and agitation rather than sedation may be the initial presentation.'
    ]
  },
  {
    id: "cetirizine",
    summary: "A second-generation antihistamine used for allergic rhinitis and chronic urticaria. Derived from hydroxyzine but with minimal CNS penetration, producing far less sedation than first-generation antihistamines.",
    genericName: "Cetirizine",
    tradeNames: ["Zyrtec"],
    category: ["Pulmonary"],
    classes: ["Antihistamine"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks peripheral H1 receptors on respiratory smooth muscle, vascular endothelium, and immune cells, suppressing the histamine-mediated allergic response without significant CNS depression.",
        target: {
          name: "Peripheral H1 receptors",
          action: "antagonist",
          result: "↓ Histamine-mediated allergic response",
          system: "histaminergic"
        }
      }
    ],
    patientIndications: ["Seasonal Allergic Rhinitis", "Perennial Allergic Rhinitis", "Chronic Urticaria", "Allergic Conjunctivitis"],
    considerations: [
      'Causes less <span class="hl hl--warn">sedation</span> than diphenhydramine but is not truly non-sedating — somnolence and fatigue still occur and are dose-dependent.',
      'Used as an adjunct to <span class="hl hl--drug">epinephrine</span> in anaphylaxis management — does not replace epinephrine and should never delay its administration.',
      'Additive CNS depression when combined with <span class="hl hl--warn">alcohol, opioids, or benzodiazepines</span>.',
      'Abrupt discontinuation after long-term use can cause <span class="hl hl--ci">rebound pruritus</span> — severe itching within days of stopping the drug.',
      'No specific antidote for overdose and not removable by dialysis — treatment is supportive and symptomatic.'
    ]
  },
  {
    id: "loratadine",
    summary: "A second-generation antihistamine used for allergic rhinitis and urticaria. Unlike first-generation agents such as diphenhydramine, loratadine does not significantly cross the blood-brain barrier and causes minimal sedation.",
    genericName: "Loratadine",
    tradeNames: ["Claritin", "Alavert"],
    category: ["Pulmonary"],
    classes: ["Antihistamine"],
    source: "StatPearls",
    moa: [
      {
        brief: "Selectively antagonizes peripheral H1 receptors on respiratory smooth muscle, vascular endothelium, and immune cells, blocking histamine-mediated allergic responses without significant CNS penetration.",
        target: {
          name: "Peripheral histamine H1 receptors",
          action: "antagonist",
          result: "↓ Allergic response — reduced sneezing, rhinorrhea, pruritus",
          system: "histaminergic"
        }
      }
    ],
    patientIndications: ["Allergic Rhinitis", "Urticaria", "Atopic Dermatitis"],
    considerations: [
      'Generally <span class="hl hl--indication">non-sedating</span>, but mild drowsiness can still occur — distinguish from altered mental status on a call by reviewing timing and context.',
      'Weak anticholinergic effects at therapeutic doses can cause <span class="hl hl--warn">dry mouth and mydriasis</span> — more pronounced in overdose or in elderly patients.',
      '<span class="hl hl--ci">QT prolongation</span> and cardiac arrhythmias are possible in overdose or when doses exceed the recommended amount, particularly in elderly patients.',
      'Overdose presents with <span class="hl hl--ci">anticholinergic toxidrome</span> — tachycardia, mydriasis, urinary retention, flushing, agitation. Treat with supportive care and benzodiazepines for agitation.',
      'Available OTC — patients may not report it on their medication list. Ask specifically about allergy medications during med reconciliation.'
    ]
  },
  {
    id: "hydroxychloroquine",
    summary: "A 4-aminoquinoline antimalarial and antirheumatic agent used to treat systemic lupus erythematosus, rheumatoid arthritis, and malaria. Patients on this drug have an autoimmune or rheumatic condition in the vast majority of cases.",
    genericName: "Hydroxychloroquine",
    tradeNames: ["Plaquenil"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Antirheumatic"],
    source: "Mixed",
    moa: [
      {
        brief: "Accumulates in lysosomes and raises intracellular pH, disrupting antigen processing and downregulating the immune response. The exact antirheumatic mechanism is not fully understood, but the net effect is reduced inflammatory cytokine release and immune activation.",
        target: {
          name: "Lysosomal pH / Toll-like receptors",
          action: "inhibitor",
          result: "↓ Immune activation, ↓ inflammatory cytokine release",
          system: "other"
        }
      }
    ],
    patientIndications: ["Systemic Lupus Erythematosus", "Rheumatoid Arthritis", "Discoid Lupus Erythematosus", "Malaria Prophylaxis"],
    considerations: [
      'Prolongs the <span class="hl hl--ci">QT, QRS, and PR intervals</span> — risk of ventricular arrhythmias and torsades de pointes, especially with other QT-prolonging drugs or electrolyte abnormalities.',
      'Chronic use causes irreversible <span class="hl hl--warn">retinal toxicity</span> (bull\'s eye maculopathy) — if a patient reports visual changes, this drug should be flagged to the receiving team.',
      'Can cause <span class="hl hl--ci">severe hypoglycemia</span> even without antidiabetic medications — check glucose in any HCQ patient with altered mental status.',
      'Causes <span class="hl hl--ci">hemolysis</span> in patients with G6PD deficiency — consider in any patient on HCQ presenting with acute anemia or jaundice.',
      '<span class="hl hl--ci">Overdose</span> is rapidly lethal — cardiac toxicity (QRS/QT prolongation, V-tach, arrest), hypotension, seizures, and hypokalemia within 1–3 hours. Prehospital: cardiac monitoring, prepare for defibrillation, benzodiazepines for seizures.'
    ]
  },
  {
    id: "methotrexate",
    summary: "A folate antagonist used as an immunosuppressant for rheumatoid arthritis, psoriasis, and other autoimmune conditions, and as a chemotherapeutic agent for certain cancers. Patients on methotrexate are immunocompromised and at risk for serious infections and bone marrow suppression.",
    genericName: "Methotrexate",
    tradeNames: ["Trexall", "Rasuvo", "Otrexup"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Antimetabolite", "Immunosuppressant"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits dihydrofolate reductase, blocking the conversion of dihydrofolate to tetrahydrofolate. This disrupts DNA and RNA synthesis. At low immunosuppressive doses, it also inhibits AICAR transformylase, leading to adenosine accumulation that suppresses T-cell activation and B-cell function.",
        target: {
          name: "Dihydrofolate reductase (DHFR)",
          action: "inhibitor",
          result: "↓ DNA/RNA synthesis, immunosuppression",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Rheumatoid Arthritis", "Psoriasis", "Juvenile Idiopathic Arthritis", "Acute Lymphoblastic Leukemia", "Non-Hodgkin Lymphoma", "Ectopic Pregnancy"],
    considerations: [
      'Causes <span class="hl hl--ci">immunosuppression</span> — patients are at increased risk for serious and opportunistic infections, including Pneumocystis pneumonia. Any fever or signs of infection in a methotrexate patient should be taken seriously.',
      '<span class="hl hl--ci">Bone marrow suppression</span> can cause pancytopenia — look for unexplained bleeding, bruising, or pallor. Risk increases with concurrent trimethoprim, NSAIDs, or renal impairment.',
      'Can cause <span class="hl hl--ci">hepatotoxicity</span> ranging from transaminase elevation to cirrhosis with chronic use. Patients may present with signs of liver failure.',
      '<span class="hl hl--warn">NSAIDs and aspirin</span> reduce methotrexate renal clearance, increasing toxicity risk. Relevant when assessing a patient\'s full medication list on scene.',
      '<span class="hl hl--warn">Nitrous oxide</span> potentiates methotrexate toxicity by further inhibiting folate metabolism — avoid N₂O analgesia in patients taking methotrexate.'
    ]
  },
  {
    id: "colchicine",
    summary: "An anti-inflammatory alkaloid used for gout flares, gout prophylaxis, familial Mediterranean fever, and pericarditis. It has a narrow therapeutic window and is extremely toxic in overdose.",
    genericName: "Colchicine",
    tradeNames: ["Colcrys", "Mitigare"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Anti-inflammatory"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds to tubulin and inhibits microtubule polymerization, disrupting neutrophil migration, chemotaxis, and inflammasome activation. This suppresses the inflammatory response driven by urate crystal deposition in gout.",
        target: {
          name: "Tubulin / microtubules",
          action: "inhibitor",
          result: "↓ Neutrophil migration, ↓ inflammasome activation, ↓ inflammation",
          system: "purinergic"
        }
      }
    ],
    patientIndications: ["Acute Gout", "Gout Prophylaxis", "Familial Mediterranean Fever", "Pericarditis"],
    considerations: [
      'Has a <span class="hl hl--ci">narrow therapeutic window</span> — toxicity can occur at doses close to therapeutic range, especially in patients with renal or hepatic impairment.',
      'GI symptoms (<span class="hl hl--ci">nausea, vomiting, diarrhea</span>) are the earliest signs of toxicity and may appear within hours of ingestion. Profuse diarrhea can cause hypovolemic shock.',
      '<span class="hl hl--ci">Overdose</span> is potentially lethal with no antidote. Progresses in phases: GI symptoms (0–24h), then multiorgan failure with pancytopenia, rhabdomyolysis, metabolic acidosis, and cardiovascular collapse (1–7 days).',
      'Ingestion >0.5 mg/kg carries significant mortality risk. <span class="hl hl--warn">Activated charcoal</span> given early is the primary decontamination measure — neither hemodialysis nor hemoperfusion effectively removes colchicine.',
      'Concurrent use of <span class="hl hl--warn">CYP3A4 inhibitors or P-glycoprotein inhibitors</span> (including many antibiotics and antifungals) can precipitate life-threatening toxicity even at standard doses.'
    ]
  },
  {
    id: "allopurinol",
    summary: "A xanthine oxidase inhibitor used to lower uric acid levels in patients with gout, recurrent kidney stones, and tumor lysis syndrome prevention. Patients on allopurinol have a history of hyperuricemia-related disease.",
    genericName: "Allopurinol",
    tradeNames: ["Zyloprim"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Xanthine Oxidase Inhibitor"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits xanthine oxidase, the enzyme that converts hypoxanthine to xanthine and xanthine to uric acid. This blocks the final steps of purine catabolism, reducing uric acid production in both serum and urine.",
        target: {
          name: "Xanthine oxidase",
          action: "inhibitor",
          result: "↓ Uric acid production, ↓ serum and urinary urate",
          system: "purinergic"
        }
      }
    ],
    patientIndications: ["Gout", "Recurrent Calcium Nephrolithiasis", "Tumor Lysis Syndrome Prevention", "Hyperuricemia"],
    considerations: [
      '<span class="hl hl--ci">Allopurinol hypersensitivity syndrome (AHS)</span> is rare (~1 in 1000) but carries 20–25% mortality — presents with Stevens-Johnson syndrome, toxic epidermal necrolysis, hepatic injury, and renal failure. Must be discontinued at the first sign of rash.',
      'AHS risk increases with <span class="hl hl--warn">renal impairment</span> and concurrent thiazide diuretic use. Patients of Korean, Han Chinese, or Thai descent with HLA-B*5801 are at particularly high risk.',
      'Initiating allopurinol can paradoxically trigger <span class="hl hl--warn">acute gout flares</span> — a patient presenting with a gout attack may have recently started this medication.',
      'Critical interaction with <span class="hl hl--drug">azathioprine</span> and <span class="hl hl--drug">6-mercaptopurine</span> — allopurinol blocks their metabolism, potentially causing severe pancytopenia and agranulocytosis.',
      'Overdose is not a significant prehospital concern — massive overdose has rarely been reported, and there is no specific antidote or recognizable toxidrome.'
    ]
  },
  {
    id: "alendronate",
    summary: "A bisphosphonate used for osteoporosis and Paget disease of bone. Inhibits osteoclast-mediated bone resorption to increase bone density and reduce fracture risk.",
    genericName: "Alendronate",
    tradeNames: ["Fosamax"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Bisphosphonate"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds to hydroxyapatite in bone and inhibits osteoclast activity, reducing bone resorption without directly affecting bone formation. The net effect is decreased bone turnover and increased bone mineral density.",
        target: {
          name: "Osteoclasts (via hydroxyapatite binding)",
          action: "inhibitor",
          result: "↓ Bone resorption, ↑ bone mineral density",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Osteoporosis", "Glucocorticoid-Induced Osteoporosis", "Paget Disease of Bone"],
    considerations: [
      'Patients on bisphosphonates have increased <span class="hl hl--warn">fracture risk from underlying osteoporosis</span> — low-mechanism falls can produce hip, vertebral, or wrist fractures. Maintain a high index of suspicion for occult fractures.',
      'Long-term use is associated with <span class="hl hl--ci">atypical femoral fractures</span> — spontaneous or low-energy fractures of the femoral shaft. A patient reporting thigh or groin pain may have an impending stress fracture.',
      '<span class="hl hl--ci">Osteonecrosis of the jaw</span> is a rare but recognized complication, typically following dental procedures. Not an acute prehospital concern but relevant history.',
      'Can cause <span class="hl hl--warn">esophageal irritation</span>, ulceration, and stricture — patients presenting with dysphagia, chest pain, or new-onset heartburn on a bisphosphonate may have esophageal injury.',
      'May cause <span class="hl hl--ci">hypocalcemia</span>, especially in patients with vitamin D deficiency or renal impairment — consider in patients presenting with muscle cramps, paresthesias, or tetany.'
    ]
  },
  {
    id: "tamsulosin",
    summary: "An alpha-1A adrenergic antagonist used for benign prostatic hyperplasia (BPH). Relaxes smooth muscle in the prostate and bladder neck to improve urinary flow in men with enlarged prostates.",
    genericName: "Tamsulosin",
    tradeNames: ["Flomax"],
    category: ["Cardiovascular"],
    classes: ["Alpha-1 Antagonist", "Antihypertensive"],
    source: "DailyMed",
    moa: [
      {
        brief: "Selectively blocks alpha-1A adrenergic receptors concentrated in prostatic smooth muscle and the bladder neck, reducing urethral resistance without significant vascular effects at therapeutic doses.",
        target: {
          name: "Alpha-1A adrenergic receptors",
          action: "antagonist",
          result: "Prostatic smooth muscle relaxation, ↑ urinary flow",
          system: "adrenergic"
        }
      }
    ],
    patientIndications: ["Benign Prostatic Hyperplasia"],
    considerations: [
      'Causes <span class="hl hl--ci">orthostatic hypotension</span>, especially after the first dose or when restarting after interruption — assess positional vitals in patients reporting dizziness or syncope.',
      'Concomitant use with <span class="hl hl--drug">PDE5 inhibitors</span> (sildenafil, tadalafil) significantly increases hypotension risk — ask about erectile dysfunction medications.',
      'Associated with <span class="hl hl--warn">intraoperative floppy iris syndrome</span> (IFIS) — relevant history if the patient is presenting with eye complaints or headed for ophthalmic surgery.',
      'Although marketed as prostate-selective, alpha-1 blockade can still cause <span class="hl hl--ci">dizziness</span> and <span class="hl hl--ci">syncope</span> — consider tamsulosin as a contributing factor in fall-related calls in older men.',
      'Not indicated for hypertension despite being an alpha blocker — its presence on a med list points to BPH, not cardiovascular disease.'
    ]
  },
  {
    id: "sildenafil",
    summary: "A PDE-5 inhibitor used for erectile dysfunction and pulmonary arterial hypertension. Its critical EMS relevance is the absolute contraindication with nitrates — coadministration causes severe, potentially fatal hypotension.",
    genericName: "Sildenafil",
    tradeNames: ["Viagra", "Revatio"],
    category: ["Cardiovascular"],
    classes: ["Vasodilator"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits PDE-5, preventing the breakdown of cGMP in vascular smooth muscle. Increased cGMP causes smooth muscle relaxation and vasodilation — in the pulmonary vasculature this reduces pulmonary arterial pressure, and in the corpus cavernosum it facilitates erection.",
        target: {
          name: "Phosphodiesterase type 5 (PDE-5)",
          action: "inhibitor",
          result: "↑ cGMP → vasodilation, ↓ pulmonary vascular resistance",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Erectile Dysfunction", "Pulmonary Arterial Hypertension"],
    considerations: [
      '<span class="hl hl--ci">Absolutely contraindicated with nitrates</span> — sildenafil prevents cGMP breakdown while nitrates increase cGMP production, causing synergistic and potentially fatal hypotension. Do not administer nitroglycerin within 24 hours of sildenafil use.',
      'Causes systemic <span class="hl hl--ci">hypotension</span>, especially in patients on alpha blockers, multiple antihypertensives, or who are volume-depleted. Assess blood pressure before any vasodilator administration.',
      'Patients may not volunteer sildenafil use due to embarrassment — ask directly about <span class="hl hl--warn">PDE-5 inhibitors</span> or "erectile dysfunction medications" when chest pain patients need nitrates.',
      'When sildenafil is prescribed as <span class="hl hl--drug">Revatio</span> for pulmonary arterial hypertension, the patient has significant underlying cardiopulmonary disease — expect baseline hypoxia and right heart strain.',
      'Overdose is primarily supportive — no antidote exists. Expect headache, flushing, and visual disturbances (blue-green color changes from PDE-6 inhibition). Dialysis is ineffective due to high protein binding.'
    ]
  },
  {
    id: "tadalafil",
    summary: "A PDE-5 inhibitor used for erectile dysfunction, benign prostatic hyperplasia, and pulmonary arterial hypertension. Its long half-life (~17.5 hours) extends the nitrate contraindication window to 48 hours — significantly longer than sildenafil.",
    genericName: "Tadalafil",
    tradeNames: ["Cialis", "Adcirca"],
    category: ["Cardiovascular"],
    classes: ["Vasodilator"],
    source: "Mixed",
    moa: [
      {
        brief: "Inhibits PDE-5, preventing the breakdown of cGMP in vascular smooth muscle. Increased cGMP causes smooth muscle relaxation and vasodilation — reducing pulmonary arterial pressure in PAH and facilitating erection in ED. Also relaxes prostatic and bladder neck smooth muscle, improving urinary flow in BPH.",
        target: {
          name: "Phosphodiesterase type 5 (PDE-5)",
          action: "inhibitor",
          result: "↑ cGMP → vasodilation, ↓ pulmonary vascular resistance, prostatic smooth muscle relaxation",
          system: "enzymatic"
        }
      }
    ],
    patientIndications: ["Erectile Dysfunction", "Benign Prostatic Hyperplasia", "Pulmonary Arterial Hypertension"],
    considerations: [
      '<span class="hl hl--ci">Absolutely contraindicated with nitrates</span> — do not administer nitroglycerin within 48 hours of tadalafil use. Its long half-life makes this window twice as long as sildenafil.',
      'Causes <span class="hl hl--ci">hypotension</span>, especially combined with alpha blockers, antihypertensives, or alcohol. Assess blood pressure before administering any vasodilator.',
      'Patients may not volunteer tadalafil use — ask directly about <span class="hl hl--warn">PDE-5 inhibitors</span> or "erectile dysfunction medications" when evaluating chest pain patients for nitrate administration.',
      'When prescribed as <span class="hl hl--drug">Adcirca</span> for pulmonary arterial hypertension, the patient has significant cardiopulmonary disease — expect baseline hypoxia and right heart strain.',
      '<span class="hl hl--warn">Priapism</span> is a rare but serious adverse effect requiring emergent urological intervention — a prolonged painful erection lasting more than 4 hours risks permanent tissue damage.'
    ]
  },
  {
    id: "testosterone",
    summary: "An androgen hormone used as replacement therapy in males with hypogonadism. Prescribed to restore physiological testosterone levels and reverse symptoms of androgen deficiency including fatigue, low libido, and loss of muscle mass.",
    genericName: "Testosterone",
    tradeNames: ["AndroGel", "Testim", "Depo-Testosterone", "Axiron", "Fortesta", "Natesto"],
    category: ["Endocrine"],
    classes: ["Hormone"],
    source: "Mixed",
    moa: [
      {
        brief: "Exogenous testosterone binds to intracellular androgen receptors, restoring physiological androgen signaling that drives protein synthesis, erythropoiesis, bone mineral density, and male secondary sexual characteristics.",
        target: {
          name: "Androgen receptors",
          action: "agonist",
          result: "Restored androgenic signaling, ↑ muscle mass, ↑ erythropoiesis, ↑ bone density",
          system: "hormonal"
        }
      }
    ],
    patientIndications: ["Male hypogonadism", "Testosterone deficiency", "Delayed puberty"],
    considerations: [
      '<span class="hl hl--ci">Erythrocytosis</span> — testosterone stimulates red blood cell production, increasing hematocrit and raising the risk of thromboembolic events including stroke and MI.',
      'Increases risk of <span class="hl hl--ci">venous thromboembolism</span>, particularly in the first months of therapy. A patient on TRT presenting with unilateral leg swelling or acute dyspnea warrants high suspicion for DVT/PE.',
      'Can cause <span class="hl hl--warn">fluid retention</span> and worsen congestive heart failure — relevant when assessing a CHF patient with new or worsening edema.',
      'Testosterone is a <span class="hl hl--general">DEA Schedule III controlled substance</span>. Abuse at supraphysiologic doses (anabolic steroid misuse) causes aggression, cardiomyopathy, hepatotoxicity, and testicular atrophy.',
      'Suppresses endogenous gonadotropins and <span class="hl hl--warn">spermatogenesis</span> — exogenous testosterone on a med list indicates the patient is likely infertile while on therapy and may have hypothalamic-pituitary axis suppression.'
    ]
  },
  {
    id: "oral-contraceptives",
    summary: "A combined oral contraceptive containing ethinyl estradiol (estrogen) and norethindrone (progestin) used for pregnancy prevention, menstrual regulation, and acne. The primary EMS relevance is the increased risk of thromboembolic events.",
    genericName: "Ethinyl Estradiol/Norethindrone",
    tradeNames: ["Ovcon 35", "Brevicon", "Modicon", "Necon", "Nortrel", "Ortho-Novum"],
    category: ["Endocrine"],
    classes: ["Hormone"],
    source: "Mixed",
    moa: [
      {
        brief: "Synthetic estrogen and progestin suppress gonadotropin release from the hypothalamus and pituitary, preventing follicular development and ovulation. Progestin also thickens cervical mucus and thins the endometrium.",
        target: {
          name: "Hypothalamic-pituitary-gonadal axis",
          action: "inhibitor",
          result: "↓ FSH, ↓ LH, suppressed ovulation",
          system: "hormonal"
        }
      }
    ],
    patientIndications: ["Contraception", "Menstrual Irregularity", "Dysmenorrhea", "Endometriosis", "Acne"],
    considerations: [
      'Increases risk of <span class="hl hl--ci">venous thromboembolism</span> (DVT, PE) — risk is highest in the first year of use, in smokers over 35, and in obese patients. A young woman with sudden dyspnea or unilateral leg swelling on OCPs warrants high suspicion for VTE.',
      'Increases risk of <span class="hl hl--ci">ischemic stroke</span> and <span class="hl hl--ci">myocardial infarction</span>, particularly in patients who smoke, have hypertension, or have migraines with aura.',
      'Exogenous estrogen creates a <span class="hl hl--warn">hypercoagulable state</span> — relevant when assessing any patient with unexplained chest pain, neurological deficits, or acute limb complaints.',
      'Can cause <span class="hl hl--warn">hypertension</span> in 4–5% of healthy users and worsen pre-existing hypertension.',
      'Overdose is not life-threatening — causes nausea, vomiting, and withdrawal bleeding. No specific antidote or prehospital intervention required.'
    ]
  },
  {
    id: "azithromycin",
    summary: "A macrolide antibiotic used for respiratory infections, skin infections, and sexually transmitted infections. Prescribed as a short course (Z-Pack) and encountered on med lists during active treatment or recent illness.",
    genericName: "Azithromycin",
    tradeNames: ["Zithromax", "Z-Pack"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Macrolide Antibiotic"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds to the 50S bacterial ribosomal subunit, blocking translocation of aminoacyl-tRNA and inhibiting bacterial protein synthesis. Bacteriostatic at standard concentrations.",
        target: {
          name: "50S bacterial ribosomal subunit",
          action: "inhibitor",
          result: "Inhibition of bacterial protein synthesis",
          system: "other"
        }
      }
    ],
    patientIndications: ["Community-Acquired Pneumonia", "Acute Bacterial Sinusitis", "COPD Exacerbation", "Pharyngitis", "Otitis Media", "Chlamydia", "Skin Infections"],
    considerations: [
      'Causes <span class="hl hl--ci">QTc prolongation</span>, which can trigger torsades de pointes — risk increases in patients with existing cardiac disease, electrolyte abnormalities, or concurrent QT-prolonging medications.',
      'Observational studies show an approximately two-fold increased short-term risk of <span class="hl hl--ci">cardiovascular death</span> compared to amoxicillin, greatest in patients with high baseline cardiac risk.',
      'GI effects (nausea, diarrhea, abdominal pain) are the most common adverse reactions — relevant for EMS if the patient presents with vomiting or dehydration during a course of treatment.',
      'May potentiate the effects of <span class="hl hl--drug">warfarin</span> and increase bleeding risk — ask about anticoagulant use if the patient is on azithromycin and presents with bleeding.',
      'Long tissue half-life (2–4 days) means adverse effects, including QT prolongation, can persist for days after the last dose.'
    ]
  },
  {
    id: "amoxicillin",
    summary: "A penicillin-class antibiotic used for a wide range of bacterial infections including otitis media, sinusitis, pharyngitis, pneumonia, and urinary tract infections. Also used in combination therapy for H. pylori eradication.",
    genericName: "Amoxicillin",
    tradeNames: ["Amoxil"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["Antibiotic"],
    source: "Mixed",
    moa: [
      {
        brief: "Binds to penicillin-binding proteins and inhibits bacterial cell wall synthesis by blocking cross-linking of peptidoglycan, resulting in cell lysis and death during active bacterial multiplication.",
        target: {
          name: "Penicillin-binding proteins (PBPs)",
          action: "inhibitor",
          result: "Bacterial cell wall disruption → cell lysis",
          system: "other"
        }
      }
    ],
    patientIndications: ["Otitis Media", "Sinusitis", "Pharyngitis", "Community-Acquired Pneumonia", "Urinary Tract Infection", "H. Pylori Eradication", "Skin and Soft Tissue Infection", "Lyme Disease", "Endocarditis Prophylaxis"],
    considerations: [
      '<span class="hl hl--ci">Anaphylaxis</span> risk in patients with true penicillin allergy — always ask about penicillin and beta-lactam allergy history before assuming this is a benign home med.',
      'Patients reporting a childhood "amoxicillin rash" often had a delayed maculopapular reaction (type IV), not true anaphylaxis — but distinguish carefully, as <span class="hl hl--ci">type-I IgE-mediated reactions</span> carry life-threatening risk on re-exposure.',
      'GI symptoms (<span class="hl hl--warn">nausea, vomiting, diarrhea</span>) are the most common adverse effects and may mimic an acute abdominal presentation on a call.',
      'Prolonged use can cause <span class="hl hl--warn">pseudomembranous colitis</span> (C. difficile) — consider in patients on amoxicillin presenting with severe diarrhea, fever, and abdominal pain.',
      'Cross-reactivity with <span class="hl hl--drug">cephalosporins</span> and carbapenems exists but is lower than historically reported — relevant when considering prehospital antibiotic protocols.'
    ]
  },
];
