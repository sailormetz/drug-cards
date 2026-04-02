const DRUGS = [
  {
    id: 'epinephrine',
    summary: 'The first-line drug for anaphylaxis and cardiac arrest. A sympathomimetic that reverses bronchoconstriction, vasodilation, and cardiovascular collapse.',
    genericName: 'Epinephrine',
    tradeNames: ['Adrenalin', 'EpiPen'],
    category: ['Resuscitation', 'Cardiovascular', 'Airway & Respiratory'],
    classes: [
      'Sympathomimetic',
      'Catecholamine',
      'Vasopressor',
      'Inotrope',
      'Chronotrope',
      'Bronchodilator'
    ],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Causes widespread vasoconstriction and a rapid rise in systemic vascular resistance. This is what restores blood pressure in anaphylaxis.',
        target: {
          name: 'α-1 receptors',
          action: 'agonist',
          result: 'Vasoconstriction, ↑ SVR',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Increases heart rate and myocardial contractility. In cardiac arrest, this raises coronary perfusion pressure between compressions and improves the likelihood of successful defibrillation.',
        target: {
          name: 'β-1 receptors',
          action: 'agonist',
          result: '↑ HR & contractility',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Relaxes bronchial smooth muscle, reversing bronchoconstriction. In anaphylaxis, this works faster and more reliably than any inhaled bronchodilator.',
        target: {
          name: 'β-2 receptors',
          action: 'agonist',
          result: 'Bronchodilation',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Cardiac Arrest',
        doses: [
          {
            population: 'Adult',
            formulation: '0.1 mg/mL (1:10,000)',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mg',
                onset: 'Immediate',
                duration: '5–10 min',
                repeat: 'q3–5 min',
                notes: ['Rapid push followed by 20 mL NS flush']
              }
            ],
            notes: ['Prioritize early administration for non-shockable rhythms']
          },
          {
            population: 'Pediatric',
            formulation: '0.1 mg/mL (1:10,000)',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.01 mg/kg',
                onset: 'Immediate',
                duration: '5–10 min',
                maxDose: '1 mg/dose',
                repeat: 'q3–5 min',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Anaphylaxis',
        doses: [
          {
            population: 'Adult',
            formulation: '1 mg/mL (1:1,000)',
            routes: [
              {
                via: ['IM'],
                amount: '0.3 mg',
                onset: '3–5 min',
                duration: '5–15 min',
                repeat: 'q5–15 min PRN',
                notes: ['Anterolateral thigh']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: "<25 kg",
            formulation: '1 mg/mL (1:1,000)',
            routes: [
              {
                via: ['IM'],
                amount: '0.15 mg',
                onset: '3–5 min',
                duration: '5–15 min',
                repeat: 'q5–15 min PRN',
                notes: ['Anterolateral thigh']
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Shock',
        doses: [
          {
            population: 'Adult',
            formulation: '0.1 mg/mL (1:10,000)',
            routes: [
              {
                via: ['IV drip'],
                amount: '0.05–0.3 mcg/kg/min',
                onset: 'Immediate',
                duration: 'Duration of infusion',
                notes: ['Titrate to MAP ≥65 mmHg']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            formulation: '0.1 mg/mL (1:10,000)',
            routes: [
              {
                via: ['IV drip'],
                amount: '0.05–0.3 mcg/kg/min',
                onset: 'Immediate',
                duration: 'Duration of infusion',
                notes: ['Titrate to physiologic targets']
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Croup / Bronchospasm',
        doses: [
          {
            population: 'Pediatric',
            formulation: '1 mg/mL (1:1,000)',
            routes: [
              {
                via: ['NEB'],
                amount: '5 mg (5 mL)',
                onset: '1–5 min',
                duration: '1–2 hrs',
                repeat: 'May repeat in 20 min',
                notes: []
              }
            ],
            notes: ['Primary use: croup with stridor at rest, bronchiolitis with severe distress']
          },
          {
            population: 'Adult',
            formulation: '1 mg/mL (1:1,000)',
            routes: [
              {
                via: ['NEB'],
                amount: '5 mg (5 mL)',
                onset: '1–5 min',
                duration: '1–2 hrs',
                repeat: 'May repeat in 20 min',
                notes: []
              },
              {
                via: ['IM'],
                amount: '0.01 mg/kg',
                onset: '3–5 min',
                duration: '5–15 min',
                maxDose: '0.3 mg',
                notes: ['Last resort for impending respiratory failure only']
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Neonatal Resuscitation',
        doses: [
          {
            population: 'Neonatal',
            formulation: '0.1 mg/mL (1:10,000)',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.01 mg/kg',
                onset: 'Immediate',
                duration: '5–10 min',
                repeat: 'q3–5 min',
                notes: ['Preferred route if access obtained']
              },
              {
                via: ['ET'],
                amount: '0.1 mg/kg',
                onset: 'Immediate',
                duration: '5–10 min',
                repeat: 'q3–5 min',
                notes: ['Use only if IV/IO access cannot be obtained']
              }
            ],
            notes: ["Indicated when HR remains <60 BPM despite effective ventilation and compressions"]
          }
        ],
        notes: []
      },
      {
        name: 'Severe Allergic Reaction',
        sameDoseAs: 'Anaphylaxis'
      }
    ],
    contraindications: [
      {
        text: 'Coronary insufficiency',
        relative: true
      },
      {
        text: 'Uncontrolled hypertension',
        relative: true
      }
    ],
    adverseEffects: ['Tachycardia / hypertension', 'Dysrhythmias', 'Angina / myocardial ischemia'],
    precautions: [
      'IM is the correct route for anaphylaxis. IV push epinephrine in a patient with a pulse risks fatal arrhythmia.',
      "Use caution in <span class=\"hl hl--warn\">elderly</span>, known <span class=\"hl hl--warn\">cardiac disease</span>, <span class=\"hl hl--warn\">hypertension</span>, and <span class=\"hl hl--warn\">diabetes</span>.",
      'May precipitate angina or MI in susceptible patients.'
    ]
  },
  {
    id: 'propranolol',
    summary: 'A non-selective beta-blocker that slows heart rate, reduces contractility, and lowers blood pressure. IV form used for acute SVT and tachyarrhythmias.',
    genericName: 'Propranolol',
    tradeNames: ['Inderal', 'Inderal LA', 'InnoPran XL', 'Hemangeol'],
    category: ['Cardiovascular'],
    classes: ['Class II Antiarrhythmic', 'Beta Blocker'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Slows heart rate, reduces contractility, and decreases conduction velocity through the SA and AV nodes. Reduces myocardial oxygen demand.',
        target: {
          name: 'β-1 receptors',
          action: 'antagonist',
          result: '↓ HR, ↓ contractility, ↓ AV conduction',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Causes bronchoconstriction and loss of peripheral vasodilation. This is the source of its major contraindications in asthma and COPD.',
        target: {
          name: 'β-2 receptors',
          action: 'antagonist',
          result: 'Bronchoconstriction, ↓ vasodilation',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Narrow Complex Tachycardia',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '1–3 mg',
                onset: '1–2 min',
                duration: '3–6 hrs',
                maxDose: '5 mg total',
                notes: ['Slow push over 10 min with cardiac monitoring']
              }
            ],
            notes: ['Second-line after adenosine or diltiazem', 'Avoid in asthma, COPD, decompensated CHF']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Heart failure'
      },
      {
        text: 'Bradycardia'
      },
      {
        text: 'Heart block greater than first-degree'
      },
      {
        text: 'Asthma'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Cocaine toxicity',
        relative: true
      },
      {
        text: 'Severe COPD',
        relative: true
      }
    ],
    adverseEffects: ['Bradycardia', 'Hypotension', 'Bronchospasm', 'AV block'],
    precautions: [
      "Patients on propranolol may be <span class=\"hl hl--danger\">resistant to epinephrine</span> during anaphylaxis. Higher or repeated doses may be needed.",
      "Masks tachycardic signs of <span class=\"hl hl--warn\">hypoglycemia</span>. Use with caution in diabetic patients.",
      "In overdose, may cause <span class=\"hl hl--warn\">altered mental status, seizures, and widened QRS</span>. <strong>Glucagon</strong> is the first-line antidote."
    ]
  },
  {
    id: 'protamine-sulfate',
    summary: "The specific antidote for heparin. A strongly basic protein that binds and neutralizes heparin\\'s anticoagulant effect, primarily used post-cardiac surgery and to reverse heparin overdose.",
    genericName: 'Protamine Sulfate',
    tradeNames: [],
    category: ['Toxicology', 'Trauma & Hemorrhage'],
    classes: ['Antidote'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Forms a stable, inactive salt complex with circulating heparin, neutralizing anticoagulation. The complex is cleared by the reticuloendothelial system.',
        target: {
          name: 'Heparin (circulating)',
          action: 'antagonist',
          result: 'Neutralizes anticoagulation',
          system: 'coagulation'
        }
      }
    ],
    indications: [
      {
        name: 'Heparin Reversal',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '1 mg per 100 units heparin',
                onset: '30–60 sec',
                duration: '~2 hrs',
                maxDose: '50 mg',
                notes: ['Slow IV push, not to exceed 5 mg/min']
              }
            ],
            notes: ['Have epinephrine ready — risk of anaphylaxis']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'No prior heparin exposure'
      }
    ],
    adverseEffects: ['Hypotension', 'Bradycardia', 'Anaphylaxis', 'Bronchoconstriction'],
    precautions: [
      "<span class=\"hl hl--danger\">Slow IV administration only.</span> Rapid push causes severe hypotension and cardiovascular collapse.",
      "<span class=\"hl hl--danger\">Have vasopressors and resuscitation equipment immediately available.</span> Fatal anaphylaxis has been reported.",
      "Higher risk of allergic reaction in patients with <span class=\"hl hl--warn\">fish allergy</span>, <span class=\"hl hl--warn\">previous vasectomy</span>, or prior exposure to <span class=\"hl hl--warn\">protamine-containing insulin</span> (NPH).",
      "Administer via <strong>peripheral IV</strong>. Central line administration increases histamine release."
    ]
  },
  {
    id: 'racemic-epinephrine',
    summary: 'A 1:1 mixture of L- and D-epinephrine isomers delivered by nebulizer to reduce subglottic edema in croup. Provides temporary relief while corticosteroids take effect.',
    genericName: 'Racemic Epinephrine',
    tradeNames: ['S2', 'AsthmaNefrin', 'Vaponefrin'],
    category: ['Airway & Respiratory'],
    classes: ['Sympathomimetic', 'Bronchodilator', 'Catecholamine'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Constricts submucosal arterioles in the upper airway, reducing subglottic edema and capillary leakage. This is the primary therapeutic effect in croup.',
        target: {
          name: 'α-1 receptors',
          action: 'agonist',
          result: 'Mucosal vasoconstriction, ↓ subglottic edema',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Relaxes bronchial smooth muscle, providing bronchodilation. Secondary benefit in patients with concomitant bronchospasm.',
        target: {
          name: 'β-2 receptors',
          action: 'agonist',
          result: 'Bronchodilation',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Croup / Stridor',
        doses: [
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['NEB'],
                amount: '0.5 mL of 2.25% in 2.5 mL NS',
                onset: '10–15 min',
                duration: '1.5–2 hrs',
                repeat: 'May repeat in 20 min',
                notes: []
              }
            ],
            notes: ['Monitor for rebound worsening after effect wears off']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Epiglottitis',
        relative: true
      }
    ],
    adverseEffects: ['Tachycardia', 'Rebound mucosal edema'],
    precautions: [
      "<span class=\"hl hl--warn\">Rebound worsening</span> after approximately 2 hours. Symptoms may return to pre-treatment severity. Monitor and redose or escalate.",
      'Minimize agitation. Crying and distress worsen airway obstruction. Use blow-by nebulization if tolerated better than a mask.'
    ]
  },
  {
    id: 'rocuronium',
    summary: 'A fast-acting non-depolarizing neuromuscular blocker used for RSI paralysis. Preferred over succinylcholine in many EMS systems due to fewer contraindications, no fasciculations, and full reversibility with sugammadex.',
    genericName: 'Rocuronium',
    tradeNames: ['Zemuron'],
    category: ['Airway & Respiratory', 'Sedation & Anesthesia'],
    classes: ['Paralytic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Prevents skeletal muscle depolarization, producing flaccid paralysis. Does not cause fasciculations, which makes it preferable to succinylcholine when hyperkalemia is a concern.',
        target: {
          name: 'Nicotinic acetylcholine receptors (NMJ)',
          action: 'antagonist',
          result: 'Skeletal muscle paralysis',
          system: 'cholinergic'
        }
      }
    ],
    indications: [
      {
        name: 'Rapid Sequence Intubation',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1–1.2 mg/kg',
                onset: '45–60 sec',
                duration: '30–60 min',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mg/kg',
                onset: '45–60 sec',
                duration: '30–60 min',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to rocuronium or neuromuscular blocking agents'
      }
    ],
    adverseEffects: ['Prolonged paralysis', 'Anaphylaxis'],
    precautions: [
      "<span class=\"hl hl--danger\">Fully reversible with <strong>sugammadex</strong>.</span> If intubation fails and cannot ventilate, sugammadex can restore spontaneous breathing.",
      "<span class=\"hl hl--danger\">Post-intubation sedation plan must be in place before RSI.</span> Paralysis outlasts most induction agents. Redose sedation or watch for signs of awareness: tearing, tachycardia, hypertension.",
      "Duration is prolonged by <span class=\"hl hl--warn\">hepatic dysfunction</span>, <span class=\"hl hl--warn\">hypothermia</span>, and <span class=\"hl hl--warn\">acidosis</span>.",
      "Use <strong>ideal body weight</strong> for dosing in obese patients."
    ]
  },
  {
    id: 'sodium-bicarbonate',
    summary: 'An alkalizing agent used to buffer acidosis, reverse sodium channel blockade in TCA and cocaine toxicity, and treat hyperkalemia. Not a routine cardiac arrest drug.',
    genericName: 'Sodium Bicarbonate',
    tradeNames: [],
    category: ['Toxicology', 'Resuscitation', 'Endocrine & Metabolic'],
    classes: ['Alkalinizing Agent', 'Electrolyte', 'Antidote'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Provides bicarbonate that buffers excess acid, raising blood pH. In sodium channel blocker toxicity, the sodium load and alkalinization together help overcome channel blockade and narrow the QRS.',
        target: {
          name: 'Hydrogen ions (systemic)',
          action: 'antagonist',
          result: '↑ blood pH, reverses acidosis',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Hyperkalemia',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mEq/kg',
                onset: '2–10 min',
                duration: '1–2 hrs',
                maxDose: '50 mEq',
                notes: ['IV push over 5 min']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mEq/kg',
                onset: '2–10 min',
                duration: '1–2 hrs',
                maxDose: '50 mEq',
                notes: ['IV push over 5 min']
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Sodium Channel Blocker Overdose',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1–2 mEq/kg',
                onset: '2–10 min',
                duration: '1–2 hrs',
                repeat: 'May repeat PRN to narrow QRS',
                notes: []
              }
            ],
            notes: ['Indicated when QRS ≥100 msec']
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1–2 mEq/kg',
                onset: '2–10 min',
                duration: '1–2 hrs',
                repeat: 'May repeat PRN to narrow QRS',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'TCA Overdose',
        sameDoseAs: 'Sodium Channel Blocker Overdose'
      },
      {
        name: 'Crush Injury',
        sameDoseAs: 'Hyperkalemia'
      }
    ],
    contraindications: [
      {
        text: 'Metabolic or respiratory alkalosis'
      },
      {
        text: 'Hypernatremia'
      },
      {
        text: 'Pulmonary edema'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Metabolic alkalosis', 'Hypernatremia', 'Hypokalemia', 'Tissue necrosis on extravasation'],
    precautions: [
      "<span class=\"hl hl--danger\">Ensure adequate ventilation before administering.</span> Bicarb generates CO2 when buffering acid. Without ventilation, intracellular acidosis worsens.",
      "<span class=\"hl hl--danger\">Extravasation causes tissue necrosis.</span> 8.4% solution is extremely hyperosmolar. Verify IV patency before administration.",
      "<span class=\"hl hl--warn\">Not a routine cardiac arrest drug.</span> Only indicated for suspected hyperkalemia or sodium channel blocker overdose in arrest.",
      "<span class=\"hl hl--warn\">Incompatible</span> with calcium salts, catecholamines, and many IV drugs. Flush line before and after or use a separate line.",
      "In crush injury, administer <strong>before releasing the trapped extremity</strong> when possible."
    ]
  },
  {
    id: 'succinylcholine',
    summary: 'A depolarizing neuromuscular blocker used for RSI with the fastest onset and shortest duration of any paralytic. Carries significant contraindications including hyperkalemia risk, malignant hyperthermia, and burns or crush injuries over 24 hours old.',
    genericName: 'Succinylcholine',
    tradeNames: ['Anectine', 'Quelicin'],
    category: ['Airway & Respiratory', 'Sedation & Anesthesia'],
    classes: ['Paralytic'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Causes sustained depolarization of the motor end plate, preventing repolarization and producing rapid flaccid paralysis. Initial depolarization produces visible fasciculations before onset. Rapidly metabolized by plasma cholinesterase, giving it the shortest duration of any neuromuscular blocker.',
        target: {
          name: 'Nicotinic acetylcholine receptors (NMJ)',
          action: 'agonist',
          result: 'Sustained depolarization → flaccid paralysis',
          system: 'cholinergic'
        }
      }
    ],
    indications: [
      {
        name: 'Rapid Sequence Intubation',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1–1.5 mg/kg',
                onset: '45–60 sec',
                duration: '6–10 min',
                notes: []
              },
              {
                via: ['IM'],
                amount: '3–4 mg/kg',
                onset: '2–3 min',
                duration: '10–15 min',
                maxDose: '150 mg',
                notes: ['Use only when IV/IO access unavailable']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '2 mg/kg',
                onset: '45–60 sec',
                duration: '6–10 min',
                notes: []
              },
              {
                via: ['IM'],
                amount: '3–4 mg/kg',
                onset: '2–3 min',
                duration: '10–15 min',
                maxDose: '150 mg',
                notes: ['Use only when IV/IO access unavailable']
              }
            ],
            notes: []
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Personal or family history of malignant hyperthermia'
      },
      {
        text: 'Hyperkalemia'
      },
      {
        text: 'Burns > 24 hours old'
      },
      {
        text: 'Crush injuries > 24 hours old'
      },
      {
        text: 'Denervation injury'
      },
      {
        text: 'Neuromuscular disease'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Penetrating eye injury',
        relative: true
      }
    ],
    adverseEffects: [
      'Hyperkalemia',
      'Malignant hyperthermia',
      'Bradycardia',
      'Masseter spasm / trismus',
      'Fasciculations'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">No reversal agent.</span> Must BVM until paralysis wears off (~6-10 min) if cannot intubate and cannot ventilate.",
      "<span class=\"hl hl--danger\">Fatal hyperkalemia risk</span> in burns, crush injuries, denervation injuries, and neuromuscular disease. Risk begins 24-72 hours post-injury and persists for months.",
      "<span class=\"hl hl--danger\">Malignant hyperthermia</span> signs: rapidly rising temperature, rigidity, tachycardia, hypercarbia. Treatment is <strong>dantrolene</strong>.",
      "<span class=\"hl hl--warn\">Bradycardia</span> is more common in pediatrics and with repeat doses. Consider atropine pretreatment in children.",
      "If <span class=\"hl hl--warn\">trismus/masseter spasm</span> occurs, treat as possible malignant hyperthermia until proven otherwise.",
      "Patients with <span class=\"hl hl--warn\">pseudocholinesterase deficiency</span> will have profoundly prolonged paralysis. Causes include liver disease, pregnancy, and organophosphate exposure."
    ]
  },
  {
    id: 'terbutaline',
    summary: 'A selective beta-2 agonist given subcutaneously when inhaled bronchodilators fail in severe asthma. Also used as an acute tocolytic to suppress preterm contractions.',
    genericName: 'Terbutaline Sulfate',
    tradeNames: ['Brethine', 'Bricanyl'],
    category: ['Airway & Respiratory', 'OB/GYN'],
    classes: ['Beta-2 Agonist', 'Bronchodilator', 'Sympathomimetic', 'Tocolytic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Selectively causes bronchodilation by increasing intracellular cAMP in bronchial smooth muscle. Also relaxes uterine smooth muscle through the same mechanism, which is the basis for its tocolytic use in preterm labor.',
        target: {
          name: 'β-2 receptors',
          action: 'agonist',
          result: 'Bronchodilation, uterine relaxation',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Severe Bronchospasm',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['SQ'],
                amount: '0.25 mg',
                onset: '5–15 min',
                duration: '1.5–4 hrs',
                repeat: 'May repeat x1 in 15–30 min',
                maxDose: '0.5 mg in 4 hrs',
                notes: ['Lateral deltoid']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['SQ'],
                amount: '0.01 mg/kg',
                onset: '5–15 min',
                duration: '1.5–4 hrs',
                maxDose: '0.25 mg',
                repeat: 'May repeat x1 in 15–20 min',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Preterm Labor (Tocolysis)',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['SQ'],
                amount: '0.25 mg',
                onset: '5–15 min',
                duration: '1.5–4 hrs',
                notes: []
              }
            ],
            notes: ['FDA black box warning for prolonged tocolytic use — prehospital use is single-dose only']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to sympathomimetic amines'
      },
      {
        text: 'Tachyarrhythmias',
        relative: true
      },
      {
        text: 'Severe cardiac disease',
        relative: true
      }
    ],
    adverseEffects: ['Tachycardia / palpitations', 'Tremor', 'Hypokalemia'],
    precautions: [
      "<span class=\"hl hl--danger\">FDA black box warning for prolonged tocolysis.</span> Do not use injectable terbutaline beyond 48-72 hours. Serious maternal cardiac complications and death reported.",
      "When used as a tocolytic, monitor for <span class=\"hl hl--warn\">pulmonary edema</span> and <span class=\"hl hl--warn\">myocardial ischemia</span>. Monitor fetal heart rate for tachycardia.",
      "If bronchospasm does not improve after the second SQ dose, the patient is in <span class=\"hl hl--danger\">impending respiratory failure</span>. Escalate care.",
      "Use with caution in <span class=\"hl hl--warn\">cardiovascular disease</span>, <span class=\"hl hl--warn\">hyperthyroidism</span>, and <span class=\"hl hl--warn\">diabetes</span>."
    ]
  },
  {
    id: 'thiamine',
    summary: "Vitamin B1, given IV or IM to prevent or treat Wernicke\\'s encephalopathy in malnourished or alcoholic patients. Administered before or alongside dextrose in hypoglycemic patients at risk of thiamine deficiency.",
    genericName: 'Thiamine',
    tradeNames: [],
    category: ['Endocrine & Metabolic'],
    classes: ['Vitamin'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Converted to thiamine pyrophosphate, an essential cofactor for aerobic glucose metabolism in the brain. Without it, neurons in the mammillary bodies, thalamus, and cerebellum cannot produce ATP and die. This is why thiamine must be given before or with dextrose in malnourished patients.',
        target: {
          name: 'Thiamine-dependent enzymes (CNS)',
          action: 'donor',
          result: 'Restores cerebral glucose metabolism',
          system: 'metabolic'
        }
      }
    ],
    indications: [
      {
        name: 'Wernicke Encephalopathy Prevention',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '100 mg',
                onset: '~15 min',
                duration: 'Variable',
                notes: ['Slow IV push']
              },
              {
                via: ['IM'],
                amount: '100 mg',
                onset: '~30 min',
                duration: 'Variable',
                notes: []
              }
            ],
            notes: ['Give before or with dextrose in suspected alcoholism or malnourishment']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Anaphylaxis', 'Injection site pain'],
    precautions: [
      "<span class=\"hl hl--warn\">Do not delay dextrose</span> to wait for thiamine. Wernicke encephalopathy evolves over hours to days, not minutes. If both are available, give thiamine first or concurrently.",
      "The classic Wernicke triad (<strong>confusion, ataxia, ophthalmoplegia</strong>) is present in only ~10% of cases. <span class=\"hl hl--warn\">Treat empirically</span> in any altered mental status patient with suspected alcohol use or malnutrition.",
      'Extremely safe drug. Do not withhold due to allergy concerns.'
    ]
  },
  {
    id: 'tranexamic-acid',
    summary: 'An antifibrinolytic that stabilizes blood clots by blocking plasmin. Given early in major trauma and postpartum hemorrhage to reduce death from bleeding, with benefit greatest within one hour of injury.',
    genericName: 'Tranexamic Acid',
    tradeNames: ['Cyklokapron', 'Lysteda'],
    category: ['Trauma & Hemorrhage'],
    classes: ['Antifibrinolytic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'A synthetic lysine analogue that blocks the conversion of plasminogen to plasmin, preventing fibrin clot breakdown. Stabilizes clots that have already formed rather than promoting new clot formation.',
        target: {
          name: 'Plasminogen (lysine-binding sites)',
          action: 'inhibitor',
          result: 'Prevents fibrinolysis, stabilizes clots',
          system: 'coagulation'
        }
      }
    ],
    indications: [
      {
        name: 'Trauma Hemorrhage',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 g in 100 mL NS',
                onset: '5–15 min',
                duration: '~2 hrs (elimination half-life)',
                notes: ['Infuse over 10 min — rapid push may cause hypotension']
              }
            ],
            notes: ['Must be given within 3 hrs of injury', 'Do not exceed 2 g total']
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '20 mg/kg',
                onset: '5–15 min',
                duration: '~2 hrs',
                notes: ['Infuse over 10 min']
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Postpartum Hemorrhage',
        sameDoseAs: 'Trauma Hemorrhage'
      }
    ],
    contraindications: [
      {
        text: 'Active thromboembolic disease'
      },
      {
        text: '> 3 hours since injury'
      },
      {
        text: 'Subarachnoid hemorrhage'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'History of seizures',
        relative: true
      }
    ],
    adverseEffects: ['Hypotension', 'Nausea / vomiting', 'Seizures'],
    precautions: [
      "<span class=\"hl hl--danger\">Give within 3 hours of injury onset.</span> TXA given after 3 hours <strong>increases mortality</strong>. Greatest benefit is within the first hour.",
      "<span class=\"hl hl--warn\">Infuse over 10 minutes.</span> Rapid IV push causes hypotension.",
      "TXA <strong>stabilizes existing clots</strong>. It is not a procoagulant and does not replace blood products, surgical hemorrhage control, or tourniquets.",
      "Use with caution in <span class=\"hl hl--warn\">renal impairment</span>. TXA is 95% renally excreted unchanged."
    ]
  },
  {
    id: 'vasopressin',
    summary: 'A non-catecholamine vasopressor that acts on V1 receptors in vascular smooth muscle to cause potent vasoconstriction, independent of the adrenergic pathway, making it useful in vasodilatory and septic shock as an adjunct to norepinephrine.',
    genericName: 'Vasopressin',
    tradeNames: ['Vasostrict', 'Pitressin'],
    category: ['Cardiovascular', 'Resuscitation'],
    classes: ['Vasopressor', 'Hormone', 'Antidiuretic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Causes vasoconstriction independent of the adrenergic system through direct smooth muscle activation. This is the primary therapeutic effect in shock.',
        target: {
          name: 'V1 receptors (vascular)',
          action: 'agonist',
          result: 'Vasoconstriction, ↑ SVR',
          system: 'other'
        }
      },
      {
        brief: 'Promotes water reabsorption in the renal collecting duct by triggering aquaporin insertion. This is the endogenous ADH function.',
        target: {
          name: 'V2 receptors (renal)',
          action: 'agonist',
          result: 'Water reabsorption, ↓ urine output',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Cardiac Arrest',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '40 units',
                onset: 'Immediate',
                duration: '10–20 min',
                notes: ['Single dose only']
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Distributive Shock',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV drip'],
                amount: '0.01–0.04 units/min',
                onset: 'Rapid, peak ~15 min',
                duration: 'Duration of infusion',
                notes: ['Titrate to MAP; do not use as sole vasopressor']
              }
            ],
            notes: []
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Digital / mesenteric ischemia', 'Bradycardia', 'Decreased cardiac output'],
    precautions: [
      "<span class=\"hl hl--danger\">Not a first-line vasopressor.</span> Use as an adjunct to norepinephrine in vasodilatory shock. No inotropic effect; using it alone in cardiogenic shock may worsen cardiac output.",
      "<span class=\"hl hl--warn\">Digital and mesenteric ischemia</span> risk increases above 0.04 U/min.",
      "<span class=\"hl hl--warn\">Taper when discontinuing.</span> Abrupt cessation may cause rebound hypotension.",
      "Primarily relevant for <strong>critical care transport</strong> paramedics managing patients on vasopressor drips."
    ]
  },
  {
    id: 'vecuronium',
    summary: 'An intermediate-acting non-depolarizing paralytic with minimal hemodynamic effects, used for post-intubation paralysis maintenance rather than RSI due to slow onset. Must be reconstituted from powder before use.',
    genericName: 'Vecuronium',
    tradeNames: ['Norcuron'],
    category: ['Airway & Respiratory', 'Sedation & Anesthesia'],
    classes: ['Paralytic'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Prevents skeletal muscle depolarization, producing flaccid paralysis. Does not have vagolytic effects, so it does not increase heart rate.',
        target: {
          name: 'Nicotinic acetylcholine receptors (NMJ)',
          action: 'antagonist',
          result: 'Skeletal muscle paralysis',
          system: 'cholinergic'
        }
      }
    ],
    indications: [
      {
        name: 'Rapid Sequence Intubation',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '2–3 min',
                duration: '25–40 min',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '2–3 min',
                duration: '25–40 min',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to vecuronium or neuromuscular blocking agents'
      }
    ],
    adverseEffects: ['Prolonged paralysis', 'Bradycardia', 'Anaphylaxis'],
    precautions: [
      "<span class=\"hl hl--warn\">Requires reconstitution</span> from lyophilized powder before administration. Adds preparation time versus rocuronium.",
      "Duration is prolonged in <span class=\"hl hl--warn\">hepatic impairment</span>. Active metabolite accumulates in renal failure.",
      "Reversible with <strong>sugammadex</strong> or <strong>neostigmine + atropine</strong>.",
      "<span class=\"hl hl--warn\">Do not mix</span> with alkaline solutions such as barbiturates or sodium bicarbonate. Precipitates in alkaline pH."
    ]
  },
  {
    id: 'verapamil',
    summary: 'A non-dihydropyridine calcium channel blocker that slows AV node conduction to terminate SVT. Second-line to adenosine, with contraindications including WPW with atrial fibrillation, wide-complex tachycardia, and use in infants.',
    genericName: 'Verapamil',
    tradeNames: ['Calan', 'Isoptin', 'Verelan'],
    category: ['Cardiovascular'],
    classes: ['Class IV Antiarrhythmic', 'Calcium Channel Blocker'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Slows conduction velocity and prolongs the AV node refractory period, interrupting reentrant circuits. Terminates SVT or controls ventricular rate in atrial fibrillation and flutter.',
        target: {
          name: 'L-type Ca²⁺ channels (SA/AV node)',
          action: 'blocker',
          result: '↓ AV conduction, ↑ AV refractory period',
          system: 'ion-channel'
        }
      },
      {
        brief: 'Causes vasodilation and reduces afterload. Also has a negative inotropic effect, reducing myocardial contractility.',
        target: {
          name: 'L-type Ca²⁺ channels (vascular smooth muscle)',
          action: 'blocker',
          result: 'Vasodilation, ↓ afterload, ↓ contractility',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Narrow Complex Tachycardia',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '2.5–5 mg',
                onset: '3–5 min',
                duration: '30–60 min',
                repeat: 'May repeat 5–10 mg in 15–30 min',
                maxDose: '20 mg',
                notes: ['Slow IV push over 2 min (3 min in elderly)']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: '1–15 yrs',
            routes: [
              {
                via: ['IV'],
                amount: '0.1–0.3 mg/kg',
                onset: '3–5 min',
                duration: '30–60 min',
                maxDose: '5 mg',
                notes: ['Slow IV push over 2 min']
              }
            ],
            notes: ["Contraindicated in infants <1 yr — risk of asystole and hypotension"]
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypotension'
      },
      {
        text: 'Heart failure'
      },
      {
        text: 'Sick sinus syndrome (without pacemaker)'
      },
      {
        text: 'Second- or third-degree AV block (without pacemaker)'
      },
      {
        text: 'Atrial fibrillation or flutter with WPW'
      },
      {
        text: 'Wide-complex tachycardia'
      },
      {
        text: 'Concurrent IV beta-blocker use'
      },
      {
        text: 'Infants'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Hypotension', 'Bradycardia', 'AV block', 'Heart failure exacerbation'],
    precautions: [
      "<span class=\"hl hl--danger\">NEVER give to infants.</span> Documented cases of fatal cardiovascular collapse in neonates and infants.",
      "<span class=\"hl hl--danger\">NEVER give with or shortly after IV beta-blockers.</span> Risk of profound bradycardia, AV block, and cardiovascular collapse.",
      "<span class=\"hl hl--danger\">Do NOT use for wide-complex tachycardia.</span> If the rhythm is VT misidentified as SVT, verapamil will cause hemodynamic collapse.",
      "<span class=\"hl hl--danger\">Avoid in WPW with atrial fibrillation/flutter.</span> AV node blockade forces conduction down the accessory pathway, risking degeneration into VF.",
      "Have <strong>calcium chloride or calcium gluconate</strong> at the bedside. IV calcium reverses verapamil-induced hypotension."
    ]
  },
  {
    id: 'propofol',
    summary: 'A rapid-onset, ultra-short-acting IV sedative-hypnotic used for RSI induction and post-intubation sedation. Provides amnesia and reduces ICP but causes dose-dependent hypotension.',
    genericName: 'Propofol',
    tradeNames: ['Diprivan'],
    category: ['Sedation & Anesthesia'],
    classes: ['Sedative', 'Hypnotic', 'Induction Agent'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Potentiates and directly activates the GABA-A receptor, increasing chloride conductance and producing rapid sedation, amnesia, and unconsciousness. Also reduces cerebral metabolic rate and intracranial pressure.',
        target: {
          name: 'GABA-A receptors',
          action: 'enhancer',
          result: 'Sedation, amnesia, ↓ ICP',
          system: 'GABAergic'
        }
      }
    ],
    indications: [
      {
        name: 'RSI Induction',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '1.5–2 mg/kg',
                onset: '15–30 sec',
                duration: '5–10 min',
                notes: []
              }
            ],
            notes: ['Causes hypotension — avoid or reduce dose in shock']
          }
        ],
        notes: []
      },
      {
        name: 'Post-Intubation Sedation',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV drip'],
                amount: '5–50 mcg/kg/min',
                onset: '15–30 sec',
                duration: 'Duration of infusion',
                notes: ['Titrate to desired sedation level']
              }
            ],
            notes: []
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Allergy to eggs or soy'
      },
      {
        text: 'Shock',
        relative: true
      }
    ],
    adverseEffects: ['Hypotension', 'Respiratory depression / apnea', 'Bradycardia', 'Pain on injection'],
    precautions: [
      "<span class=\"hl hl--danger\">Dose-dependent hypotension.</span> Reduces preload, afterload, and contractility simultaneously. Avoid in hypovolemia, sepsis, or hemodynamic instability.",
      "<span class=\"hl hl--danger\">No analgesic properties.</span> Provides sedation and amnesia only. Always combine with an analgesic for intubated patients.",
      "Formulated in a <strong>lipid emulsion</strong> that supports microbial growth. Use aseptic technique and discard unused drug within 12 hours.",
      "Primarily encountered in <strong>critical care transport</strong> as a post-intubation sedation drip. Ketamine is generally preferred for prehospital RSI induction."
    ]
  },
  {
    id: 'procainamide',
    summary: 'A Class Ia antiarrhythmic that slows conduction through both normal and accessory pathways. The drug of choice for stable wide-complex tachycardia and pre-excited atrial fibrillation, requiring slow IV infusion with continuous monitoring.',
    genericName: 'Procainamide',
    tradeNames: ['Pronestyl', 'Procanbid'],
    category: ['Cardiovascular'],
    classes: ['Class Ia Antiarrhythmic', 'Sodium Channel Blocker'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Slows conduction velocity through atrial, ventricular, and accessory pathway tissue, increasing refractoriness and prolonging the action potential. Also has some potassium channel blocking activity, which prolongs repolarization and increases the QT interval.',
        target: {
          name: 'Fast Na⁺ channels (cardiac)',
          action: 'blocker',
          result: '↓ Conduction velocity, ↑ refractoriness, ↑ QRS/QT',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Wide Complex Tachycardia (Stable)',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '20–50 mg/min infusion',
                onset: 'During infusion',
                duration: '3–6 hrs',
                maxDose: '17 mg/kg',
                notes: ['Stop if: arrhythmia resolves, hypotension, or QRS widens >50%']
              }
            ],
            notes: ['Follow with 1–4 mg/min maintenance drip if effective']
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '15 mg/kg over 30–60 min',
                onset: 'During infusion',
                duration: '3–6 hrs',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Pre-Excited A-Fib (WPW)',
        sameDoseAs: 'Wide Complex Tachycardia (Stable)'
      },
      {
        name: 'Refractory SVT',
        sameDoseAs: 'Wide Complex Tachycardia (Stable)'
      }
    ],
    contraindications: [
      {
        text: 'Second- or third-degree AV block (without pacemaker)'
      },
      {
        text: 'Torsades de pointes'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'QT prolongation',
        relative: true
      },
      {
        text: 'Decompensated heart failure',
        relative: true
      }
    ],
    adverseEffects: ['Hypotension', 'QT prolongation', 'QRS widening', 'Proarrhythmia'],
    precautions: [
      "<span class=\"hl hl--danger\">Requires slow IV infusion.</span> Loading at 20 mg/min takes 30-60 minutes for a typical adult. Cannot be pushed.",
      "<span class=\"hl hl--warn\">Continuous ECG and BP monitoring</span> required throughout loading. Procainamide prolongs both QRS and QT and can itself cause new arrhythmias.",
      "<span class=\"hl hl--warn\">Avoid combining with other QT-prolonging drugs</span> such as amiodarone, sotalol, or ondansetron. Additive torsades risk."
    ]
  },
  {
    id: 'promethazine',
    summary: 'A first-generation antihistamine and phenothiazine used as an antiemetic, sedative, and antipruritic, often combined with opioids to potentiate analgesia and reduce nausea.',
    genericName: 'Promethazine',
    tradeNames: ['Phenergan'],
    category: ['Nausea & Vomiting', 'Allergic & Immune'],
    classes: [
      'Antihistamine',
      'Antiemetic',
      'Phenothiazine',
      'Sedative',
      'Anticholinergic'
    ],
    source: 'Mixed',
    moa: [
      {
        brief: 'Produces antihistamine and sedative effects centrally and peripherally. Blocks dopamine in the chemoreceptor trigger zone and vestibular apparatus, making it a potent antiemetic. Additional anticholinergic and alpha-adrenergic blocking activity.',
        target: {
          name: 'H1 / D2 / muscarinic receptors',
          action: 'antagonist',
          result: 'Antiemesis, sedation, antihistamine',
          system: 'histaminergic'
        }
      }
    ],
    indications: [
      {
        name: 'Nausea & Vomiting',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IM'],
                amount: '12.5–25 mg',
                onset: '~20 min',
                duration: '4–6 hrs',
                notes: ['IM is preferred route']
              },
              {
                via: ['IV'],
                amount: '12.5–25 mg',
                onset: '3–5 min',
                duration: '4–6 hrs',
                notes: ['Dilute and infuse slowly — severe tissue damage risk with extravasation']
              }
            ],
            notes: ["Contraindicated in children <2 yrs"]
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: "Children < 2 years old"
      },
      {
        text: 'Lower respiratory tract disease'
      },
      {
        text: 'Asthma'
      },
      {
        text: 'Coma'
      },
      {
        text: 'Hypersensitivity to phenothiazines'
      }
    ],
    adverseEffects: [
      'Tissue necrosis / gangrene',
      'Sedation',
      'Respiratory depression',
      'Hypotension',
      'Extrapyramidal symptoms'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">FDA Black Box: tissue necrosis and gangrene</span> regardless of injection route. If IV is used, dilute and infuse slowly through a large-bore vein. Stop immediately if burning or pain occurs.",
      "<span class=\"hl hl--danger\">FDA Black Box: fatal respiratory depression in children under 2 years.</span> Contraindicated in this age group.",
      "<span class=\"hl hl--danger\">NEVER give subcutaneously.</span> Chemical irritant properties cause guaranteed tissue damage.",
      "<span class=\"hl hl--warn\">Potentiates CNS depressants.</span> Reduce opioid dose by 25-50% when combined. Additive respiratory depression with benzodiazepines.",
      "Many EMS systems are removing promethazine in favor of <strong>ondansetron</strong> due to safer profile."
    ]
  },
  {
    id: 'pralidoxime',
    summary: 'Reactivates acetylcholinesterase after organophosphate or nerve agent poisoning, reversing the nicotinic effects that atropine cannot. Must be given before the enzyme bond ages and becomes irreversible.',
    genericName: 'Pralidoxime Chloride',
    tradeNames: ['Protopam', 'DuoDote', 'Mark I Kit', 'ATNAA'],
    category: ['Toxicology'],
    classes: ['Antidote'],
    source: 'Mixed',
    moa: [
      {
        brief: "Displaces the organophosphate from the enzyme's active site, reactivating acetylcholinesterase and restoring normal acetylcholine breakdown at nicotinic junctions. The organophosphate-pralidoxime complex is then excreted renally. Must be given before the enzyme bond ages and becomes irreversible.",
        target: {
          name: 'Organophosphate-inhibited AChE',
          action: 'antagonist',
          result: 'Reactivates AChE, reverses nicotinic toxicity',
          system: 'cholinergic'
        }
      }
    ],
    indications: [
      {
        name: 'Organophosphate / Nerve Agent Poisoning',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '1–2 g in 100 mL NS',
                onset: '10–40 min',
                duration: '~1–2 hrs',
                notes: ['Infuse over 15–30 min']
              },
              {
                via: ['IM'],
                amount: '600 mg per autoinjector',
                onset: '10–20 min',
                duration: '~1–2 hrs',
                repeat: 'May repeat x2 at 15 min intervals',
                maxDose: '1800 mg initial series',
                notes: ['Anterolateral thigh']
              }
            ],
            notes: ['Always give with atropine']
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV'],
                amount: '20–50 mg/kg',
                onset: '10–40 min',
                duration: '~1–2 hrs',
                maxDose: '2 g/dose',
                notes: ['Infuse over 15–30 min']
              }
            ],
            notes: ['Always give with atropine']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Carbamate poisoning'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Hypertension', 'Tachycardia', 'Muscle rigidity'],
    precautions: [
      "<span class=\"hl hl--danger\">Time-critical. Administer before aging occurs.</span> Aging rates vary: soman in minutes, sarin in hours, VX in hours to days. Once aged, pralidoxime is ineffective.",
      "<span class=\"hl hl--danger\">Always give WITH atropine.</span> Pralidoxime reverses nicotinic effects. Atropine reverses muscarinic effects. Neither alone is sufficient.",
      "<span class=\"hl hl--danger\">Infuse IV slowly over 15-30 minutes.</span> Rapid push can precipitate cardiac or respiratory arrest.",
      "Does not cross the blood-brain barrier well. <span class=\"hl hl--warn\">Cannot reverse CNS effects</span> such as seizures. Use benzodiazepines for nerve agent seizures."
    ]
  },
  {
    id: 'potassium-chloride',
    summary: 'The standard electrolyte replacement for hypokalemia and an ISMP high-alert medication where accidental rapid IV push is lethal. Primarily a hospital drug but critical for CCT paramedics managing existing KCl drips.',
    genericName: 'Potassium Chloride',
    tradeNames: ['Klor-Con', 'K-Dur', 'Micro-K'],
    category: ['Endocrine & Metabolic'],
    classes: ['Electrolyte'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Replaces potassium deficit, restoring the normal transmembrane electrochemical gradient. Normalizes cardiac conduction, skeletal muscle contractility, and nerve impulse transmission. Even small changes in extracellular potassium dramatically affect membrane excitability.',
        target: {
          name: 'Cellular membrane potential',
          action: 'restorer',
          result: 'Normalized cardiac conduction and muscle function',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Symptomatic Hypokalemia',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV drip'],
                amount: '10–20 mEq/hr',
                onset: 'During infusion',
                duration: 'Duration of infusion',
                maxDose: '40 mEq/hr via central line only',
                notes: ['Must dilute — never IV push']
              }
            ],
            notes: []
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hyperkalemia'
      },
      {
        text: 'Renal failure'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Hyperkalemia', 'Cardiac arrest', 'Tissue necrosis on extravasation', 'Phlebitis'],
    precautions: [
      "<span class=\"hl hl--danger\">ISMP high-alert medication.</span> Accidental rapid IV push of undiluted KCl causes immediate fatal cardiac arrest. This is a repeatedly documented lethal medication error.",
      "<span class=\"hl hl--danger\">NEVER give as IV push.</span> Must always be diluted and infused at controlled rates with continuous ECG monitoring.",
      "<span class=\"hl hl--warn\">Max 40 mEq/L via peripheral IV.</span> Higher concentrations require central line access.",
      "Not a standard prehospital medication. Primarily relevant for <strong>critical care transport</strong> paramedics inheriting patients on KCl drips."
    ]
  },
  {
    id: 'oxytocin',
    summary: 'A synthetic uterine stimulant given after delivery to prevent and treat postpartum hemorrhage.',
    genericName: 'Oxytocin',
    tradeNames: ['Pitocin'],
    category: ['OB/GYN'],
    classes: ['Hormone', 'Uterotonic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Stimulates rhythmic contractions of the upper uterine segment, mechanically compressing spiral arteries to achieve hemostasis. This is the first-line treatment for postpartum hemorrhage caused by uterine atony.',
        target: {
          name: 'Oxytocin receptors (myometrium)',
          action: 'agonist',
          result: 'Uterine contraction, ↓ uterine blood flow',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Postpartum Hemorrhage',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IM'],
                amount: '10 units',
                onset: '3–5 min',
                duration: '30–60 min',
                notes: []
              },
              {
                via: ['IV drip'],
                amount: '10–40 units in 1 L NS',
                onset: '~1 min',
                duration: 'Duration of infusion',
                notes: ['Titrate to uterine tone']
              }
            ],
            notes: ['Administer after delivery of placenta']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Prior to delivery of the infant'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Hypotension', 'Tachycardia', 'Nausea / vomiting', 'Uterine hyperstimulation'],
    precautions: [
      "<span class=\"hl hl--danger\">Do NOT give before delivery of the infant.</span> In prehospital EMS, oxytocin is ONLY given after delivery.",
      "<span class=\"hl hl--danger\">Never give as rapid undiluted IV push.</span> Bolus oxytocin causes severe hypotension, tachycardia, and myocardial ischemia. Dilute in IV fluid and infuse, or give IM.",
      "If bleeding persists despite oxytocin, evaluate the <strong>4 T's of PPH</strong>: Tone, Trauma, Tissue, Thrombin. Oxytocin only addresses tone.",
      'Plasma half-life is only 1-6 minutes. Continuous infusion or IM depot is necessary for sustained effect.'
    ]
  },
  {
    id: 'hydroxyzine',
    summary: 'A first-generation antihistamine with anxiolytic, antiemetic, and antipruritic properties. Used in some EMS systems as a non-benzodiazepine option for anxiety and as an opioid adjunct.',
    genericName: 'Hydroxyzine',
    tradeNames: ['Vistaril', 'Atarax'],
    category: ['Nausea & Vomiting', 'Allergic & Immune'],
    classes: ['Antihistamine', 'Antiemetic', 'Sedative', 'Anticholinergic'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Blocks histamine peripherally for antipruritic effects and centrally for sedation. Suppresses subcortical CNS activity, producing anxiolysis without cortical depression. Metabolized to cetirizine (Zyrtec), an active second-generation antihistamine.',
        target: {
          name: 'H1 receptors / Subcortical CNS',
          action: 'antagonist',
          result: 'Sedation, anxiolysis, antiemesis, antipruritus',
          system: 'histaminergic'
        }
      }
    ],
    indications: [
      {
        name: 'Nausea & Vomiting',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IM'],
                amount: '25–50 mg',
                onset: '15–30 min',
                duration: '4–6 hrs',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IM'],
                amount: '1.1 mg/kg',
                onset: '15–30 min',
                duration: '4–6 hrs',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Acute Anxiety / Agitation',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IM'],
                amount: '50–100 mg',
                onset: '15–30 min',
                duration: '4–6 hrs',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Prolonged QT interval'
      },
      {
        text: 'Early pregnancy'
      }
    ],
    adverseEffects: ['Sedation', 'QT prolongation', 'Injection site pain'],
    precautions: [
      "<span class=\"hl hl--danger\">NEVER give IV.</span> Hydroxyzine causes thrombosis, tissue necrosis, and hemolysis when given intravenously. The only parenteral route is deep IM.",
      "<span class=\"hl hl--warn\">QT prolongation</span> is contraindicated in patients with prolonged QT. Use caution with other QT-prolonging drugs.",
      "<span class=\"hl hl--warn\">Potentiates CNS depressants.</span> Reduce opioid doses if co-administering."
    ]
  },
  {
    id: 'hydroxocobalamin',
    summary: 'The preferred prehospital cyanide antidote. A vitamin B12a precursor that chelates cyanide to form nontoxic cyanocobalamin, safe in mixed smoke inhalation where CO poisoning coexists because it does not cause methemoglobinemia.',
    genericName: 'Hydroxocobalamin',
    tradeNames: ['Cyanokit'],
    category: ['Toxicology'],
    classes: ['Antidote', 'Cyanide Antagonist'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Binds cyanide in a 1:1 stoichiometric reaction, forming cyanocobalamin (vitamin B12), a nontoxic compound that is renally excreted. This directly removes cyanide from cytochrome oxidase, restoring aerobic cellular respiration.',
        target: {
          name: 'Free cyanide ions',
          action: 'chelator',
          result: 'Converts CN⁻ to cyanocobalamin → renal excretion',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Cyanide Poisoning',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '5 g in 200 mL NS',
                onset: 'During infusion',
                duration: 'Variable',
                repeat: 'May repeat 5 g x1 with medical consultation',
                notes: ['Infuse over 15 min (10–15 mL/min)']
              }
            ],
            notes: [
              'Skin, urine, and tears will turn red — not an allergic reaction',
              'SpO2 readings unreliable after administration'
            ]
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV'],
                amount: '70 mg/kg in 200 mL NS',
                onset: 'During infusion',
                duration: 'Variable',
                maxDose: '5 g',
                notes: ['Infuse over 15 min']
              }
            ],
            notes: [
              'Skin, urine, and tears will turn red — not an allergic reaction',
              'SpO2 readings unreliable after administration'
            ]
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Red-orange discoloration of skin and urine', 'Transient hypertension', 'Nausea / headache'],
    precautions: [
      "<span class=\"hl hl--danger\">Treat empirically.</span> No rapid cyanide blood test exists. Treat based on clinical history and signs: fire exposure, altered mental status, cardiovascular collapse, lactic acidosis with high SpO2.",
      "<span class=\"hl hl--warn\">Red discoloration is expected, NOT an allergic reaction.</span> Skin, tears, and urine turn red for days to weeks. This is harmless.",
      "<span class=\"hl hl--warn\">Interferes with pulse oximetry and lab tests.</span> SpO2 readings become unreliable. Draw blood samples BEFORE administration."
    ]
  },
  {
    id: 'albuterol',
    summary: 'A short-acting beta-2 agonist bronchodilator used for acute bronchospasm. Also shifts potassium intracellularly for hyperkalemia management.',
    genericName: 'Albuterol',
    tradeNames: ['Proventil', 'Ventolin', 'ProAir'],
    category: ['Airway & Respiratory'],
    classes: ['Bronchodilator', 'Beta-2 Agonist', 'Sympathomimetic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Relaxes bronchial smooth muscle by increasing intracellular cAMP, producing bronchodilation. Also opens calcium-sensitive potassium channels, causing membrane hyperpolarization and further relaxation.',
        target: {
          name: 'Beta-2 adrenergic receptors (bronchial smooth muscle)',
          action: 'agonist',
          result: 'Bronchodilation',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Drives potassium intracellularly across skeletal muscle membranes, temporarily reducing serum potassium. This is the mechanism used for hyperkalemia management.',
        target: {
          name: 'Na⁺/K⁺-ATPase (skeletal muscle)',
          action: 'stimulator',
          result: 'Intracellular K⁺ shift, ↓ serum K⁺',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Bronchospasm',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['NEB'],
                amount: '2.5–5 mg',
                onset: "<5 min",
                duration: '3–6 hrs',
                repeat: 'Unlimited frequency for ongoing distress',
                notes: []
              },
              {
                via: ['Inhaled'],
                amount: '6 puffs MDI',
                onset: "<5 min",
                duration: '3–6 hrs',
                repeat: 'Unlimited frequency for ongoing distress',
                notes: []
              }
            ],
            notes: ['5 mg for patients in respiratory distress; 2.5 mg sufficient for mild wheezing']
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['NEB'],
                amount: '2.5–5 mg',
                onset: "<5 min",
                duration: '3–6 hrs',
                repeat: 'Unlimited frequency for ongoing distress',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      },
      {
        name: 'Hyperkalemia',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['NEB'],
                amount: '5 mg',
                onset: "<5 min",
                duration: '3–6 hrs',
                repeat: 'May repeat if no response',
                notes: []
              }
            ],
            notes: []
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Tachycardia / palpitations', 'Tremor', 'Hypokalemia'],
    precautions: [
      "<span class=\"hl hl--warn\">Hypokalemia</span> with repeated dosing. Beta-2 stimulation drives potassium intracellularly. Monitor for weakness, arrhythmias, and ECG changes.",
      "<span class=\"hl hl--warn\">Beta-blockers antagonize albuterol.</span> Patients on non-selective beta-blockers may have blunted response. Consider ipratropium as primary bronchodilator or escalate to IM epinephrine.",
      "<span class=\"hl hl--warn\">Not effective for bronchiolitis.</span> Evidence does not support routine albuterol for bronchiolitis in infants.",
      'Do NOT withhold in true bronchospasm due to tachycardia concerns. The risk of undertreating severe bronchospasm far exceeds the risk of albuterol side effects.'
    ]
  },
  {
    id: 'hydralazine',
    summary: 'A direct arteriolar vasodilator used for severe hypertension in preeclampsia and hypertensive emergencies. Lowers peripheral resistance without affecting veins but causes reflex tachycardia.',
    genericName: 'Hydralazine',
    tradeNames: ['Apresoline'],
    category: ['Cardiovascular'],
    classes: ['Vasodilator', 'Antihypertensive'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Directly relaxes arteriolar smooth muscle by inhibiting calcium release from the sarcoplasmic reticulum, lowering SVR and blood pressure. Has little to no effect on veins. Triggers compensatory reflex tachycardia and increased cardiac output.',
        target: {
          name: 'Arteriolar smooth muscle (IP3/Ca²⁺ pathway)',
          action: 'inhibitor',
          result: 'Arteriolar vasodilation, ↓ SVR, ↓ BP',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Severe Hypertension in Pre-Eclampsia',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '5 mg',
                onset: '5–30 min',
                duration: '2–6 hrs',
                repeat: 'May repeat 10 mg after 20 min if persistent',
                notes: []
              }
            ],
            notes: ['Goal: reduce MAP by 20–25%, target ~140/90']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Coronary artery disease'
      },
      {
        text: 'Aortic dissection'
      },
      {
        text: 'Hypotension',
        relative: true
      }
    ],
    adverseEffects: ['Reflex tachycardia', 'Hypotension', 'Headache', 'Flushing'],
    precautions: [
      "<span class=\"hl hl--danger\">Unpredictable BP response.</span> Can cause precipitous, prolonged hypotension lasting up to 12 hours.",
      "<span class=\"hl hl--warn\">Target BP ~140/90 in preeclampsia.</span> Do not overcorrect. Goal is to prevent maternal stroke while maintaining uterine perfusion."
    ]
  },
  {
    id: 'dopamine',
    summary: 'An endogenous catecholamine with dose-dependent effects across dopaminergic, beta-1, and alpha-1 receptors. Third-line vasopressor behind norepinephrine and epinephrine, associated with more arrhythmias and higher mortality than norepinephrine in shock.',
    genericName: 'Dopamine',
    tradeNames: ['Intropin'],
    category: ['Cardiovascular', 'Resuscitation'],
    classes: [
      'Vasopressor',
      'Inotrope',
      'Chronotrope',
      'Catecholamine',
      'Sympathomimetic'
    ],
    source: 'Mixed',
    moa: [
      {
        brief: 'Dilates renal and mesenteric vessels, increasing renal blood flow and natriuresis. "Renal-dose" dopamine is debunked and has no proven clinical benefit for renal protection.',
        target: {
          name: 'D1 dopaminergic receptors',
          action: 'agonist',
          result: 'Renal/mesenteric vasodilation (no proven renal protection)',
          system: 'dopaminergic'
        }
      },
      {
        brief: 'Increases heart rate, contractility, and cardiac output. This is the primary inotropic range.',
        target: {
          name: 'Beta-1 adrenergic receptors',
          action: 'agonist',
          result: '↑ HR, ↑ contractility, ↑ CO',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Causes peripheral vasoconstriction, increasing SVR and blood pressure. At very high doses, alpha effects can override dopaminergic vasodilation, reducing renal and mesenteric perfusion.',
        target: {
          name: 'Alpha-1 adrenergic receptors',
          action: 'agonist',
          result: 'Vasoconstriction, ↑ SVR, ↑ BP',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Shock',
        notes: ['Cardiogenic, distributive, hypovolemic, and obstructive shock unresponsive to IV fluids'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV drip'],
                amount: '2–20 mcg/kg/min',
                onset: '~5 min',
                duration: 'Duration of infusion',
                notes: ['Titrate to MAP ≥65 mmHg', 'Ensure adequate volume resuscitation before starting']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV drip'],
                amount: '2–20 mcg/kg/min',
                onset: '~5 min',
                duration: 'Duration of infusion',
                notes: [
                  'Use when norepinephrine or epinephrine is unavailable',
                  "Titrate to physiologic targets (SBP ≥5th percentile for age, cap refill <2 sec)"
                ]
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Symptomatic Bradycardia',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV drip'],
                amount: '5–20 mcg/kg/min',
                onset: '~5 min',
                duration: 'Duration of infusion',
                notes: [
                  'Second-line after atropine failure',
                  'Alternative to transcutaneous pacing',
                  'Target clinical improvement, not a specific heart rate'
                ]
              }
            ],
            notes: ['2020 AHA update raised starting dose from 2 to 5 mcg/kg/min for bradycardia']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Pheochromocytoma'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Uncorrected tachyarrhythmias',
        relative: true
      },
      {
        text: 'Uncorrected hypovolemia',
        relative: true
      }
    ],
    adverseEffects: ['Tachycardia / tachyarrhythmias', 'Tissue necrosis on extravasation', 'Angina / myocardial ischemia'],
    precautions: [
      "<span class=\"hl hl--danger\">Third-line vasopressor.</span> Norepinephrine and epinephrine are preferred. Dopamine is associated with more arrhythmias than norepinephrine in shock.",
      "<span class=\"hl hl--danger\">Vesicant.</span> Severe tissue necrosis with extravasation. Infuse through a large-bore IV in a large vein. Treat extravasation with <strong>phentolamine</strong> infiltration.",
      "<span class=\"hl hl--warn\">Not for pediatric bradycardia.</span> Use epinephrine instead."
    ]
  },
  {
    id: 'hydromorphone',
    summary: 'A semi-synthetic opioid 5 to 7 times more potent than morphine per milligram, used for moderate-to-severe acute pain when morphine is ineffective or poorly tolerated. Fewer histamine-related side effects than morphine.',
    genericName: 'Hydromorphone',
    tradeNames: ['Dilaudid'],
    category: ['Pain Management'],
    classes: ['Opioid Analgesic', 'Analgesic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Inhibits ascending pain pathways in the CNS through presynaptic neurotransmitter release inhibition and postsynaptic neuronal hyperpolarization. Produces analgesia, sedation, and euphoria. Also depresses the medullary respiratory center, causing respiratory depression and cough suppression.',
        target: {
          name: 'Mu-opioid receptors (CNS)',
          action: 'agonist',
          result: 'Analgesia, sedation, respiratory depression',
          system: 'opioid'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pain',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.5–1 mg',
                onset: '5 min',
                duration: '3–4 hr',
                repeat: 'q10–15 min PRN',
                maxDose: '2 mg',
                notes: ['Slow push over 2–3 min']
              },
              {
                via: ['IM'],
                amount: '1–2 mg',
                onset: '15–30 min',
                duration: '3–4 hr',
                notes: []
              }
            ],
            notes: ['Use caution in elderly, hypotension, or head injury']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Respiratory depression (without ventilatory support)'
      },
      {
        text: 'Severe asthma'
      }
    ],
    adverseEffects: ['Respiratory depression', 'Hypotension', 'Nausea / vomiting', 'Sedation'],
    precautions: [
      "<span class=\"hl hl--danger\">5-7x more potent than morphine per milligram.</span> A 1 mg dose equals 5-7 mg of morphine. Dosing errors from confusing hydromorphone with morphine are well-documented and potentially fatal.",
      "<span class=\"hl hl--danger\">Respiratory depression.</span> Monitor SpO2 and ventilatory effort. Risk increases in opioid-naive patients, elderly, COPD, and when combined with other CNS depressants. Have naloxone available.",
      "<span class=\"hl hl--warn\">Use with caution in elderly.</span> Start with lowest effective dose. Reduced clearance and increased sensitivity to respiratory depression.",
      "<span class=\"hl hl--warn\">Use with caution in head injury.</span> Opioids can increase ICP via CO2 retention and alter mental status, confounding neurological assessment."
    ]
  },
  {
    id: 'droperidol',
    summary: 'A butyrophenone antipsychotic used for acute agitation and nausea, with faster onset than haloperidol. Carries an FDA black box warning for QT prolongation.',
    genericName: 'Droperidol',
    tradeNames: ['Inapsine'],
    category: ['Neurological', 'Nausea & Vomiting', 'Sedation & Anesthesia'],
    classes: ['Antipsychotic', 'Antiemetic', 'Butyrophenone'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Reduces motor activity, anxiety, agitation, and nausea through dopamine antagonism in the mesolimbic system and chemoreceptor trigger zone. Also has antiserotonergic, alpha-adrenergic blocking, antihistaminic, and anticonvulsive properties.',
        target: {
          name: 'D2 dopamine receptors (mesolimbic / CTZ)',
          action: 'antagonist',
          result: 'Sedation, antiemesis, reduced agitation',
          system: 'dopaminergic'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Agitation',
        notes: ['Option for high violence risk patients'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '2.5 mg',
                onset: '3–5 min',
                duration: '2–4 hr',
                notes: []
              },
              {
                via: ['IM'],
                amount: '5–10 mg',
                onset: '5–10 min',
                duration: '2–4 hr',
                notes: []
              }
            ],
            notes: ['Maintain cardiac monitoring for QT prolongation']
          }
        ]
      },
      {
        name: 'Nausea & Vomiting',
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IM'],
                amount: '1.25 mg',
                onset: '3–10 min',
                duration: '2–4 hr',
                notes: []
              }
            ],
            notes: ['Contraindicated in known or suspected prolonged QT']
          }
        ],
        notes: []
      }
    ],
    contraindications: [
      {
        text: 'QT prolongation'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['QT prolongation', 'Hypotension', 'Akathisia', 'Dystonia'],
    precautions: [
      "<span class=\"hl hl--danger\">FDA Black Box: QT prolongation.</span> Cardiac monitoring required. Use caution with other QT-prolonging drugs.",
      "<span class=\"hl hl--warn\">Akathisia</span> is the most common adverse effect and can paradoxically worsen apparent agitation. Differentiate from inadequate sedation. Treat with <strong>diphenhydramine</strong>.",
      "<span class=\"hl hl--warn\">Alpha-adrenergic blockade causes hypotension.</span> More pronounced with IV route and in hypovolemic patients.",
      "<span class=\"hl hl--warn\">Do not combine with promethazine.</span> Additive QT prolongation risk."
    ]
  },
  {
    id: 'etomidate',
    summary: 'A hemodynamically neutral RSI induction agent that maintains blood pressure, heart rate, and cardiac output while reducing ICP. Used for hemodynamically unstable patients needing intubation.',
    genericName: 'Etomidate',
    tradeNames: ['Amidate'],
    category: ['Sedation & Anesthesia'],
    classes: ['Sedative', 'Hypnotic', 'Induction Agent'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Enhances GABA-mediated chloride influx, producing rapid sedation and unconsciousness. Depresses the reticular activating system. Also inhibits adrenal 11-β-hydroxylase, blocking cortisol and aldosterone synthesis.',
        target: {
          name: 'GABA-A receptors (CNS) / 11-β-hydroxylase (adrenal)',
          action: 'enhancer / inhibitor',
          result: 'Sedation, ↓ ICP, adrenal suppression',
          system: 'GABAergic'
        }
      }
    ],
    indications: [
      {
        name: 'RSI Induction',
        notes: [
          'Hemodynamically neutral; preferred when hypotension is a concern',
          'Cerebroprotective — lowers ICP while maintaining cerebral perfusion pressure'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.3 mg/kg',
                onset: '15–45 sec',
                duration: '3–5 min',
                notes: ['Administer IV push over 30–60 sec; typical dose ~20 mg']
              }
            ],
            notes: ['May cause myoclonus — not seizure activity']
          },
          {
            population: 'Pediatric',
            qualifier: '≥10 yr',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.3 mg/kg',
                onset: '15–45 sec',
                duration: '3–5 min',
                notes: ['Administer IV push over 30–60 sec']
              }
            ],
            notes: ["Not recommended <10 yr — insufficient data"]
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Adrenal insufficiency',
        relative: true
      }
    ],
    adverseEffects: ['Adrenal suppression', 'Myoclonus', 'Pain on injection', 'Transient apnea'],
    precautions: [
      "<span class=\"hl hl--warn\">Adrenal suppression</span> for 6-24+ hours after a single dose.",
      "<span class=\"hl hl--warn\">Myoclonus in 30-60% of patients.</span> Involuntary muscle jerking that can be mistaken for seizures. Not epileptiform and does not require anticonvulsant treatment.",
      "<span class=\"hl hl--danger\">No analgesic properties.</span> Only provides sedation and amnesia. Post-intubation analgesia must be started immediately."
    ]
  },
  {
    id: 'acetaminophen',
    summary: 'A non-opioid analgesic and antipyretic that reduces pain and fever without anti-inflammatory or antiplatelet effects. The leading cause of acute liver failure in the US through NAPQI-mediated hepatotoxicity in overdose.',
    genericName: 'Acetaminophen',
    tradeNames: ['Tylenol', 'Ofirmev'],
    category: ['Pain Management'],
    classes: ['Analgesic', 'Antipyretic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Ihibits COX pathways centrally (not peripherally like NSAIDs), reducing prostaglandin synthesis in the CNS and producing analgesia and antipyresis without peripheral anti-inflammatory effect. May also modulate serotonergic descending pain pathways and activate the endocannabinoid system.',
        target: {
          name: 'Central COX / Nitric oxide / Serotonergic pathways',
          action: 'inhibitor',
          result: 'Central analgesia, antipyresis, no peripheral anti-inflammatory effect',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pain',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['PO'],
                amount: '1000 mg',
                onset: '30–60 min',
                duration: '4–6 hr',
                notes: []
              },
              {
                via: ['IV'],
                amount: '1000 mg',
                onset: '5–10 min',
                duration: '4–6 hr',
                notes: ['Infuse over 15 min']
              },
              {
                via: ['PR'],
                amount: '1000 mg',
                onset: '30–60 min',
                duration: '4–6 hr',
                notes: ['Use when patient unable to swallow']
              }
            ],
            notes: ['Max 4 g/day from all sources and routes']
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['PO'],
                amount: '15 mg/kg',
                onset: '30–60 min',
                duration: '4–6 hr',
                maxDose: '1000 mg',
                notes: []
              },
              {
                via: ['IV', 'IO'],
                amount: '15 mg/kg',
                onset: '5–10 min',
                duration: '4–6 hr',
                maxDose: '750 mg',
                notes: ['Infuse over 15 min']
              },
              {
                via: ['PR'],
                amount: '15 mg/kg',
                onset: '30–60 min',
                duration: '4–6 hr',
                maxDose: '1000 mg',
                notes: ['Use when patient unable to swallow']
              }
            ],
            notes: ['Max 75 mg/kg/day']
          }
        ]
      },
      {
        name: 'Fever',
        sameDoseAs: 'Acute Pain'
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Severe hepatic disease'
      }
    ],
    adverseEffects: ['Hepatotoxicity in overdose', 'Nausea / vomiting'],
    precautions: [
      "<span class=\"hl hl--danger\">Hepatotoxicity in overdose.</span> The #1 cause of acute liver failure in the US. Toxic dose is >150 mg/kg or >7.5-10 g in adults.",
      "<span class=\"hl hl--danger\">Antidote is N-acetylcysteine (NAC).</span> Most effective within 8 hours of ingestion.",
      "<span class=\"hl hl--warn\">Overdose is initially asymptomatic.</span> Patients may appear well for the first 24 hours. Hepatotoxicity becomes apparent at 72-96 hours. Do not be reassured by an initially well-appearing patient.",
      "Use with caution in <span class=\"hl hl--warn\">hepatic impairment</span>, chronic alcohol use, and malnutrition. These patients are susceptible to hepatotoxicity at lower doses."
    ]
  },
  {
    id: 'activated-charcoal',
    summary: 'A porous carbon adsorbent that binds drugs and toxins in the GI lumen to prevent systemic absorption, most effective within one hour of ingestion. Does not bind metals, alcohols, acids, alkalis, or lithium.',
    genericName: 'Activated Charcoal',
    tradeNames: ['Actidose-Aqua'],
    category: ['Toxicology'],
    classes: ['Antidote', 'Adsorbent'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Physically adsorbs drugs and toxins onto its pore structure, trapping them in the GI lumen and preventing systemic absorption. Optimal charcoal-to-toxin ratio is 10:1. Binds nonpolar organic compounds best; polar, ionized, and inorganic substances bind poorly.',
        target: {
          name: 'Ingested toxins (GI lumen)',
          action: 'adsorbent',
          result: 'Prevents GI absorption, fecal elimination of toxin',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Overdose / Poisoning (Oral Ingestion)',
        notes: [
          'Most effective within 1 hour of ingestion',
          'Use aqueous form only (without sorbitol) in the prehospital setting',
          'Do not administer if risk of rapidly decreasing mental status',
          'Patient must be able to protect own airway'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['PO'],
                amount: '1 g/kg',
                onset: 'Immediate',
                duration: 'Continues in GI tract',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['PO'],
                amount: '1 g/kg',
                onset: 'Immediate',
                duration: 'Continues in GI tract',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Unprotected airway'
      },
      {
        text: 'Caustic ingestion'
      },
      {
        text: 'Inability to swallow'
      }
    ],
    adverseEffects: ['Vomiting', 'Aspiration pneumonitis'],
    precautions: [
      "<span class=\"hl hl--danger\">Aspiration is the primary risk.</span> Never give to a patient with altered mental status or declining consciousness unless the airway is protected.",
      "<span class=\"hl hl--danger\">Does NOT bind everything.</span> Ineffective for iron, lithium, alcohols, caustics, heavy metals, potassium, and hydrocarbons.",
      "<span class=\"hl hl--warn\">1-hour window.</span> Greatest benefit within 30-60 minutes of ingestion. Diminishing returns thereafter except for extended-release formulations.",
      "<span class=\"hl hl--warn\">Without sorbitol.</span> Sorbitol increases vomiting and aspiration risk with no proven benefit."
    ]
  },
  {
    id: 'adenosine',
    summary: 'An endogenous purine nucleoside that transiently blocks AV node conduction to terminate SVT. Must be given as an ultra-rapid IV push with immediate flush due to a half-life of less than 10 seconds.',
    genericName: 'Adenosine',
    tradeNames: ['Adenocard'],
    category: ['Cardiovascular'],
    classes: ['Class V Antiarrhythmic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Slows AV conduction and increases the AV refractory period by opening potassium channels and inhibiting calcium influx, interrupting reentrant circuits and terminating SVT. Rapidly metabolized by red blood cells and endothelial cells with a half-life under 10 seconds.',
        target: {
          name: 'A1 adenosine receptors (AV node)',
          action: 'agonist',
          result: 'Transient AV block, interrupts reentry, terminates SVT',
          system: 'purinergic'
        }
      }
    ],
    indications: [
      {
        name: 'Supraventricular Tachycardia',
        notes: [
          'Preferred drug for stable SVT; may also be considered for unstable SVT before cardioversion',
          'Attempt vagal maneuvers before administration',
          'Transient asystole or bradycardia is expected',
          'Avoid in pre-excitation A-fib (WPW)'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '6 mg',
                onset: '10–20 sec',
                duration: '10–20 sec',
                repeat: '12 mg if no conversion in 1–2 min',
                notes: ['Rapid push over 1–3 sec', 'Follow immediately with 20 mL NS flush']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '10–20 sec',
                duration: '10–20 sec',
                maxDose: '6 mg',
                repeat: '0.2 mg/kg if no conversion in 1–2 min (max 12 mg)',
                notes: ['Rapid push over 1–3 sec', 'Follow immediately with ≥5 mL NS flush']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Regular Monomorphic Wide Complex Tachycardia',
        sameDoseAs: 'Supraventricular Tachycardia'
      }
    ],
    contraindications: [
      {
        text: 'Second- or third-degree AV block (without pacemaker)'
      },
      {
        text: 'Sick sinus syndrome (without pacemaker)'
      },
      {
        text: 'Atrial fibrillation or flutter with WPW'
      },
      {
        text: 'Ventricular tachycardia'
      },
      {
        text: 'Asthma'
      },
      {
        text: 'Bronchospasm'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Chest tightness / dyspnea', 'Flushing', 'Transient asystole', 'Bronchospasm'],
    precautions: [
      "<span class=\"hl hl--danger\">Rapid IV push (1-3 sec) with immediate flush.</span> Half-life is less than 10 seconds. Slow push equals a wasted dose.",
      "<span class=\"hl hl--danger\">Avoid in WPW with atrial fibrillation/flutter.</span> AV node blockade forces conduction through the accessory pathway, risking degeneration into VF.",
      "<span class=\"hl hl--warn\">Warn the patient.</span> Brief but intense sensation of chest pressure, flushing, and impending doom. Self-limiting in under 30 seconds.",
      "<span class=\"hl hl--warn\">Dipyridamole and carbamazepine potentiate adenosine.</span> Reduce initial dose to 3 mg in patients taking these medications.",
      "<span class=\"hl hl--warn\">Caffeine and theophylline antagonize adenosine.</span> Higher doses may be required."
    ]
  },
  {
    id: 'amiodarone',
    summary: 'A multichannel blocker classified as Class III but with properties of all four Vaughan-Williams classes. Used for shock-refractory VF/pVT and stable wide-complex tachycardia, with an extremely long half-life of approximately 40 days.',
    genericName: 'Amiodarone',
    tradeNames: ['Pacerone', 'Cordarone', 'Nexterone'],
    category: ['Cardiovascular', 'Resuscitation'],
    classes: [
      'Class III Antiarrhythmic',
      'Sodium Channel Blocker',
      'Potassium Channel Blocker',
      'Beta Blocker',
      'Calcium Channel Blocker'
    ],
    source: 'Mixed',
    moa: [
      {
        brief: 'Primarily prolongs action potential duration and the refractory period by blocking potassium channels. Also blocks sodium channels, calcium channels, and has non-competitive anti-adrenergic activity, suppressing automaticity, slowing conduction, and stabilizing all cardiac tissue.',
        target: {
          name: 'K⁺/Na⁺/Ca²⁺ channels + β-adrenergic receptors (cardiac)',
          action: 'blocker',
          result: '↑ Refractory period, ↓ conduction velocity, ↓ automaticity',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Cardiac Arrest',
        notes: [
          'For ventricular fibrillation or pulseless ventricular tachycardia',
          'Give after 3rd defibrillation if rhythm persists despite CPR and vasopressor',
          'Do not use with other QT-prolonging antiarrhythmics'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '300 mg',
                onset: 'Immediate',
                duration: 'Variable',
                repeat: '150 mg in 3–5 min if no conversion',
                notes: ['Rapid IV push']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '5 mg/kg',
                onset: 'Immediate',
                duration: 'Variable',
                maxDose: '300 mg',
                notes: ['Rapid IV push']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Stable Wide Complex Tachycardia',
        notes: ['Monitor for hypotension and bradycardia during infusion'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '150 mg',
                onset: 'During infusion',
                duration: 'Variable',
                repeat: '150 mg if ventricular tachycardia recurs',
                notes: ['Infuse over 10 min', 'Mix in 100 mL D5W']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '5 mg/kg',
                onset: 'During infusion',
                duration: 'Variable',
                maxDose: '300 mg',
                notes: ['Infuse over 20–60 min']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Refractory Supraventricular Tachycardia',
        sameDoseAs: 'Stable Wide Complex Tachycardia'
      },
      {
        name: 'Atrial Fibrillation / Atrial Flutter Rate Control',
        sameDoseAs: 'Stable Wide Complex Tachycardia'
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to amiodarone or iodine'
      },
      {
        text: 'Sinus node dysfunction (without pacemaker)'
      },
      {
        text: 'Second- or third-degree heart block (without pacemaker)'
      },
      {
        text: 'Cardiogenic shock'
      }
    ],
    adverseEffects: ['Hypotension', 'Bradycardia', 'QT prolongation', 'Phlebitis'],
    precautions: [
      "<span class=\"hl hl--warn\">Extremely long half-life (~40 days).</span> Once given, effects persist for weeks to months. Cannot be turned off if adverse effects develop.",
      "<span class=\"hl hl--warn\">Do NOT combine with other QT-prolonging drugs.</span> Give only one antiarrhythmic during cardiac arrest. Combining with procainamide or sotalol dramatically increases torsades risk.",
      "<span class=\"hl hl--warn\">Can promote cardioversion in AF.</span> In patients not receiving anticoagulation, amiodarone-induced cardioversion could dislodge atrial thrombus and cause stroke."
    ]
  },
  {
    id: 'aspirin',
    summary: 'An antiplatelet that irreversibly blocks COX-1 to stop platelet aggregation. First drug given for suspected acute coronary syndrome, chewed for rapid absorption.',
    genericName: 'Aspirin',
    tradeNames: ['Bayer', 'Ecotrin', 'St. Joseph'],
    category: ['Cardiovascular'],
    classes: ['NSAID', 'Antiplatelet', 'Analgesic', 'Antipyretic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Irreversibly acetylates COX-1 in platelets, blocking thromboxane A₂ synthesis and inhibiting platelet aggregation for the life of the platelet (approximately 10 days). A single dose disables every platelet it contacts, and no reversal agent exists.',
        target: {
          name: 'COX-1 (platelet)',
          action: 'inhibitor',
          result: 'Irreversible ↓ platelet aggregation',
          system: 'enzymatic'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Coronary Syndrome',
        notes: ['Give early, do not delay for other interventions', 'Account for any aspirin already taken by patient'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['PO'],
                amount: '324 mg',
                onset: '15–20 min',
                duration: '7–10 days',
                notes: ['Chew thoroughly, do not swallow whole']
              },
              {
                via: ['PR'],
                amount: '300 mg',
                onset: '30–60 min',
                duration: '7–10 days',
                notes: ['Use if patient unable to take PO']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to aspirin or NSAIDs'
      },
      {
        text: 'Active GI bleeding'
      },
      {
        text: 'Bleeding disorder'
      },
      {
        text: 'Aspirin-exacerbated respiratory disease'
      }
    ],
    adverseEffects: ['GI upset', 'Increased bleeding risk', 'Bronchospasm'],
    precautions: [
      "<span class=\"hl hl--danger\">No reversal agent.</span> Antiplatelet effect lasts the life of the platelet (~10 days). Platelet transfusion is the only way to restore function.",
      "Must be <strong>chewed</strong>, not swallowed whole. Enteric-coated aspirin swallowed intact delays absorption by hours.",
      "<span class=\"hl hl--warn\">Ask about NSAID/aspirin allergy</span> before administration. Aspirin-exacerbated respiratory disease can trigger severe bronchospasm."
    ]
  },
  {
    id: 'atropine',
    summary: 'A muscarinic antagonist used to increase heart rate in symptomatic bradycardia and to dry secretions in organophosphate and nerve agent poisoning.',
    genericName: 'Atropine Sulfate',
    tradeNames: ['Atropen'],
    category: ['Cardiovascular', 'Toxicology'],
    classes: ['Anticholinergic', 'Vagolytic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Removes vagal tone from the SA and AV nodes, increasing heart rate and AV conduction.',
        target: {
          name: 'Muscarinic M₂ receptors (cardiac)',
          action: 'antagonist',
          result: '↑ HR, ↑ AV conduction',
          system: 'cholinergic'
        }
      },
      {
        brief: 'Dries salivary, bronchial, and GI secretions, relaxes bronchial smooth muscle, and reduces GI motility. Critical in organophosphate and nerve agent poisoning to reverse the cholinergic crisis.',
        target: {
          name: 'Muscarinic receptors (glandular/smooth muscle)',
          action: 'antagonist',
          result: '↓ Secretions, bronchodilation',
          system: 'cholinergic'
        }
      }
    ],
    indications: [
      {
        name: 'Symptomatic Bradycardia',
        notes: [
          'Ineffective in hypothermic bradycardia',
          'Unlikely to be effective in Mobitz II or third-degree AV block',
          'Cardiac transplant patients will not respond'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mg',
                onset: '1–2 min',
                duration: '2–6 hr',
                repeat: 'q3–5 min',
                maxDose: '3 mg',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.02 mg/kg',
                onset: '1–2 min',
                duration: '2–6 hr',
                repeat: 'May repeat once',
                maxDose: '0.5 mg/dose',
                notes: ['Minimum dose 0.1 mg to avoid paradoxical bradycardia']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Organophosphate / Nerve Agent Poisoning',
        notes: ['Titrate to drying of secretions, not heart rate', 'May require very large cumulative doses (20+ mg)'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '2–4 mg',
                onset: '1–2 min',
                duration: '2–6 hr',
                repeat: 'Double dose q5 min until secretions dry',
                notes: []
              },
              {
                via: ['IM'],
                amount: '2 mg',
                onset: '3–5 min',
                duration: '2–6 hr',
                repeat: 'q5–10 min as needed',
                notes: ['Mark I kit or DuoDote autoinjector']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.02–0.05 mg/kg',
                onset: '1–2 min',
                duration: '2–6 hr',
                repeat: 'q5 min until secretions dry',
                notes: ['Minimum dose 0.1 mg']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Narrow-angle glaucoma',
        relative: true
      },
      {
        text: 'Myasthenia gravis',
        relative: true
      }
    ],
    adverseEffects: ['Tachycardia', 'Dry mouth / decreased secretions', 'Mydriasis', 'Confusion / agitation'],
    precautions: [
      "<span class=\"hl hl--danger\">Ineffective in hypothermic bradycardia.</span> Do not delay pacing for repeated atropine doses.",
      "<span class=\"hl hl--danger\">Will not work in denervated hearts</span> (cardiac transplant patients). Proceed directly to chronotropic agents or transcutaneous pacing.",
      "<span class=\"hl hl--warn\">Push IV rapidly.</span> Slow injection or doses below 0.1 mg can paradoxically worsen bradycardia.",
      "In organophosphate poisoning, <span class=\"hl hl--danger\">there is no maximum dose.</span> Titrate to drying of tracheobronchial secretions. Severe cases may require tens of milligrams."
    ]
  },
  {
    id: 'bumetanide',
    summary: 'A loop diuretic approximately 40 times more potent than furosemide by weight, used for acute pulmonary edema when aggressive diuresis is needed. Current evidence favors vasodilators over diuretics as first-line prehospital CHF treatment.',
    genericName: 'Bumetanide',
    tradeNames: ['Bumex'],
    category: ['Cardiovascular'],
    classes: ['Loop Diuretic'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Blocks sodium and chloride reabsorption in the thick ascending limb of the loop of Henle, producing profound diuresis with loss of sodium, potassium, chloride, and water. Also causes venodilation that reduces preload before diuresis begins.',
        target: {
          name: 'NKCC2 cotransporter (loop of Henle)',
          action: 'blocker',
          result: 'Profound diuresis, ↓ preload',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pulmonary Edema',
        notes: ['Nitrates and CPAP are preferred first-line prehospital treatments'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.5–1 mg',
                onset: '2–3 min',
                duration: '3.5–4 hr',
                notes: ['Administer slow IV push over 1–2 min']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to bumetanide or sulfonamides'
      },
      {
        text: 'Anuria'
      },
      {
        text: 'Electrolyte depletion'
      },
      {
        text: 'Hepatic coma'
      },
      {
        text: 'Hypovolemia'
      },
      {
        text: 'Hypotension',
        relative: true
      }
    ],
    adverseEffects: ['Hypokalemia', 'Hypotension', 'Dehydration', 'Ototoxicity'],
    precautions: [
      "<span class=\"hl hl--danger\">NASEMSO discourages routine prehospital diuretics.</span> Pulmonary edema is more commonly a redistribution problem. Vasodilators and CPAP are preferred first-line.",
      "<span class=\"hl hl--warn\">40x more potent than furosemide.</span> A 1 mg dose equals 40 mg of furosemide. Small dosing errors cause large clinical effects.",
      "<span class=\"hl hl--warn\">Assess volume status before administration.</span> Inappropriate diuresis in patients misdiagnosed with CHF can cause profound hypotension."
    ]
  },
  {
    id: 'calcium-chloride',
    summary: 'Provides elemental calcium to stabilize cardiac membranes in hyperkalemia and overcome calcium channel blockade in CCB overdose. Contains three times more elemental calcium per gram than calcium gluconate but is caustic to peripheral veins.',
    genericName: 'Calcium Chloride',
    tradeNames: [],
    category: ['Cardiovascular', 'Toxicology', 'Endocrine & Metabolic'],
    classes: ['Electrolyte', 'Antidote'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Stabilizes cardiac cell membranes by raising the threshold potential, reducing the risk of fatal dysrhythmias caused by hyperkalemia. Does not lower serum potassium; it buys time by protecting the heart while other treatments work.',
        target: {
          name: 'Cardiac cell membranes',
          action: 'stabilizer',
          result: '↑ Threshold potential, ↓ dysrhythmia risk',
          system: 'ion-channel'
        }
      },
      {
        brief: 'Helps overcome competitive blockade of L-type calcium channels in CCB overdose, partially restoring cardiac contractility and vascular tone.',
        target: {
          name: 'L-type calcium channels',
          action: 'donor',
          result: 'Partially restores contractility & vascular tone',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Hyperkalemia',
        notes: [
          'Stabilizes cardiac membrane, does not lower potassium',
          'Significant tissue necrosis risk if extravasation occurs'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 g',
                onset: '1–3 min',
                duration: '30–60 min',
                notes: ['10% solution, administer over 2–5 min']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '20 mg/kg',
                onset: '1–3 min',
                duration: '30–60 min',
                maxDose: '1 g',
                notes: ['10% solution (0.2 mL/kg), administer over 5–10 min']
              }
            ],
            notes: ['Calcium gluconate preferred in pediatrics due to lower tissue necrosis risk']
          }
        ]
      },
      {
        name: 'Calcium Channel Blocker Overdose',
        sameDoseAs: 'Hyperkalemia'
      }
    ],
    contraindications: [
      {
        text: 'Hypercalcemia'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Digoxin toxicity',
        relative: true
      }
    ],
    adverseEffects: ['Tissue necrosis on extravasation', 'Bradycardia', 'Hypotension'],
    precautions: [
      "<span class=\"hl hl--danger\">Severe tissue necrosis with extravasation.</span> Administer through a large-bore, patent IV. <strong>Calcium gluconate</strong> is preferred when central access is unavailable.",
      "<span class=\"hl hl--danger\">3x more elemental calcium than calcium gluconate.</span> Do not substitute 1:1. Use roughly one-third the dose when converting from gluconate.",
      "<span class=\"hl hl--warn\">Administer over 5 minutes in non-arrest patients.</span> Rapid push can cause bradycardia, hypotension, and cardiac arrest.",
      "CaCl <strong>does not lower serum potassium.</strong> It stabilizes the cardiac membrane only. Always pair with potassium-lowering treatments."
    ]
  },
  {
    id: 'dobutamine',
    summary: 'A synthetic catecholamine used as the primary inotrope for cardiogenic shock. Increases cardiac contractility and output without the vasoconstriction of dopamine or norepinephrine.',
    genericName: 'Dobutamine',
    tradeNames: ['Dobutrex'],
    category: ['Cardiovascular'],
    classes: [
      'Sympathomimetic',
      'Catecholamine',
      'Beta-1 Agonist',
      'Inotrope',
      'Chronotrope'
    ],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Increases contractility and cardiac output with modest heart rate increase at therapeutic doses.',
        target: {
          name: 'β-1 receptors',
          action: 'agonist',
          result: '↑ Contractility, ↑ cardiac output',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Produces mild peripheral vasodilation, reducing afterload. The alpha-1 effects of its two isomers cancel each other out, leaving a net inodilator profile: improved output with reduced SVR.',
        target: {
          name: 'β-2 receptors',
          action: 'agonist',
          result: 'Mild vasodilation, ↓ SVR',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Cardiogenic Shock',
        notes: ["Use with caution if SBP <90 due to beta-2 mediated vasodilation", 'Requires infusion pump'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV drip'],
                amount: '2–20 mcg/kg/min',
                onset: '1–2 min',
                duration: 'Duration of infusion',
                notes: ['Start at 2–5 mcg/kg/min, titrate to effect']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypertrophic cardiomyopathy (HOCM)'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Uncorrected hypovolemia',
        relative: true
      }
    ],
    adverseEffects: ['Tachycardia', 'Dysrhythmias', 'Hypotension'],
    precautions: [
      "<span class=\"hl hl--danger\">Correct hypovolemia FIRST.</span> Dobutamine in a volume-depleted patient will cause profound hypotension.",
      "<span class=\"hl hl--danger\">Contraindicated in HOCM/IHSS.</span> Increased contractility worsens dynamic outflow tract obstruction.",
      "<span class=\"hl hl--warn\">Paradoxical hypotension</span> can occur at higher doses from beta-2 vasodilation outpacing cardiac output. Reduce dose and consider adding a vasopressor.",
      "Primarily a <strong>critical care transport</strong> drug. Not in the NASEMSO formulary."
    ]
  },
  {
    id: 'dexamethasone',
    summary: 'A long-acting corticosteroid approximately 25 times more potent than hydrocortisone, preferred in EMS for croup and bronchospasm. A single dose lasts 36 to 72 hours.',
    genericName: 'Dexamethasone',
    tradeNames: ['Decadron', 'Dexasone'],
    category: ['Airway & Respiratory', 'Allergic & Immune'],
    classes: ['Corticosteroid'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Suppresses inflammatory mediators including prostaglandins, leukotrienes, and cytokines by altering gene transcription. Reduces airway edema, capillary permeability, and inflammatory cell migration. Minimal mineralocorticoid activity.',
        target: {
          name: 'Glucocorticoid receptors',
          action: 'agonist',
          result: 'Broad anti-inflammatory & immunosuppressive effect',
          system: 'inflammatory'
        }
      }
    ],
    indications: [
      {
        name: 'Asthma / Bronchospasm',
        notes: ['Single dose is equally effective as multi-day courses of other steroids'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['PO'],
                amount: '16 mg',
                onset: '1–2 hr',
                duration: '36–72 hr',
                notes: []
              },
              {
                via: ['IV', 'IM'],
                amount: '16 mg',
                onset: '1–2 hr',
                duration: '36–72 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['PO'],
                amount: '0.6 mg/kg',
                onset: '1–2 hr',
                duration: '36–72 hr',
                maxDose: '16 mg',
                notes: ['IV solution may be given PO']
              },
              {
                via: ['IV', 'IM'],
                amount: '0.6 mg/kg',
                onset: '1–2 hr',
                duration: '36–72 hr',
                maxDose: '16 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Croup',
        sameDoseAs: 'Asthma / Bronchospasm'
      },
      {
        name: 'Adrenal Insufficiency (Shock)',
        sameDoseAs: 'Asthma / Bronchospasm'
      },
      {
        name: 'Acute Mountain Sickness',
        notes: ['Treats symptoms but does not facilitate acclimatization', 'Descent remains primary treatment'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['PO', 'IV', 'IM'],
                amount: '4 mg',
                onset: '1–2 hr',
                duration: '36–72 hr',
                repeat: 'q6 hr until symptoms resolve',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['PO', 'IV', 'IM'],
                amount: '0.15 mg/kg',
                onset: '1–2 hr',
                duration: '36–72 hr',
                repeat: 'q6 hr',
                maxDose: '4 mg/dose',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'High Altitude Cerebral Edema (HACE)',
        notes: ['Descent is the primary treatment', 'Initiate dexamethasone immediately in suspected HACE'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['PO', 'IV', 'IM'],
                amount: '8 mg',
                onset: '1–2 hr',
                duration: '36–72 hr',
                repeat: 'Then 4 mg q6 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['PO', 'IV', 'IM'],
                amount: '0.15 mg/kg',
                onset: '1–2 hr',
                duration: '36–72 hr',
                repeat: 'q6 hr',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Systemic fungal infection'
      }
    ],
    adverseEffects: ['Hyperglycemia', 'GI upset', 'Insomnia / agitation'],
    precautions: [
      "<span class=\"hl hl--warn\">Onset is 1-2 hours.</span> Does not provide immediate relief. Bronchodilators and nebulized epinephrine are the acute treatments; steroids prevent the delayed inflammatory wave.",
      "<span class=\"hl hl--warn\">Check blood glucose</span> in diabetic patients. Even a single dose can cause clinically significant hyperglycemia.",
      "For <span class=\"hl hl--warn\">adrenal crisis</span>, hydrocortisone is preferred over dexamethasone because of its mineralocorticoid activity. Use dexamethasone only if hydrocortisone is unavailable."
    ]
  },
  {
    id: 'dextrose',
    summary: 'Intravenous glucose for correction of symptomatic hypoglycemia. D10 is the preferred prehospital concentration, equally effective as D50 with less risk of extravasation injury and overshoot hyperglycemia.',
    genericName: 'Dextrose',
    tradeNames: ['D50W', 'D25W', 'D10W'],
    category: ['Endocrine & Metabolic'],
    classes: ['Carbohydrate'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Provides glucose directly into the bloodstream, immediately raising blood glucose and restoring substrate for cerebral and cellular metabolism.',
        target: {
          name: 'Cellular glucose uptake',
          action: 'donor',
          result: 'Immediate ↑ blood glucose',
          system: 'metabolic'
        }
      }
    ],
    indications: [
      {
        name: 'Hypoglycemia',
        notes: [
          'D10 is preferred over higher concentrations',
          'Administer in incremental doses until mental status improves'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '25 g',
                onset: '1–3 min',
                duration: 'Variable',
                notes: ['D10: 250 mL, or D25: 100 mL, or D50: 50 mL']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.5–1 g/kg',
                onset: '1–3 min',
                duration: 'Variable',
                notes: ['D10: 5–10 mL/kg, or D25: 2–4 mL/kg (>8 yr only)']
              }
            ],
            notes: []
          },
          {
            population: 'Neonatal',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.5–1 g/kg',
                onset: '1–3 min',
                duration: 'Variable',
                notes: ['D10 only: 2 mL/kg']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hyperglycemia'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Overshoot hyperglycemia', 'Phlebitis / vein sclerosis', 'Tissue necrosis on extravasation'],
    precautions: [
      "<span class=\"hl hl--danger\">D10 is preferred over D50.</span> D50 is hyperosmolar and causes severe phlebitis and tissue necrosis with extravasation.",
      "<span class=\"hl hl--danger\">Never use D50 or D25 in neonates.</span> Use D10 only. Higher concentrations cause dangerous osmolar shifts in neonatal vasculature.",
      "<span class=\"hl hl--warn\">Administer in incremental doses</span> and reassess between doses. Avoid overshoot hyperglycemia, which worsens outcomes in stroke and post-cardiac arrest.",
      "Consider <span class=\"hl hl--warn\">thiamine</span> in malnourished or alcoholic patients. If both are available, give thiamine first or concurrently. If only dextrose is available, give it."
    ]
  },
  {
    id: 'famotidine',
    summary: 'An H2 receptor antagonist used as an adjunct to diphenhydramine for allergic reactions and urticaria. Blocks histamine at H2 receptors on vasculature and GI tract to reduce vasodilation and glandular secretion.',
    genericName: 'Famotidine',
    tradeNames: ['Pepcid'],
    category: ['Toxicology', 'Allergic & Immune'],
    classes: ['H2 Blocker'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Reduces histamine-mediated vasodilation, capillary permeability, and gastric acid secretion. Complements H1 blockers like diphenhydramine by covering the approximately 15% of histamine effects mediated through H2 receptors.',
        target: {
          name: 'Histamine H2 receptors',
          action: 'antagonist',
          result: '↓ Vasodilation, ↓ capillary permeability, ↓ gastric acid',
          system: 'histaminergic'
        }
      }
    ],
    indications: [
      {
        name: 'Allergic Reaction (Adjunct)',
        notes: ['Supplement to diphenhydramine for urticaria', 'Not a first-line treatment for anaphylaxis'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '20 mg',
                onset: '15–30 min',
                duration: '10–12 hr',
                notes: ['Administer over 2 min']
              },
              {
                via: ['PO'],
                amount: '20 mg',
                onset: '1–3 hr',
                duration: '10–12 hr',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Headache', 'Dizziness'],
    precautions: [
      "<span class=\"hl hl--warn\">Adjunct only.</span> Not a first-line treatment for anaphylaxis or allergic reactions. Epinephrine is first-line for anaphylaxis; diphenhydramine is first-line for urticaria.",
      "H1 and H2 antihistamines treat only cutaneous and GI manifestations. They have <strong>no role in treating respiratory or cardiovascular collapse</strong> of anaphylaxis."
    ]
  },
  {
    id: 'fentanyl',
    summary: 'A synthetic opioid analgesic used for severe pain and procedural sedation, roughly 100 times more potent than morphine by weight. Faster onset, shorter duration, and better hemodynamic stability than morphine due to no histamine release.',
    genericName: 'Fentanyl',
    tradeNames: ['Sublimaze'],
    category: ['Pain Management', 'Sedation & Anesthesia'],
    classes: ['Opioid Analgesic', 'Analgesic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Suppresses pain signal transmission in the CNS by blocking neurotransmitter release, producing potent analgesia and sedation. Does not cause histamine release, making it more hemodynamically stable than morphine.',
        target: {
          name: 'μ-opioid receptors',
          action: 'agonist',
          result: 'Potent analgesia & sedation',
          system: 'opioid'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pain',
        notes: [
          'IN route preferred in pediatrics and when IV not indicated',
          'Administer slowly IV to prevent chest wall rigidity'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mcg/kg',
                onset: '1–2 min',
                duration: '30–60 min',
                repeat: 'q5–10 min PRN',
                maxDose: '200 mcg',
                notes: ['Administer slowly over 1–2 min']
              },
              {
                via: ['IN'],
                amount: '1–2 mcg/kg',
                onset: '5–10 min',
                duration: '30–60 min',
                repeat: 'q15 min PRN',
                maxDose: '200 mcg',
                notes: ['Split dose between nares if volume >1 mL per nare']
              },
              {
                via: ['IM'],
                amount: '1 mcg/kg',
                onset: '7–15 min',
                duration: '1–2 hr',
                repeat: 'q15 min PRN',
                maxDose: '200 mcg',
                notes: []
              }
            ],
            notes: ['Use with caution in elderly, hypotension, head injury']
          },
          {
            population: 'Pediatric',
            qualifier: '≥2 yr',
            routes: [
              {
                via: ['IN'],
                amount: '1–2 mcg/kg',
                onset: '5–10 min',
                duration: '30–60 min',
                repeat: 'q15 min PRN',
                maxDose: '100 mcg',
                notes: ['Split dose between nares if volume >1 mL per nare']
              },
              {
                via: ['IV', 'IO'],
                amount: '1 mcg/kg',
                onset: '1–2 min',
                duration: '30–60 min',
                repeat: 'q15 min PRN',
                maxDose: '100 mcg',
                notes: ['Administer slowly over 1–2 min']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Respiratory depression (without ventilatory support)'
      },
      {
        text: 'MAO inhibitor use within 14 days',
        relative: true
      }
    ],
    adverseEffects: ['Respiratory depression', 'Chest wall rigidity', 'Nausea / vomiting', 'Bradycardia'],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression.</span> Have naloxone immediately available. Risk increases with concurrent CNS depressants.",
      "<span class=\"hl hl--danger\">Chest wall rigidity</span> can occur with rapid IV push or high doses. Makes BVM ventilation impossible. Treat with naloxone or neuromuscular blockade.",
      "<span class=\"hl hl--danger\">~100x more potent than morphine by weight.</span> 100 mcg fentanyl equals 10 mg morphine. Always dose in <strong>micrograms</strong>, never milligrams.",
      "<span class=\"hl hl--warn\">Use caution in head injury.</span> Opioids can raise ICP and mask neurologic findings. Use the lowest effective dose."
    ]
  },
  {
    id: 'flumazenil',
    summary: 'A benzodiazepine antagonist used to reverse benzo-induced sedation and respiratory depression. Short duration means resedation is common.',
    genericName: 'Flumazenil',
    tradeNames: ['Romazicon'],
    category: ['Toxicology'],
    classes: ['Antidote', 'Benzodiazepine Antagonist'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Competitively displaces bound benzodiazepines from the GABA-A receptor without activating it, reversing sedation, respiratory depression, and amnesia. Has minimal intrinsic activity.',
        target: {
          name: 'GABA-A receptor (benzodiazepine site)',
          action: 'antagonist',
          result: 'Reverses benzo-induced sedation & respiratory depression',
          system: 'GABAergic'
        }
      }
    ],
    indications: [
      {
        name: 'Benzodiazepine Reversal (Iatrogenic)',
        notes: [
          'For reversal of known benzodiazepine administration only',
          'NOT indicated in suspected benzodiazepine overdose, can precipitate seizures in dependent patients',
          'Re-sedation common, monitor for at least 2 hours'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.2 mg',
                onset: '1–2 min',
                duration: '20–45 min',
                repeat: '0.2 mg q1 min PRN',
                maxDose: '1 mg total (3 mg in overdose)',
                notes: ['Administer over 30 sec']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.01 mg/kg',
                onset: '1–2 min',
                duration: '20–45 min',
                repeat: '0.01 mg/kg q1 min PRN',
                maxDose: '0.2 mg/dose, 1 mg total',
                notes: ['Administer over 15 sec']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Benzodiazepine dependence'
      },
      {
        text: 'Tricyclic antidepressant ingestion'
      },
      {
        text: 'Unknown overdose'
      },
      {
        text: 'Seizure control with benzodiazepines'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Seizures', 'Resedation', 'Agitation / anxiety'],
    precautions: [
      "<span class=\"hl hl--danger\">NASEMSO warns against use in suspected benzodiazepine overdose.</span> Can precipitate refractory seizures in benzo-dependent patients. These seizures may be resistant to benzodiazepine treatment.",
      "The ideal use case is reversal of <strong>iatrogenic oversedation</strong> in a known benzo-naive patient.",
      "<span class=\"hl hl--warn\">Resedation is common.</span> Flumazenil has a shorter half-life (~50 min) than most benzodiazepines. Monitor for at least 2 hours.",
      "Does <strong>not reverse</strong> sedation from barbiturates, ethanol, opioids, or general anesthetics."
    ]
  },
  {
    id: 'furosemide',
    summary: 'The most widely used loop diuretic for acute pulmonary edema and CHF. Current evidence favors vasodilators over diuretics as first-line prehospital CHF treatment.',
    genericName: 'Furosemide',
    tradeNames: ['Lasix'],
    category: ['Cardiovascular'],
    classes: ['Loop Diuretic'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Blocks sodium and chloride reabsorption in the thick ascending limb of the loop of Henle, producing rapid diuresis with loss of sodium, potassium, chloride, magnesium, and water. Also enhances prostaglandin production, causing venodilation that reduces preload before diuresis begins.',
        target: {
          name: 'NKCC2 cotransporter (loop of Henle)',
          action: 'blocker',
          result: 'Diuresis, ↓ preload',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pulmonary Edema',
        notes: ['Nitrates and CPAP are preferred first-line prehospital treatments'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.5–1 mg/kg',
                onset: '5 min',
                duration: '2–4 hr',
                maxDose: '80 mg',
                notes: ['Administer slow IV push over 1–2 min']
              }
            ],
            notes: ["Match or exceed patient's home dose if known"]
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to furosemide or sulfonamides'
      },
      {
        text: 'Anuria'
      },
      {
        text: 'Electrolyte depletion'
      },
      {
        text: 'Hepatic coma'
      },
      {
        text: 'Hypovolemia'
      },
      {
        text: 'Hypotension',
        relative: true
      }
    ],
    adverseEffects: ['Hypokalemia', 'Hypotension', 'Dehydration', 'Ototoxicity'],
    precautions: [
      "<span class=\"hl hl--danger\">NASEMSO discourages routine prehospital diuretics.</span> Pulmonary edema is more commonly a redistribution problem. Vasodilators and CPAP are preferred first-line.",
      "<span class=\"hl hl--warn\">Assess volume status before administration.</span> Inappropriate diuresis in patients misdiagnosed with CHF can cause profound hypotension.",
      "<span class=\"hl hl--warn\">Ototoxicity risk</span> with rapid IV push. Administer no faster than 20 mg/min."
    ]
  },
  {
    id: 'glucagon',
    summary: 'A hormone that raises blood glucose in hypoglycemia when IV access is not available. Also used as an antidote for beta-blocker and calcium channel blocker overdose.',
    genericName: 'Glucagon',
    tradeNames: ['GlucaGen', 'Baqsimi'],
    category: ['Endocrine & Metabolic', 'Toxicology', 'Cardiovascular'],
    classes: ['Hormone', 'Antidote', 'Inotrope', 'Chronotrope'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Triggers glycogen breakdown in the liver, raising blood glucose. Requires adequate hepatic glycogen stores and is ineffective in starved, chronically malnourished, or glycogen-depleted patients.',
        target: {
          name: 'Hepatic glycogen stores',
          action: 'stimulator',
          result: 'Rapid ↑ blood glucose',
          system: 'metabolic'
        }
      },
      {
        brief: 'Increases cardiac contractility and heart rate by bypassing the beta-receptor entirely. This is why it works in beta-blocker overdose; it does not need functional beta-receptors.',
        target: {
          name: 'Adenylyl cyclase (cardiac)',
          action: 'stimulator',
          result: 'Positive inotropy & chronotropy',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Relaxes lower esophageal sphincter tone, which can relieve esophageal foreign body obstruction.',
        target: {
          name: 'GI smooth muscle',
          action: 'relaxant',
          result: 'Relieves esophageal obstruction',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Hypoglycemia',
        notes: ['Use when IV access cannot be established for dextrose'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IM'],
                amount: '1 mg',
                onset: '5–15 min',
                duration: '60–90 min',
                notes: []
              },
              {
                via: ['IN'],
                amount: '3 mg',
                onset: '5–15 min',
                duration: '60–90 min',
                notes: ['Prefilled dry powder device']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: '≥20 kg',
            routes: [
              {
                via: ['IM', 'IN'],
                amount: '1 mg',
                onset: '5–15 min',
                duration: '60–90 min',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: "<20 kg",
            routes: [
              {
                via: ['IM', 'IN'],
                amount: '0.5 mg',
                onset: '5–15 min',
                duration: '60–90 min',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Beta-Blocker / Calcium Channel Blocker Overdose',
        notes: ['Vomiting common at these doses, consider ondansetron prophylaxis'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '5 mg',
                onset: '1–3 min',
                duration: '5–15 min',
                repeat: 'May repeat in 5–10 min, max 10 mg',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: '25–40 kg',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mg',
                onset: '1–3 min',
                duration: '5–15 min',
                repeat: 'q5 min as necessary',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: "<25 kg",
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.5 mg',
                onset: '1–3 min',
                duration: '5–15 min',
                repeat: 'q5 min as necessary',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Pheochromocytoma'
      },
      {
        text: 'Insulinoma'
      }
    ],
    adverseEffects: ['Nausea / vomiting', 'Hyperglycemia', 'Tachycardia', 'Rebound hypoglycemia'],
    precautions: [
      "<span class=\"hl hl--danger\">Nausea and vomiting are extremely common.</span> Position patient to protect airway.",
      "<span class=\"hl hl--warn\">Requires hepatic glycogen stores.</span> Ineffective in chronic alcoholism, prolonged starvation, or severe liver disease. Dextrose IV is the definitive treatment.",
      "<span class=\"hl hl--warn\">Rebound hypoglycemia</span> can occur after glucagon wears off. Feed the patient carbohydrates once they can safely swallow and monitor blood glucose.",
      "For hypoglycemia, glucagon is a <strong>bridge when IV access is unavailable.</strong> Once access is established, switch to dextrose."
    ]
  },
  {
    id: 'haloperidol',
    summary: 'A first-generation antipsychotic used to manage acute psychosis and severe agitation. Carries a black box warning for QT prolongation and torsades, especially with IV use.',
    genericName: 'Haloperidol',
    tradeNames: ['Haldol'],
    category: ['Neurological', 'Sedation & Anesthesia'],
    classes: ['Antipsychotic', 'Butyrophenone', 'Antiemetic'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Reduces psychotic symptoms, agitation, and combative behavior through dopamine antagonism in the mesolimbic pathway. Also depresses the reticular activating system, producing sedation.',
        target: {
          name: 'Dopamine D₂ receptors',
          action: 'antagonist',
          result: '↓ Agitation, ↓ psychosis, sedation',
          system: 'dopaminergic'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Agitation / Psychosis',
        notes: [
          'Monitor for QT prolongation, especially with IV route',
          'Do not use with promethazine due to additive QT prolongation'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IM'],
                amount: '5–10 mg',
                onset: '10–20 min',
                duration: '4–8 hr',
                notes: []
              },
              {
                via: ['IV', 'IO'],
                amount: '5 mg',
                onset: '5–10 min',
                duration: '4–8 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: '6–12 yr',
            routes: [
              {
                via: ['IM'],
                amount: '1–3 mg',
                onset: '10–20 min',
                duration: '4–8 hr',
                maxDose: '0.15 mg/kg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Coma'
      },
      {
        text: "Parkinson's disease"
      },
      {
        text: 'Prolonged QT interval',
        relative: true
      }
    ],
    adverseEffects: ['QT prolongation', 'Acute dystonia', 'Akathisia', 'Hypotension'],
    precautions: [
      "<span class=\"hl hl--danger\">FDA black box warning for IV use.</span> Risk of sudden death, torsades de pointes, and prolonged QT. Continuous cardiac monitoring required if administering IV.",
      "<span class=\"hl hl--danger\">Do NOT combine with promethazine.</span> Both prolong QT. Use ondansetron if an antiemetic is needed.",
      "<span class=\"hl hl--warn\">Akathisia can mimic worsening agitation.</span> If restlessness increases after haloperidol, consider akathisia before redosing. Treat with diphenhydramine.",
      "<span class=\"hl hl--warn\">Monitor for acute dystonia.</span> This is an EPS effect, not an allergic reaction."
    ]
  },
  {
    id: 'diltiazem',
    summary: 'A non-dihydropyridine calcium channel blocker used for rate control of SVT and rapid atrial fibrillation/flutter. Slows AV node conduction without the bronchospasm risk of beta-blockers.',
    genericName: 'Diltiazem',
    tradeNames: ['Cardizem'],
    category: ['Cardiovascular'],
    classes: ['Class IV Antiarrhythmic', 'Calcium Channel Blocker'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Slows AV conduction and prolongs AV node refractoriness, reducing ventricular rate in atrial fibrillation and flutter and terminating AV node-dependent reentrant tachycardias.',
        target: {
          name: 'L-type calcium channels (AV node)',
          action: 'blocker',
          result: '↓ AV conduction, ↓ ventricular rate',
          system: 'ion-channel'
        }
      },
      {
        brief: 'Causes coronary and systemic vasodilation, reducing afterload and myocardial oxygen demand.',
        target: {
          name: 'L-type calcium channels (vascular smooth muscle)',
          action: 'blocker',
          result: 'Vasodilation, ↓ afterload',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Narrow Complex Tachycardia (Rate Control)',
        notes: ['Avoid in WPW, sick sinus syndrome, and concurrent beta-blocker use', "Avoid if SBP <90"],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '0.25 mg/kg',
                onset: '2–5 min',
                duration: '1–3 hr',
                repeat: '0.35 mg/kg in 15 min if inadequate response',
                notes: ['Administer over 2 min', 'Typical initial dose ~20 mg']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Wolff-Parkinson-White syndrome (WPW)'
      },
      {
        text: 'Hypotension'
      },
      {
        text: 'Sick sinus syndrome (without pacemaker)'
      },
      {
        text: 'Second- or third-degree heart block (without pacemaker)'
      },
      {
        text: 'Wide-complex tachycardia'
      },
      {
        text: 'Heart failure'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Hypotension', 'Bradycardia', 'AV block', 'Heart failure exacerbation'],
    precautions: [
      "<span class=\"hl hl--danger\">NEVER give in WPW or pre-excited atrial fibrillation.</span> AV node blockade forces conduction down the accessory pathway, risking degeneration into VF.",
      "<span class=\"hl hl--danger\">Do NOT combine with IV beta-blockers.</span> Combined AV nodal blockade risks profound bradycardia, heart block, and asystole.",
      "<span class=\"hl hl--warn\">Hypotension occurs in 16-20% of patients.</span> Have a fluid bolus ready. Consider calcium pretreatment before diltiazem to mitigate.",
      "<span class=\"hl hl--warn\">Confirm the rhythm is supraventricular</span> before administration. Diltiazem in VT can cause cardiovascular collapse."
    ]
  },
  {
    id: 'diazepam',
    summary: 'A long-acting benzodiazepine for seizures and acute agitation. The rectal formulation makes it useful when IV, IM, and IN routes are unavailable, though midazolam has largely replaced it as first-line prehospital benzodiazepine.',
    genericName: 'Diazepam',
    tradeNames: ['Valium', 'Diastat'],
    category: ['Neurological', 'Sedation & Anesthesia'],
    classes: ['Benzodiazepine', 'Anticonvulsant', 'Sedative'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Enhances the effect of GABA at the GABA-A receptor, increasing chloride channel opening frequency and producing neuronal hyperpolarization. Provides anticonvulsant, anxiolytic, sedative, and skeletal muscle relaxant effects.',
        target: {
          name: 'GABA-A receptors',
          action: 'enhancer',
          result: 'Anticonvulsant, sedation, anxiolysis, muscle relaxation',
          system: 'GABAergic'
        }
      }
    ],
    indications: [
      {
        name: 'Seizures',
        notes: ['Midazolam IM/IN is generally preferred when IV not available'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '5–10 mg',
                onset: '1–5 min',
                duration: '15–60 min',
                notes: []
              },
              {
                via: ['PR'],
                amount: '0.2 mg/kg',
                onset: '5–15 min',
                duration: '15–60 min',
                maxDose: '20 mg',
                notes: ['Use when no other route available']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.2 mg/kg',
                onset: '1–5 min',
                duration: '15–60 min',
                maxDose: '10 mg',
                notes: []
              },
              {
                via: ['PR'],
                amount: '0.2 mg/kg',
                onset: '5–15 min',
                duration: '15–60 min',
                maxDose: '20 mg',
                notes: ['Use when no other route available']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Acute Agitation',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '5 mg',
                onset: '2–5 min',
                duration: '15–60 min',
                notes: []
              },
              {
                via: ['IM'],
                amount: '10 mg',
                onset: '15–30 min',
                duration: '15–60 min',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV'],
                amount: '0.05–0.1 mg/kg',
                onset: '2–5 min',
                duration: '15–60 min',
                maxDose: '5 mg',
                notes: []
              },
              {
                via: ['IM'],
                amount: '0.1–0.2 mg/kg',
                onset: '15–30 min',
                duration: '15–60 min',
                maxDose: '10 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to benzodiazepines'
      },
      {
        text: 'Respiratory depression (without ventilatory support)'
      },
      {
        text: 'Acute narrow-angle glaucoma'
      }
    ],
    adverseEffects: ['Respiratory depression', 'Hypotension', 'Sedation', 'Paradoxical agitation'],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression</span> is the primary risk. Risk multiplies with concurrent opioids, alcohol, or other CNS depressants.",
      "<span class=\"hl hl--warn\">IM absorption is erratic and painful.</span> <strong>Midazolam IM/IN is preferred</strong> when IV access is unavailable.",
      "<span class=\"hl hl--warn\">Slow IV push only.</span> No faster than 5 mg/min. Propylene glycol vehicle is irritating to veins.",
      "<span class=\"hl hl--warn\">Very long half-life</span> (20-100 hours including active metabolites). Clinical sedation wears off in 30-90 minutes but drug persists for days."
    ]
  },
  {
    id: 'oxygen',
    summary: 'A therapeutic gas titrated to SpO2 94-98% for most patients, with 100% FiO2 reserved for cardiac arrest, CO and cyanide poisoning, and severe shock. Both hypoxia and hyperoxia cause harm.',
    genericName: 'Oxygen',
    tradeNames: [],
    category: ['Airway & Respiratory', 'Resuscitation'],
    classes: ['Medical Gas'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Increases alveolar oxygen tension, improving hemoglobin saturation and tissue oxygen delivery. In CO poisoning, high-flow oxygen competitively displaces carbon monoxide from hemoglobin, reducing COHb half-life from approximately 5 hours on room air to 90 minutes on 100% oxygen.',
        target: {
          name: 'Hemoglobin / alveolar-capillary membrane',
          action: 'donor',
          result: '↑ SpO₂, ↑ tissue O₂ delivery',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Hypoxia / Respiratory Distress',
        notes: [
          'Target SpO2 94–98%',
          'Titrate to clinical condition, do not withhold if pulse oximetry unavailable',
          'Escalate delivery method as needed: nasal cannula → simple mask → non-rebreather'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['Inhaled'],
                amount: '1–15 L/min',
                onset: 'Immediate',
                duration: 'Duration of administration',
                notes: ['NC 1–6 L/min, simple mask 6–10 L/min, NRB 10–15 L/min']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['Inhaled'],
                amount: '1–15 L/min',
                onset: 'Immediate',
                duration: 'Duration of administration',
                notes: ['Titrate to age-appropriate delivery device']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'COPD with chronic CO2 retention',
        relative: true
      }
    ],
    adverseEffects: ['Absorption atelectasis', 'Hyperoxic vasoconstriction', 'CO2 retention in COPD'],
    precautions: [
      "<span class=\"hl hl--danger\">Titrate, do not blast.</span> Target SpO2 94-98% for most patients, not 100%.",
      "<span class=\"hl hl--warn\">Post-ROSC hyperoxia worsens outcomes.</span> After return of spontaneous circulation, titrate O2 down to 94-98%.",
      "<span class=\"hl hl--warn\">COPD patients may tolerate permissive hypoxia.</span> SpO2 ≥90% may be adequate. High-flow O2 can worsen CO2 retention.",
      "<span class=\"hl hl--danger\">Pulse oximetry is unreliable in CO poisoning.</span> Standard pulse ox reads falsely normal. Maintain 100% FiO2 based on clinical suspicion.",
      "In neonatal resuscitation, <span class=\"hl hl--warn\">start with room air (21%)</span> for term infants and escalate only as needed."
    ]
  },
  {
    id: 'oral-glucose',
    summary: 'The simplest treatment for symptomatic hypoglycemia in conscious patients with a patent airway. Requires no IV access and can be administered by BLS providers.',
    genericName: 'Oral Glucose',
    tradeNames: ['Glutose', 'Insta-Glucose'],
    category: ['Endocrine & Metabolic'],
    classes: ['Carbohydrate'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Provides exogenous glucose that is absorbed primarily in the small intestine, directly raising blood glucose and restoring substrate for cerebral and cellular metabolism. Requires no enzymatic breakdown, so absorption is faster than complex carbohydrates.',
        target: {
          name: 'Cellular glucose uptake',
          action: 'donor',
          result: '↑ Blood glucose',
          system: 'metabolic'
        }
      }
    ],
    indications: [
      {
        name: 'Hypoglycemia',
        notes: ['For conscious patients with intact gag reflex only'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['PO'],
                amount: '25 g',
                onset: '10–20 min',
                duration: 'Variable',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['PO'],
                amount: '0.5–1 g/kg',
                onset: '10–20 min',
                duration: 'Variable',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Altered mental status'
      },
      {
        text: 'Inability to swallow'
      }
    ],
    adverseEffects: ['Aspiration', 'Nausea / vomiting'],
    precautions: [
      "<span class=\"hl hl--danger\">Patient must be conscious with intact gag reflex.</span> If unconscious or cannot swallow, use IV dextrose or IM/IN glucagon.",
      "<span class=\"hl hl--warn\">Slower onset than IV dextrose</span> (~10-20 min vs 1-5 min). Establish IV access if rapid correction is needed."
    ]
  },
  {
    id: 'ondansetron',
    summary: 'A selective 5-HT3 antagonist and the preferred prehospital antiemetic, with no extrapyramidal side effects. Carries dose-dependent QT prolongation risk.',
    genericName: 'Ondansetron',
    tradeNames: ['Zofran', 'Zofran ODT'],
    category: ['Nausea & Vomiting'],
    classes: ['Antiemetic', '5-HT3 Antagonist'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Selectively blocks serotonin receptors in the chemoreceptor trigger zone and vagal afferents in the GI tract, suppressing nausea and vomiting. Has no effect on dopamine receptors and therefore does not cause extrapyramidal symptoms.',
        target: {
          name: '5-HT₃ receptors',
          action: 'antagonist',
          result: 'Suppresses nausea & vomiting',
          system: 'serotonergic'
        }
      }
    ],
    indications: [
      {
        name: 'Nausea / Vomiting',
        notes: [
          'Contraindicated in known or suspected prolonged QT syndrome',
          'Preferred antiemetic in pediatrics',
          'IV solution may be given PO in same dose'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '4 mg',
                onset: '5–10 min',
                duration: '4–8 hr',
                notes: ['Administer slow IV over 2–5 min']
              },
              {
                via: ['PO'],
                amount: '4 mg',
                onset: '15–30 min',
                duration: '4–8 hr',
                notes: ['ODT 4–8 mg may be used']
              },
              {
                via: ['IM'],
                amount: '4 mg',
                onset: '10–15 min',
                duration: '4–8 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: '≥6 months',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.15 mg/kg',
                onset: '5–10 min',
                duration: '4–8 hr',
                maxDose: '4 mg',
                notes: ['Administer slow IV over 2–5 min']
              },
              {
                via: ['PO'],
                amount: '0.15 mg/kg',
                onset: '15–30 min',
                duration: '4–8 hr',
                maxDose: '4 mg',
                notes: ['ODT: 2 mg (1–5 yr), 4 mg (≥6 yr)']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'QT prolongation'
      }
    ],
    adverseEffects: ['QT prolongation', 'Headache', 'Constipation'],
    precautions: [
      "<span class=\"hl hl--warn\">Dose-dependent QT prolongation.</span> Contraindicated in congenital long QT syndrome. Use caution with other QT-prolonging drugs.",
      "<span class=\"hl hl--warn\">First trimester pregnancy:</span> NASEMSO recommends metoclopramide with diphenhydramine over ondansetron in the first trimester.",
      "Administer IV dose <strong>slowly over 2-5 minutes.</strong> Rapid push increases QT prolongation risk."
    ]
  },
  {
    id: 'normal-saline',
    summary: 'An isotonic crystalloid used for volume resuscitation in shock, medication dilution, and fluid replacement. Excessive crystalloid is harmful in hemorrhagic shock and unnecessary in most pulmonary edema.',
    genericName: 'Sodium Chloride 0.9%',
    tradeNames: [],
    category: ['IV Fluids', 'Resuscitation'],
    classes: ['Crystalloid', 'Electrolyte'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Isotonic crystalloid that expands intravascular volume, increasing preload, cardiac output, and blood pressure.',
        target: {
          name: 'Extracellular fluid volume',
          action: 'donor',
          result: '↑ Intravascular volume, ↑ preload, ↑ BP',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Volume Resuscitation',
        notes: [
          'Hypovolemic, hemorrhagic, septic, anaphylactic, and neurogenic shock',
          'Reassess after each bolus for signs of improvement or fluid overload'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '20 mL/kg',
                onset: 'Immediate',
                duration: 'Variable',
                repeat: 'Repeat PRN based on clinical response',
                notes: ["Pressure infuse over <15 min per bolus"]
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '20 mL/kg',
                onset: 'Immediate',
                duration: 'Variable',
                repeat: 'Repeat PRN based on clinical response',
                notes: ["Pressure infuse over <15 min per bolus"]
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Dehydration',
        sameDoseAs: 'Volume Resuscitation'
      },
      {
        name: 'Diabetic Ketoacidosis (DKA)',
        sameDoseAs: 'Volume Resuscitation'
      },
      {
        name: 'Hyperosmolar Hyperglycemic Syndrome (HHS)',
        sameDoseAs: 'Volume Resuscitation'
      }
    ],
    contraindications: [
      {
        text: 'Fluid overload'
      }
    ],
    adverseEffects: ['Fluid overload', 'Hyperchloremic metabolic acidosis', 'Hypothermia'],
    precautions: [
      "<span class=\"hl hl--danger\">Excessive crystalloid is harmful in hemorrhagic shock.</span> Crystalloid dilutes clotting factors and worsens coagulopathy. Blood products are preferred when available.",
      "<span class=\"hl hl--warn\">Reassess after every bolus.</span> Stop when MAP ≥65 mmHg or perfusion targets are met.",
      "For <span class=\"hl hl--warn\">crush injury</span>, use normal saline specifically. Avoid lactated Ringer's because it contains potassium.",
      "Warm fluids when possible. Cold fluids contribute to <strong>hypothermia</strong>, which worsens coagulopathy, acidosis, and cardiac irritability."
    ]
  },
  {
    id: 'norepinephrine',
    summary: 'The preferred first-line vasopressor for septic and neurogenic shock. Increases SVR and blood pressure with modest beta-1 inotropy, with lower arrhythmia risk and mortality than dopamine in septic shock.',
    genericName: 'Norepinephrine',
    tradeNames: ['Levophed'],
    category: ['Cardiovascular', 'Resuscitation'],
    classes: [
      'Sympathomimetic',
      'Catecholamine',
      'Vasopressor',
      'Alpha-1 Agonist',
      'Beta-1 Agonist'
    ],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Causes intense vasoconstriction, increasing SVR and blood pressure. This is the dominant pharmacologic effect.',
        target: {
          name: 'α-1 receptors',
          action: 'agonist',
          result: 'Vasoconstriction, ↑ SVR, ↑ BP',
          system: 'adrenergic'
        }
      },
      {
        brief: 'Provides moderate inotropic support, increasing contractility and cardiac output alongside the vasopressor effect.',
        target: {
          name: 'β-1 receptors',
          action: 'agonist',
          result: '↑ Contractility, ↑ cardiac output',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Shock',
        notes: [
          'Preferred for septic and neurogenic shock, also indicated for cardiogenic and hypovolemic shock',
          'Vesicant, severe tissue damage if extravasation occurs'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV drip'],
                amount: '0.02–2 mcg/kg/min',
                onset: '1–2 min',
                duration: 'Duration of infusion',
                notes: ['Start 0.05–0.1 mcg/kg/min, titrate to MAP goal']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV drip'],
                amount: '0.05–0.5 mcg/kg/min',
                onset: '1–2 min',
                duration: 'Duration of infusion',
                notes: ['Titrate to age-appropriate MAP goal']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Uncorrected hypovolemia',
        relative: true
      }
    ],
    adverseEffects: ['Tissue necrosis on extravasation', 'Reflex bradycardia', 'Peripheral ischemia'],
    precautions: [
      "<span class=\"hl hl--danger\">Vesicant.</span> Severe tissue necrosis with extravasation. Administer through a large-bore IV, preferably central. Treat extravasation with <strong>phentolamine</strong> infiltration.",
      "<span class=\"hl hl--danger\">Correct hypovolemia FIRST.</span> Vasopressors in a volume-depleted patient vasoconstrict an empty tank. Resuscitate with fluids before starting pressors.",
      "<span class=\"hl hl--warn\">Can cause reflex bradycardia</span> from baroreceptor-mediated vagal response to intense vasoconstriction.",
      "Do NOT run in the same IV line as <span class=\"hl hl--warn\">sodium bicarbonate.</span> Alkaline solutions deactivate norepinephrine."
    ]
  },
  {
    id: 'nitrous-oxide',
    summary: 'A self-administered inhaled analgesic (50% N2O / 50% O2) with rapid onset and offset, providing mild to moderate analgesia. The built-in demand valve makes oversedation nearly impossible.',
    genericName: 'Nitrous Oxide',
    tradeNames: ['Nitronox'],
    category: ['Pain Management', 'Sedation & Anesthesia'],
    classes: ['Analgesic', 'Sedative', 'Dissociative Anesthetic'],
    source: 'Mixed',
    moa: [
      {
        brief: 'Activates endogenous opioid peptide release and modulates descending pain pathways for analgesia. Simultaneously enhances GABA-A receptor activity for anxiolysis and antagonizes NMDA receptors for dissociative properties. Effects cease as soon as inhalation stops, with no residual effect.',
        target: {
          name: 'Opioid / GABA-A / NMDA receptors',
          action: 'enhancer',
          result: 'Analgesia, anxiolysis, mild sedation',
          system: 'glutamatergic'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pain',
        notes: ['Patient must be able to self-administer', 'Effects cease immediately when inhalation stops'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['Inhaled'],
                amount: '50% nitrous / 50% oxygen mixture',
                onset: '2–5 min',
                duration: 'Duration of inhalation',
                notes: ['Self-administered via demand valve mask']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['Inhaled'],
                amount: '50% nitrous / 50% oxygen mixture',
                onset: '2–5 min',
                duration: 'Duration of inhalation',
                notes: ['Self-administered via demand valve mask']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Pneumothorax'
      },
      {
        text: 'Chest trauma'
      },
      {
        text: 'Bowel obstruction'
      },
      {
        text: 'Air embolism'
      },
      {
        text: 'Decompression sickness'
      },
      {
        text: 'Head injury with increased ICP'
      },
      {
        text: 'Significant facial trauma'
      },
      {
        text: 'Inability to self-administer'
      },
      {
        text: 'Pregnancy',
        relative: true
      }
    ],
    adverseEffects: ['Nausea / vomiting', 'Dizziness', 'Diffusion hypoxia'],
    precautions: [
      "<span class=\"hl hl--danger\">Expands trapped gas.</span> Contraindicated in pneumothorax, bowel obstruction, and air embolism. Can convert a simple pneumothorax into a tension pneumothorax.",
      "<span class=\"hl hl--danger\">Do NOT combine with opioids or benzodiazepines.</span> Risk of excessive sedation and airway compromise.",
      "<span class=\"hl hl--warn\">Diffusion hypoxia</span> on discontinuation. Administer 100% O2 for 3-5 minutes after stopping N2O.",
      "Never strap the mask to the patient. Self-administration via demand valve is the <strong>built-in safety mechanism.</strong>"
    ]
  },
  {
    id: 'nitroglycerin',
    summary: 'An organic nitrate vasodilator used as first-line treatment for anginal chest pain and acute pulmonary edema. Reduces myocardial oxygen demand in ACS and reduces preload and afterload in CHF.',
    genericName: 'Nitroglycerin',
    tradeNames: ['Nitrostat', 'Nitrolingual Pumpspray'],
    category: ['Cardiovascular'],
    classes: ['Nitrate', 'Vasodilator'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Converted to nitric oxide in vascular smooth muscle, activating guanylyl cyclase and increasing cGMP to produce vasodilation. At low doses, predominantly venodilation reduces preload. At higher doses, arteriolar dilation also reduces afterload and improves coronary collateral circulation.',
        target: {
          name: 'Vascular smooth muscle (via NO/cGMP)',
          action: 'relaxant',
          result: 'Venodilation → ↓ preload; arteriolar dilation → ↓ afterload',
          system: 'enzymatic'
        }
      }
    ],
    indications: [
      {
        name: 'Chest Pain / Acute Coronary Syndrome',
        notes: [
          "Contraindicated if SBP <90, recent PDE-5 inhibitor use, or right ventricular infarction",
          "Hold if heart rate <50 or >100 without heart failure"
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['SL'],
                amount: '0.4 mg',
                onset: '1–3 min',
                duration: '25–30 min',
                repeat: 'q3–5 min if SBP >100',
                notes: ['Tablet or metered spray']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Acute Pulmonary Edema',
        notes: ['Higher doses may be used for hypertensive pulmonary edema'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['SL'],
                amount: '0.4–0.8 mg',
                onset: '1–3 min',
                duration: '25–30 min',
                repeat: 'q5 min if SBP >100 (0.8 mg if SBP ≥160)',
                notes: []
              },
              {
                via: ['IV drip'],
                amount: '10–200 mcg/min',
                onset: '1–2 min',
                duration: 'Duration of infusion',
                notes: ['Start 10–20 mcg/min, titrate to BP and symptom relief']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypotension'
      },
      {
        text: 'Recent PDE-5 inhibitor use (sildenafil 24 hrs, tadalafil 48 hrs)'
      },
      {
        text: 'Right ventricular infarction'
      },
      {
        text: 'Increased intracranial pressure'
      },
      {
        text: 'Hypersensitivity to nitrates'
      },
      {
        text: 'Severe bradycardia',
        relative: true
      },
      {
        text: 'Tachycardia',
        relative: true
      }
    ],
    adverseEffects: ['Hypotension', 'Headache', 'Reflex tachycardia'],
    precautions: [
      "<span class=\"hl hl--danger\">Ask about PDE-5 inhibitors BEFORE every dose.</span> Sildenafil within 24 hours, tadalafil within 48 hours. Combination causes profound, refractory hypotension.",
      "<span class=\"hl hl--danger\">Right ventricular infarction is a critical contraindication.</span> RV infarct patients are preload-dependent. NTG drops preload and causes cardiovascular collapse. Suspect in inferior STEMI with hypotension, JVD, and clear lungs.",
      "<span class=\"hl hl--warn\">Check BP before EVERY dose.</span> Do not redose if SBP has fallen below 100 mmHg."
    ]
  },
  {
    id: 'nicardipine',
    summary: 'A dihydropyridine calcium channel blocker given as an IV infusion for hypertensive emergencies. Highly selective for vascular smooth muscle with no negative inotropy or bradycardia, primarily a critical care transport drug.',
    genericName: 'Nicardipine',
    tradeNames: ['Cardene'],
    category: ['Cardiovascular'],
    classes: ['Antihypertensive', 'Calcium Channel Blocker'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Selectively causes arteriolar vasodilation with preferential effect on coronary and peripheral vascular smooth muscle, reducing SVR and blood pressure. Unlike diltiazem and verapamil, nicardipine has minimal effect on cardiac conduction, heart rate, or contractility.',
        target: {
          name: 'L-type calcium channels (vascular smooth muscle)',
          action: 'blocker',
          result: 'Arteriolar vasodilation, ↓ SVR, ↓ BP',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Hypertensive Emergency',
        notes: ['Preferred IV antihypertensive for acute stroke with need for BP reduction'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV drip'],
                amount: '5–15 mg/hr',
                onset: '5–15 min',
                duration: 'Duration of infusion',
                notes: ['Start 5 mg/hr, titrate by 2.5 mg/hr q5–15 min to BP goal']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Advanced aortic stenosis'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Hypotension',
        relative: true
      }
    ],
    adverseEffects: ['Hypotension', 'Reflex tachycardia', 'Headache'],
    precautions: [
      "<span class=\"hl hl--danger\">Continuous infusion only. No bolus dosing.</span> Drug effects persist for hours after stopping due to the 14-hour terminal half-life.",
      "<span class=\"hl hl--warn\">Titrate slowly.</span> Target a 10-15% SBP reduction initially. Precipitous drops can worsen stroke or cause myocardial ischemia.",
      "<span class=\"hl hl--warn\">Incompatible with sodium bicarbonate and lactated Ringer's.</span> Use NS or D5W for dilution.",
      "Primarily a <strong>critical care transport</strong> drug. Most commonly encountered in interfacility transports."
    ]
  },
  {
    id: 'naloxone',
    summary: 'A competitive opioid antagonist that reverses opioid-induced respiratory depression. The goal is to restore adequate ventilation, not full consciousness. Available IV, IM, IN, and IO.',
    genericName: 'Naloxone',
    tradeNames: ['Narcan'],
    category: ['Toxicology'],
    classes: ['Opioid Antagonist', 'Antidote'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Rapidly displaces opioids from receptor binding sites, reversing respiratory depression, sedation, and miosis. Has higher receptor affinity than most opioids but shorter duration of action, so renarcotization is a constant risk.',
        target: {
          name: 'μ-opioid receptors',
          action: 'antagonist',
          result: 'Reversal of respiratory depression, sedation, miosis',
          system: 'opioid'
        }
      }
    ],
    indications: [
      {
        name: 'Opioid Overdose',
        notes: [
          'Ventilate first, then administer naloxone',
          'Titrate to adequate respirations, not full consciousness',
          'Fentanyl/analog overdoses may require larger or repeated doses'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.4–2 mg',
                onset: '1–2 min',
                duration: '30–90 min',
                repeat: 'q2–3 min PRN',
                notes: ['Titrate in 0.4 mg increments to respiratory effort']
              },
              {
                via: ['IN'],
                amount: '4 mg',
                onset: '3–5 min',
                duration: '30–90 min',
                repeat: 'May repeat once in 2–3 min',
                notes: ['Prefilled nasal atomizer', 'Spray half dose in each nostril']
              },
              {
                via: ['IM'],
                amount: '0.4–2 mg',
                onset: '3–5 min',
                duration: '30–90 min',
                repeat: 'q3–5 min PRN',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '1–2 min',
                duration: '30–90 min',
                maxDose: '2 mg',
                repeat: 'q2–3 min PRN',
                notes: []
              },
              {
                via: ['IN'],
                amount: '4 mg',
                onset: '3–5 min',
                duration: '30–90 min',
                notes: ['Prefilled nasal atomizer', 'Spray half dose in each nostril']
              },
              {
                via: ['IM'],
                amount: '0.1 mg/kg',
                onset: '3–5 min',
                duration: '30–90 min',
                maxDose: '2 mg',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Neonatal',
            routes: [
              {
                via: ['IV', 'IO', 'IM'],
                amount: '0.1 mg/kg',
                onset: '1–3 min',
                duration: '30–90 min',
                notes: ['Monitor closely for seizures in opioid-dependent neonates']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Acute opioid withdrawal', 'Combativeness', 'Pulmonary edema', 'Renarcotization'],
    precautions: [
      "<span class=\"hl hl--danger\">Goal is to restore ventilation, not full consciousness.</span> Titrate to adequate respiratory rate. Over-reversal precipitates acute withdrawal with combativeness, vomiting, and pulmonary edema.",
      "<span class=\"hl hl--danger\">BVM ventilation is the primary treatment.</span> Do not delay oxygenation to search for or administer naloxone.",
      "<span class=\"hl hl--warn\">Renarcotization risk.</span> Naloxone duration (30-90 min) is shorter than most opioids. Monitor for recurrent respiratory depression. All opioid overdose patients should be transported.",
      "<span class=\"hl hl--warn\">Fentanyl/analogs may require higher or repeated doses.</span> Chest wall rigidity may also be present.",
      "If no response after 10 mg total, <strong>reconsider the diagnosis.</strong>"
    ]
  },
  {
    id: 'morphine-sulfate',
    summary: 'The prototypical opioid analgesic, providing analgesia, anxiolysis, and mild preload reduction. Slower onset than fentanyl but longer duration, useful when sustained analgesia is needed.',
    genericName: 'Morphine Sulfate',
    tradeNames: ['MS Contin', 'Duramorph'],
    category: ['Pain Management'],
    classes: ['Opioid Analgesic', 'Analgesic'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Inhibits ascending pain pathways in the CNS, producing potent analgesia, sedation, and euphoria. Also causes histamine release, leading to vasodilation and mild preload reduction.',
        target: {
          name: 'μ-opioid receptors',
          action: 'agonist',
          result: 'Analgesia, sedation, respiratory depression',
          system: 'opioid'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pain',
        notes: ['Causes more histamine release and hypotension than fentanyl'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '3–5 min',
                duration: '3–4 hr',
                repeat: 'q5–10 min PRN',
                maxDose: '20 mg',
                notes: ['Administer slowly over 1–2 min']
              },
              {
                via: ['IM'],
                amount: '0.1 mg/kg',
                onset: '10–20 min',
                duration: '3–5 hr',
                maxDose: '20 mg',
                notes: []
              }
            ],
            notes: ['Use with caution in elderly, hypotension, head injury']
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '3–5 min',
                duration: '3–4 hr',
                repeat: 'q5–10 min PRN',
                maxDose: '5 mg',
                notes: ['Administer slowly over 1–2 min']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Respiratory depression (without ventilatory support)'
      },
      {
        text: 'Severe asthma'
      },
      {
        text: 'Head injury with increased ICP',
        relative: true
      },
      {
        text: 'Hypotension',
        relative: true
      }
    ],
    adverseEffects: ['Respiratory depression', 'Hypotension', 'Nausea / vomiting', 'Bronchospasm'],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression.</span> Monitor continuously. Have naloxone available. Risk greatly increases with concurrent CNS depressants.",
      "<span class=\"hl hl--warn\">Histamine release</span> causes more hypotension, pruritus, and bronchospasm than fentanyl. Avoid in hypotensive patients or active bronchospasm.",
      "<span class=\"hl hl--warn\">Administer IV slowly</span> over 1-2 minutes. Rapid push causes exaggerated histamine release and hypotension.",
      "<span class=\"hl hl--warn\">Avoid in renal failure.</span> Active metabolite morphine-6-glucuronide accumulates, causing prolonged and unpredictable respiratory depression."
    ]
  },
  {
    id: 'midazolam',
    summary: 'The preferred prehospital benzodiazepine, with reliable IM and IN absorption, fast onset, and multiple routes. First-line for prehospital seizures when IV is unavailable, also used for agitation, procedural sedation, and shivering control.',
    genericName: 'Midazolam',
    tradeNames: ['Versed'],
    category: ['Neurological', 'Sedation & Anesthesia'],
    classes: ['Benzodiazepine', 'Anticonvulsant', 'Sedative'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Enhances the effect of GABA at the GABA-A receptor, increasing chloride channel opening frequency and producing neuronal hyperpolarization. Provides anticonvulsant, anxiolytic, sedative, amnestic, and skeletal muscle relaxant effects. Water-soluble at acidic pH, allowing reliable IM and IN absorption.',
        target: {
          name: 'GABA-A receptors',
          action: 'enhancer',
          result: 'Anticonvulsant, sedation, anxiolysis, amnesia',
          system: 'GABAergic'
        }
      }
    ],
    indications: [
      {
        name: 'Seizures',
        notes: ['IN/IM preferred over IV when vascular access not established'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '1–3 min',
                duration: '30–60 min',
                maxDose: '4 mg',
                notes: []
              },
              {
                via: ['IM'],
                amount: '0.2 mg/kg',
                onset: '5–10 min',
                duration: '30–60 min',
                maxDose: '10 mg',
                notes: []
              },
              {
                via: ['IN'],
                amount: '0.2 mg/kg',
                onset: '3–5 min',
                duration: '30–60 min',
                maxDose: '10 mg',
                notes: ['Split dose between nares']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '1–3 min',
                duration: '30–60 min',
                maxDose: '4 mg',
                notes: []
              },
              {
                via: ['IM'],
                amount: '0.2 mg/kg',
                onset: '5–10 min',
                duration: '30–60 min',
                maxDose: '10 mg',
                notes: []
              },
              {
                via: ['IN'],
                amount: '0.2 mg/kg',
                onset: '3–5 min',
                duration: '30–60 min',
                maxDose: '10 mg',
                notes: ['5 mg/mL concentration recommended for IN/IM']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Acute Agitation',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '5 mg',
                onset: '3–5 min',
                duration: '30–60 min',
                notes: []
              },
              {
                via: ['IM'],
                amount: '5 mg',
                onset: '10–15 min',
                duration: '30–60 min',
                notes: []
              },
              {
                via: ['IN'],
                amount: '5 mg',
                onset: '3–5 min',
                duration: '30–60 min',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.05–0.1 mg/kg',
                onset: '3–5 min',
                duration: '30–60 min',
                maxDose: '5 mg',
                notes: []
              },
              {
                via: ['IM'],
                amount: '0.1–0.15 mg/kg',
                onset: '10–15 min',
                duration: '30–60 min',
                maxDose: '5 mg',
                notes: []
              },
              {
                via: ['IN'],
                amount: '0.3 mg/kg',
                onset: '3–5 min',
                duration: '30–60 min',
                maxDose: '5 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to benzodiazepines'
      },
      {
        text: 'Respiratory depression (without ventilatory support)'
      },
      {
        text: 'Acute narrow-angle glaucoma'
      },
      {
        text: 'Shock'
      }
    ],
    adverseEffects: ['Respiratory depression / apnea', 'Hypotension', 'Sedation', 'Paradoxical agitation'],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression and apnea</span> are the primary risks. Risk greatly increases with concurrent opioids or alcohol.",
      "<span class=\"hl hl--warn\">Reduce dose by 50% in elderly</span> (≥69 years). Increased sensitivity due to decreased hepatic metabolism.",
      "For IN administration, <strong>divide the dose between both nares.</strong> Delivering the entire volume into one nostril causes runoff and reduced bioavailability."
    ]
  },
  {
    id: 'metoprolol',
    summary: 'A beta-1 selective blocker for rate control of atrial fibrillation, atrial flutter, and SVT. Preferred over diltiazem in patients with systolic heart failure because it addresses the underlying sympathetic drive.',
    genericName: 'Metoprolol',
    tradeNames: ['Lopressor'],
    category: ['Cardiovascular'],
    classes: ['Beta Blocker', 'Class II Antiarrhythmic'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Selectively decreases heart rate, slows AV node conduction, and reduces contractility. Controls ventricular rate in atrial dysrhythmias and reduces myocardial oxygen demand. Cardioselective at low doses with little beta-2 effect.',
        target: {
          name: 'β-1 receptors (cardiac)',
          action: 'antagonist',
          result: '↓ HR, ↓ AV conduction, ↓ contractility, ↓ myocardial O₂ demand',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Narrow Complex Tachycardia (Rate Control)',
        notes: ['Administer only if SBP >120', 'Avoid in CHF, COPD, asthma'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '5 mg',
                onset: '2–5 min',
                duration: '3–6 hr',
                repeat: 'q5 min, max 15 mg total',
                notes: ['Administer slow IV push over 2–5 min']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Bradycardia'
      },
      {
        text: 'Second- or third-degree AV block (without pacemaker)'
      },
      {
        text: 'Heart failure'
      },
      {
        text: 'Hypotension'
      },
      {
        text: 'Cocaine use',
        relative: true
      },
      {
        text: 'Asthma or severe COPD',
        relative: true
      }
    ],
    adverseEffects: ['Bradycardia', 'Hypotension', 'AV block', 'Bronchospasm'],
    precautions: [
      "<span class=\"hl hl--danger\">NASEMSO restricts use to SBP >120 mmHg.</span> In borderline-hypotensive patients, metoprolol can precipitate cardiovascular collapse.",
      "<span class=\"hl hl--danger\">Do NOT give in cocaine-induced chest pain.</span> Unopposed alpha stimulation causes coronary vasospasm and hypertensive crisis. Use benzodiazepines and nitroglycerin instead.",
      "<span class=\"hl hl--warn\">Avoid in WPW / pre-excited atrial fibrillation.</span> AV nodal blockade forces conduction down the accessory pathway, risking VF.",
      "<span class=\"hl hl--warn\">Beta-1 selectivity is lost at higher doses.</span> At cumulative doses approaching 15 mg IV, beta-2 blockade causes bronchospasm in susceptible patients."
    ]
  },
  {
    id: 'methylprednisolone',
    summary: 'A systemic corticosteroid for acute bronchospasm and adrenal crisis. Takes 4 to 6 hours to produce clinical improvement, so it is always given alongside fast-acting bronchodilators.',
    genericName: 'Methylprednisolone',
    tradeNames: ['Solu-Medrol'],
    category: ['Airway & Respiratory', 'Allergic & Immune'],
    classes: ['Corticosteroid'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Suppresses the inflammatory cascade at multiple levels, inhibiting arachidonic acid release, suppressing neutrophil migration, reversing capillary permeability, and stabilizing lysosomal membranes. Reduces airway inflammation, edema, and mucus production. Minimal mineralocorticoid activity.',
        target: {
          name: 'Glucocorticoid receptors (intracellular)',
          action: 'agonist',
          result: '↓ Inflammation, ↓ airway edema, ↓ immune response',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Asthma / Bronchospasm',
        notes: ['Alternative to dexamethasone when IV steroid needed'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IM'],
                amount: '125 mg',
                onset: '1–2 hr',
                duration: '12–36 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IM'],
                amount: '2 mg/kg',
                onset: '1–2 hr',
                duration: '12–36 hr',
                maxDose: '125 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'COPD Exacerbation',
        sameDoseAs: 'Asthma / Bronchospasm'
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Systemic fungal infection'
      }
    ],
    adverseEffects: ['Hyperglycemia', 'GI irritation', 'Mood changes / agitation'],
    precautions: [
      "<span class=\"hl hl--warn\">Steroids take 4-6 hours to work.</span> The prehospital dose benefits the ED course, not the ambulance ride. Always give fast-acting bronchodilators concurrently.",
      "<span class=\"hl hl--warn\">High doses contraindicated in TBI.</span> The CRASH trial showed increased mortality with high-dose methylprednisolone in traumatic brain injury.",
      'Monitor blood glucose in diabetic patients. A single dose will elevate glucose for 12-24 hours.'
    ]
  },
  {
    id: 'meperidine',
    summary: 'A synthetic opioid largely replaced for pain management due to its neurotoxic metabolite normeperidine. Retains a niche role in anti-shivering therapy, where it is uniquely effective through kappa-opioid receptor activity.',
    genericName: 'Meperidine',
    tradeNames: ['Demerol'],
    category: ['Pain Management'],
    classes: ['Opioid Analgesic', 'Analgesic'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Activates mu-opioid receptors for analgesia and sedation, with kappa-opioid activity that uniquely lowers the shivering threshold more than any other opioid. Also blocks sodium channels and inhibits dopamine and norepinephrine reuptake.',
        target: {
          name: 'μ- and κ-opioid receptors',
          action: 'agonist',
          result: 'Analgesia, anti-shivering, sedation',
          system: 'opioid'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pain',
        notes: ['Largely replaced by fentanyl and morphine in most EMS systems'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mg/kg',
                onset: '3–5 min',
                duration: '2–4 hr',
                maxDose: '100 mg',
                notes: ['Administer slowly']
              },
              {
                via: ['IM'],
                amount: '1 mg/kg',
                onset: '10–15 min',
                duration: '2–4 hr',
                maxDose: '100 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Post-Intubation Shivering',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '25–50 mg',
                onset: '3–5 min',
                duration: '2–4 hr',
                notes: ['Administer slowly']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'MAO inhibitor use within 14 days'
      },
      {
        text: 'Seizure disorder'
      },
      {
        text: 'Renal impairment'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Respiratory depression (without ventilatory support)'
      }
    ],
    adverseEffects: ['Seizures', 'Serotonin syndrome', 'Respiratory depression', 'Tachycardia'],
    precautions: [
      "<span class=\"hl hl--danger\">Absolutely contraindicated with MAOIs.</span> The combination causes fatal serotonin syndrome. Ensure no MAOI use within 14 days.",
      "<span class=\"hl hl--warn\">Avoid in elderly.</span> Beers Criteria lists meperidine as a drug to avoid in older adults due to higher risk of neurotoxicity.",
      "For prehospital pain management, <strong>use fentanyl or morphine instead.</strong> Meperidine offers no analgesic advantage and carries unique toxicity risks."
    ]
  },
  {
    id: 'magnesium-sulfate',
    summary: 'An electrolyte used for torsades de pointes, severe refractory bronchospasm, and eclamptic seizures. The definitive anticonvulsant in pregnancy.',
    genericName: 'Magnesium Sulfate',
    tradeNames: [],
    category: ['Cardiovascular', 'Airway & Respiratory', 'OB/GYN'],
    classes: [
      'Electrolyte',
      'Class V Antiarrhythmic',
      'Anticonvulsant',
      'Bronchodilator',
      'Tocolytic'
    ],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Stabilizes excitable membranes by regulating calcium, potassium, and sodium movement across cell membranes, suppressing triggered dysrhythmias such as torsades. Depresses the CNS and blocks peripheral neuromuscular transmission, providing anticonvulsant effect in eclampsia. Relaxes bronchial smooth muscle via calcium antagonism.',
        target: {
          name: 'Cell membrane ion channels (Ca²⁺/K⁺/Na⁺)',
          action: 'stabilizer',
          result: 'Antiarrhythmic, anticonvulsant, bronchodilation',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Torsades de Pointes',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '2 g',
                onset: '1–2 min',
                duration: '30 min',
                notes: ['Administer over 1–2 min']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '25–50 mg/kg',
                onset: '1–2 min',
                duration: '30 min',
                maxDose: '2 g',
                notes: ['Administer over 1–2 min']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Pre-eclampsia (Seizure Prophylaxis)',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '4 g',
                onset: '5–10 min',
                duration: 'Duration of infusion',
                notes: ['Administer over 20–30 min, then 2 g/hr maintenance']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Eclampsia (Active Seizure)',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '6 g',
                onset: '5–10 min',
                duration: 'Duration of infusion',
                notes: ['Administer over 5–10 min']
              },
              {
                via: ['IM'],
                amount: '8 g',
                onset: '10–20 min',
                duration: '3–4 hr',
                notes: ['4 g in each buttock, use when IV not available']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Severe Bronchospasm',
        notes: ['For impending respiratory failure refractory to albuterol and ipratropium'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '2 g',
                onset: '5–10 min',
                duration: '30–60 min',
                notes: ['Administer over 10–15 min', 'Consider 1 g for geriatric patients']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '40 mg/kg',
                onset: '5–10 min',
                duration: '30–60 min',
                maxDose: '2 g',
                notes: ['Administer over 10–15 min']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypermagnesemia'
      },
      {
        text: 'Heart block'
      },
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Renal failure',
        relative: true
      }
    ],
    adverseEffects: ['Hypotension', 'Flushing', 'Respiratory depression', 'Bradycardia'],
    precautions: [
      "<span class=\"hl hl--danger\">Monitor deep tendon reflexes.</span> Loss of DTRs is the earliest sign of magnesium toxicity and precedes respiratory depression and cardiac arrest.",
      "<span class=\"hl hl--danger\">Calcium is the antidote for magnesium toxicity.</span> Administer calcium chloride or calcium gluconate IV if respiratory depression or cardiac effects occur.",
      "<span class=\"hl hl--warn\">Infuse at the correct rate for each indication.</span> Pulseless torsades: fast push. Bronchospasm: slow over 10-15 min. Eclampsia: slow over 20-30 min.",
      "<span class=\"hl hl--warn\">Caution in renal failure.</span> Magnesium is renally excreted. Standard doses can reach toxic levels in renal impairment."
    ]
  },
  {
    id: 'diphenhydramine',
    summary: 'A first-generation antihistamine used in EMS for allergic reactions, drug-induced dystonia, nausea, and sedation, and is the most commonly used IV antihistamine in prehospital care. Causes significant sedation and anticholinergic effects: dry mouth, urinary retention, confusion.',
    genericName: 'Diphenhydramine',
    tradeNames: ['Benadryl'],
    category: ['Allergic & Immune', 'Neurological'],
    classes: ['Anticholinergic', 'Antihistamine', 'Sedative', 'Antiemetic'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Reduces urticaria, pruritus, vasodilation, and bronchoconstriction. Also has anticholinergic properties that reverse drug-induced dystonia and akathisia by restoring dopamine-acetylcholine balance in the basal ganglia.',
        target: {
          name: 'Histamine H1 receptors',
          action: 'antagonist',
          result: '↓ Urticaria, ↓ pruritus, ↓ EPS',
          system: 'histaminergic'
        }
      }
    ],
    indications: [
      {
        name: 'Allergic Reaction / Anaphylaxis',
        notes: ['Not a first-line treatment for anaphylaxis'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO', 'IM'],
                amount: '25–50 mg',
                onset: 'IV: 5–10 min, IM: 20–30 min',
                duration: '4–6 hr',
                notes: []
              },
              {
                via: ['PO'],
                amount: '25–50 mg',
                onset: '30–60 min',
                duration: '4–6 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO', 'IM'],
                amount: '1 mg/kg',
                onset: 'IV: 5–10 min, IM: 20–30 min',
                duration: '4–6 hr',
                maxDose: '50 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Extrapyramidal Symptoms',
        notes: ['Includes dystonia and akathisia'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IM'],
                amount: '25–50 mg',
                onset: '5–10 min',
                duration: '4–6 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO', 'IM'],
                amount: '1–1.25 mg/kg',
                onset: '5–10 min',
                duration: '4–6 hr',
                maxDose: '25 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Neonates'
      },
      {
        text: 'Acute asthma',
        relative: true
      }
    ],
    adverseEffects: ['Sedation', 'Anticholinergic effects', 'Tachycardia', 'Hypotension'],
    precautions: [
      "<span class=\"hl hl--warn\">Treats symptoms, not anaphylaxis.</span> Relieves urticaria and pruritus but does NOT reverse bronchospasm, laryngeal edema, or hypotension. Never delay epinephrine to give diphenhydramine.",
      "<span class=\"hl hl--warn\">Anticholinergic effects.</span> Use caution in elderly patients, prostatic hypertrophy, and narrow-angle glaucoma.",
      "For <strong>acute dystonia from antipsychotics</strong>, diphenhydramine 25-50 mg IV/IM provides rapid relief."
    ]
  },
  {
    id: 'ipratropium',
    summary: 'An inhaled anticholinergic bronchodilator given alongside albuterol for acute bronchospasm. Works through a different mechanism than beta-agonists, providing additive bronchodilation.',
    genericName: 'Ipratropium Bromide',
    tradeNames: ['Atrovent'],
    category: ['Airway & Respiratory'],
    classes: ['Anticholinergic', 'Bronchodilator'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Blocks vagally-mediated bronchoconstriction, producing bronchodilation through a different pathway than beta-2 agonists like albuterol. Provides additive effect when combined. Also reduces mucus secretion from submucosal glands.',
        target: {
          name: 'Muscarinic M3 receptors (bronchial)',
          action: 'antagonist',
          result: 'Bronchodilation, ↓ secretions',
          system: 'cholinergic'
        }
      }
    ],
    indications: [
      {
        name: 'Bronchospasm',
        notes: ['Always given in conjunction with albuterol'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['NEB'],
                amount: '0.5 mg',
                onset: '5–15 min',
                duration: '4–6 hr',
                repeat: 'Up to 3 doses',
                notes: ['May combine in same nebulizer with albuterol']
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['NEB'],
                amount: '0.5 mg',
                onset: '5–15 min',
                duration: '4–6 hr',
                repeat: 'Up to 3 doses',
                notes: ['May combine in same nebulizer with albuterol']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to ipratropium or atropine derivatives'
      },
      {
        text: 'Soy or peanut allergy (MDI formulation only)',
        relative: true
      }
    ],
    adverseEffects: ['Dry mouth', 'Cough', 'Blurred vision'],
    precautions: [
      "Ipratropium is an <strong>adjunct to albuterol, not a replacement.</strong> Slower onset (15-30 min vs 5 min) and weaker bronchodilation than albuterol alone.",
      "<span class=\"hl hl--warn\">Do NOT give to children with bronchiolitis.</span> Bronchiolitis is viral inflammation, not bronchospasm.",
      "<span class=\"hl hl--warn\">Protect eyes during nebulization.</span> Ipratropium mist contacting the eyes causes mydriasis and blurred vision. Use a mouthpiece when possible."
    ]
  },
  {
    id: 'lidocaine',
    summary: 'A Class Ib antiarrhythmic and local anesthetic, used as an alternative to amiodarone for refractory VF/pulseless VT. Also flushed through IO lines prior to fluid administration to reduce infusion pain in conscious patients.',
    genericName: 'Lidocaine',
    tradeNames: ['Xylocaine'],
    category: ['Cardiovascular', 'Pain Management'],
    classes: ['Class Ib Antiarrhythmic', 'Local Anesthetic', 'Sodium Channel Blocker'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Inhibits recovery after repolarization in cardiac myocytes, decreasing myocardial excitability and conduction velocity in ischemic tissue. Shortens action potential duration and effective refractory period, suppressing ventricular ectopy without prolonging QT.',
        target: {
          name: 'Voltage-gated Na⁺ channels (cardiac)',
          action: 'blocker',
          result: '↓ Ventricular excitability, ↓ ectopy',
          system: 'ion-channel'
        }
      },
      {
        brief: 'Blocks nerve impulse conduction in peripheral nerves, producing local anesthesia. Used through IO needle to reduce infusion pain in conscious patients.',
        target: {
          name: 'Voltage-gated Na⁺ channels (peripheral nerve)',
          action: 'blocker',
          result: 'Local anesthesia',
          system: 'ion-channel'
        }
      }
    ],
    indications: [
      {
        name: 'Cardiac Arrest',
        notes: ['For ventricular fibrillation or pulseless ventricular tachycardia', 'Alternative to amiodarone'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mg/kg',
                onset: 'Immediate',
                duration: '10–20 min',
                repeat: '0.5–0.75 mg/kg q5–10 min, max 3 mg/kg',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mg/kg',
                onset: 'Immediate',
                duration: '10–20 min',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'IO Infusion Pain',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IO'],
                amount: '0.5 mg/kg',
                onset: '30–60 sec',
                duration: '10–20 min',
                maxDose: '40 mg',
                notes: ['Use 0.1 mg/mL concentration, slow push through IO needle']
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to amide-type local anesthetics'
      },
      {
        text: 'Heart block (without pacemaker)'
      },
      {
        text: 'Wolff-Parkinson-White syndrome'
      },
      {
        text: 'Heart failure'
      }
    ],
    adverseEffects: ['CNS toxicity', 'Cardiovascular depression', 'Seizures'],
    precautions: [
      "<span class=\"hl hl--warn\">CNS toxicity follows a predictable progression:</span> perioral numbness → tinnitus → tremors → seizures → coma. If early signs appear, stop the infusion immediately.",
      "<span class=\"hl hl--danger\">Contraindicated in WPW.</span> Lidocaine can paradoxically accelerate conduction through accessory pathways.",
      "<span class=\"hl hl--warn\">Reduce dose in liver failure and CHF.</span> Lidocaine is hepatically metabolized. Decreased hepatic blood flow dramatically increases toxicity risk."
    ]
  },
  {
    id: 'lorazepam',
    summary: 'A benzodiazepine with longer duration than midazolam, historically the IV standard for status epilepticus. Largely replaced prehospitally by midazolam because lorazepam requires IV access and refrigeration.',
    genericName: 'Lorazepam',
    tradeNames: ['Ativan'],
    category: ['Neurological', 'Sedation & Anesthesia'],
    classes: ['Benzodiazepine', 'Anticonvulsant', 'Sedative'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Enhances the effect of GABA at the GABA-A receptor, increasing chloride channel opening frequency and producing neuronal hyperpolarization. Provides anticonvulsant, anxiolytic, sedative, and amnestic effects. Longer duration than midazolam provides sustained seizure suppression.',
        target: {
          name: 'GABA-A receptors',
          action: 'enhancer',
          result: 'Anticonvulsant, sedation, anxiolysis',
          system: 'GABAergic'
        }
      }
    ],
    indications: [
      {
        name: 'Seizures',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '2–5 min',
                duration: '6–8 hr',
                maxDose: '4 mg',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1 mg/kg',
                onset: '2–5 min',
                duration: '6–8 hr',
                maxDose: '4 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Acute Agitation',
        notes: [],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '2 mg',
                onset: '2–5 min',
                duration: '6–8 hr',
                notes: []
              },
              {
                via: ['IM'],
                amount: '4 mg',
                onset: '15–30 min',
                duration: '6–8 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV'],
                amount: '0.05 mg/kg',
                onset: '2–5 min',
                duration: '6–8 hr',
                maxDose: '2 mg',
                notes: []
              },
              {
                via: ['IM'],
                amount: '0.05 mg/kg',
                onset: '15–30 min',
                duration: '6–8 hr',
                maxDose: '2 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to benzodiazepines'
      },
      {
        text: 'Acute narrow-angle glaucoma'
      },
      {
        text: 'Respiratory depression (without ventilatory support)'
      }
    ],
    adverseEffects: ['Respiratory depression / apnea', 'Hypotension', 'Prolonged sedation', 'Paradoxical agitation'],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression and apnea.</span> Risk multiplies with concurrent opioids, alcohol, or other CNS depressants.",
      "<span class=\"hl hl--warn\">Requires refrigeration.</span> Lorazepam degrades at room temperature, losing potency. A significant logistical disadvantage compared to midazolam.",
      "<span class=\"hl hl--warn\">Longer duration (6-8 hours)</span> than midazolam. Sustained seizure suppression is beneficial but prolonged sedation complicates neurologic assessment."
    ]
  },
  {
    id: 'levalbuterol',
    summary: 'The pure R-enantiomer of racemic albuterol, providing beta-2 bronchodilation without the theoretically pro-inflammatory S-enantiomer. Clinical evidence for superiority over albuterol is mixed.',
    genericName: 'Levalbuterol',
    tradeNames: ['Xopenex'],
    category: ['Airway & Respiratory'],
    classes: ['Bronchodilator', 'Beta-2 Agonist', 'Sympathomimetic'],
    source: 'StatPearls',
    moa: [
      {
        brief: 'Relaxes bronchial smooth muscle by increasing intracellular cAMP, producing bronchodilation. Contains only the pharmacologically active R-enantiomer, eliminating the S-enantiomer present in racemic albuterol which may promote inflammation and paradoxical bronchoconstriction.',
        target: {
          name: 'β-2 receptors (bronchial smooth muscle)',
          action: 'agonist',
          result: 'Bronchodilation',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Bronchospasm',
        notes: ['R-isomer of albuterol, equivalent efficacy at lower dose'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['NEB'],
                amount: '1.25 mg',
                onset: '5–15 min',
                duration: '3–6 hr',
                repeat: 'q15–20 min PRN',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['NEB'],
                amount: '0.63–1.25 mg',
                onset: '5–15 min',
                duration: '3–6 hr',
                repeat: 'q15–20 min PRN',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: 'Tachyarrhythmias',
        relative: true
      }
    ],
    adverseEffects: ['Tachycardia', 'Tremor', 'Hypokalemia'],
    precautions: [
      "Dose equivalence: <strong>1.25 mg levalbuterol ≈ 2.5 mg racemic albuterol.</strong>",
      'Same contraindications and precautions as racemic albuterol.'
    ]
  },
  {
    id: 'lactated-ringers',
    summary: 'A balanced isotonic crystalloid that more closely mirrors plasma electrolyte composition than normal saline, causing less hyperchloremic acidosis in large-volume resuscitation.',
    genericName: "Lactated Ringer's Solution",
    tradeNames: [],
    category: ['IV Fluids', 'Resuscitation'],
    classes: ['Crystalloid', 'Electrolyte'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Balanced isotonic crystalloid that expands intravascular volume while maintaining more physiologic electrolyte balance than normal saline. Contains lactate that is converted to bicarbonate in the liver, helping prevent the hyperchloremic metabolic acidosis seen with large-volume normal saline resuscitation.',
        target: {
          name: 'Extracellular fluid volume',
          action: 'donor',
          result: '↑ Intravascular volume, ↑ preload, ↑ BP',
          system: 'other'
        }
      }
    ],
    indications: [
      {
        name: 'Volume Resuscitation',
        notes: [
          'Preferred over NS for hemorrhagic and trauma resuscitation',
          'Lower chloride load reduces risk of hyperchloremic acidosis with large volumes'
        ],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '20 mL/kg',
                onset: 'Immediate',
                duration: 'Variable',
                repeat: 'Repeat PRN based on clinical response',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '20 mL/kg',
                onset: 'Immediate',
                duration: 'Variable',
                repeat: 'Repeat PRN based on clinical response',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Burn Resuscitation (Parkland Formula)',
        sameDoseAs: 'Volume Resuscitation'
      }
    ],
    contraindications: [
      {
        text: 'Fluid overload'
      },
      {
        text: 'Hyperkalemia'
      },
      {
        text: 'Crush injury'
      },
      {
        text: 'Hepatic failure',
        relative: true
      }
    ],
    adverseEffects: ['Fluid overload', 'Hyperkalemia', 'Hypothermia'],
    precautions: [
      "<span class=\"hl hl--danger\">AVOID in crush injury.</span> LR contains potassium. Crushed muscle releases massive intracellular potassium; adding more via LR compounds the hyperkalemia risk. Use NS instead.",
      "<span class=\"hl hl--warn\">Contains calcium.</span> Do not infuse citrated blood products through the same IV line as LR. Use a separate line or NS for blood products."
    ]
  },
  {
    id: 'labetalol',
    summary: 'A combined alpha-1 and non-selective beta blocker for hypertensive emergencies, particularly in preeclampsia and eclampsia. Provides controlled blood pressure reduction without reflex tachycardia while maintaining uteroplacental perfusion.',
    genericName: 'Labetalol',
    tradeNames: ['Trandate'],
    category: ['Cardiovascular', 'OB/GYN'],
    classes: ['Antihypertensive', 'Beta Blocker', 'Alpha-1 Antagonist'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Causes vasodilation and reduces SVR through alpha-1 blockade. Simultaneously blocks beta-1 and beta-2 receptors, preventing the reflex tachycardia that would otherwise occur from vasodilation. The alpha-to-beta blockade ratio is approximately 1:7 IV, producing smooth, controlled blood pressure reduction.',
        target: {
          name: 'α-1 + β-1/β-2 receptors',
          action: 'antagonist',
          result: '↓ SVR, ↓ BP without reflex tachycardia',
          system: 'adrenergic'
        }
      }
    ],
    indications: [
      {
        name: 'Hypertensive Emergency',
        notes: ['Goal is to reduce MAP by 20–25%', 'Ensure HR >60 before administration'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV'],
                amount: '20 mg',
                onset: '2–5 min',
                duration: '2–6 hr',
                repeat: 'q10 min x2 for persistent hypertension',
                notes: ['Administer over 2 min']
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Severe Pre-eclampsia',
        sameDoseAs: 'Hypertensive Emergency'
      }
    ],
    contraindications: [
      {
        text: 'Asthma or obstructive airway disease'
      },
      {
        text: 'Bradycardia'
      },
      {
        text: 'Second- or third-degree heart block (without pacemaker)'
      },
      {
        text: 'Heart failure'
      },
      {
        text: 'Hypotension'
      },
      {
        text: 'Hypersensitivity'
      }
    ],
    adverseEffects: ['Hypotension', 'Bradycardia', 'Bronchospasm', 'Heart block'],
    precautions: [
      "<span class=\"hl hl--danger\">Non-selective beta-blocker. Contraindicated in asthma.</span> Unlike metoprolol, labetalol blocks beta-2 receptors and will cause bronchospasm in asthmatics.",
      "<span class=\"hl hl--warn\">Ensure HR >60 BPM before each dose.</span> Beta-blockade can cause significant bradycardia, especially with repeat dosing.",
      "<span class=\"hl hl--warn\">Use with caution alongside calcium channel blockers.</span> Combined negative inotropic and chronotropic effects risk profound bradycardia and heart failure."
    ]
  },
  {
    id: 'ketorolac',
    summary: 'The only injectable NSAID commonly carried in EMS, providing analgesia and anti-inflammatory effects without respiratory depression, sedation, or abuse potential. Used for renal colic, musculoskeletal pain, and as an opioid-sparing adjunct.',
    genericName: 'Ketorolac',
    tradeNames: ['Toradol'],
    category: ['Pain Management'],
    classes: ['NSAID', 'Analgesic', 'Antipyretic'],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Blocks prostaglandin synthesis by inhibiting COX-1 and COX-2, producing analgesia, anti-inflammatory, and antipyretic effects. Analgesic potency comparable to moderate-dose opioids without CNS depression.',
        target: {
          name: 'COX-1 / COX-2 enzymes',
          action: 'inhibitor',
          result: '↓ Prostaglandins → analgesia, ↓ inflammation, ↓ fever',
          system: 'enzymatic'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Pain',
        notes: ["NSAIDs contraindicated in infants <6 months"],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '15–30 mg',
                onset: '10–15 min',
                duration: '4–6 hr',
                notes: []
              },
              {
                via: ['IM'],
                amount: '30–60 mg',
                onset: '30–60 min',
                duration: '4–6 hr',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            qualifier: '≥6 months',
            routes: [
              {
                via: ['IV'],
                amount: '0.5 mg/kg',
                onset: '10–15 min',
                duration: '4–6 hr',
                maxDose: '15 mg',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Fever',
        sameDoseAs: 'Acute Pain'
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity to NSAIDs'
      },
      {
        text: 'Active GI bleeding'
      },
      {
        text: 'Peptic ulcer disease'
      },
      {
        text: 'Bleeding disorder'
      },
      {
        text: 'Anticoagulant use'
      },
      {
        text: 'Renal impairment'
      },
      {
        text: 'Third trimester pregnancy'
      }
    ],
    adverseEffects: ['GI bleeding', 'Renal impairment', 'Platelet dysfunction'],
    precautions: [
      "<span class=\"hl hl--danger\">Bleeding risk.</span> Contraindicated in coagulopathy, active bleeding, concurrent anticoagulants, or suspected internal hemorrhage.",
      "<span class=\"hl hl--danger\">Renal toxicity.</span> Avoid in dehydrated, hypotensive, or elderly patients. Ensure adequate hydration before administration.",
      "<span class=\"hl hl--warn\">Reduce dose in elderly (≥65 yrs) and patients under 50 kg.</span>",
      "<span class=\"hl hl--warn\">Cross-reactivity with aspirin allergy.</span> Patients with aspirin-induced asthma must not receive ketorolac or any NSAID."
    ]
  },
  {
    id: 'ketamine',
    summary: 'A dissociative anesthetic that preserves airway reflexes, spontaneous respirations, and hemodynamic stability. Used at full dissociative doses for severe agitation and at subdissociative doses for pain management.',
    genericName: 'Ketamine',
    tradeNames: ['Ketalar'],
    category: ['Neurological', 'Pain Management', 'Sedation & Anesthesia'],
    classes: [
      'Dissociative Anesthetic',
      'Analgesic',
      'Sedative',
      'Bronchodilator',
      'Sympathomimetic'
    ],
    source: 'NASEMSO 2022 v3.0',
    moa: [
      {
        brief: 'Blocks NMDA receptors, functionally disconnecting thalamocortical and limbic systems while preserving airway reflexes and spontaneous breathing. At subdissociative doses, this same blockade modulates central pain transmission, providing potent analgesia without respiratory depression.',
        target: {
          name: 'NMDA receptors',
          action: 'antagonist',
          result: 'Dissociative anesthesia, analgesia',
          system: 'glutamatergic'
        }
      }
    ],
    indications: [
      {
        name: 'Acute Agitation / Excited Delirium',
        notes: ['Preferred for delirium with agitated behavior per NASEMSO'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '2 mg/kg',
                onset: '1 min',
                duration: '10–20 min',
                notes: []
              },
              {
                via: ['IM'],
                amount: '4 mg/kg',
                onset: '3–5 min',
                duration: '15–30 min',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1 mg/kg',
                onset: '1 min',
                duration: '10–20 min',
                notes: []
              },
              {
                via: ['IM'],
                amount: '3 mg/kg',
                onset: '3–5 min',
                duration: '15–30 min',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'Acute Pain',
        notes: ['Low-dose analgesic, does not produce dissociation'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '0.1–0.3 mg/kg',
                onset: '1–2 min',
                duration: '15–30 min',
                repeat: 'q15 min PRN',
                notes: ['Administer slow IV over 5 min or as infusion in 100 mL NS']
              },
              {
                via: ['IN'],
                amount: '0.5–1 mg/kg',
                onset: '5–10 min',
                duration: '15–30 min',
                repeat: 'q15 min PRN',
                notes: ['Split dose between nares']
              },
              {
                via: ['IM'],
                amount: '0.5 mg/kg',
                onset: '5–10 min',
                duration: '15–30 min',
                notes: []
              }
            ],
            notes: []
          }
        ]
      },
      {
        name: 'RSI Induction',
        notes: ['Alternative to etomidate, especially in trauma and hemodynamically unstable patients'],
        doses: [
          {
            population: 'Adult',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1–2 mg/kg',
                onset: '30 sec',
                duration: '5–10 min',
                notes: []
              }
            ],
            notes: []
          },
          {
            population: 'Pediatric',
            routes: [
              {
                via: ['IV', 'IO'],
                amount: '1–2 mg/kg',
                onset: '30 sec',
                duration: '5–10 min',
                notes: []
              }
            ],
            notes: []
          }
        ]
      }
    ],
    contraindications: [
      {
        text: 'Hypersensitivity'
      },
      {
        text: "Age < 3 months",
        relative: true
      },
      {
        text: 'Conditions where hypertension is hazardous',
        relative: true
      },
      {
        text: 'Active psychosis',
        relative: true
      }
    ],
    adverseEffects: [
      'Emergence reactions',
      'Hypertension / tachycardia',
      'Hypersalivation',
      'Laryngospasm',
      'Nausea / vomiting'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Sympathomimetic effects.</span> Releases endogenous catecholamines causing hypertension and tachycardia. Use with extreme caution in aortic dissection, intracranial hemorrhage, or severe uncontrolled hypertension.",
      "<span class=\"hl hl--warn\">Emergence reactions</span> in 10-30% of adults. Vivid hallucinations, dysphoria, agitation upon waking. Less common in children.",
      "<span class=\"hl hl--warn\">Hypersalivation</span> can compromise the airway. Position patient on their side.",
      "<span class=\"hl hl--warn\">Laryngospasm</span> is the most serious airway complication (~0.3%). More common in children and at dissociative doses. Treat with positive pressure ventilation.",
      "For subdissociative pain dosing, administer IV <strong>slowly over 1-2 minutes.</strong> Rapid push causes brief dissociation and dysphoria."
    ]
  }
];
