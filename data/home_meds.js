const home_meds = [
  {
    id: "metoprolol",
    summary: "A cardioselective beta-1 blocker used for hypertension, angina, heart failure, and rate control in atrial fibrillation. One of the most common cardiac medications on home med lists.",
    genericName: "Metoprolol",
    tradeNames: ["Lopressor", "Toprol-XL"],
    category: ["Cardiovascular"],
    classes: ["Beta Blocker", "Antihypertensive", "Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: "Selectively blocks beta-1 adrenergic receptors in cardiac tissue, reducing heart rate, contractility, AV conduction, and renin release — lowering heart rate, blood pressure, and myocardial oxygen demand."
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
];
