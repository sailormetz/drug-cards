const home_meds = [
  {
    id: "metoprolol",
    genericName: "Metoprolol",
    tradeNames: ["Lopressor", "Toprol-XL"],
    category: ["Cardiovascular"],
    classes: ["beta_blocker", "antihypertensive", "antiarrhythmic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Heart failure (HFrEF)", "Angina pectoris", "Atrial fibrillation", "Post-MI"],
    comorbidities: ["Coronary artery disease", "Type 2 diabetes", "Chronic kidney disease", "Hyperlipidemia", "Atrial fibrillation"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "Statins (atorvastatin, rosuvastatin)", "Loop diuretics (furosemide)", "Aspirin", "Anticoagulants (apixaban, warfarin)"],
    overdoseToxicity: ["Severe bradycardia, including high-degree AV block", "Hypotension, often refractory to fluids", "Hypoglycemia with masked symptoms", "Bronchospasm", "Altered mental status progressing to seizures"],
    precautions: [
      '<span class="hl hl--drug">Epinephrine</span> response is diminished — standard doses may not restore BP or HR in <span class="hl hl--ci">anaphylaxis</span>.',
      'Compensatory <span class="hl hl--warn">tachycardia is blunted</span> — a normal HR does not rule out hypovolemia, hypoglycemia, or shock.',
      '<span class="hl hl--drug">Atropine</span> has reduced efficacy for beta blocker-induced <span class="hl hl--ci">bradycardia</span>.',
      'Masks <span class="hl hl--warn">hypoglycemia symptoms</span> — tachycardia and tremor are suppressed, leaving only diaphoresis and altered mentation as clues.',
      'Abrupt discontinuation causes <span class="hl hl--ci">rebound hypertension</span>, tachycardia, and can precipitate angina or MI.'
    ],
    summary: "Metoprolol is a cardioselective beta-1 blocker used in patients with significant cardiovascular disease — hypertension, heart failure, post-MI, and atrial fibrillation. Its presence signals a patient with limited cardiac reserve who cannot mount a normal compensatory response to hemodynamic stress. Expect blunted heart rate responses across the board: shock, hypoglycemia, and anaphylaxis will all present atypically. Standard prehospital interventions (atropine, epinephrine) have reduced efficacy in these patients."
  },
  {
    id: "atenolol",
    genericName: "Atenolol",
    tradeNames: ["Tenormin"],
    category: ["Cardiovascular"],
    classes: ["beta_blocker", "antihypertensive", "antiarrhythmic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Angina pectoris", "Acute MI (secondary prevention)", "SVT (off-label)", "Migraine prophylaxis (off-label)"],
    comorbidities: ["Coronary artery disease", "Hyperlipidemia", "Type 2 diabetes", "Chronic kidney disease", "Atrial fibrillation"],
    polypharmacy: ["Thiazide diuretics (hydrochlorothiazide)", "ACE Inhibitors (lisinopril, ramipril)", "Statins (atorvastatin, rosuvastatin)", "Aspirin", "Calcium Channel Blockers (amlodipine)"],
    overdoseToxicity: ["Severe bradycardia with AV block", "Hypotension progressing to cardiogenic shock", "Hypoglycemia", "Lethargy progressing to coma", "Seizures"],
    precautions: [
      '<span class="hl hl--drug">Epinephrine</span> response is diminished — standard doses may fail to restore HR and BP in <span class="hl hl--ci">anaphylaxis</span>.',
      'Compensatory <span class="hl hl--warn">tachycardia is blunted</span> — a normal HR does not rule out shock or hypovolemia.',
      'Masks <span class="hl hl--warn">hypoglycemia symptoms</span> — tachycardia is suppressed, leaving diaphoresis and altered mentation as the primary clues.',
      'Beta-1 selectivity is dose-dependent — at higher doses, <span class="hl hl--ci">bronchospasm</span> can occur in COPD/asthma patients.',
      'Abrupt discontinuation risks <span class="hl hl--ci">rebound angina</span>, hypertension, and acute coronary syndrome.'
    ],
    summary: "Atenolol is a cardioselective beta-1 blocker prescribed for hypertension, angina, and post-MI secondary prevention. Its presence on a med list points to a patient with cardiovascular disease and limited ability to compensate for hemodynamic stress. Heart rate responses to shock, hypoglycemia, and anaphylaxis will be blunted, making these conditions harder to recognize. Water-soluble and renally excreted, atenolol accumulates in renal impairment — expect exaggerated effects in patients with kidney disease."
  },
  {
    id: "carvedilol",
    genericName: "Carvedilol",
    tradeNames: ["Coreg", "Coreg CR"],
    category: ["Cardiovascular"],
    classes: ["beta_blocker", "alpha1_antagonist", "antihypertensive"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Heart failure (HFrEF)", "Hypertension", "Post-MI LV dysfunction", "Atrial fibrillation (off-label)", "Esophageal variceal prophylaxis (off-label)"],
    comorbidities: ["Coronary artery disease", "Type 2 diabetes", "Chronic kidney disease", "Atrial fibrillation", "Cirrhosis with portal hypertension"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "Loop diuretics (furosemide)", "Statins (atorvastatin)", "Aspirin", "Digoxin"],
    overdoseToxicity: ["Severe bradycardia, including high-degree AV block", "Hypotension, often refractory due to combined alpha and beta blockade", "Bronchospasm", "Hypoglycemia with masked symptoms", "QRS widening from sodium channel blockade"],
    precautions: [
      '<span class="hl hl--drug">Atropine</span> is largely ineffective for carvedilol-induced <span class="hl hl--ci">bradycardia</span>.',
      'Compensatory <span class="hl hl--warn">tachycardia is blunted</span> — a normal HR does not rule out shock.',
      '<span class="hl hl--drug">Epinephrine</span> response is diminished — standard doses may not restore BP or HR in <span class="hl hl--ci">anaphylaxis</span>.',
      'Non-selective beta blockade can trigger <span class="hl hl--ci">bronchospasm</span> in COPD/asthma patients.',
      'Abrupt discontinuation risks <span class="hl hl--ci">rebound hypertension</span> and acute coronary syndrome.'
    ],
    summary: "Carvedilol is a combined alpha-beta blocker used in patients with significant cardiac disease — heart failure, post-MI, and hypertension. Its dual blockade causes more pronounced hypotension than selective beta blockers, making these patients particularly vulnerable to hemodynamic collapse. Expect blunted heart rate responses across the board: shock, hypoglycemia, and anaphylaxis will all present atypically. Standard prehospital interventions (atropine, epinephrine) have reduced efficacy, and sodium channel blockade in overdose can widen the QRS."
  },
  {
    id: "labetalol",
    genericName: "Labetalol",
    tradeNames: ["Trandate"],
    category: ["Cardiovascular"],
    classes: ["beta_blocker", "alpha1_antagonist", "antihypertensive"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Hypertensive crisis", "Gestational hypertension", "Preeclampsia"],
    comorbidities: ["Coronary artery disease", "Chronic kidney disease", "Type 2 diabetes", "Preeclampsia or eclampsia", "Stroke history"],
    polypharmacy: ["Thiazide diuretics (hydrochlorothiazide)", "Loop diuretics (furosemide)", "ACE Inhibitors (lisinopril, enalapril)", "Statins (atorvastatin)", "Aspirin"],
    overdoseToxicity: ["Severe hypotension, worsened by standing", "Bradycardia, including high-degree AV block", "Bronchospasm", "Hypoglycemia (masked symptoms)", "Altered mental status progressing to seizures"],
    precautions: [
      '<span class="hl hl--drug">Epinephrine</span> response is diminished — both alpha and beta blockade reduce effectiveness in <span class="hl hl--ci">anaphylaxis</span>.',
      'Compensatory <span class="hl hl--warn">tachycardia is blunted</span> — a normal HR does not rule out shock or hypovolemia.',
      'Non-selective beta blockade can trigger <span class="hl hl--ci">bronchospasm</span> in COPD/asthma patients.',
      'Masks <span class="hl hl--warn">hypoglycemia symptoms</span> — tachycardia and tremor may be absent in diabetic patients.',
      'Abrupt discontinuation risks <span class="hl hl--ci">rebound hypertension</span> and catecholamine hypersensitivity.'
    ],
    summary: "Labetalol is a combined alpha-beta blocker primarily used for hypertension and hypertensive emergencies, including in pregnancy. Its dual blockade produces pronounced vasodilation and hypotension — particularly positional — beyond what selective beta blockers cause. Expect blunted compensatory tachycardia in shock, hemorrhage, and anaphylaxis. Epinephrine and atropine have reduced efficacy in these patients."
  },
  {
    id: "lisinopril",
    genericName: "Lisinopril",
    tradeNames: ["Zestril", "Prinivil", "Qbrelis"],
    category: ["Cardiovascular"],
    classes: ["ace_inhibitor", "antihypertensive"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Heart failure (HFrEF)", "Post-MI mortality reduction"],
    comorbidities: ["Coronary artery disease", "Type 2 diabetes", "Chronic kidney disease", "Heart failure", "Cerebrovascular disease"],
    polypharmacy: ["Beta blockers (metoprolol, carvedilol)", "Diuretics (furosemide, hydrochlorothiazide)", "Statins (atorvastatin)", "Aspirin", "Potassium chloride"],
    overdoseToxicity: ["Hypotension, often refractory to standard vasopressors", "Hyperkalemia with cardiac dysrhythmia risk", "Acute renal failure", "Angioedema with airway compromise"],
    precautions: [
      'Can cause <span class="hl hl--ci">angioedema</span> at any point during therapy — tongue, glottis, and laryngeal swelling may require emergent airway management.',
      '<span class="hl hl--ci">Hyperkalemia</span> risk increases with renal impairment and concurrent potassium-sparing diuretics.',
      'Hypotension may be severe in volume-depleted patients — concurrent <span class="hl hl--drug">diuretic</span> use amplifies this risk.',
      'Increases <span class="hl hl--drug">lithium</span> levels — patients on both drugs are at higher risk for <span class="hl hl--ci">lithium toxicity</span>.',
      '<span class="hl hl--drug">NSAIDs</span> reduce antihypertensive effect and worsen <span class="hl hl--warn">renal function</span> when combined with ACE inhibitors.'
    ],
    summary: "Lisinopril is an ACE inhibitor prescribed for hypertension, heart failure, and post-MI survival. Its presence signals a patient with cardiovascular disease and possible renal compromise. The highest-stakes prehospital concern is angioedema — asymmetric face and airway swelling that can occur at any time during therapy and may require aggressive airway intervention. Expect hypotension in volume-depleted patients and be aware of hyperkalemia risk, especially when the patient is also taking potassium-sparing diuretics."
  },
  {
    id: "losartan",
    genericName: "Losartan",
    tradeNames: ["Cozaar", "Hyzaar"],
    category: ["Cardiovascular"],
    classes: ["arb", "antihypertensive"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Diabetic nephropathy", "Stroke risk reduction (with LVH)", "Heart failure"],
    comorbidities: ["Type 2 diabetes", "Chronic kidney disease", "Left ventricular hypertrophy", "Coronary artery disease", "Gout"],
    polypharmacy: ["Thiazide diuretics (hydrochlorothiazide)", "Statins (atorvastatin, rosuvastatin)", "Oral hypoglycemics (metformin)", "Calcium channel blockers (amlodipine)", "Aspirin"],
    overdoseToxicity: ["Hypotension, potentially refractory to catecholamines", "Hyperkalemia with cardiac dysrhythmia risk", "Acute kidney injury", "Dizziness and syncope"],
    precautions: [
      'ARB blockade of the RAAS can cause <span class="hl hl--ci">hypotension</span> refractory to standard vasopressors — vasopressin may be required in overdose.',
      '<span class="hl hl--ci">Hyperkalemia</span> risk is significant, especially with concurrent potassium-sparing diuretics or renal impairment.',
      'Can cause <span class="hl hl--ci">angioedema</span> — less common than with ACE inhibitors but still possible, including in patients switched from an ACEi for this reason.',
      'Increases <span class="hl hl--drug">lithium</span> serum concentrations, raising risk of <span class="hl hl--ci">lithium toxicity</span>.',
      '<span class="hl hl--drug">NSAIDs</span> reduce antihypertensive effect and compound <span class="hl hl--warn">renal impairment</span> when used with ARBs.'
    ],
    summary: "Losartan is an ARB used for hypertension, diabetic nephropathy, and stroke risk reduction in patients with LVH. Its presence on a med list signals a patient with hypertensive end-organ disease, frequently including diabetes and chronic kidney disease. In overdose, hypotension may be refractory to catecholamines because the RAAS is blocked. Angioedema is less frequent than with ACE inhibitors but remains a risk, and hyperkalemia should be anticipated in any critically ill patient taking this drug."
  },
  {
    id: "amlodipine",
    genericName: "Amlodipine",
    tradeNames: ["Norvasc"],
    category: ["Cardiovascular"],
    classes: ["calcium_channel_blocker", "antihypertensive", "vasodilator"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Chronic stable angina", "Vasospastic angina (Prinzmetal)", "Coronary artery disease"],
    comorbidities: ["Coronary artery disease", "Type 2 diabetes", "Hyperlipidemia", "Chronic kidney disease", "Peripheral vascular disease"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "ARBs (losartan, valsartan)", "Statins (atorvastatin, rosuvastatin)", "Beta blockers (metoprolol, atenolol)", "Aspirin"],
    overdoseToxicity: ["Profound refractory hypotension from vasodilation", "Reflex tachycardia progressing to bradycardia in severe overdose", "Hyperglycemia from impaired insulin release", "Metabolic acidosis from tissue hypoperfusion", "Non-cardiogenic pulmonary edema"],
    precautions: [
      '<span class="hl hl--drug">Nitroglycerin</span> has additive hypotensive effect — monitor BP closely before and after administration in patients on <span class="hl hl--ci">amlodipine</span>.',
      'Dihydropyridine CCBs cause peripheral <span class="hl hl--ci">vasodilation</span> without significant cardiac conduction effects at therapeutic doses — distinct from verapamil/diltiazem.',
      'Long half-life (30–50 hours) means <span class="hl hl--warn">toxicity is prolonged</span> — hemodynamic instability can persist for days after overdose.',
      '<span class="hl hl--drug">Atropine</span> is ineffective in severe CCB toxicity — bradycardia and hypotension do not respond to standard ACLS doses.',
      'Peripheral <span class="hl hl--warn">edema</span> is dose-dependent and common — do not confuse with heart failure exacerbation.'
    ],
    summary: "Amlodipine is a dihydropyridine calcium channel blocker used for hypertension, angina, and CAD. It lowers blood pressure through peripheral vasodilation without significant negative chronotropic or inotropic effects at therapeutic doses. In overdose, profound hypotension is the primary threat — refractory to fluids and vasopressors, with a prolonged course due to the drug's 30–50 hour half-life. Prehospital nitroglycerin should be used cautiously in these patients due to additive hypotension."
  },
  {
    id: "diltiazem",
    genericName: "Diltiazem",
    tradeNames: ["Cardizem", "Tiazac", "Cartia XT", "Dilacor XR"],
    category: ["Cardiovascular"],
    classes: ["calcium_channel_blocker", "antiarrhythmic", "antihypertensive"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Chronic stable angina", "Atrial fibrillation (rate control)", "PSVT", "Vasospastic angina"],
    comorbidities: ["Coronary artery disease", "Atrial fibrillation", "Heart failure (HFpEF)", "Hypertensive heart disease", "Type 2 diabetes"],
    polypharmacy: ["Beta blockers (metoprolol, atenolol)", "ACE Inhibitors (lisinopril, enalapril)", "Statins (atorvastatin, simvastatin)", "Anticoagulants (apixaban, warfarin)", "Digoxin"],
    overdoseToxicity: ["Profound bradycardia with high-degree AV block", "Hypotension progressing to cardiovascular collapse", "Hyperglycemia from impaired insulin release", "Lactic acidosis from end-organ hypoperfusion", "Cardiac arrest"],
    precautions: [
      'Concurrent <span class="hl hl--drug">IV beta blockers</span> with diltiazem is <span class="hl hl--ci">contraindicated</span> — combined negative chronotropy and inotropy risks cardiovascular collapse.',
      '<span class="hl hl--drug">Digoxin</span> levels increase with concurrent diltiazem use — raises risk of <span class="hl hl--ci">digoxin toxicity</span>.',
      'Non-dihydropyridine CCB — causes significant <span class="hl hl--ci">bradycardia and AV block</span> at therapeutic and toxic doses, unlike amlodipine or nifedipine.',
      '<span class="hl hl--warn">Contraindicated in WPW</span> with atrial fibrillation — may accelerate conduction through the accessory pathway and trigger ventricular fibrillation.',
      'Extended-release formulations delay <span class="hl hl--warn">toxicity onset up to 12 hours</span> — asymptomatic patients after acute ingestion can deteriorate late.'
    ],
    summary: "Diltiazem is a non-dihydropyridine calcium channel blocker prescribed for hypertension, angina, and atrial fibrillation rate control. Its presence signals a patient with cardiac conduction dependence — expect baseline bradycardia and hypotension risk, especially if combined with beta blockers or digoxin. In overdose, diltiazem produces severe bradycardia, AV block, and refractory hypotension that can progress to cardiac arrest; extended-release formulations can delay symptom onset for hours. Avoid IV beta blockers in the field and use caution with nitroglycerin due to additive hypotension."
  },
  {
    id: "nifedipine",
    genericName: "Nifedipine",
    tradeNames: ["Procardia", "Procardia XL", "Adalat", "Adalat CC"],
    category: ["Cardiovascular"],
    classes: ["calcium_channel_blocker", "antihypertensive", "vasodilator"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Chronic stable angina", "Vasospastic angina (Prinzmetal)", "Raynaud phenomenon"],
    comorbidities: ["Coronary artery disease", "Peripheral vascular disease", "Chronic kidney disease", "Type 2 diabetes", "Left ventricular hypertrophy"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "Beta blockers (metoprolol, atenolol)", "Statins (atorvastatin)", "Thiazide diuretics (hydrochlorothiazide)", "Aspirin"],
    overdoseToxicity: ["Severe hypotension progressing to distributive shock", "Reflex sinus tachycardia", "Hyperglycemia", "Metabolic acidosis from prolonged hypoperfusion", "Altered mental status progressing to coma"],
    precautions: [
      'Causes significant <span class="hl hl--ci">hypotension</span> — additive with <span class="hl hl--drug">nitroglycerin</span>, fentanyl, and other vasodilators.',
      'Reflex <span class="hl hl--warn">tachycardia</span> can mimic or mask other causes of elevated heart rate.',
      '<span class="hl hl--drug">Epinephrine</span> and <span class="hl hl--drug">calcium gluconate</span> are prehospital treatments for CCB-induced hemodynamic collapse.',
      'Extended-release formulations delay <span class="hl hl--warn">toxicity onset up to 16 hours</span> — asymptomatic patients after ingestion can deteriorate late.',
      'Abrupt discontinuation risks <span class="hl hl--ci">rebound hypertension</span> and worsening angina.'
    ],
    summary: "Nifedipine is a dihydropyridine calcium channel blocker used for hypertension and angina. Unlike diltiazem and verapamil, it acts primarily on vascular smooth muscle rather than cardiac conduction, so expect vasodilation-related findings — hypotension, flushing, peripheral edema, and reflex tachycardia — rather than bradycardia. In overdose, profound hypotension and shock are the primary threats; hyperglycemia is a useful clinical marker of poisoning severity. Nitroglycerin and other vasodilators will compound the hypotension."
  },
  {
    id: "clonidine",
    genericName: "Clonidine",
    tradeNames: ["Catapres", "Catapres-TTS", "Kapvay", "Duraclon"],
    category: ["Cardiovascular"],
    classes: ["alpha2_agonist", "antihypertensive"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "ADHD", "Opioid withdrawal", "Anxiety"],
    comorbidities: ["Chronic kidney disease", "Type 2 diabetes", "Anxiety disorders", "Substance use disorder", "ADHD"],
    polypharmacy: ["Beta blockers (metoprolol, atenolol)", "Diuretics (hydrochlorothiazide, furosemide)", "ACE Inhibitors (lisinopril, enalapril)", "Benzodiazepines (alprazolam, clonazepam)", "Stimulants (amphetamine salts, methylphenidate)"],
    overdoseToxicity: ["Bradycardia, often severe and prolonged", "Hypotension preceded by transient early hypertension", "CNS depression with somnolence and miosis", "Respiratory depression and apnea", "Hypothermia"],
    precautions: [
      'Toxidrome mimics opioid overdose — <span class="hl hl--warn">hypothermia</span> is a key differentiator (absent in opioid OD).',
      'Abrupt discontinuation causes <span class="hl hl--ci">severe rebound hypertension</span> that can progress to hypertensive encephalopathy or stroke.',
      'Concurrent <span class="hl hl--drug">beta blockers</span> amplify bradycardia and block the compensatory response to rebound hypertension if clonidine is stopped.',
      '<span class="hl hl--drug">Epinephrine</span> may paradoxically <span class="hl hl--ci">worsen hypotension</span> in clonidine toxicity.',
      '<span class="hl hl--drug">Naloxone</span> may transiently improve CNS and respiratory depression but results are inconsistent and higher doses (up to 10 mg) may be needed.'
    ],
    summary: "Clonidine is a central alpha-2 agonist that reduces sympathetic outflow, used for hypertension, ADHD, and withdrawal syndromes. Its presence signals a patient whose sympathetic tone is pharmacologically suppressed — expect baseline low-normal HR and BP with limited compensatory reserve. Overdose produces a triad of somnolence, miosis, and bradycardia that closely mimics opioid toxicity; hypothermia helps distinguish clonidine poisoning. Abrupt discontinuation is a prehospital emergency in its own right, causing dangerous rebound hypertension."
  },
  {
    id: "hydrochlorothiazide",
    genericName: "Hydrochlorothiazide",
    tradeNames: ["Microzide", "HydroDIURIL", "Oretic"],
    category: ["Cardiovascular"],
    classes: ["thiazide_diuretic", "antihypertensive"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypertension", "Peripheral edema (CHF)", "Calcium nephrolithiasis", "Nephrogenic diabetes insipidus"],
    comorbidities: ["Coronary artery disease", "Type 2 diabetes", "Chronic kidney disease", "Heart failure", "Gout"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "ARBs (losartan, valsartan)", "Beta blockers (metoprolol, atenolol)", "Statins (atorvastatin, rosuvastatin)", "Potassium supplements (potassium chloride)"],
    overdoseToxicity: ["Severe hypokalemia with cardiac dysrhythmias", "Hyponatremia with altered mental status and seizures", "Dehydration and hypotension", "Acute kidney injury"],
    precautions: [
      'Chronic <span class="hl hl--ci">hypokalemia</span> increases sensitivity to <span class="hl hl--drug">digoxin</span> — risk of lethal dysrhythmias even at therapeutic digoxin levels.',
      'Causes <span class="hl hl--ci">orthostatic hypotension</span> — a common contributor to syncopal falls in elderly patients.',
      'Reduces renal <span class="hl hl--drug">lithium</span> clearance, significantly increasing risk of <span class="hl hl--ci">lithium toxicity</span>.',
      '<span class="hl hl--warn">Hypokalemia may cause ECG changes</span> (flattened T waves, U waves, ST depression) that mimic or mask ischemia.',
      'Contains a sulfonamide group — potential for <span class="hl hl--ci">allergic cross-reactivity</span> in patients with sulfa allergy.'
    ],
    summary: "Hydrochlorothiazide is the most widely prescribed thiazide diuretic, used primarily for hypertension and edema. Its presence on a med list flags a patient at risk for electrolyte derangements — hypokalemia, hyponatremia, and hypomagnesemia — any of which can produce dysrhythmias, altered mental status, or seizures. In patients co-prescribed digoxin, even mild hypokalemia can trigger life-threatening arrhythmias. Assess for volume depletion and orthostatic hypotension, especially in elderly patients and those on multiple antihypertensives."
  },
  {
    id: "furosemide",
    genericName: "Furosemide",
    tradeNames: ["Lasix"],
    category: ["Cardiovascular"],
    classes: ["loop_diuretic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Heart failure (edema)", "Hepatic cirrhosis (ascites)", "Renal disease (edema)", "Hypertension (second-line)"],
    comorbidities: ["Congestive heart failure", "Chronic kidney disease", "Hepatic cirrhosis", "Hypertension", "Type 2 diabetes"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "Beta blockers (metoprolol, carvedilol)", "Potassium chloride", "Digoxin", "Spironolactone"],
    overdoseToxicity: ["Profound dehydration and circulatory collapse", "Severe hypokalemia with dysrhythmias", "Hypotension", "Hypochloremic metabolic alkalosis", "Altered mental status and muscle cramping"],
    precautions: [
      'Furosemide-induced <span class="hl hl--ci">hypokalemia</span> potentiates <span class="hl hl--drug">digoxin</span> toxicity — expect dysrhythmias at otherwise therapeutic digoxin levels.',
      'Chronic use causes volume depletion — patients are prone to <span class="hl hl--ci">orthostatic hypotension</span> and may be significantly dehydrated despite appearing euvolemic.',
      '<span class="hl hl--drug">Nitroglycerin</span> combined with loop diuretic-induced volume depletion increases risk of <span class="hl hl--ci">severe hypotension</span>.',
      'Contains a sulfonamide group — potential for <span class="hl hl--ci">allergic cross-reactivity</span> in patients with sulfa allergy.',
      'Electrolyte depletion (K⁺, Mg²⁺, Ca²⁺) can produce <span class="hl hl--warn">dysrhythmias, seizures, or muscle tetany</span> without obvious clinical warning.'
    ],
    summary: "Furosemide is the most commonly prescribed loop diuretic, indicating a patient with significant fluid management needs — typically heart failure, renal disease, or hepatic cirrhosis. Its presence signals a patient at risk for dehydration, electrolyte derangements, and hypotension, particularly when acutely ill or non-compliant with fluid intake. Hypokalemia is the highest-stakes concern: it widens the QT interval, potentiates digoxin toxicity, and can produce refractory dysrhythmias. Assess volume status carefully — these patients may be profoundly dry despite peripheral edema."
  },
  {
    id: "spironolactone",
    genericName: "Spironolactone",
    tradeNames: ["Aldactone", "CaroSpir"],
    category: ["Cardiovascular"],
    classes: ["potassium_sparing_diuretic", "antihypertensive"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Heart failure (HFrEF)", "Resistant hypertension", "Edema (cirrhosis/nephrotic)", "Primary hyperaldosteronism", "Hypokalemia prevention"],
    comorbidities: ["Coronary artery disease", "Chronic kidney disease", "Hepatic cirrhosis", "Type 2 diabetes", "Atrial fibrillation"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "Loop diuretics (furosemide)", "Beta blockers (metoprolol, carvedilol)", "Digoxin", "Statins (atorvastatin)"],
    overdoseToxicity: ["Hyperkalemia with dysrhythmias", "Drowsiness and mental confusion", "Hypotension", "Hyponatremia", "Nausea, vomiting, diarrhea"],
    precautions: [
      'Concurrent <span class="hl hl--drug">ACE inhibitors</span> or <span class="hl hl--drug">ARBs</span> significantly increase the risk of <span class="hl hl--ci">severe hyperkalemia</span>.',
      'Increases <span class="hl hl--drug">digoxin</span> half-life — patients on both drugs are at higher risk of <span class="hl hl--ci">digitalis toxicity</span>.',
      'Reduces renal clearance of <span class="hl hl--drug">lithium</span>, increasing the risk of <span class="hl hl--ci">lithium toxicity</span>.',
      '<span class="hl hl--warn">Hyperkalemia may present as weakness, paresthesias, or cardiac conduction abnormalities</span> without prior warning.',
      'Patients with renal impairment or diabetes are at <span class="hl hl--warn">substantially higher risk</span> of potassium-related complications.'
    ],
    summary: "Spironolactone is an aldosterone antagonist used primarily in heart failure and resistant hypertension, signaling a patient with advanced cardiovascular or hepatic disease. The defining prehospital concern is hyperkalemia — risk multiplies when combined with ACE inhibitors, ARBs, or renal impairment, and can produce life-threatening dysrhythmias without obvious warning signs. It also increases digoxin levels, so patients on both drugs carry dual risk for toxicity. Expect these patients to be on complex cardiac regimens with narrow margins for hemodynamic instability."
  },
  {
    id: "atorvastatin",
    genericName: "Atorvastatin",
    tradeNames: ["Lipitor"],
    category: ["Cardiovascular"],
    classes: ["statin"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hyperlipidemia", "ASCVD risk reduction", "Post-MI secondary prevention", "Stroke prevention", "Hypertriglyceridemia"],
    comorbidities: ["Coronary artery disease", "Type 2 diabetes", "Hypertension", "Peripheral artery disease", "Chronic kidney disease"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "Beta blockers (metoprolol, carvedilol)", "Aspirin", "Clopidogrel", "Oral hypoglycemics (metformin, glipizide)"],
    overdoseToxicity: null,
    precautions: [
      'Patients on <span class="hl hl--drug">atorvastatin</span> with <span class="hl hl--drug">diltiazem</span> are at increased risk of <span class="hl hl--ci">rhabdomyolysis</span>.',
      'High-intensity therapy increases the risk of <span class="hl hl--ci">digoxin toxicity</span> in patients taking <span class="hl hl--drug">digoxin</span>.',
      'Myopathy presenting as <span class="hl hl--warn">unexplained muscle pain, tenderness, or weakness</span> can progress to rhabdomyolysis with renal failure.',
      'High-dose atorvastatin is associated with increased incidence of <span class="hl hl--ci">hemorrhagic stroke</span> in patients with prior stroke history.',
      'Statin therapy should <span class="hl hl--warn">not be abruptly discontinued</span> perioperatively — rebound cardiovascular risk is documented.'
    ],
    summary: "Atorvastatin is the most widely prescribed statin, indicating a patient with significant cardiovascular risk — coronary artery disease, prior MI, diabetes, or stroke history. Its presence on a med list is a flag for underlying atherosclerotic disease and a complex cardiac medication regimen. The primary prehospital concern is drug interactions: it increases digoxin toxicity risk and can cause rhabdomyolysis when combined with certain calcium channel blockers. Myopathy complaints in a statin patient warrant serious consideration, as progression to rhabdomyolysis can cause acute kidney injury."
  },
  {
    id: "rosuvastatin",
    genericName: "Rosuvastatin",
    tradeNames: ["Crestor", "Ezallor"],
    category: ["Cardiovascular"],
    classes: ["statin"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hyperlipidemia", "ASCVD primary prevention", "Hypertriglyceridemia", "Familial hypercholesterolemia", "Atherosclerosis progression"],
    comorbidities: ["Coronary artery disease", "Type 2 diabetes", "Hypertension", "Chronic kidney disease", "Metabolic syndrome"],
    polypharmacy: ["ACE Inhibitors (lisinopril, enalapril)", "Beta blockers (metoprolol, carvedilol)", "Aspirin", "Anticoagulants (warfarin, apixaban)", "Oral hypoglycemics (metformin, glipizide)"],
    overdoseToxicity: null,
    precautions: [
      'Rosuvastatin carries a higher signal for <span class="hl hl--ci">rhabdomyolysis</span> than most other statins — complaints of muscle pain or weakness in these patients warrant serious consideration.',
      'Dose-dependent <span class="hl hl--ci">proteinuria and hematuria</span> occur with rosuvastatin, unique among statins.',
      'Patients on <span class="hl hl--drug">warfarin</span> with rosuvastatin may have <span class="hl hl--warn">elevated INR</span> and increased bleeding risk.',
      'Concurrent <span class="hl hl--drug">colchicine</span> increases the risk of <span class="hl hl--ci">myopathy and rhabdomyolysis</span>.',
      'Acute renal failure accelerates rosuvastatin toxicity — a previously tolerated dose becomes <span class="hl hl--warn">dangerous in dehydrated or septic patients</span>.'
    ],
    summary: "Rosuvastatin is the highest-potency statin available, signaling a patient with significant cardiovascular risk or aggressive lipid-lowering goals. Its presence on a med list points to atherosclerotic disease, diabetes, or elevated inflammatory markers. The key prehospital concern is rhabdomyolysis — rosuvastatin has a stronger association with muscle toxicity than other statins, especially in patients with renal impairment, dehydration, or sepsis. Muscle pain, dark urine, or generalized weakness in a rosuvastatin patient should raise suspicion for rhabdomyolysis with secondary acute kidney injury."
  },
  {
    id: "nitroglycerin",
    genericName: "Nitroglycerin",
    tradeNames: ["Nitrostat", "Nitrolingual", "Nitro-Dur", "Nitro-Bid"],
    category: ["Cardiovascular"],
    classes: ["vasodilator", "nitrate"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Angina pectoris", "Acute coronary syndrome", "Hypertensive heart failure", "Pulmonary edema"],
    comorbidities: ["Coronary artery disease", "Heart failure (HFrEF)", "Hypertension", "Prior myocardial infarction", "Peripheral vascular disease"],
    polypharmacy: ["Beta blockers (metoprolol, atenolol)", "Aspirin", "Statins (atorvastatin, rosuvastatin)", "ACE Inhibitors (lisinopril, enalapril)", "Clopidogrel"],
    overdoseToxicity: ["Profound hypotension with syncope", "Reflex tachycardia progressing to bradycardia", "Persistent throbbing headache with confusion", "Methemoglobinemia (cyanosis despite normal PaO2)", "Seizures and cardiovascular collapse"],
    precautions: [
      'Concurrent <span class="hl hl--drug">PDE-5 inhibitor</span> use (sildenafil, tadalafil) causes <span class="hl hl--ci">severe refractory hypotension</span> — always ask about erectile dysfunction medications.',
      'In <span class="hl hl--warn">inferior MI with RV involvement</span>, nitroglycerin can cause hemodynamic collapse by reducing preload.',
      'Patients on chronic nitrates develop tolerance — lack of chest pain relief does not rule out <span class="hl hl--ci">acute coronary syndrome</span>.',
      'Nitroglycerin patches or ointment on the skin can cause <span class="hl hl--warn">inadvertent provider exposure</span> — remove and wipe the site before handling.',
      '<span class="hl hl--drug">Epinephrine</span> is not recommended for nitrate-induced hypotension — IV fluid bolus and Trendelenburg positioning are first-line.'
    ],
    summary: "Nitroglycerin on a med list identifies a patient with active coronary artery disease or heart failure who experiences anginal episodes. The critical prehospital concern is the PDE-5 inhibitor interaction — always ask about sildenafil/tadalafil use before administering additional nitrates, as the combination causes profound hypotension that does not respond well to vasopressors. In chest pain patients, assess for inferior MI and right ventricular involvement before giving NTG, since preload reduction in an RV-dependent patient can precipitate cardiogenic shock."
  },
  {
    id: "digoxin",
    genericName: "Digoxin",
    tradeNames: ["Lanoxin"],
    category: ["Cardiovascular"],
    classes: ["cardiac_glycoside"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Heart failure (HFrEF)", "Atrial fibrillation (rate control)"],
    comorbidities: ["Coronary artery disease", "Atrial fibrillation", "Chronic kidney disease", "Valvular heart disease", "Type 2 diabetes"],
    polypharmacy: ["Beta blockers (metoprolol, carvedilol)", "ACE Inhibitors (lisinopril, enalapril)", "Loop diuretics (furosemide)", "Warfarin", "Potassium supplements (potassium chloride)"],
    overdoseToxicity: [
      "Bradycardia and high-degree AV block, including complete heart block",
      "Ventricular dysrhythmias, including bidirectional VT (pathognomonic)",
      "Hyperkalemia — severity correlates with mortality",
      "GI distress: nausea, vomiting, anorexia",
      "Visual disturbances: xanthopsia (yellow-tinted vision), halos, blurred vision"
    ],
    precautions: [
      'Extremely <span class="hl hl--warn">narrow therapeutic index</span> — toxicity can occur at levels near the therapeutic range, especially with renal impairment or hypokalemia.',
      '<span class="hl hl--ci">Hyperkalemia</span> in acute digoxin toxicity is a critical prognostic marker — K+ above 5.5 mEq/L carries near-100% mortality without antidotal therapy.',
      '<span class="hl hl--drug">Amiodarone</span>, <span class="hl hl--drug">diltiazem</span>, and <span class="hl hl--drug">verapamil</span> all raise digoxin levels and compound AV nodal blockade.',
      'Concurrent <span class="hl hl--drug">furosemide</span> use causes hypokalemia, which increases myocardial sensitivity to digoxin and can precipitate <span class="hl hl--ci">toxicity at therapeutic levels</span>.',
      'Any dysrhythmia combining <span class="hl hl--ci">increased automaticity with AV block</span> (e.g., atrial tachycardia with block, regularized AF) should raise suspicion for digoxin toxicity.'
    ],
    summary: "Digoxin is a cardiac glycoside prescribed for heart failure and atrial fibrillation rate control, signaling a patient with significant structural heart disease. Its narrow therapeutic index makes toxicity a constant risk — declining renal function, dehydration, electrolyte shifts, or drug interactions can push levels into the toxic range without a dose change. On scene, suspect digoxin toxicity in any patient on digoxin presenting with new dysrhythmias (especially bradycardia with ectopy), GI symptoms, or altered mental status. Hyperkalemia in the setting of digoxin use is an ominous sign requiring emergent intervention."
  },
  {
    id: "amiodarone",
    genericName: "Amiodarone",
    tradeNames: ["Cordarone", "Pacerone"],
    category: ["Cardiovascular"],
    classes: ["antiarrhythmic", "sodium_channel_blocker", "potassium_channel_blocker", "beta_blocker", "calcium_channel_blocker"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Ventricular fibrillation (refractory)", "Ventricular tachycardia (recurrent)", "Atrial fibrillation (off-label)"],
    comorbidities: ["Coronary artery disease", "Heart failure (HFrEF)", "Prior cardiac arrest", "Atrial fibrillation", "Cardiomyopathy"],
    polypharmacy: ["Warfarin", "Digoxin", "Beta blockers (metoprolol, carvedilol)", "ACE Inhibitors (lisinopril, enalapril)", "Loop diuretics (furosemide)"],
    overdoseToxicity: ["Hypotension, often refractory", "Severe bradycardia and high-degree AV block", "Torsades de pointes", "Delayed toxicity onset (up to 2–3 days post-ingestion)"],
    precautions: [
      'Inhibits CYP450 metabolism — doubles <span class="hl hl--drug">digoxin</span> levels and potentiates <span class="hl hl--drug">warfarin</span> (elevated INR and bleeding risk).',
      'Concurrent use with <span class="hl hl--drug">beta blockers</span> or <span class="hl hl--drug">diltiazem</span> increases risk of <span class="hl hl--ci">severe bradycardia and AV block</span>.',
      'Chronic use causes <span class="hl hl--ci">QT prolongation</span> — additive risk with other QT-prolonging agents including IV <span class="hl hl--drug">amiodarone</span> administered prehospitally.',
      'Pulmonary toxicity may present as <span class="hl hl--ci">progressive dyspnea</span> mimicking CHF or pneumonia — high-flow O₂ may worsen lung injury.',
      'Blue-gray skin discoloration is a visual clue to <span class="hl hl--warn">chronic amiodarone use</span> — confirms the drug even without a med list.'
    ],
    summary: "Amiodarone is a class III antiarrhythmic reserved for serious ventricular and atrial dysrhythmias, signaling a patient with significant cardiac disease and arrhythmia history. Its extremely long half-life (40–55 days) means drug effects and interactions persist weeks after discontinuation. On scene, the key concerns are additive bradycardia and hypotension with other cardiac drugs, markedly elevated bleeding risk from warfarin potentiation, and the possibility that respiratory distress represents amiodarone pulmonary toxicity rather than heart failure."
  },
  {
    id: "aspirin",
    genericName: "Aspirin",
    tradeNames: ["Bayer", "Ecotrin"],
    category: ["Anticoagulation", "Cardiovascular", "Pain & Anti-inflammatory"],
    classes: ["antiplatelet", "nsaid", "analgesic", "antipyretic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Secondary prevention of MI/stroke", "Acute coronary syndrome", "Chronic stable angina", "Peripheral arterial disease", "Mild to moderate pain"],
    comorbidities: ["Coronary artery disease", "Prior MI or stroke", "Atrial fibrillation", "Peripheral arterial disease", "Type 2 diabetes"],
    polypharmacy: ["Statins (atorvastatin, rosuvastatin)", "Beta blockers (metoprolol, carvedilol)", "ACE Inhibitors (lisinopril, enalapril)", "Clopidogrel", "Anticoagulants (warfarin, apixaban)"],
    overdoseToxicity: ["Tinnitus and hyperventilation (early)", "Mixed respiratory alkalosis and metabolic acidosis", "Altered mental status progressing to seizures and coma", "Hyperthermia", "Noncardiogenic pulmonary edema"],
    precautions: [
      'Irreversibly inhibits platelets — <span class="hl hl--ci">bleeding risk persists 7–10 days</span> after last dose.',
      'Concurrent <span class="hl hl--drug">anticoagulants</span> (warfarin, DOACs) or <span class="hl hl--drug">clopidogrel</span> markedly increases <span class="hl hl--ci">hemorrhage risk</span>.',
      'Approximately 7% of asthma patients have aspirin sensitivity — can trigger <span class="hl hl--ci">bronchospasm</span>.',
      'Salicylate toxicity presents with tinnitus, tachypnea, and <span class="hl hl--warn">altered mental status</span> — easily mistaken for sepsis or metabolic emergency.',
      'Prehospital <span class="hl hl--drug">aspirin</span> administration for ACS adds to existing daily dose — confirm whether patient has already taken it today.'
    ],
    summary: "Low-dose aspirin on a med list signals a patient with established cardiovascular disease — prior MI, stroke, stent placement, or significant atherosclerotic risk. Its irreversible antiplatelet effect means any trauma or bleeding emergency carries prolonged hemorrhage risk, especially when combined with other anticoagulants or antiplatelets. Salicylate overdose is a distinct toxicological emergency presenting with tinnitus, tachypnea, and progressive metabolic derangement that can deteriorate rapidly."
  },
  {
    id: "clopidogrel",
    genericName: "Clopidogrel",
    tradeNames: ["Plavix"],
    category: ["Anticoagulation", "Cardiovascular"],
    classes: ["antiplatelet"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Acute coronary syndrome (UA/NSTEMI)", "Secondary prevention post-MI", "Secondary prevention post-stroke", "Peripheral arterial disease", "Post-PCI stent thrombosis prevention"],
    comorbidities: ["Coronary artery disease", "Prior MI or stroke", "Peripheral arterial disease", "Atrial fibrillation", "Type 2 diabetes"],
    polypharmacy: ["Aspirin", "Statins (atorvastatin, rosuvastatin)", "Beta blockers (metoprolol, carvedilol)", "ACE Inhibitors (lisinopril, enalapril)", "Proton pump inhibitors (omeprazole, pantoprazole)"],
    overdoseToxicity: null,
    precautions: [
      'Irreversibly inhibits platelets for 7–10 days — <span class="hl hl--ci">no reversal agent exists</span>; platelet transfusion has limited effectiveness.',
      'Concurrent <span class="hl hl--drug">aspirin</span>, anticoagulants, or NSAIDs markedly increases <span class="hl hl--ci">hemorrhage risk</span>.',
      '<span class="hl hl--drug">Opioids</span> (morphine, fentanyl) delay clopidogrel absorption and reduce antiplatelet effect in acute ACS.',
      '<span class="hl hl--warn">Omeprazole and esomeprazole</span> inhibit CYP2C19 activation, reducing clopidogrel efficacy — relevant when reviewing the full med list.',
      'Premature discontinuation after coronary stenting risks <span class="hl hl--ci">acute stent thrombosis</span> — a STEMI equivalent.'
    ],
    summary: "Clopidogrel on a med list indicates a patient with established atherosclerotic disease — prior MI, stroke, PAD, or coronary stent placement. Its irreversible antiplatelet effect means all bleeding is prolonged, and there is no pharmacologic reversal. In acute ACS, prehospital opioid administration can impair clopidogrel absorption, reducing its therapeutic effect. Patients on dual antiplatelet therapy (clopidogrel plus aspirin) carry significantly elevated hemorrhage risk with any trauma."
  },
  {
    id: "warfarin",
    genericName: "Warfarin",
    tradeNames: ["Coumadin", "Jantoven"],
    category: ["Anticoagulation"],
    classes: ["anticoagulant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Atrial fibrillation", "Venous thromboembolism", "Mechanical heart valve", "Post-MI thromboprophylaxis", "Pulmonary embolism"],
    comorbidities: ["Atrial fibrillation", "Deep vein thrombosis", "Heart failure", "Coronary artery disease", "Cerebrovascular disease"],
    polypharmacy: ["Beta blockers (metoprolol, carvedilol)", "ACE Inhibitors (lisinopril, enalapril)", "Statins (atorvastatin, rosuvastatin)", "Digoxin", "Aspirin"],
    overdoseToxicity: ["Hemorrhage from any tissue or organ", "Intracranial hemorrhage", "GI bleeding (hematemesis, melena)", "Prolonged or spontaneous epistaxis", "Hematuria"],
    precautions: [
      'Any trauma in a warfarin patient risks <span class="hl hl--ci">uncontrolled hemorrhage</span> — minor mechanisms can produce major bleeding.',
      'Head trauma warrants high suspicion for <span class="hl hl--ci">intracranial hemorrhage</span> even without focal neurological deficits.',
      'Concurrent <span class="hl hl--drug">aspirin</span> or NSAIDs dramatically increases bleeding risk beyond anticoagulation alone.',
      '<span class="hl hl--warn">No prehospital reversal agent exists</span> — hemorrhage control is limited to direct pressure and rapid transport.',
      '<span class="hl hl--drug">Amiodarone</span> inhibits warfarin metabolism, significantly potentiating its anticoagulant effect.'
    ],
    summary: "Warfarin on a med list flags a patient who cannot clot normally. Any bleeding — traumatic or spontaneous — is prolonged and potentially life-threatening, with intracranial hemorrhage being the highest-stakes concern after head trauma. There is no prehospital reversal; definitive management requires vitamin K and prothrombin complex concentrate in-hospital. Assume an exaggerated bleeding response to all injuries, and maintain a low threshold for rapid transport to a facility capable of INR testing and reversal."
  },
  {
    id: "apixaban",
    genericName: "Apixaban",
    tradeNames: ["Eliquis"],
    category: ["Anticoagulation"],
    classes: ["anticoagulant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Nonvalvular atrial fibrillation (stroke prevention)", "Deep vein thrombosis", "Pulmonary embolism", "DVT/PE prophylaxis (post-surgical)"],
    comorbidities: ["Atrial fibrillation", "Heart failure", "Venous thromboembolism", "Chronic kidney disease", "Prior stroke or TIA"],
    polypharmacy: ["Beta blockers (metoprolol, carvedilol)", "ACE Inhibitors (lisinopril, enalapril)", "Statins (atorvastatin, rosuvastatin)", "Digoxin", "Amiodarone"],
    overdoseToxicity: ["Hemorrhage from any site", "GI bleeding (hematemesis, melena, hematochezia)", "Intracranial hemorrhage", "Hemorrhagic shock in severe cases"],
    precautions: [
      'No reliable prehospital reversal — <span class="hl hl--ci">bleeding may be prolonged and refractory</span> to standard measures.',
      'Concurrent <span class="hl hl--drug">aspirin</span> or NSAIDs significantly increases <span class="hl hl--ci">hemorrhage risk</span>, including fatal GI and intracranial bleeding.',
      'Standard coagulation tests (PT/INR, aPTT) do not reliably reflect <span class="hl hl--warn">apixaban anticoagulant effect</span>.',
      'Abrupt discontinuation raises <span class="hl hl--ci">stroke and thromboembolism risk</span> — noncompliance may be the reason for the call.',
      'Unlike warfarin, there is <span class="hl hl--warn">no routine lab monitoring</span> — the patient may not know their anticoagulation status.'
    ],
    summary: "Apixaban is a factor Xa inhibitor prescribed for stroke prevention in atrial fibrillation and treatment of venous thromboembolism. Its presence signals a patient at high thrombotic risk who is simultaneously at increased bleeding risk from any trauma or spontaneous hemorrhage. Standard coagulation labs are unreliable for gauging its effect, and no prehospital reversal exists — hospital-based andexanet alfa is the specific antidote. Treat any bleeding in these patients as potentially significant and transport with urgency."
  },
  {
    id: "rivaroxaban",
    genericName: "Rivaroxaban",
    tradeNames: ["Xarelto"],
    category: ["Anticoagulation", "Cardiovascular"],
    classes: ["anticoagulant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Nonvalvular atrial fibrillation", "Deep vein thrombosis", "Pulmonary embolism", "Coronary artery disease", "Peripheral artery disease"],
    comorbidities: ["Atrial fibrillation", "Heart failure", "Venous thromboembolism", "Coronary artery disease", "Peripheral artery disease"],
    polypharmacy: ["Aspirin", "Beta blockers (metoprolol, carvedilol)", "Statins (atorvastatin, rosuvastatin)", "ACE Inhibitors (lisinopril, enalapril)", "Loop diuretics (furosemide)"],
    overdoseToxicity: [
      "Hemorrhage — GI bleeding is more common than with warfarin",
      "Intracranial hemorrhage",
      "Hemodynamic instability from occult blood loss",
      "Supratherapeutic doses above 50 mg show a ceiling effect with limited additional absorption"
    ],
    precautions: [
      'Causes <span class="hl hl--ci">serious or fatal hemorrhage</span> — any trauma or bleeding complaint in these patients warrants high suspicion.',
      'Standard coagulation labs (PT/INR, aPTT) are <span class="hl hl--warn">unreliable</span> for assessing rivaroxaban effect in the field.',
      'No prehospital reversal agent exists — hospital-based <span class="hl hl--drug">andexanet alfa</span> or PCC is required for life-threatening bleeds.',
      '<span class="hl hl--drug">Aspirin</span> co-administration is common in CAD/PAD patients, compounding <span class="hl hl--ci">bleeding risk</span>.',
      'Protamine sulfate and <span class="hl hl--drug">vitamin K</span> have no effect on rivaroxaban — do not use for reversal.'
    ],
    summary: "Rivaroxaban is a factor Xa inhibitor used for stroke prevention in atrial fibrillation, treatment of DVT/PE, and cardiovascular risk reduction in CAD and PAD. Its presence flags a patient on full anticoagulation who is at elevated bleeding risk from any mechanism — trauma, GI hemorrhage, or intracranial bleeding. Routine coagulation testing does not reliably reflect drug levels, and there is no field reversal option. Patients on concurrent aspirin therapy carry compounded hemorrhage risk."
  },
  {
    id: "potassium-chloride",
    genericName: "Potassium Chloride",
    tradeNames: ["K-Dur", "Klor-Con", "Micro-K", "Slow-K"],
    category: ["Cardiovascular"],
    classes: ["electrolyte"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypokalemia", "Diuretic-induced potassium loss", "Digitalis toxicity (adjunct)"],
    comorbidities: ["Heart failure", "Hypertension", "Chronic kidney disease", "Atrial fibrillation", "Type 2 diabetes"],
    polypharmacy: ["Loop diuretics (furosemide, bumetanide)", "Thiazide diuretics (hydrochlorothiazide)", "ACE Inhibitors (lisinopril, enalapril)", "Digoxin", "Magnesium supplements"],
    overdoseToxicity: [
      "Peaked T waves progressing to loss of P waves and QRS widening",
      "Severe bradycardia and high-degree AV block",
      "Ventricular fibrillation or asystole (K⁺ >9 mEq/L)",
      "Flaccid paralysis and muscle weakness",
      "Nausea, vomiting, and abdominal pain"
    ],
    precautions: [
      'Concurrent use of <span class="hl hl--drug">ACE inhibitors</span>, ARBs, or potassium-sparing diuretics raises risk of <span class="hl hl--ci">fatal hyperkalemia</span>.',
      'Patients with <span class="hl hl--warn">renal impairment</span> cannot excrete excess potassium — even therapeutic doses can cause toxicity.',
      'Hyperkalemia-induced ECG changes may mimic acute MI — <span class="hl hl--warn">peaked T waves</span> can be mistaken for STEMI.',
      '<span class="hl hl--drug">Calcium chloride</span> or calcium gluconate stabilizes the myocardium but does not lower potassium levels.',
      'Patients on <span class="hl hl--drug">digoxin</span> and potassium have a dangerous interdependence — both hypo- and hyperkalemia worsen <span class="hl hl--ci">digoxin toxicity</span>.'
    ],
    summary: "Potassium chloride is an electrolyte supplement prescribed to patients on diuretics or with conditions that deplete potassium. Its presence on a med list signals a patient at risk for both hypokalemia (missed doses, vomiting) and hyperkalemia (renal decline, drug interactions with ACE inhibitors or potassium-sparing diuretics). Hyperkalemia produces characteristic ECG changes — peaked T waves, widened QRS, and eventually fatal dysrhythmias — that a paramedic must recognize. The 12-lead is the most important prehospital tool for detecting potassium-related cardiac toxicity."
  },
  {
    id: "metformin",
    genericName: "Metformin",
    tradeNames: ["Glucophage", "Glucophage XR", "Fortamet", "Glumetza", "Riomet"],
    category: ["Endocrine"],
    classes: ["biguanide"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Type 2 diabetes mellitus"],
    comorbidities: ["Obesity", "Hypertension", "Coronary artery disease", "Chronic kidney disease", "Dyslipidemia"],
    polypharmacy: ["Sulfonylureas (glipizide, glimepiride)", "Insulin (glargine, lispro)", "Statins (atorvastatin, rosuvastatin)", "ACE Inhibitors (lisinopril, enalapril)", "Aspirin"],
    overdoseToxicity: ["Severe lactic acidosis (pH < 7.35, lactate > 5 mmol/L)", "Tachypnea and hyperpnea from metabolic compensation", "Hypotension progressing to refractory shock", "Altered mental status progressing to coma", "Hypothermia in severe acidemia"],
    precautions: [
      'Metformin alone rarely causes <span class="hl hl--warn">hypoglycemia</span> — if hypoglycemic, suspect a co-ingested sulfonylurea or insulin.',
      '<span class="hl hl--ci">Lactic acidosis</span> (MALA) is rare but carries up to 50% mortality; renal failure, sepsis, and shock increase risk.',
      'Severe acidemia impairs myocardial contractility and <span class="hl hl--ci">catecholamine binding</span> — vasopressors may have reduced efficacy.',
      'Kussmaul respirations in a diabetic patient may indicate MALA rather than <span class="hl hl--warn">DKA</span> — check the med list.',
      'Combined formulations may contain <span class="hl hl--drug">sulfonylureas</span> — intentional overdose of combination pills adds true hypoglycemia risk.'
    ],
    summary: "Metformin is the most widely prescribed oral antihyperglycemic and signals a patient with type 2 diabetes and likely cardiovascular comorbidities. It does not cause hypoglycemia on its own, so low glucose in a metformin-only patient points to another cause. The critical prehospital concern is metformin-associated lactic acidosis (MALA) — rare but lethal, presenting with vague GI symptoms, tachypnea, and shock that may be refractory to standard vasopressor therapy. Always check whether the formulation includes a sulfonylurea, which adds hypoglycemia risk in overdose."
  },
  {
    id: "insulin-glargine",
    genericName: "Insulin Glargine",
    tradeNames: ["Lantus", "Basaglar", "Semglee", "Toujeo"],
    category: ["Endocrine"],
    classes: ["insulin"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Type 1 diabetes mellitus", "Type 2 diabetes mellitus"],
    comorbidities: ["Coronary artery disease", "Chronic kidney disease", "Peripheral neuropathy", "Hypertension", "Obesity"],
    polypharmacy: ["Metformin", "Sulfonylureas (glipizide, glimepiride)", "ACE Inhibitors (lisinopril, enalapril)", "Statins (atorvastatin, rosuvastatin)", "Aspirin"],
    overdoseToxicity: ["Severe prolonged hypoglycemia lasting 24–96+ hours", "Seizures", "Coma and neurologic impairment", "Hypokalemia", "Recurrent hypoglycemic episodes despite dextrose administration"],
    precautions: [
      'Long-acting depot effect causes <span class="hl hl--ci">prolonged hypoglycemia</span> — glucose may drop again hours after initial correction.',
      'Concurrent <span class="hl hl--drug">beta blockers</span> and <span class="hl hl--drug">clonidine</span> mask adrenergic symptoms of hypoglycemia — patient may not appear symptomatic until severely low.',
      '<span class="hl hl--drug">Epinephrine</span> and other sympathomimetics raise blood glucose — prehospital catecholamine administration may temporarily mask ongoing insulin effect.',
      'Renal or hepatic impairment <span class="hl hl--warn">slows insulin clearance</span>, increasing duration and severity of hypoglycemia.',
      'Patients on <span class="hl hl--drug">sulfonylureas</span> in addition to glargine have compounded hypoglycemia risk — two independent glucose-lowering mechanisms.'
    ],
    summary: "Insulin glargine is a long-acting basal insulin that signals insulin-dependent diabetes with significant metabolic disease burden. The primary prehospital threat is hypoglycemia — and because glargine forms a subcutaneous depot, hypoglycemia can recur for 24–96 hours after overdose, well beyond a single dextrose bolus. A patient on glargine who is found hypoglycemic should not be treated and released; the long-acting depot means recurrence is likely. Beta blockers and clonidine — frequently co-prescribed in this population — mask the classic adrenergic warning signs, so hypoglycemia may present as altered mental status without tachycardia or diaphoresis."
  },
  {
    id: "glipizide",
    genericName: "Glipizide",
    tradeNames: ["Glucotrol", "Glucotrol XL"],
    category: ["Endocrine"],
    classes: ["sulfonylurea"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Type 2 diabetes mellitus"],
    comorbidities: ["Obesity", "Hypertension", "Dyslipidemia", "Coronary artery disease", "Chronic kidney disease"],
    polypharmacy: ["Metformin", "Statins (atorvastatin, rosuvastatin)", "ACE Inhibitors (lisinopril, enalapril)", "Insulin (glargine, lispro)", "Aspirin"],
    overdoseToxicity: [
      "Profound, prolonged hypoglycemia — may recur for 24–48 hours",
      "Seizures",
      "Coma and neurological impairment",
      "Rebound hypoglycemia after dextrose administration due to stimulated insulin release"
    ],
    precautions: [
      'Sulfonylurea-induced <span class="hl hl--ci">hypoglycemia</span> is prolonged — a single <span class="hl hl--drug">dextrose</span> bolus may trigger rebound hypoglycemia from further insulin release.',
      '<span class="hl hl--drug">Beta blockers</span> mask adrenergic warning signs of hypoglycemia — tachycardia and tremor may be absent despite critically low glucose.',
      '<span class="hl hl--drug">Epinephrine</span> and other sympathomimetics antagonize glipizide by raising blood glucose, potentially causing <span class="hl hl--warn">loss of glycemic control</span>.',
      'Elderly patients and those with <span class="hl hl--warn">renal or hepatic impairment</span> have prolonged drug clearance and increased hypoglycemia risk.',
      'Patients on sulfonylureas who are treated and released in the field are at risk for <span class="hl hl--ci">recurrent hypoglycemia</span> — transport is strongly indicated.'
    ],
    summary: "Glipizide is a second-generation sulfonylurea that stimulates pancreatic insulin release independent of blood glucose levels. Its presence on a med list flags a type 2 diabetic at risk for hypoglycemia, especially if the patient has missed meals, is acutely ill, or has renal impairment. The key prehospital concern is that sulfonylurea-induced hypoglycemia recurs after dextrose correction because the drug continues to drive insulin secretion — these patients should not be treated and released. Beta blockers, frequently co-prescribed in this population, mask the classic adrenergic warning signs of low glucose."
  },
  {
    id: "glimepiride",
    genericName: "Glimepiride",
    tradeNames: ["Amaryl"],
    category: ["Endocrine"],
    classes: ["sulfonylurea"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Type 2 diabetes mellitus"],
    comorbidities: ["Hypertension", "Coronary artery disease", "Chronic kidney disease", "Obesity", "Peripheral neuropathy"],
    polypharmacy: ["Metformin", "Insulin (glargine, lispro)", "ACE Inhibitors (lisinopril, enalapril)", "Statins (atorvastatin, rosuvastatin)", "Aspirin"],
    overdoseToxicity: [
      "Profound, prolonged hypoglycemia lasting hours to days",
      "Seizures and coma from neuroglycopenia",
      "Tachycardia, diaphoresis, tremor (autonomic response)",
      "Recurrent hypoglycemia after initial dextrose correction",
      "Hypoglycemic unawareness in long-standing diabetics"
    ],
    precautions: [
      'Sulfonylurea-induced <span class="hl hl--ci">hypoglycemia recurs after dextrose</span> because the drug continues to stimulate insulin secretion for hours.',
      '<span class="hl hl--drug">Glucagon</span> can paradoxically worsen hypoglycemia by triggering further <span class="hl hl--ci">insulin release</span> from sulfonylurea-primed beta cells.',
      'Co-prescribed <span class="hl hl--drug">beta blockers</span> mask adrenergic symptoms of hypoglycemia — patient may present with <span class="hl hl--warn">altered mental status as the first sign</span>.',
      '<span class="hl hl--warn">Renal impairment</span> prolongs drug clearance and increases hypoglycemia risk at therapeutic doses.',
      'A single tablet ingestion in a non-diabetic (especially a child) can cause <span class="hl hl--ci">life-threatening hypoglycemia</span>.'
    ],
    summary: "Glimepiride is a second-generation sulfonylurea that stimulates insulin release from pancreatic beta cells regardless of blood glucose levels. Finding it on a med list identifies a type 2 diabetic at significant risk for hypoglycemia, particularly with missed meals, acute illness, or declining renal function. The critical prehospital concern is that sulfonylurea-induced hypoglycemia is prolonged and recurrent — dextrose provides only temporary correction while the drug continues driving insulin secretion, making transport mandatory. Unlike other sulfonylureas, glimepiride has fewer direct cardiac effects, but the co-prescribed medications in this population (beta blockers, insulin) compound the hypoglycemia risk."
  },
  {
    id: "semaglutide",
    genericName: "Semaglutide",
    tradeNames: ["Ozempic", "Wegovy", "Rybelsus"],
    category: ["Endocrine", "Cardiovascular"],
    classes: ["glp1_agonist"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Type 2 diabetes", "Obesity (chronic weight management)", "Cardiovascular risk reduction (T2DM)"],
    comorbidities: ["Obesity", "Coronary artery disease", "Hypertension", "Dyslipidemia", "Obstructive sleep apnea"],
    polypharmacy: ["Metformin", "Statins (atorvastatin, rosuvastatin)", "ACE Inhibitors (lisinopril, enalapril)", "Insulin (glargine, lispro)", "Sulfonylureas (glipizide, glimepiride)"],
    overdoseToxicity: ["Severe, persistent nausea and vomiting", "Dehydration with orthostatic hypotension", "Hypoglycemia (primarily when co-prescribed insulin or sulfonylureas)", "Acute pancreatitis", "Acute kidney injury secondary to volume depletion"],
    precautions: [
      'Delays <span class="hl hl--warn">gastric emptying</span> — increases aspiration risk during airway management or sedation.',
      '<span class="hl hl--ci">Hypoglycemia</span> risk escalates sharply when combined with <span class="hl hl--drug">insulin</span> or sulfonylureas.',
      'Persistent vomiting from overdose or dose escalation can cause <span class="hl hl--ci">severe dehydration</span> and acute kidney injury.',
      'One-week half-life means overdose symptoms <span class="hl hl--warn">persist for days</span> — no antidote exists.',
      'Severe epigastric pain radiating to the back may indicate <span class="hl hl--ci">acute pancreatitis</span>.'
    ],
    summary: "Semaglutide is a GLP-1 receptor agonist prescribed for type 2 diabetes and weight management, now among the most commonly encountered home medications. Its primary prehospital relevance is delayed gastric emptying, which creates aspiration risk during airway management, and the potential for hypoglycemia when co-prescribed with insulin or sulfonylureas. Overdose — increasingly seen with compounded and counterfeit products — presents as protracted GI symptoms, dehydration, and hypoglycemia, complicated by the drug's one-week half-life. Assess fluid status, blood glucose, and watch for pancreatitis in any symptomatic patient on this drug."
  },
  {
    id: "empagliflozin",
    genericName: "Empagliflozin",
    tradeNames: ["Jardiance"],
    category: ["Endocrine", "Cardiovascular"],
    classes: ["sglt2_inhibitor"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Type 2 diabetes", "Heart failure", "Chronic kidney disease", "CV death risk reduction"],
    comorbidities: ["Coronary artery disease", "Heart failure", "Chronic kidney disease", "Hypertension", "Obesity"],
    polypharmacy: ["Metformin", "ACE Inhibitors (lisinopril, ramipril)", "Loop diuretics (furosemide)", "Statins (atorvastatin, rosuvastatin)", "Insulin (glargine, lispro)"],
    overdoseToxicity: [
      "Euglycemic diabetic ketoacidosis (normal glucose with high anion gap acidosis)",
      "Severe dehydration and hypovolemia",
      "Hypotension and syncope",
      "Acute kidney injury"
    ],
    precautions: [
      'Can cause <span class="hl hl--ci">euglycemic DKA</span> — ketoacidosis with a normal blood glucose, easily missed on standard BGL check.',
      'Osmotic diuresis causes <span class="hl hl--ci">volume depletion</span> and hypotension, compounded by concurrent diuretics or ACE inhibitors.',
      'Ketoacidosis risk persists up to <span class="hl hl--warn">14 days after discontinuation</span> due to prolonged pharmacologic effects.',
      '<span class="hl hl--drug">Dextrose</span> administration in euglycemic DKA requires concurrent insulin — glucose alone does not correct the acidosis.',
      'Hypoglycemia risk increases when co-prescribed with <span class="hl hl--drug">insulin</span> or <span class="hl hl--drug">sulfonylureas</span>.'
    ],
    summary: "Empagliflozin is an SGLT2 inhibitor prescribed for type 2 diabetes, heart failure, and chronic kidney disease. Its presence on a med list signals a patient with significant cardiovascular or renal comorbidity. The critical prehospital concern is euglycemic DKA — ketoacidosis presenting with a normal blood glucose — which will be missed if the medic relies on BGL alone to rule out diabetic emergency. Assess for Kussmaul respirations, fruity breath, nausea, and abdominal pain in any acutely ill patient on this drug, regardless of glucose reading."
  },
  {
    id: "dapagliflozin",
    genericName: "Dapagliflozin",
    tradeNames: ["Farxiga", "Forxiga"],
    category: ["Endocrine", "Cardiovascular"],
    classes: ["sglt2_inhibitor"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Type 2 diabetes", "Heart failure", "Chronic kidney disease", "CV death risk reduction"],
    comorbidities: ["Coronary artery disease", "Heart failure", "Chronic kidney disease", "Hypertension", "Obesity"],
    polypharmacy: ["Metformin", "ACE Inhibitors (lisinopril, enalapril)", "Loop diuretics (furosemide)", "Statins (atorvastatin, rosuvastatin)", "Insulin (glargine, lispro)"],
    overdoseToxicity: [
      "Euglycemic diabetic ketoacidosis (normal glucose with high anion gap acidosis)",
      "Severe dehydration from osmotic diuresis",
      "Hypotension and orthostatic syncope",
      "Acute kidney injury"
    ],
    precautions: [
      'Can cause <span class="hl hl--ci">euglycemic DKA</span> — ketoacidosis with a normal blood glucose, easily missed on standard BGL check.',
      'Osmotic diuresis causes <span class="hl hl--ci">volume depletion</span> and hypotension, especially with concurrent diuretics or ACE inhibitors.',
      '<span class="hl hl--drug">Dextrose</span> administration in euglycemic DKA requires concurrent insulin — glucose alone does not correct the acidosis.',
      'Hypoglycemia risk increases significantly when co-prescribed with <span class="hl hl--drug">insulin</span> or <span class="hl hl--drug">sulfonylureas</span>.',
      'Fournier gangrene (necrotizing perineal fasciitis) is a rare but <span class="hl hl--warn">life-threatening complication</span> — assess for perineal pain, erythema, or crepitus.'
    ],
    summary: "Dapagliflozin is an SGLT2 inhibitor prescribed for type 2 diabetes, heart failure, and chronic kidney disease. Its presence on a med list indicates a patient with significant cardiovascular or renal comorbidity. The primary prehospital concern is euglycemic DKA — ketoacidosis with a normal blood glucose — which will be missed if the medic relies on BGL alone. Assess for Kussmaul respirations, fruity breath, nausea, and abdominal pain in any acutely ill patient on this drug, regardless of glucose reading."
  },
  {
    id: "albuterol",
    genericName: "Albuterol",
    tradeNames: ["ProAir HFA", "Ventolin HFA", "AccuNeb", "Proventil HFA"],
    category: ["Pulmonary"],
    classes: ["beta2_agonist", "bronchodilator", "sympathomimetic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Asthma", "COPD", "Exercise-induced bronchospasm", "Acute bronchospasm"],
    comorbidities: ["Allergic rhinitis", "GERD", "Obesity", "Atopic dermatitis", "Obstructive sleep apnea"],
    polypharmacy: ["Inhaled corticosteroids (fluticasone, budesonide)", "Ipratropium", "Montelukast", "Prednisone", "Fluticasone-salmeterol"],
    overdoseToxicity: ["Tachycardia and cardiac arrhythmias", "Hypokalemia (transcellular shift)", "Hyperglycemia", "Tremors and agitation", "Lactic acidosis"],
    precautions: [
      'Excessive use causes <span class="hl hl--ci">hypokalemia</span> — may potentiate arrhythmias, especially in patients on digoxin.',
      '<span class="hl hl--drug">Beta blockers</span> (especially non-selective) antagonize albuterol and can trigger severe <span class="hl hl--ci">bronchospasm</span> in asthma patients.',
      'Patients on <span class="hl hl--drug">MAOIs or TCAs</span> may have exaggerated cardiovascular effects from beta-2 stimulation.',
      'Paradoxical <span class="hl hl--warn">bronchospasm</span> can occur — worsening dyspnea after nebulization is not always a sign to give more albuterol.',
      'Hyperventilation during toxicity is a compensatory response to <span class="hl hl--ci">metabolic acidosis</span>, not worsening bronchospasm.'
    ],
    summary: "Albuterol is a short-acting beta-2 agonist found on the med list of nearly every asthma and COPD patient. Its presence confirms reactive airway disease and sets expectations for the call — wheezing, dyspnea, and possible respiratory failure. The key prehospital concern with overuse is hypokalemia and tachyarrhythmias, not just bronchospasm. In a patient who has been self-administering frequent albuterol treatments before EMS arrival, monitor for tremors, tachycardia, and ECG changes."
  },
  {
    id: "ipratropium",
    genericName: "Ipratropium",
    tradeNames: ["Atrovent", "Combivent"],
    category: ["Pulmonary"],
    classes: ["anticholinergic", "bronchodilator", "sama"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["COPD maintenance", "Asthma exacerbation (adjunct)", "Chronic bronchitis", "Emphysema"],
    comorbidities: ["COPD", "Asthma", "Heart failure", "Coronary artery disease", "Type 2 diabetes"],
    polypharmacy: ["Beta-2 agonists (albuterol, levalbuterol)", "Inhaled corticosteroids (fluticasone, budesonide)", "Systemic corticosteroids (prednisone)", "Statins (atorvastatin)", "ACE Inhibitors (lisinopril, enalapril)"],
    overdoseToxicity: null,
    precautions: [
      'Anticholinergic effects include <span class="hl hl--ci">tachycardia</span>, urinary retention, and mydriasis — assess for these in patients using high or frequent doses.',
      'Nebulizer mist contacting the eyes can precipitate or worsen <span class="hl hl--ci">acute narrow-angle glaucoma</span>.',
      '<span class="hl hl--warn">Paradoxical bronchospasm</span> can occur, particularly on first use — worsening dyspnea after administration is not always treatment failure.',
      'Structurally related to <span class="hl hl--drug">atropine</span> — patients with atropine allergy are contraindicated.',
      'Additive anticholinergic effects when combined with other anticholinergic drugs (e.g., <span class="hl hl--drug">diphenhydramine</span>, promethazine).'
    ],
    summary: "Ipratropium is a short-acting inhaled anticholinergic used for COPD maintenance and as an adjunct to albuterol in severe asthma and COPD exacerbations. Its presence on a med list confirms chronic obstructive airway disease. Systemic toxicity from inhaled ipratropium is rare due to poor absorption, but additive anticholinergic effects are a concern when combined with other anticholinergic medications encountered on the same patient's med list."
  },
  {
    id: "fluticasone",
    genericName: "Fluticasone",
    tradeNames: ["Flovent", "Flovent HFA", "Flonase", "ArmonAir"],
    category: ["Pulmonary"],
    classes: ["corticosteroid"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Asthma (maintenance)", "COPD", "Allergic rhinitis", "Nonallergic rhinitis", "Chronic rhinosinusitis"],
    comorbidities: ["COPD", "Allergic rhinitis", "Nasal polyps", "Atopic dermatitis", "Obesity"],
    polypharmacy: ["Beta-2 agonists (albuterol, salmeterol)", "Montelukast", "Ipratropium", "Prednisone", "Antihistamines (cetirizine, loratadine)"],
    overdoseToxicity: null,
    precautions: [
      'Long-term high-dose use (>500 mcg/day) can cause <span class="hl hl--ci">HPA axis suppression</span> — consider adrenal insufficiency in patients presenting with unexplained hypotension or shock.',
      'Concurrent use of <span class="hl hl--warn">CYP3A4 inhibitors</span> (ritonavir, itraconazole) potentiates systemic steroid effects and increases adrenal suppression risk.',
      'Inhaled fluticasone does <span class="hl hl--warn">not treat acute bronchospasm</span> — it is a controller medication, not a rescue inhaler.',
      'Patients on chronic inhaled corticosteroids are often also on <span class="hl hl--drug">prednisone</span> burst packs — assess total steroid burden.',
      'Presence of a steroid inhaler confirms <span class="hl hl--warn">reactive airway disease</span> — anticipate bronchospasm as a potential complication during the call.'
    ],
    summary: "Fluticasone is an inhaled corticosteroid used for maintenance control of asthma and COPD. Its presence on a med list confirms chronic airway disease and signals a patient prone to bronchospasm under physiological stress. It is not a rescue medication and provides no acute bronchodilation. At high doses or with prolonged use, HPA axis suppression is a real concern — unexplained hypotension in a patient on chronic inhaled steroids should raise suspicion for adrenal insufficiency."
  },
  {
    id: "fluticasone-salmeterol",
    genericName: "Fluticasone-Salmeterol",
    tradeNames: ["Advair Diskus", "Advair HFA", "AirDuo RespiClick"],
    category: ["Pulmonary"],
    classes: ["corticosteroid", "beta2_agonist", "bronchodilator", "sympathomimetic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Asthma (maintenance)", "COPD (maintenance)", "Prevention of exacerbations"],
    comorbidities: ["Allergic rhinitis", "GERD", "Obesity", "Obstructive sleep apnea", "Heart failure"],
    polypharmacy: ["Short-acting beta agonists (albuterol)", "Montelukast", "Proton pump inhibitors (omeprazole, pantoprazole)", "Tiotropium", "Prednisone"],
    overdoseToxicity: ["Tachycardia with QTc prolongation", "Hypokalemia", "Hyperglycemia", "Tremor and agitation", "Lactic acidosis (massive ingestion)"],
    precautions: [
      'Not a rescue inhaler — provides <span class="hl hl--warn">no acute bronchodilation</span> during an asthma or COPD exacerbation.',
      '<span class="hl hl--drug">MAOIs</span> and <span class="hl hl--drug">TCAs</span> potentiate the cardiovascular effects of salmeterol — risk of tachycardia and hypertension.',
      'Long-term corticosteroid component can cause <span class="hl hl--ci">adrenal suppression</span> — consider adrenal crisis in unexplained hypotension.',
      'Salmeterol can produce <span class="hl hl--ci">QTc prolongation</span> at supratherapeutic doses, with potential for ventricular arrhythmias.',
      'COPD patients on ICS component have <span class="hl hl--warn">increased pneumonia risk</span> — respiratory decline may be infectious rather than an exacerbation.'
    ],
    summary: "Fluticasone-salmeterol is a combination ICS/LABA inhaler for maintenance control of asthma and COPD. It is not a rescue inhaler and will not relieve acute bronchospasm. Its presence on a med list confirms chronic airway disease with enough severity to require dual maintenance therapy. Key prehospital concerns are adrenal suppression from the steroid component, cardiovascular stimulation from the LABA, and increased pneumonia risk in COPD patients."
  },
  {
    id: "montelukast",
    genericName: "Montelukast",
    tradeNames: ["Singulair"],
    category: ["Pulmonary"],
    classes: ["leukotriene_modifier"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Asthma (prophylaxis)", "Exercise-induced bronchoconstriction", "Seasonal allergic rhinitis", "Perennial allergic rhinitis"],
    comorbidities: ["Allergic rhinitis", "Eczema / atopic dermatitis", "Nasal polyps", "GERD", "Aspirin-exacerbated respiratory disease"],
    polypharmacy: ["Inhaled corticosteroids (fluticasone, budesonide)", "Short-acting beta agonists (albuterol)", "Antihistamines (cetirizine, loratadine)", "Intranasal corticosteroids (fluticasone nasal)", "Long-acting beta agonists (salmeterol, formoterol)"],
    overdoseToxicity: null,
    precautions: [
      'FDA boxed warning for <span class="hl hl--ci">neuropsychiatric events</span> — agitation, hallucinations, depression, and suicidal ideation reported at therapeutic doses.',
      'Not a rescue medication — provides <span class="hl hl--warn">no acute bronchodilation</span> during an asthma attack.',
      'Rare association with <span class="hl hl--ci">Churg-Strauss syndrome</span> (eosinophilic vasculitis), particularly when oral corticosteroids are tapered.',
      'Patients with aspirin-sensitive asthma should <span class="hl hl--warn">continue avoiding aspirin and NSAIDs</span> while on montelukast.',
      'No significant interactions with standard prehospital drugs — does not alter hemodynamics or coagulation.'
    ],
    summary: "Montelukast is a leukotriene receptor antagonist used for chronic asthma prophylaxis and allergic rhinitis. It signals a patient with reactive airway disease, often with an allergic component. The drug has no acute bronchodilator effect and will not help during an active asthma exacerbation. The primary prehospital relevance is the FDA-boxed neuropsychiatric warning — behavioral changes, agitation, and suicidal ideation can occur and may be the reason for the call."
  },
  {
    id: "prednisone",
    genericName: "Prednisone",
    tradeNames: ["Deltasone", "Rayos", "Sterapred"],
    category: ["Pulmonary", "Pain & Anti-inflammatory", "Endocrine"],
    classes: ["corticosteroid"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Asthma / COPD exacerbation", "Rheumatoid arthritis", "Inflammatory bowel disease", "Systemic lupus erythematosus", "Allergic reactions"],
    comorbidities: ["COPD / asthma", "Autoimmune disease", "Type 2 diabetes", "Osteoporosis", "Hypertension"],
    polypharmacy: ["Inhaled corticosteroids (fluticasone, budesonide)", "Bronchodilators (albuterol, ipratropium)", "Methotrexate", "PPIs (omeprazole, pantoprazole)", "Calcium and vitamin D supplements"],
    overdoseToxicity: null,
    precautions: [
      'Chronic use causes <span class="hl hl--ci">HPA axis suppression</span> — abrupt discontinuation or physiologic stress can trigger adrenal crisis.',
      'Adrenal crisis presents as <span class="hl hl--ci">refractory hypotension</span> unresponsive to fluids and vasopressors — suspect in any chronically steroid-dependent patient in unexplained shock.',
      'Causes <span class="hl hl--warn">hyperglycemia</span> — blood glucose may be significantly elevated even in non-diabetic patients.',
      'Chronic immunosuppression <span class="hl hl--warn">masks signs of infection</span> — fever and inflammatory markers may be blunted despite serious illness.',
      '<span class="hl hl--drug">NSAIDs</span> combined with prednisone significantly increases risk of <span class="hl hl--ci">GI hemorrhage</span>.'
    ],
    summary: "Prednisone is a systemic corticosteroid found across a wide range of inflammatory and autoimmune conditions. Its presence on a med list signals chronic disease requiring immune modulation and a patient at risk for adrenal suppression. The highest-stakes prehospital concern is adrenal crisis — refractory hypotension in a steroid-dependent patient who missed doses, ran out of medication, or is acutely ill without stress-dose coverage. Expect baseline hyperglycemia and blunted inflammatory responses that can mask serious infection."
  },
  {
    id: "levothyroxine",
    genericName: "Levothyroxine",
    tradeNames: ["Synthroid", "Levoxyl", "Levothroid", "Unithroid", "Tirosint"],
    category: ["Endocrine"],
    classes: ["thyroid_agent", "hormone"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Hypothyroidism", "TSH suppression (thyroid cancer)", "Hashimoto's thyroiditis", "Myxedema"],
    comorbidities: ["Hyperlipidemia", "Hypertension", "Type 2 diabetes", "Depression", "Osteoporosis"],
    polypharmacy: ["PPIs (omeprazole, pantoprazole)", "Statins (atorvastatin, rosuvastatin)", "Calcium and vitamin D supplements", "SSRIs (sertraline, escitalopram)", "Antihypertensives (lisinopril, amlodipine)"],
    overdoseToxicity: ["Tachycardia and atrial arrhythmias", "Hypertension with widened pulse pressure", "Tremor, agitation, and anxiety", "Hyperthermia", "Seizures (rare, large ingestions)"],
    precautions: [
      'Symptoms of overdose may be <span class="hl hl--warn">delayed 1–3 days</span> after ingestion — do not clear patients based on initial presentation.',
      'Levothyroxine increases the effect of <span class="hl hl--drug">warfarin</span>, raising <span class="hl hl--ci">bleeding risk</span> in anticoagulated patients.',
      'In patients with underlying coronary artery disease, excess thyroid hormone can precipitate <span class="hl hl--ci">angina, MI, or arrhythmias</span>.',
      '<span class="hl hl--drug">Epinephrine</span> and other sympathomimetics have an exaggerated cardiovascular effect in hyperthyroid states — monitor for <span class="hl hl--ci">tachyarrhythmias</span>.',
      'Hypothyroid patients presenting with <span class="hl hl--warn">altered mental status, hypothermia, and bradycardia</span> may be in myxedema coma — a life-threatening emergency.'
    ],
    summary: "Levothyroxine is synthetic T4 used to replace thyroid hormone in hypothyroid patients. Its presence signals a patient whose metabolic rate, cardiac function, and thermoregulation depend on exogenous hormone replacement. In overdose or overreplacement, expect a sympathomimetic-like picture with tachycardia, hypertension, and agitation — but symptom onset is delayed up to several days. The critical prehospital concern is the undertreated or noncompliant patient presenting with myxedema coma: profound hypothermia, bradycardia, hypotension, and altered mental status."
  },
  {
    id: "omeprazole",
    genericName: "Omeprazole",
    tradeNames: ["Prilosec", "Prilosec OTC"],
    category: ["GI"],
    classes: ["proton_pump_inhibitor"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["GERD", "Peptic ulcer disease", "Erosive esophagitis", "H. pylori eradication (adjunct)", "Zollinger-Ellison syndrome"],
    comorbidities: ["Chronic GERD", "Peptic ulcer disease", "Barrett esophagus", "Obesity", "NSAID-dependent pain conditions"],
    polypharmacy: ["NSAIDs (ibuprofen, naproxen)", "Aspirin", "Anticoagulants (warfarin, apixaban)", "Clopidogrel", "SSRIs (sertraline, citalopram)"],
    overdoseToxicity: null,
    precautions: [
      'Inhibits CYP2C19 metabolism of <span class="hl hl--drug">clopidogrel</span>, reducing its <span class="hl hl--ci">antiplatelet effect</span>.',
      'Increases <span class="hl hl--drug">warfarin</span> exposure via CYP2C19 inhibition — elevated <span class="hl hl--ci">INR and bleeding risk</span>.',
      'Increases <span class="hl hl--drug">digoxin</span> absorption and impairs its clearance, raising risk of <span class="hl hl--ci">digoxin toxicity</span>.',
      'Long-term use causes <span class="hl hl--ci">hypomagnesemia</span>, which can present as seizures, arrhythmias, or tetany.',
      'Potentiates <span class="hl hl--drug">midazolam</span> and <span class="hl hl--drug">diazepam</span> sedation through <span class="hl hl--warn">impaired benzodiazepine metabolism</span>.'
    ],
    summary: "Omeprazole is a proton pump inhibitor that signals a patient with chronic acid-related GI disease. It carries no direct hemodynamic effects and overdose is clinically benign. The prehospital relevance is entirely drug-interaction driven: it reduces clopidogrel efficacy (increasing thrombotic risk in cardiac patients), potentiates warfarin (increasing bleeding risk), and raises digoxin levels. In long-term users, hypomagnesemia can cause arrhythmias or seizures that mimic primary cardiac or neurological emergencies."
  },
  {
    id: "pantoprazole",
    genericName: "Pantoprazole",
    tradeNames: ["Protonix"],
    category: ["GI"],
    classes: ["proton_pump_inhibitor"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["GERD", "Erosive esophagitis", "Zollinger-Ellison syndrome", "Stress ulcer prophylaxis", "H. pylori eradication (off-label)"],
    comorbidities: ["Gastroesophageal reflux disease", "Peptic ulcer disease", "Chronic NSAID use", "Barrett's esophagus", "Coronary artery disease"],
    polypharmacy: ["NSAIDs (ibuprofen, naproxen)", "Anticoagulants (warfarin, apixaban)", "Antiplatelets (clopidogrel, aspirin)", "Corticosteroids (prednisone)", "Digoxin"],
    overdoseToxicity: null,
    precautions: [
      'Reduces <span class="hl hl--drug">clopidogrel</span> activation — <span class="hl hl--ci">diminished antiplatelet effect</span> increases thrombotic risk in cardiac patients.',
      'Long-term use causes <span class="hl hl--ci">hypomagnesemia</span> — can present as seizures, arrhythmias, or tetany mimicking primary cardiac or neurological emergencies.',
      'Raises <span class="hl hl--drug">digoxin</span> serum levels — increases risk of <span class="hl hl--ci">digoxin toxicity</span> in patients on both drugs.',
      'Chronic use associated with <span class="hl hl--warn">bone demineralization</span> — increased fracture risk in older adults on long-term therapy.',
      'Can mask symptoms of <span class="hl hl--warn">gastric malignancy</span> — symptom relief does not exclude serious underlying pathology.'
    ],
    summary: "Pantoprazole is a proton pump inhibitor prescribed for chronic acid-related GI conditions. It has no direct hemodynamic effects and overdose is not a realistic field concern. Prehospital relevance centers on drug interactions: it impairs clopidogrel activation in cardiac patients and raises digoxin levels. In long-term users, hypomagnesemia can produce seizures or arrhythmias that mimic primary cardiac or neurological events."
  },
  {
    id: "gabapentin",
    genericName: "Gabapentin",
    tradeNames: ["Neurontin", "Gralise", "Horizant"],
    category: ["Neurological", "Pain & Anti-inflammatory"],
    classes: ["anticonvulsant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Postherpetic neuralgia", "Partial onset seizures", "Neuropathic pain", "Restless legs syndrome", "Fibromyalgia"],
    comorbidities: ["Chronic pain", "Epilepsy", "Anxiety disorders", "Chronic kidney disease", "Substance use disorder"],
    polypharmacy: ["Opioid analgesics (hydrocodone, oxycodone)", "SSRIs (sertraline, escitalopram)", "NSAIDs (ibuprofen, naproxen)", "Benzodiazepines (alprazolam, clonazepam)", "Pregabalin"],
    overdoseToxicity: ["CNS depression progressing to coma", "Respiratory depression", "Ataxia and nystagmus", "Diarrhea and drowsiness", "Rhabdomyolysis (rare)"],
    precautions: [
      'Co-administration with <span class="hl hl--drug">opioids</span> significantly increases risk of <span class="hl hl--ci">fatal respiratory depression</span>.',
      'No antidote exists — overdose management is <span class="hl hl--warn">entirely supportive</span>.',
      'Abrupt discontinuation can trigger <span class="hl hl--ci">withdrawal seizures</span> and status epilepticus.',
      'Toxicity accumulates in <span class="hl hl--warn">renal impairment</span> — even therapeutic doses can produce overdose symptoms.',
      'Increasingly <span class="hl hl--warn">misused</span> to potentiate opioid euphoria — does not appear on standard urine drug screens.'
    ],
    summary: "Gabapentin is an anticonvulsant widely prescribed for neuropathic pain, seizures, and numerous off-label conditions. Its presence on a med list should raise suspicion for chronic pain and possible concurrent opioid use. The critical prehospital concern is synergistic respiratory depression when combined with opioids or other CNS depressants — a combination implicated in a growing number of overdose deaths. In patients with renal impairment, gabapentin accumulates and can produce toxicity at standard doses, presenting as altered mental status, ataxia, and respiratory depression."
  },
  {
    id: "phenytoin",
    genericName: "Phenytoin",
    tradeNames: ["Dilantin", "Phenytek"],
    category: ["Neurological"],
    classes: ["anticonvulsant", "sodium_channel_blocker"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Tonic-clonic seizures", "Complex partial seizures", "Post-neurosurgery seizure prophylaxis"],
    comorbidities: ["Epilepsy", "Traumatic brain injury", "Brain tumor", "Cerebrovascular disease"],
    polypharmacy: ["Levetiracetam", "Benzodiazepines (clonazepam, lorazepam)", "Valproic acid", "Anticoagulants (warfarin, apixaban)", "Proton pump inhibitors (omeprazole, pantoprazole)"],
    overdoseToxicity: ["Nystagmus progressing to ataxia and slurred speech", "Lethargy and confusion", "Coma and paradoxical seizures at very high levels", "Hyperglycemia"],
    precautions: [
      'Narrow therapeutic index — minor dose changes or drug interactions can push levels into <span class="hl hl--ci">toxicity</span>.',
      'Potent <span class="hl hl--warn">CYP450 inducer</span> — accelerates metabolism of many drugs including warfarin, leading to unpredictable anticoagulation.',
      'Toxicity mimics stroke: <span class="hl hl--ci">nystagmus, ataxia, dysarthria, and diplopia</span> require differentiation from CVA.',
      '<span class="hl hl--drug">Midazolam</span> clearance is increased in chronic phenytoin users — standard doses may be less effective for seizure control.',
      'Chronic use causes <span class="hl hl--warn">gingival hyperplasia</span> and folate-deficiency anemia — visual clues on scene exam.'
    ],
    summary: "Phenytoin is a sodium channel-blocking anticonvulsant with a narrow therapeutic index, prescribed for tonic-clonic and complex partial seizures. Its presence signals a seizure disorder and a patient at risk for both breakthrough seizures and dose-related toxicity. Toxicity presents with cerebellar signs — nystagmus, ataxia, slurred speech — that closely mimic stroke and must be considered in the differential. As a potent CYP450 inducer, phenytoin alters the metabolism of numerous drugs, making polypharmacy interactions a constant concern."
  },
  {
    id: "levetiracetam",
    genericName: "Levetiracetam",
    tradeNames: ["Keppra", "Keppra XR"],
    category: ["Neurological"],
    classes: ["anticonvulsant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Partial-onset seizures", "Myoclonic seizures (JME)", "Primary generalized tonic-clonic seizures"],
    comorbidities: ["Epilepsy", "Traumatic brain injury", "Intellectual disability", "Mood disorders"],
    polypharmacy: ["Other anticonvulsants (phenytoin, valproic acid)", "Benzodiazepines (clonazepam, lorazepam)", "SSRIs (sertraline, escitalopram)", "Lamotrigine"],
    overdoseToxicity: ["Profound somnolence progressing to coma", "Respiratory depression", "Agitation and aggression", "Decreased level of consciousness"],
    precautions: [
      'Behavioral changes including <span class="hl hl--ci">aggression</span>, agitation, and psychosis can develop at therapeutic levels.',
      '<span class="hl hl--warn">Suicidal ideation</span> is an FDA-boxed risk across all anticonvulsants — assess mental status beyond seizure activity.',
      'Abrupt discontinuation risks <span class="hl hl--ci">breakthrough seizures</span> or status epilepticus.',
      'Renally cleared without hepatic metabolism — <span class="hl hl--warn">minimal drug interactions</span> with prehospital medications.',
      'Overdose causes <span class="hl hl--ci">respiratory depression</span> requiring airway management — recovery is typically rapid with supportive care.'
    ],
    summary: "Levetiracetam is a broad-spectrum anticonvulsant prescribed for partial-onset, myoclonic, and generalized tonic-clonic seizures. Its presence confirms a seizure disorder and a patient at risk for breakthrough seizures if doses are missed. Unlike most anticonvulsants, it has minimal drug interactions due to renal elimination without CYP450 involvement. The key prehospital concern is behavioral disturbance — aggression, agitation, and psychosis occur at therapeutic levels and can complicate scene management."
  },
  {
    id: "valproic-acid",
    genericName: "Valproic Acid",
    tradeNames: ["Depakote", "Depakote ER", "Depakene", "Stavzor"],
    category: ["Neurological", "Psychiatric"],
    classes: ["anticonvulsant", "mood_stabilizer", "sodium_channel_blocker"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Complex partial seizures", "Absence seizures", "Bipolar mania", "Migraine prophylaxis"],
    comorbidities: ["Epilepsy", "Bipolar disorder", "Chronic migraines", "Traumatic brain injury"],
    polypharmacy: ["Anticonvulsants (levetiracetam, lamotrigine)", "Antipsychotics (quetiapine, risperidone)", "SSRIs (sertraline, fluoxetine)", "Benzodiazepines (clonazepam, lorazepam)"],
    overdoseToxicity: [
      "CNS depression ranging from drowsiness to coma",
      "Hyperammonemic encephalopathy with seizures",
      "Hypotension and tachycardia",
      "High anion gap metabolic acidosis",
      "Cerebral edema (may present 2–3 days post-ingestion)"
    ],
    precautions: [
      'Toxicity causes <span class="hl hl--ci">hyperammonemia</span> even without hepatic failure — altered mental status in a valproate patient warrants ammonia level.',
      '<span class="hl hl--ci">Cerebral edema</span> can develop days after ingestion despite falling drug levels.',
      '<span class="hl hl--drug">Aspirin</span> displaces valproate from albumin, increasing free drug levels and worsening toxicity.',
      'Chronic use causes <span class="hl hl--warn">thrombocytopenia</span> — expect prolonged bleeding from trauma.',
      '<span class="hl hl--drug">Naloxone</span> may partially reverse CNS depression in mild-to-moderate valproate overdose.'
    ],
    summary: "Valproic acid is a broad-spectrum anticonvulsant and mood stabilizer used for seizures, bipolar disorder, and migraine prevention. Overdose is a realistic field scenario — intentional ingestions can produce profound CNS depression, hyperammonemia, metabolic acidosis, and delayed cerebral edema. Chronic users are at baseline risk for thrombocytopenia and hepatotoxicity. Avoid administering aspirin to these patients, as it increases free valproate levels and can precipitate toxicity."
  },
  {
    id: "topiramate",
    genericName: "Topiramate",
    tradeNames: ["Topamax", "Trokendi XR", "Qudexy XR"],
    category: ["Neurological"],
    classes: ["anticonvulsant", "sodium_channel_blocker"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Partial-onset seizures", "Primary generalized tonic-clonic seizures", "Lennox-Gastaut syndrome", "Migraine prevention"],
    comorbidities: ["Epilepsy", "Chronic migraine", "Obesity", "Bipolar disorder", "Kidney stones"],
    polypharmacy: ["Anticonvulsants (valproic acid, levetiracetam)", "SSRIs (sertraline, escitalopram)", "Oral contraceptives", "Metformin", "Benzodiazepines (clonazepam, lorazepam)"],
    overdoseToxicity: ["Somnolence progressing to coma", "Non-anion gap metabolic acidosis (hyperchloremic)", "Seizures, particularly in non-tolerant patients", "Hypotension", "Mydriasis and agitation"],
    precautions: [
      'Carbonic anhydrase inhibition causes chronic <span class="hl hl--ci">metabolic acidosis</span> — low bicarb may be the patient\'s baseline, not an acute finding.',
      'Concurrent <span class="hl hl--drug">valproic acid</span> use risks <span class="hl hl--ci">hyperammonemic encephalopathy</span> — altered mental status with normal liver function tests.',
      'Reduces sweating — patients are at increased risk of <span class="hl hl--warn">hyperthermia</span> in hot environments.',
      'Cognitive impairment (word-finding difficulty, confusion) is a common side effect and may mimic <span class="hl hl--warn">neurological emergency</span>.',
      '<span class="hl hl--drug">Midazolam</span> and other CNS depressants have additive sedation with topiramate.'
    ],
    summary: "Topiramate is an anticonvulsant used for seizure disorders and migraine prevention. Its carbonic anhydrase inhibition produces a chronic non-anion gap metabolic acidosis that can confound field blood gas interpretation. Patients on concurrent valproic acid are at risk for hyperammonemic encephalopathy presenting as altered mental status with hypothermia. Cognitive side effects (confusion, word-finding difficulty) are common at therapeutic levels and may mimic stroke or other neurological emergencies."
  },
  {
    id: "sertraline",
    genericName: "Sertraline",
    tradeNames: ["Zoloft"],
    category: ["Psychiatric"],
    classes: ["ssri", "antidepressant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Major depressive disorder", "PTSD", "Panic disorder", "OCD", "Social anxiety disorder"],
    comorbidities: ["Generalized anxiety disorder", "Insomnia", "Chronic pain", "Substance use disorder", "Bipolar disorder (undiagnosed)"],
    polypharmacy: ["Benzodiazepines (alprazolam, clonazepam)", "Trazodone", "Atypical antipsychotics (quetiapine, aripiprazole)", "Gabapentin", "Bupropion"],
    overdoseToxicity: ["Serotonin toxicity: clonus, hyperreflexia, agitation, diaphoresis", "Tachycardia and hypertension", "Seizures (rare, large ingestions)", "Altered mental status progressing to coma", "QTc prolongation (rare, typically with co-ingestants)"],
    precautions: [
      'Coadministration with <span class="hl hl--drug">fentanyl</span> or <span class="hl hl--drug">tramadol</span> increases risk of <span class="hl hl--ci">serotonin syndrome</span>.',
      'Impairs platelet aggregation — <span class="hl hl--warn">increased bleeding risk</span> with concurrent anticoagulants or antiplatelet agents.',
      'Can produce <span class="hl hl--ci">false-positive urine benzodiazepine</span> screens due to immunoassay cross-reactivity.',
      'Abrupt discontinuation causes withdrawal: dizziness, paresthesias, irritability, and "brain zaps."',
      '<span class="hl hl--warn">Hyponatremia</span> (SIADH) occurs more often in elderly and volume-depleted patients.'
    ],
    summary: "Sertraline is an SSRI prescribed for depression, anxiety disorders, and PTSD. Its presence flags a psychiatric history that may be relevant to the chief complaint, particularly in behavioral emergencies or intentional overdose. The primary prehospital concern is serotonin syndrome when combined with other serotonergic agents — fentanyl being the most likely EMS-administered trigger. SSRIs also impair platelet function, increasing bleeding risk in trauma or in patients already on anticoagulants."
  },
  {
    id: "escitalopram",
    genericName: "Escitalopram",
    tradeNames: ["Lexapro"],
    category: ["Psychiatric"],
    classes: ["ssri", "antidepressant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Major depressive disorder", "Generalized anxiety disorder"],
    comorbidities: ["Anxiety disorders", "Insomnia", "Panic disorder", "PTSD", "Chronic pain"],
    polypharmacy: ["Benzodiazepines (alprazolam, clonazepam)", "Trazodone", "Buspirone", "Gabapentin", "Antipsychotics (quetiapine, aripiprazole)"],
    overdoseToxicity: ["QT prolongation and torsades de pointes", "Seizures", "Serotonin syndrome (agitation, clonus, hyperthermia)", "Altered mental status progressing to coma", "Tachycardia with hypertension"],
    precautions: [
      'Co-administration with <span class="hl hl--drug">fentanyl</span> increases risk of <span class="hl hl--ci">serotonin syndrome</span>.',
      '<span class="hl hl--ci">QT prolongation</span> is dose-dependent and more pronounced than other SSRIs — relevant if patient is also on amiodarone or other QT-prolonging drugs.',
      'Impairs platelet aggregation — increases <span class="hl hl--warn">bleeding risk</span> in patients on anticoagulants or antiplatelet agents.',
      'Abrupt discontinuation causes withdrawal symptoms: dizziness, paresthesias, irritability, and <span class="hl hl--warn">electric shock sensations</span>.',
      '<span class="hl hl--warn">Hyponatremia</span> (SIADH) is more common in elderly patients and can present as altered mental status or seizures.'
    ],
    summary: "Escitalopram is an SSRI prescribed for depression and generalized anxiety. It signals a psychiatric history that may factor into behavioral emergencies or intentional overdose. Among SSRIs, escitalopram carries a higher risk of dose-dependent QT prolongation — in overdose, cardiac monitoring is critical. Serotonin syndrome is the primary drug interaction concern, especially with prehospital fentanyl, and SSRIs impair platelet function, compounding bleeding risk in trauma patients on anticoagulants."
  },
  {
    id: "citalopram",
    genericName: "Citalopram",
    tradeNames: ["Celexa"],
    category: ["Psychiatric"],
    classes: ["ssri", "antidepressant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Major depressive disorder"],
    comorbidities: ["Generalized anxiety disorder", "Panic disorder", "Insomnia", "Chronic pain", "Substance use disorder"],
    polypharmacy: ["Benzodiazepines (alprazolam, clonazepam)", "Trazodone", "Gabapentin", "Antipsychotics (quetiapine, aripiprazole)", "PPIs (omeprazole, pantoprazole)"],
    overdoseToxicity: ["Dose-dependent QTc prolongation with risk of torsades de pointes", "Seizures, more common above 600 mg ingestion", "Serotonin syndrome (agitation, hyperthermia, rigidity, clonus)", "Sinus tachycardia or bradycardia", "Altered mental status progressing to coma"],
    precautions: [
      'Citalopram has the <span class="hl hl--warn">highest cardiotoxicity risk among SSRIs</span> — dose-dependent QTc prolongation can cause torsades de pointes.',
      'Co-administration with <span class="hl hl--drug">amiodarone</span> or other QT-prolonging drugs compounds <span class="hl hl--ci">dysrhythmia risk</span>.',
      'Concomitant use of serotonergic drugs including prehospital <span class="hl hl--drug">fentanyl</span> increases risk of <span class="hl hl--ci">serotonin syndrome</span>.',
      'SSRIs impair platelet aggregation — increased <span class="hl hl--warn">bleeding risk</span> in patients also taking anticoagulants or antiplatelet agents.',
      '<span class="hl hl--warn">Hyponatremia</span> (SIADH) is more common in elderly patients and can present as altered mental status or seizures.'
    ],
    summary: "Citalopram is an SSRI prescribed for depression. It stands out from other SSRIs because of dose-dependent QTc prolongation caused by its metabolite — in overdose, it carries the highest cardiac risk in the SSRI class, including torsades de pointes and seizures. In the field, its presence signals psychiatric history relevant to behavioral emergencies and intentional ingestion. Serotonin syndrome is the key drug interaction concern with prehospital fentanyl, and impaired platelet function adds bleeding risk in trauma."
  },
  {
    id: "fluoxetine",
    genericName: "Fluoxetine",
    tradeNames: ["Prozac", "Prozac Weekly", "Sarafem"],
    category: ["Psychiatric"],
    classes: ["ssri", "antidepressant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Major depressive disorder", "Obsessive-compulsive disorder", "Bulimia nervosa", "Panic disorder"],
    comorbidities: ["Anxiety disorders", "Insomnia", "Chronic pain", "Eating disorders", "Substance use disorder"],
    polypharmacy: ["Benzodiazepines (alprazolam, clonazepam)", "Atypical antipsychotics (aripiprazole, quetiapine)", "Trazodone", "Gabapentin", "Bupropion"],
    overdoseToxicity: ["Serotonin syndrome (agitation, clonus, hyperthermia, diaphoresis)", "Tachycardia", "Seizures (large ingestions)", "Drowsiness progressing to decreased LOC", "QTc prolongation (less common than citalopram)"],
    precautions: [
      'Coadministration of <span class="hl hl--drug">fentanyl</span> increases risk of <span class="hl hl--ci">serotonin syndrome</span>.',
      'Impairs platelet aggregation — increases <span class="hl hl--warn">bleeding risk</span> in trauma, especially with concurrent anticoagulants or NSAIDs.',
      'Potent <span class="hl hl--warn">CYP2D6 inhibitor</span> — elevates levels of many coadministered drugs including metoprolol, codeine (reduced efficacy), and TCAs.',
      'Extremely long half-life (4–6 days, active metabolite 4–16 days) — drug interactions persist <span class="hl hl--warn">weeks after discontinuation</span>.',
      '<span class="hl hl--warn">Hyponatremia</span> (SIADH) can present as altered mental status or seizures, particularly in elderly patients.'
    ],
    summary: "Fluoxetine is the prototypical SSRI, prescribed for depression, OCD, panic disorder, and bulimia. Its presence flags psychiatric history relevant to behavioral emergencies and intentional ingestion. Unlike other SSRIs, fluoxetine has an exceptionally long half-life — drug effects and interactions persist for weeks after the last dose. Serotonin syndrome is the primary interaction concern with prehospital fentanyl, and impaired platelet function increases bleeding risk in trauma patients."
  },
  {
    id: "venlafaxine",
    genericName: "Venlafaxine",
    tradeNames: ["Effexor", "Effexor XR"],
    category: ["Psychiatric"],
    classes: ["snri", "antidepressant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Major depressive disorder", "Generalized anxiety disorder", "Social anxiety disorder", "Panic disorder"],
    comorbidities: ["Anxiety disorders", "Chronic pain syndromes", "Hypertension", "Migraines", "Fibromyalgia"],
    polypharmacy: ["Benzodiazepines (alprazolam, clonazepam)", "Buspirone", "Trazodone", "Gabapentin", "Antihypertensives (lisinopril, amlodipine)"],
    overdoseToxicity: ["Seizures, often abrupt onset and recurrent", "Sinus tachycardia progressing to ventricular dysrhythmias", "QRS widening and QTc prolongation", "Serotonin syndrome (hyperthermia, clonus, agitation)", "Hypotension and cardiovascular collapse in massive ingestions"],
    precautions: [
      'Significantly more toxic in overdose than SSRIs — <span class="hl hl--ci">seizures</span> occur in ~13% of ingestions and may be delayed up to 19 hours with XR formulations.',
      'Co-administration with <span class="hl hl--drug">fentanyl</span> or <span class="hl hl--drug">tramadol</span> increases risk of <span class="hl hl--ci">serotonin syndrome</span>.',
      'Causes dose-dependent <span class="hl hl--warn">sustained hypertension</span> at therapeutic doses — baseline BP may be elevated.',
      'QRS widening in overdose resembles <span class="hl hl--warn">TCA toxicity</span> and may respond to sodium bicarbonate.',
      'Abrupt discontinuation causes a severe <span class="hl hl--ci">withdrawal syndrome</span> — agitation, confusion, and sensory disturbances ("brain zaps") may mimic neurological emergencies.'
    ],
    summary: "Venlafaxine is an SNRI prescribed for depression, anxiety, and panic disorder. It carries substantially more overdose toxicity than SSRIs — seizures, QRS/QTc prolongation, and serotonin syndrome are well-documented. Its toxicity profile in overdose is a hybrid of TCA and SSRI patterns: cardiac conduction changes and seizures from sodium channel blockade, plus serotonergic excess. On scene, expect baseline hypertension, watch for serotonin syndrome when co-administered with prehospital fentanyl, and treat abrupt-discontinuation symptoms as a possible explanation for neurological presentations."
  },
  {
    id: "duloxetine",
    genericName: "Duloxetine",
    tradeNames: ["Cymbalta"],
    category: ["Psychiatric", "Pain & Anti-inflammatory", "Neurological"],
    classes: ["snri", "antidepressant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Major depressive disorder", "Generalized anxiety disorder", "Fibromyalgia", "Diabetic peripheral neuropathy", "Chronic musculoskeletal pain"],
    comorbidities: ["Chronic pain syndromes", "Type 2 diabetes", "Anxiety disorders", "Osteoarthritis", "Depression"],
    polypharmacy: ["Gabapentin", "NSAIDs (ibuprofen, naproxen, meloxicam)", "PPIs (omeprazole, pantoprazole)", "Benzodiazepines (alprazolam, clonazepam)", "Oral hypoglycemics (metformin, glipizide)"],
    overdoseToxicity: ["Tachycardia and hypertension (sympathomimetic toxicity)", "Serotonin syndrome (clonus, agitation, diaphoresis, hyperthermia)", "Seizures", "Somnolence progressing to altered mental status", "QTc prolongation (uncommon)"],
    precautions: [
      'Risk of <span class="hl hl--ci">serotonin syndrome</span> when combined with prehospital <span class="hl hl--drug">fentanyl</span> or other serotonergic agents.',
      'Impairs platelet aggregation — increased <span class="hl hl--ci">bleeding risk</span> when combined with aspirin or anticoagulants.',
      'Causes <span class="hl hl--ci">orthostatic hypotension</span> and falls, particularly in elderly patients and early in treatment.',
      'Abrupt discontinuation causes a <span class="hl hl--warn">withdrawal syndrome</span> — dizziness, nausea, paresthesia, irritability, and "brain zaps" may mimic neurological emergencies.',
      'May cause <span class="hl hl--ci">hyponatremia</span> (SIADH), especially in elderly patients on diuretics.'
    ],
    summary: "Duloxetine is an SNRI used across psychiatric, pain, and neurological conditions — its presence on a med list signals chronic pain, mood disorders, or both. In overdose it produces sympathomimetic toxicity (tachycardia, hypertension) and serotonin syndrome rather than the cardiac conduction changes seen with TCAs. On scene, the key concern is serotonin syndrome risk when administering fentanyl, and the potential for discontinuation symptoms to mimic stroke or seizure presentations."
  },
  {
    id: "bupropion",
    genericName: "Bupropion",
    tradeNames: ["Wellbutrin", "Wellbutrin SR", "Wellbutrin XL", "Zyban", "Forfivo XL", "Aplenzin"],
    category: ["Psychiatric"],
    classes: ["antidepressant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Major depressive disorder", "Seasonal affective disorder", "Smoking cessation"],
    comorbidities: ["Anxiety disorders", "ADHD", "Nicotine dependence", "Obesity", "Chronic pain"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "Benzodiazepines (alprazolam, clonazepam)", "Stimulants (amphetamine salts)", "Trazodone", "Gabapentin"],
    overdoseToxicity: [
      "Seizures, including delayed-onset and status epilepticus",
      "Sinus tachycardia and hypertension",
      "QRS widening and QTc prolongation",
      "Agitation, delirium, and hallucinations",
      "Cardiogenic shock in massive ingestions"
    ],
    precautions: [
      'Overdose presents as a <span class="hl hl--warn">sympathomimetic toxidrome</span> — tachycardia, hypertension, agitation, mydriasis, and seizures.',
      '<span class="hl hl--ci">Delayed seizures</span> can occur up to 24 hours post-ingestion with extended-release formulations.',
      'Triggers <span class="hl hl--ci">false-positive urine amphetamine</span> screens due to structural similarity to cathinones.',
      'QRS widening is caused by gap junction inhibition, not sodium channel blockade — <span class="hl hl--drug">sodium bicarbonate</span> may be ineffective.',
      'Lowers seizure threshold at therapeutic doses — concurrent alcohol withdrawal or <span class="hl hl--warn">pro-convulsant drugs</span> compound the risk.'
    ],
    summary: "Bupropion is a norepinephrine-dopamine reuptake inhibitor prescribed for depression, smoking cessation, and off-label for ADHD. It is one of the most dangerous antidepressants in overdose — seizures occur in 17–47% of intentional ingestions and can be delayed up to 24 hours with extended-release formulations. Cardiotoxicity from gap junction inhibition does not respond to sodium bicarbonate, making severe overdose uniquely resistant to standard interventions. On scene, suspect bupropion in any antidepressant overdose presenting with a sympathomimetic picture and seizures, and note that a positive amphetamine screen may be a false positive."
  },
  {
    id: "trazodone",
    genericName: "Trazodone",
    tradeNames: ["Desyrel", "Oleptro"],
    category: ["Psychiatric"],
    classes: ["antidepressant", "sedative"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Major depressive disorder", "Insomnia (off-label)", "Anxiety (off-label)"],
    comorbidities: ["Depression", "Insomnia", "Anxiety disorders", "Chronic pain", "PTSD"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "SNRIs (venlafaxine, duloxetine)", "Benzodiazepines (alprazolam, clonazepam)", "Gabapentin", "Quetiapine"],
    overdoseToxicity: ["CNS depression progressing to coma", "QT prolongation with torsades de pointes", "Hypotension from alpha-1 blockade", "Seizures", "Priapism"],
    precautions: [
      'Concomitant <span class="hl hl--drug">fentanyl</span> administration risks <span class="hl hl--ci">serotonin syndrome</span> — agitation, clonus, hyperthermia, and autonomic instability.',
      '<span class="hl hl--ci">QT prolongation</span> is dose-dependent and additive with other QT-prolonging agents including <span class="hl hl--drug">ondansetron</span> and <span class="hl hl--drug">amiodarone</span>.',
      'Causes <span class="hl hl--ci">orthostatic hypotension</span> via alpha-1 blockade — compounded by concurrent antihypertensives.',
      'Potent <span class="hl hl--warn">sedation</span> is additive with opioids, benzodiazepines, and other CNS depressants.',
      'Increases <span class="hl hl--warn">bleeding risk</span> when combined with aspirin, NSAIDs, or anticoagulants.'
    ],
    summary: "Trazodone is a serotonin antagonist and reuptake inhibitor prescribed for depression but far more commonly encountered as a sleep aid. Its alpha-1 blockade causes orthostatic hypotension, and it prolongs the QT interval — both effects are amplified in overdose, where severe hypotension and torsades de pointes are the primary life threats. The critical prehospital interaction is with fentanyl: administering fentanyl to a patient on trazodone can precipitate serotonin syndrome."
  },
  {
    id: "alprazolam",
    genericName: "Alprazolam",
    tradeNames: ["Xanax", "Xanax XR"],
    category: ["Psychiatric"],
    classes: ["benzodiazepine", "anxiolytic", "sedative"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Generalized anxiety disorder", "Panic disorder"],
    comorbidities: ["Major depressive disorder", "PTSD", "Insomnia", "Substance use disorder", "Agoraphobia"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "SNRIs (venlafaxine, duloxetine)", "Trazodone", "Gabapentin", "Opioid analgesics (hydrocodone, oxycodone)"],
    overdoseToxicity: ["CNS depression with somnolence and confusion", "Impaired coordination and diminished reflexes", "Respiratory depression, especially with coingestants", "Hypotension", "Coma"],
    precautions: [
      'Concomitant use with <span class="hl hl--drug">fentanyl</span>, <span class="hl hl--drug">morphine</span>, or other opioids risks <span class="hl hl--ci">fatal respiratory depression</span>.',
      'Alprazolam is more toxic in overdose than other benzodiazepines — higher rates of ICU admission and mechanical ventilation.',
      '<span class="hl hl--drug">Flumazenil</span> can precipitate <span class="hl hl--ci">withdrawal seizures</span> in chronic users — use is rarely indicated in the field.',
      'Abrupt discontinuation causes <span class="hl hl--ci">withdrawal seizures</span> — a patient without their Xanax is a seizure risk.',
      '<span class="hl hl--warn">Additive CNS depression</span> with alcohol, antihistamines, and any sedating prehospital medications including <span class="hl hl--drug">midazolam</span> and <span class="hl hl--drug">ketamine</span>.'
    ],
    summary: "Alprazolam is a short-acting, high-potency benzodiazepine prescribed for anxiety and panic disorder. Its presence on a med list flags potential physical dependence — patients who miss doses or run out are at risk for withdrawal seizures. The highest-stakes prehospital concern is co-ingestion with opioids or alcohol, which dramatically increases the risk of respiratory arrest. Alprazolam is notably more toxic in overdose than other benzodiazepines, with higher rates of respiratory failure requiring ventilation."
  },
  {
    id: "clonazepam",
    genericName: "Clonazepam",
    tradeNames: ["Klonopin"],
    category: ["Psychiatric", "Neurological"],
    classes: ["benzodiazepine", "anticonvulsant", "anxiolytic", "sedative"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Panic disorder", "Seizure disorders (Lennox-Gastaut)", "Myoclonic seizures", "Absence seizures"],
    comorbidities: ["Generalized anxiety disorder", "Epilepsy", "Depression", "Insomnia", "Agoraphobia"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "Anticonvulsants (levetiracetam, valproic acid)", "Antipsychotics (quetiapine)", "Opioid analgesics (hydrocodone, oxycodone)", "Trazodone"],
    overdoseToxicity: ["Somnolence progressing to coma", "Respiratory depression, especially with co-ingestants", "Hypotension and bradycardia", "Diminished reflexes and ataxia", "Pulmonary aspiration"],
    precautions: [
      'Concurrent <span class="hl hl--drug">opioid</span> use causes synergistic <span class="hl hl--ci">respiratory depression</span> — the leading cause of benzodiazepine-related death.',
      '<span class="hl hl--drug">Flumazenil</span> is contraindicated in chronic users — precipitates <span class="hl hl--ci">withdrawal seizures</span> and is not recommended in the field.',
      'Abrupt discontinuation after chronic use risks <span class="hl hl--ci">status epilepticus</span> and life-threatening withdrawal.',
      'Long half-life (18–50 hours) means <span class="hl hl--warn">delayed or recurrent CNS depression</span> hours after ingestion.',
      'Additive <span class="hl hl--warn">CNS depression</span> with alcohol, <span class="hl hl--drug">midazolam</span>, <span class="hl hl--drug">ketamine</span>, and any sedating prehospital medications.'
    ],
    summary: "Clonazepam is a long-acting benzodiazepine used for panic disorder and seizure control. Chronic users develop physical dependence — abrupt discontinuation or missed doses can trigger withdrawal seizures. The primary prehospital threat is co-ingestion with opioids or alcohol, which converts a typically survivable benzodiazepine overdose into respiratory arrest. Its long half-life means patients can deteriorate hours after initial assessment appears reassuring."
  },
  {
    id: "zolpidem",
    genericName: "Zolpidem",
    tradeNames: ["Ambien", "Ambien CR", "Edluar", "Intermezzo"],
    category: ["Psychiatric"],
    classes: ["hypnotic", "sedative"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Insomnia (sleep onset)"],
    comorbidities: ["Anxiety disorders", "Depression", "Chronic pain", "COPD", "Obstructive sleep apnea"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "Benzodiazepines (alprazolam, clonazepam)", "Opioid Analgesics (hydrocodone, oxycodone)", "Trazodone", "Gabapentin"],
    overdoseToxicity: ["Excessive sedation progressing to coma", "Respiratory depression, especially with co-ingestants", "Hypotension", "Ataxia and falls", "Hallucinations and agitation"],
    precautions: [
      'Responds to <span class="hl hl--drug">flumazenil</span> — acts on the benzodiazepine binding site despite not being a benzodiazepine.',
      'Co-ingestion with <span class="hl hl--drug">opioids</span>, alcohol, or benzodiazepines dramatically increases risk of <span class="hl hl--ci">respiratory arrest</span>.',
      'Single-drug overdose is typically benign — <span class="hl hl--warn">polysubstance ingestion</span> is the real danger.',
      'Causes <span class="hl hl--warn">complex sleep behaviors</span> (sleepwalking, sleep-driving) — patients may be found confused and ambulatory with no memory of events.',
      'Additive <span class="hl hl--warn">CNS depression</span> with prehospital <span class="hl hl--drug">midazolam</span>, <span class="hl hl--drug">fentanyl</span>, and <span class="hl hl--drug">ketamine</span>.'
    ],
    summary: "Zolpidem is a non-benzodiazepine hypnotic (Z-drug) prescribed for insomnia. It binds the same GABA-A receptor site as benzodiazepines and produces similar CNS depression. Isolated zolpidem overdose rarely causes serious harm, but co-ingestion with opioids, alcohol, or benzodiazepines converts it into a life-threatening respiratory emergency. Paramedics should also be aware of complex sleep behaviors — patients found wandering, driving, or acting bizarrely with no recall may be experiencing a known zolpidem effect, not a psychiatric emergency."
  },
  {
    id: "quetiapine",
    genericName: "Quetiapine",
    tradeNames: ["Seroquel", "Seroquel XR"],
    category: ["Psychiatric"],
    classes: ["atypical_antipsychotic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Schizophrenia", "Bipolar mania", "Bipolar depression", "Major depressive disorder (adjunct)"],
    comorbidities: ["Bipolar disorder", "Schizophrenia", "Major depressive disorder", "Insomnia", "Type 2 diabetes"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "Mood stabilizers (lithium, valproic acid)", "Benzodiazepines (lorazepam, clonazepam)", "Metformin", "Antihypertensives (lisinopril, amlodipine)"],
    overdoseToxicity: ["Dose-dependent CNS depression progressing to coma", "Sinus tachycardia", "Hypotension from alpha-1 blockade", "QTc prolongation", "Seizures"],
    precautions: [
      '<span class="hl hl--drug">Epinephrine</span> is contraindicated in quetiapine overdose — alpha blockade causes <span class="hl hl--ci">paradoxical hypotension</span> via unopposed beta-2 vasodilation.',
      'Significant <span class="hl hl--warn">anticholinergic effects</span> in overdose — tachycardia, urinary retention, delirium, and dry mucous membranes.',
      'Causes <span class="hl hl--ci">rapid loss of consciousness</span> — GCS can deteriorate quickly, requiring early airway management.',
      'Risk of <span class="hl hl--ci">neuroleptic malignant syndrome</span> — hyperthermia, rigidity, altered mental status, and autonomic instability.',
      'Additive <span class="hl hl--warn">CNS depression</span> with prehospital <span class="hl hl--drug">midazolam</span>, <span class="hl hl--drug">fentanyl</span>, and <span class="hl hl--drug">ketamine</span>.'
    ],
    summary: "Quetiapine is an atypical antipsychotic prescribed for schizophrenia, bipolar disorder, and as an adjunct for depression. It is one of the most frequently encountered antipsychotics in overdose, causing predictable dose-dependent CNS depression, tachycardia, and hypotension. The critical prehospital concern is the epinephrine contraindication — alpha-1 blockade means epinephrine worsens hypotension rather than correcting it. Rapid GCS deterioration is common, and airway protection should be prioritized early."
  },
  {
    id: "aripiprazole",
    genericName: "Aripiprazole",
    tradeNames: ["Abilify", "Abilify MyCite", "Abilify Maintena"],
    category: ["Psychiatric"],
    classes: ["atypical_antipsychotic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Schizophrenia", "Bipolar I disorder (acute mania)", "Major depressive disorder (adjunct)", "Irritability in autism", "Tourette's disorder"],
    comorbidities: ["Bipolar disorder", "Schizophrenia", "Major depressive disorder", "Anxiety disorders", "Type 2 diabetes"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "Mood stabilizers (lithium, valproic acid)", "Benzodiazepines (lorazepam, clonazepam)", "Metformin", "Antihypertensives (lisinopril, amlodipine)"],
    overdoseToxicity: ["Sedation and somnolence (predominant finding)", "Tachycardia", "Orthostatic hypotension", "QTc prolongation (rare)", "Tremor and ataxia"],
    precautions: [
      'Additive <span class="hl hl--warn">CNS depression</span> with prehospital <span class="hl hl--drug">midazolam</span>, <span class="hl hl--drug">fentanyl</span>, and <span class="hl hl--drug">ketamine</span>.',
      'Alpha-1 antagonism causes <span class="hl hl--ci">orthostatic hypotension</span> — compounded by dehydration or concurrent antihypertensives.',
      'Risk of <span class="hl hl--ci">neuroleptic malignant syndrome</span> — hyperthermia, rigidity, altered mental status, and autonomic instability.',
      'Impaired <span class="hl hl--warn">thermoregulation</span> — increased risk of heat-related illness in hot environments or with exertion.',
      '<span class="hl hl--drug">Ondansetron</span> coadministration carries additive <span class="hl hl--warn">QTc prolongation</span> risk.'
    ],
    summary: "Aripiprazole is an atypical antipsychotic with partial D2 agonist activity, prescribed across a wide range of psychiatric conditions including schizophrenia, bipolar mania, and adjunctive MDD treatment. Its overdose profile is relatively benign compared to other antipsychotics — predominantly sedation and mild hemodynamic changes — but NMS remains a risk with any antipsychotic. The key prehospital concerns are additive CNS depression with sedatives and orthostatic hypotension from alpha-1 blockade, particularly in volume-depleted patients."
  },
  {
    id: "risperidone",
    genericName: "Risperidone",
    tradeNames: ["Risperdal", "Risperdal M-Tab"],
    category: ["Psychiatric"],
    classes: ["atypical_antipsychotic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Schizophrenia", "Bipolar I (acute mania)", "Irritability (autism-related)"],
    comorbidities: ["Metabolic syndrome", "Type 2 diabetes", "Hypertension", "Substance use disorder", "Depression"],
    polypharmacy: ["Mood stabilizers (lithium, valproate)", "SSRIs (sertraline, fluoxetine)", "Benzodiazepines (lorazepam, clonazepam)", "Metformin", "Benztropine"],
    overdoseToxicity: ["Tachycardia", "Orthostatic hypotension", "Extrapyramidal symptoms (dystonia)", "QTc prolongation", "Sedation progressing to CNS depression"],
    precautions: [
      '<span class="hl hl--ci">Neuroleptic malignant syndrome</span> — fever, lead-pipe rigidity, autonomic instability, and altered mental status.',
      'Alpha-1 blockade causes <span class="hl hl--ci">orthostatic hypotension</span> — exaggerated in hypovolemic or dehydrated patients.',
      '<span class="hl hl--drug">Epinephrine</span> beta stimulation may worsen hypotension in the setting of risperidone-induced alpha blockade; <span class="hl hl--drug">norepinephrine</span> is preferred.',
      '<span class="hl hl--warn">Impaired thermoregulation</span> — patients are vulnerable to both heat stroke and hypothermia.',
      '<span class="hl hl--drug">Ondansetron</span> and other QT-prolonging agents carry additive <span class="hl hl--warn">QTc prolongation</span> risk.'
    ],
    summary: "Risperidone is an atypical antipsychotic used for schizophrenia, bipolar mania, and autism-related irritability. Its alpha-1 antagonism causes orthostatic hypotension that worsens with dehydration or concurrent antihypertensives. In overdose, expect tachycardia and extrapyramidal symptoms (especially dystonia) rather than deep sedation — cardiac toxicity is uncommon with risperidone alone. Key prehospital flags: NMS risk with any antipsychotic, impaired thermoregulation, and avoid epinephrine for hypotension since beta stimulation can paradoxically drop BP further."
  },
  {
    id: "haloperidol",
    genericName: "Haloperidol",
    tradeNames: ["Haldol", "Haldol Decanoate"],
    category: ["Psychiatric"],
    classes: ["typical_antipsychotic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Schizophrenia", "Acute psychosis", "Tourette syndrome", "Severe behavioral disturbance"],
    comorbidities: ["Schizophrenia", "Bipolar disorder", "Substance use disorder", "Dementia"],
    polypharmacy: ["Benztropine", "Benzodiazepines (lorazepam, clonazepam)", "Mood stabilizers (lithium, valproic acid)", "SSRIs (sertraline, fluoxetine)", "Atypical antipsychotics (quetiapine, risperidone)"],
    overdoseToxicity: ["Severe extrapyramidal symptoms (rigidity, dystonia, tremor)", "Hypotension progressing to circulatory collapse", "Deep sedation to coma with respiratory depression", "QT prolongation and torsades de pointes", "Neuroleptic malignant syndrome (hyperthermia, rigidity, autonomic instability)"],
    precautions: [
      '<span class="hl hl--ci">QT prolongation</span> and <span class="hl hl--ci">torsades de pointes</span> risk — additive with <span class="hl hl--drug">ondansetron</span>, <span class="hl hl--drug">amiodarone</span>, and other QT-prolonging agents.',
      '<span class="hl hl--drug">Epinephrine</span> is contraindicated for haloperidol-induced hypotension — causes <span class="hl hl--ci">paradoxical BP drop</span> due to unopposed beta-2 stimulation.',
      'Acute <span class="hl hl--ci">dystonic reactions</span> (torticollis, oculogyric crisis, laryngospasm) can occur and may compromise the airway.',
      '<span class="hl hl--warn">Neuroleptic malignant syndrome</span> presents as hyperthermia, lead-pipe rigidity, altered mental status, and autonomic instability — mimics sepsis.',
      'Lowers the <span class="hl hl--warn">seizure threshold</span> — relevant in patients with known epilepsy or concurrent use of <span class="hl hl--drug">phenytoin</span> or other anticonvulsants.'
    ],
    summary: "Haloperidol is a high-potency typical antipsychotic prescribed for schizophrenia, acute psychosis, and Tourette syndrome. It carries significant QT prolongation risk, especially at higher doses or with concurrent QT-prolonging medications — cardiac monitoring is critical in overdose. Extrapyramidal symptoms are the hallmark adverse effect and can be severe, including airway-threatening dystonia. Epinephrine is contraindicated for haloperidol-induced hypotension; use norepinephrine or phenylephrine instead."
  },
  {
    id: "lithium",
    genericName: "Lithium",
    tradeNames: ["Lithobid", "Eskalith"],
    category: ["Psychiatric"],
    classes: ["mood_stabilizer"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Bipolar I disorder (acute mania)", "Bipolar I disorder (maintenance)"],
    comorbidities: ["Depression", "Anxiety disorders", "Hypothyroidism (drug-induced)", "Chronic kidney disease", "Substance use disorder"],
    polypharmacy: ["Atypical antipsychotics (quetiapine, aripiprazole)", "SSRIs (sertraline, fluoxetine)", "Benzodiazepines (lorazepam, clonazepam)", "Levothyroxine", "Valproic Acid"],
    overdoseToxicity: ["Coarse tremor, hyperreflexia, and clonus", "Confusion progressing to delirium, seizures, and coma", "Bradycardia and hypotension", "Hyperthermia", "Nausea, vomiting, and diarrhea"],
    precautions: [
      'Extremely <span class="hl hl--warn">narrow therapeutic index</span> — toxicity occurs at levels just above the therapeutic range (0.8–1.2 mEq/L).',
      'Dehydration, <span class="hl hl--ci">sodium depletion</span>, and renal impairment rapidly increase lithium levels — any volume loss on scene is a red flag.',
      'Coadministration with <span class="hl hl--drug">serotonergic drugs</span> increases risk of <span class="hl hl--ci">serotonin syndrome</span>.',
      'Activated charcoal does <span class="hl hl--warn">not adsorb lithium</span> — standard GI decontamination is ineffective.',
      'Chronic toxicity presents primarily with <span class="hl hl--ci">neurological findings</span> (ataxia, tremor, altered mental status) and may occur at lower serum levels than acute ingestion.'
    ],
    summary: "Lithium is the cornerstone mood stabilizer for bipolar disorder, with a notoriously narrow therapeutic window. Its presence on a med list flags a patient at risk for toxicity from any cause of dehydration or sodium loss — vomiting, diarrhea, heat exposure, or diuretic use. Toxicity is primarily neurological: tremor, ataxia, confusion, and seizures, with cardiac effects including bradycardia and ECG changes. No antidote exists, and activated charcoal is ineffective against lithium."
  },
  {
    id: "hydrocodone-acetaminophen",
    genericName: "Hydrocodone/Acetaminophen",
    tradeNames: ["Vicodin", "Norco", "Lortab"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["opioid_analgesic", "analgesic", "antipyretic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Moderate to severe pain", "Postoperative pain", "Trauma pain", "Cancer pain"],
    comorbidities: ["Chronic pain syndrome", "Opioid use disorder", "Depression", "Osteoarthritis", "Low back pain"],
    polypharmacy: ["Benzodiazepines (alprazolam, lorazepam)", "Gabapentin", "Muscle relaxants (cyclobenzaprine)", "SSRIs (sertraline, fluoxetine)", "NSAIDs (ibuprofen, naproxen)"],
    overdoseToxicity: [
      "Respiratory depression progressing to apnea",
      "Pinpoint pupils (miosis) with altered mental status",
      "Hypotension and bradycardia",
      "Delayed hepatic necrosis from acetaminophen component (may not manifest for 48–72 hours)",
      "Noncardiogenic pulmonary edema"
    ],
    precautions: [
      'Concurrent <span class="hl hl--drug">benzodiazepine</span> use dramatically increases the risk of fatal <span class="hl hl--ci">respiratory depression</span>.',
      '<span class="hl hl--drug">Naloxone</span> reversal may be shorter-acting than hydrocodone — <span class="hl hl--warn">recurrent respiratory depression</span> can occur after initial improvement.',
      'The acetaminophen component causes <span class="hl hl--ci">hepatotoxicity</span> in overdose that may not be clinically apparent for 48–72 hours.',
      'Chronic use causes <span class="hl hl--warn">opioid tolerance</span> — standard analgesic doses of <span class="hl hl--drug">fentanyl</span> or <span class="hl hl--drug">morphine</span> may be ineffective.',
      'Abrupt discontinuation in dependent patients triggers <span class="hl hl--ci">withdrawal</span> — tachycardia, hypertension, agitation, and diaphoresis.'
    ],
    summary: "Hydrocodone/acetaminophen is the most frequently prescribed opioid in the U.S. and among the most common drugs encountered in overdose calls. Its dual-threat toxicity — acute respiratory depression from hydrocodone plus delayed hepatic necrosis from acetaminophen — makes it particularly dangerous because the patient may appear to recover from naloxone reversal while liver injury progresses silently. Expect co-ingestion with benzodiazepines or alcohol, which compounds CNS and respiratory depression."
  },
  {
    id: "oxycodone",
    genericName: "Oxycodone",
    tradeNames: ["Percocet", "OxyContin", "Roxicodone", "Xtampza ER"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["opioid_analgesic", "analgesic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Moderate to severe pain", "Chronic pain (extended-release)"],
    comorbidities: ["Chronic back pain", "Osteoarthritis", "Cancer", "Opioid use disorder", "Depression"],
    polypharmacy: ["Benzodiazepines (alprazolam, clonazepam)", "Gabapentin", "Muscle relaxants (cyclobenzaprine)", "Antidepressants (sertraline, duloxetine)", "Acetaminophen"],
    overdoseToxicity: [
      "Respiratory depression progressing to apnea",
      "Pinpoint pupils (miosis)",
      "Bradycardia and hypotension",
      "Cold, clammy skin with muscle flaccidity",
      "Decreased level of consciousness progressing to coma"
    ],
    precautions: [
      'Concurrent <span class="hl hl--drug">benzodiazepine</span> or alcohol use dramatically increases risk of <span class="hl hl--ci">fatal respiratory depression</span>.',
      '<span class="hl hl--drug">Naloxone</span> duration is shorter than oxycodone — monitor for <span class="hl hl--warn">recurrent respiratory depression</span> after reversal.',
      'Extended-release formulations (OxyContin) cause <span class="hl hl--warn">prolonged toxicity</span> that may outlast multiple naloxone doses.',
      '<span class="hl hl--drug">Fentanyl</span> and <span class="hl hl--drug">midazolam</span> administered prehospitally compound existing <span class="hl hl--ci">CNS and respiratory depression</span>.',
      'Abrupt <span class="hl hl--drug">naloxone</span> reversal in dependent patients can precipitate <span class="hl hl--ci">acute withdrawal</span> — vomiting, agitation, and combativeness.'
    ],
    summary: "Oxycodone is a potent semi-synthetic opioid prescribed for moderate to severe pain. Finding it on a med list — especially OxyContin — signals a patient with significant pain burden and high risk for opioid dependence. Overdose presents with the classic opioid triad: miosis, respiratory depression, and decreased consciousness. Extended-release formulations pose a particular prehospital challenge because toxicity can recur after naloxone wears off, requiring sustained monitoring and potentially repeated dosing."
  },
  {
    id: "tramadol",
    genericName: "Tramadol",
    tradeNames: ["Ultram", "Ultram ER", "ConZip"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["opioid_analgesic", "analgesic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Moderate to moderately severe pain"],
    comorbidities: ["Chronic musculoskeletal pain", "Osteoarthritis", "Neuropathic pain", "Depression or anxiety", "History of substance use"],
    polypharmacy: ["SSRIs (sertraline, escitalopram, fluoxetine)", "SNRIs (venlafaxine, duloxetine)", "Gabapentin", "Acetaminophen", "NSAIDs (ibuprofen, naproxen)"],
    overdoseToxicity: [
      "Seizures, often dose-related and distinct from typical opioid overdose",
      "Respiratory depression progressing to apnea",
      "Tachycardia and hypertension (atypical for opioid OD)",
      "Altered mental status progressing to coma",
      "Serotonin toxicity when co-ingested with serotonergic drugs"
    ],
    precautions: [
      'Dual mechanism (mu-agonist + serotonin/NE reuptake inhibition) means overdose presents <span class="hl hl--warn">atypically for an opioid</span> — expect seizures, tachycardia, and hypertension alongside sedation.',
      'High <span class="hl hl--ci">serotonin syndrome</span> risk when combined with SSRIs, SNRIs, or MAOIs — look for agitation, clonus, hyperthermia, and diaphoresis.',
      '<span class="hl hl--drug">Naloxone</span> only partially reverses tramadol toxicity and may <span class="hl hl--ci">lower the seizure threshold</span> further.',
      'Avoid <span class="hl hl--drug">fentanyl</span> for analgesia in tramadol-toxic patients — serotonergic properties can worsen toxicity.',
      '<span class="hl hl--drug">Midazolam</span> is first-line for tramadol-induced <span class="hl hl--ci">seizures</span>, not naloxone.'
    ],
    summary: "Tramadol is a synthetic opioid with a dual mechanism — weak mu-receptor agonism plus serotonin and norepinephrine reuptake inhibition. This dual action makes its overdose presentation uniquely dangerous: seizures and serotonin toxicity layer on top of classic opioid effects. Many patients on tramadol are co-prescribed antidepressants, which compounds the serotonin risk. Naloxone addresses the opioid component but does not prevent seizures and may worsen them — benzodiazepines are the critical intervention."
  },
  {
    id: "acetaminophen",
    genericName: "Acetaminophen",
    tradeNames: ["Tylenol", "Tylenol Extra Strength"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["analgesic", "antipyretic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Mild to moderate pain", "Fever", "Osteoarthritis", "Headache"],
    comorbidities: ["Chronic pain", "Osteoarthritis", "Alcohol use disorder", "Chronic liver disease"],
    polypharmacy: ["Opioid analgesics (hydrocodone, oxycodone)", "NSAIDs (ibuprofen, naproxen)", "Muscle relaxants (cyclobenzaprine)", "Anticoagulants (warfarin)"],
    overdoseToxicity: [
      "Initially asymptomatic — nausea, vomiting, and diaphoresis may be the only early findings",
      "Hepatotoxicity with transaminases exceeding 10,000 IU/L at 72–96 hours",
      "Fulminant hepatic failure with coagulopathy, encephalopathy, and hypoglycemia",
      "Acute renal failure from tubular necrosis",
      "Metabolic acidosis with elevated lactate in massive ingestions"
    ],
    precautions: [
      'Patients often take <span class="hl hl--warn">multiple acetaminophen-containing products</span> without realizing it — combination opioids (Norco, Percocet) are a major source of unintentional overdose.',
      'Toxicity is <span class="hl hl--ci">initially asymptomatic</span> — a well-appearing patient does not rule out a lethal ingestion.',
      'Chronic alcohol use depletes glutathione and <span class="hl hl--warn">lowers the threshold for hepatotoxicity</span>.',
      '<span class="hl hl--drug">Warfarin</span> effect is potentiated by regular acetaminophen use — expect elevated INR.',
      'Obtaining <span class="hl hl--warn">time of ingestion</span> is critical for hospital treatment decisions — document it in the PCR.'
    ],
    summary: "Acetaminophen is ubiquitous — found in OTC pain relievers, cold medicines, and combination opioid prescriptions. Its overdose is the leading cause of acute liver failure in the United States, yet patients are often asymptomatic for the first 24 hours after a toxic ingestion. The prehospital priority is documenting the time of ingestion, the amount, and whether the patient takes other acetaminophen-containing products. Chronic alcohol use and liver disease significantly increase the risk of hepatotoxicity at lower doses."
  },
  {
    id: "ibuprofen",
    genericName: "Ibuprofen",
    tradeNames: ["Advil", "Motrin"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["nsaid", "analgesic", "antipyretic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Osteoarthritis", "Rheumatoid arthritis", "Mild to moderate pain", "Dysmenorrhea", "Fever"],
    comorbidities: ["Chronic low back pain", "Osteoarthritis", "Coronary artery disease", "Chronic kidney disease", "Peptic ulcer disease"],
    polypharmacy: ["Antihypertensives (lisinopril, amlodipine)", "Aspirin", "Proton pump inhibitors (omeprazole, pantoprazole)", "Anticoagulants (warfarin, apixaban)", "Acetaminophen"],
    overdoseToxicity: ["GI hemorrhage", "Metabolic acidosis (high anion gap)", "CNS depression progressing to seizures and coma", "Acute kidney injury", "Thrombocytopenia"],
    precautions: [
      'Chronic use can attenuate the <span class="hl hl--warn">antiplatelet effect</span> of <span class="hl hl--drug">aspirin</span> — relevant when administering prehospital aspirin for ACS.',
      'Increases <span class="hl hl--ci">bleeding risk</span> in patients on anticoagulants or antiplatelets through platelet inhibition and GI mucosal injury.',
      'Can cause <span class="hl hl--ci">acute kidney injury</span>, especially in hypovolemic or hypotensive patients — renal perfusion is already compromised.',
      'May elevate blood pressure and <span class="hl hl--warn">blunt the effect of antihypertensives</span> — a hypertensive emergency in a chronic NSAID user may be drug-related.',
      'GI bleeding from chronic NSAID use can present as <span class="hl hl--ci">occult hemorrhagic shock</span> — melena, pallor, and unexplained tachycardia.'
    ],
    summary: "Ibuprofen is the most widely used NSAID, taken for everything from arthritis to headaches. Its presence on a med list raises the bleeding risk profile — both from direct GI mucosal injury and platelet inhibition. For prehospital care, the key interaction is with aspirin: chronic ibuprofen can block aspirin's cardioprotective antiplatelet effect, which matters when giving aspirin for suspected ACS. In overdose, most patients have only mild GI symptoms, but massive ingestions can cause metabolic acidosis, seizures, and renal failure."
  },
  {
    id: "naproxen",
    genericName: "Naproxen",
    tradeNames: ["Aleve", "Naprosyn", "Anaprox", "EC-Naprosyn"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["nsaid", "analgesic", "antipyretic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Osteoarthritis", "Rheumatoid arthritis", "Acute gout", "Chronic pain", "Dysmenorrhea"],
    comorbidities: ["Osteoarthritis", "Rheumatoid arthritis", "Gout", "Chronic low back pain", "Coronary artery disease"],
    polypharmacy: ["PPIs (omeprazole, pantoprazole)", "Acetaminophen", "Antihypertensives (lisinopril, amlodipine)", "Anticoagulants (warfarin, apixaban)", "SSRIs (sertraline, escitalopram)"],
    overdoseToxicity: ["Drowsiness, lethargy, or coma", "Metabolic acidosis", "Seizures", "Acute renal failure", "GI hemorrhage"],
    precautions: [
      'Concurrent use with <span class="hl hl--drug">anticoagulants</span> nearly doubles the risk of <span class="hl hl--ci">GI hemorrhage</span>.',
      'Inhibits platelet aggregation and can interfere with <span class="hl hl--drug">aspirin</span>\u2019s cardioprotective antiplatelet effect.',
      'Reduces efficacy of <span class="hl hl--warn">antihypertensives</span> (ACE inhibitors, ARBs, diuretics) and can worsen renal function when combined.',
      'Raises serum <span class="hl hl--drug">lithium</span> and <span class="hl hl--drug">methotrexate</span> levels, increasing toxicity risk.',
      'Chronic use can cause <span class="hl hl--ci">occult GI bleeding</span> presenting as unexplained anemia or hemorrhagic shock.'
    ],
    summary: "Naproxen is a long-acting NSAID taken for arthritis, gout, and chronic pain. Its 12–15 hour half-life means antiplatelet effects persist longer than shorter-acting NSAIDs like ibuprofen. The primary prehospital concerns are bleeding risk — especially in patients co-prescribed anticoagulants or antiplatelet agents — and the potential to mask tachycardia by reducing pain-driven sympathetic tone in patients with occult hemorrhage. In overdose, most cases are benign, but massive ingestions can produce metabolic acidosis, seizures, and renal failure."
  },
  {
    id: "meloxicam",
    genericName: "Meloxicam",
    tradeNames: ["Mobic"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["nsaid", "analgesic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Osteoarthritis", "Rheumatoid arthritis", "Juvenile rheumatoid arthritis"],
    comorbidities: ["Hypertension", "Chronic kidney disease", "Coronary artery disease", "Type 2 diabetes", "Obesity"],
    polypharmacy: ["Antihypertensives (lisinopril, amlodipine, metoprolol)", "PPIs (omeprazole, pantoprazole)", "Statins (atorvastatin)", "Metformin", "Acetaminophen"],
    overdoseToxicity: ["Nausea, vomiting, and epigastric pain", "GI hemorrhage (hematemesis, melena)", "Acute renal failure", "Metabolic acidosis", "Drowsiness progressing to coma in massive ingestions"],
    precautions: [
      'Concurrent <span class="hl hl--drug">anticoagulants</span> (warfarin, apixaban, rivaroxaban) significantly increases <span class="hl hl--ci">bleeding risk</span> without reliable clinical warning signs.',
      'Reduces efficacy of <span class="hl hl--drug">ACE inhibitors</span>, ARBs, beta blockers, and diuretics — blood pressure may be higher than expected.',
      'Can cause <span class="hl hl--ci">acute renal failure</span> in dehydrated or hypovolemic patients by inhibiting prostaglandin-mediated renal perfusion.',
      'Concurrent <span class="hl hl--drug">SSRIs/SNRIs</span> impair platelet function and compound <span class="hl hl--warn">GI bleeding risk</span>.',
      'Aspirin-sensitive patients may develop <span class="hl hl--ci">bronchospasm</span> or anaphylaxis — cross-reactivity exists across all NSAIDs.'
    ],
    summary: "Meloxicam is a COX-2 preferential NSAID prescribed for osteoarthritis and rheumatoid arthritis. Its presence signals a patient with chronic joint disease who likely has cardiovascular comorbidities and a multi-drug regimen including antihypertensives. The primary prehospital concerns are occult GI bleeding — especially when combined with anticoagulants or antiplatelet agents — and the risk of acute renal injury in any patient who is dehydrated or hypotensive. NSAIDs also blunt the effectiveness of most antihypertensive classes, so blood pressure readings may not reflect the patient's usual baseline."
  },
  {
    id: "cyclobenzaprine",
    genericName: "Cyclobenzaprine",
    tradeNames: ["Flexeril", "Amrix"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["muscle_relaxant"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Acute musculoskeletal spasm"],
    comorbidities: ["Chronic low back pain", "Cervical strain", "Fibromyalgia", "Osteoarthritis"],
    polypharmacy: ["NSAIDs (ibuprofen, naproxen)", "Opioid Analgesics (hydrocodone, oxycodone)", "Benzodiazepines (diazepam)", "Gabapentin", "SSRIs (sertraline, escitalopram)"],
    overdoseToxicity: ["Anticholinergic toxidrome — tachycardia, mydriasis, dry skin, agitated delirium", "QRS widening and cardiac dysrhythmias", "Seizures", "CNS depression progressing to coma", "Hypotension"],
    precautions: [
      'Structurally related to TCAs — overdose produces <span class="hl hl--ci">QRS widening</span> and cardiac dysrhythmias mimicking tricyclic toxicity.',
      'Potent <span class="hl hl--warn">anticholinergic effects</span> — expect tachycardia, altered mental status, and urinary retention at therapeutic and toxic doses.',
      'Combined with SSRIs or SNRIs, risk of <span class="hl hl--ci">serotonin syndrome</span> — agitation, clonus, hyperthermia, diaphoresis.',
      'Enhances CNS depression from <span class="hl hl--drug">opioids</span>, benzodiazepines, and alcohol — may mask respiratory compromise.',
      'Concurrent use with <span class="hl hl--drug">MAOIs</span> is contraindicated — risk of hyperpyretic crisis, seizures, and death.'
    ],
    summary: "Cyclobenzaprine is a centrally acting muscle relaxant structurally related to tricyclic antidepressants, prescribed short-term for acute musculoskeletal spasm. Its presence on a med list flags a patient likely taking multiple analgesics and CNS depressants — particularly opioids and benzodiazepines — raising the risk of compounded sedation and respiratory depression. In overdose, it produces an anticholinergic toxidrome with the added threat of TCA-like cardiotoxicity including QRS widening. Any altered patient on cyclobenzaprine warrants a 12-lead ECG and close monitoring for rapid deterioration."
  },
  {
    id: "amphetamine-salts",
    genericName: "Amphetamine Salts",
    tradeNames: ["Adderall", "Adderall XR"],
    category: ["Psychiatric", "Neurological"],
    classes: ["cns_stimulant", "sympathomimetic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["ADHD", "Narcolepsy"],
    comorbidities: ["Anxiety disorders", "Depression", "Substance use disorder", "Insomnia", "Hypertension"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "SNRIs (venlafaxine, duloxetine)", "Bupropion", "Benzodiazepines (alprazolam, clonazepam)", "Antihypertensives (lisinopril, amlodipine)"],
    overdoseToxicity: ["Sympathomimetic toxidrome — tachycardia, hypertension, hyperthermia, mydriasis, diaphoresis", "Severe agitation, psychosis, and hallucinations", "Seizures", "Rhabdomyolysis", "Cardiac dysrhythmias, including acute coronary syndrome and aortic dissection"],
    precautions: [
      'Produces a <span class="hl hl--ci">sympathomimetic surge</span> — expect elevated HR and BP at baseline; hypertension and tachycardia may be drug-related rather than pathological.',
      'Combined with SSRIs, SNRIs, or <span class="hl hl--drug">fentanyl</span>, risk of <span class="hl hl--ci">serotonin syndrome</span> — agitation, clonus, hyperthermia.',
      'Contraindicated within 14 days of <span class="hl hl--drug">MAOIs</span> — risk of <span class="hl hl--ci">hypertensive crisis</span>.',
      '<span class="hl hl--warn">Beta-blockers are contraindicated</span> in acute amphetamine toxicity — risk of unopposed alpha-adrenergic stimulation worsening hypertension.',
      'Schedule II controlled substance with high abuse potential — <span class="hl hl--warn">consider misuse or diversion</span> in overdose presentations.'
    ],
    summary: "Amphetamine salts are a mixed-isomer CNS stimulant prescribed for ADHD and narcolepsy. Patients on this medication often have baseline elevations in heart rate and blood pressure that complicate assessment. In overdose or misuse, the drug produces a classic sympathomimetic toxidrome — tachycardia, hypertension, hyperthermia, agitation, and psychosis — with life-threatening complications including seizures, rhabdomyolysis, and acute coronary syndrome. Beta-blockers are avoided in acute toxicity due to the risk of unopposed alpha stimulation."
  },
  {
    id: "methylphenidate",
    genericName: "Methylphenidate",
    tradeNames: ["Ritalin", "Ritalin LA", "Concerta", "Daytrana", "Metadate CD", "Methylin"],
    category: ["Psychiatric", "Neurological"],
    classes: ["cns_stimulant", "sympathomimetic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["ADHD", "Narcolepsy"],
    comorbidities: ["Anxiety disorders", "Depression", "Insomnia", "Tic disorders", "Substance use disorder"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "SNRIs (venlafaxine, duloxetine)", "Bupropion", "Alpha-2 agonists (clonidine, guanfacine)", "Benzodiazepines (alprazolam, clonazepam)"],
    overdoseToxicity: ["Sympathomimetic toxidrome — tachycardia, hypertension, mydriasis, diaphoresis", "Agitation, hallucinations, and psychosis", "Seizures", "Hyperthermia", "Cardiac dysrhythmias"],
    precautions: [
      'Contraindicated within 14 days of <span class="hl hl--drug">MAOIs</span> — risk of <span class="hl hl--ci">hypertensive crisis</span>.',
      'Produces baseline <span class="hl hl--warn">elevated HR and BP</span> — tachycardia and hypertension may be drug-related rather than pathological.',
      'Combined with SSRIs, SNRIs, or <span class="hl hl--drug">fentanyl</span>, risk of <span class="hl hl--ci">serotonin syndrome</span> — agitation, clonus, hyperthermia.',
      '<span class="hl hl--warn">Beta-blockers are contraindicated</span> in acute stimulant toxicity — risk of unopposed alpha stimulation worsening hypertension.',
      'Reduces effectiveness of <span class="hl hl--drug">antihypertensives</span> — patient may have poorly controlled blood pressure despite being prescribed BP meds.'
    ],
    summary: "Methylphenidate is a CNS stimulant prescribed for ADHD and narcolepsy that blocks dopamine and norepinephrine reuptake. Patients taking it have baseline elevations in heart rate and blood pressure, complicating hemodynamic assessment. Overdose produces a sympathomimetic toxidrome — tachycardia, hypertension, agitation, hyperthermia, and seizures. Extended-release formulations can delay toxicity onset and prolong symptoms, so asymptomatic patients with recent ER ingestion still warrant monitoring."
  },
  {
    id: "diphenhydramine",
    genericName: "Diphenhydramine",
    tradeNames: ["Benadryl", "ZzzQuil", "Sominex", "Unisom SleepGels"],
    category: ["Psychiatric"],
    classes: ["antihistamine", "anticholinergic", "sedative"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Allergic rhinitis", "Urticaria", "Insomnia (short-term)", "Motion sickness", "Drug-induced parkinsonism"],
    comorbidities: ["Seasonal allergies", "Chronic insomnia", "Anxiety", "Eczema / dermatitis", "GERD"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "Benzodiazepines (alprazolam, lorazepam)", "Proton pump inhibitors (omeprazole)", "Cetirizine", "Melatonin"],
    overdoseToxicity: [
      "Anticholinergic toxidrome — tachycardia, mydriasis, dry skin, hyperthermia, delirium",
      "Seizures, particularly at ingestions exceeding 1 gram",
      "QRS widening and QT prolongation with risk of torsades de pointes",
      "Agitated delirium with hallucinations and combativeness",
      "Rhabdomyolysis from prolonged agitation or seizures"
    ],
    precautions: [
      'Produces <span class="hl hl--ci">anticholinergic toxidrome</span> in overdose — dry skin, mydriasis, delirium, tachycardia, and hyperthermia.',
      'Sodium channel blockade causes <span class="hl hl--ci">QRS widening</span> similar to TCA overdose — cardiac arrest risk in large ingestions.',
      'Additive CNS and respiratory depression when combined with <span class="hl hl--drug">opioids</span>, benzodiazepines, or alcohol.',
      'Anticholinergic effects stack with other anticholinergic drugs — <span class="hl hl--warn">polypharmacy risk in elderly patients</span> taking multiple anticholinergics.',
      'OTC availability and "Benadryl challenge" trends make <span class="hl hl--warn">intentional overdose</span> a frequent prehospital encounter.'
    ],
    summary: "Diphenhydramine is a first-generation antihistamine with strong anticholinergic and sedative properties, found in countless OTC allergy and sleep products. Its ubiquity makes it one of the most frequently encountered overdose agents in the field. Toxicity produces a classic anticholinergic toxidrome — hot, dry, flushed, tachycardic, and delirious — but also causes sodium channel blockade with QRS widening and arrhythmia risk that mirrors TCA overdose. Any altered patient with tachycardia, dry skin, and mydriasis should prompt consideration of diphenhydramine ingestion."
  },
  {
    id: "cetirizine",
    genericName: "Cetirizine",
    tradeNames: ["Zyrtec", "Zyrtec-D"],
    category: ["Pulmonary"],
    classes: ["antihistamine"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Allergic rhinitis", "Chronic urticaria", "Allergic conjunctivitis"],
    comorbidities: ["Asthma", "Eczema / atopic dermatitis", "Chronic sinusitis", "Food allergies"],
    polypharmacy: ["Inhaled corticosteroids (fluticasone, budesonide)", "Montelukast", "Albuterol", "Nasal corticosteroids (fluticasone, mometasone)", "Epinephrine auto-injector"],
    overdoseToxicity: null,
    precautions: [
      'Additive <span class="hl hl--ci">CNS depression</span> when combined with opioids, benzodiazepines, or alcohol.',
      'Dose-dependent <span class="hl hl--warn">somnolence</span> — more sedating than loratadine or fexofenadine among second-generation antihistamines.',
      'Primarily renally excreted — toxicity risk increases in <span class="hl hl--warn">renal impairment</span>.',
      'Used as an adjunct to <span class="hl hl--drug">epinephrine</span> in anaphylaxis — its presence on a med list may signal a history of severe allergic reactions.'
    ],
    summary: "Cetirizine is a second-generation H1 antihistamine used for allergic rhinitis and chronic hives. Its presence on a med list often signals an atopic patient who may also have asthma, eczema, or anaphylaxis history — check for an epinephrine auto-injector. Cetirizine is less sedating than diphenhydramine but more sedating than other second-generation antihistamines, and combined CNS depressant use can amplify drowsiness. Overdose is generally benign with supportive care, but large ingestions warrant cardiac monitoring."
  },
  {
    id: "loratadine",
    genericName: "Loratadine",
    tradeNames: ["Claritin", "Claritin-D", "Alavert"],
    category: ["Pulmonary"],
    classes: ["antihistamine"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Allergic rhinitis", "Urticaria (chronic)", "Atopic dermatitis (adjunct)"],
    comorbidities: ["Asthma", "Eczema / atopic dermatitis", "Chronic sinusitis", "Food or drug allergies"],
    polypharmacy: ["Inhaled corticosteroids (fluticasone, budesonide)", "Albuterol", "Montelukast", "Nasal corticosteroids (fluticasone nasal)", "Epinephrine auto-injector"],
    overdoseToxicity: ["Tachycardia", "QT prolongation (supratherapeutic doses)", "Anticholinergic symptoms (mydriasis, urinary retention, flushing)", "Agitation or drowsiness"],
    precautions: [
      'Supratherapeutic doses can cause <span class="hl hl--ci">QT prolongation</span> and cardiac arrhythmias — especially in elderly patients.',
      'Metabolized by <span class="hl hl--warn">CYP3A4 and CYP2D6</span> — hepatic or renal impairment increases drug levels and toxicity risk.',
      'Minimal anticholinergic effects at therapeutic doses, but overdose produces a full <span class="hl hl--ci">anticholinergic toxidrome</span>.',
      'Combined use with other CNS depressants (including <span class="hl hl--drug">diphenhydramine</span>) can cause additive sedation.',
      'Used as an adjunct to <span class="hl hl--drug">epinephrine</span> in anaphylaxis — its presence on a med list may signal a history of severe allergic reactions.'
    ],
    summary: "Loratadine is a second-generation H1 antihistamine used for allergic rhinitis and chronic urticaria. It is largely nonsedating at therapeutic doses and has minimal anticholinergic effects, making it lower-risk than first-generation antihistamines like diphenhydramine. Its presence on a med list signals an atopic patient who may also carry an epinephrine auto-injector and have comorbid asthma. Overdose is generally mild, but large ingestions can produce anticholinergic symptoms and QT prolongation warranting cardiac monitoring."
  },
  {
    id: "hydroxychloroquine",
    genericName: "Hydroxychloroquine",
    tradeNames: ["Plaquenil"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["antirheumatic", "antimalarial"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Rheumatoid arthritis", "Systemic lupus erythematosus", "Discoid lupus erythematosus", "Malaria prophylaxis"],
    comorbidities: ["Systemic lupus erythematosus", "Rheumatoid arthritis", "Chronic kidney disease", "Interstitial lung disease", "Antiphospholipid syndrome"],
    polypharmacy: ["Corticosteroids (prednisone, methylprednisolone)", "Methotrexate", "NSAIDs (ibuprofen, naproxen)", "Immunosuppressants (azathioprine, mycophenolate)", "Anticoagulants (warfarin, apixaban)"],
    overdoseToxicity: ["QRS and QTc prolongation with ventricular arrhythmias", "Life-threatening hypotension", "Severe hypokalemia from intracellular shift", "Seizures and CNS depression", "Hypoglycemia"],
    precautions: [
      'Overdose toxicity onset is rapid — an ambulatory patient can progress to <span class="hl hl--ci">cardiac arrest</span> within minutes.',
      'Sodium and potassium channel blockade causes <span class="hl hl--ci">QRS and QTc prolongation</span> — monitor for wide-complex arrhythmias.',
      'Co-administration with other <span class="hl hl--warn">QTc-prolonging agents</span> (e.g., amiodarone, ondansetron) compounds arrhythmia risk.',
      'Can cause severe <span class="hl hl--ci">hypoglycemia</span> even without concurrent diabetic medications — check glucose.',
      'Causes <span class="hl hl--ci">hemolysis</span> in patients with G6PD deficiency.'
    ],
    summary: "Hydroxychloroquine is a disease-modifying antirheumatic drug used primarily in lupus and rheumatoid arthritis. Its presence on a med list flags an autoimmune patient likely on multiple immunosuppressants and potentially anticoagulated. In overdose, it is a lethal sodium and potassium channel blocker that produces rapid cardiovascular collapse — QRS widening, QTc prolongation, refractory hypotension, and hypokalemia can progress to cardiac arrest within 1–3 hours of ingestion. Epinephrine is the vasopressor of choice in toxicity."
  },
  {
    id: "methotrexate",
    genericName: "Methotrexate",
    tradeNames: ["Trexall", "Otrexup", "Rasuvo", "Xatmep"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["antimetabolite", "dmard"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Rheumatoid arthritis", "Psoriasis", "Acute lymphoblastic leukemia", "Non-Hodgkin lymphoma", "Juvenile idiopathic arthritis"],
    comorbidities: ["Rheumatoid arthritis", "Psoriasis", "Chronic kidney disease", "Hepatic fibrosis", "Interstitial lung disease"],
    polypharmacy: ["Folic acid", "NSAIDs (ibuprofen, naproxen)", "Corticosteroids (prednisone)", "DMARDs (hydroxychloroquine, sulfasalazine)", "Proton pump inhibitors (omeprazole)"],
    overdoseToxicity: ["Pancytopenia and severe myelosuppression", "Hemorrhagic oral ulcers and diffuse mucositis", "Acute renal failure", "Interstitial pneumonitis and respiratory failure", "Hepatotoxicity with elevated transaminases"],
    precautions: [
      'Patient is <span class="hl hl--warn">immunosuppressed</span> — fever or signs of infection may indicate sepsis.',
      '<span class="hl hl--ci">Pancytopenia</span> risk increases with renal impairment — dehydration accelerates toxicity.',
      'Concurrent <span class="hl hl--drug">NSAIDs</span> reduce methotrexate clearance and can precipitate fatal toxicity.',
      'Oral ulcers and mucosal bleeding are early warning signs of <span class="hl hl--ci">systemic toxicity</span>.',
      'Dosed weekly for autoimmune conditions — accidental daily dosing has caused <span class="hl hl--ci">fatal overdose</span>.'
    ],
    summary: "Methotrexate is a folate antimetabolite used as a disease-modifying agent in rheumatoid arthritis and psoriasis, and as chemotherapy in certain malignancies. Its presence on a med list identifies an immunosuppressed patient at risk for opportunistic infections and impaired wound healing. Toxicity targets rapidly dividing cells — oral mucositis, GI hemorrhage, and pancytopenia are hallmarks. NSAIDs and dehydration impair renal clearance and can push therapeutic doses into toxic range."
  },
  {
    id: "colchicine",
    genericName: "Colchicine",
    tradeNames: ["Colcrys", "Mitigare"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["antigout"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Gout flares", "Gout prophylaxis", "Familial Mediterranean fever", "Pericarditis"],
    comorbidities: ["Chronic kidney disease", "Hypertension", "Coronary artery disease", "Metabolic syndrome", "Hyperuricemia"],
    polypharmacy: ["Allopurinol", "NSAIDs (ibuprofen, naproxen)", "Statins (atorvastatin, rosuvastatin)", "Diuretics (hydrochlorothiazide, furosemide)", "ACE Inhibitors (lisinopril)"],
    overdoseToxicity: [
      "Profuse vomiting and diarrhea progressing to hypovolemic shock",
      "Pancytopenia and bone marrow suppression (onset 2–7 days)",
      "Multi-organ failure with cardiovascular collapse",
      "Rhabdomyolysis",
      "Metabolic acidosis with renal failure"
    ],
    precautions: [
      'Extremely <span class="hl hl--ci">narrow therapeutic index</span> — toxicity can occur at doses only slightly above therapeutic range.',
      'No specific antidote exists and <span class="hl hl--warn">colchicine is not removed by dialysis</span>.',
      'Concurrent <span class="hl hl--drug">statin</span> use increases risk of <span class="hl hl--ci">rhabdomyolysis</span> and neuromuscular toxicity.',
      'CYP3A4 and P-glycoprotein inhibitors can cause fatal toxicity even at <span class="hl hl--warn">therapeutic doses</span> in renal/hepatic impairment.',
      'Toxicity onset may be <span class="hl hl--warn">delayed up to 24 hours</span> — GI symptoms are the earliest marker.'
    ],
    summary: "Colchicine is an antigout alkaloid prescribed for gout flares, gout prophylaxis, FMF, and pericarditis. On a med list, it flags a patient with inflammatory or crystal arthropathy and possible renal impairment. Overdose is rare but carries near-100% mortality at high doses, progressing from severe GI fluid loss to multi-organ failure over days. There is no antidote and no effective method of extracorporeal removal — any suspected overdose is a critical toxicology emergency."
  },
  {
    id: "allopurinol",
    genericName: "Allopurinol",
    tradeNames: ["Zyloprim", "Aloprim"],
    category: ["Pain & Anti-inflammatory"],
    classes: ["xanthine_oxidase_inhibitor"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Gout (chronic)", "Hyperuricemia (secondary)", "Tumor lysis syndrome prevention", "Recurrent uric acid nephrolithiasis"],
    comorbidities: ["Chronic kidney disease", "Hypertension", "Type 2 diabetes", "Coronary artery disease", "Nephrolithiasis"],
    polypharmacy: ["Colchicine", "NSAIDs (naproxen, indomethacin)", "Thiazide diuretics (hydrochlorothiazide)", "Warfarin", "ACE Inhibitors (lisinopril, enalapril)"],
    overdoseToxicity: null,
    precautions: [
      'Potentiates <span class="hl hl--drug">warfarin</span> — may enhance anticoagulant effect and increase <span class="hl hl--ci">bleeding risk</span>.',
      'Allopurinol hypersensitivity syndrome (AHS) causes <span class="hl hl--ci">Stevens-Johnson syndrome, toxic epidermal necrolysis, and DRESS</span> — mortality 20–25%.',
      'Concurrent <span class="hl hl--warn">thiazide diuretics and renal impairment</span> significantly increase the risk of hypersensitivity reactions.',
      'Concurrent <span class="hl hl--drug">ACE inhibitors</span> may increase the risk of <span class="hl hl--ci">allergic reactions</span>.',
      'No significant interactions with standard prehospital medications.'
    ],
    summary: "Allopurinol is a xanthine oxidase inhibitor used for chronic gout, hyperuricemia, and tumor lysis syndrome prevention. Its presence on a med list signals a patient with uric acid metabolism problems, often alongside chronic kidney disease, hypertension, and cardiovascular disease. The primary prehospital concern is recognizing allopurinol hypersensitivity syndrome — a rare but frequently fatal reaction presenting as severe rash, fever, hepatitis, and renal failure. Acute overdose is essentially a non-issue; the drug has low acute toxicity."
  },
  {
    id: "alendronate",
    genericName: "Alendronate",
    tradeNames: ["Fosamax", "Binosto"],
    category: ["Endocrine"],
    classes: ["bisphosphonate"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Postmenopausal osteoporosis", "Male osteoporosis", "Glucocorticoid-induced osteoporosis", "Paget disease of bone"],
    comorbidities: ["Osteoporosis", "Vertebral compression fractures", "Chronic kidney disease", "Rheumatoid arthritis (steroid use)", "Vitamin D deficiency"],
    polypharmacy: ["Calcium supplements", "Vitamin D", "Corticosteroids (prednisone)", "Proton pump inhibitors (omeprazole, pantoprazole)", "Levothyroxine"],
    overdoseToxicity: ["Hypocalcemia", "Esophageal ulceration or perforation", "Gastric erosion"],
    precautions: [
      'Concomitant <span class="hl hl--drug">aspirin</span> or NSAIDs increases risk of <span class="hl hl--ci">upper GI ulceration and bleeding</span>.',
      'Can cause <span class="hl hl--ci">symptomatic hypocalcemia</span> — consider in patients presenting with tetany, seizures, or QT prolongation.',
      'Long-term use associated with <span class="hl hl--warn">atypical femoral fractures</span> — hip or thigh pain may indicate an incomplete fracture.',
      '<span class="hl hl--warn">Osteonecrosis of the jaw</span> is a rare but serious complication, especially after dental procedures.',
      'Esophageal irritation and <span class="hl hl--ci">esophageal perforation</span> reported — relevant if patient is supine or has dysphagia.'
    ],
    summary: "Alendronate is a bisphosphonate prescribed for osteoporosis and Paget disease. Its presence on a med list identifies a patient with fragile bones who is at elevated fracture risk from falls or minor trauma. The primary prehospital concerns are recognizing atypical femoral fractures (thigh or groin pain with minimal mechanism) and understanding that concurrent NSAID or aspirin use increases GI bleeding risk. Symptomatic hypocalcemia is rare but possible, particularly in patients with vitamin D deficiency."
  },
  {
    id: "tamsulosin",
    genericName: "Tamsulosin",
    tradeNames: ["Flomax"],
    category: ["Cardiovascular"],
    classes: ["alpha1_antagonist"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Benign prostatic hyperplasia (BPH)"],
    comorbidities: ["Hypertension", "Urinary retention", "Coronary artery disease", "Type 2 diabetes", "Chronic kidney disease"],
    polypharmacy: ["Finasteride", "Antihypertensives (amlodipine, lisinopril)", "PDE5 Inhibitors (sildenafil, tadalafil)", "Statins (atorvastatin)", "Diuretics (furosemide, hydrochlorothiazide)"],
    overdoseToxicity: ["Acute hypotension with systolic BP as low as 70 mmHg", "Reflex tachycardia", "Syncope", "Dizziness and altered mental status"],
    precautions: [
      'Causes <span class="hl hl--ci">orthostatic hypotension</span> and syncope — risk is highest after the first dose or dose increase.',
      'Concurrent <span class="hl hl--drug">PDE5 inhibitors</span> (sildenafil, tadalafil) cause additive <span class="hl hl--ci">hypotension</span>.',
      '<span class="hl hl--drug">Nitroglycerin</span> combined with tamsulosin increases risk of severe hypotension — assess BP carefully before administration.',
      'Elderly patients on concurrent <span class="hl hl--warn">antihypertensives or diuretics</span> are at elevated fall risk.',
      'Intraoperative Floppy Iris Syndrome (<span class="hl hl--warn">IFIS</span>) — relevant if patient reports recent eye surgery complications.'
    ],
    summary: "Tamsulosin is a selective alpha-1A blocker prescribed for urinary symptoms of BPH. Its presence on a med list identifies an older male patient who may be prone to orthostatic hypotension and syncope, especially when combined with antihypertensives, diuretics, or PDE5 inhibitors. Prehospital providers should assess positional blood pressure before administering nitroglycerin or other vasodilators, as tamsulosin reduces vascular tone and can contribute to refractory hypotension."
  },
  {
    id: "sildenafil",
    genericName: "Sildenafil",
    tradeNames: ["Viagra", "Revatio"],
    category: ["Cardiovascular"],
    classes: ["vasodilator"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Erectile dysfunction", "Pulmonary arterial hypertension"],
    comorbidities: ["Coronary artery disease", "Hypertension", "Pulmonary arterial hypertension", "Heart failure", "Benign prostatic hyperplasia"],
    polypharmacy: ["Antihypertensives (amlodipine, lisinopril)", "Nitrates (nitroglycerin, isosorbide)", "Alpha-1 blockers (tamsulosin, doxazosin)", "Anticoagulants (warfarin, apixaban)", "Statins (atorvastatin)"],
    overdoseToxicity: ["Hypotension", "Visual disturbances (blue-tinted vision, light sensitivity)", "Flushing and headache", "Priapism"],
    precautions: [
      '<span class="hl hl--drug">Nitroglycerin</span> is absolutely contraindicated within 24 hours of sildenafil use — combination causes <span class="hl hl--ci">severe, refractory hypotension</span>.',
      'Systemic <span class="hl hl--ci">vasodilation</span> lowers baseline blood pressure — assess hemodynamic status before administering any vasodilator.',
      'Patients may not volunteer PDE5 inhibitor use — <span class="hl hl--warn">actively screen</span> before nitrate administration in chest pain calls.',
      'Additive hypotension with <span class="hl hl--drug">alpha-blockers</span> (tamsulosin, doxazosin) and other antihypertensives.',
      'Prescribed as Revatio (20 mg TID) for <span class="hl hl--warn">pulmonary arterial hypertension</span> — same drug, different indication and dosing schedule.'
    ],
    summary: "Sildenafil is a PDE5 inhibitor encountered in two distinct patient populations: men using it for erectile dysfunction and patients with pulmonary arterial hypertension. The critical prehospital concern is its absolute contraindication with nitrates — administering nitroglycerin within 24 hours of sildenafil use can cause severe, potentially fatal hypotension. Patients often will not disclose PDE5 inhibitor use unprompted, making active screening essential on any chest pain or ACS call."
  },
  {
    id: "tadalafil",
    genericName: "Tadalafil",
    tradeNames: ["Cialis", "Adcirca"],
    category: ["Cardiovascular"],
    classes: ["vasodilator"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Erectile dysfunction", "Benign prostatic hyperplasia", "Pulmonary arterial hypertension"],
    comorbidities: ["Coronary artery disease", "Hypertension", "Type 2 diabetes", "Hyperlipidemia", "BPH / lower urinary tract symptoms"],
    polypharmacy: ["Antihypertensives (amlodipine, lisinopril)", "Statins (atorvastatin, rosuvastatin)", "Alpha-1 blockers (tamsulosin)", "Aspirin", "Metformin"],
    overdoseToxicity: ["Hypotension", "Headache and dizziness", "Priapism"],
    precautions: [
      '<span class="hl hl--drug">Nitroglycerin</span> is absolutely contraindicated within <span class="hl hl--ci">48 hours</span> of tadalafil use — risk of severe, refractory hypotension.',
      'Longer half-life (~17.5 h) than sildenafil — the nitrate-free window extends to <span class="hl hl--warn">48 hours</span>, not 24.',
      'Additive <span class="hl hl--ci">hypotension</span> with alpha-blockers, antihypertensives, and alcohol.',
      'Patients on daily tadalafil (5 mg for BPH) have <span class="hl hl--warn">continuous plasma levels</span> — the nitrate contraindication is effectively permanent while on therapy.',
      'Prescribed as Adcirca (40 mg daily) for <span class="hl hl--warn">pulmonary arterial hypertension</span> — same drug, different indication and dosing schedule.'
    ],
    summary: "Tadalafil is a PDE5 inhibitor used for erectile dysfunction, BPH, and pulmonary arterial hypertension. Its long half-life is the key differentiator from sildenafil: nitrates must be withheld for at least 48 hours after the last dose, and patients taking daily tadalafil for BPH effectively have a permanent nitrate contraindication. On any chest pain or ACS call, screen for tadalafil use — patients frequently take it daily and may not think to mention it."
  },
  {
    id: "testosterone",
    genericName: "Testosterone",
    tradeNames: ["AndroGel", "Testim", "Depo-Testosterone", "Aveed", "Natesto", "Axiron"],
    category: ["Endocrine"],
    classes: ["hormone"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Male hypogonadism", "Delayed puberty", "Transgender hormone therapy"],
    comorbidities: ["Obesity", "Type 2 diabetes", "Depression", "Osteoporosis", "Obstructive sleep apnea"],
    polypharmacy: ["PDE5 inhibitors (sildenafil, tadalafil)", "Anastrozole", "HCG (human chorionic gonadotropin)", "Statins (atorvastatin, rosuvastatin)", "Metformin"],
    overdoseToxicity: null,
    precautions: [
      '<span class="hl hl--ci">Polycythemia</span> — increases hematocrit and blood viscosity, raising risk of MI, stroke, and VTE.',
      'Exacerbates <span class="hl hl--ci">heart failure</span> through fluid retention and edema.',
      'Increases <span class="hl hl--warn">blood pressure</span> — may present with hypertensive crisis in unmonitored use.',
      'Behavioral changes including <span class="hl hl--warn">aggression, mania, and psychosis</span> with supratherapeutic use.',
      'Secondary exposure risk — <span class="hl hl--warn">transdermal gel transfers</span> to household contacts including children and pregnant women on skin contact.'
    ],
    summary: "Testosterone replacement signals a patient with hypogonadism and frequently co-occurring metabolic disease — obesity, diabetes, and cardiovascular risk factors. The primary prehospital concern is polycythemia: elevated hematocrit increases blood viscosity and thrombotic risk, making these patients more susceptible to MI, stroke, and PE. Fluid retention can worsen heart failure, and supratherapeutic or illicit use may produce hypertension, aggression, or acute psychiatric symptoms."
  },
  {
    id: "oral-contraceptives",
    genericName: "Oral Contraceptives",
    tradeNames: ["Loestrin", "Ortho-Novum", "Necon", "Junel", "Microgestin", "Lo Loestrin Fe", "Minastrin"],
    category: ["Endocrine"],
    classes: ["hormone"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Contraception", "Dysmenorrhea", "Endometriosis", "Acne", "Menstrual irregularity"],
    comorbidities: ["Migraines", "Polycystic ovary syndrome", "Endometriosis", "Iron-deficiency anemia", "Anxiety or depression"],
    polypharmacy: ["SSRIs (sertraline, escitalopram)", "NSAIDs (ibuprofen, naproxen)", "Spironolactone", "Levothyroxine", "Iron supplements"],
    overdoseToxicity: null,
    precautions: [
      'Estrogen component increases risk of <span class="hl hl--ci">venous thromboembolism</span> — DVT and pulmonary embolism, especially in the first year of use.',
      'Risk of <span class="hl hl--ci">stroke and MI</span> is significantly elevated in smokers over age 35.',
      'Dyspnea, unilateral leg swelling, or pleuritic chest pain in a woman of reproductive age should raise suspicion for <span class="hl hl--warn">OCP-related PE</span>.',
      'May cause <span class="hl hl--warn">hypertension</span> — baseline elevated BP in a young woman may be OCP-related.',
      '<span class="hl hl--drug">Anticonvulsants</span> (phenytoin, carbamazepine) reduce OCP efficacy — unplanned pregnancy is possible despite reported contraceptive use.'
    ],
    summary: "Combined oral contraceptives contain estrogen and progestin and are prescribed for contraception and menstrual disorders. The primary prehospital significance is thromboembolic risk: these patients have a 3- to 11-fold increased risk of DVT and PE compared to non-users, with the highest risk in the first year of use. Any young woman on OCPs presenting with dyspnea, tachycardia, or unilateral leg pain warrants a high index of suspicion for VTE. Smoking, obesity, and recent immobilization compound the risk substantially."
  },
  {
    id: "azithromycin",
    genericName: "Azithromycin",
    tradeNames: ["Zithromax", "Z-Pack"],
    category: ["Pulmonary"],
    classes: ["antibiotic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Community-acquired pneumonia", "COPD exacerbation", "Acute sinusitis", "Chlamydial infection", "Otitis media"],
    comorbidities: ["COPD", "Asthma", "Heart failure", "Immunocompromised states", "Recurrent respiratory infections"],
    polypharmacy: ["Inhaled bronchodilators (albuterol, ipratropium)", "Inhaled corticosteroids (fluticasone)", "Prednisone", "Anticoagulants (warfarin, apixaban)", "Amoxicillin"],
    overdoseToxicity: null,
    precautions: [
      'Causes <span class="hl hl--ci">QTc prolongation</span> — risk of torsades de pointes, especially in patients with baseline cardiac disease or electrolyte abnormalities.',
      'Concurrent use with <span class="hl hl--drug">amiodarone</span> markedly increases QT prolongation and arrhythmia risk.',
      'Potentiates <span class="hl hl--drug">warfarin</span> — patients on concurrent therapy may have <span class="hl hl--warn">elevated INR and increased bleeding risk</span>.',
      'Patients with <span class="hl hl--warn">hypokalemia or hypomagnesemia</span> are at significantly higher risk for azithromycin-induced arrhythmias.',
      'Small but significant increase in <span class="hl hl--ci">cardiovascular death</span> during the 5-day treatment course in patients with high baseline cardiac risk.'
    ],
    summary: "Azithromycin is a macrolide antibiotic prescribed for respiratory infections, COPD exacerbations, and STIs. Its primary prehospital relevance is QTc prolongation, which can precipitate torsades de pointes — particularly dangerous in patients already taking QT-prolonging drugs like amiodarone or those with hypokalemia. Finding azithromycin on a med list alongside cardiac medications should raise suspicion for additive arrhythmia risk. The drug also potentiates warfarin, increasing bleeding risk in anticoagulated patients."
  },
  {
    id: "amoxicillin",
    genericName: "Amoxicillin",
    tradeNames: ["Amoxil", "Trimox", "Moxatag"],
    category: ["GI"],
    classes: ["antibiotic"],
    sources: ["DailyMed", "StatPearls"],
    indications: ["Upper respiratory infections", "Urinary tract infections", "Skin infections", "H. pylori eradication", "Lower respiratory infections"],
    comorbidities: ["Recurrent otitis media", "Chronic sinusitis", "COPD (acute exacerbation)", "Peptic ulcer disease"],
    polypharmacy: ["Proton pump inhibitors (omeprazole, lansoprazole)", "Clarithromycin", "NSAIDs (ibuprofen, naproxen)", "Oral contraceptives"],
    overdoseToxicity: null,
    precautions: [
      'Risk of <span class="hl hl--ci">anaphylaxis</span> — penicillin allergy affects 1–10% of patients and can be life-threatening on first or repeat exposure.',
      'Cross-reactivity with <span class="hl hl--drug">cephalosporins</span> and carbapenems in patients with documented penicillin allergy.',
      'Potentiates <span class="hl hl--drug">warfarin</span> — can cause <span class="hl hl--ci">elevated INR</span> and increased bleeding risk in anticoagulated patients.',
      'Maculopapular rash in patients with <span class="hl hl--warn">infectious mononucleosis</span> — not a true allergy but commonly mistaken for one.',
      'High doses in patients with <span class="hl hl--warn">renal failure</span> can provoke seizures.'
    ],
    summary: "Amoxicillin is a penicillin-class antibiotic prescribed for a wide range of bacterial infections — ear, sinus, throat, respiratory, urinary, and skin. Its primary prehospital significance is the risk of allergic reaction, ranging from mild rash to full anaphylaxis. Always confirm penicillin allergy status before administering any beta-lactam in the field. In anticoagulated patients, amoxicillin can elevate INR and increase bleeding risk."
  },
];
