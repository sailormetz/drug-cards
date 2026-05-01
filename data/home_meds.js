const home_meds = [
  {
    id: "metoprolol",
    summary: "Metoprolol is a cardioselective beta-1 blocker used for hypertension, angina, heart failure, and rate control in atrial fibrillation. It reduces heart rate, contractility, and myocardial oxygen demand by blocking beta-1 adrenergic receptors — at higher doses it also affects beta-2 receptors in the lungs and vasculature. In the field, expect bradycardia and hypotension, especially in overdose or when stacked with calcium channel blockers. It masks tachycardia in hypoglycemia, hypovolemia, and anaphylaxis — a normal heart rate in these patients does not mean they are stable.",
    genericName: "Metoprolol",
    tradeNames: ["Lopressor", "Toprol-XL"],
    category: ["Cardiovascular"],
    classes: ["Beta Blocker", "Antihypertensive", "Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks beta-1 adrenergic receptors in cardiac tissue, reducing the effects of catecholamines on heart rate, contractility, AV conduction, and renin release — lowering heart rate, blood pressure, and myocardial oxygen demand."
      }
    ],
    patientIndications: ["Hypertension", "Angina", "Heart Failure", "Atrial Fibrillation", "Post-MI", "SVT", "Migraine Prophylaxis"],
    considerations: [
      'Causes <span class="hl hl--ci">bradycardia</span> and <span class="hl hl--ci">hypotension</span> — both dose-dependent and worsened by concurrent use of calcium channel blockers, digoxin, or clonidine.',
      'Masks <span class="hl hl--warn">tachycardia</span> in hypoglycemia, hypovolemia, and anaphylaxis — a normal heart rate in these patients is misleading and does not rule out hemodynamic compromise.',
      'Patients on metoprolol may be <span class="hl hl--warn">unresponsive to standard doses of epinephrine</span> during anaphylaxis — higher or repeated doses may be needed.',
      'Can worsen <span class="hl hl--ci">bronchospasm</span> in asthmatics and COPD patients, especially at higher doses where beta-2 selectivity is lost.',
      'Abrupt discontinuation causes <span class="hl hl--ci">rebound hypertension</span>, tachycardia, and can precipitate angina or MI — ask about medication compliance when evaluating chest pain.',
      'Beta blocker <span class="hl hl--ci">overdose</span> presents with severe bradycardia, hypotension, heart block, and bronchospasm. Prehospital management: atropine, glucagon, calcium, transcutaneous pacing for refractory bradycardia.'
    ]
  },
];
