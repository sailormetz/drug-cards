const DRUGS = [
  {
    id: 'epinephrine',
    summary: 'The first-line drug for anaphylaxis and cardiac arrest. A sympathomimetic that reverses bronchoconstriction, vasodilation, and cardiovascular collapse.',
    genericName: 'Epinephrine',
    tradeNames: ['Adrenalin', 'EpiPen'],
    category: ['Resuscitation', 'Cardiovascular', 'Airway & Respiratory'],
    classes: ['Sympathomimetic', 'Catecholamine', 'Vasopressor', 'Inotrope', 'Chronotrope', 'Bronchodilator'],
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
    adverseEffects: ['Tachycardia', 'Hypertension', 'Dysrhythmias', 'Anxiety / Tremor', 'Pallor / Headache', 'Angina'],
    precautions: [
      "Use caution in <span class=\"hl hl--warn\">elderly</span>, known <span class=\"hl hl--warn\">cardiac disease</span>, <span class=\"hl hl--warn\">hypertension</span>, and <span class=\"hl hl--warn\">diabetes</span>.",
      'May precipitate angina or MI in susceptible patients.',
      "<span class=\"hl hl--danger\">No contraindications in anaphylaxis or cardiac arrest</span> - benefits always outweigh risks.",
      'IM is the correct route for anaphylaxis - IV push epinephrine in a patient with a pulse risks fatal arrhythmia.'
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
    adverseEffects: [
      'Bradycardia',
      'Hypotension',
      'Bronchospasm',
      'Dizziness / Fatigue',
      'Nausea',
      'Hypoglycemia (may mask tachycardic symptoms)',
      'AV block'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Non-selective β-blockade causes bronchoconstriction</span> - contraindicated in asthma, COPD, and reactive airway disease.",
      "Masks tachycardic signs of <span class=\"hl hl--warn\">hypoglycemia</span> - use with caution in diabetic patients.",
      "<span class=\"hl hl--warn\">Do not abruptly discontinue</span> in patients on chronic therapy - risk of rebound hypertension, angina, and MI.",
      "Crosses the blood-brain barrier - may cause <span class=\"hl hl--warn\">altered mental status, seizures, and widened QRS</span> in overdose (similar to TCA toxicity).",
      "Patients on propranolol may be <span class=\"hl hl--danger\">resistant to epinephrine</span> during anaphylaxis - higher or repeated doses may be needed; unopposed alpha stimulation can cause paradoxical hypertension.",
      "Use with caution in <span class=\"hl hl--warn\">elderly</span> - decreased hepatic clearance increases drug levels.",
      "<span class=\"hl hl--warn\">Overdose treatment</span>: glucagon is the first-line antidote (bypasses β-receptor), followed by atropine for bradycardia and vasopressors for hypotension."
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
    adverseEffects: [
      'Hypotension (dose and rate dependent)',
      'Bradycardia',
      'Anaphylaxis / Anaphylactoid reactions',
      'Pulmonary hypertension',
      'Pulmonary edema (noncardiogenic)',
      'Bronchoconstriction',
      'Nausea / Vomiting',
      'Flushing / Warmth'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Rapid administration causes severe hypotension and cardiovascular collapse</span> - never exceed 50 mg over 10 min.",
      "<span class=\"hl hl--danger\">Have vasopressors and resuscitation equipment immediately available</span> - fatal anaphylaxis has been reported.",
      "Higher risk of allergic reaction in patients with <span class=\"hl hl--warn\">fish allergy</span>, <span class=\"hl hl--warn\">previous vasectomy</span>, or prior exposure to <span class=\"hl hl--warn\">protamine-containing insulin</span> (NPH, protamine zinc).",
      "In excess, protamine itself acts as a <span class=\"hl hl--warn\">weak anticoagulant</span> - do not overdose.",
      "Rebound heparinization can occur <span class=\"hl hl--warn\">up to 18 hours post-cardiac surgery</span> despite initial complete neutralization - monitor closely and redose if indicated.",
      "Administer via <strong>peripheral IV</strong> - central line administration increases histamine release and drops SVR."
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
    adverseEffects: [
      'Tachycardia (transient)',
      'Tremor',
      'Pallor',
      'Nausea',
      'Rebound edema (symptoms may return to baseline after 1-2 hrs)'
    ],
    precautions: [
      "<span class=\"hl hl--warn\">Rebound worsening</span> - therapeutic effect wanes by 2 hours. Symptoms may return to pre-treatment severity; this is NOT an adverse reaction, it is the drug wearing off. Monitor and redose or escalate.",
      "Does <strong>not</strong> alter the natural course of croup - always pair with <strong>dexamethasone</strong> (0.6 mg/kg PO/IV/IM) for sustained inflammation control.",
      "Systemic bioavailability is &lt;10% when nebulized, so cardiovascular side effects are <span class=\"hl hl--warn\">mild and transient</span> compared to parenteral epinephrine.",
      "Children requiring <span class=\"hl hl--warn\">≥3 doses</span> have increased odds of needing hospital admission and additional interventions.",
      "L-epinephrine (standard 1 mg/mL) 5 mg nebulized is therapeutically equivalent and may have a <span class=\"hl hl--beta\">longer duration of action</span> - either formulation is acceptable per NASEMSO.",
      'Minimize agitation - crying and distress worsen airway obstruction. Use blow-by nebulization if tolerated better than a mask.'
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
    adverseEffects: [
      'Prolonged paralysis',
      'Tachycardia (mild, transient)',
      'Hypertension (mild, transient)',
      'Bronchospasm (rare)',
      'Anaphylaxis (rare but severe)',
      'Awareness with paralysis (if sedation inadequate)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Does NOT provide sedation, analgesia, or amnesia</span> - always administer an induction agent (ketamine, etomidate, etc.) BEFORE the paralytic. Awareness with paralysis is a preventable catastrophe.",
      "<span class=\"hl hl--danger\">Post-intubation sedation plan must be in place BEFORE RSI</span> - paralysis (40-70 min) will outlast most induction agents (10-20 min). Redose sedation at 20 min or watch for signs: tearing, tachycardia, hypertension, facial grimacing.",
      "Fully reversible with <strong>sugammadex</strong> (16 mg/kg IV for immediate reversal of full RSI-dose blockade; 4 mg/kg for partial blockade). This is the key safety advantage over succinylcholine.",
      "No risk of <span class=\"hl hl--beta\">hyperkalemia</span>, <span class=\"hl hl--beta\">malignant hyperthermia</span>, or <span class=\"hl hl--beta\">fasciculations</span> - safe in burns, crush injuries, renal failure, neuromuscular disease, and prolonged immobilization where succinylcholine is contraindicated.",
      "Duration is prolonged by <span class=\"hl hl--warn\">hepatic dysfunction</span>, <span class=\"hl hl--warn\">hypothermia</span>, and <span class=\"hl hl--warn\">acidosis</span> - effects may last well beyond the expected window.",
      "If intubation fails and cannot ventilate, <span class=\"hl hl--danger\">sugammadex can restore spontaneous breathing</span> - this is the \"rescue\" plan when using rocuronium for RSI.",
      "Use <strong>ideal body weight</strong> for dosing in obese patients - dosing on total body weight risks excessive duration of paralysis."
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
    adverseEffects: [
      'Metabolic alkalosis',
      'Hypernatremia',
      'Hypokalemia',
      'Hypocalcemia (ionized)',
      'Fluid overload / Pulmonary edema',
      'Tissue necrosis (extravasation)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Ensure adequate ventilation before administering</span> - bicarb generates CO₂ when buffering acid. Without ventilation, CO₂ accumulates and paradoxically worsens intracellular acidosis.",
      "<span class=\"hl hl--danger\">Extravasation causes tissue necrosis</span> - 8.4% solution is extremely hyperosmolar (~2000 mOsm/L). Verify IV patency before administration.",
      "<span class=\"hl hl--warn\">Not a routine cardiac arrest drug</span> - only indicated for suspected hyperkalemia or TCA/sodium channel blocker overdose in arrest. Routine use in arrest does not improve outcomes.",
      "Not indicated for routine use in <span class=\"hl hl--warn\">DKA</span> - insulin and fluids correct the acidosis; bicarb may worsen outcomes in pediatric DKA.",
      "No evidence supports routine use in <span class=\"hl hl--warn\">neonatal resuscitation</span>.",
      "<span class=\"hl hl--warn\">Incompatible</span> with calcium salts (precipitates), catecholamines (norepinephrine, dobutamine, dopamine), and many other IV drugs - flush line before and after, or use a separate line.",
      "Use <strong>4.2% concentration</strong> (0.5 mEq/mL) for neonates and infants to reduce the osmolar load.",
      "In crush injury, administer <strong>before releasing the trapped extremity</strong> when possible - reperfusion releases a bolus of potassium, acid, and myoglobin."
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
      'Hyperkalemia (↑ K⁺ by ~0.5 mEq/L; fatal in at-risk patients)',
      'Fasciculations',
      'Malignant hyperthermia (rare, potentially fatal)',
      'Bradycardia (especially pediatrics and repeat doses)',
      'Masseter spasm / Trismus',
      'Increased IOP',
      'Increased intragastric pressure',
      'Post-procedure myalgias'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">No reversal agent exists</span> - you must wait for plasma cholinesterase to metabolize the drug (~6-10 min). If you cannot intubate and cannot ventilate, you must BVM until paralysis wears off. This is the key safety trade-off vs. rocuronium (reversible with sugammadex).",
      "<span class=\"hl hl--danger\">Does NOT provide sedation, analgesia, or amnesia</span> - always administer an induction agent BEFORE the paralytic.",
      "<span class=\"hl hl--danger\">Fatal hyperkalemia risk</span> - burns, crush injuries, denervation injuries, and neuromuscular disease cause acetylcholine receptor upregulation across the muscle membrane. Succinylcholine depolarizes all of these receptors simultaneously, releasing a massive potassium bolus that can cause cardiac arrest. Risk begins 24-72 hrs post-injury and persists for months.",
      "<span class=\"hl hl--danger\">Malignant hyperthermia</span> - a rare pharmacogenetic crisis triggered by succinylcholine (and volatile anesthetics). Signs: rapidly rising temperature, rigidity, tachycardia, hypercarbia, metabolic acidosis. Treatment: <strong>dantrolene</strong>. Family history is a contraindication.",
      "<span class=\"hl hl--warn\">Bradycardia</span> - more common in pediatrics and with repeat doses. Succinylcholine stimulates muscarinic receptors. Consider atropine pretreatment in children.",
      "Patients with <span class=\"hl hl--warn\">pseudocholinesterase deficiency</span> (genetic or acquired from liver disease, pregnancy, organophosphate exposure) will have profoundly prolonged paralysis - hours instead of minutes.",
      "Use <strong>total body weight</strong> for dosing (unlike rocuronium which uses ideal body weight) - succinylcholine distributes into extracellular fluid proportional to total mass.",
      "If <span class=\"hl hl--warn\">trismus/masseter spasm</span> occurs after succinylcholine, treat as possible malignant hyperthermia until proven otherwise."
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
    adverseEffects: [
      'Tachycardia',
      'Tremor',
      'Nervousness / Anxiety',
      'Palpitations',
      'Headache',
      'Hypokalemia (intracellular K⁺ shift)',
      'Hyperglycemia',
      'Nausea'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">FDA black box warning</span>: Do not use injectable terbutaline for prolonged tocolysis (>48-72 hrs) or oral terbutaline for any tocolysis - serious maternal cardiac complications and death have been reported.",
      "Use with caution in patients with <span class=\"hl hl--warn\">cardiovascular disease</span>, <span class=\"hl hl--warn\">hypertension</span>, <span class=\"hl hl--warn\">hyperthyroidism</span>, <span class=\"hl hl--warn\">diabetes</span>, and <span class=\"hl hl--warn\">seizure disorders</span>.",
      "Avoid concurrent use with other <span class=\"hl hl--warn\">sympathomimetics</span> - additive cardiovascular stimulation. Does not preclude use of inhaled beta-agonists for acute bronchospasm.",
      "Use with extreme caution in patients on <span class=\"hl hl--warn\">MAOIs or TCAs</span> - potentiated vascular effects.",
      "<span class=\"hl hl--warn\">Beta-blockers</span> antagonize the bronchodilator effect and may cause severe bronchospasm in asthmatic patients.",
      "When used as a tocolytic: monitor maternal heart rate, BP, and respiratory status for signs of <span class=\"hl hl--warn\">pulmonary edema</span> and <span class=\"hl hl--warn\">myocardial ischemia</span>. Monitor fetal heart rate for tachycardia.",
      "If bronchospasm does not improve after the second SQ dose, escalate care - the patient is in <span class=\"hl hl--danger\">impending respiratory failure</span> and may need epinephrine, magnesium, or intubation."
    ]
  },
  {
    id: 'thiamine',
    summary: "Vitamin B1, given IV or IM to prevent or treat Wernicke\\'s encephalopathy in malnourished or alcoholic patients. Administered before or alongside dextrose in hypoglycemic patients at risk of thiamine deficiency.",
    genericName: 'Thiamine (Vitamin B1)',
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
    adverseEffects: [
      'Injection site pain / Warmth / Flushing',
      'Anaphylaxis (very rare - estimated 1 in 1,000,000)',
      'Nausea (rare)'
    ],
    precautions: [
      "<span class=\"hl hl--beta\">Extremely safe drug</span> - adverse reactions are vanishingly rare. Do not withhold thiamine due to allergy concerns; the risk of untreated Wernicke's (20% mortality, 85% progress to Korsakoff's) far outweighs anaphylaxis risk.",
      "<span class=\"hl hl--warn\">Do NOT delay dextrose</span> to wait for thiamine - the evolution from glucose loading to acute Wernicke's takes hours to days, not minutes. If both are available, give thiamine first or concurrently. If only dextrose is available, give it.",
      "The classic Wernicke's triad (<strong>confusion, ataxia, ophthalmoplegia</strong>) is present in only ~10% of cases - most present with isolated confusion. <span class=\"hl hl--warn\">Treat empirically</span> in any AMS patient with suspected alcohol use or malnutrition.",
      "100 mg is the <strong>standard prehospital dose</strong>. Hospital guidelines for confirmed Wernicke's use much higher doses (500 mg IV TID) - this is outside EMS Scope but important to know for continuity of care.",
      'Oral thiamine has poor bioavailability (~5%) - parenteral administration is essential for acute treatment or prophylaxis.',
      "<span class=\"hl hl--warn\">Magnesium deficiency</span> can make thiamine replacement ineffective - magnesium is a cofactor for converting thiamine to its active form (TPP). Chronic alcoholics are often deficient in both."
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
    adverseEffects: [
      'Nausea / Vomiting',
      'Diarrhea',
      'Hypotension (if infused too rapidly)',
      'Dizziness / Headache',
      'Thromboembolic events (theoretical - not borne out in major trials)',
      'Seizures (dose-dependent, primarily at very high doses)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">TIME IS CRITICAL</span> - give within 3 hours of injury onset. CRASH-2 demonstrated that TXA given &gt;3 hours after injury <strong>increased mortality</strong>. Greatest benefit is within the first hour.",
      "<span class=\"hl hl--warn\">Infuse over 10 minutes</span> - rapid IV push causes hypotension. Dilute 1 g in 100 mL NS.",
      "TXA <strong>stabilizes existing clots</strong> - it is NOT a procoagulant and does not replace blood products, surgical hemorrhage control, or tourniquets. Use as an adjunct.",
      "The CRASH-2 trial (20,000+ patients, 2010) showed TXA reduced death from bleeding when given early. The PATCH trial (2023, advanced trauma systems) did not show functional outcome benefit at 6 months - <span class=\"hl hl--warn\">evidence is evolving</span>, but most EMS systems still include TXA in hemorrhage protocols.",
      'For postpartum hemorrhage, the WOMAN trial showed TXA reduced death from bleeding when given within 3 hours of delivery - same time-sensitivity principle as trauma.',
      'TXA does not increase thromboembolic events at standard dosing based on large trial data - the theoretical VTE risk has not been clinically significant.',
      "Use with caution in patients with <span class=\"hl hl--warn\">renal impairment</span> - 95% of TXA is renally excreted unchanged; dose reduction may be needed.",
      "<span class=\"hl hl--warn\">IM route</span> is emerging (UK paramedics authorized) - useful when IV access is delayed. Not yet standard in most US EMS protocols."
    ]
  },
  {
    id: 'vasopressin',
    summary: 'A non-catecholamine vasopressor that acts on V1 receptors in vascular smooth muscle to cause potent vasoconstriction, independent of the adrenergic pathway, making it useful in vasodilatory and septic shock as an adjunct to norepinephrine.',
    genericName: 'Vasopressin (ADH)',
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
    adverseEffects: [
      'Digital ischemia',
      'Mesenteric ischemia',
      'Bradycardia',
      'Decreased cardiac output',
      'Hyponatremia (V2-mediated water retention)',
      'Skin pallor / Blanching',
      'Nausea / Abdominal cramping',
      'Bronchospasm (rare)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Not a first-line vasopressor</span> - use as an adjunct to norepinephrine in vasodilatory shock, not as a replacement. Vasopressin is a pure vasoconstrictor with no inotropic effect; using it alone in cardiogenic shock may worsen cardiac output.",
      "<span class=\"hl hl--warn\">Cardiac arrest use removed from ACLS (2015)</span> - AHA determined that vasopressin + epinephrine offers no advantage over epinephrine alone. Removed for algorithm simplicity, not for safety concerns.",
      "<span class=\"hl hl--warn\">Digital and mesenteric ischemia</span> - the non-adrenergic vasoconstriction is non-selective and can compromise perfusion to extremities and the gut. Risk increases above 0.04 U/min.",
      "Tends to <span class=\"hl hl--warn\">decrease heart rate and cardiac output</span> - unlike catecholamine vasopressors, vasopressin has no β-1 stimulation. Monitor for bradycardia.",
      "Works through an <strong>entirely non-adrenergic pathway</strong> (V1 receptors) - this is the key advantage in vasodilatory shock where catecholamine receptors are downregulated and patients are becoming refractory to norepinephrine.",
      "Patients in <span class=\"hl hl--warn\">septic shock are relatively vasopressin-deficient</span> - exogenous vasopressin at low doses acts as hormone replacement rather than pure pharmacologic vasopressor.",
      "When discontinuing, <span class=\"hl hl--warn\">taper by 0.005 U/min per hour</span> - abrupt cessation may cause rebound hypotension. Controversy exists over whether to stop vasopressin or norepinephrine first.",
      "Not a standard prehospital drug in most EMS systems - primarily relevant for <strong>critical care transport</strong> paramedics managing patients on vasopressor drips."
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
    adverseEffects: [
      'Prolonged paralysis (dose-dependent)',
      'Bradycardia (may potentiate opioid-induced bradycardia)',
      'Anaphylaxis (rare - cross-reactivity with other NMBAs reported)',
      'ICU-acquired myopathy (with prolonged use)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Does NOT provide sedation, analgesia, or amnesia</span> - always ensure adequate sedation before and throughout paralysis. Awareness with paralysis is a preventable catastrophe.",
      "<span class=\"hl hl--warn\">Requires reconstitution</span> - vecuronium is supplied as a lyophilized powder that must be mixed before administration. This adds preparation time vs. rocuronium (which is ready to use), making it a poor RSI choice even apart from its slow onset.",
      "<span class=\"hl hl--warn\">Hepatic metabolism</span> - duration is significantly prolonged in patients with liver disease or cholestasis. The active metabolite (3-desacetylvecuronium) has ~50% of the parent drug's potency and accumulates in renal failure.",
      "Reversible with <strong>neostigmine + atropine</strong> (or glycopyrrolate) when train-of-four shows ≥2 twitches, or with <strong>sugammadex</strong> (4 mg/kg for moderate blockade) for more reliable reversal.",
      "<span class=\"hl hl--beta\">Minimal hemodynamic effects</span> - this is vecuronium's key advantage. Unlike pancuronium (tachycardia) or succinylcholine (bradycardia/hyperkalemia), vecuronium has essentially no cardiovascular impact, making it safe in hemodynamically unstable patients.",
      "Prolonged ICU use (days) increases risk of <span class=\"hl hl--warn\">critical illness myopathy</span>, especially when combined with corticosteroids. Limit use to shortest duration necessary.",
      "<span class=\"hl hl--warn\">Do not mix</span> with alkaline solutions (barbiturates, sodium bicarbonate) - precipitates in alkaline pH.",
      "Compared to <strong>rocuronium</strong>: vecuronium has slower onset, requires reconstitution, and is hepatically metabolized (vs. rocuronium's mixed hepatic/renal clearance). Rocuronium has largely replaced vecuronium for both RSI and many maintenance scenarios."
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
    adverseEffects: [
      'Hypotension',
      'Bradycardia',
      'AV block (first-, second-, third-degree)',
      'Dizziness',
      'Nausea',
      'Constipation (chronic use)',
      'Heart failure exacerbation',
      'Asystole (rare, primarily infants)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">NEVER give to infants</span> - rare but documented cases of fatal asystole and cardiovascular collapse. NASEMSO explicitly warns against routine use in infants.",
      "<span class=\"hl hl--danger\">NEVER give IV verapamil with or shortly after IV beta-blockers</span> - the combination can cause profound bradycardia, AV block, and cardiovascular collapse.",
      "<span class=\"hl hl--danger\">Do NOT use for wide-complex tachycardia</span> - if the rhythm is actually VT misidentified as SVT, verapamil will cause hemodynamic collapse. When in doubt, treat as VT.",
      "<span class=\"hl hl--danger\">Avoid in WPW with atrial fibrillation/flutter</span> - blocking the AV node forces conduction exclusively down the accessory pathway, which can accelerate the ventricular rate and degenerate into VF. Use amiodarone or procainamide instead.",
      "<span class=\"hl hl--warn\">Negative inotrope</span> - reduces myocardial contractility. Avoid in patients with severe LV dysfunction or CHF. Diltiazem has less negative inotropy and is often preferred.",
      "Have <strong>calcium chloride or calcium gluconate</strong> at the bedside - IV calcium can reverse verapamil-induced hypotension without diminishing the antiarrhythmic effect.",
      "<span class=\"hl hl--warn\">CCB overdose</span> is a toxicological emergency - treatment includes IV calcium, glucagon, high-dose insulin with dextrose, vasopressors, and potentially lipid emulsion therapy. See NASEMSO CCB Poisoning guideline.",
      "In most EMS systems, <strong>diltiazem</strong> is preferred over verapamil for calcium channel blocker-based SVT management due to its more predictable hemodynamic profile and less negative inotropy."
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
    adverseEffects: [
      'Hypotension (dose-dependent - decreases preload, afterload, and contractility)',
      'Respiratory depression / Apnea',
      'Bradycardia',
      'Pain on injection',
      'Propofol-Related Infusion Syndrome (PRIS) - with prolonged high-dose use',
      'Hypertriglyceridemia (lipid emulsion)',
      'Green-tinged urine (harmless)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Causes dose-dependent hypotension</span> - propofol reduces preload (venodilation), afterload (vasodilation), and contractility simultaneously. In hypovolemic, septic, or elderly patients, this can cause cardiovascular collapse. Use ketamine or etomidate instead in shock.",
      "<span class=\"hl hl--danger\">No analgesic properties</span> - propofol only provides sedation and amnesia. An intubated patient on a propofol drip still feels pain. Always combine with an analgesic (fentanyl).",
      "<span class=\"hl hl--warn\">Propofol-Related Infusion Syndrome (PRIS)</span> - a rare but potentially fatal complication of prolonged infusions (&gt;48 hrs) at high doses (&gt;80 mcg/kg/min). Features: metabolic acidosis, rhabdomyolysis, hyperkalemia, cardiac failure, renal failure. Mortality ~33%. More common in young adults and children.",
      "Formulated in a <strong>lipid emulsion</strong> (soybean oil, egg lecithin, glycerol) - supports microbial growth. Use strict aseptic technique and discard unused drug within 12 hours. Despite the egg/soy components, the American Academy of Allergy states that patients with egg or soy allergies can receive propofol safely.",
      "Highly titratable with rapid offset - <span class=\"hl hl--beta\">sedation wears off within 5-10 min of stopping infusion</span>. This makes propofol ideal when frequent neurological assessment is needed (e.g., TBI, stroke).",
      "<span class=\"hl hl--warn\">Reduces ICP</span> - propofol decreases cerebral metabolic rate and intracranial pressure, making it useful for post-intubation sedation in head-injured patients, provided MAP is maintained.",
      "Has <strong>anticonvulsant</strong> and <strong>antiemetic</strong> properties - can be useful in status epilepticus (both as RSI induction and ongoing sedation) and for patients prone to vomiting.",
      "In most prehospital EMS systems, <strong>ketamine is preferred</strong> over propofol for RSI induction due to hemodynamic stability. Propofol is more commonly encountered in <strong>critical care transport</strong> as a post-intubation sedation drip."
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
    adverseEffects: [
      'Hypotension (dose-dependent - from negative inotropy and vasodilation)',
      'QT prolongation → Torsades de pointes',
      'QRS widening',
      'Bradycardia / AV block',
      'Proarrhythmia (may worsen or create new arrhythmias)',
      'Nausea / Vomiting',
      'Lupus-like syndrome (chronic use, 20-30% of patients)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Requires slow IV infusion</span> - cannot be pushed. Loading at 20 mg/min to a max of 17 mg/kg takes considerable time (~30-60 min for a typical adult), making procainamide impractical for pulseless arrest. This is its major limitation vs. amiodarone.",
      "<span class=\"hl hl--danger\">Mandatory stop points</span>: stop the infusion immediately if (1) arrhythmia suppressed, (2) hypotension develops, (3) QRS widens &gt;50% from baseline, or (4) max dose of 17 mg/kg reached.",
      "<span class=\"hl hl--warn\">Continuous ECG and BP monitoring</span> are required throughout loading - procainamide prolongs both QRS and QT and can itself cause new arrhythmias including torsades.",
      "<span class=\"hl hl--beta\">Key advantage in WPW</span> - procainamide slows conduction through accessory pathways directly, making it one of the few safe options for pre-excited atrial fibrillation. AV nodal blockers (adenosine, diltiazem, verapamil, beta-blockers) are <strong>contraindicated</strong> in this setting.",
      "The <strong>PROCAMIO trial</strong> (2017) demonstrated procainamide was superior to amiodarone for stable monomorphic VT, with better arrhythmia termination rates and fewer cardiac adverse events.",
      "Reduce maintenance infusion by one-third in <span class=\"hl hl--warn\">moderate renal or cardiac impairment</span> and by two-thirds in <span class=\"hl hl--warn\">severe impairment</span> - procainamide and its active metabolite NAPA are renally cleared.",
      "<span class=\"hl hl--warn\">Avoid combining with other QT-prolonging drugs</span> (amiodarone, sotalol, ondansetron) - additive risk of torsades de pointes.",
      'Chronic oral use (outside EMS Scope) causes a reversible lupus-like syndrome in 20-30% of patients - not a prehospital concern but important background knowledge.'
    ]
  },
  {
    id: 'promethazine',
    summary: 'A first-generation antihistamine and phenothiazine used as an antiemetic, sedative, and antipruritic, often combined with opioids to potentiate analgesia and reduce nausea.',
    genericName: 'Promethazine',
    tradeNames: ['Phenergan'],
    category: ['Nausea & Vomiting', 'Allergic & Immune'],
    classes: ['Antihistamine', 'Antiemetic', 'Phenothiazine', 'Sedative', 'Anticholinergic'],
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
      'Severe tissue necrosis / Gangrene (injection - all routes)',
      'Sedation / Drowsiness (pronounced)',
      'Respiratory depression',
      'Hypotension',
      'QT prolongation',
      'Anticholinergic effects (dry mouth, urinary retention, blurred vision)',
      'Extrapyramidal symptoms / Dystonia',
      'Neuroleptic malignant syndrome (rare)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">FDA Black Box #1 - Tissue Injury</span>: Promethazine injection can cause severe tissue necrosis, gangrene, and amputation regardless of route. ISMP discourages all injectable promethazine. If IV is used: dilute, infuse slowly over 10-15 min through a large-bore vein (not hand or wrist), and stop immediately if burning/pain occurs.",
      "<span class=\"hl hl--danger\">FDA Black Box #2 - Pediatric Respiratory Depression</span>: Contraindicated in children &lt;2 years. Fatal respiratory depression has been reported. Use lowest effective dose in children ≥2 yrs and avoid concurrent respiratory depressants.",
      "<span class=\"hl hl--danger\">NEVER give subcutaneously</span> - chemical irritant properties cause guaranteed tissue damage.",
      "<span class=\"hl hl--warn\">High anticholinergic burden</span> - promethazine has one of the highest anticholinergic activity scores among common medications. Avoid in elderly patients (AGS Beers Criteria) due to risk of confusion, falls, urinary retention, and cognitive impairment.",
      "<span class=\"hl hl--warn\">Potentiates CNS depressants</span> - when combined with opioids, reduce the opioid dose by 25-50%. Additive respiratory depression and sedation with benzodiazepines, alcohol, and other sedatives.",
      "NASEMSO does not include promethazine in its antiemetic recommendations. Per NASEMSO, <span class=\"hl hl--warn\">do not use with haloperidol or droperidol</span> due to additive QT prolongation; ondansetron has less seizure risk.",
      "Antiemetic effect may <span class=\"hl hl--warn\">mask symptoms</span> of serious underlying conditions (bowel obstruction, increased ICP, drug overdose) - maintain vigilance for the primary disease process.",
      "Many EMS systems are removing promethazine from formularies in favor of <strong>ondansetron</strong> (safer, no tissue necrosis risk, fewer drug interactions, less sedation)."
    ]
  },
  {
    id: 'pralidoxime',
    summary: 'Reactivates acetylcholinesterase after organophosphate or nerve agent poisoning, reversing the nicotinic effects that atropine cannot. Must be given before the enzyme bond ages and becomes irreversible.',
    genericName: 'Pralidoxime Chloride (2-PAM)',
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
    adverseEffects: [
      'Hypertension',
      'Tachycardia',
      'Blurred vision / Diplopia',
      'Headache / Dizziness',
      'Nausea / Vomiting',
      'Muscle rigidity (transient)',
      'Cardiac arrest / Respiratory arrest (with rapid IV push)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">TIME-CRITICAL - administer ASAP before \"aging\"</span>. After phosphorylation of AChE, a conformational change (\"aging\") makes the bond permanent and irreversible. Aging rates vary by agent: soman ages in <strong>minutes</strong>, sarin in <strong>hours</strong>, VX in <strong>days</strong>, insecticide OPs in <strong>hours to days</strong>. Once aged, pralidoxime is useless.",
      "<span class=\"hl hl--danger\">Always give WITH atropine</span> - pralidoxime primarily reverses <strong>nicotinic</strong> effects (skeletal muscle paralysis, fasciculations, respiratory muscle weakness). Atropine reverses <strong>muscarinic</strong> effects (bronchorrhea, bronchospasm, salivation, bradycardia). Neither drug alone is sufficient.",
      "<span class=\"hl hl--danger\">Infuse IV slowly over 15-30 min</span> - rapid IV push causes hypertension, tachycardia, muscle rigidity, and can precipitate cardiac or respiratory arrest.",
      "Pralidoxime does NOT cross the blood-brain barrier well - it <span class=\"hl hl--warn\">cannot reverse CNS effects</span> (seizures, coma). Benzodiazepines (diazepam, midazolam) are used for nerve agent seizures.",
      "<span class=\"hl hl--warn\">Limited effectiveness against carbamates</span> - carbamate-AChE bonds spontaneously hydrolyze (half-life 1-2 hrs), so pralidoxime is less critical. However, mixed OP/carbamate exposure is common, so treat empirically.",
      "Pralidoxime may <span class=\"hl hl--warn\">worsen carbaryl (Sevin) poisoning</span> if given without atropine - always co-administer.",
      "<span class=\"hl hl--beta\">DuoDote / Mark I kits</span> are part of the CHEMPACK program and are the standard prehospital delivery system. Each auto-injector delivers both atropine and pralidoxime in one injection - designed for rapid field use during mass casualty nerve agent events.",
      "The three-drug regimen for OP/nerve agent poisoning is: <strong>Atropine</strong> (muscarinic), <strong>Pralidoxime</strong> (nicotinic), <strong>Benzodiazepine</strong> (seizures). All three may be needed simultaneously in severe exposure."
    ]
  },
  {
    id: 'potassium-chloride',
    summary: 'The standard electrolyte replacement for hypokalemia and an ISMP high-alert medication where accidental rapid IV push is lethal. Primarily a hospital drug but critical for CCT paramedics managing existing KCl drips.',
    genericName: 'Potassium Chloride (KCl)',
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
    adverseEffects: [
      'Hyperkalemia → Cardiac arrest (primary lethal risk)',
      'Phlebitis / Vein sclerosis (peripheral infusion)',
      'Pain at infusion site',
      'Nausea / Vomiting / Diarrhea (oral)',
      'GI ulceration / Stenosis (oral tablets)',
      'Tissue necrosis (extravasation of concentrated solutions)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">ISMP HIGH-ALERT MEDICATION</span> - concentrated KCl is one of the most dangerous drugs in any formulary. Accidental rapid IV push of undiluted KCl causes immediate fatal hyperkalemia and cardiac arrest. This is a repeatedly documented lethal medication error. Concentrated KCl should never be stored on nursing units outside of critical care.",
      "<span class=\"hl hl--danger\">NEVER give as IV push</span> - potassium chloride must always be diluted and infused at controlled rates. Even in emergencies, the fastest safe rate is 10-20 mEq over 15-30 min with continuous ECG monitoring.",
      "<span class=\"hl hl--warn\">Max 40 mEq/L via peripheral IV</span> - higher concentrations cause severe phlebitis, vein sclerosis, and pain. Central line access is required for concentrations exceeding 40 mEq/L or infusion rates exceeding 10 mEq/hr.",
      "<span class=\"hl hl--warn\">Continuous ECG monitoring</span> required for rates &gt;10 mEq/hr - watch for peaked T waves (early hyperkalemia), widened QRS, and loss of P waves that signal dangerous potassium accumulation.",
      "Use <strong>glucose-free fluids</strong> for dilution - dextrose solutions stimulate insulin release, which shifts potassium intracellularly and can paradoxically worsen hypokalemia.",
      "<span class=\"hl hl--warn\">Always check magnesium</span> - hypomagnesemia makes hypokalemia refractory to potassium replacement. If K⁺ is not correcting despite adequate replacement, treat magnesium first (1-2 g MgSO₄ IV).",
      "Hypokalemia ECG changes to recognize: <strong>flattened T waves → U waves → ST depression → QT prolongation → arrhythmias</strong>. Hyperkalemia ECG changes (from overcorrection): <strong>peaked T waves → widened QRS → sine wave → asystole/VF</strong>.",
      "Not a standard prehospital medication - primarily relevant for <strong>critical care transport</strong> paramedics inheriting patients on KCl drips and for recognizing hypokalemia as a reversible cause of cardiac arrest (the \"H\" in H's and T's)."
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
    adverseEffects: [
      'Hypotension (especially with rapid IV bolus)',
      'Tachycardia / Arrhythmias',
      'Nausea / Vomiting',
      'Water intoxication / Hyponatremia (antidiuretic effect with prolonged infusion)',
      'Uterine hyperstimulation / Rupture (if given before delivery)',
      'Headache'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Do NOT give before delivery of the infant</span> - oxytocin given during labor can cause uterine hyperstimulation, rupture, fetal distress, and maternal/fetal death. In prehospital EMS, oxytocin is ONLY given after delivery.",
      "<span class=\"hl hl--danger\">Never give as rapid undiluted IV push</span> - bolus IV oxytocin causes severe hypotension, tachycardia, arrhythmias, and myocardial ischemia. Always dilute in IV fluid and infuse, or give IM.",
      "<span class=\"hl hl--warn\">Water intoxication risk</span> - oxytocin has antidiuretic (ADH-like) effects at high doses or prolonged infusions. Can cause hyponatremia → seizures → coma. More relevant to hospital settings with prolonged infusions.",
      "Oxytocin receptor sensitivity varies significantly between patients - women who received <span class=\"hl hl--warn\">prolonged oxytocin augmentation during labor</span> may have downregulated receptors and respond poorly to postpartum oxytocin. Consider second-line uterotonics early in these patients.",
      "If oxytocin fails to control bleeding, the <strong>second-line uterotonics</strong> are: methylergonovine (Methergine) 0.2 mg IM (avoid in hypertension), carboprost (Hemabate) 0.25 mg IM (avoid in asthma), or misoprostol (Cytotec) 600-1000 mcg PR/SL.",
      "<span class=\"hl hl--warn\">PPH management triad</span>: fundal massage + oxytocin + TXA. NASEMSO also recommends considering tranexamic acid for postpartum hemorrhage.",
      "The <strong>4 T's of PPH</strong> - Tone (uterine atony, 70-80%), Trauma (lacerations), Tissue (retained placenta), Thrombin (coagulopathy). Oxytocin only addresses Tone; if bleeding persists with a firm uterus, evaluate for the other causes.",
      'Available as 10 IU/mL vials - store at room temperature. Plasma half-life is only 1-6 minutes, which is why continuous infusion or IM depot is necessary for sustained effect.'
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
    adverseEffects: [
      'Sedation / Drowsiness (pronounced)',
      'Dry mouth',
      'QT prolongation → Torsades de pointes',
      'Dizziness / Headache',
      'Constipation',
      'Urinary retention',
      'Blurred vision',
      'Injection site pain / Abscess (IM)',
      'Agitation (paradoxical, especially in elderly)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">NEVER give IV</span> - hydroxyzine causes thrombosis, tissue necrosis, hemolysis, and gangrene when administered intravenously. The ONLY parenteral route is deep IM. This is different from diphenhydramine, which can be given IV.",
      "<span class=\"hl hl--warn\">QT prolongation</span> - hydroxyzine is contraindicated in patients with prolonged QT interval. Use caution with other QT-prolonging drugs (ondansetron, amiodarone, droperidol, haloperidol). Risk increases with doses &gt;recommended range.",
      "<span class=\"hl hl--warn\">Anticholinergic burden</span> - hydroxyzine is flagged on the AGS Beers Criteria for elderly patients. High anticholinergic activity causes confusion, falls, urinary retention, and cognitive impairment. Avoid in the elderly when possible.",
      "<span class=\"hl hl--beta\">Key advantage: minimal respiratory depression</span> - unlike benzodiazepines, hydroxyzine at therapeutic doses does not significantly depress respiration. This makes it useful for anxiolysis in patients where respiratory depression is a concern.",
      "Metabolized hepatically to <strong>cetirizine</strong> (Zyrtec) - the active metabolite responsible for much of the antihistamine effect. Cetirizine has a half-life of ~20 hrs, meaning antihistamine effects persist long after sedation wears off.",
      "<span class=\"hl hl--warn\">Potentiates CNS depressants</span> - when combined with opioids, sedation is additive. Reduce opioid doses if co-administering. A prehospital RCT found that adding hydroxyzine to IV morphine did not significantly improve pain or anxiety scores.",
      "Not in NASEMSO's recommended formulary - included because some EMS systems still carry it as an <strong>anxiolytic adjunct</strong>, <strong>opioid potentiator</strong>, or <strong>antipruritic</strong> for allergic reactions.",
      "Two formulations exist: <strong>HCl</strong> (Atarax - oral only) and <strong>pamoate</strong> (Vistaril - IM and oral). The pamoate salt is the injectable form used in EMS."
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
    adverseEffects: [
      'Red-orange discoloration of skin, mucous membranes, tears, and urine (chromaturia) - lasts days to weeks',
      'Transient hypertension (13-26% increase in BP)',
      'Reflex bradycardia',
      'Nausea / Headache / Dizziness',
      'Injection site reactions / Infusion site erythema',
      'Allergic reactions (rare - urticaria, angioedema)',
      'Interference with multiple laboratory tests'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Treat empirically - no waiting for lab confirmation</span>. There is no widely available rapid cyanide blood test. Treat based on clinical history (fire, industrial exposure) and signs (altered mental status, seizures, cardiovascular collapse, severe lactic acidosis with high SpO₂).",
      "<span class=\"hl hl--warn\">Red discoloration is expected, NOT an allergic reaction</span> - NASEMSO explicitly warns that skin, tears, and urine will turn red/burgundy for days to weeks after administration. This is the drug forming cyanocobalamin and is harmless.",
      "<span class=\"hl hl--warn\">Interferes with pulse oximetry and lab tests</span> - SpO₂ readings become unreliable after administration. Also interferes with colorimetric assays for: bilirubin, creatinine, glucose, hemoglobin, and several coagulation tests. Draw blood samples BEFORE giving hydroxocobalamin.",
      "<span class=\"hl hl--beta\">Key advantage over nitrite-based antidotes</span> - hydroxocobalamin does NOT cause methemoglobinemia. The older cyanide antidote kit (amyl nitrite + sodium nitrite + sodium thiosulfate) deliberately induces methemoglobin to bind cyanide, which is dangerous in <strong>smoke inhalation</strong> patients who likely have concurrent CO poisoning. CO already reduces oxygen-carrying capacity; adding methemoglobinemia on top can be fatal.",
      "<span class=\"hl hl--beta\">Hypertension is usually beneficial</span> - cyanide poisoning causes hypotension, so the transient BP increase from hydroxocobalamin is actually therapeutic in most cases.",
      "NASEMSO notes <strong>sodium thiosulfate</strong> (12.5 g IV adult, 0.5 g/kg pediatric) as an alternative when hydroxocobalamin is unavailable. Amyl nitrite and sodium nitrite are no longer used in commercial kits.",
      "In fire/smoke exposure, always <strong>co-administer 100% O₂</strong> - cyanide from combustion of synthetic materials (plastics, carpets, upholstery) frequently coexists with carbon monoxide. High-flow oxygen treats both.",
      "<span class=\"hl hl--warn\">Reconstitution takes time</span> - the Cyanokit requires mixing a 5 g lyophilized vial with 200 mL diluent. Practice the reconstitution procedure before encountering a real case. Rock or roll the vial (do not shake) for 30 seconds to dissolve."
    ]
  },
  {
    id: 'albuterol',
    summary: 'A short-acting beta-2 agonist bronchodilator used for acute bronchospasm. Also shifts potassium intracellularly for hyperkalemia management.',
    genericName: 'Albuterol (Salbutamol)',
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
    adverseEffects: [
      'Tachycardia / Palpitations',
      'Tremor (most common dose-limiting effect)',
      'Nervousness / Restlessness',
      'Hypokalemia',
      'Hyperglycemia',
      'Headache',
      'Paradoxical bronchospasm (rare - discontinue immediately)',
      'QT prolongation (high-dose or repeated dosing)'
    ],
    precautions: [
      "<span class=\"hl hl--beta\">Unlimited frequency dosing</span> - NASEMSO authorizes repeating albuterol 5 mg with unlimited frequency for ongoing respiratory distress. This is intentional: the risk of undertreating severe bronchospasm far exceeds the risk of albuterol side effects. Do not hesitate to redose.",
      "Always give with <strong>ipratropium (Atrovent)</strong> - NASEMSO mandates ipratropium 0.5 mg nebulized with albuterol for up to 3 doses. The combined beta-2 + anticholinergic bronchodilation is synergistic and superior to either agent alone.",
      "<span class=\"hl hl--warn\">Hypokalemia</span> - beta-2 stimulation drives K⁺ intracellularly via Na⁺/K⁺-ATPase. With repeated/continuous dosing, clinically significant hypokalemia can develop. Monitor for weakness, arrhythmias, and ECG changes (flattened T waves, U waves).",
      "<span class=\"hl hl--warn\">Tachycardia is expected</span> - reflex tachycardia from peripheral vasodilation plus direct beta-1 stimulation at higher doses. Use cautiously in patients with underlying tachyarrhythmias or coronary disease, but do NOT withhold in true bronchospasm.",
      "<span class=\"hl hl--warn\">Beta-blockers antagonize albuterol</span> - patients on non-selective beta-blockers (propranolol, carvedilol) may have blunted bronchodilator response. Consider ipratropium as the primary bronchodilator or escalate to IM epinephrine for impending respiratory failure.",
      "For <strong>hyperkalemia</strong>: albuterol is a temporizing shift agent - it moves K⁺ into cells but does not remove it from the body. Always combine with other treatments (calcium for cardioprotection, sodium bicarbonate, insulin/dextrose in hospital).",
      "<span class=\"hl hl--warn\">Not effective for bronchiolitis</span> - NASEMSO specifically notes that recent evidence does NOT support routine albuterol or steroids for bronchiolitis (typically RSV in infants).",
      "Consider adding <strong>nebulizer droplet precautions</strong> - nebulized albuterol generates aerosols that can carry viral particles. NASEMSO recommends additional PPE and consider placing a surgical mask over the nebulizer."
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
    adverseEffects: [
      'Reflex tachycardia / Palpitations',
      'Headache (very common)',
      'Flushing',
      'Hypotension (precipitous, unpredictable)',
      'Nausea / Vomiting',
      'Sodium and water retention / Edema',
      'Drug-induced lupus (chronic use - slow acetylators)',
      'Angina exacerbation (in CAD patients)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Unpredictable BP response</span> - hydralazine can cause precipitous, prolonged hypotension lasting up to 12 hours. It is harder to titrate than labetalol. Start with the lower 5 mg dose and wait 20 minutes before repeating.",
      "<span class=\"hl hl--warn\">Reflex tachycardia</span> - arteriolar vasodilation triggers baroreceptor-mediated sympathetic activation → increased HR, contractility, and cardiac output. This is why hydralazine is <strong>contraindicated in CAD</strong> (increased myocardial O₂ demand → ischemia) and <strong>aortic dissection</strong> (increased shear stress).",
      "<span class=\"hl hl--warn\">Target BP ~140/90 in preeclampsia</span> - do NOT overcorrect. The goal is to prevent maternal stroke while maintaining uterine perfusion to the fetus. NASEMSO specifies reducing MAP by only 20-25% initially.",
      "<span class=\"hl hl--beta\">Safe in pregnancy</span> - hydralazine does not cross the placenta in clinically significant amounts and has decades of safety data in pregnancy. This is why it remains a first-line option for preeclampsia despite newer agents being available.",
      "Metabolized by hepatic <span class=\"hl hl--warn\">acetylation</span> - approximately 35% of the population are slow acetylators with higher bioavailability and increased risk of drug-induced lupus (chronic use). Not clinically relevant for acute prehospital dosing but important pharmacology background.",
      "Drug-induced lupus erythematosus (DILE) occurs with <strong>chronic use &gt;6 months</strong> at higher doses - presents with arthralgias, myalgias, pleuritis, and positive ANA. Resolves with drug discontinuation. Not a prehospital concern.",
      "NASEMSO lists three equipotent first-line options for preeclampsia hypertensive emergency: <strong>labetalol</strong> (combined alpha/beta-blocker, check HR &gt;60 first), <strong>hydralazine</strong> (direct vasodilator, watch for precipitous drops), and <strong>nifedipine</strong> (CCB, oral route advantage). Choice depends on local protocols and clinical context.",
      "Causes <span class=\"hl hl--warn\">sodium and water retention</span> - tachyphylaxis develops with repeated dosing. In hospital settings, often paired with a diuretic; not typically relevant for single prehospital doses."
    ]
  },
  {
    id: 'dopamine',
    summary: 'An endogenous catecholamine with dose-dependent effects across dopaminergic, beta-1, and alpha-1 receptors. Third-line vasopressor behind norepinephrine and epinephrine, associated with more arrhythmias and higher mortality than norepinephrine in shock.',
    genericName: 'Dopamine',
    tradeNames: ['Intropin'],
    category: ['Cardiovascular', 'Resuscitation'],
    classes: ['Vasopressor', 'Inotrope', 'Chronotrope', 'Catecholamine', 'Sympathomimetic'],
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
    adverseEffects: [
      'Tachycardia / Tachyarrhythmias (more common than with norepinephrine)',
      'Hypertension (high doses)',
      'Tissue necrosis / Gangrene (extravasation - vesicant)',
      'Nausea / Vomiting',
      'Headache',
      'Angina / Myocardial ischemia',
      'Widened QRS',
      'Peripheral vasoconstriction (digital ischemia at high doses)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Third-line vasopressor per NASEMSO</span> - norepinephrine and epinephrine are preferred. Dopamine is associated with <strong>higher mortality and more arrhythmias</strong> than norepinephrine in both septic and cardiogenic shock. Use only when first-line agents are unavailable.",
      "<span class=\"hl hl--danger\">Vesicant - severe tissue necrosis with extravasation</span>. Infuse through a large-bore, well-secured IV in a large vein (antecubital or central). If extravasation occurs, infiltrate the area with phentolamine 5-10 mg in 10-15 mL NS to counteract alpha-mediated vasoconstriction.",
      "<span class=\"hl hl--warn\">\"Renal-dose\" dopamine is a myth</span> - despite decades of use, multiple meta-analyses have demonstrated that low-dose dopamine (&lt;2 mcg/kg/min) does NOT prevent acute renal failure, reduce dialysis need, or improve mortality. This practice should be abandoned.",
      "<span class=\"hl hl--warn\">Dose-dependent receptor activation</span> - the three-tier model (D1 → β1 → α1) is a useful teaching framework but is <strong>oversimplified</strong> in critically ill patients. Altered receptor function, variable metabolism, and endogenous catecholamine levels make individual response unpredictable. Always titrate to clinical effect, not to a \"receptor dose.\"",
      "<span class=\"hl hl--warn\">Not for pediatric bradycardia</span> - NASEMSO explicitly states dopamine is not indicated for pediatric bradycardia. Use epinephrine instead.",
      "Dopamine <span class=\"hl hl--warn\">increases myocardial oxygen demand</span> more than norepinephrine due to its chronotropic (heart rate-increasing) effect. This is particularly dangerous in patients with underlying coronary disease or acute MI.",
      "Phenytoin co-administration with dopamine has been reported to cause <span class=\"hl hl--warn\">hypotension and bradycardia</span> - use alternative anticonvulsants if needed.",
      "Haloperidol and phenothiazines can <span class=\"hl hl--warn\">suppress dopaminergic effects</span> - this may blunt the renal/mesenteric vasodilation at low doses while leaving adrenergic effects intact."
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
    adverseEffects: [
      'Respiratory depression (dose-dependent - primary lethal risk)',
      'Nausea / Vomiting',
      'Sedation / Drowsiness',
      'Hypotension (especially with hypovolemia)',
      'Pruritus (less than morphine)',
      'Constipation',
      'Miosis',
      'Urinary retention',
      'Chest wall rigidity (rare, with rapid high-dose IV)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">5-7x more potent than morphine per milligram</span> - this potency difference is the single most important fact about hydromorphone. A dose that seems small (1 mg) is equivalent to 5-7 mg of morphine. Medication errors from confusing hydromorphone with morphine dosing are well-documented and potentially fatal.",
      "<span class=\"hl hl--danger\">Respiratory depression</span> - monitor SpO₂ and ventilatory effort continuously. Risk increases in opioid-naïve patients, elderly, those with COPD/sleep apnea, and when combined with other CNS depressants. Have naloxone immediately available.",
      "<span class=\"hl hl--warn\">Use with caution in elderly patients</span> - NASEMSO warns about caution in the elderly. Start with lowest effective dose (0.5 mg IV). Elderly patients have reduced clearance and increased sensitivity to respiratory depression.",
      "<span class=\"hl hl--warn\">Use with caution in head injury</span> - NASEMSO cautions about head-injured patients. Opioids can increase ICP (via CO₂ retention from respiratory depression) and alter mental status, confounding neurological assessment.",
      "<span class=\"hl hl--beta\">Fewer histamine-related side effects than morphine</span> - hydromorphone causes less pruritus, less nausea/vomiting, and less histamine-mediated hypotension compared to morphine. This makes it useful for patients who poorly tolerate morphine.",
      "<span class=\"hl hl--beta\">Potentially safer in renal impairment</span> - unlike morphine (which produces the active, accumulating metabolite morphine-6-glucuronide), hydromorphone's primary metabolite (H3G) is neuroexcitatory but does not accumulate as dangerously in renal failure. Some clinicians prefer hydromorphone when GFR is reduced.",
      "Can be used in a <strong>multimodal approach</strong> with ketorolac (NSAID) or ketamine (sub-dissociative) - combining non-opioid analgesics reduces total opioid requirement and improves pain control.",
      "Not routinely recommended for <strong>pediatric prehospital use</strong> in many EMS systems - fentanyl (IN or IV) is generally preferred for pediatric acute pain due to easier intranasal dosing and more predictable pharmacokinetics."
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
    adverseEffects: [
      'QT prolongation → Torsades de pointes (dose-dependent, rare at therapeutic doses)',
      'Hypotension (alpha-adrenergic blockade)',
      'Akathisia (restlessness - most common side effect)',
      'Dystonia / Extrapyramidal symptoms',
      'Sedation',
      'Tachycardia',
      'Dysphoria'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">FDA Black Box Warning - QT Prolongation</span>: Droperidol can prolong QT and cause torsades de pointes. The FDA mandates 12-lead ECG before administration to rule out QTc &gt;440 ms (males) or &gt;450 ms (females), and ECG monitoring for 2-3 hrs after. NASEMSO requires cardiac monitoring when droperidol is used.",
      "<span class=\"hl hl--beta\">The black box is widely considered excessive</span> - it was based on case reports at doses ≥25 mg in psychiatric patients. A Mayo Clinic cohort of &gt;6,000 ED administrations at therapeutic doses (≤5 mg) showed no significant dysrhythmic events. The AAEM concluded that the risk at doses &lt;2.5 mg is exceedingly rare. Multiple reviews have called for removal of the black box warning.",
      "<span class=\"hl hl--warn\">NASEMSO: do NOT combine with promethazine</span> if haloperidol or droperidol has been given - additive QT prolongation risk. Ondansetron has less seizure risk and is preferred for antiemesis when antipsychotics are on board.",
      "<span class=\"hl hl--warn\">Akathisia</span> - inner restlessness and an inability to sit still is the most common adverse effect and can paradoxically worsen apparent agitation. Differentiate from inadequate sedation. Treat with diphenhydramine 25-50 mg IV or benztropine.",
      "<span class=\"hl hl--beta\">Faster onset than haloperidol</span> - studies show droperidol achieves sedation more rapidly (significant difference at 5, 15, and 30 min) and requires fewer repeat doses (35% vs 81% redosing at 30 min). This makes it particularly effective for acute violent agitation.",
      "<span class=\"hl hl--warn\">Alpha-adrenergic blockade causes hypotension</span> - more pronounced with IV route and in hypovolemic patients. Have fluids available.",
      "Use with <span class=\"hl hl--warn\">extreme caution in patients at risk for QT prolongation</span>: CHF, bradycardia, diuretic use, hypokalemia, hypomagnesemia, other QT-prolonging drugs (amiodarone, sotalol, ondansetron), and age &gt;65 years.",
      'Returned to US market in 2019 after generic manufacturing resumed - many EMS systems and EDs are reintroducing it based on mounting evidence of safety at therapeutic doses.'
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
    adverseEffects: [
      'Adrenal suppression (11-β-hydroxylase inhibition - 6-24+ hrs even after single dose)',
      'Myoclonus (30-60% - not seizure activity)',
      'Pain on injection (propylene glycol formulation)',
      'Nausea / Vomiting (postoperative)',
      'Transient apnea (brief)',
      'Trismus (rare)'
    ],
    precautions: [
      "<span class=\"hl hl--beta\">Hemodynamic stability is the defining advantage</span> - etomidate causes minimal changes in HR, BP, CO, or SVR. This makes it the ideal induction agent for shock, trauma with hemorrhage, cardiac disease, severe aortic stenosis, and any patient where post-induction hypotension is dangerous.",
      "<span class=\"hl hl--warn\">Adrenal suppression controversy</span> - a single 0.3 mg/kg dose inhibits 11-β-hydroxylase and suppresses cortisol synthesis for 6-24+ hours. In septic patients who may already have relative adrenal insufficiency, this raised theoretical concern. However, meta-analyses and the 2025 RSI trial found <strong>no mortality difference</strong> between etomidate and ketamine in septic patients. The clinical significance of transient adrenal suppression remains unproven.",
      "If adrenal suppression is a concern in a septic patient, consider empiric <strong>stress-dose hydrocortisone</strong> (100 mg IV) after intubation - this does not require avoiding etomidate, just prophylactic steroid coverage.",
      "<span class=\"hl hl--warn\">Myoclonus in 30-60% of patients</span> - involuntary muscle jerking that can be mistaken for seizures. These are NOT epileptiform on EEG and do not require anticonvulsant treatment. Pre-treatment with a small dose of midazolam or fentanyl can reduce incidence.",
      "<span class=\"hl hl--danger\">No analgesic properties</span> - like propofol, etomidate only provides sedation and amnesia. Post-intubation analgesia and sedation must be started immediately to prevent awareness under paralysis.",
      "<span class=\"hl hl--beta\">Reduces ICP while maintaining CPP</span> - decreases cerebral metabolic rate, cerebral blood flow, and ICP. This cerebroprotective profile makes etomidate particularly useful for head-injured patients requiring RSI.",
      "<span class=\"hl hl--beta\">Not a controlled substance</span> - unlike ketamine (Schedule III) and propofol (varies by state), etomidate has no DEA scheduling. This simplifies storage, documentation, and wastage - a practical advantage for EMS.",
      "Compared to <strong>ketamine</strong>: etomidate is more hemodynamically neutral (meta-analyses show less post-induction hypotension), but lacks analgesia and causes adrenal suppression. Ketamine provides analgesia and bronchodilation but has sympathomimetic effects that may be unreliable in catecholamine-depleted patients."
    ]
  },
  {
    id: 'acetaminophen',
    summary: 'A non-opioid analgesic and antipyretic that reduces pain and fever without anti-inflammatory or antiplatelet effects. The leading cause of acute liver failure in the US through NAPQI-mediated hepatotoxicity in overdose.',
    genericName: 'Acetaminophen (Paracetamol, APAP)',
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
    adverseEffects: [
      'Hepatotoxicity (overdose - NAPQI-mediated, most common cause of acute liver failure in US)',
      'Nausea / Vomiting (rare at therapeutic doses)',
      'Allergic reactions (rare - rash, urticaria)',
      'Severe skin reactions (extremely rare - SJS, TEN)',
      'Renal injury (rare, with chronic supratherapeutic use)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Hepatotoxicity in overdose</span> - the #1 cause of acute liver failure in the US (~500 deaths/year). At therapeutic doses, CYP2E1 produces small amounts of NAPQI that are safely conjugated by glutathione. In overdose (&gt;150 mg/kg or &gt;7.5-10 g in adults), glutathione is depleted → NAPQI binds hepatocyte proteins → centrilobular necrosis → liver failure.",
      "<span class=\"hl hl--danger\">Antidote: N-acetylcysteine (NAC)</span> - replenishes glutathione stores to detoxify NAPQI. Most effective within 8 hrs of ingestion. NASEMSO protocol: NAC 150 mg/kg IV in 200 mL D5W over 1 hr (loading), then 50 mg/kg IV in 500 mL D5W over 4 hrs. If IV unavailable: 140 mg/kg PO. Consider prehospital initiation with prolonged transport.",
      "<span class=\"hl hl--warn\">Max daily dose awareness</span> - 4 g/day in healthy adults, reduced to 2-3 g/day in hepatic insufficiency, chronic alcohol use, malnutrition, or fasting. Acetaminophen is present in &gt;100 OTC products - patients may unknowingly exceed limits by combining products (Vicodin, Percocet, NyQuil, etc.).",
      "<span class=\"hl hl--warn\">Overdose is initially asymptomatic</span> - patients may appear well for the first 24 hrs after a toxic ingestion. Nausea/vomiting occur early but may resolve, creating a deceptive \"latent phase\" before hepatotoxicity becomes clinically apparent at 72-96 hrs. Do not be reassured by an initially well-appearing overdose patient.",
      "<span class=\"hl hl--beta\">No anti-inflammatory or antiplatelet effects</span> - unlike NSAIDs, acetaminophen does not inhibit peripheral COX. This means: no GI bleeding risk, no platelet dysfunction, safe in asthma, safe with anticoagulants. This is why it's preferred over NSAIDs in many patient populations.",
      "<span class=\"hl hl--beta\">Opioid-sparing effect</span> - IV and oral acetaminophen, when used as part of multimodal analgesia with ketorolac and/or opioids, reduces total opioid requirement. This is increasingly important in prehospital pain management protocols.",
      "Risk factors for hepatotoxicity at lower doses: <strong>chronic alcohol use</strong> (CYP2E1 induction + glutathione depletion), <strong>fasting/malnutrition</strong> (reduced glucuronidation + low glutathione), CYP450 inducers (phenytoin, carbamazepine, isoniazid), and <strong>repeated supratherapeutic dosing</strong> (more dangerous pattern than single acute overdose in some populations).",
      "Children &lt;5 yrs are <span class=\"hl hl--beta\">less susceptible</span> to hepatotoxicity - higher glutathione supply and regeneration capacity plus greater sulfation capacity provide additional protection."
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
    adverseEffects: [
      'Vomiting (most common - risk increases with rapid administration and sorbitol)',
      'Aspiration pneumonitis (most dangerous - can be fatal)',
      'Black stools',
      'Constipation / Bowel obstruction (rare, with repeated dosing)',
      'Corneal abrasion (if contacts eyes)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Aspiration is the #1 risk</span> - charcoal aspiration causes severe pneumonitis and can be fatal. NEVER give to a patient with altered mental status or declining consciousness unless the airway is protected by intubation. NASEMSO repeatedly warns: \"if risk of rapidly decreasing mental status, do not administer oral agents.\"",
      "<span class=\"hl hl--danger\">Does NOT bind everything</span> - remember what charcoal FAILS to adsorb: <strong>Iron, Lithium, Alcohols (ethanol/methanol/ethylene glycol), Acids/Alkalis (caustics), Heavy metals (lead, mercury, arsenic), Potassium, Hydrocarbons/Solvents</strong>. Giving charcoal for these agents is useless and delays appropriate treatment.",
      "<span class=\"hl hl--warn\">1-hour window</span> - volunteer studies show activated charcoal reduces absorption by ~69% at 30 min and ~34% at 1 hr post-ingestion, with diminishing benefit thereafter. However, NASEMSO extends the window for: extended-release formulations, medications with delayed absorption, and drugs that slow gastric emptying.",
      "<span class=\"hl hl--warn\">Without sorbitol</span> - NASEMSO specifies charcoal WITHOUT sorbitol. Sorbitol was historically added as a cathartic to speed GI transit, but it increases vomiting risk (which increases aspiration risk), causes dehydration, and has no proven benefit.",
      "NASEMSO-specific indications include: <strong>acetaminophen</strong> overdose (within 1 hr + prolonged transport), <strong>aspirin</strong> overdose (highly recommended due to erratic absorption), <strong>beta-blocker</strong> poisoning, <strong>CCB</strong> poisoning, and <strong>unknown oral ingestion</strong> if serious poisoning cannot be ruled out.",
      "<span class=\"hl hl--beta\">Desorption can occur</span> - binding is reversible. If the charcoal:toxin ratio is inadequate, bound toxin may release back into the GI lumen. This is why the 10:1 ratio (10 g charcoal per 1 g toxin) is recommended.",
      "<strong>Multi-dose activated charcoal (MDAC)</strong> - repeated doses (15-30 g q2-4 hrs) can enhance elimination of drugs with enterohepatic recirculation or prolonged absorption (carbamazepine, phenytoin, phenobarbital, theophylline, dapsone). NASEMSO notes extended-release agents may benefit. Consult Poison Control before initiating MDAC.",
      "Ipecac is <span class=\"hl hl--warn\">no longer recommended</span> - NASEMSO explicitly states ipecac is not indicated for any poisoning. The manufacturer has ceased production."
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
    adverseEffects: [
      'Chest tightness / Chest pain (most common complaint)',
      'Flushing',
      'Dyspnea / Sense of impending doom',
      'Transient asystole (expected - the therapeutic effect)',
      'Sinus bradycardia / Sinus pause',
      'Transient atrial fibrillation (~12% of patients)',
      'Bronchospasm (especially in asthmatics)',
      'Nausea / Headache / Dizziness'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Must be given as RAPID IV push (1-3 sec) with immediate flush</span> - adenosine has a half-life &lt;10 seconds. Any delay in administration or flush allows the drug to be metabolized before reaching the heart. Slow push = wasted dose. Use two-syringe technique with a stopcock at the most proximal IV port.",
      "<span class=\"hl hl--warn\">Warn the patient</span> - adenosine causes a brief but intense sensation of chest pressure, flushing, dyspnea, and \"impending doom.\" These effects are self-limiting (&lt;30 sec) but can be extremely distressing. Prepare the patient: \"You may feel like your heart stops and your chest gets tight for a few seconds - this is normal and very brief.\"",
      "<span class=\"hl hl--danger\">Avoid in WPW with atrial fibrillation/flutter</span> - NASEMSO explicitly warns against AV nodal blocking agents (adenosine, CCBs, digoxin, beta-blockers) in pre-excited AF. Blocking the AV node forces conduction through the accessory pathway → ventricular fibrillation.",
      "<span class=\"hl hl--warn\">Methylxanthines antagonize adenosine</span> - caffeine and theophylline are competitive antagonists at A1 receptors. Patients on theophylline or who have consumed large amounts of caffeine may require higher doses. Consider starting with 12 mg in these patients.",
      "<span class=\"hl hl--warn\">Dipyridamole and carbamazepine potentiate adenosine</span> - these drugs block nucleoside uptake/transport, prolonging adenosine's half-life and intensifying its effects. Reduce the initial dose to 3 mg in patients taking these medications.",
      "<span class=\"hl hl--warn\">Bronchoconstriction risk</span> - adenosine can trigger bronchospasm, particularly in patients with asthma or reactive airway disease. Use with caution; have albuterol available.",
      "<span class=\"hl hl--beta\">Transient AF occurs in ~12%</span> of patients after adenosine administration due to shortening of atrial refractory period. This is usually self-limiting but can be dangerous in patients with WPW (accessory pathway conduction → VF).",
      "<span class=\"hl hl--beta\">Diagnostic value in wide-complex tachycardia</span> - even when adenosine doesn't terminate the rhythm, the transient AV block can reveal the underlying atrial activity (flutter waves, P waves) and help distinguish SVT with aberrancy from VT. Always record a rhythm strip during administration.",
      "Adenosine is <span class=\"hl hl--beta\">safe in pregnancy</span> - it is an endogenous substance that is rapidly metabolized. Does not pose risk to the fetus or nursing infant."
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
    adverseEffects: [
      'Hypotension (most common acute adverse effect - 16% in trials)',
      'Bradycardia',
      'QT prolongation → Torsades de pointes',
      'AV block',
      'Phlebitis (peripheral IV - use central line for concentrations >2 mg/mL)',
      'Nausea',
      'Pulmonary toxicity / Fibrosis (chronic use)',
      'Thyroid dysfunction - hypo/hyperthyroidism (chronic; amiodarone is 37% iodine by weight)',
      'Hepatotoxicity (chronic use)',
      'Corneal microdeposits (chronic use)',
      'Blue-gray skin discoloration (chronic use)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Hypotension is the most common acute complication</span> - occurs in ~16% of patients and is worse with rapid infusion and cumulative doses &gt;2.2 g/24 hrs. For stable tachycardia with a pulse, ALWAYS infuse slowly over 10 min. During cardiac arrest, rapid push is acceptable because there is no blood pressure to protect.",
      "<span class=\"hl hl--warn\">Extremely long half-life (~40 days)</span> - amiodarone is highly lipophilic and distributes into virtually every tissue. Once given, its effects persist for weeks to months. This complicates post-ROSC management because you cannot \"turn off\" amiodarone if adverse effects develop.",
      "<span class=\"hl hl--warn\">Do NOT combine with other QT-prolonging drugs</span> - NASEMSO and ACLS recommend giving only ONE antiarrhythmic during cardiac arrest. Combining amiodarone with procainamide, sotalol, or other QT-prolonging agents dramatically increases torsades risk.",
      "<span class=\"hl hl--warn\">PROCAMIO trial showed procainamide was superior</span> for stable monomorphic VT - amiodarone remains standard for VF/pVT arrest, but for stable VT with a pulse, procainamide had better termination rates and fewer cardiac adverse events.",
      "<span class=\"hl hl--warn\">Amiodarone can promote cardioversion</span> - NASEMSO cautions that in AF patients not receiving anticoagulation, amiodarone-induced cardioversion could dislodge atrial thrombus and cause stroke.",
      "<span class=\"hl hl--beta\">Multichannel blockade is the key pharmacology concept</span> - amiodarone is uniquely classified as Class III but exhibits Class I (Na⁺ block), Class II (anti-adrenergic), Class III (K⁺ block), and Class IV (Ca²⁺ block) properties. This \"dirty drug\" profile is what makes it broadly effective across multiple arrhythmia types.",
      "Chronic toxicities (pulmonary fibrosis, thyroid dysfunction, hepatotoxicity, corneal deposits, blue-gray skin) are <strong>hospital/outpatient concerns</strong> - not relevant to prehospital single-dose use but important pharmacology background for understanding why amiodarone is a drug of last resort for long-term management.",
      "<span class=\"hl hl--warn\">Nexterone formulation</span> - newer premixed IV amiodarone that does NOT contain polysorbate 80 or benzyl alcohol. Traditional formulations contain these additives which contribute to hypotension and are toxic to neonates (\"gasping syndrome\"). Verify which formulation your system carries."
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
                duration: '7–10 days (irreversible platelet inhibition)',
                notes: ['Chew thoroughly, do not swallow whole']
              },
              {
                via: ['PR'],
                amount: '300 mg',
                onset: '30–60 min',
                duration: '7–10 days (irreversible platelet inhibition)',
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
    adverseEffects: [
      'GI upset / nausea',
      'Increased bleeding risk',
      'Allergic reaction / urticaria',
      'Bronchospasm (aspirin-sensitive patients)',
      'Tinnitus (high doses)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">No reversal agent exists</span> - once given, the antiplatelet effect lasts the life of the platelet (~10 days). Platelet transfusion is the only way to restore function.",
      "Must be <strong>chewed</strong>, not swallowed whole - enteric-coated aspirin swallowed intact delays absorption by hours and is ineffective in acute ACS.",
      "<span class=\"hl hl--warn\">Ask about NSAID/aspirin allergy before administration</span> - aspirin-exacerbated respiratory disease (AERD) can trigger severe bronchospasm and angioedema.",
      "Concurrent use of <span class=\"hl hl--warn\">ibuprofen</span> may interfere with aspirin's antiplatelet effect - ibuprofen reversibly competes for the COX-1 binding site and can block aspirin's irreversible acetylation if taken first.",
      'Low bleeding risk from a single prehospital dose - do not withhold for suspected ACS based on theoretical bleeding concerns alone.'
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
    adverseEffects: [
      'Tachycardia',
      'Dry mouth / decreased secretions',
      'Mydriasis / blurred vision',
      'Urinary retention',
      'Flushed, warm, dry skin',
      'Confusion / agitation (especially elderly)',
      'Paradoxical bradycardia (low doses or slow IV push)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Ineffective in hypothermic bradycardia</span> - do not delay pacing for repeated atropine doses if the patient is hypothermic.",
      "<span class=\"hl hl--danger\">Will not work in denervated hearts</span> (cardiac transplant patients) - proceed directly to chronotropic agents (epinephrine, dopamine) or transcutaneous pacing.",
      "<span class=\"hl hl--warn\">Push IV atropine rapidly</span> - slow injection or doses &lt;0.1 mg can paradoxically increase vagal tone and worsen bradycardia.",
      "In organophosphate/nerve agent poisoning, <span class=\"hl hl--danger\">there is no maximum dose</span> - titrate to drying of tracheobronchial secretions. Severe OP poisoning may require tens to hundreds of milligrams over days.",
      "Atropine <strong>only blocks muscarinic effects</strong> of OP poisoning - nicotinic effects (skeletal muscle weakness, fasciculations, respiratory muscle paralysis) require pralidoxime and/or ventilatory support.",
      "<span class=\"hl hl--warn\">Atropine may have little or no effect</span> in beta-blocker or calcium channel blocker overdose - likely more helpful in mild poisonings. Hypotension may not respond even if bradycardia corrects.",
      'Classic atropine toxicity mnemonic: "Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter" - watch for these signs when giving large doses.'
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
    adverseEffects: [
      'Hypokalemia',
      'Hyponatremia / electrolyte depletion',
      'Hypotension / orthostatic hypotension',
      'Dehydration / hypovolemia',
      'Ototoxicity (especially with rapid IV push or renal impairment)',
      'Hyperglycemia',
      'Metabolic alkalosis',
      'Dizziness / headache',
      'Muscle cramps'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">NASEMSO discourages routine prehospital diuretics</span> - pulmonary edema is more commonly a problem of volume <em>redistribution</em> than total body fluid overload. Vasodilators (nitroglycerin, CPAP) are preferred first-line prehospital therapies.",
      "<span class=\"hl hl--warn\">Potent drug - 40x furosemide</span>. A 1 mg dose of bumetanide produces diuresis equivalent to 40 mg of furosemide. Small dosing errors cause large clinical effects.",
      "<span class=\"hl hl--warn\">Assess volume status before administration</span> - inappropriate diuresis in patients misdiagnosed with CHF (e.g., pneumonia, sepsis, COPD exacerbation) can cause profound hypotension and increased mortality.",
      "Rapid IV push increases risk of <span class=\"hl hl--warn\">ototoxicity</span> - administer over 1-2 minutes. Risk is highest with concurrent aminoglycoside use or renal impairment.",
      "<span class=\"hl hl--warn\">Monitor potassium</span> - loop diuretics cause significant potassium wasting. Hypokalemia increases the risk of dysrhythmias, especially in patients on digoxin.",
      "Cross-sensitivity with <span class=\"hl hl--warn\">sulfonamide allergy</span> is historically cited but likely overstated - true cross-reactivity is rare. Use clinical judgment in the emergent setting."
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
    adverseEffects: [
      'Hypotension (with rapid administration)',
      'Bradycardia',
      'Tissue necrosis / extravasation injury',
      'Flushing / warmth',
      'Nausea / vomiting',
      'Cardiac arrest (with rapid IV push)',
      'Hypercalcemia (with repeated doses)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Severe tissue necrosis with extravasation</span> - administer through a large-bore, patent IV, preferably central. If peripheral IV is used, confirm patency first. Calcium gluconate is less caustic and preferred when central access is unavailable.",
      "<span class=\"hl hl--danger\">CaCl provides 3x more elemental calcium than calcium gluconate</span> (272 mg/g vs 93 mg/g) - do NOT substitute 1:1. When converting from gluconate, use roughly 1/3 the dose of CaCl.",
      "<span class=\"hl hl--warn\">Rapid IV push can cause bradycardia, hypotension, and cardiac arrest</span> - administer over 5 minutes in non-arrest patients. Only push faster (over 2 min) in cardiac arrest.",
      "The historical concern about giving calcium to patients on <span class=\"hl hl--warn\">digoxin</span> is addressed by NASEMSO: \"felt to be a historical belief and not supported.\" Do not withhold calcium in life-threatening hyperkalemia or CCB overdose due to concurrent digoxin use.",
      "CaCl <strong>does not lower serum potassium</strong> - it only stabilizes the cardiac membrane. Always pair with potassium-lowering treatments (sodium bicarbonate, nebulized albuterol, insulin/dextrose in hospital).",
      "For <span class=\"hl hl--beta\">hydrofluoric acid burns</span>, calcium gluconate (topical gel + IV) is the preferred calcium salt per NASEMSO protocols. CaCl IV may be used for systemic hypocalcemia if gluconate is unavailable."
    ]
  },
  {
    id: 'dobutamine',
    summary: 'A synthetic catecholamine used as the primary inotrope for cardiogenic shock. Increases cardiac contractility and output without the vasoconstriction of dopamine or norepinephrine.',
    genericName: 'Dobutamine',
    tradeNames: ['Dobutrex'],
    category: ['Cardiovascular'],
    classes: ['Sympathomimetic', 'Catecholamine', 'Beta-1 Agonist', 'Inotrope', 'Chronotrope'],
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
    adverseEffects: [
      'Tachycardia (dose-dependent)',
      'Dysrhythmias (PVCs, ventricular tachycardia)',
      'Hypotension (paradoxical - from β-2 vasodilation at higher doses)',
      'Hypertension',
      'Angina / increased myocardial oxygen demand',
      'Headache',
      'Nausea',
      'Phlebitis at injection site'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Correct hypovolemia FIRST</span> - dobutamine in a volume-depleted patient will cause profound hypotension. Ensure adequate preload before initiating.",
      "<span class=\"hl hl--warn\">Increases myocardial oxygen demand</span> - use cautiously in patients with acute MI or known coronary disease. The increase in contractility and heart rate raises oxygen consumption, which may extend infarct size.",
      "<span class=\"hl hl--warn\">Paradoxical hypotension</span> can occur at higher doses due to β-2 vasodilation outpacing the increase in cardiac output. If BP drops, reduce dose and consider adding a vasopressor (norepinephrine).",
      "<span class=\"hl hl--danger\">Contraindicated in HOCM/IHSS</span> - increased contractility worsens dynamic left ventricular outflow tract obstruction and can cause cardiovascular collapse.",
      "Not in the NASEMSO formulary - primarily a <strong>critical care transport</strong> and advanced paramedic drug. Some EMS systems carry it; many do not.",
      "Dobutamine has a <strong>2-minute half-life</strong> - effects wear off rapidly when the infusion is stopped. This is both a safety feature (easy to titrate) and a limitation (must maintain continuous infusion).",
      "In septic shock, dobutamine is recommended as an <strong>adjunct</strong> to norepinephrine when cardiac output remains inadequate despite adequate fluid resuscitation and vasopressor support - it is not a first-line vasopressor."
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
    adverseEffects: [
      'Hyperglycemia (most relevant to single-dose prehospital use)',
      'GI upset / epigastric burning',
      'Insomnia / agitation',
      'Transient immunosuppression',
      'Flushing',
      'Mood changes / euphoria'
    ],
    precautions: [
      "<span class=\"hl hl--warn\">Onset is 1-2 hours</span> - dexamethasone does NOT provide immediate relief. Bronchodilators (albuterol) and nebulized epinephrine (for croup) are the acute treatments; steroids prevent the delayed inflammatory wave.",
      "<span class=\"hl hl--beta\">Single dose = multi-day course</span> - NASEMSO states a single dose of dexamethasone is equally effective as several days of other steroids. This is its key advantage over prednisone/prednisolone and the reason it is the preferred prehospital steroid.",
      "<span class=\"hl hl--warn\">Check blood glucose</span> in diabetic patients - even a single dose can cause clinically significant hyperglycemia.",
      "For <span class=\"hl hl--warn\">adrenal crisis</span>, hydrocortisone succinate is preferred over dexamethasone because of its dual glucocorticoid + mineralocorticoid effects. Use dexamethasone only if hydrocortisone is unavailable.",
      "In altitude illness, dexamethasone treats symptoms but <strong>does not facilitate acclimatization</strong> - patients must still descend. Descent is always the definitive therapy.",
      '~25x more potent than hydrocortisone and ~6x more potent than methylprednisolone - dose accordingly when converting between steroids.'
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
    adverseEffects: [
      'Overshoot hyperglycemia',
      'Phlebitis / vein sclerosis (especially D50)',
      'Tissue necrosis with extravasation (especially D50)',
      'Cerebral edema (rapid hyperosmolar shifts, rare)',
      'Warmth / pain at injection site'
    ],
    precautions: [
      "<span class=\"hl hl--beta\">D10 is preferred over D50</span> - NASEMSO states D10 is as effective and safer than higher concentrations. D50 is hyperosmolar (2,525 mOsm/L) and causes severe phlebitis and tissue necrosis with extravasation.",
      "<span class=\"hl hl--warn\">Administer in incremental doses</span> - give small aliquots and reassess mental status between doses. Do not push the entire volume at once. The goal is euglycemia (>60 mg/dL with improved mentation), not a specific number.",
      "<span class=\"hl hl--warn\">Avoid overshoot hyperglycemia</span> - excessive dextrose worsens neurologic outcomes in stroke and post-cardiac arrest patients. Titrate to clinical effect.",
      "Consider <span class=\"hl hl--warn\">thiamine</span> in malnourished or alcoholic patients - chronic thiamine deficiency means glucose loading can precipitate Wernicke encephalopathy. If both are available, give thiamine first or concurrently. If only dextrose is available, give it - do NOT withhold.",
      "<span class=\"hl hl--danger\">Never use D50 or D25 in neonates</span> - use D10 only. Higher concentrations cause dangerous osmolar shifts and severe vein/tissue injury in neonatal vasculature.",
      'If IV access cannot be established, glucagon IM/IN is the alternative for hypoglycemia - dextrose requires vascular access.'
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
    adverseEffects: ['Headache', 'Dizziness', 'Constipation / diarrhea', 'Nausea', 'Injection site reaction (IV)'],
    precautions: [
      "<span class=\"hl hl--warn\">Adjunct only - not a first-line treatment</span> for anaphylaxis or allergic reactions. Epinephrine is first-line for anaphylaxis; diphenhydramine (H1 blocker) is first-line for urticaria. Famotidine supplements H1 blockade by covering H2-mediated histamine effects.",
      'NASEMSO lists famotidine as a supplement to diphenhydramine for urticaria - "any H2-blocking antihistamine can be given IV or PO in conjunction with diphenhydramine."',
      "<span class=\"hl hl--beta\">Preferred over cimetidine</span> in the prehospital setting - cimetidine causes hypotension with rapid IV infusion and has numerous drug interactions. Famotidine has a cleaner side effect profile.",
      "Reduce dose in <span class=\"hl hl--warn\">renal impairment</span> - famotidine is primarily renally excreted. Half the dose or double the interval in patients with known severe renal disease.",
      "Antihistamines (H1 and H2) treat only the cutaneous and GI manifestations of allergic reactions - they have <strong>no role in treating the respiratory or cardiovascular collapse</strong> of anaphylaxis."
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
    adverseEffects: [
      'Respiratory depression (dose-dependent, most dangerous)',
      'Chest wall rigidity (especially with rapid IV push or high doses)',
      'Nausea / vomiting',
      'Sedation / altered mental status',
      'Hypotension (less common than with morphine)',
      'Bradycardia',
      'Pruritus',
      'Miosis',
      'Urinary retention'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression</span> is the primary life-threatening adverse effect - have naloxone immediately available and monitor SpO₂ and EtCO₂ continuously. Risk increases with concurrent CNS depressants (benzodiazepines, alcohol).",
      "<span class=\"hl hl--danger\">Chest wall rigidity</span> (\"wooden chest\") can occur with rapid IV push or high doses - makes bag-valve-mask ventilation impossible. Treat with naloxone or neuromuscular blockade (succinylcholine/rocuronium). NASEMSO notes this is especially common in fentanyl/analog overdose.",
      "<span class=\"hl hl--warn\">Use caution in head injury</span> - opioids can raise intracranial pressure and mask neurologic findings. However, untreated pain also raises ICP; do not withhold analgesia, but use the lowest effective dose and monitor closely.",
      "<span class=\"hl hl--warn\">Use caution in hypotension</span> - though fentanyl causes less hemodynamic compromise than morphine (no histamine release), it can still cause bradycardia and mild hypotension via vagal stimulation.",
      "<span class=\"hl hl--beta\">~100x more potent than morphine</span> by weight - 100 mcg fentanyl ≈ 10 mg morphine. Decimal point errors are potentially fatal. Always dose in <strong>micrograms</strong>, never milligrams.",
      "IN route is <strong>preferred for pediatric initial dosing</strong> per NASEMSO - provides rapid analgesia (~60 seconds) without the pain and stress of IV placement in children already in distress.",
      'Record pain scores before and after administration per NASEMSO - documentation of analgesic response is a key quality metric.'
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
    adverseEffects: [
      'Seizures (most dangerous - especially in benzo-dependent patients or TCA co-ingestion)',
      'Agitation / anxiety / panic',
      'Nausea / vomiting',
      'Resedation (as flumazenil wears off before the benzo)',
      'Dizziness / headache',
      'Withdrawal syndrome (in chronic benzo users)',
      'Ventricular arrhythmias (rare, associated with TCA co-ingestion)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">NASEMSO warns against flumazenil in suspected benzodiazepine overdose</span> - \"Flumazenil is not indicated in a suspected benzodiazepine overdose as it can precipitate refractory/intractable seizures if the patient is a benzodiazepine dependent patient.\"",
      "<span class=\"hl hl--danger\">Seizure risk is the primary concern</span> - flumazenil can precipitate refractory seizures in patients who are benzo-dependent, have co-ingested TCA/pro-convulsants, or rely on benzos for seizure control. These seizures may be resistant to benzodiazepine treatment.",
      "The <strong>ideal use case</strong> is reversal of iatrogenic oversedation in a known benzo-naïve patient (e.g., procedural sedation with midazolam where the dose was excessive).",
      "<span class=\"hl hl--warn\">Resedation is common</span> - flumazenil has a half-life of ~50 min, shorter than most benzodiazepines. Monitor for at least 2 hours after administration. Repeat dosing or infusion may be needed.",
      "Does <strong>NOT reverse</strong> sedation from barbiturates, ethanol, opioids, or general anesthetics - only blocks the benzodiazepine binding site on GABA-A receptors.",
      "<span class=\"hl hl--warn\">Use the minimum effective dose</span> - partial reversal is safer than complete reversal. Rapid, complete reversal increases the risk of agitation, anxiety, and withdrawal.",
      'Not in the NASEMSO formulary - some EMS systems carry it for reversal of iatrogenic oversedation; most do not stock it for field overdose management.'
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
    adverseEffects: [
      'Hypokalemia',
      'Hyponatremia / electrolyte depletion',
      'Hypotension / orthostatic hypotension',
      'Dehydration / hypovolemia',
      'Ototoxicity (especially with rapid IV push, high doses, or renal impairment)',
      'Hyperglycemia',
      'Hyperuricemia / gout exacerbation',
      'Metabolic alkalosis',
      'Dizziness / headache',
      'Muscle cramps'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">NASEMSO discourages routine prehospital diuretics</span> - \"Pulmonary edema is more commonly a problem of volume redistribution than total body fluid overload, so administration of diuretics such as furosemide provide no immediate benefit for most patients and can cause significant harm.\"",
      "<span class=\"hl hl--warn\">Assess volume status before administration</span> - inappropriate diuresis in patients misdiagnosed with CHF (e.g., pneumonia, sepsis, COPD exacerbation) can cause profound hypotension and increased mortality.",
      "Vasodilators (nitroglycerin, CPAP/BiPAP) are the <strong>preferred first-line prehospital treatments</strong> for acute pulmonary edema per NASEMSO. Furosemide may be considered as an adjunct, not a replacement.",
      "Rapid IV push increases risk of <span class=\"hl hl--warn\">ototoxicity</span> - administer no faster than 20 mg/min. Risk is highest with concurrent aminoglycoside use or renal impairment.",
      "<span class=\"hl hl--warn\">Monitor potassium</span> - loop diuretics cause significant potassium wasting. Hypokalemia increases the risk of dysrhythmias, especially in patients on digoxin.",
      "IV furosemide is <strong>twice as potent</strong> as PO furosemide - when converting from a home PO dose, the IV equivalent is half the oral dose.",
      "Cross-sensitivity with <span class=\"hl hl--warn\">sulfonamide allergy</span> is historically cited but likely overstated - true cross-reactivity is rare. Use clinical judgment in the emergent setting."
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
    adverseEffects: [
      'Nausea / vomiting (extremely common, especially at high doses)',
      'Hyperglycemia (transient)',
      'Tachycardia',
      'Hypertension (transient)',
      'Dizziness / headache',
      'Rebound hypoglycemia (as glycogen stores deplete)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Nausea and vomiting are extremely common</span> - NASEMSO specifically warns about this. Position patient to protect airway. Consider ondansetron prophylaxis when using high-dose glucagon for BB/CCB overdose.",
      "<span class=\"hl hl--warn\">Requires hepatic glycogen stores</span> - glucagon will be ineffective in patients with depleted glycogen (chronic alcoholism, prolonged starvation, adrenal insufficiency, severe liver disease). Dextrose IV is the definitive treatment.",
      "For hypoglycemia, glucagon is a <strong>bridge when IV access is unavailable</strong> - it is NOT a substitute for IV dextrose. Once access is established, switch to dextrose.",
      "In BB/CCB overdose, glucagon <strong>bypasses the blocked β-receptor</strong> by directly activating adenylyl cyclase → ↑ cAMP → positive inotropy/chronotropy. This is why it works when epinephrine and dopamine fail.",
      "<span class=\"hl hl--warn\">Rebound hypoglycemia</span> can occur after glucagon wears off as glycogen stores are depleted. Feed the patient carbohydrates once they can safely swallow, and monitor BGL.",
      'Must be reconstituted before use - mix powder with provided diluent. Use immediately after reconstitution.'
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
    adverseEffects: [
      'QT prolongation → Torsades de pointes (especially IV)',
      'Acute dystonia (torticollis, oculogyric crisis, trismus)',
      'Akathisia (restlessness - can be mistaken for worsening agitation)',
      'Hypotension',
      'Sedation / drowsiness',
      'Neuroleptic malignant syndrome (rare but life-threatening)',
      'Lowered seizure threshold',
      'Laryngospasm (rare)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">FDA black box warning for IV use</span> - risk of sudden death, torsades de pointes, and prolonged QT interval with off-label IV administration. Continuous cardiac monitoring is required if administering IV.",
      "<span class=\"hl hl--danger\">Do NOT combine with promethazine</span> - NASEMSO warns that both prolong QT. If an antiemetic is needed, use ondansetron (less seizure and QT risk).",
      "<span class=\"hl hl--warn\">Monitor for acute dystonia</span> - treat with diphenhydramine 25-50 mg IV/IM if dystonic reactions occur (torticollis, jaw clenching, eye deviation). This is an EPS effect, not an allergic reaction.",
      "<span class=\"hl hl--warn\">Akathisia can mimic worsening agitation</span> - if a patient becomes more restless after haloperidol, consider akathisia before giving additional doses. Treat with benzodiazepines or diphenhydramine, not more haloperidol.",
      "NASEMSO notes haloperidol has <strong>limited data available and optimal dose not established</strong> for prehospital use - droperidol and ketamine are often preferred alternatives for high-violence-risk patients.",
      "<span class=\"hl hl--warn\">Neuroleptic malignant syndrome (NMS)</span> is a rare but life-threatening reaction - fever, muscle rigidity, altered mental status, autonomic instability. Stop haloperidol immediately and provide aggressive cooling and supportive care.",
      "Haloperidol has a <strong>lower seizure threshold</strong> - use with caution in patients with seizure history. NASEMSO lists poorly controlled seizure disorder as a contraindication."
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
    adverseEffects: [
      'Hypotension (most common acute concern - 16-20% of patients)',
      'Bradycardia',
      'AV block (first-degree; rarely higher-degree)',
      'Dizziness / lightheadedness',
      'Flushing',
      'Nausea / headache',
      'Heart failure exacerbation (negative inotrope)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">NEVER give in WPW or pre-excited atrial fibrillation</span> - NASEMSO warns that blocking the AV node in pre-excitation can force all impulses down the accessory pathway, causing ventricular fibrillation and death. Look for short PR, delta wave, wide-complex irregular rhythm.",
      "<span class=\"hl hl--danger\">Do NOT combine with IV beta-blockers</span> - NASEMSO contraindication. Combined AV nodal blockade risks profound bradycardia, heart block, and asystole. Oral beta-blocker use is a relative caution, not an absolute CI.",
      "<span class=\"hl hl--warn\">Hypotension is common</span> - occurs in 16-20% of patients. Have a fluid bolus ready. Consider calcium pretreatment (calcium chloride 500 mg-1 g or calcium gluconate 1-2 g IV) before diltiazem to mitigate hypotension.",
      "<span class=\"hl hl--warn\">Confirm the rhythm is supraventricular before administration</span> - if there is any doubt whether a wide-complex tachycardia is VT vs. SVT with aberrancy, treat as VT. Diltiazem in VT can cause cardiovascular collapse.",
      "NASEMSO notes that patients with <span class=\"hl hl--warn\">CHF may not tolerate diltiazem</span> - negative inotropy can worsen heart failure. Amiodarone or procainamide are alternatives for rate control in CHF patients.",
      "Adenosine is the <strong>first-line agent for stable SVT</strong> per NASEMSO/ACLS. Diltiazem is used when adenosine fails, for rate control of AF/AFlutter, or when a longer-acting agent is needed.",
      'Not recommended for pediatric prehospital use - adenosine is the preferred agent for pediatric SVT per NASEMSO. NASEMSO specifically notes verapamil should not be routinely used in infants; same caution applies to diltiazem.'
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
    adverseEffects: [
      'Respiratory depression (dose-dependent, potentiated by opioids/alcohol)',
      'Hypotension (especially with rapid IV push)',
      'Sedation / drowsiness',
      'Paradoxical agitation (especially in elderly and pediatrics)',
      'Injection site pain / phlebitis (IV - contains propylene glycol)',
      'Ataxia / dizziness',
      'Amnesia'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression</span> is the primary risk - have bag-valve-mask and flumazenil available. Risk multiplies with concurrent opioids, alcohol, or other CNS depressants.",
      "<span class=\"hl hl--warn\">IM absorption is erratic and painful</span> - diazepam is lipophilic and precipitates in muscle tissue. NASEMSO and evidence favor <strong>midazolam IM/IN as first-line</strong> when IV access is not available for both seizures and agitation.",
      "<span class=\"hl hl--warn\">Slow IV push only</span> - administer no faster than 5 mg/min. Rapid IV push causes respiratory depression, hypotension, and apnea. The propylene glycol vehicle is irritating to veins.",
      "The rectal route (Diastat) is diazepam's <strong>unique niche</strong> - it provides reliable absorption when IV/IM/IN are all unavailable. This is most commonly used in pediatric seizures by caregivers with prescribed Diastat.",
      "<span class=\"hl hl--warn\">Very long half-life</span> (20-100 hrs including active metabolites) - the clinical sedation wears off in 30-90 min, but the drug and metabolites persist for days. This complicates repeated dosing and increases cumulative CNS depression risk.",
      "Paradoxical agitation can occur, particularly in <span class=\"hl hl--warn\">elderly and pediatric</span> patients - if agitation worsens after diazepam, consider paradoxical reaction before redosing.",
      "<span class=\"hl hl--warn\">Do NOT mix with other drugs in IV line</span> - diazepam is incompatible with most IV solutions and precipitates easily. Flush the line before and after administration."
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
    adverseEffects: [
      'Absorption atelectasis (high FiO₂ washes out alveolar nitrogen → alveolar collapse)',
      'Hyperoxic vasoconstriction (coronary and cerebral - worsens post-cardiac arrest neurologic outcomes)',
      'CO₂ retention in COPD patients (blunts hypoxic ventilatory drive)',
      'Oxygen toxicity / free radical damage (prolonged high FiO₂)',
      'Retinopathy of prematurity (neonates)',
      'Drying of mucous membranes (with high-flow delivery)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Oxygen is a drug - titrate, do not blast</span>. NASEMSO states oxygen has \"undesirable effects from both too much and too little supplementation.\" The target for most patients is SpO₂ 94-98%, not 100%.",
      "<span class=\"hl hl--warn\">Post-ROSC hyperoxia worsens outcomes</span> - after return of spontaneous circulation, titrate O₂ DOWN to 94-98%. Continuing 100% FiO₂ into post-resuscitation care causes cerebral vasoconstriction and free radical injury.",
      "<span class=\"hl hl--warn\">COPD patients may tolerate permissive hypoxia</span> - NASEMSO notes SpO₂ ≥90% may be adequate. High-flow O₂ can blunt hypoxic ventilatory drive and worsen CO₂ retention. Use lowest FiO₂ needed to maintain target SpO₂.",
      "<span class=\"hl hl--danger\">Pulse oximetry is UNRELIABLE in CO poisoning</span> - standard pulse ox cannot distinguish COHb from OxyHb and reads falsely normal. Maintain 100% FiO₂ based on clinical suspicion, not SpO₂ reading.",
      "In neonatal resuscitation, <span class=\"hl hl--warn\">start with room air (21%)</span> for term/late preterm infants and escalate only as needed - excessive oxygen contributes to retinopathy of prematurity and oxidative injury.",
      "Select the <strong>delivery method that addresses both oxygenation AND ventilation</strong> - NASEMSO emphasizes choosing devices that mitigate or treat hypercarbia (e.g., CPAP/BiPAP) rather than just increasing FiO₂."
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
    adverseEffects: [
      'Aspiration (if given to patient with impaired consciousness or no gag reflex)',
      'Nausea / vomiting',
      'Overshoot hyperglycemia (minimal risk with oral route compared to IV dextrose)',
      'Choking hazard (tablets in young children - use gel instead)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Patient MUST be conscious with a patent airway and intact gag reflex</span> - oral glucose in a patient who cannot protect their airway risks aspiration. If the patient is unconscious or cannot swallow, use IV dextrose or IM/IN glucagon instead.",
      "Oral glucose is the <strong>first-line treatment for conscious hypoglycemic patients</strong> per NASEMSO - it requires no IV access and can be administered at the BLS level.",
      "<span class=\"hl hl--warn\">Slower onset than IV dextrose</span> (~10-20 min vs 1-5 min) - if rapid correction is needed or the patient is deteriorating, establish IV access and give dextrose.",
      "After successful treatment, <strong>have the patient eat a carbohydrate meal</strong> - oral glucose is rapidly metabolized and hypoglycemia will recur without sustained caloric intake.",
      "Consider the <span class=\"hl hl--warn\">cause of hypoglycemia</span> - patients on long-acting sulfonylureas (glipizide, glyburide) or who have taken an intentional overdose of hypoglycemic agents are at high risk for recurrent hypoglycemia and should be transported regardless of response to treatment.",
      "Buccal glucose gel absorption is <strong>unreliable</strong> - most of the glucose effect comes from swallowing, not buccal absorption. Do not rely on gel smeared in the cheek of a patient who cannot swallow."
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
    adverseEffects: [
      'QT prolongation (dose-dependent)',
      'Headache (most common)',
      'Constipation',
      'Dizziness',
      'Injection site reaction (IV)',
      'Serotonin syndrome (rare - with concurrent serotonergic drugs)'
    ],
    precautions: [
      "<span class=\"hl hl--warn\">Dose-dependent QT prolongation</span> - NASEMSO recommends EKG monitoring in patients with electrolyte abnormalities, CHF, bradyarrhythmias, or those receiving other QT-prolonging medications. Contraindicated in congenital long QT syndrome.",
      "<span class=\"hl hl--beta\">No extrapyramidal side effects</span> - ondansetron has no dopamine receptor activity, making it far safer than metoclopramide and prochlorperazine which carry dystonia and akathisia risk. This is a key advantage, especially in pediatrics.",
      "<span class=\"hl hl--warn\">First trimester pregnancy</span> - NASEMSO recommends metoclopramide 5-10 mg IV with diphenhydramine 25 mg IV over ondansetron in the first trimester due to insufficient safety data. Counsel patients regarding available data.",
      "Administer IV dose <strong>slowly over 2-5 minutes</strong> - rapid IV push increases QT prolongation risk.",
      "The IV formulation <strong>may be given PO</strong> at the same dose - useful when IV access is not established but oral route is tolerated.",
      "Nausea and vomiting are <strong>symptoms, not a diagnosis</strong> - NASEMSO emphasizes that a thorough history and physical are key to identifying emergent underlying causes (bowel obstruction, MI, pregnancy, increased ICP)."
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
    adverseEffects: [
      'Fluid overload / pulmonary edema (with excessive administration)',
      'Hyperchloremic metabolic acidosis (large volumes - Cl⁻ content is 154 mEq/L, supraphysiologic)',
      'Peripheral edema',
      'Dilutional coagulopathy (large-volume resuscitation)',
      'Hypothermia (if fluids are not warmed)',
      'Hypernatremia (prolonged high-volume infusion)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Excessive crystalloid is harmful in hemorrhagic shock</span> - NASEMSO states crystalloid has \"little to no value and may in fact be harmful\" in hemorrhagic shock. Whole blood or balanced blood products are preferred when available. Crystalloid dilutes clotting factors and worsens coagulopathy.",
      "<span class=\"hl hl--warn\">Reassess after every bolus</span> - fluid resuscitation is a titrated therapy, not a standing order. Stop boluses when MAP ≥65 mmHg (adult) or perfusion targets are met (peds). Do not blindly run 30 mL/kg without reassessing.",
      "<span class=\"hl hl--warn\">Caution in pulmonary edema</span> - most acute pulmonary edema is volume redistribution, not true volume overload. NASEMSO recommends vasodilators (nitroglycerin, CPAP) as first-line. Small (250-500 mL) boluses only for hypotensive CHF patients.",
      "For <span class=\"hl hl--warn\">crush injury</span>, use normal saline specifically - NASEMSO warns to avoid lactated Ringer's because it contains potassium, which compounds the hyperkalemia released when the crushed limb is freed.",
      "<span class=\"hl hl--warn\">Large-volume NS causes hyperchloremic metabolic acidosis</span> - NS contains 154 mEq/L chloride (plasma is ~100 mEq/L). In massive resuscitation (>3-4 L), lactated Ringer's or other balanced crystalloids may be preferable to reduce acidosis.",
      "Warm fluids when possible - room temperature or cold fluids contribute to <strong>hypothermia</strong>, which worsens coagulopathy, acidosis, and cardiac irritability (the \"lethal triad\" of trauma).",
      'Only ~25% of infused NS remains intravascular after 1 hour - the rest distributes to the interstitial space. This is why crystalloid is a temporizing measure, not a definitive treatment for hemorrhagic shock.'
    ]
  },
  {
    id: 'norepinephrine',
    summary: 'The preferred first-line vasopressor for septic and neurogenic shock. Increases SVR and blood pressure with modest beta-1 inotropy, with lower arrhythmia risk and mortality than dopamine in septic shock.',
    genericName: 'Norepinephrine',
    tradeNames: ['Levophed'],
    category: ['Cardiovascular', 'Resuscitation'],
    classes: ['Sympathomimetic', 'Catecholamine', 'Vasopressor', 'Alpha-1 Agonist', 'Beta-1 Agonist'],
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
    adverseEffects: [
      'Severe tissue necrosis with extravasation (vesicant)',
      'Hypertension (with excessive dose)',
      'Reflex bradycardia',
      'Dysrhythmias',
      'Peripheral ischemia (digits, extremities)',
      'Organ ischemia (renal, mesenteric - with prolonged high-dose use)',
      'Headache / anxiety'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Vesicant - severe tissue necrosis with extravasation</span>. Administer through a large-bore, patent IV, preferably central. If extravasation occurs, infiltrate area with phentolamine 5-10 mg in 10-15 mL NS as soon as possible.",
      "<span class=\"hl hl--danger\">Correct hypovolemia FIRST</span> - norepinephrine in a volume-depleted patient vasoconstricts an empty tank. NASEMSO reserves vasopressors for \"shock unresponsive to IV fluids.\" Always resuscitate with crystalloid/blood products before starting pressors.",
      "<span class=\"hl hl--beta\">Preferred over dopamine</span> for septic and neurogenic shock per NASEMSO - dopamine causes more arrhythmias and higher mortality in both cardiogenic and septic shock.",
      "<span class=\"hl hl--warn\">Can cause reflex bradycardia</span> - NASEMSO specifically cautions about this. The intense α-1 vasoconstriction triggers baroreceptor-mediated vagal response. If clinically significant, atropine may be needed.",
      "Do NOT run in the same IV line as <span class=\"hl hl--warn\">alkaline solutions (sodium bicarbonate)</span> - NASEMSO warns these deactivate norepinephrine.",
      "Monitor <strong>distal perfusion</strong> closely - prolonged high-dose norepinephrine can cause digital and extremity ischemia. Check pulses, cap refill, and skin color in fingers and toes.",
      'Half-life is ~2.5 minutes - effects wear off rapidly when the infusion stops. This makes it easy to titrate but means any interruption in the drip causes immediate hemodynamic deterioration.'
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
    adverseEffects: [
      'Dizziness / lightheadedness (most common)',
      'Nausea / vomiting',
      'Euphoria / dysphoria',
      'Diffusion hypoxia (on discontinuation - N₂O rapidly exits alveoli and dilutes O₂)',
      'Paresthesias / tingling',
      'Headache',
      'Expansion of trapped gas (pneumothorax, bowel obstruction, air embolism)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">N₂O expands trapped gas</span> - it is 34x more soluble in blood than nitrogen and rapidly diffuses into air-filled spaces, expanding them. NASEMSO contraindications include pneumothorax, bowel obstruction, and air embolism. This can convert a simple pneumothorax into a tension pneumothorax.",
      "<span class=\"hl hl--danger\">Do NOT combine with opioids or benzodiazepines</span> - risk of excessive sedation and airway compromise. If a patient has received IV opioids, wait 30-45 minutes before initiating N₂O.",
      "<span class=\"hl hl--warn\">Diffusion hypoxia</span> on discontinuation - when N₂O is stopped, it rapidly floods out of blood into alveoli, displacing oxygen. Administer 100% O₂ for 3-5 minutes after discontinuation to prevent transient hypoxia.",
      "Self-administration via demand valve is the <strong>built-in safety mechanism</strong> - if the patient becomes too sedated, they drop the mask, lose the seal, and stop receiving the drug. Never strap the mask to the patient or administer via free-flow.",
      "<span class=\"hl hl--warn\">Crew exposure</span> - ensure adequate ventilation in the ambulance compartment. Chronic occupational exposure to N₂O can cause vitamin B12 inactivation leading to megaloblastic anemia and subacute combined degeneration of the spinal cord.",
      "NASEMSO notes that the effect of nitrous oxide <strong>ceases as soon as inhalation stops, with no residual effect</strong> - this rapid on/off profile makes it ideal for prehospital use with short scene times.",
      "Analgesic potency is comparable to <strong>morphine 10 mg IM</strong> - a meaningful level of pain relief without IV access or the risks of systemic opioids."
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
    adverseEffects: [
      'Hypotension (most common clinically significant effect)',
      'Headache (very common - vasodilation of meningeal vessels)',
      'Reflex tachycardia',
      'Dizziness / lightheadedness',
      'Flushing / warmth',
      'Nausea',
      'Paradoxical bradycardia (Bezold-Jarisch reflex, especially with inferior MI)',
      'Syncope'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Ask about PDE-5 inhibitors BEFORE every dose</span> - sildenafil (Viagra) within 24 hrs, tadalafil (Cialis) or vardenafil (Levitra) within 48 hrs. Combination causes profound, refractory hypotension that may not respond to fluids or vasopressors.",
      "<span class=\"hl hl--danger\">Right ventricular infarction is a critical contraindication</span> - RV infarct patients are preload-dependent. NTG drops preload and causes cardiovascular collapse. Suspect RV infarct in inferior STEMI (leads II, III, aVF) with hypotension, JVD, and clear lungs. Obtain right-sided ECG (V4R) if available.",
      "<span class=\"hl hl--warn\">Check BP before EVERY dose</span> - do not redose if SBP has fallen below 100 mmHg. NTG-induced hypotension is usually responsive to IV fluids and Trendelenburg positioning.",
      "In acute pulmonary edema, NTG is <strong>first-line pharmacotherapy</strong> per NASEMSO - it reduces preload and afterload, unloading the failing ventricle. NASEMSO states nitrates may decrease intubation rates, MIs, and mortality.",
      "<span class=\"hl hl--warn\">High-dose NTG (0.8 mg SL or IV drip)</span> for severe hypertensive pulmonary edema - at higher doses, NTG transitions from pure venodilator to mixed venodilator/arteriolar dilator, reducing both preload AND afterload and potentially increasing cardiac output.",
      'Headache is extremely common and is NOT an allergy - it is a predictable pharmacologic effect of meningeal vasodilation. Treat with acetaminophen if needed.',
      'NTG degrades in heat, light, and plastic - tablets must be stored in original glass bottle. Check expiration. If patient reports their prescribed NTG "doesn\'t work anymore," it may be expired or improperly stored.'
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
    adverseEffects: [
      'Hypotension (with excessive titration)',
      'Reflex tachycardia',
      'Headache (vasodilation of meningeal vessels)',
      'Nausea / vomiting',
      'Flushing',
      'Peripheral edema (with prolonged use)',
      'Injection site phlebitis'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Continuous infusion only - no bolus dosing</span>. Nicardipine accumulates over time and reaches steady state at 24-48 hrs. After stopping, BP rises slowly (50% offset in ~30 min), but drug effects persist for hours due to the 14-hr terminal half-life.",
      "<span class=\"hl hl--warn\">Titrate slowly, monitor continuously</span> - target a 10-15% SBP reduction initially. Precipitous drops in BP can worsen stroke, cause myocardial ischemia, or precipitate acute kidney injury. Continuous arterial or automated BP monitoring is essential.",
      "<span class=\"hl hl--beta\">Key advantage over non-DHP CCBs</span> - nicardipine has high vascular selectivity with NO negative inotropy, NO bradycardia, and NO AV conduction effects. This makes it far safer than diltiazem or verapamil for BP reduction in patients with heart failure or conduction disease.",
      "Nicardipine <strong>crosses the blood-brain barrier</strong> and directly relaxes cerebrovascular smooth muscle → increases cerebral blood flow. This makes it particularly useful in hypertensive emergencies complicated by acute ischemic stroke.",
      "<span class=\"hl hl--warn\">Reflex tachycardia</span> is common - if heart rate control is also needed, consider adding a short-acting beta-blocker (esmolol) rather than switching to a non-DHP CCB.",
      "Primarily a <strong>critical care transport and ED drug</strong> - not standard on most ground BLS/ALS units. Most commonly encountered in interfacility transports of patients on established nicardipine drips.",
      "<span class=\"hl hl--warn\">Incompatible with sodium bicarbonate and lactated Ringer's</span> - use NS or D5W for dilution. Change infusion site every 12 hours to minimize phlebitis."
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
    adverseEffects: [
      'Acute opioid withdrawal (agitation, tachycardia, hypertension, diaphoresis, nausea/vomiting)',
      'Combativeness / violence upon awakening',
      'Pulmonary edema (rare but reported, even with small doses)',
      'Seizures (in neonates with intrauterine opioid exposure)',
      'Pain (unmasking of underlying pain condition)',
      'Tachycardia / hypertension',
      'Renarcotization (naloxone wears off before the opioid)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Goal is to restore VENTILATION, not full consciousness</span> - titrate to adequate respiratory rate and effort. Over-reversal precipitates acute withdrawal with combativeness, vomiting (aspiration risk), and pulmonary edema. An obtunded but breathing patient does not need more naloxone.",
      "<span class=\"hl hl--danger\">BVM ventilation is the PRIMARY treatment</span> - NASEMSO emphasizes that the essential management is ventilation FOLLOWED BY naloxone. Do not delay oxygenation/ventilation while searching for or administering naloxone.",
      "<span class=\"hl hl--warn\">Renarcotization risk</span> - naloxone duration (30-90 min) is shorter than most opioids (especially methadone, extended-release formulations, fentanyl patches). Patients MUST be monitored for recurrent respiratory depression. All opioid overdose patients should be transported.",
      "<span class=\"hl hl--warn\">Fentanyl/analogs may require higher or repeated doses</span> - NASEMSO notes patients with fentanyl overdose may exhibit chest wall rigidity requiring PEEP, and may need multiple/larger naloxone doses. Carfentanil is 10,000x more potent than morphine.",
      "<span class=\"hl hl--warn\">Neonatal caution</span> - NASEMSO warns that neonates of opioid-dependent mothers who receive naloxone may be narcotic dependent and should be monitored closely for seizures.",
      "The IN route eliminates <strong>needle-stick risk</strong> - a significant safety advantage when treating IV drug users with potential blood-borne infections. NASEMSO specifically notes this benefit.",
      "If no response after 10 mg total naloxone, <strong>reconsider the diagnosis</strong> - the patient may not have an opioid overdose, or may have a mixed ingestion with non-opioid CNS depressants (benzodiazepines, alcohol, GHB) that naloxone will not reverse."
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
    adverseEffects: [
      'Respiratory depression (dose-dependent - the primary lethal risk)',
      'Hypotension (histamine release → vasodilation + venous pooling)',
      'Nausea / vomiting',
      'Sedation / drowsiness',
      'Pruritus (histamine-mediated)',
      'Urinary retention',
      'Constipation / decreased GI motility',
      'Miosis (pinpoint pupils)',
      'Bronchospasm (histamine release - risk in asthmatics)',
      'Chest wall rigidity (rare, more common with fentanyl)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression is the primary lethal risk</span> - monitor RR, SpO₂, and EtCO₂ continuously. Have BVM and naloxone immediately available. Risk is greatly increased with concurrent benzodiazepines, alcohol, or other CNS depressants.",
      "<span class=\"hl hl--warn\">Histamine release distinguishes morphine from fentanyl</span> - morphine causes more hypotension, flushing, pruritus, and bronchospasm than fentanyl. Avoid in hypotensive patients or those with active bronchospasm; fentanyl is preferred in these situations.",
      "<span class=\"hl hl--warn\">Administer IV slowly</span> (over 1-2 min) - rapid IV push causes exaggerated histamine release, hypotension, and increases nausea/vomiting risk.",
      "NASEMSO notes that <span class=\"hl hl--warn\">opiates may cause a rise in intracranial pressure</span> - use with extreme caution in head injury. Fentanyl has less effect on ICP and is preferred in TBI patients.",
      "<span class=\"hl hl--warn\">Patients with acute abdominal pain SHOULD receive analgesia</span> - NASEMSO explicitly states that use of analgesics for acute abdominal pain does not mask clinical findings or delay diagnosis. Withholding pain medication is not justified.",
      "Fentanyl has largely replaced morphine as the <strong>first-line prehospital opioid</strong> due to faster onset, no histamine release, less hypotension, and availability of the IN route. Morphine remains useful when longer-duration analgesia is desired or fentanyl is unavailable.",
      "<span class=\"hl hl--warn\">Avoid in renal failure</span> - morphine-6-glucuronide (active metabolite) accumulates in renal impairment, causing prolonged and unpredictable respiratory depression. Fentanyl is safer in renal patients."
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
    adverseEffects: [
      'Respiratory depression / apnea (dose-dependent - the primary lethal risk)',
      'Hypotension',
      'Sedation / drowsiness',
      'Paradoxical agitation (especially in elderly and pediatrics)',
      'Amnesia (anterograde - useful for procedural sedation, but can complicate assessment)',
      'Dizziness',
      'Nausea / vomiting',
      'Hiccups',
      'Injection site pain (IV)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression and apnea</span> are the primary risks - NASEMSO warns that midazolam may cause respiratory depression, arrest, or apnea. Have BVM and flumazenil immediately available. Risk greatly increases with concurrent opioids, alcohol, or other CNS depressants.",
      "<span class=\"hl hl--beta\">Midazolam IM is the preferred prehospital anticonvulsant when IV is not established</span> - NASEMSO states \"recent evidence supports the use of midazolam IM as an intervention that is at least as safe and effective as intravenous lorazepam for prehospital seizure cessation.\" Do NOT delay seizure treatment to start an IV.",
      "<span class=\"hl hl--beta\">Water-soluble formulation = reliable IM and IN absorption</span> - this is midazolam's key advantage over diazepam (which is lipophilic and precipitates in muscle tissue with erratic IM absorption). This makes midazolam the prehospital benzodiazepine of choice.",
      "<span class=\"hl hl--warn\">Reduce dose by 50% in elderly (≥69 yrs)</span> - NASEMSO specifically recommends this for toxicologic sedation dosing. Elderly patients are more sensitive to benzodiazepine effects due to decreased hepatic metabolism and increased CNS sensitivity.",
      "<span class=\"hl hl--warn\">Use 5 mg/mL concentration for IN and IM routes</span> - NASEMSO notes this specifically. The more dilute 1 mg/mL IV concentration delivers too large a volume for reliable intranasal absorption (max ~1 mL per nostril).",
      "For IN administration, <strong>divide the dose between both nares</strong> - the nasal mucosa has limited absorptive surface area. Delivering the entire volume into one nostril causes runoff into the pharynx and reduced bioavailability.",
      'Short half-life (1.5-2.5 hrs) compared to diazepam (20-100 hrs) - less risk of prolonged sedation, but may need to redose if seizures recur or agitation returns.'
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
    adverseEffects: [
      'Bradycardia (dose-dependent)',
      'Hypotension',
      'AV block (first-, second-, or third-degree - NASEMSO warning)',
      'Bronchospasm (β-2 blockade at higher doses, especially in asthmatics)',
      'Worsening CHF / acute pulmonary edema',
      'Fatigue / dizziness',
      'Nausea',
      'Masking of hypoglycemic symptoms (tachycardia) in diabetics'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">NASEMSO restricts use to SBP >120 mmHg</span> - metoprolol reduces heart rate, contractility, and blood pressure. In borderline-hypotensive patients, it can precipitate cardiovascular collapse.",
      "<span class=\"hl hl--warn\">NASEMSO warns: worsening CHF, COPD, asthma, hypotension, and bradycardia can all occur</span> with metoprolol. Assess for these before every dose. Amiodarone or procainamide are alternatives for patients with CHF who cannot tolerate diltiazem or metoprolol.",
      "<span class=\"hl hl--danger\">Do NOT give in cocaine-induced chest pain / MI</span> - beta-blockade removes the β-2 vasodilatory counterbalance to cocaine's α-1 vasoconstriction → unopposed alpha stimulation → coronary vasospasm and hypertensive crisis. Use benzodiazepines and nitroglycerin instead.",
      "<span class=\"hl hl--warn\">Avoid in WPW / pre-excited AFib</span> - NASEMSO warns that AV nodal blocking agents (including beta-blockers) in pre-excitation can force conduction down the accessory pathway → ventricular fibrillation.",
      "β-1 selectivity is <strong>dose-dependent and lost at higher doses</strong> - at cumulative doses approaching 15 mg IV, metoprolol begins to block β-2 receptors causing bronchospasm in susceptible patients (asthmatics, COPD).",
      "Not recommended for <strong>pediatric prehospital use</strong> - adenosine is the preferred agent for pediatric SVT per NASEMSO.",
      "<span class=\"hl hl--warn\">May mask hypoglycemia</span> - beta-blockers blunt tachycardia, a key warning sign of low blood glucose. Diabetic patients on beta-blockers may not recognize hypoglycemic episodes."
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
    adverseEffects: [
      'Hyperglycemia (common - significant in diabetics)',
      'Immunosuppression (single prehospital dose is clinically insignificant)',
      'GI irritation / peptic ulcer exacerbation',
      'Hypertension (mineralocorticoid effect minimal with methylprednisolone)',
      'Mood changes / agitation / insomnia',
      'Fluid retention',
      'Adrenal suppression (with prolonged use - not a concern with single prehospital dose)'
    ],
    precautions: [
      "<span class=\"hl hl--warn\">Steroids take 4-6 hours to work</span> - they modify gene transcription and protein synthesis, not immediate receptor effects. The prehospital dose benefits the ED and inpatient course, not the ambulance ride. Always give fast-acting bronchodilators (albuterol, ipratropium, epinephrine) concurrently.",
      "NASEMSO reserves <strong>IV/IM methylprednisolone for critically ill patients</strong> - for non-critical bronchospasm, dexamethasone PO (0.6 mg/kg, max 16 mg) is preferred because a single dose has been found equally effective as several days of other steroids.",
      "For <span class=\"hl hl--warn\">adrenal insufficiency, hydrocortisone is preferred</span> over methylprednisolone per NASEMSO - hydrocortisone has both glucocorticoid AND mineralocorticoid effects, which are both deficient in adrenal crisis. Methylprednisolone has minimal mineralocorticoid activity.",
      "<span class=\"hl hl--warn\">High doses contraindicated in TBI</span> - the CRASH trial showed increased mortality with high-dose methylprednisolone in traumatic brain injury. NASEMSO lists this as a contraindication.",
      "<span class=\"hl hl--warn\">No proven benefit in anaphylaxis</span> - NASEMSO explicitly states there is no proven benefit to using steroids in the management of allergic reactions and/or anaphylaxis. The traditional practice of giving steroids for anaphylaxis is not evidence-based.",
      "Monitor blood glucose - steroids cause <strong>hyperglycemia</strong> that can be significant in diabetic patients. A single prehospital dose will elevate glucose for 12-24 hours.",
      'Equivalent steroid doses: methylprednisolone 125 mg ≈ dexamethasone 25 mg ≈ hydrocortisone 500 mg ≈ prednisone 150 mg. Methylprednisolone is ~5x more potent than hydrocortisone.'
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
    adverseEffects: [
      'Seizures (normeperidine accumulation - the hallmark toxicity)',
      'Serotonin syndrome (especially with MAOIs - can be fatal)',
      'Respiratory depression',
      'Hypotension / orthostatic hypotension',
      'Nausea / vomiting',
      'Tachycardia (unlike most opioids - due to atropine-like/DAT/NET activity)',
      'Delirium / hallucinations (especially in elderly)',
      'Myoclonus / tremors (early signs of normeperidine toxicity)',
      'Diaphoresis'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">ABSOLUTELY CONTRAINDICATED with MAOIs</span> - the combination causes fatal serotonin syndrome (hyperthermia, rigidity, seizures, cardiovascular collapse). This is one of the most dangerous drug interactions in medicine. Must ensure no MAOI use within 14 days.",
      "<span class=\"hl hl--danger\">Normeperidine is neurotoxic</span> - meperidine is metabolized to normeperidine, which has a half-life of 14-48 hrs (vs 3-8 hrs for the parent drug). Normeperidine causes myoclonus, tremors, and seizures that are NOT reversed by naloxone (normeperidine is not an opioid agonist). Risk is highest with repeated doses, renal impairment, and elderly patients.",
      "<span class=\"hl hl--danger\">Removed from WHO essential medicines list (2003)</span> - meperidine is no longer considered safer than other opioids. Its risk of addiction, biliary spasm, and renal colic are equal to other opioids, and it carries unique neurotoxic and serotonergic risks.",
      "<span class=\"hl hl--warn\">Avoid in elderly</span> - AGS Beers Criteria lists meperidine as a drug to avoid in older adults due to ineffective analgesia at commonly used oral doses and higher risk of neurotoxicity/delirium compared to other opioids.",
      "The anti-shivering effect is meperidine's <strong>one remaining clinical niche</strong> - it lowers the shivering threshold more potently than any other opioid via κ-opioid receptor stimulation. Used at low doses (25 mg IV) for post-intubation shivering, therapeutic hypothermia protocols, and transfusion-related rigors.",
      "For prehospital <strong>pain management, use fentanyl or morphine instead</strong> - they are safer, more effective, and lack the normeperidine/serotonin toxicity risks. Meperidine offers no analgesic advantage over other opioids.",
      "<span class=\"hl hl--warn\">Naloxone does NOT reverse normeperidine seizures</span> - normeperidine-induced seizures require benzodiazepines. Naloxone only reverses μ-opioid effects (respiratory depression, sedation). This is a critical distinction."
    ]
  },
  {
    id: 'magnesium-sulfate',
    summary: 'An electrolyte used for torsades de pointes, severe refractory bronchospasm, and eclamptic seizures. The definitive anticonvulsant in pregnancy.',
    genericName: 'Magnesium Sulfate',
    tradeNames: [],
    category: ['Cardiovascular', 'Airway & Respiratory', 'OB/GYN'],
    classes: ['Electrolyte', 'Class V Antiarrhythmic', 'Anticonvulsant', 'Bronchodilator', 'Tocolytic'],
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
    adverseEffects: [
      'Hypotension (rapid infusion → vasodilation)',
      'Flushing / warmth (vasodilation)',
      'Bradycardia',
      'Respiratory depression (at high serum levels - loss of deep tendon reflexes is an early warning)',
      'Nausea / vomiting',
      'Muscle weakness / flaccidity',
      'Cardiac arrest (at very high serum levels >12 mEq/L)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Monitor deep tendon reflexes (DTRs)</span> - loss of DTRs (especially patellar reflex) is the earliest clinical sign of magnesium toxicity and precedes respiratory depression and cardiac arrest. NASEMSO specifically recommends assessing DTRs after magnesium therapy.",
      "<span class=\"hl hl--warn\">Infuse at the correct rate for each indication</span> - pulseless torsades: fast push over 1-2 min. Bronchospasm: slow over 10-15 min. Eclampsia prophylaxis: slow over 20-30 min. Rapid infusion causes hypotension, flushing, and bradycardia.",
      "<span class=\"hl hl--danger\">Calcium is the antidote for magnesium toxicity</span> - if respiratory depression or cardiac effects occur, administer calcium chloride 500 mg-1 g IV or calcium gluconate 1-2 g IV.",
      "For eclampsia, magnesium is the <strong>first-line anticonvulsant</strong> - superior to benzodiazepines and phenytoin for eclamptic seizures per NASEMSO. Benzodiazepines are only for seizures not responding to magnesium.",
      "For bronchospasm, magnesium is a <strong>last-resort adjunct</strong> - NASEMSO reserves it for impending respiratory failure after albuterol, ipratropium, steroids, and epinephrine have been tried.",
      "<span class=\"hl hl--warn\">Caution in renal failure</span> - magnesium is renally excreted. In renal impairment, magnesium accumulates rapidly and can reach toxic levels with standard doses.",
      "NASEMSO states routine magnesium for <strong>VF/pulseless VT is NOT recommended</strong> - only indicated for refractory polymorphic VT or confirmed torsades de pointes."
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
    adverseEffects: [
      'Sedation / drowsiness (most common - first-generation antihistamine crosses BBB)',
      'Dry mouth / urinary retention / blurred vision (anticholinergic effects)',
      'Tachycardia (anticholinergic)',
      'Dizziness',
      'Thickening of bronchial secretions',
      'Paradoxical excitation (especially in children)',
      'Hypotension (with rapid IV push)'
    ],
    precautions: [
      "<span class=\"hl hl--warn\">Diphenhydramine treats symptoms, not anaphylaxis</span> - it relieves urticaria and pruritus but does NOT reverse bronchospasm, laryngeal edema, or hypotension. Epinephrine IM is always the first-line treatment for anaphylaxis. Never delay epinephrine to give diphenhydramine.",
      "NASEMSO recommends <strong>supplementing with an H2 blocker</strong> (famotidine or cimetidine) alongside diphenhydramine for urticaria - combined H1 + H2 blockade provides more complete histamine antagonism than either alone.",
      "First-generation antihistamine = <strong>significant CNS sedation</strong> - crosses the blood-brain barrier freely. This sedation can be useful (agitated allergic patient) or harmful (masks neurologic assessment, impairs airway reflexes).",
      "<span class=\"hl hl--warn\">Anticholinergic effects</span> - dry mouth, urinary retention, blurred vision, tachycardia. Use caution in elderly patients (delirium risk), prostatic hypertrophy, and narrow-angle glaucoma.",
      "For <strong>acute dystonia from antipsychotics</strong> (torticollis, oculogyric crisis, trismus after haloperidol/droperidol), diphenhydramine 25-50 mg IV/IM provides rapid relief. This is an anticholinergic effect, not an antihistamine effect - restoring dopamine-acetylcholine balance in the basal ganglia.",
      "Controversial in acute asthma - the <strong>anticholinergic drying effect</strong> may thicken bronchial secretions. NASEMSO lists lower respiratory tract disease as a relative concern. Ipratropium (selective muscarinic antagonist) is preferred for bronchospasm."
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
    adverseEffects: [
      'Dry mouth (most common - anticholinergic)',
      'Cough / throat irritation',
      'Headache',
      'Blurred vision (if sprayed in eyes - mydriasis)',
      'Urinary retention (anticholinergic - rare with inhaled route)',
      'Tachycardia (mild - less than atropine due to poor systemic absorption)',
      'Paradoxical bronchospasm (rare)'
    ],
    precautions: [
      "Ipratropium is an <strong>adjunct to albuterol, not a replacement</strong> - it has slower onset (15-30 min vs 5 min) and weaker bronchodilation than albuterol alone. Always give albuterol first; ipratropium adds to the effect.",
      "<span class=\"hl hl--warn\">Do NOT give to children with bronchiolitis</span> - NASEMSO explicitly prohibits ipratropium and other anticholinergics in pediatric bronchiolitis. Bronchiolitis is viral inflammation, not bronchospasm.",
      "NASEMSO limits to <strong>3 doses</strong> - unlike albuterol (unlimited frequency), ipratropium has diminishing returns beyond 3 nebulized treatments.",
      'Minimal systemic absorption from inhaled route - anticholinergic side effects (urinary retention, tachycardia, dry mouth) are much less pronounced than with systemic atropine. This makes it safer than atropine for bronchodilation.',
      "<span class=\"hl hl--warn\">Protect eyes during nebulization</span> - ipratropium mist contacting the eyes causes mydriasis and blurred vision. Use a mouthpiece rather than face mask when possible, especially in patients with glaucoma.",
      "Nebulizer droplets can carry <strong>viral particles and airborne pathogens</strong> - NASEMSO recommends additional PPE and placing a surgical mask over the nebulizer if feasible to limit droplet spread."
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
    adverseEffects: [
      'CNS toxicity: perioral numbness → tinnitus → visual disturbance → tremors → seizures → coma (dose-dependent progression)',
      'Cardiovascular depression (at toxic levels - bradycardia, hypotension, asystole)',
      'Drowsiness / confusion',
      'Slurred speech',
      'Nausea / vomiting',
      'Respiratory depression (at very high doses)'
    ],
    precautions: [
      "<span class=\"hl hl--warn\">CNS toxicity follows a predictable progression</span> - perioral numbness and tinnitus are early warning signs. If these appear, stop the infusion immediately. Progression to seizures and cardiovascular collapse can occur rapidly.",
      "<span class=\"hl hl--warn\">NASEMSO: no evidence supports routine post-ROSC lidocaine</span> - there is inadequate evidence to support routine use of lidocaine or beta-blockers after cardiac arrest. Do not automatically start a maintenance drip after ROSC without clear indication.",
      "Lidocaine <strong>does NOT prolong QT</strong> - unlike amiodarone and procainamide (Class Ia/III), lidocaine (Class Ib) shortens the action potential duration. This makes it safer in patients with already prolonged QT but less effective for atrial dysrhythmias.",
      "<span class=\"hl hl--danger\">Contraindicated in WPW</span> - NASEMSO lists Wolff-Parkinson-White as a contraindication. Lidocaine can paradoxically accelerate conduction through accessory pathways.",
      "Class Ib selectivity for <strong>ischemic tissue</strong> - lidocaine preferentially binds sodium channels in depolarized (ischemic) myocardium, which is why it suppresses ventricular ectopy in acute MI without significantly affecting normal conduction. This is called \"use-dependence.\"",
      "For IO pain: use <strong>preservative-free</strong> lidocaine when available. The 0.5 mg/kg dose (max 40 mg) slow-pushed through the IO needle significantly reduces the burning pain of IO infusion in conscious patients.",
      "Reduce dose in <span class=\"hl hl--warn\">liver failure and CHF</span> - lidocaine is hepatically metabolized. Decreased hepatic blood flow (CHF, shock) dramatically increases serum levels and toxicity risk. Reduce maintenance infusion to 1-2 mg/min in these patients."
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
    adverseEffects: [
      'Respiratory depression / apnea (dose-dependent)',
      'Hypotension',
      'Prolonged sedation (6-8 hr duration - longer than midazolam)',
      'Paradoxical agitation (especially in elderly and pediatrics)',
      'Amnesia (anterograde)',
      'Dizziness / ataxia',
      'Injection site pain (contains propylene glycol)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Respiratory depression and apnea</span> - same risk as all benzodiazepines. Have BVM and flumazenil available. Risk multiplies with concurrent opioids, alcohol, or other CNS depressants.",
      "<span class=\"hl hl--warn\">Requires refrigeration</span> - lorazepam degrades at room temperature, losing potency. This is a significant logistical disadvantage for EMS compared to midazolam (which is stable at room temperature). Many services have switched to midazolam for this reason.",
      "NASEMSO evidence supports <strong>midazolam IM as equivalent to IV lorazepam</strong> for prehospital seizures - since midazolam does not require IV access and is stable at room temperature, it has become the preferred prehospital benzodiazepine.",
      "<span class=\"hl hl--warn\">Longer duration (6-8 hrs)</span> is a double-edged sword - sustained seizure suppression is beneficial, but prolonged sedation complicates neurologic assessment and can mask deterioration. Midazolam's shorter duration (30-60 min) allows more frequent reassessment.",
      "Contains <strong>propylene glycol</strong> as a solvent - can cause injection site pain and, with large/repeated doses, propylene glycol toxicity (metabolic acidosis, renal dysfunction). Administer slowly.",
      "<span class=\"hl hl--warn\">IM absorption is intermediate</span> - better than diazepam (which precipitates in muscle) but less reliable than midazolam (which is water-soluble). If IM is the only available route, midazolam is preferred."
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
    adverseEffects: [
      'Tachycardia (theoretically less than racemic albuterol, but clinical difference is debatable)',
      'Tremor',
      'Nervousness / anxiety',
      'Headache',
      'Hypokalemia',
      'Palpitations',
      'Paradoxical bronchospasm (rare)',
      'Hyperglycemia'
    ],
    precautions: [
      "<span class=\"hl hl--warn\">Clinical superiority over albuterol is NOT firmly established</span> - RCTs with adequate sample sizes generally show no significant differences in efficacy, adverse effects, or hospitalization rates between levalbuterol and racemic albuterol. The benefit may be greatest in severe asthma with albuterol overuse.",
      "Dose equivalence: <strong>1.25 mg levalbuterol ≈ 2.5 mg racemic albuterol</strong> - this is because racemic albuterol is a 50:50 mix of R and S enantiomers, so 2.5 mg racemic delivers ~1.25 mg of the active R-enantiomer.",
      "May be preferred in patients with <span class=\"hl hl--warn\">cardiac comorbidities</span> (arrhythmias, decompensated CHF, valvular disease) where minimizing β-1 stimulation and tachycardia is important - though clinical evidence for this advantage is limited.",
      "<span class=\"hl hl--warn\">Significantly more expensive</span> than generic racemic albuterol for nebulization - cost differential is the primary reason most EMS systems continue to use racemic albuterol as the standard formulary agent.",
      'Same contraindications and precautions as racemic albuterol - β-2 agonists can cause tachycardia, hypokalemia, and hyperglycemia. Monitor heart rate and rhythm in patients with cardiac disease.',
      "S-albuterol (the removed enantiomer) persists in circulation <strong>12x longer</strong> than R-albuterol after racemic dosing - this prolonged exposure to the theoretically pro-inflammatory S-enantiomer is the pharmacologic rationale for levalbuterol, though clinical significance remains debated."
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
    adverseEffects: [
      'Fluid overload / pulmonary edema (with excessive administration)',
      'Hyperkalemia (in patients with renal failure or crush injury - 4 mEq/L K⁺ content)',
      'Peripheral edema',
      'Dilutional coagulopathy (large-volume resuscitation)',
      'Hypothermia (if fluids are not warmed)',
      'Lactic acidosis (theoretical - in severe liver failure where lactate cannot be metabolized to bicarbonate)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">AVOID in crush injury</span> - NASEMSO specifically states: \"Avoid lactated Ringer's solution as it contains potassium.\" Crushed muscle releases massive amounts of intracellular potassium; adding more potassium via LR compounds the hyperkalemia → cardiac arrest risk. Use NS for crush injury.",
      "<span class=\"hl hl--beta\">Less hyperchloremic acidosis than NS</span> - LR contains 109 mEq/L Cl⁻ (closer to plasma at ~100) vs NS at 154 mEq/L. In massive resuscitation (>3-4 L), this translates to less iatrogenic acidosis and potentially better renal outcomes. This is LR's primary advantage.",
      "<span class=\"hl hl--warn\">Contains calcium</span> - do not infuse citrated blood products (packed RBCs, FFP) through the same IV line as LR. The calcium can bind citrate anticoagulant and cause micro-clotting. Use a separate line or NS for blood products.",
      "The lactate in LR is <strong>NOT lactic acid</strong> - it is sodium lactate, which the liver converts to bicarbonate (an alkalizing buffer). LR does not cause or worsen lactic acidosis in patients with normal hepatic function. However, it can confound point-of-care lactate measurements.",
      "NASEMSO treats LR and NS as <strong>interchangeable</strong> for most indications - anaphylaxis, shock, trauma, head injury, poisoning. The choice between them is often based on local protocol and availability.",
      'Same volume kinetics as NS - only ~25% remains intravascular after 1 hour. Both are temporizing measures for hemorrhagic shock; blood products are preferred when available.'
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
    adverseEffects: [
      'Hypotension (most common acute concern)',
      'Bradycardia',
      'Dizziness / lightheadedness',
      'Nausea',
      'Bronchospasm (non-selective β-blockade)',
      'Heart block (first-degree; rarely higher)',
      'Fatigue',
      'Scalp tingling (common, benign)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Non-selective β-blocker - contraindicated in asthma</span>. Unlike metoprolol (β-1 selective), labetalol blocks β-2 receptors and WILL cause bronchospasm in asthmatics. This is a critical distinction between the two beta-blockers in the EMS drug box.",
      "<span class=\"hl hl--warn\">Ensure HR >60 BPM before each dose</span> - NASEMSO specifically requires this check. The β-blockade component can cause significant bradycardia, especially with repeat dosing.",
      "<span class=\"hl hl--warn\">Goal is 140/90, NOT normotensive</span> - in pre-eclampsia, aggressive BP lowering below 140/90 compromises uteroplacental perfusion and causes fetal distress. Reduce MAP by 20-25% initially, then reassess.",
      "<span class=\"hl hl--danger\">Patients on beta-blockers may be resistant to epinephrine</span> - NASEMSO warns that patients taking beta-blockers who experience anaphylaxis may not respond to epinephrine, or epinephrine may cause unopposed α-stimulation (hypertension). Consider glucagon as an alternative in beta-blocker-resistant anaphylaxis.",
      "The α-1 blockade prevents <strong>reflex tachycardia</strong> - this is labetalol's key advantage over pure vasodilators (hydralazine, nifedipine) which cause compensatory tachycardia that increases myocardial oxygen demand.",
      "Do NOT confuse with metoprolol - both are beta-blockers in the EMS drug box, but labetalol is <strong>non-selective β + α-1 blocker</strong> (contraindicated in asthma) while metoprolol is <strong>β-1 selective</strong> (relatively safer in mild COPD). Different drugs, different indications, different contraindications.",
      "<span class=\"hl hl--warn\">Use with caution alongside calcium channel blockers</span> - NASEMSO warns about concurrent use. Combined negative inotropic and chronotropic effects risk profound bradycardia, heart block, and heart failure."
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
    adverseEffects: [
      'GI bleeding / peptic ulcer (COX-1 inhibition reduces protective gastric prostaglandins)',
      'Renal impairment / acute kidney injury (prostaglandins maintain renal blood flow in hypovolemia)',
      'Platelet dysfunction / increased bleeding time (COX-1 inhibits thromboxane A₂)',
      'Nausea / dyspepsia',
      'Headache / dizziness',
      'Injection site pain (IM)',
      'Hypertension (prostaglandin-mediated sodium/water retention)'
    ],
    precautions: [
      "<span class=\"hl hl--danger\">Bleeding risk</span> - ketorolac inhibits platelet aggregation via COX-1/thromboxane pathway. Contraindicated in patients with coagulopathy, active bleeding, concurrent anticoagulants, or intracranial hemorrhage. Do not give in trauma with suspected internal hemorrhage.",
      "<span class=\"hl hl--danger\">Renal toxicity</span> - prostaglandins maintain renal blood flow during hypovolemia and shock. Ketorolac in dehydrated, hypotensive, or elderly patients can precipitate acute kidney injury. Ensure adequate hydration before administration.",
      "<span class=\"hl hl--warn\">Reduce dose in elderly (≥65 yrs) and patients <50 kg</span> - use 15 mg IV or 30 mg IM. Elderly patients have decreased renal clearance and increased GI bleeding risk.",
      "Ketorolac is an excellent <strong>opioid-sparing analgesic</strong> - provides analgesia comparable to moderate-dose morphine for many pain types (renal colic, musculoskeletal, dental) without respiratory depression, sedation, nausea, or abuse potential.",
      "<span class=\"hl hl--warn\">Limit total duration to ≤5 days</span> (all routes combined) - FDA black box warning. Prolonged NSAID use dramatically increases GI bleeding and renal toxicity risk. The prehospital single dose is well within this limit.",
      "Particularly effective for <strong>renal colic</strong> - prostaglandin inhibition reduces ureteral smooth muscle spasm and inflammation. Often provides superior relief to opioids for kidney stones with fewer side effects.",
      "<span class=\"hl hl--warn\">Cross-reactivity with aspirin allergy</span> - patients with aspirin-induced asthma (Samter triad: aspirin sensitivity, nasal polyps, asthma) must NOT receive ketorolac or any NSAID. Can trigger severe bronchospasm."
    ]
  },
  {
    id: 'ketamine',
    summary: 'A dissociative anesthetic that preserves airway reflexes, spontaneous respirations, and hemodynamic stability. Used at full dissociative doses for severe agitation and at subdissociative doses for pain management.',
    genericName: 'Ketamine',
    tradeNames: ['Ketalar'],
    category: ['Neurological', 'Pain Management', 'Sedation & Anesthesia'],
    classes: ['Dissociative Anesthetic', 'Analgesic', 'Sedative', 'Bronchodilator', 'Sympathomimetic'],
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
      'Emergence reactions (vivid dreams, hallucinations, dysphoria, agitation - 10-30% of adults)',
      'Nausea / vomiting',
      'Hypertension (sympathomimetic - releases endogenous catecholamines)',
      'Tachycardia',
      'Hypersalivation (can compromise airway if not managed)',
      'Laryngospasm (rare but most serious airway complication - more common in pediatrics)',
      'Nystagmus',
      'Transient increase in ICP (controversial - may not be clinically significant)'
    ],
    precautions: [
      "<span class=\"hl hl--beta\">Preserves airway reflexes and spontaneous respirations</span> - this is ketamine's defining advantage over other sedatives. However, this is dose-dependent and NOT absolute. At high doses or with rapid IV push, apnea can occur. Always have BVM and suction ready.",
      "<span class=\"hl hl--warn\">Emergence reactions</span> occur in 10-30% of adults (less common in children) - vivid hallucinations, dysphoria, agitation upon waking. Risk factors: female sex, age >16, large doses, rapid IV administration. Pre-treatment with midazolam 0.05 mg/kg IV may reduce but does not eliminate emergence phenomena.",
      "<span class=\"hl hl--warn\">Hypersalivation</span> - ketamine stimulates salivary secretions which can compromise the airway. Position patient on their side (recovery position). Some protocols recommend atropine 0.01 mg/kg or glycopyrrolate pretreatment.",
      "<span class=\"hl hl--danger\">Sympathomimetic effects</span> - ketamine releases endogenous catecholamines → hypertension and tachycardia. NASEMSO lists hypertension, angina, and stroke as relative contraindications. Use with extreme caution in patients with aortic dissection, intracranial hemorrhage, or severe uncontrolled hypertension.",
      "ICP concerns are <strong>controversial</strong> - traditional teaching warned against ketamine in head injury. NASEMSO lists this as relative/controversial. Recent evidence suggests ketamine does not significantly raise ICP when ventilation is maintained, and it may be the safest induction agent in hypotensive TBI patients due to hemodynamic stability.",
      "For subdissociative pain dosing, administer IV <strong>slowly over 1-2 minutes</strong> - rapid IV push at even low doses can cause brief dissociation and dysphoria that alarms patients. Slow push produces analgesia with minimal psychoactive effects.",
      "<span class=\"hl hl--warn\">Laryngospasm</span> is the most serious airway complication (rare, ~0.3%) - more common in children, with pharyngeal stimulation, and at dissociative doses. Treat with positive pressure ventilation (BVM); if refractory, succinylcholine 0.5-1 mg/kg IV."
    ]
  }
];
