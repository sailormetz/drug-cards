const DRUGS = [
  {
     id: "epinephrine",
     summary: "The first-line drug for anaphylaxis and cardiac arrest. A sympathomimetic that reverses bronchoconstriction, vasodilation, and cardiovascular collapse.",
     genericName: "Epinephrine",
     tradeNames: ["Adrenalin", "EpiPen"],
     category: ["Resuscitation", "Cardiovascular", "Airway & Respiratory"],
     classes: ["Sympathomimetic", "Catecholamine", "Vasopressor"],
     source: "NASEMSO 2022 v3.0",
     moa: [
       {
         brief: 'Causes widespread vasoconstriction and a rapid rise in systemic vascular resistance. This is what restores blood pressure in anaphylaxis.',
         target: { name: "α-1 receptors", action: "agonist", result: "Vasoconstriction, ↑ SVR", system: "adrenergic" }
       },
       {
         brief: 'Increases heart rate and myocardial contractility. In cardiac arrest, this raises coronary perfusion pressure between compressions and improves the likelihood of successful defibrillation.',
         target: { name: "β-1 receptors", action: "agonist", result: "↑ HR & contractility", system: "adrenergic" }
       },
       {
         brief: 'Relaxes bronchial smooth muscle, reversing bronchoconstriction. In anaphylaxis, this works faster and more reliably than any inhaled bronchodilator.',
         target: { name: "β-2 receptors", action: "agonist", result: "Bronchodilation", system: "adrenergic" }
       }
     ],
     indications: [
       { name: "Anaphylaxis" },
       { name: "Cardiac Arrest" },
       { name: "Shock" },
       { name: "Croup / Bronchospasm" },
       { name: "Severe Allergic Reaction", sameDoseAs: "Anaphylaxis" }
     ],
     contraindications: [
       { text: "Hypersensitivity" },
       { text: "Coronary insufficiency", relative: true },
       { text: "Uncontrolled hypertension", relative: true }
     ],
     doses: [
       {
         population: "Adult",
         indication: "Anaphylaxis",
         formulation: "1 mg/mL (1:1,000)",
         onset: "3-5 min",
         duration: "5-15 min",
         routes: [
           {
             via: ["IM"],
             amount: "0.3 mg",
             repeat: "q5-15 min PRN",
             notes: ["Anterolateral thigh"]
           }
         ],
         notes: []
       },
       {
         population: "Adult",
         indication: "Cardiac Arrest",
         formulation: "0.1 mg/mL (1:10,000)",
         onset: "Immediate",
         duration: "5-10 min",
         routes: [
           {
             via: ["IV", "IO"],
             amount: "1 mg",
             repeat: "q3-5 min",
             notes: ["Rapid push + flush"]
           }
         ],
         notes: ["Prioritize early administration for non-shockable rhythms"]
       },
       {
         population: "Adult",
         indication: "Shock",
         formulation: "0.1 mg/mL (1:10,000)",
         onset: "Immediate",
         duration: "Duration of infusion",
         routes: [
           {
             via: ["IV drip"],
             amount: "0.05-0.3 mcg/kg/min",
             notes: ["Titrate to MAP ≥65 mmHg"]
           }
         ],
         notes: []
       },
       {
         population: "Pediatric",
         qualifier: "<25 kg",
         indication: "Anaphylaxis",
         formulation: "1 mg/mL (1:1,000)",
         onset: "3-5 min",
         duration: "5-15 min",
         routes: [
           {
             via: ["IM"],
             amount: "0.15 mg",
             repeat: "q5-15 min PRN",
             notes: ["Anterolateral thigh"]
           }
         ],
         notes: []
       },
       {
         population: "Pediatric",
         indication: "Cardiac Arrest",
         formulation: "0.1 mg/mL (1:10,000)",
         onset: "Immediate",
         duration: "5-10 min",
         routes: [
           {
             via: ["IV", "IO"],
             amount: "0.01 mg/kg",
             maxDose: "1 mg/dose",
             repeat: "q3-5 min",
             notes: []
           }
         ],
         notes: []
       },
       {
         population: "Pediatric",
         indication: "Shock",
         formulation: "0.1 mg/mL (1:10,000)",
         onset: "Immediate",
         duration: "Duration of infusion",
         routes: [
           {
             via: ["IV drip"],
             amount: "0.05-0.3 mcg/kg/min",
             notes: ["Titrate to physiologic targets"]
           }
         ],
         notes: []
       },
       {
         population: "Adult",
         indication: "Croup / Bronchospasm",
         formulation: "1 mg/mL (1:1,000)",
         onset: "1-5 min",
         duration: "1-2 hrs",
         routes: [
           {
             via: ["NEB"],
             amount: "5 mg (5 mL)",
             repeat: "May repeat in 20 min",
             notes: []
           }
         ],
         notes: []
       }
       // NOTE: Nebulized epi dose is the same for all ages (5 mg).
       // A Pediatric entry with the same numbers could be added for completeness
       // so the tab doesn't appear to be missing peds data. Alternatively, use
       // population: "All Ages" if a fifth population value is added later.
     ],
     adverseEffects: [
       "Tachycardia",
       "Hypertension",
       "Dysrhythmias",
       "Anxiety / Tremor",
       "Pallor / Headache",
       "Angina"
     ],
     precautions: [
       'Use caution in <span class="hl hl--warn">elderly</span>, known <span class="hl hl--warn">cardiac disease</span>, <span class="hl hl--warn">hypertension</span>, and <span class="hl hl--warn">diabetes</span>.',
       'May precipitate angina or MI in susceptible patients.',
       '<span class="hl hl--danger">No contraindications in anaphylaxis or cardiac arrest</span> - benefits always outweigh risks.',
       'IM is the correct route for anaphylaxis - IV push epinephrine in a patient with a pulse risks fatal arrhythmia.'
     ]
  },
  {
    id: "propranolol",
    summary: "A non-selective beta-blocker that slows heart rate, reduces contractility, and lowers blood pressure. IV form used for acute SVT and tachyarrhythmias.",
    genericName: "Propranolol",
    tradeNames: ["Inderal", "Inderal LA", "InnoPran XL", "Hemangeol"],
    category: ["Cardiovascular"],
    classes: ["Class II Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Slows heart rate, reduces contractility, and decreases conduction velocity through the SA and AV nodes. Reduces myocardial oxygen demand.',
        target: { name: "β-1 receptors", action: "antagonist", result: "↓ HR, ↓ contractility, ↓ AV conduction", system: "adrenergic" }
      },
      {
        brief: 'Causes bronchoconstriction and loss of peripheral vasodilation. This is the source of its major contraindications in asthma and COPD.',
        target: { name: "β-2 receptors", action: "antagonist", result: "Bronchoconstriction, ↓ vasodilation", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "SVT / Tachyarrhythmia" }
    ],
    contraindications: [
      { text: "Cardiogenic shock" },
      { text: "Sinus bradycardia or greater than first-degree AV block" },
      { text: "Bronchial asthma or COPD" },
      { text: "Hypersensitivity" },
      { text: "Decompensated heart failure" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "1-5 min (IV)",
        duration: "2-6 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "1 mg",
            repeat: "q2-5 min PRN",
            maxDose: "5 mg total",
            notes: ["Administer slow IV push over 1 min", "Monitor ECG and BP continuously"]
          }
        ],
        notes: ["Reserve IV use for life-threatening arrhythmias or when oral route unavailable"]
      },
      {
        population: "Pediatric",
        onset: "1-5 min (IV)",
        duration: "2-6 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "0.01-0.1 mg/kg",
            maxDose: "1 mg/dose",
            notes: ["Administer slow IV push over 10 min"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Bradycardia",
      "Hypotension",
      "Bronchospasm",
      "Dizziness / Fatigue",
      "Nausea",
      "Hypoglycemia (may mask tachycardic symptoms)",
      "AV block"
    ],
    precautions: [
      '<span class="hl hl--danger">Non-selective β-blockade causes bronchoconstriction</span> - contraindicated in asthma, COPD, and reactive airway disease.',
      'Masks tachycardic signs of <span class="hl hl--warn">hypoglycemia</span> - use with caution in diabetic patients.',
      '<span class="hl hl--warn">Do not abruptly discontinue</span> in patients on chronic therapy - risk of rebound hypertension, angina, and MI.',
      'Crosses the blood-brain barrier - may cause <span class="hl hl--warn">altered mental status, seizures, and widened QRS</span> in overdose (similar to TCA toxicity).',
      'Patients on propranolol may be <span class="hl hl--danger">resistant to epinephrine</span> during anaphylaxis - higher or repeated doses may be needed; unopposed alpha stimulation can cause paradoxical hypertension.',
      'Use with caution in <span class="hl hl--warn">elderly</span> - decreased hepatic clearance increases drug levels.',
      '<span class="hl hl--warn">Overdose treatment</span>: glucagon is the first-line antidote (bypasses β-receptor), followed by atropine for bradycardia and vasopressors for hypotension.'
    ]
  },
  {
    id: "protamine-sulfate",
    summary: "The specific antidote for heparin. A strongly basic protein that binds and neutralizes heparin\\'s anticoagulant effect, primarily used post-cardiac surgery and to reverse heparin overdose.",
    genericName: "Protamine Sulfate",
    tradeNames: [],
    category: ["Toxicology", "Trauma & Hemorrhage"],
    classes: ["Antidote"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Forms a stable, inactive salt complex with circulating heparin, neutralizing anticoagulation. The complex is cleared by the reticuloendothelial system.',
        target: { name: "Heparin (circulating)", action: "antagonist", result: "Neutralizes anticoagulation", system: "coagulation" }
      }
    ],
    indications: [
      { name: "Heparin Reversal (UFH)" },
      { name: "LMWH Reversal (Partial)" }
    ],
    contraindications: [
      { text: "Hypersensitivity or previous intolerance to protamine" },
      { text: "No prior heparin use (do not administer for bleeding without heparin exposure)" }
    ],
    doses: [
      // ── Heparin Reversal (UFH) ────────────────────────
      {
        population: "Adult",
        indication: "Heparin Reversal (UFH)",
        onset: "< 5 min",
        duration: "~2 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "1 mg per 100 units heparin",
            maxDose: "50 mg over 10 min",
            notes: [
              "Dose based on time since last heparin: <30 min → 1 mg/100 U; 30-60 min → 0.5-0.75 mg/100 U; 60-120 min → 0.25-0.375 mg/100 U; >2 hrs → may not need reversal",
              "Infuse slowly - max rate 50 mg over 10 min",
              "Administer via peripheral IV (central line may worsen hypotension)"
            ]
          }
        ],
        notes: ["Monitor coagulation studies (ACT, aPTT) to guide repeat dosing; rebound heparinization can occur up to 18 hrs post-cardiac surgery"]
      },
      {
        population: "Pediatric",
        indication: "Heparin Reversal (UFH)",
        onset: "< 5 min",
        duration: "~2 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "1 mg per 100 units heparin",
            maxDose: "50 mg over 10 min",
            notes: ["Infuse slowly - same time-based dose adjustments as adult"]
          }
        ],
        notes: []
      },

      // ── LMWH Reversal (Partial) ───────────────────────
      {
        population: "Adult",
        indication: "LMWH Reversal (Partial)",
        onset: "< 5 min",
        duration: "~2 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "1 mg per 1 mg enoxaparin (or 1 mg per 100 units dalteparin)",
            notes: [
              "Only ~60% reversal of LMWH anticoagulant effect",
              "If bleeding continues after 4 hrs, may repeat at 0.5 mg per 1 mg enoxaparin",
              "Infuse slowly - max rate 50 mg over 10 min"
            ]
          }
        ],
        notes: ["Anti-Xa assay (not aPTT) is needed to monitor LMWH reversal"]
      }
    ],
    adverseEffects: [
      "Hypotension (dose and rate dependent)",
      "Bradycardia",
      "Anaphylaxis / Anaphylactoid reactions",
      "Pulmonary hypertension",
      "Pulmonary edema (noncardiogenic)",
      "Bronchoconstriction",
      "Nausea / Vomiting",
      "Flushing / Warmth"
    ],
    precautions: [
      '<span class="hl hl--danger">Rapid administration causes severe hypotension and cardiovascular collapse</span> - never exceed 50 mg over 10 min.',
      '<span class="hl hl--danger">Have vasopressors and resuscitation equipment immediately available</span> - fatal anaphylaxis has been reported.',
      'Higher risk of allergic reaction in patients with <span class="hl hl--warn">fish allergy</span>, <span class="hl hl--warn">previous vasectomy</span>, or prior exposure to <span class="hl hl--warn">protamine-containing insulin</span> (NPH, protamine zinc).',
      'In excess, protamine itself acts as a <span class="hl hl--warn">weak anticoagulant</span> - do not overdose.',
      'Rebound heparinization can occur <span class="hl hl--warn">up to 18 hours post-cardiac surgery</span> despite initial complete neutralization - monitor closely and redose if indicated.',
      'Administer via <strong>peripheral IV</strong> - central line administration increases histamine release and drops SVR.'
    ]
  },
  {
    id: "racemic-epinephrine",
    summary: "A 1:1 mixture of L- and D-epinephrine isomers delivered by nebulizer to reduce subglottic edema in croup. Provides temporary relief while corticosteroids take effect.",
    genericName: "Racemic Epinephrine",
    tradeNames: ["S2", "AsthmaNefrin", "Vaponefrin"],
    category: ["Airway & Respiratory"],
    classes: ["Sympathomimetic", "Bronchodilator"],
    source: "Mixed",
    moa: [
      {
        brief: 'Constricts submucosal arterioles in the upper airway, reducing subglottic edema and capillary leakage. This is the primary therapeutic effect in croup.',
        target: { name: "α-1 receptors", action: "agonist", result: "Mucosal vasoconstriction, ↓ subglottic edema", system: "adrenergic" }
      },
      {
        brief: 'Relaxes bronchial smooth muscle, providing bronchodilation. Secondary benefit in patients with concomitant bronchospasm.',
        target: { name: "β-2 receptors", action: "agonist", result: "Bronchodilation", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Croup (Moderate-Severe)" }
    ],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Epiglottitis (may provoke laryngospasm)", relative: true }
    ],
    doses: [
      {
        population: "Pediatric",
        formulation: "2.25% solution (22.5 mg/mL)",
        onset: "10-15 min",
        duration: "1-2 hrs",
        routes: [
          {
            via: ["NEB"],
            amount: "0.5 mL in 2.5 mL NS",
            repeat: "May repeat in 20 min PRN",
            notes: ["Administer to children with stridor at rest", "Use same dose regardless of patient size"]
          }
        ],
        notes: [
          "Always administer dexamethasone concurrently - racemic epi treats symptoms only, steroids treat the underlying inflammation",
          "Observe patient for minimum 2 hours after last dose for rebound worsening",
          "If L-epinephrine (1 mg/mL) is available, 5 mg (5 mL) nebulized is an equivalent alternative"
        ]
      },
      {
        population: "Adult",
        formulation: "2.25% solution (22.5 mg/mL)",
        onset: "10-15 min",
        duration: "1-2 hrs",
        routes: [
          {
            via: ["NEB"],
            amount: "0.5 mL in 2.5 mL NS",
            repeat: "May repeat in 20 min PRN",
            notes: []
          }
        ],
        notes: ["Rarely needed in adults; croup is predominantly a pediatric disease"]
      }
    ],
    adverseEffects: [
      "Tachycardia (transient)",
      "Tremor",
      "Pallor",
      "Nausea",
      "Rebound edema (symptoms may return to baseline after 1-2 hrs)"
    ],
    precautions: [
      '<span class="hl hl--warn">Rebound worsening</span> - therapeutic effect wanes by 2 hours. Symptoms may return to pre-treatment severity; this is NOT an adverse reaction, it is the drug wearing off. Monitor and redose or escalate.',
      'Does <strong>not</strong> alter the natural course of croup - always pair with <strong>dexamethasone</strong> (0.6 mg/kg PO/IV/IM) for sustained inflammation control.',
      'Systemic bioavailability is &lt;10% when nebulized, so cardiovascular side effects are <span class="hl hl--warn">mild and transient</span> compared to parenteral epinephrine.',
      'Children requiring <span class="hl hl--warn">≥3 doses</span> have increased odds of needing hospital admission and additional interventions.',
      'L-epinephrine (standard 1 mg/mL) 5 mg nebulized is therapeutically equivalent and may have a <span class="hl hl--beta">longer duration of action</span> - either formulation is acceptable per NASEMSO.',
      'Minimize agitation - crying and distress worsen airway obstruction. Use blow-by nebulization if tolerated better than a mask.'
    ]
  },
  {
    id: "rocuronium",
    summary: "A fast-acting non-depolarizing neuromuscular blocker used for RSI paralysis. Preferred over succinylcholine in many EMS systems due to fewer contraindications, no fasciculations, and full reversibility with sugammadex.",
    genericName: "Rocuronium",
    tradeNames: ["Zemuron"],
    category: ["Airway & Respiratory", "Sedation & Anesthesia"],
    classes: [],
    source: "Mixed",
    moa: [
      {
        brief: 'Prevents skeletal muscle depolarization, producing flaccid paralysis. Does not cause fasciculations, which makes it preferable to succinylcholine when hyperkalemia is a concern.',
        target: { name: "Nicotinic acetylcholine receptors (NMJ)", action: "antagonist", result: "Skeletal muscle paralysis", system: "cholinergic" }
      }
    ],
    indications: [
      { name: "RSI / Emergency Intubation" }
    ],
    contraindications: [
      { text: "History of anaphylaxis to rocuronium or other neuromuscular blocking agents" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "45-60 sec",
        duration: "40-70 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1-1.2 mg/kg",
            notes: [
              "Rapid IV push",
              "Higher doses (≥1.4 mg/kg) may improve first-pass success with direct laryngoscopy",
              "Use ideal body weight for obese patients"
            ]
          }
        ],
        notes: [
          "Onset and duration are dose-dependent - higher RSI doses produce faster onset but longer paralysis",
          "Post-intubation sedation is CRITICAL - paralysis outlasts most induction agents; redose sedation at 20 min or sooner"
        ]
      },
      {
        population: "Pediatric",
        onset: "45-60 sec",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mg/kg",
            notes: ["Rapid IV push"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Prolonged paralysis",
      "Tachycardia (mild, transient)",
      "Hypertension (mild, transient)",
      "Bronchospasm (rare)",
      "Anaphylaxis (rare but severe)",
      "Awareness with paralysis (if sedation inadequate)"
    ],
    precautions: [
      '<span class="hl hl--danger">Does NOT provide sedation, analgesia, or amnesia</span> - always administer an induction agent (ketamine, etomidate, etc.) BEFORE the paralytic. Awareness with paralysis is a preventable catastrophe.',
      '<span class="hl hl--danger">Post-intubation sedation plan must be in place BEFORE RSI</span> - paralysis (40-70 min) will outlast most induction agents (10-20 min). Redose sedation at 20 min or watch for signs: tearing, tachycardia, hypertension, facial grimacing.',
      'Fully reversible with <strong>sugammadex</strong> (16 mg/kg IV for immediate reversal of full RSI-dose blockade; 4 mg/kg for partial blockade). This is the key safety advantage over succinylcholine.',
      'No risk of <span class="hl hl--beta">hyperkalemia</span>, <span class="hl hl--beta">malignant hyperthermia</span>, or <span class="hl hl--beta">fasciculations</span> - safe in burns, crush injuries, renal failure, neuromuscular disease, and prolonged immobilization where succinylcholine is contraindicated.',
      'Duration is prolonged by <span class="hl hl--warn">hepatic dysfunction</span>, <span class="hl hl--warn">hypothermia</span>, and <span class="hl hl--warn">acidosis</span> - effects may last well beyond the expected window.',
      'If intubation fails and cannot ventilate, <span class="hl hl--danger">sugammadex can restore spontaneous breathing</span> - this is the "rescue" plan when using rocuronium for RSI.',
      'Use <strong>ideal body weight</strong> for dosing in obese patients - dosing on total body weight risks excessive duration of paralysis.'
    ]
  },
  {
    id: "sodium-bicarbonate",
    summary: "An alkalizing agent used to buffer acidosis, reverse sodium channel blockade in TCA and cocaine toxicity, and treat hyperkalemia. Not a routine cardiac arrest drug.",
    genericName: "Sodium Bicarbonate",
    tradeNames: [],
    category: ["Toxicology", "Resuscitation", "Endocrine & Metabolic"],
    classes: ["Alkalinizing Agent", "Electrolyte", "Antidote"],
    source: "Mixed",
    moa: [
      {
        brief: 'Provides bicarbonate that buffers excess acid, raising blood pH. In sodium channel blocker toxicity, the sodium load and alkalinization together help overcome channel blockade and narrow the QRS.',
        target: { name: "Hydrogen ions (systemic)", action: "antagonist", result: "↑ blood pH, reverses acidosis", system: "other" }
      }
    ],
    indications: [
      { name: "Sodium Channel Blocker Toxicity" },
      { name: "Hyperkalemia" },
      { name: "Cardiac Arrest (Hyperkalemia / TCA)" },
      { name: "Crush Injury / Rhabdomyolysis" }
    ],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Metabolic or respiratory alkalosis" },
      { text: "Severe pulmonary edema" },
      { text: "Hypernatremia" },
      { text: "Hypocalcemia" }
    ],
    doses: [
      // ── Sodium Channel Blocker Toxicity ───────────────
      {
        population: "Adult",
        indication: "Sodium Channel Blocker Toxicity",
        formulation: "8.4% (1 mEq/mL)",
        onset: "2-5 min",
        duration: "15-30 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1-2 mEq/kg",
            repeat: "Repeat PRN to narrow QRS",
            notes: ["IV push for acute QRS widening ≥100 msec", "Target: QRS narrowing and BP improvement"]
          }
        ],
        notes: ["Covers TCA overdose, cocaine toxicity, beta-blocker overdose, and other sodium channel blocking agents with QRS widening"]
      },
      {
        population: "Pediatric",
        indication: "Sodium Channel Blocker Toxicity",
        formulation: "4.2% (0.5 mEq/mL)",
        onset: "2-5 min",
        duration: "15-30 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1-2 mEq/kg",
            repeat: "Repeat PRN to narrow QRS",
            notes: ["Use 4.2% solution in neonates and infants to reduce osmolar load"]
          }
        ],
        notes: []
      },

      // ── Hyperkalemia ──────────────────────────────────
      {
        population: "Adult",
        indication: "Hyperkalemia",
        formulation: "8.4% (1 mEq/mL)",
        onset: "8-10 min",
        duration: "1-2 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mEq/kg",
            maxDose: "50 mEq",
            notes: ["Infuse over 5 min"]
          }
        ],
        notes: ["Administer after calcium (membrane stabilizer) - bicarb shifts K⁺ intracellularly but takes longer to act; consider albuterol 5 mg NEB as adjunct"]
      },
      {
        population: "Pediatric",
        indication: "Hyperkalemia",
        formulation: "4.2% (0.5 mEq/mL)",
        onset: "8-10 min",
        duration: "1-2 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mEq/kg",
            maxDose: "50 mEq",
            notes: ["Infuse over 5 min"]
          }
        ],
        notes: []
      },

      // ── Cardiac Arrest (Hyperkalemia / TCA) ───────────
      {
        population: "Adult",
        indication: "Cardiac Arrest (Hyperkalemia / TCA)",
        formulation: "8.4% (1 mEq/mL)",
        onset: "Immediate (IV push in arrest)",
        duration: "15-30 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mEq/kg",
            repeat: "May repeat based on clinical response",
            notes: ["Rapid IV push"]
          }
        ],
        notes: [
          "NOT routine in cardiac arrest - only indicated when hyperkalemia or TCA overdose suspected",
          "Ensure adequate ventilation BEFORE giving bicarb - without CO₂ clearance, bicarb worsens intracellular acidosis"
        ]
      },
      {
        population: "Pediatric",
        indication: "Cardiac Arrest (Hyperkalemia / TCA)",
        formulation: "4.2% (0.5 mEq/mL)",
        onset: "Immediate (IV push in arrest)",
        duration: "15-30 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mEq/kg",
            repeat: "May repeat based on clinical response",
            notes: ["Rapid IV push; use 4.2% in neonates/infants"]
          }
        ],
        notes: []
      },

      // ── Crush Injury / Rhabdomyolysis ─────────────────
      {
        population: "Adult",
        indication: "Crush Injury / Rhabdomyolysis",
        formulation: "8.4% (1 mEq/mL)",
        onset: "8-10 min",
        duration: "1-2 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mEq/kg",
            maxDose: "50 mEq",
            notes: ["Infuse over 5 min", "Administer BEFORE releasing crushed extremity if possible"]
          }
        ],
        notes: ["Alkalinizes urine to prevent myoglobin precipitation in renal tubules; also treats the acidosis and hyperkalemia released upon reperfusion"]
      },
      {
        population: "Pediatric",
        indication: "Crush Injury / Rhabdomyolysis",
        formulation: "4.2% (0.5 mEq/mL)",
        onset: "8-10 min",
        duration: "1-2 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mEq/kg",
            maxDose: "50 mEq",
            notes: ["Infuse over 5 min"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Metabolic alkalosis",
      "Hypernatremia",
      "Hypokalemia",
      "Hypocalcemia (ionized)",
      "Fluid overload / Pulmonary edema",
      "Tissue necrosis (extravasation)"
    ],
    precautions: [
      '<span class="hl hl--danger">Ensure adequate ventilation before administering</span> - bicarb generates CO₂ when buffering acid. Without ventilation, CO₂ accumulates and paradoxically worsens intracellular acidosis.',
      '<span class="hl hl--danger">Extravasation causes tissue necrosis</span> - 8.4% solution is extremely hyperosmolar (~2000 mOsm/L). Verify IV patency before administration.',
      '<span class="hl hl--warn">Not a routine cardiac arrest drug</span> - only indicated for suspected hyperkalemia or TCA/sodium channel blocker overdose in arrest. Routine use in arrest does not improve outcomes.',
      'Not indicated for routine use in <span class="hl hl--warn">DKA</span> - insulin and fluids correct the acidosis; bicarb may worsen outcomes in pediatric DKA.',
      'No evidence supports routine use in <span class="hl hl--warn">neonatal resuscitation</span>.',
      '<span class="hl hl--warn">Incompatible</span> with calcium salts (precipitates), catecholamines (norepinephrine, dobutamine, dopamine), and many other IV drugs - flush line before and after, or use a separate line.',
      'Use <strong>4.2% concentration</strong> (0.5 mEq/mL) for neonates and infants to reduce the osmolar load.',
      'In crush injury, administer <strong>before releasing the trapped extremity</strong> when possible - reperfusion releases a bolus of potassium, acid, and myoglobin.'
    ]
  },
  {
    id: "succinylcholine",
    summary: "A depolarizing neuromuscular blocker used for RSI with the fastest onset and shortest duration of any paralytic. Carries significant contraindications including hyperkalemia risk, malignant hyperthermia, and burns or crush injuries over 24 hours old.",
    genericName: "Succinylcholine",
    tradeNames: ["Anectine", "Quelicin"],
    category: ["Airway & Respiratory", "Sedation & Anesthesia"],
    classes: [],
    source: "StatPearls",
    moa: [
      {
        brief: 'Causes sustained depolarization of the motor end plate, preventing repolarization and producing rapid flaccid paralysis. Initial depolarization produces visible fasciculations before onset. Rapidly metabolized by plasma cholinesterase, giving it the shortest duration of any neuromuscular blocker.',
        target: { name: "Nicotinic acetylcholine receptors (NMJ)", action: "agonist", result: "Sustained depolarization → flaccid paralysis", system: "cholinergic" }
      }
    ],
    indications: [
      { name: "RSI / Emergency Intubation" }
    ],
    contraindications: [
      { text: "Personal or family history of malignant hyperthermia" },
      { text: "Known or suspected hyperkalemia" },
      { text: "Burns >24 hrs old (receptor upregulation → fatal hyperkalemia)" },
      { text: "Crush injuries >24 hrs old" },
      { text: "Denervation injuries >72 hrs (stroke, spinal cord injury, prolonged immobilization)" },
      { text: "Neuromuscular disease (muscular dystrophy, myopathy)" },
      { text: "Known pseudocholinesterase deficiency" },
      { text: "Penetrating eye injury (raises IOP)", relative: true },
      { text: "Hypersensitivity" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "30-60 sec (IV); 2-3 min (IM)",
        duration: "6-10 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1-1.5 mg/kg",
            notes: ["Rapid IV push"]
          },
          {
            via: ["IM"],
            amount: "3-4 mg/kg",
            maxDose: "150 mg",
            notes: ["IM route for when IV/IO not available; slower onset"]
          }
        ],
        notes: ["Duration is ultra-short - spontaneous breathing returns in 6-10 min if intubation fails"]
      },
      {
        population: "Pediatric",
        onset: "30-60 sec (IV); 2-3 min (IM)",
        duration: "6-10 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "2 mg/kg",
            notes: ["Higher mg/kg dose in children due to larger volume of distribution"]
          },
          {
            via: ["IM"],
            amount: "4 mg/kg",
            notes: ["IM route for when IV/IO not available"]
          }
        ],
        notes: ["Consider atropine 0.02 mg/kg (min 0.1 mg) pretreatment in pediatrics to prevent vagal bradycardia"]
      }
    ],
    adverseEffects: [
      "Hyperkalemia (↑ K⁺ by ~0.5 mEq/L; fatal in at-risk patients)",
      "Fasciculations",
      "Malignant hyperthermia (rare, potentially fatal)",
      "Bradycardia (especially pediatrics and repeat doses)",
      "Masseter spasm / Trismus",
      "Increased IOP",
      "Increased intragastric pressure",
      "Post-procedure myalgias"
    ],
    precautions: [
      '<span class="hl hl--danger">No reversal agent exists</span> - you must wait for plasma cholinesterase to metabolize the drug (~6-10 min). If you cannot intubate and cannot ventilate, you must BVM until paralysis wears off. This is the key safety trade-off vs. rocuronium (reversible with sugammadex).',
      '<span class="hl hl--danger">Does NOT provide sedation, analgesia, or amnesia</span> - always administer an induction agent BEFORE the paralytic.',
      '<span class="hl hl--danger">Fatal hyperkalemia risk</span> - burns, crush injuries, denervation injuries, and neuromuscular disease cause acetylcholine receptor upregulation across the muscle membrane. Succinylcholine depolarizes all of these receptors simultaneously, releasing a massive potassium bolus that can cause cardiac arrest. Risk begins 24-72 hrs post-injury and persists for months.',
      '<span class="hl hl--danger">Malignant hyperthermia</span> - a rare pharmacogenetic crisis triggered by succinylcholine (and volatile anesthetics). Signs: rapidly rising temperature, rigidity, tachycardia, hypercarbia, metabolic acidosis. Treatment: <strong>dantrolene</strong>. Family history is a contraindication.',
      '<span class="hl hl--warn">Bradycardia</span> - more common in pediatrics and with repeat doses. Succinylcholine stimulates muscarinic receptors. Consider atropine pretreatment in children.',
      'Patients with <span class="hl hl--warn">pseudocholinesterase deficiency</span> (genetic or acquired from liver disease, pregnancy, organophosphate exposure) will have profoundly prolonged paralysis - hours instead of minutes.',
      'Use <strong>total body weight</strong> for dosing (unlike rocuronium which uses ideal body weight) - succinylcholine distributes into extracellular fluid proportional to total mass.',
      'If <span class="hl hl--warn">trismus/masseter spasm</span> occurs after succinylcholine, treat as possible malignant hyperthermia until proven otherwise.'
    ]
  },
  {
    id: "terbutaline",
    summary: "A selective beta-2 agonist given subcutaneously when inhaled bronchodilators fail in severe asthma. Also used as an acute tocolytic to suppress preterm contractions.",
    genericName: "Terbutaline Sulfate",
    tradeNames: ["Brethine", "Bricanyl"],
    category: ["Airway & Respiratory", "OB/GYN"],
    classes: ["Beta-2 Agonist", "Bronchodilator", "Sympathomimetic", "Tocolytic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Selectively causes bronchodilation by increasing intracellular cAMP in bronchial smooth muscle. Also relaxes uterine smooth muscle through the same mechanism, which is the basis for its tocolytic use in preterm labor.',
        target: { name: "β-2 receptors", action: "agonist", result: "Bronchodilation, uterine relaxation", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Severe Bronchospasm" },
      { name: "Preterm Labor (Acute Tocolysis)" }
    ],
    contraindications: [
      { text: "Hypersensitivity to sympathomimetic amines" },
      { text: "Prolonged tocolysis beyond 48-72 hrs (FDA black box)" },
      { text: "Tachyarrhythmias", relative: true },
      { text: "Severe cardiac disease / Ischemic heart disease", relative: true }
    ],
    doses: [
      // ── Severe Bronchospasm ───────────────────────────
      {
        population: "Adult",
        indication: "Severe Bronchospasm",
        onset: "15-30 min (SQ)",
        duration: "1.5-4 hrs",
        routes: [
          {
            via: ["SQ"],
            amount: "0.25 mg",
            repeat: "May repeat once in 15-30 min if no improvement",
            maxDose: "0.5 mg in 4 hrs",
            notes: ["Inject into lateral deltoid area"]
          }
        ],
        notes: ["Reserve for patients failing inhaled beta-agonists - SQ route bypasses the need for adequate inspiratory effort"]
      },
      {
        population: "Pediatric",
        indication: "Severe Bronchospasm",
        onset: "15-30 min (SQ)",
        duration: "1.5-4 hrs",
        routes: [
          {
            via: ["SQ"],
            amount: "0.01 mg/kg",
            maxDose: "0.25 mg/dose",
            repeat: "q20 min PRN x3 doses",
            notes: []
          }
        ],
        notes: ["Not FDA-approved for <12 yrs but widely used off-label in pediatric emergency medicine"]
      },

      // ── Preterm Labor (Acute Tocolysis) ────────────────
      {
        population: "Adult",
        indication: "Preterm Labor (Acute Tocolysis)",
        onset: "15-30 min (SQ)",
        duration: "1.5-4 hrs",
        routes: [
          {
            via: ["SQ"],
            amount: "0.25 mg",
            repeat: "May repeat once in 15-30 min",
            notes: ["Off-label use - no FDA-approved tocolytics exist"]
          }
        ],
        notes: [
          "Goal is to delay delivery 48-72 hrs to allow antenatal corticosteroid administration for fetal lung maturity",
          "Do NOT use for prolonged or maintenance tocolysis - FDA black box warning for maternal death from cardiac complications"
        ]
      }
    ],
    adverseEffects: [
      "Tachycardia",
      "Tremor",
      "Nervousness / Anxiety",
      "Palpitations",
      "Headache",
      "Hypokalemia (intracellular K⁺ shift)",
      "Hyperglycemia",
      "Nausea"
    ],
    precautions: [
      '<span class="hl hl--danger">FDA black box warning</span>: Do not use injectable terbutaline for prolonged tocolysis (>48-72 hrs) or oral terbutaline for any tocolysis - serious maternal cardiac complications and death have been reported.',
      'Use with caution in patients with <span class="hl hl--warn">cardiovascular disease</span>, <span class="hl hl--warn">hypertension</span>, <span class="hl hl--warn">hyperthyroidism</span>, <span class="hl hl--warn">diabetes</span>, and <span class="hl hl--warn">seizure disorders</span>.',
      'Avoid concurrent use with other <span class="hl hl--warn">sympathomimetics</span> - additive cardiovascular stimulation. Does not preclude use of inhaled beta-agonists for acute bronchospasm.',
      'Use with extreme caution in patients on <span class="hl hl--warn">MAOIs or TCAs</span> - potentiated vascular effects.',
      '<span class="hl hl--warn">Beta-blockers</span> antagonize the bronchodilator effect and may cause severe bronchospasm in asthmatic patients.',
      'When used as a tocolytic: monitor maternal heart rate, BP, and respiratory status for signs of <span class="hl hl--warn">pulmonary edema</span> and <span class="hl hl--warn">myocardial ischemia</span>. Monitor fetal heart rate for tachycardia.',
      'If bronchospasm does not improve after the second SQ dose, escalate care - the patient is in <span class="hl hl--danger">impending respiratory failure</span> and may need epinephrine, magnesium, or intubation.'
    ]
  },
  {
    id: "thiamine",
    summary: "Vitamin B1, given IV or IM to prevent or treat Wernicke\\'s encephalopathy in malnourished or alcoholic patients. Administered before or alongside dextrose in hypoglycemic patients at risk of thiamine deficiency.",
    genericName: "Thiamine (Vitamin B1)",
    tradeNames: [],
    category: ["Endocrine & Metabolic"],
    classes: ["Vitamin"],
    source: "Mixed",
    moa: [
      {
        brief: 'Converted to thiamine pyrophosphate, an essential cofactor for aerobic glucose metabolism in the brain. Without it, neurons in the mammillary bodies, thalamus, and cerebellum cannot produce ATP and die. This is why thiamine must be given before or with dextrose in malnourished patients.',
        target: { name: "Thiamine-dependent enzymes (CNS)", action: "donor", result: "Restores cerebral glucose metabolism", system: "metabolic" }
      }
    ],
    indications: [
      { name: "Wernicke's Encephalopathy (Suspected/Prophylaxis)" }
    ],
    contraindications: [
      { text: "Known hypersensitivity to thiamine (extremely rare)" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "Variable - hours (ocular signs) to days (confusion)",
        duration: "Not applicable (replacement therapy)",
        routes: [
          {
            via: ["IV"],
            amount: "100 mg",
            notes: ["Slow IV push or diluted in NS", "IV preferred over IM for faster CNS delivery"]
          },
          {
            via: ["IM"],
            amount: "100 mg",
            notes: ["Use when IV access unavailable"]
          }
        ],
        notes: ["Give to any patient with AMS + suspected alcoholism, malnutrition, or chronic illness before or alongside dextrose"]
      },
      {
        population: "Pediatric",
        onset: "Variable",
        duration: "Not applicable (replacement therapy)",
        routes: [
          {
            via: ["IV", "IM"],
            amount: "10-25 mg",
            notes: []
          }
        ],
        notes: ["Pediatric Wernicke's is rare but can occur in chronic malnutrition, prolonged vomiting (hyperemesis), or malignancy"]
      }
    ],
    adverseEffects: [
      "Injection site pain / Warmth / Flushing",
      "Anaphylaxis (very rare - estimated 1 in 1,000,000)",
      "Nausea (rare)"
    ],
    precautions: [
      '<span class="hl hl--beta">Extremely safe drug</span> - adverse reactions are vanishingly rare. Do not withhold thiamine due to allergy concerns; the risk of untreated Wernicke\'s (20% mortality, 85% progress to Korsakoff\'s) far outweighs anaphylaxis risk.',
      '<span class="hl hl--warn">Do NOT delay dextrose</span> to wait for thiamine - the evolution from glucose loading to acute Wernicke\'s takes hours to days, not minutes. If both are available, give thiamine first or concurrently. If only dextrose is available, give it.',
      'The classic Wernicke\'s triad (<strong>confusion, ataxia, ophthalmoplegia</strong>) is present in only ~10% of cases - most present with isolated confusion. <span class="hl hl--warn">Treat empirically</span> in any AMS patient with suspected alcohol use or malnutrition.',
      '100 mg is the <strong>standard prehospital dose</strong>. Hospital guidelines for confirmed Wernicke\'s use much higher doses (500 mg IV TID) - this is outside EMS Scope but important to know for continuity of care.',
      'Oral thiamine has poor bioavailability (~5%) - parenteral administration is essential for acute treatment or prophylaxis.',
      '<span class="hl hl--warn">Magnesium deficiency</span> can make thiamine replacement ineffective - magnesium is a cofactor for converting thiamine to its active form (TPP). Chronic alcoholics are often deficient in both.'
    ]
  },
  {
    id: "tranexamic-acid",
    summary: "An antifibrinolytic that stabilizes blood clots by blocking plasmin. Given early in major trauma and postpartum hemorrhage to reduce death from bleeding, with benefit greatest within one hour of injury.",
    genericName: "Tranexamic Acid",
    tradeNames: ["Cyklokapron", "Lysteda"],
    category: ["Trauma & Hemorrhage"],
    classes: ["Antifibrinolytic"],
    source: "Mixed",
    moa: [
      {
        brief: 'A synthetic lysine analogue that blocks the conversion of plasminogen to plasmin, preventing fibrin clot breakdown. Stabilizes clots that have already formed rather than promoting new clot formation.',
        target: { name: "Plasminogen (lysine-binding sites)", action: "inhibitor", result: "Prevents fibrinolysis, stabilizes clots", system: "coagulation" }
      }
    ],
    indications: [
      { name: "Traumatic Hemorrhage" },
      { name: "Postpartum Hemorrhage" }
    ],
    contraindications: [
      { text: "Active thromboembolic disease (DVT, PE, stroke)" },
      { text: "Hypersensitivity" },
      { text: "History of seizures (dose-dependent risk)", relative: true },
      { text: "Subarachnoid hemorrhage", relative: true }
    ],
    doses: [
      // ── Traumatic Hemorrhage ──────────────────────────
      {
        population: "Adult",
        indication: "Traumatic Hemorrhage",
        onset: "Minutes (peak antifibrinolytic effect rapid)",
        duration: "~2 hrs (IV half-life)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 g in 100 mL NS",
            maxDose: "2 g total",
            notes: [
              "Infuse over 10 min - rapid push causes hypotension",
              "Hospital continuation: 1 g infused over 8 hrs"
            ]
          }
        ],
        notes: [
          "Give within 3 hours of injury - benefit is greatest within 1 hour",
          "DO NOT administer >3 hours post-injury - CRASH-2 showed increased mortality with late administration"
        ]
      },
      {
        population: "Pediatric",
        indication: "Traumatic Hemorrhage",
        onset: "Minutes",
        duration: "~2 hrs (IV half-life)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "20 mg/kg",
            maxDose: "1 g",
            notes: ["Infuse over 10 min in NS"]
          }
        ],
        notes: ["Hospital continuation: 10 mg/kg/hr over 8 hrs"]
      },

      // ── Postpartum Hemorrhage ─────────────────────────
      {
        population: "Adult",
        indication: "Postpartum Hemorrhage",
        onset: "Minutes",
        duration: "~2 hrs (IV half-life)",
        routes: [
          {
            via: ["IV"],
            amount: "1 g in 100 mL NS",
            repeat: "May repeat once after 30 min if bleeding continues",
            maxDose: "2 g total",
            notes: ["Infuse over 10 min"]
          }
        ],
        notes: ["Give as soon as PPH is recognized - administer alongside oxytocin and fundal massage, not instead of"]
      }
    ],
    adverseEffects: [
      "Nausea / Vomiting",
      "Diarrhea",
      "Hypotension (if infused too rapidly)",
      "Dizziness / Headache",
      "Thromboembolic events (theoretical - not borne out in major trials)",
      "Seizures (dose-dependent, primarily at very high doses)"
    ],
    precautions: [
      '<span class="hl hl--danger">TIME IS CRITICAL</span> - give within 3 hours of injury onset. CRASH-2 demonstrated that TXA given &gt;3 hours after injury <strong>increased mortality</strong>. Greatest benefit is within the first hour.',
      '<span class="hl hl--warn">Infuse over 10 minutes</span> - rapid IV push causes hypotension. Dilute 1 g in 100 mL NS.',
      'TXA <strong>stabilizes existing clots</strong> - it is NOT a procoagulant and does not replace blood products, surgical hemorrhage control, or tourniquets. Use as an adjunct.',
      'The CRASH-2 trial (20,000+ patients, 2010) showed TXA reduced death from bleeding when given early. The PATCH trial (2023, advanced trauma systems) did not show functional outcome benefit at 6 months - <span class="hl hl--warn">evidence is evolving</span>, but most EMS systems still include TXA in hemorrhage protocols.',
      'For postpartum hemorrhage, the WOMAN trial showed TXA reduced death from bleeding when given within 3 hours of delivery - same time-sensitivity principle as trauma.',
      'TXA does not increase thromboembolic events at standard dosing based on large trial data - the theoretical VTE risk has not been clinically significant.',
      'Use with caution in patients with <span class="hl hl--warn">renal impairment</span> - 95% of TXA is renally excreted unchanged; dose reduction may be needed.',
      '<span class="hl hl--warn">IM route</span> is emerging (UK paramedics authorized) - useful when IV access is delayed. Not yet standard in most US EMS protocols.'
    ]
  },
  {
    id: "vasopressin",
    summary: "A non-catecholamine vasopressor that acts on V1 receptors in vascular smooth muscle to cause potent vasoconstriction, independent of the adrenergic pathway, making it useful in vasodilatory and septic shock as an adjunct to norepinephrine.",
    genericName: "Vasopressin (ADH)",
    tradeNames: ["Vasostrict", "Pitressin"],
    category: ["Cardiovascular", "Resuscitation"],
    classes: ["Vasopressor", "Hormone", "Antidiuretic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Causes vasoconstriction independent of the adrenergic system through direct smooth muscle activation. This is the primary therapeutic effect in shock.',
        target: { name: "V1 receptors (vascular)", action: "agonist", result: "Vasoconstriction, ↑ SVR", system: "other" }
      },
      {
        brief: 'Promotes water reabsorption in the renal collecting duct by triggering aquaporin insertion. This is the endogenous ADH function.',
        target: { name: "V2 receptors (renal)", action: "agonist", result: "Water reabsorption, ↓ urine output", system: "other" }
      }
    ],
    indications: [
      { name: "Vasodilatory Shock" },
      { name: "Cardiac Arrest" }
    ],
    contraindications: [
      { text: "Hypersensitivity to 8-L-arginine vasopressin" }
    ],
    doses: [
      // ── Vasodilatory Shock ────────────────────────────
      {
        population: "Adult",
        indication: "Vasodilatory Shock",
        onset: "Rapid; peak effect within 15 min",
        duration: "Pressor effect fades within 20 min of stopping infusion",
        routes: [
          {
            via: ["IV drip"],
            amount: "0.03-0.04 U/min",
            notes: [
              "Fixed-dose infusion - not routinely titrated",
              "Add to norepinephrine, do not use as sole vasopressor",
              "Titrate to MAP ≥65 mmHg"
            ]
          }
        ],
        notes: [
          "Second-line vasopressor per Surviving Sepsis Campaign - add when norepinephrine requirements escalate (>0.25-0.5 mcg/kg/min)",
          "Works via non-adrenergic pathway, making it effective when catecholamine receptors are downregulated in refractory shock"
        ]
      },

      // ── Cardiac Arrest ────────────────────────────────
      {
        population: "Adult",
        indication: "Cardiac Arrest",
        onset: "Immediate (IV push in arrest)",
        duration: "10-20 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "40 U",
            notes: ["Single IV push dose - may replace first or second dose of epinephrine"]
          }
        ],
        notes: [
          "Removed from AHA ACLS Algorithm in 2015 - no added benefit over epinephrine alone",
          "May still be available in some systems; not harmful, just no longer recommended as standard"
        ]
      }
    ],
    adverseEffects: [
      "Digital ischemia",
      "Mesenteric ischemia",
      "Bradycardia",
      "Decreased cardiac output",
      "Hyponatremia (V2-mediated water retention)",
      "Skin pallor / Blanching",
      "Nausea / Abdominal cramping",
      "Bronchospasm (rare)"
    ],
    precautions: [
      '<span class="hl hl--danger">Not a first-line vasopressor</span> - use as an adjunct to norepinephrine in vasodilatory shock, not as a replacement. Vasopressin is a pure vasoconstrictor with no inotropic effect; using it alone in cardiogenic shock may worsen cardiac output.',
      '<span class="hl hl--warn">Cardiac arrest use removed from ACLS (2015)</span> - AHA determined that vasopressin + epinephrine offers no advantage over epinephrine alone. Removed for algorithm simplicity, not for safety concerns.',
      '<span class="hl hl--warn">Digital and mesenteric ischemia</span> - the non-adrenergic vasoconstriction is non-selective and can compromise perfusion to extremities and the gut. Risk increases above 0.04 U/min.',
      'Tends to <span class="hl hl--warn">decrease heart rate and cardiac output</span> - unlike catecholamine vasopressors, vasopressin has no β-1 stimulation. Monitor for bradycardia.',
      'Works through an <strong>entirely non-adrenergic pathway</strong> (V1 receptors) - this is the key advantage in vasodilatory shock where catecholamine receptors are downregulated and patients are becoming refractory to norepinephrine.',
      'Patients in <span class="hl hl--warn">septic shock are relatively vasopressin-deficient</span> - exogenous vasopressin at low doses acts as hormone replacement rather than pure pharmacologic vasopressor.',
      'When discontinuing, <span class="hl hl--warn">taper by 0.005 U/min per hour</span> - abrupt cessation may cause rebound hypotension. Controversy exists over whether to stop vasopressin or norepinephrine first.',
      'Not a standard prehospital drug in most EMS systems - primarily relevant for <strong>critical care transport</strong> paramedics managing patients on vasopressor drips.'
    ]
  },
  {
    id: "vecuronium",
    summary: "An intermediate-acting non-depolarizing paralytic with minimal hemodynamic effects, used for post-intubation paralysis maintenance rather than RSI due to slow onset. Must be reconstituted from powder before use.",
    genericName: "Vecuronium",
    tradeNames: ["Norcuron"],
    category: ["Airway & Respiratory", "Sedation & Anesthesia"],
    classes: [],
    source: "StatPearls",
    moa: [
      {
        brief: 'Prevents skeletal muscle depolarization, producing flaccid paralysis. Does not have vagolytic effects, so it does not increase heart rate.',
        target: { name: "Nicotinic acetylcholine receptors (NMJ)", action: "antagonist", result: "Skeletal muscle paralysis", system: "cholinergic" }
      }
    ],
    indications: [
      { name: "Post-Intubation Paralysis Maintenance" }
    ],
    contraindications: [
      { text: "History of anaphylaxis to vecuronium or other neuromuscular blocking agents" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "2.5-3 min",
        duration: "25-40 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.08-0.1 mg/kg",
            repeat: "0.01-0.015 mg/kg q12-15 min PRN",
            notes: [
              "Must reconstitute from powder before use - mix with supplied diluent or NS",
              "Maintenance boluses based on return of train-of-four twitches"
            ]
          }
        ],
        notes: [
          "NOT recommended for RSI - onset too slow (2.5-3 min) compared to rocuronium (45-60 sec) or succinylcholine (30-60 sec)",
          "Primary prehospital role is post-intubation paralysis when continued muscle relaxation needed during transport"
        ]
      },
      {
        population: "Pediatric",
        onset: "2-3 min",
        duration: "25-30 min (shorter than adults)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            repeat: "0.01-0.015 mg/kg q12-15 min PRN",
            notes: []
          }
        ],
        notes: ["Children may require slightly higher mg/kg doses and more frequent redosing due to faster recovery"]
      }
    ],
    adverseEffects: [
      "Prolonged paralysis (dose-dependent)",
      "Bradycardia (may potentiate opioid-induced bradycardia)",
      "Anaphylaxis (rare - cross-reactivity with other NMBAs reported)",
      "ICU-acquired myopathy (with prolonged use)"
    ],
    precautions: [
      '<span class="hl hl--danger">Does NOT provide sedation, analgesia, or amnesia</span> - always ensure adequate sedation before and throughout paralysis. Awareness with paralysis is a preventable catastrophe.',
      '<span class="hl hl--warn">Requires reconstitution</span> - vecuronium is supplied as a lyophilized powder that must be mixed before administration. This adds preparation time vs. rocuronium (which is ready to use), making it a poor RSI choice even apart from its slow onset.',
      '<span class="hl hl--warn">Hepatic metabolism</span> - duration is significantly prolonged in patients with liver disease or cholestasis. The active metabolite (3-desacetylvecuronium) has ~50% of the parent drug\'s potency and accumulates in renal failure.',
      'Reversible with <strong>neostigmine + atropine</strong> (or glycopyrrolate) when train-of-four shows ≥2 twitches, or with <strong>sugammadex</strong> (4 mg/kg for moderate blockade) for more reliable reversal.',
      '<span class="hl hl--beta">Minimal hemodynamic effects</span> - this is vecuronium\'s key advantage. Unlike pancuronium (tachycardia) or succinylcholine (bradycardia/hyperkalemia), vecuronium has essentially no cardiovascular impact, making it safe in hemodynamically unstable patients.',
      'Prolonged ICU use (days) increases risk of <span class="hl hl--warn">critical illness myopathy</span>, especially when combined with corticosteroids. Limit use to shortest duration necessary.',
      '<span class="hl hl--warn">Do not mix</span> with alkaline solutions (barbiturates, sodium bicarbonate) - precipitates in alkaline pH.',
      'Compared to <strong>rocuronium</strong>: vecuronium has slower onset, requires reconstitution, and is hepatically metabolized (vs. rocuronium\'s mixed hepatic/renal clearance). Rocuronium has largely replaced vecuronium for both RSI and many maintenance scenarios.'
    ]
  },
  {
    id: "verapamil",
    summary: "A non-dihydropyridine calcium channel blocker that slows AV node conduction to terminate SVT. Second-line to adenosine, with contraindications including WPW with atrial fibrillation, wide-complex tachycardia, and use in infants.",
    genericName: "Verapamil",
    tradeNames: ["Calan", "Isoptin", "Verelan"],
    category: ["Cardiovascular"],
    classes: ["Class IV Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Slows conduction velocity and prolongs the AV node refractory period, interrupting reentrant circuits. Terminates SVT or controls ventricular rate in atrial fibrillation and flutter.',
        target: { name: "L-type Ca²⁺ channels (SA/AV node)", action: "blocker", result: "↓ AV conduction, ↑ AV refractory period", system: "ion-channel" }
      },
      {
        brief: 'Causes vasodilation and reduces afterload. Also has a negative inotropic effect, reducing myocardial contractility.',
        target: { name: "L-type Ca²⁺ channels (vascular smooth muscle)", action: "blocker", result: "Vasodilation, ↓ afterload, ↓ contractility", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "SVT (Paroxysmal Supraventricular Tachycardia)" }
    ],
    contraindications: [
      { text: "Severe hypotension (SBP <90 mmHg) or cardiogenic shock" },
      { text: "Severe LV dysfunction or decompensated heart failure" },
      { text: "Sick sinus syndrome (without pacemaker)" },
      { text: "Second- or third-degree AV block (without pacemaker)" },
      { text: "Atrial flutter/fibrillation with accessory bypass tract (WPW, LGL)" },
      { text: "Wide-complex tachycardia (QRS ≥0.12 sec)" },
      { text: "Concurrent or recent IV beta-blocker therapy" },
      { text: "Use in infants" },
      { text: "Hypersensitivity" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "3-5 min (IV)",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV"],
            amount: "2.5-5 mg",
            repeat: "May repeat 5-10 mg in 15-30 min if no response",
            maxDose: "20 mg total",
            notes: [
              "Slow IV push over at least 2 min",
              "Continuous ECG and BP monitoring required"
            ]
          }
        ],
        notes: ["Second-line after adenosine for hemodynamically stable narrow-complex SVT"]
      },
      {
        population: "Pediatric",
        qualifier: "≥1 yr (NOT infants)",
        onset: "3-5 min (IV)",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV"],
            amount: "0.1 mg/kg",
            maxDose: "5 mg/dose",
            repeat: "May repeat 0.1-0.2 mg/kg (max 10 mg) in 30 min",
            notes: ["Slow IV push over at least 2 min"]
          }
        ],
        notes: [
          "NASEMSO: may be considered as alternative SVT therapy in older children, should NOT be routinely used in infants",
          "Contraindicated in infants - rare reports of fatal asystole and cardiovascular collapse"
        ]
      }
    ],
    adverseEffects: [
      "Hypotension",
      "Bradycardia",
      "AV block (first-, second-, third-degree)",
      "Dizziness",
      "Nausea",
      "Constipation (chronic use)",
      "Heart failure exacerbation",
      "Asystole (rare, primarily infants)"
    ],
    precautions: [
      '<span class="hl hl--danger">NEVER give to infants</span> - rare but documented cases of fatal asystole and cardiovascular collapse. NASEMSO explicitly warns against routine use in infants.',
      '<span class="hl hl--danger">NEVER give IV verapamil with or shortly after IV beta-blockers</span> - the combination can cause profound bradycardia, AV block, and cardiovascular collapse.',
      '<span class="hl hl--danger">Do NOT use for wide-complex tachycardia</span> - if the rhythm is actually VT misidentified as SVT, verapamil will cause hemodynamic collapse. When in doubt, treat as VT.',
      '<span class="hl hl--danger">Avoid in WPW with atrial fibrillation/flutter</span> - blocking the AV node forces conduction exclusively down the accessory pathway, which can accelerate the ventricular rate and degenerate into VF. Use amiodarone or procainamide instead.',
      '<span class="hl hl--warn">Negative inotrope</span> - reduces myocardial contractility. Avoid in patients with severe LV dysfunction or CHF. Diltiazem has less negative inotropy and is often preferred.',
      'Have <strong>calcium chloride or calcium gluconate</strong> at the bedside - IV calcium can reverse verapamil-induced hypotension without diminishing the antiarrhythmic effect.',
      '<span class="hl hl--warn">CCB overdose</span> is a toxicological emergency - treatment includes IV calcium, glucagon, high-dose insulin with dextrose, vasopressors, and potentially lipid emulsion therapy. See NASEMSO CCB Poisoning guideline.',
      'In most EMS systems, <strong>diltiazem</strong> is preferred over verapamil for calcium channel blocker-based SVT management due to its more predictable hemodynamic profile and less negative inotropy.'
    ]
  },
  {
    id: "propofol",
    summary: "A rapid-onset, ultra-short-acting IV sedative-hypnotic used for RSI induction and post-intubation sedation. Provides amnesia and reduces ICP but causes dose-dependent hypotension.",
    genericName: "Propofol",
    tradeNames: ["Diprivan"],
    category: ["Sedation & Anesthesia"],
    classes: ["Sedative", "Hypnotic", "Induction Agent"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Potentiates and directly activates the GABA-A receptor, increasing chloride conductance and producing rapid sedation, amnesia, and unconsciousness. Also reduces cerebral metabolic rate and intracranial pressure.',
        target: { name: "GABA-A receptors", action: "enhancer", result: "Sedation, amnesia, ↓ ICP", system: "GABAergic" }
      }
    ],
    indications: [
      { name: "RSI Induction" },
      { name: "Post-Intubation Sedation" }
    ],
    contraindications: [
      { text: "Hypersensitivity to propofol or any emulsion component" },
      { text: "Hemodynamic instability / Shock (use reduced dose or alternative agent)", relative: true }
    ],
    doses: [
      // ── RSI Induction ─────────────────────────────────
      {
        population: "Adult",
        indication: "RSI Induction",
        onset: "15-45 sec",
        duration: "5-10 min",
        routes: [
          {
            via: ["IV"],
            amount: "1.5-2 mg/kg",
            notes: [
              "Rapid IV push",
              "Reduce to 0.5-1 mg/kg in hemodynamically compromised, elderly, or hypovolemic patients"
            ]
          }
        ],
        notes: [
          "Preferred when rapid neurological reassessment is needed (short duration allows wake-up) or in status epilepticus",
          "Avoid or dose-reduce in shock - propofol causes more post-intubation hypotension than ketamine or etomidate"
        ]
      },
      {
        population: "Pediatric",
        qualifier: "≥3 yrs",
        indication: "RSI Induction",
        onset: "15-45 sec",
        duration: "5-10 min",
        routes: [
          {
            via: ["IV"],
            amount: "2.5-3.5 mg/kg",
            notes: ["Higher mg/kg requirement in children due to larger volume of distribution"]
          }
        ],
        notes: []
      },

      // ── Post-Intubation Sedation ──────────────────────
      {
        population: "Adult",
        indication: "Post-Intubation Sedation",
        onset: "1-2 min (infusion titration)",
        duration: "Duration of infusion; wears off 5-10 min after stopping",
        routes: [
          {
            via: ["IV drip"],
            amount: "5-80 mcg/kg/min",
            notes: [
              "Start low (5-10 mcg/kg/min) and titrate to RASS target",
              "Typical maintenance: 25-50 mcg/kg/min"
            ]
          }
        ],
        notes: [
          "Propofol provides NO analgesia - always pair with fentanyl or another opioid for pain management",
          "Preferred over benzodiazepines for ICU sedation per PADIS 2018 guidelines (less delirium, shorter ventilator time)"
        ]
      }
    ],
    adverseEffects: [
      "Hypotension (dose-dependent - decreases preload, afterload, and contractility)",
      "Respiratory depression / Apnea",
      "Bradycardia",
      "Pain on injection",
      "Propofol-Related Infusion Syndrome (PRIS) - with prolonged high-dose use",
      "Hypertriglyceridemia (lipid emulsion)",
      "Green-tinged urine (harmless)"
    ],
    precautions: [
      '<span class="hl hl--danger">Causes dose-dependent hypotension</span> - propofol reduces preload (venodilation), afterload (vasodilation), and contractility simultaneously. In hypovolemic, septic, or elderly patients, this can cause cardiovascular collapse. Use ketamine or etomidate instead in shock.',
      '<span class="hl hl--danger">No analgesic properties</span> - propofol only provides sedation and amnesia. An intubated patient on a propofol drip still feels pain. Always combine with an analgesic (fentanyl).',
      '<span class="hl hl--warn">Propofol-Related Infusion Syndrome (PRIS)</span> - a rare but potentially fatal complication of prolonged infusions (&gt;48 hrs) at high doses (&gt;80 mcg/kg/min). Features: metabolic acidosis, rhabdomyolysis, hyperkalemia, cardiac failure, renal failure. Mortality ~33%. More common in young adults and children.',
      'Formulated in a <strong>lipid emulsion</strong> (soybean oil, egg lecithin, glycerol) - supports microbial growth. Use strict aseptic technique and discard unused drug within 12 hours. Despite the egg/soy components, the American Academy of Allergy states that patients with egg or soy allergies can receive propofol safely.',
      'Highly titratable with rapid offset - <span class="hl hl--beta">sedation wears off within 5-10 min of stopping infusion</span>. This makes propofol ideal when frequent neurological assessment is needed (e.g., TBI, stroke).',
      '<span class="hl hl--warn">Reduces ICP</span> - propofol decreases cerebral metabolic rate and intracranial pressure, making it useful for post-intubation sedation in head-injured patients, provided MAP is maintained.',
      'Has <strong>anticonvulsant</strong> and <strong>antiemetic</strong> properties - can be useful in status epilepticus (both as RSI induction and ongoing sedation) and for patients prone to vomiting.',
      'In most prehospital EMS systems, <strong>ketamine is preferred</strong> over propofol for RSI induction due to hemodynamic stability. Propofol is more commonly encountered in <strong>critical care transport</strong> as a post-intubation sedation drip.'
    ]
  },
  {
    id: "procainamide",
    summary: "A Class Ia antiarrhythmic that slows conduction through both normal and accessory pathways. The drug of choice for stable wide-complex tachycardia and pre-excited atrial fibrillation, requiring slow IV infusion with continuous monitoring.",
    genericName: "Procainamide",
    tradeNames: ["Pronestyl", "Procanbid"],
    category: ["Cardiovascular"],
    classes: ["Class Ia Antiarrhythmic", "Sodium Channel Blocker"],
    source: "Mixed",
    moa: [
      {
        brief: 'Slows conduction velocity through atrial, ventricular, and accessory pathway tissue, increasing refractoriness and prolonging the action potential. Also has some potassium channel blocking activity, which prolongs repolarization and increases the QT interval.',
        target: { name: "Fast Na⁺ channels (cardiac)", action: "blocker", result: "↓ Conduction velocity, ↑ refractoriness, ↑ QRS/QT", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "Stable Wide-Complex Tachycardia" },
      { name: "Pre-Excited AF (WPW)" },
      { name: "Refractory SVT" }
    ],
    contraindications: [
      { text: "Complete heart block" },
      { text: "Second- or third-degree AV block" },
      { text: "Systemic lupus erythematosus (SLE)" },
      { text: "Torsades de pointes" },
      { text: "QT prolongation", relative: true },
      { text: "Decompensated heart failure", relative: true },
      { text: "Hypersensitivity to procainamide" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Stable Wide-Complex Tachycardia",
        onset: "Gradual (during loading infusion)",
        duration: "Duration of maintenance infusion; half-life 2.5-5 hrs",
        routes: [
          {
            via: ["IV drip"],
            amount: "20 mg/min infusion",
            maxDose: "17 mg/kg total loading dose",
            notes: [
              "Up to 50 mg/min in urgent situations",
              "Follow with maintenance drip: 1-4 mg/min"
            ]
          }
        ],
        notes: [
          "STOP infusion if: arrhythmia suppressed, hypotension occurs, QRS widens >50% from baseline, or max dose (17 mg/kg) reached",
          "Continuous ECG and BP monitoring mandatory throughout loading"
        ]
      },
      {
        population: "Adult",
        indication: "Pre-Excited AF (WPW)",
        onset: "Gradual (during loading infusion)",
        duration: "Duration of maintenance infusion",
        routes: [
          {
            via: ["IV drip"],
            amount: "20-50 mg/min infusion",
            maxDose: "17 mg/kg total loading dose",
            notes: ["Follow with maintenance drip: 1-4 mg/min"]
          }
        ],
        notes: ["Safe in WPW - slows conduction through the accessory pathway itself, unlike AV nodal blockers which are contraindicated"]
      },
      {
        population: "Adult",
        indication: "Refractory SVT",
        onset: "Gradual (during loading infusion)",
        duration: "Duration of maintenance infusion",
        routes: [
          {
            via: ["IV drip"],
            amount: "20 mg/min infusion",
            maxDose: "17 mg/kg total loading dose",
            notes: ["Follow with maintenance drip: 1-4 mg/min"]
          }
        ],
        notes: ["Consider after adenosine and calcium channel blockers have failed per NASEMSO"]
      },
      {
        population: "Pediatric",
        indication: "Stable Wide-Complex Tachycardia",
        onset: "Gradual",
        duration: "Duration of maintenance infusion",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "15 mg/kg",
            maxDose: "100 mg/dose",
            notes: ["Infuse over 30-60 min; do not exceed 100 mg per dose"]
          }
        ],
        notes: ["PALS: consider for wide-complex tachycardia in hemodynamically stable patients; use with extreme caution with other QT-prolonging agents"]
      }
    ],
    adverseEffects: [
      "Hypotension (dose-dependent - from negative inotropy and vasodilation)",
      "QT prolongation → Torsades de pointes",
      "QRS widening",
      "Bradycardia / AV block",
      "Proarrhythmia (may worsen or create new arrhythmias)",
      "Nausea / Vomiting",
      "Lupus-like syndrome (chronic use, 20-30% of patients)"
    ],
    precautions: [
      '<span class="hl hl--danger">Requires slow IV infusion</span> - cannot be pushed. Loading at 20 mg/min to a max of 17 mg/kg takes considerable time (~30-60 min for a typical adult), making procainamide impractical for pulseless arrest. This is its major limitation vs. amiodarone.',
      '<span class="hl hl--danger">Mandatory stop points</span>: stop the infusion immediately if (1) arrhythmia suppressed, (2) hypotension develops, (3) QRS widens &gt;50% from baseline, or (4) max dose of 17 mg/kg reached.',
      '<span class="hl hl--warn">Continuous ECG and BP monitoring</span> are required throughout loading - procainamide prolongs both QRS and QT and can itself cause new arrhythmias including torsades.',
      '<span class="hl hl--beta">Key advantage in WPW</span> - procainamide slows conduction through accessory pathways directly, making it one of the few safe options for pre-excited atrial fibrillation. AV nodal blockers (adenosine, diltiazem, verapamil, beta-blockers) are <strong>contraindicated</strong> in this setting.',
      'The <strong>PROCAMIO trial</strong> (2017) demonstrated procainamide was superior to amiodarone for stable monomorphic VT, with better arrhythmia termination rates and fewer cardiac adverse events.',
      'Reduce maintenance infusion by one-third in <span class="hl hl--warn">moderate renal or cardiac impairment</span> and by two-thirds in <span class="hl hl--warn">severe impairment</span> - procainamide and its active metabolite NAPA are renally cleared.',
      '<span class="hl hl--warn">Avoid combining with other QT-prolonging drugs</span> (amiodarone, sotalol, ondansetron) - additive risk of torsades de pointes.',
      'Chronic oral use (outside EMS Scope) causes a reversible lupus-like syndrome in 20-30% of patients - not a prehospital concern but important background knowledge.'
    ]
  },
  {
    id: "promethazine",
    summary: "A first-generation antihistamine and phenothiazine used as an antiemetic, sedative, and antipruritic, often combined with opioids to potentiate analgesia and reduce nausea.",
    genericName: "Promethazine",
    tradeNames: ["Phenergan"],
    category: ["Nausea & Vomiting", "Allergic & Immune"],
    classes: ["Antihistamine", "Antiemetic", "Phenothiazine", "Sedative"],
    source: "Mixed",
    moa: [
      {
        brief: 'Produces antihistamine and sedative effects centrally and peripherally. Blocks dopamine in the chemoreceptor trigger zone and vestibular apparatus, making it a potent antiemetic. Additional anticholinergic and alpha-adrenergic blocking activity.',
        target: { name: "H1 / D2 / muscarinic receptors", action: "antagonist", result: "Antiemesis, sedation, antihistamine", system: "histaminergic" }
      }
    ],
    indications: [
      { name: "Nausea & Vomiting" }
    ],
    contraindications: [
      { text: "Children < 2 years old (FDA black box - fatal respiratory depression)" },
      { text: "Subcutaneous injection (causes tissue necrosis)" },
      { text: "Hypersensitivity to promethazine or phenothiazines" },
      { text: "Comatose patients or severe CNS depression" },
      { text: "Concurrent use with haloperidol or droperidol (additive QT prolongation)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "3-5 min (IV); 10-20 min (IM)",
        duration: "4-12 hrs",
        routes: [
          {
            via: ["IM"],
            amount: "12.5-25 mg",
            repeat: "May repeat q4-6 hrs PRN",
            notes: ["Deep IM injection only - FDA preferred route", "Anterolateral thigh or deltoid"]
          },
          {
            via: ["IV"],
            amount: "6.25-12.5 mg",
            notes: [
              "Dilute in 10-20 mL NS and infuse slowly over 10-15 min through a large-bore vein",
              "Max IV rate: 25 mg/min",
              "STOP immediately if patient reports burning or pain at injection site"
            ]
          }
        ],
        notes: [
          "NOT included in NASEMSO's recommended antiemetic protocol - ondansetron, metoclopramide, prochlorperazine, and droperidol are preferred",
          "If using IV route, start with half the usual dose (6.25-12.5 mg) to minimize tissue damage risk"
        ]
      },
      {
        population: "Pediatric",
        qualifier: "≥2 yrs only",
        onset: "10-20 min (IM)",
        duration: "4-12 hrs",
        routes: [
          {
            via: ["IM"],
            amount: "0.25-0.5 mg/kg",
            maxDose: "25 mg/dose",
            notes: ["Deep IM only - avoid IV in pediatrics"]
          }
        ],
        notes: ["Use lowest effective dose; avoid in children with possible Reye syndrome or hepatic disease"]
      }
    ],
    adverseEffects: [
      "Severe tissue necrosis / Gangrene (injection - all routes)",
      "Sedation / Drowsiness (pronounced)",
      "Respiratory depression",
      "Hypotension",
      "QT prolongation",
      "Anticholinergic effects (dry mouth, urinary retention, blurred vision)",
      "Extrapyramidal symptoms / Dystonia",
      "Neuroleptic malignant syndrome (rare)"
    ],
    precautions: [
      '<span class="hl hl--danger">FDA Black Box #1 - Tissue Injury</span>: Promethazine injection can cause severe tissue necrosis, gangrene, and amputation regardless of route. ISMP discourages all injectable promethazine. If IV is used: dilute, infuse slowly over 10-15 min through a large-bore vein (not hand or wrist), and stop immediately if burning/pain occurs.',
      '<span class="hl hl--danger">FDA Black Box #2 - Pediatric Respiratory Depression</span>: Contraindicated in children &lt;2 years. Fatal respiratory depression has been reported. Use lowest effective dose in children ≥2 yrs and avoid concurrent respiratory depressants.',
      '<span class="hl hl--danger">NEVER give subcutaneously</span> - chemical irritant properties cause guaranteed tissue damage.',
      '<span class="hl hl--warn">High anticholinergic burden</span> - promethazine has one of the highest anticholinergic activity scores among common medications. Avoid in elderly patients (AGS Beers Criteria) due to risk of confusion, falls, urinary retention, and cognitive impairment.',
      '<span class="hl hl--warn">Potentiates CNS depressants</span> - when combined with opioids, reduce the opioid dose by 25-50%. Additive respiratory depression and sedation with benzodiazepines, alcohol, and other sedatives.',
      'NASEMSO does not include promethazine in its antiemetic recommendations. Per NASEMSO, <span class="hl hl--warn">do not use with haloperidol or droperidol</span> due to additive QT prolongation; ondansetron has less seizure risk.',
      'Antiemetic effect may <span class="hl hl--warn">mask symptoms</span> of serious underlying conditions (bowel obstruction, increased ICP, drug overdose) - maintain vigilance for the primary disease process.',
      'Many EMS systems are removing promethazine from formularies in favor of <strong>ondansetron</strong> (safer, no tissue necrosis risk, fewer drug interactions, less sedation).'
    ]
  },
  {
    id: "pralidoxime",
    summary: "Reactivates acetylcholinesterase after organophosphate or nerve agent poisoning, reversing the nicotinic effects that atropine cannot. Must be given before the enzyme bond ages and becomes irreversible.",
    genericName: "Pralidoxime Chloride (2-PAM)",
    tradeNames: ["Protopam", "DuoDote", "Mark I Kit", "ATNAA"],
    category: ["Toxicology"],
    classes: ["Antidote"],
    source: "Mixed",
    moa: [
      {
        brief: 'Displaces the organophosphate from the enzyme\'s active site, reactivating acetylcholinesterase and restoring normal acetylcholine breakdown at nicotinic junctions. The organophosphate-pralidoxime complex is then excreted renally. Must be given before the enzyme bond ages and becomes irreversible.',
        target: { name: "Organophosphate-inhibited AChE", action: "antagonist", result: "Reactivates AChE, reverses nicotinic toxicity", system: "cholinergic" }
      }
    ],
    indications: [
      { name: "Organophosphate / Nerve Agent Poisoning" }
    ],
    contraindications: [
      { text: "Hypersensitivity (no absolute contraindications in confirmed OP/nerve agent poisoning - benefits always outweigh risks)" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "10-40 min (IV)",
        duration: "1-2 hrs (repeat or infuse to maintain levels)",
        routes: [
          {
            via: ["IV"],
            amount: "1-2 g (or 30 mg/kg)",
            repeat: "May repeat in 1 hr if symptoms persist",
            notes: [
              "Infuse over 15-30 min - rapid IV push can cause cardiac/respiratory arrest",
              "Follow with maintenance infusion: 8 mg/kg/hr (or 500 mg/hr)"
            ]
          },
          {
            via: ["IM"],
            amount: "600 mg per auto-injector",
            maxDose: "3 auto-injectors (1,800 mg) unless medical care available",
            notes: [
              "DuoDote/ATNAA: each auto-injector delivers atropine 2.1 mg + pralidoxime 600 mg IM sequentially through one needle",
              "Mild symptoms: 1 auto-injector; Severe symptoms: 3 auto-injectors rapidly"
            ]
          }
        ],
        notes: ["Always administer WITH atropine - pralidoxime reverses nicotinic effects (paralysis), atropine reverses muscarinic effects (DUMBELS/SLUDGE)"]
      },
      {
        population: "Pediatric",
        onset: "10-40 min (IV)",
        duration: "1-2 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "20-50 mg/kg",
            repeat: "May repeat in 1 hr",
            notes: ["Infuse over 15-30 min"]
          },
          {
            via: ["IM"],
            amount: "15 mg/kg",
            notes: ["DuoDote auto-injectors approved for patients ≥41 kg (90 lbs)"]
          }
        ],
        notes: ["Pralidoxime has a longer half-life in children; maintenance dosing may need less frequent adjustment"]
      }
    ],
    adverseEffects: [
      "Hypertension",
      "Tachycardia",
      "Blurred vision / Diplopia",
      "Headache / Dizziness",
      "Nausea / Vomiting",
      "Muscle rigidity (transient)",
      "Cardiac arrest / Respiratory arrest (with rapid IV push)"
    ],
    precautions: [
      '<span class="hl hl--danger">TIME-CRITICAL - administer ASAP before "aging"</span>. After phosphorylation of AChE, a conformational change ("aging") makes the bond permanent and irreversible. Aging rates vary by agent: soman ages in <strong>minutes</strong>, sarin in <strong>hours</strong>, VX in <strong>days</strong>, insecticide OPs in <strong>hours to days</strong>. Once aged, pralidoxime is useless.',
      '<span class="hl hl--danger">Always give WITH atropine</span> - pralidoxime primarily reverses <strong>nicotinic</strong> effects (skeletal muscle paralysis, fasciculations, respiratory muscle weakness). Atropine reverses <strong>muscarinic</strong> effects (bronchorrhea, bronchospasm, salivation, bradycardia). Neither drug alone is sufficient.',
      '<span class="hl hl--danger">Infuse IV slowly over 15-30 min</span> - rapid IV push causes hypertension, tachycardia, muscle rigidity, and can precipitate cardiac or respiratory arrest.',
      'Pralidoxime does NOT cross the blood-brain barrier well - it <span class="hl hl--warn">cannot reverse CNS effects</span> (seizures, coma). Benzodiazepines (diazepam, midazolam) are used for nerve agent seizures.',
      '<span class="hl hl--warn">Limited effectiveness against carbamates</span> - carbamate-AChE bonds spontaneously hydrolyze (half-life 1-2 hrs), so pralidoxime is less critical. However, mixed OP/carbamate exposure is common, so treat empirically.',
      'Pralidoxime may <span class="hl hl--warn">worsen carbaryl (Sevin) poisoning</span> if given without atropine - always co-administer.',
      '<span class="hl hl--beta">DuoDote / Mark I kits</span> are part of the CHEMPACK program and are the standard prehospital delivery system. Each auto-injector delivers both atropine and pralidoxime in one injection - designed for rapid field use during mass casualty nerve agent events.',
      'The three-drug regimen for OP/nerve agent poisoning is: <strong>Atropine</strong> (muscarinic), <strong>Pralidoxime</strong> (nicotinic), <strong>Benzodiazepine</strong> (seizures). All three may be needed simultaneously in severe exposure.'
    ]
  },
  {
    id: "potassium-chloride",
    summary: "The standard electrolyte replacement for hypokalemia and an ISMP high-alert medication where accidental rapid IV push is lethal. Primarily a hospital drug but critical for CCT paramedics managing existing KCl drips.",
    genericName: "Potassium Chloride (KCl)",
    tradeNames: ["Klor-Con", "K-Dur", "Micro-K"],
    category: ["Endocrine & Metabolic"],
    classes: [],
    source: "StatPearls",
    moa: [
      {
        brief: 'Replaces potassium deficit, restoring the normal transmembrane electrochemical gradient. Normalizes cardiac conduction, skeletal muscle contractility, and nerve impulse transmission. Even small changes in extracellular potassium dramatically affect membrane excitability.',
        target: { name: "Cellular membrane potential", action: "restorer", result: "Normalized cardiac conduction and muscle function", system: "other" }
      }
    ],
    indications: [
      { name: "Hypokalemia" }
    ],
    contraindications: [
      { text: "Hyperkalemia" },
      { text: "Renal failure (inability to excrete potassium)" },
      { text: "Concurrent potassium-sparing diuretics (spironolactone, triamterene)" },
      { text: "Untreated Addison disease" },
      { text: "Hypersensitivity to any component" }
    ],
    doses: [
      // ── Routine Repletion ─────────────────────────────
      {
        population: "Adult",
        indication: "Hypokalemia",
        qualifier: "K⁺ 2.5-3.5 mEq/L",
        onset: "Gradual (effect measurable within 1-2 hrs of infusion)",
        duration: "Duration of replacement; ongoing monitoring required",
        routes: [
          {
            via: ["IV drip"],
            amount: "10-20 mEq/hr",
            maxDose: "200 mEq/24 hrs",
            notes: [
              "Max concentration 40 mEq/L via peripheral line",
              "Dilute in glucose-free fluids (NS or LR) - glucose stimulates insulin and drives K⁺ into cells"
            ]
          }
        ],
        notes: [
          "Rule of thumb: each 10 mEq KCl raises serum K⁺ by approximately 0.1 mEq/L",
          "Oral replacement preferred when possible - slower absorption reduces hyperkalemia risk"
        ]
      },

      // ── Severe / Symptomatic ──────────────────────────
      {
        population: "Adult",
        indication: "Hypokalemia",
        qualifier: "K⁺ <2.5 mEq/L or symptomatic (arrhythmia, paralysis, respiratory failure)",
        onset: "Minutes (IV bolus); gradual (infusion)",
        duration: "Duration of replacement",
        routes: [
          {
            via: ["IV drip"],
            amount: "20-40 mEq/hr",
            maxDose: "400 mEq/24 hrs in selected cases",
            notes: [
              "Central line required for rates >10 mEq/hr",
              "Continuous ECG monitoring mandatory",
              "Can split into two 10 mEq/hr infusions through two separate peripheral lines if central access unavailable"
            ]
          }
        ],
        notes: [
          "For life-threatening arrhythmias: 5-10 mEq IV over 15-30 min as initial emergency dose, then reassess",
          "Check serum K⁺ every 2-4 hrs during aggressive repletion"
        ]
      },

      // ── Pediatric ─────────────────────────────────────
      {
        population: "Pediatric",
        indication: "Hypokalemia",
        onset: "Gradual",
        duration: "Duration of replacement",
        routes: [
          {
            via: ["IV drip"],
            amount: "0.5-1 mEq/kg/hr",
            maxDose: "2-3 mEq/kg/24 hrs",
            notes: [
              "Central line and continuous ECG monitoring for rates >0.5 mEq/kg/hr",
              "Max peripheral concentration: 40 mEq/L"
            ]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Hyperkalemia → Cardiac arrest (primary lethal risk)",
      "Phlebitis / Vein sclerosis (peripheral infusion)",
      "Pain at infusion site",
      "Nausea / Vomiting / Diarrhea (oral)",
      "GI ulceration / Stenosis (oral tablets)",
      "Tissue necrosis (extravasation of concentrated solutions)"
    ],
    precautions: [
      '<span class="hl hl--danger">ISMP HIGH-ALERT MEDICATION</span> - concentrated KCl is one of the most dangerous drugs in any formulary. Accidental rapid IV push of undiluted KCl causes immediate fatal hyperkalemia and cardiac arrest. This is a repeatedly documented lethal medication error. Concentrated KCl should never be stored on nursing units outside of critical care.',
      '<span class="hl hl--danger">NEVER give as IV push</span> - potassium chloride must always be diluted and infused at controlled rates. Even in emergencies, the fastest safe rate is 10-20 mEq over 15-30 min with continuous ECG monitoring.',
      '<span class="hl hl--warn">Max 40 mEq/L via peripheral IV</span> - higher concentrations cause severe phlebitis, vein sclerosis, and pain. Central line access is required for concentrations exceeding 40 mEq/L or infusion rates exceeding 10 mEq/hr.',
      '<span class="hl hl--warn">Continuous ECG monitoring</span> required for rates &gt;10 mEq/hr - watch for peaked T waves (early hyperkalemia), widened QRS, and loss of P waves that signal dangerous potassium accumulation.',
      'Use <strong>glucose-free fluids</strong> for dilution - dextrose solutions stimulate insulin release, which shifts potassium intracellularly and can paradoxically worsen hypokalemia.',
      '<span class="hl hl--warn">Always check magnesium</span> - hypomagnesemia makes hypokalemia refractory to potassium replacement. If K⁺ is not correcting despite adequate replacement, treat magnesium first (1-2 g MgSO₄ IV).',
      'Hypokalemia ECG changes to recognize: <strong>flattened T waves → U waves → ST depression → QT prolongation → arrhythmias</strong>. Hyperkalemia ECG changes (from overcorrection): <strong>peaked T waves → widened QRS → sine wave → asystole/VF</strong>.',
      'Not a standard prehospital medication - primarily relevant for <strong>critical care transport</strong> paramedics inheriting patients on KCl drips and for recognizing hypokalemia as a reversible cause of cardiac arrest (the "H" in H\'s and T\'s).'
    ]
  },
  {
    id: "oxytocin",
    summary: "A synthetic uterine stimulant given after delivery to prevent and treat postpartum hemorrhage.",
    genericName: "Oxytocin",
    tradeNames: ["Pitocin"],
    category: ["OB/GYN"],
    classes: ["Hormone"],
    source: "Mixed",
    moa: [
      {
        brief: 'Stimulates rhythmic contractions of the upper uterine segment, mechanically compressing spiral arteries to achieve hemostasis. This is the first-line treatment for postpartum hemorrhage caused by uterine atony.',
        target: { name: "Oxytocin receptors (myometrium)", action: "agonist", result: "Uterine contraction, ↓ uterine blood flow", system: "other" }
      }
    ],
    indications: [
      { name: "Postpartum Hemorrhage Prevention & Treatment" }
    ],
    contraindications: [
      { text: "Prior to delivery of the infant (prehospital context - risk of uterine rupture)" },
      { text: "Hypersensitivity to oxytocin" },
      { text: "Conditions where vaginal delivery is contraindicated (e.g., cord prolapse, transverse lie, total placenta previa)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Postpartum Hemorrhage Prevention & Treatment",
        onset: "3-5 min (IM); immediate (IV infusion)",
        duration: "2-3 hrs (IM); ~60 min after stopping IV",
        routes: [
          {
            via: ["IM"],
            amount: "10 IU (units)",
            notes: [
              "Preferred prehospital route - simple, no IV pump required",
              "Inject into deltoid or anterolateral thigh"
            ]
          },
          {
            via: ["IV drip"],
            amount: "10-40 IU in 1,000 mL NS or LR",
            notes: [
              "Run at 125-250 mL/hr (titrate to uterine tone)",
              "More titratable than IM - can adjust rate based on bleeding"
            ]
          }
        ],
        notes: [
          "NASEMSO: recommended following ALL deliveries; emphasized if postpartum hemorrhage occurs",
          "Administer during or after delivery of the placenta (third stage of labor)",
          "Combine with fundal massage - mechanical and pharmacologic management together"
        ]
      }
    ],
    adverseEffects: [
      "Hypotension (especially with rapid IV bolus)",
      "Tachycardia / Arrhythmias",
      "Nausea / Vomiting",
      "Water intoxication / Hyponatremia (antidiuretic effect with prolonged infusion)",
      "Uterine hyperstimulation / Rupture (if given before delivery)",
      "Headache"
    ],
    precautions: [
      '<span class="hl hl--danger">Do NOT give before delivery of the infant</span> - oxytocin given during labor can cause uterine hyperstimulation, rupture, fetal distress, and maternal/fetal death. In prehospital EMS, oxytocin is ONLY given after delivery.',
      '<span class="hl hl--danger">Never give as rapid undiluted IV push</span> - bolus IV oxytocin causes severe hypotension, tachycardia, arrhythmias, and myocardial ischemia. Always dilute in IV fluid and infuse, or give IM.',
      '<span class="hl hl--warn">Water intoxication risk</span> - oxytocin has antidiuretic (ADH-like) effects at high doses or prolonged infusions. Can cause hyponatremia → seizures → coma. More relevant to hospital settings with prolonged infusions.',
      'Oxytocin receptor sensitivity varies significantly between patients - women who received <span class="hl hl--warn">prolonged oxytocin augmentation during labor</span> may have downregulated receptors and respond poorly to postpartum oxytocin. Consider second-line uterotonics early in these patients.',
      'If oxytocin fails to control bleeding, the <strong>second-line uterotonics</strong> are: methylergonovine (Methergine) 0.2 mg IM (avoid in hypertension), carboprost (Hemabate) 0.25 mg IM (avoid in asthma), or misoprostol (Cytotec) 600-1000 mcg PR/SL.',
      '<span class="hl hl--warn">PPH management triad</span>: fundal massage + oxytocin + TXA. NASEMSO also recommends considering tranexamic acid for postpartum hemorrhage.',
      'The <strong>4 T\'s of PPH</strong> - Tone (uterine atony, 70-80%), Trauma (lacerations), Tissue (retained placenta), Thrombin (coagulopathy). Oxytocin only addresses Tone; if bleeding persists with a firm uterus, evaluate for the other causes.',
      'Available as 10 IU/mL vials - store at room temperature. Plasma half-life is only 1-6 minutes, which is why continuous infusion or IM depot is necessary for sustained effect.'
    ]
  },
  {
    id: "hydroxyzine",
    summary: "A first-generation antihistamine with anxiolytic, antiemetic, and antipruritic properties. Used in some EMS systems as a non-benzodiazepine option for anxiety and as an opioid adjunct.",
    genericName: "Hydroxyzine",
    tradeNames: ["Vistaril", "Atarax"],
    category: ["Nausea & Vomiting", "Allergic & Immune"],
    classes: ["Antihistamine", "Antiemetic"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Blocks histamine peripherally for antipruritic effects and centrally for sedation. Suppresses subcortical CNS activity, producing anxiolysis without cortical depression. Metabolized to cetirizine (Zyrtec), an active second-generation antihistamine.',
        target: { name: "H1 receptors / Subcortical CNS", action: "antagonist", result: "Sedation, anxiolysis, antiemesis, antipruritus", system: "histaminergic" }
      }
    ],
    indications: [
      { name: "Anxiety / Agitation" },
      { name: "Nausea & Vomiting" },
      { name: "Pruritus / Allergic Reactions" }
    ],
    contraindications: [
      { text: "Prolonged QT interval" },
      { text: "Hypersensitivity to hydroxyzine or cetirizine" },
      { text: "Early pregnancy" },
      { text: "IV administration (tissue necrosis, hemolysis, thrombosis)" }
    ],
    doses: [
      // ── Anxiety / Agitation ───────────────────────────
      {
        population: "Adult",
        indication: "Anxiety / Agitation",
        onset: "15-30 min (IM and PO)",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IM"],
            amount: "50-100 mg",
            repeat: "May repeat q4-6 hrs PRN",
            notes: ["Deep IM only - NEVER IV or SQ"]
          },
          {
            via: ["PO"],
            amount: "25-50 mg",
            repeat: "q6 hrs PRN",
            notes: []
          }
        ],
        notes: ["Useful for acute agitation when benzodiazepines are undesirable (e.g., respiratory concerns, COPD, elderly with fall risk from excessive sedation)"]
      },

      // ── Nausea & Vomiting ─────────────────────────────
      {
        population: "Adult",
        indication: "Nausea & Vomiting",
        onset: "15-30 min",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IM"],
            amount: "25-50 mg",
            repeat: "q4-6 hrs PRN",
            notes: ["Deep IM only"]
          }
        ],
        notes: ["Not a first-line prehospital antiemetic - ondansetron is preferred"]
      },

      // ── Pruritus / Allergic ───────────────────────────
      {
        population: "Adult",
        indication: "Pruritus / Allergic Reactions",
        onset: "15-30 min",
        duration: "4-6 hrs (sedation); up to 24+ hrs (antihistamine effect)",
        routes: [
          {
            via: ["IM"],
            amount: "25-50 mg",
            notes: ["Deep IM only"]
          },
          {
            via: ["PO"],
            amount: "25 mg",
            repeat: "q6-8 hrs PRN",
            notes: []
          }
        ],
        notes: ["Most efficacious first-generation antihistamine for wheal-and-flare suppression"]
      },

      // ── Pediatric ─────────────────────────────────────
      {
        population: "Pediatric",
        onset: "15-30 min",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IM"],
            amount: "1.1 mg/kg",
            maxDose: "100 mg/dose",
            notes: ["Deep IM only"]
          },
          {
            via: ["PO"],
            amount: "0.5-1 mg/kg",
            maxDose: "50 mg/dose",
            repeat: "q6-8 hrs",
            notes: []
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Sedation / Drowsiness (pronounced)",
      "Dry mouth",
      "QT prolongation → Torsades de pointes",
      "Dizziness / Headache",
      "Constipation",
      "Urinary retention",
      "Blurred vision",
      "Injection site pain / Abscess (IM)",
      "Agitation (paradoxical, especially in elderly)"
    ],
    precautions: [
      '<span class="hl hl--danger">NEVER give IV</span> - hydroxyzine causes thrombosis, tissue necrosis, hemolysis, and gangrene when administered intravenously. The ONLY parenteral route is deep IM. This is different from diphenhydramine, which can be given IV.',
      '<span class="hl hl--warn">QT prolongation</span> - hydroxyzine is contraindicated in patients with prolonged QT interval. Use caution with other QT-prolonging drugs (ondansetron, amiodarone, droperidol, haloperidol). Risk increases with doses &gt;recommended range.',
      '<span class="hl hl--warn">Anticholinergic burden</span> - hydroxyzine is flagged on the AGS Beers Criteria for elderly patients. High anticholinergic activity causes confusion, falls, urinary retention, and cognitive impairment. Avoid in the elderly when possible.',
      '<span class="hl hl--beta">Key advantage: minimal respiratory depression</span> - unlike benzodiazepines, hydroxyzine at therapeutic doses does not significantly depress respiration. This makes it useful for anxiolysis in patients where respiratory depression is a concern.',
      'Metabolized hepatically to <strong>cetirizine</strong> (Zyrtec) - the active metabolite responsible for much of the antihistamine effect. Cetirizine has a half-life of ~20 hrs, meaning antihistamine effects persist long after sedation wears off.',
      '<span class="hl hl--warn">Potentiates CNS depressants</span> - when combined with opioids, sedation is additive. Reduce opioid doses if co-administering. A prehospital RCT found that adding hydroxyzine to IV morphine did not significantly improve pain or anxiety scores.',
      'Not in NASEMSO\'s recommended formulary - included because some EMS systems still carry it as an <strong>anxiolytic adjunct</strong>, <strong>opioid potentiator</strong>, or <strong>antipruritic</strong> for allergic reactions.',
      'Two formulations exist: <strong>HCl</strong> (Atarax - oral only) and <strong>pamoate</strong> (Vistaril - IM and oral). The pamoate salt is the injectable form used in EMS.'
    ]
  },
  {
    id: "hydroxocobalamin",
    summary: "The preferred prehospital cyanide antidote. A vitamin B12a precursor that chelates cyanide to form nontoxic cyanocobalamin, safe in mixed smoke inhalation where CO poisoning coexists because it does not cause methemoglobinemia.",
    genericName: "Hydroxocobalamin",
    tradeNames: ["Cyanokit"],
    category: ["Toxicology"],
    classes: ["Antidote"],
    source: "Mixed",
    moa: [
      {
        brief: 'Binds cyanide in a 1:1 stoichiometric reaction, forming cyanocobalamin (vitamin B12), a nontoxic compound that is renally excreted. This directly removes cyanide from cytochrome oxidase, restoring aerobic cellular respiration.',
        target: { name: "Free cyanide ions", action: "chelator", result: "Converts CN⁻ to cyanocobalamin → renal excretion", system: "other" }
      }
    ],
    indications: [
      { name: "Cyanide Poisoning" }
    ],
    contraindications: [
      { text: "Documented hypersensitivity (do NOT withhold in suspected cyanide poisoning - benefits far outweigh risks)" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Cyanide Poisoning",
        onset: "Rapid (during infusion)",
        duration: "Half-life alpha 0.5 hr, beta 2.8 hrs",
        routes: [
          {
            via: ["IV drip"],
            amount: "5 g",
            repeat: "May repeat 5 g x1 (total max 10 g) with medical consultation",
            notes: [
              "Reconstitute 5 g vial with 200 mL NS, LR, or D5W (yields 25 mg/mL)",
              "Infuse at 10-15 mL/min (over ~15 min)",
              "Second dose infusion rate: 15 min to 2 hrs based on severity"
            ]
          }
        ],
        notes: [
          "NASEMSO: preferred agent for cyanide exposure",
          "Draw blood sample for lactate and cyanide levels BEFORE administration if feasible - drug interferes with lab tests"
        ]
      },
      {
        population: "Pediatric",
        indication: "Cyanide Poisoning",
        onset: "Rapid (during infusion)",
        duration: "Half-life alpha 0.5 hr, beta 2.8 hrs",
        routes: [
          {
            via: ["IV drip"],
            amount: "70 mg/kg",
            maxDose: "5 g single dose",
            notes: [
              "Reconstitute to 25 mg/mL (same as adult)",
              "Infuse at 10-15 mL/min"
            ]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Red-orange discoloration of skin, mucous membranes, tears, and urine (chromaturia) - lasts days to weeks",
      "Transient hypertension (13-26% increase in BP)",
      "Reflex bradycardia",
      "Nausea / Headache / Dizziness",
      "Injection site reactions / Infusion site erythema",
      "Allergic reactions (rare - urticaria, angioedema)",
      "Interference with multiple laboratory tests"
    ],
    precautions: [
      '<span class="hl hl--danger">Treat empirically - no waiting for lab confirmation</span>. There is no widely available rapid cyanide blood test. Treat based on clinical history (fire, industrial exposure) and signs (altered mental status, seizures, cardiovascular collapse, severe lactic acidosis with high SpO₂).',
      '<span class="hl hl--warn">Red discoloration is expected, NOT an allergic reaction</span> - NASEMSO explicitly warns that skin, tears, and urine will turn red/burgundy for days to weeks after administration. This is the drug forming cyanocobalamin and is harmless.',
      '<span class="hl hl--warn">Interferes with pulse oximetry and lab tests</span> - SpO₂ readings become unreliable after administration. Also interferes with colorimetric assays for: bilirubin, creatinine, glucose, hemoglobin, and several coagulation tests. Draw blood samples BEFORE giving hydroxocobalamin.',
      '<span class="hl hl--beta">Key advantage over nitrite-based antidotes</span> - hydroxocobalamin does NOT cause methemoglobinemia. The older cyanide antidote kit (amyl nitrite + sodium nitrite + sodium thiosulfate) deliberately induces methemoglobin to bind cyanide, which is dangerous in <strong>smoke inhalation</strong> patients who likely have concurrent CO poisoning. CO already reduces oxygen-carrying capacity; adding methemoglobinemia on top can be fatal.',
      '<span class="hl hl--beta">Hypertension is usually beneficial</span> - cyanide poisoning causes hypotension, so the transient BP increase from hydroxocobalamin is actually therapeutic in most cases.',
      'NASEMSO notes <strong>sodium thiosulfate</strong> (12.5 g IV adult, 0.5 g/kg pediatric) as an alternative when hydroxocobalamin is unavailable. Amyl nitrite and sodium nitrite are no longer used in commercial kits.',
      'In fire/smoke exposure, always <strong>co-administer 100% O₂</strong> - cyanide from combustion of synthetic materials (plastics, carpets, upholstery) frequently coexists with carbon monoxide. High-flow oxygen treats both.',
      '<span class="hl hl--warn">Reconstitution takes time</span> - the Cyanokit requires mixing a 5 g lyophilized vial with 200 mL diluent. Practice the reconstitution procedure before encountering a real case. Rock or roll the vial (do not shake) for 30 seconds to dissolve.'
    ]
  },
  {
    id: "albuterol",
    summary: "A short-acting beta-2 agonist bronchodilator used for acute bronchospasm. Also shifts potassium intracellularly for hyperkalemia management.",
    genericName: "Albuterol (Salbutamol)",
    tradeNames: ["Proventil", "Ventolin", "ProAir"],
    category: ["Airway & Respiratory"],
    classes: ["Bronchodilator"],
    source: "Mixed",
    moa: [
      {
        brief: 'Relaxes bronchial smooth muscle by increasing intracellular cAMP, producing bronchodilation. Also opens calcium-sensitive potassium channels, causing membrane hyperpolarization and further relaxation.',
        target: { name: "Beta-2 adrenergic receptors (bronchial smooth muscle)", action: "agonist", result: "Bronchodilation", system: "adrenergic" }
      },
      {
        brief: 'Drives potassium intracellularly across skeletal muscle membranes, temporarily reducing serum potassium. This is the mechanism used for hyperkalemia management.',
        target: { name: "Na⁺/K⁺-ATPase (skeletal muscle)", action: "stimulator", result: "Intracellular K⁺ shift, ↓ serum K⁺", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Bronchospasm (Asthma / COPD / Allergic)" },
      { name: "Hyperkalemia" }
    ],
    contraindications: [
      { text: "Hypersensitivity to albuterol" },
      { text: "Tachycardia secondary to cardiac disease (use with caution)" }
    ],
    doses: [
      // ── Bronchospasm ──────────────────────────────────
      {
        population: "Adult",
        indication: "Bronchospasm (Asthma / COPD / Allergic)",
        onset: "<5 min (inhaled)",
        duration: "3-6 hrs",
        routes: [
          {
            via: ["Nebulizer"],
            amount: "2.5-5 mg",
            repeat: "Repeat at 5 mg with UNLIMITED frequency for ongoing respiratory distress",
            notes: [
              "2.5 mg sufficient for mild wheezing without distress",
              "5 mg for all patients in respiratory distress with bronchospasm"
            ]
          },
          {
            via: ["MDI"],
            amount: "6 puffs (90 mcg/puff = 540 mcg)",
            repeat: "Repeat with unlimited frequency for ongoing distress",
            notes: ["Use spacer when available for optimal drug delivery"]
          }
        ],
        notes: [
          "NASEMSO: give ipratropium 0.5 mg nebulized in conjunction with albuterol, up to 3 doses",
          "NASEMSO: administer corticosteroids in the prehospital setting (dexamethasone 0.6 mg/kg PO/IV or methylprednisolone 2 mg/kg IV)"
        ]
      },
      {
        population: "Pediatric",
        indication: "Bronchospasm (Asthma / COPD / Allergic)",
        onset: "<5 min (inhaled)",
        duration: "3-6 hrs",
        routes: [
          {
            via: ["Nebulizer"],
            amount: "2.5-5 mg",
            repeat: "Repeat with unlimited frequency for ongoing respiratory distress",
            notes: ["Same dosing as adults per NASEMSO - weight-based reduction not required for nebulized delivery"]
          },
          {
            via: ["MDI"],
            amount: "4-8 puffs",
            repeat: "Repeat PRN",
            notes: ["Spacer with mask for young children"]
          }
        ],
        notes: [
          "NASEMSO: albuterol and steroids NOT recommended for routine bronchiolitis (RSV) - most recent evidence shows no benefit"
        ]
      },

      // ── Hyperkalemia ──────────────────────────────────
      {
        population: "Adult",
        indication: "Hyperkalemia",
        onset: "15-30 min (for K⁺ shift)",
        duration: "2-4 hrs",
        routes: [
          {
            via: ["Nebulizer"],
            amount: "5 mg (double standard bronchospasm dose)",
            repeat: "May repeat if no response",
            notes: []
          }
        ],
        notes: [
          "NASEMSO: consider albuterol 5 mg nebulized for ECG findings of hyperkalemia",
          "Temporizing measure - shifts K⁺ into cells but does NOT remove it from the body. Pair with calcium (cardioprotection) and sodium bicarbonate when indicated"
        ]
      }
    ],
    adverseEffects: [
      "Tachycardia / Palpitations",
      "Tremor (most common dose-limiting effect)",
      "Nervousness / Restlessness",
      "Hypokalemia",
      "Hyperglycemia",
      "Headache",
      "Paradoxical bronchospasm (rare - discontinue immediately)",
      "QT prolongation (high-dose or repeated dosing)"
    ],
    precautions: [
      '<span class="hl hl--beta">Unlimited frequency dosing</span> - NASEMSO authorizes repeating albuterol 5 mg with unlimited frequency for ongoing respiratory distress. This is intentional: the risk of undertreating severe bronchospasm far exceeds the risk of albuterol side effects. Do not hesitate to redose.',
      'Always give with <strong>ipratropium (Atrovent)</strong> - NASEMSO mandates ipratropium 0.5 mg nebulized with albuterol for up to 3 doses. The combined beta-2 + anticholinergic bronchodilation is synergistic and superior to either agent alone.',
      '<span class="hl hl--warn">Hypokalemia</span> - beta-2 stimulation drives K⁺ intracellularly via Na⁺/K⁺-ATPase. With repeated/continuous dosing, clinically significant hypokalemia can develop. Monitor for weakness, arrhythmias, and ECG changes (flattened T waves, U waves).',
      '<span class="hl hl--warn">Tachycardia is expected</span> - reflex tachycardia from peripheral vasodilation plus direct beta-1 stimulation at higher doses. Use cautiously in patients with underlying tachyarrhythmias or coronary disease, but do NOT withhold in true bronchospasm.',
      '<span class="hl hl--warn">Beta-blockers antagonize albuterol</span> - patients on non-selective beta-blockers (propranolol, carvedilol) may have blunted bronchodilator response. Consider ipratropium as the primary bronchodilator or escalate to IM epinephrine for impending respiratory failure.',
      'For <strong>hyperkalemia</strong>: albuterol is a temporizing shift agent - it moves K⁺ into cells but does not remove it from the body. Always combine with other treatments (calcium for cardioprotection, sodium bicarbonate, insulin/dextrose in hospital).',
      '<span class="hl hl--warn">Not effective for bronchiolitis</span> - NASEMSO specifically notes that recent evidence does NOT support routine albuterol or steroids for bronchiolitis (typically RSV in infants).',
      'Consider adding <strong>nebulizer droplet precautions</strong> - nebulized albuterol generates aerosols that can carry viral particles. NASEMSO recommends additional PPE and consider placing a surgical mask over the nebulizer.'
    ]
  },
  {
    id: "hydralazine",
    summary: "A direct arteriolar vasodilator used for severe hypertension in preeclampsia and hypertensive emergencies. Lowers peripheral resistance without affecting veins but causes reflex tachycardia.",
    genericName: "Hydralazine",
    tradeNames: ["Apresoline"],
    category: ["Cardiovascular"],
    classes: ["Vasodilator", "Antihypertensive"],
    source: "Mixed",
    moa: [
      {
        brief: 'Directly relaxes arteriolar smooth muscle by inhibiting calcium release from the sarcoplasmic reticulum, lowering SVR and blood pressure. Has little to no effect on veins. Triggers compensatory reflex tachycardia and increased cardiac output.',
        target: { name: "Arteriolar smooth muscle (IP3/Ca²⁺ pathway)", action: "inhibitor", result: "Arteriolar vasodilation, ↓ SVR, ↓ BP", system: "other" }
      }
    ],
    indications: [
      { name: "Severe Hypertension with Preeclampsia" }
    ],
    contraindications: [
      { text: "Hypersensitivity to hydralazine" },
      { text: "Coronary artery disease (reflex tachycardia → demand ischemia)" },
      { text: "Mitral valve rheumatic heart disease" },
      { text: "Aortic dissection (reflex tachycardia increases shear stress)", relative: true },
      { text: "Hypotension", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Severe Hypertension with Preeclampsia",
        qualifier: "SBP >160 or DBP >110 lasting >15 min with preeclampsia symptoms",
        onset: "5-20 min (IV)",
        duration: "2-6 hrs (unpredictable; may last up to 12 hrs)",
        routes: [
          {
            via: ["IV"],
            amount: "5 mg",
            repeat: "May repeat 10 mg after 20 min for persistent severe hypertension",
            notes: [
              "Slow IV push",
              "Goal: reduce MAP by 20-25% initially",
              "Target BP approximately 140/90 to maintain uterine perfusion"
            ]
          }
        ],
        notes: [
          "NASEMSO: one of three options - labetalol 20 mg IV OR hydralazine 5 mg IV OR nifedipine 10 mg PO",
          "Give concurrently with magnesium sulfate (4 g IV over 5-10 min, then 2 g/hr) for seizure prophylaxis",
          "Reassess vital signs every 10 min during transport"
        ]
      }
    ],
    adverseEffects: [
      "Reflex tachycardia / Palpitations",
      "Headache (very common)",
      "Flushing",
      "Hypotension (precipitous, unpredictable)",
      "Nausea / Vomiting",
      "Sodium and water retention / Edema",
      "Drug-induced lupus (chronic use - slow acetylators)",
      "Angina exacerbation (in CAD patients)"
    ],
    precautions: [
      '<span class="hl hl--danger">Unpredictable BP response</span> - hydralazine can cause precipitous, prolonged hypotension lasting up to 12 hours. It is harder to titrate than labetalol. Start with the lower 5 mg dose and wait 20 minutes before repeating.',
      '<span class="hl hl--warn">Reflex tachycardia</span> - arteriolar vasodilation triggers baroreceptor-mediated sympathetic activation → increased HR, contractility, and cardiac output. This is why hydralazine is <strong>contraindicated in CAD</strong> (increased myocardial O₂ demand → ischemia) and <strong>aortic dissection</strong> (increased shear stress).',
      '<span class="hl hl--warn">Target BP ~140/90 in preeclampsia</span> - do NOT overcorrect. The goal is to prevent maternal stroke while maintaining uterine perfusion to the fetus. NASEMSO specifies reducing MAP by only 20-25% initially.',
      '<span class="hl hl--beta">Safe in pregnancy</span> - hydralazine does not cross the placenta in clinically significant amounts and has decades of safety data in pregnancy. This is why it remains a first-line option for preeclampsia despite newer agents being available.',
      'Metabolized by hepatic <span class="hl hl--warn">acetylation</span> - approximately 35% of the population are slow acetylators with higher bioavailability and increased risk of drug-induced lupus (chronic use). Not clinically relevant for acute prehospital dosing but important pharmacology background.',
      'Drug-induced lupus erythematosus (DILE) occurs with <strong>chronic use &gt;6 months</strong> at higher doses - presents with arthralgias, myalgias, pleuritis, and positive ANA. Resolves with drug discontinuation. Not a prehospital concern.',
      'NASEMSO lists three equipotent first-line options for preeclampsia hypertensive emergency: <strong>labetalol</strong> (combined alpha/beta-blocker, check HR &gt;60 first), <strong>hydralazine</strong> (direct vasodilator, watch for precipitous drops), and <strong>nifedipine</strong> (CCB, oral route advantage). Choice depends on local protocols and clinical context.',
      'Causes <span class="hl hl--warn">sodium and water retention</span> - tachyphylaxis develops with repeated dosing. In hospital settings, often paired with a diuretic; not typically relevant for single prehospital doses.'
    ]
  },
  {
    id: "dopamine",
    summary: "An endogenous catecholamine with dose-dependent effects across dopaminergic, beta-1, and alpha-1 receptors. Third-line vasopressor behind norepinephrine and epinephrine, associated with more arrhythmias and higher mortality than norepinephrine in shock.",
    genericName: "Dopamine",
    tradeNames: ["Intropin"],
    category: ["Cardiovascular", "Resuscitation"],
    classes: ["Vasopressor", "Inotrope", "Catecholamine"],
    source: "Mixed",
    moa: [
      {
        brief: 'Dilates renal and mesenteric vessels, increasing renal blood flow and natriuresis. "Renal-dose" dopamine is debunked and has no proven clinical benefit for renal protection.',
        target: { name: "D1 dopaminergic receptors", action: "agonist", result: "Renal/mesenteric vasodilation (no proven renal protection)", system: "dopaminergic" }
      },
      {
        brief: 'Increases heart rate, contractility, and cardiac output. This is the primary inotropic range.',
        target: { name: "Beta-1 adrenergic receptors", action: "agonist", result: "↑ HR, ↑ contractility, ↑ CO", system: "adrenergic" }
      },
      {
        brief: 'Causes peripheral vasoconstriction, increasing SVR and blood pressure. At very high doses, alpha effects can override dopaminergic vasodilation, reducing renal and mesenteric perfusion.',
        target: { name: "Alpha-1 adrenergic receptors", action: "agonist", result: "Vasoconstriction, ↑ SVR, ↑ BP", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Shock (Fluid-Refractory)" },
      { name: "Symptomatic Bradycardia" }
    ],
    contraindications: [
      { text: "Hypersensitivity to dopamine" },
      { text: "Pheochromocytoma" },
      { text: "Ventricular fibrillation" },
      { text: "Uncorrected tachyarrhythmias" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Shock (Fluid-Refractory)",
        onset: "<5 min (IV infusion)",
        duration: "Half-life 1-5 min; effects cease within 10 min of stopping",
        routes: [
          {
            via: ["IV drip"],
            amount: "2-20 mcg/kg/min",
            notes: [
              "Titrate to MAP ≥65 mmHg and clinical perfusion markers",
              "Start at 2-5 mcg/kg/min and increase as needed"
            ]
          }
        ],
        notes: [
          "NASEMSO: use ONLY if norepinephrine or epinephrine is not available, or for specific causes of shock",
          "Norepinephrine is preferred over dopamine in both septic and cardiogenic shock - lower arrhythmia risk and lower mortality"
        ]
      },
      {
        population: "Adult",
        indication: "Symptomatic Bradycardia",
        onset: "<5 min",
        duration: "Duration of infusion",
        routes: [
          {
            via: ["IV drip"],
            amount: "5-20 mcg/kg/min",
            notes: ["Titrate to HR and BP response"]
          }
        ],
        notes: [
          "NASEMSO: consider for third-degree heart block or denervated heart (cardiac transplant) that does not respond to atropine",
          "Alternative: epinephrine 2-10 mcg/min drip or transcutaneous pacing"
        ]
      },
      {
        population: "Pediatric",
        indication: "Shock (Fluid-Refractory)",
        onset: "<5 min",
        duration: "Duration of infusion",
        routes: [
          {
            via: ["IV drip"],
            amount: "2-20 mcg/kg/min",
            notes: ["Titrate to perfusion targets"]
          }
        ],
        notes: [
          "NASEMSO: dopamine is NOT indicated for pediatric bradycardia",
          "Used only for shock when norepinephrine and epinephrine are unavailable"
        ]
      }
    ],
    adverseEffects: [
      "Tachycardia / Tachyarrhythmias (more common than with norepinephrine)",
      "Hypertension (high doses)",
      "Tissue necrosis / Gangrene (extravasation - vesicant)",
      "Nausea / Vomiting",
      "Headache",
      "Angina / Myocardial ischemia",
      "Widened QRS",
      "Peripheral vasoconstriction (digital ischemia at high doses)"
    ],
    precautions: [
      '<span class="hl hl--danger">Third-line vasopressor per NASEMSO</span> - norepinephrine and epinephrine are preferred. Dopamine is associated with <strong>higher mortality and more arrhythmias</strong> than norepinephrine in both septic and cardiogenic shock. Use only when first-line agents are unavailable.',
      '<span class="hl hl--danger">Vesicant - severe tissue necrosis with extravasation</span>. Infuse through a large-bore, well-secured IV in a large vein (antecubital or central). If extravasation occurs, infiltrate the area with phentolamine 5-10 mg in 10-15 mL NS to counteract alpha-mediated vasoconstriction.',
      '<span class="hl hl--warn">"Renal-dose" dopamine is a myth</span> - despite decades of use, multiple meta-analyses have demonstrated that low-dose dopamine (&lt;2 mcg/kg/min) does NOT prevent acute renal failure, reduce dialysis need, or improve mortality. This practice should be abandoned.',
      '<span class="hl hl--warn">Dose-dependent receptor activation</span> - the three-tier model (D1 → β1 → α1) is a useful teaching framework but is <strong>oversimplified</strong> in critically ill patients. Altered receptor function, variable metabolism, and endogenous catecholamine levels make individual response unpredictable. Always titrate to clinical effect, not to a "receptor dose."',
      '<span class="hl hl--warn">Not for pediatric bradycardia</span> - NASEMSO explicitly states dopamine is not indicated for pediatric bradycardia. Use epinephrine instead.',
      'Dopamine <span class="hl hl--warn">increases myocardial oxygen demand</span> more than norepinephrine due to its chronotropic (heart rate-increasing) effect. This is particularly dangerous in patients with underlying coronary disease or acute MI.',
      'Phenytoin co-administration with dopamine has been reported to cause <span class="hl hl--warn">hypotension and bradycardia</span> - use alternative anticonvulsants if needed.',
      'Haloperidol and phenothiazines can <span class="hl hl--warn">suppress dopaminergic effects</span> - this may blunt the renal/mesenteric vasodilation at low doses while leaving adrenergic effects intact.'
    ]
  },
  {
    id: "hydromorphone",
    summary: "A semi-synthetic opioid 5 to 7 times more potent than morphine per milligram, used for moderate-to-severe acute pain when morphine is ineffective or poorly tolerated. Fewer histamine-related side effects than morphine.",
    genericName: "Hydromorphone",
    tradeNames: ["Dilaudid"],
    category: ["Pain Management"],
    classes: ["Opioid Analgesic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Inhibits ascending pain pathways in the CNS through presynaptic neurotransmitter release inhibition and postsynaptic neuronal hyperpolarization. Produces analgesia, sedation, and euphoria. Also depresses the medullary respiratory center, causing respiratory depression and cough suppression.',
        target: { name: "Mu-opioid receptors (CNS)", action: "agonist", result: "Analgesia, sedation, respiratory depression", system: "opioid" }
      }
    ],
    indications: [
      { name: "Acute Pain (Moderate to Severe)" }
    ],
    contraindications: [
      { text: "Hypersensitivity to hydromorphone" },
      { text: "Significant respiratory depression" },
      { text: "Acute or severe bronchial asthma (unmonitored setting)" },
      { text: "Known or suspected GI obstruction, including paralytic ileus" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Acute Pain (Moderate to Severe)",
        onset: "5 min (IV); 15-30 min (IM)",
        duration: "3-4 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.5-1 mg",
            repeat: "May repeat in 10 min",
            maxDose: "2 mg total",
            notes: [
              "Administer slowly over 2-3 min",
              "Titrate to pain relief while monitoring respiratory status"
            ]
          },
          {
            via: ["IM"],
            amount: "1-2 mg",
            repeat: "May repeat in 10-15 min if needed",
            notes: ["IM onset is slower and less predictable - IV preferred when access available"]
          }
        ],
        notes: [
          "Weight-based alternative: 0.015 mg/kg IV, may repeat 0.0075-0.015 mg/kg q5 min",
          "Equianalgesia: 2 mg IV hydromorphone ≈ 10 mg IV morphine - always verify conversions"
        ]
      }
    ],
    adverseEffects: [
      "Respiratory depression (dose-dependent - primary lethal risk)",
      "Nausea / Vomiting",
      "Sedation / Drowsiness",
      "Hypotension (especially with hypovolemia)",
      "Pruritus (less than morphine)",
      "Constipation",
      "Miosis",
      "Urinary retention",
      "Chest wall rigidity (rare, with rapid high-dose IV)"
    ],
    precautions: [
      '<span class="hl hl--danger">5-7x more potent than morphine per milligram</span> - this potency difference is the single most important fact about hydromorphone. A dose that seems small (1 mg) is equivalent to 5-7 mg of morphine. Medication errors from confusing hydromorphone with morphine dosing are well-documented and potentially fatal.',
      '<span class="hl hl--danger">Respiratory depression</span> - monitor SpO₂ and ventilatory effort continuously. Risk increases in opioid-naïve patients, elderly, those with COPD/sleep apnea, and when combined with other CNS depressants. Have naloxone immediately available.',
      '<span class="hl hl--warn">Use with caution in elderly patients</span> - NASEMSO warns about caution in the elderly. Start with lowest effective dose (0.5 mg IV). Elderly patients have reduced clearance and increased sensitivity to respiratory depression.',
      '<span class="hl hl--warn">Use with caution in head injury</span> - NASEMSO cautions about head-injured patients. Opioids can increase ICP (via CO₂ retention from respiratory depression) and alter mental status, confounding neurological assessment.',
      '<span class="hl hl--beta">Fewer histamine-related side effects than morphine</span> - hydromorphone causes less pruritus, less nausea/vomiting, and less histamine-mediated hypotension compared to morphine. This makes it useful for patients who poorly tolerate morphine.',
      '<span class="hl hl--beta">Potentially safer in renal impairment</span> - unlike morphine (which produces the active, accumulating metabolite morphine-6-glucuronide), hydromorphone\'s primary metabolite (H3G) is neuroexcitatory but does not accumulate as dangerously in renal failure. Some clinicians prefer hydromorphone when GFR is reduced.',
      'Can be used in a <strong>multimodal approach</strong> with ketorolac (NSAID) or ketamine (sub-dissociative) - combining non-opioid analgesics reduces total opioid requirement and improves pain control.',
      'Not routinely recommended for <strong>pediatric prehospital use</strong> in many EMS systems - fentanyl (IN or IV) is generally preferred for pediatric acute pain due to easier intranasal dosing and more predictable pharmacokinetics.'
    ]
  },
  {
    id: "droperidol",
    summary: "A butyrophenone antipsychotic used for acute agitation and nausea, with faster onset than haloperidol. Carries an FDA black box warning for QT prolongation.",
    genericName: "Droperidol",
    tradeNames: ["Inapsine"],
    category: ["Neurological", "Nausea & Vomiting", "Sedation & Anesthesia"],
    classes: ["Antipsychotic", "Antiemetic", "Butyrophenone"],
    source: "Mixed",
    moa: [
      {
        brief: 'Reduces motor activity, anxiety, agitation, and nausea through dopamine antagonism in the mesolimbic system and chemoreceptor trigger zone. Also has antiserotonergic, alpha-adrenergic blocking, antihistaminic, and anticonvulsive properties.',
        target: { name: "D2 dopamine receptors (mesolimbic / CTZ)", action: "antagonist", result: "Sedation, antiemesis, reduced agitation", system: "dopaminergic" }
      }
    ],
    indications: [
      { name: "Acute Agitation / Delirium" },
      { name: "Nausea & Vomiting" }
    ],
    contraindications: [
      { text: "Known or suspected prolonged QT interval (QTc >440 ms males, >450 ms females)" },
      { text: "Hypersensitivity to droperidol or butyrophenones" },
      { text: "Concurrent use with promethazine (additive QT prolongation)" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Acute Agitation / Delirium",
        onset: "3-10 min (IV); ~20 min (IM)",
        duration: "2-4 hrs",
        routes: [
          { via: ["IV"], amount: "2.5 mg", notes: ["Slow IV push", "Onset ~10 min"] },
          { via: ["IM"], amount: "5-10 mg", notes: ["Onset ~20 min", "Preferred for high-violence-risk patients where IV access is unsafe"] }
        ],
        notes: [
          "NASEMSO: option for high violence risk",
          "Faster onset and fewer repeat doses needed than haloperidol",
          "Can combine with midazolam 2-5 mg for refractory agitation - monitor closely for CNS depression"
        ]
      },
      {
        population: "Pediatric",
        indication: "Acute Agitation / Delirium",
        notes: ["NASEMSO: not routinely recommended for pediatric patients"]
      },
      {
        population: "Adult",
        indication: "Nausea & Vomiting",
        onset: "3-10 min (IV); ~20 min (IM)",
        duration: "2-4 hrs",
        routes: [
          { via: ["IV", "IM"], amount: "1.25 mg", notes: ["Lower dose than agitation - antiemetic effect occurs at sub-sedating doses"] }
        ],
        notes: [
          "NASEMSO: contraindicated for suspected or known prolonged QT syndrome",
          "Equally effective as ondansetron and more effective than metoclopramide for antiemesis"
        ]
      }
    ],
    adverseEffects: [
      "QT prolongation → Torsades de pointes (dose-dependent, rare at therapeutic doses)",
      "Hypotension (alpha-adrenergic blockade)",
      "Akathisia (restlessness - most common side effect)",
      "Dystonia / Extrapyramidal symptoms",
      "Sedation",
      "Tachycardia",
      "Dysphoria"
    ],
    precautions: [
      '<span class="hl hl--danger">FDA Black Box Warning - QT Prolongation</span>: Droperidol can prolong QT and cause torsades de pointes. The FDA mandates 12-lead ECG before administration to rule out QTc &gt;440 ms (males) or &gt;450 ms (females), and ECG monitoring for 2-3 hrs after. NASEMSO requires cardiac monitoring when droperidol is used.',
      '<span class="hl hl--beta">The black box is widely considered excessive</span> - it was based on case reports at doses ≥25 mg in psychiatric patients. A Mayo Clinic cohort of &gt;6,000 ED administrations at therapeutic doses (≤5 mg) showed no significant dysrhythmic events. The AAEM concluded that the risk at doses &lt;2.5 mg is exceedingly rare. Multiple reviews have called for removal of the black box warning.',
      '<span class="hl hl--warn">NASEMSO: do NOT combine with promethazine</span> if haloperidol or droperidol has been given - additive QT prolongation risk. Ondansetron has less seizure risk and is preferred for antiemesis when antipsychotics are on board.',
      '<span class="hl hl--warn">Akathisia</span> - inner restlessness and an inability to sit still is the most common adverse effect and can paradoxically worsen apparent agitation. Differentiate from inadequate sedation. Treat with diphenhydramine 25-50 mg IV or benztropine.',
      '<span class="hl hl--beta">Faster onset than haloperidol</span> - studies show droperidol achieves sedation more rapidly (significant difference at 5, 15, and 30 min) and requires fewer repeat doses (35% vs 81% redosing at 30 min). This makes it particularly effective for acute violent agitation.',
      '<span class="hl hl--warn">Alpha-adrenergic blockade causes hypotension</span> - more pronounced with IV route and in hypovolemic patients. Have fluids available.',
      'Use with <span class="hl hl--warn">extreme caution in patients at risk for QT prolongation</span>: CHF, bradycardia, diuretic use, hypokalemia, hypomagnesemia, other QT-prolonging drugs (amiodarone, sotalol, ondansetron), and age &gt;65 years.',
      'Returned to US market in 2019 after generic manufacturing resumed - many EMS systems and EDs are reintroducing it based on mounting evidence of safety at therapeutic doses.'
    ]
  },
  {
    id: "etomidate",
    summary: "A hemodynamically neutral RSI induction agent that maintains blood pressure, heart rate, and cardiac output while reducing ICP. Used for hemodynamically unstable patients needing intubation.",
    genericName: "Etomidate",
    tradeNames: ["Amidate"],
    category: ["Sedation & Anesthesia"],
    classes: ["Induction Agent"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Enhances GABA-mediated chloride influx, producing rapid sedation and unconsciousness. Depresses the reticular activating system. Also inhibits adrenal 11-β-hydroxylase, blocking cortisol and aldosterone synthesis.',
        target: { name: "GABA-A receptors (CNS) / 11-β-hydroxylase (adrenal)", action: "enhancer / inhibitor", result: "Sedation, ↓ ICP, adrenal suppression", system: "GABAergic" }
      }
    ],
    indications: [
      { name: "RSI Induction" }
    ],
    contraindications: [
      { text: "Hypersensitivity to etomidate" },
      { text: "Adrenal insufficiency (relative - weigh risk vs benefit)" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "RSI Induction",
        onset: "15-45 sec",
        duration: "3-5 min (dose-dependent; ~100 sec per 0.1 mg/kg)",
        routes: [
          {
            via: ["IV"],
            amount: "0.3 mg/kg",
            notes: [
              "Rapid IV push over 30-60 sec",
              "Reduce to 0.15 mg/kg in hemodynamically compromised or elderly patients"
            ]
          }
        ],
        notes: [
          "Most commonly used RSI induction agent in US emergency departments",
          "Immediately follow with paralytic (succinylcholine 1.5 mg/kg or rocuronium 1.2 mg/kg)",
          "Begin post-intubation sedation promptly - etomidate wears off in 3-5 min"
        ]
      },
      {
        population: "Pediatric",
        qualifier: ">10 yrs (FDA-approved); used off-label in younger children",
        indication: "RSI Induction",
        onset: "15-45 sec",
        duration: "3-5 min",
        routes: [
          { via: ["IV"], amount: "0.3 mg/kg", notes: ["Same dose as adults; rapid IV push"] }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Adrenal suppression (11-β-hydroxylase inhibition - 6-24+ hrs even after single dose)",
      "Myoclonus (30-60% - not seizure activity)",
      "Pain on injection (propylene glycol formulation)",
      "Nausea / Vomiting (postoperative)",
      "Transient apnea (brief)",
      "Trismus (rare)"
    ],
    precautions: [
      '<span class="hl hl--beta">Hemodynamic stability is the defining advantage</span> - etomidate causes minimal changes in HR, BP, CO, or SVR. This makes it the ideal induction agent for shock, trauma with hemorrhage, cardiac disease, severe aortic stenosis, and any patient where post-induction hypotension is dangerous.',
      '<span class="hl hl--warn">Adrenal suppression controversy</span> - a single 0.3 mg/kg dose inhibits 11-β-hydroxylase and suppresses cortisol synthesis for 6-24+ hours. In septic patients who may already have relative adrenal insufficiency, this raised theoretical concern. However, meta-analyses and the 2025 RSI trial found <strong>no mortality difference</strong> between etomidate and ketamine in septic patients. The clinical significance of transient adrenal suppression remains unproven.',
      'If adrenal suppression is a concern in a septic patient, consider empiric <strong>stress-dose hydrocortisone</strong> (100 mg IV) after intubation - this does not require avoiding etomidate, just prophylactic steroid coverage.',
      '<span class="hl hl--warn">Myoclonus in 30-60% of patients</span> - involuntary muscle jerking that can be mistaken for seizures. These are NOT epileptiform on EEG and do not require anticonvulsant treatment. Pre-treatment with a small dose of midazolam or fentanyl can reduce incidence.',
      '<span class="hl hl--danger">No analgesic properties</span> - like propofol, etomidate only provides sedation and amnesia. Post-intubation analgesia and sedation must be started immediately to prevent awareness under paralysis.',
      '<span class="hl hl--beta">Reduces ICP while maintaining CPP</span> - decreases cerebral metabolic rate, cerebral blood flow, and ICP. This cerebroprotective profile makes etomidate particularly useful for head-injured patients requiring RSI.',
      '<span class="hl hl--beta">Not a controlled substance</span> - unlike ketamine (Schedule III) and propofol (varies by state), etomidate has no DEA scheduling. This simplifies storage, documentation, and wastage - a practical advantage for EMS.',
      'Compared to <strong>ketamine</strong>: etomidate is more hemodynamically neutral (meta-analyses show less post-induction hypotension), but lacks analgesia and causes adrenal suppression. Ketamine provides analgesia and bronchodilation but has sympathomimetic effects that may be unreliable in catecholamine-depleted patients.'
    ]
  },
  {
    id: "acetaminophen",
    summary: "A non-opioid analgesic and antipyretic that reduces pain and fever without anti-inflammatory or antiplatelet effects. The leading cause of acute liver failure in the US through NAPQI-mediated hepatotoxicity in overdose.",
    genericName: "Acetaminophen (Paracetamol, APAP)",
    tradeNames: ["Tylenol", "Ofirmev"],
    category: ["Pain Management"],
    classes: ["Antipyretic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Mechanism not fully understood. Appears to inhibit COX pathways centrally (not peripherally like NSAIDs), reducing prostaglandin synthesis in the CNS and producing analgesia and antipyresis without peripheral anti-inflammatory effect. May also modulate serotonergic descending pain pathways and activate the endocannabinoid system.',
        target: { name: "Central COX / Nitric oxide / Serotonergic pathways", action: "inhibitor", result: "Central analgesia, antipyresis, no peripheral anti-inflammatory effect", system: "other" }
      }
    ],
    indications: [
      { name: "Acute Pain (Mild to Moderate)" },
      { name: "Fever" }
    ],
    contraindications: [
      { text: "Hypersensitivity to acetaminophen" },
      { text: "Severe acute liver disease" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Acute Pain (Mild to Moderate)",
        onset: "30-60 min (PO); 5-10 min (IV); 2-3 hrs (PR)",
        duration: "4-6 hrs",
        routes: [
          { via: ["PO"], amount: "650-1000 mg", repeat: "q4-6 hrs PRN", maxDose: "4 g/24 hrs (2-3 g/day with hepatic disease or chronic alcohol use)", notes: [] },
          { via: ["IV"], amount: "1000 mg", repeat: "q6 hrs", maxDose: "4 g/24 hrs", notes: ["Infuse over 15 min; faster onset than PO"] },
          { via: ["PR"], amount: "650 mg", repeat: "q4-6 hrs PRN", notes: ["Slower, less predictable absorption"] }
        ],
        notes: ["Core component of multimodal pain management - combine with opioids and/or NSAIDs to reduce total opioid requirement"]
      },
      {
        population: "Pediatric",
        indication: "Fever / Acute Pain",
        onset: "30-60 min (PO); 2-3 hrs (PR)",
        duration: "4-6 hrs",
        routes: [
          { via: ["PO", "PR", "IV", "IO"], amount: "15 mg/kg", repeat: "q4-6 hrs PRN", maxDose: "75 mg/kg/day or 4 g/day (whichever is less)", notes: [] }
        ],
        notes: [
          "NASEMSO Seizures guideline: acetaminophen 15 mg/kg (max 650 mg) for febrile seizures after seizure cessation",
          "NASEMSO Shock guideline: acetaminophen 15 mg/kg (max 1000 mg) for fever in suspected septic shock"
        ]
      }
    ],
    adverseEffects: [
      "Hepatotoxicity (overdose - NAPQI-mediated, most common cause of acute liver failure in US)",
      "Nausea / Vomiting (rare at therapeutic doses)",
      "Allergic reactions (rare - rash, urticaria)",
      "Severe skin reactions (extremely rare - SJS, TEN)",
      "Renal injury (rare, with chronic supratherapeutic use)"
    ],
    precautions: [
      '<span class="hl hl--danger">Hepatotoxicity in overdose</span> - the #1 cause of acute liver failure in the US (~500 deaths/year). At therapeutic doses, CYP2E1 produces small amounts of NAPQI that are safely conjugated by glutathione. In overdose (&gt;150 mg/kg or &gt;7.5-10 g in adults), glutathione is depleted → NAPQI binds hepatocyte proteins → centrilobular necrosis → liver failure.',
      '<span class="hl hl--danger">Antidote: N-acetylcysteine (NAC)</span> - replenishes glutathione stores to detoxify NAPQI. Most effective within 8 hrs of ingestion. NASEMSO protocol: NAC 150 mg/kg IV in 200 mL D5W over 1 hr (loading), then 50 mg/kg IV in 500 mL D5W over 4 hrs. If IV unavailable: 140 mg/kg PO. Consider prehospital initiation with prolonged transport.',
      '<span class="hl hl--warn">Max daily dose awareness</span> - 4 g/day in healthy adults, reduced to 2-3 g/day in hepatic insufficiency, chronic alcohol use, malnutrition, or fasting. Acetaminophen is present in &gt;100 OTC products - patients may unknowingly exceed limits by combining products (Vicodin, Percocet, NyQuil, etc.).',
      '<span class="hl hl--warn">Overdose is initially asymptomatic</span> - patients may appear well for the first 24 hrs after a toxic ingestion. Nausea/vomiting occur early but may resolve, creating a deceptive "latent phase" before hepatotoxicity becomes clinically apparent at 72-96 hrs. Do not be reassured by an initially well-appearing overdose patient.',
      '<span class="hl hl--beta">No anti-inflammatory or antiplatelet effects</span> - unlike NSAIDs, acetaminophen does not inhibit peripheral COX. This means: no GI bleeding risk, no platelet dysfunction, safe in asthma, safe with anticoagulants. This is why it\'s preferred over NSAIDs in many patient populations.',
      '<span class="hl hl--beta">Opioid-sparing effect</span> - IV and oral acetaminophen, when used as part of multimodal analgesia with ketorolac and/or opioids, reduces total opioid requirement. This is increasingly important in prehospital pain management protocols.',
      'Risk factors for hepatotoxicity at lower doses: <strong>chronic alcohol use</strong> (CYP2E1 induction + glutathione depletion), <strong>fasting/malnutrition</strong> (reduced glucuronidation + low glutathione), CYP450 inducers (phenytoin, carbamazepine, isoniazid), and <strong>repeated supratherapeutic dosing</strong> (more dangerous pattern than single acute overdose in some populations).',
      'Children &lt;5 yrs are <span class="hl hl--beta">less susceptible</span> to hepatotoxicity - higher glutathione supply and regeneration capacity plus greater sulfation capacity provide additional protection.'
    ]
  },
  {
    id: "activated-charcoal",
    summary: "A porous carbon adsorbent that binds drugs and toxins in the GI lumen to prevent systemic absorption, most effective within one hour of ingestion. Does not bind metals, alcohols, acids, alkalis, or lithium.",
    genericName: "Activated Charcoal",
    tradeNames: ["Actidose-Aqua"],
    category: ["Toxicology"],
    classes: ["Antidote"],
    source: "Mixed",
    moa: [
      {
        brief: 'Physically adsorbs drugs and toxins onto its pore structure, trapping them in the GI lumen and preventing systemic absorption. Optimal charcoal-to-toxin ratio is 10:1. Binds nonpolar organic compounds best; polar, ionized, and inorganic substances bind poorly.',
        target: { name: "Ingested toxins (GI lumen)", action: "adsorbent", result: "Prevents GI absorption, fecal elimination of toxin", system: "other" }
      }
    ],
    indications: [
      { name: "Oral Poisoning / Overdose" }
    ],
    contraindications: [
      { text: "Unprotected airway (altered mental status, risk of declining consciousness without intubation)" },
      { text: "Caustic substance ingestion (acids, alkalis - charcoal obscures endoscopy and may worsen injury)" },
      { text: "Intestinal obstruction or perforation" },
      { text: "Substances not adsorbed by charcoal (see precautions)" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Oral Poisoning / Overdose",
        onset: "Immediate (acts in GI lumen upon contact with toxin)",
        duration: "Single passage through GI tract",
        routes: [
          {
            via: ["PO"],
            amount: "1 g/kg (typical adult dose 50-100 g)",
            notes: [
              "Use formulation WITHOUT sorbitol per NASEMSO",
              "Mix as aqueous suspension; serve in opaque cup with lid and straw to improve palatability"
            ]
          }
        ],
        notes: [
          "Most effective within 1 hour of ingestion",
          "NASEMSO: consider when prolonged transport to definitive care is anticipated",
          "May be given beyond 1 hr for extended-release medications, substances with delayed absorption, or drugs that slow gastric emptying (anticholinergics, opioids)"
        ]
      },
      {
        population: "Pediatric",
        indication: "Oral Poisoning / Overdose",
        onset: "Immediate",
        duration: "Single passage through GI tract",
        routes: [
          { via: ["PO"], amount: "1 g/kg (typical 10-25 g depending on age)", notes: ["WITHOUT sorbitol - sorbitol in children causes dehydration and electrolyte abnormalities"] }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Vomiting (most common - risk increases with rapid administration and sorbitol)",
      "Aspiration pneumonitis (most dangerous - can be fatal)",
      "Black stools",
      "Constipation / Bowel obstruction (rare, with repeated dosing)",
      "Corneal abrasion (if contacts eyes)"
    ],
    precautions: [
      '<span class="hl hl--danger">Aspiration is the #1 risk</span> - charcoal aspiration causes severe pneumonitis and can be fatal. NEVER give to a patient with altered mental status or declining consciousness unless the airway is protected by intubation. NASEMSO repeatedly warns: "if risk of rapidly decreasing mental status, do not administer oral agents."',
      '<span class="hl hl--danger">Does NOT bind everything</span> - remember what charcoal FAILS to adsorb: <strong>Iron, Lithium, Alcohols (ethanol/methanol/ethylene glycol), Acids/Alkalis (caustics), Heavy metals (lead, mercury, arsenic), Potassium, Hydrocarbons/Solvents</strong>. Giving charcoal for these agents is useless and delays appropriate treatment.',
      '<span class="hl hl--warn">1-hour window</span> - volunteer studies show activated charcoal reduces absorption by ~69% at 30 min and ~34% at 1 hr post-ingestion, with diminishing benefit thereafter. However, NASEMSO extends the window for: extended-release formulations, medications with delayed absorption, and drugs that slow gastric emptying.',
      '<span class="hl hl--warn">Without sorbitol</span> - NASEMSO specifies charcoal WITHOUT sorbitol. Sorbitol was historically added as a cathartic to speed GI transit, but it increases vomiting risk (which increases aspiration risk), causes dehydration, and has no proven benefit.',
      'NASEMSO-specific indications include: <strong>acetaminophen</strong> overdose (within 1 hr + prolonged transport), <strong>aspirin</strong> overdose (highly recommended due to erratic absorption), <strong>beta-blocker</strong> poisoning, <strong>CCB</strong> poisoning, and <strong>unknown oral ingestion</strong> if serious poisoning cannot be ruled out.',
      '<span class="hl hl--beta">Desorption can occur</span> - binding is reversible. If the charcoal:toxin ratio is inadequate, bound toxin may release back into the GI lumen. This is why the 10:1 ratio (10 g charcoal per 1 g toxin) is recommended.',
      '<strong>Multi-dose activated charcoal (MDAC)</strong> - repeated doses (15-30 g q2-4 hrs) can enhance elimination of drugs with enterohepatic recirculation or prolonged absorption (carbamazepine, phenytoin, phenobarbital, theophylline, dapsone). NASEMSO notes extended-release agents may benefit. Consult Poison Control before initiating MDAC.',
      'Ipecac is <span class="hl hl--warn">no longer recommended</span> - NASEMSO explicitly states ipecac is not indicated for any poisoning. The manufacturer has ceased production.'
    ]
  },
  {
    id: "adenosine",
    summary: "An endogenous purine nucleoside that transiently blocks AV node conduction to terminate SVT. Must be given as an ultra-rapid IV push with immediate flush due to a half-life of less than 10 seconds.",
    genericName: "Adenosine",
    tradeNames: ["Adenocard"],
    category: ["Cardiovascular"],
    classes: [],
    source: "Mixed",
    moa: [
      {
        brief: 'Slows AV conduction and increases the AV refractory period by opening potassium channels and inhibiting calcium influx, interrupting reentrant circuits and terminating SVT. Rapidly metabolized by red blood cells and endothelial cells with a half-life under 10 seconds.',
        target: { name: "A1 adenosine receptors (AV node)", action: "agonist", result: "Transient AV block, interrupts reentry, terminates SVT", system: "purinergic" }
      }
    ],
    indications: [
      { name: "SVT (Supraventricular Tachycardia)" },
      { name: "Regular Monomorphic Wide-Complex Tachycardia (Diagnostic/Therapeutic)" }
    ],
    contraindications: [
      { text: "Second- or third-degree AV block (without pacemaker)" },
      { text: "Sick sinus syndrome (without pacemaker)" },
      { text: "Atrial fibrillation or flutter (particularly with WPW - may precipitate VF)" },
      { text: "Known ventricular tachycardia" },
      { text: "Hypersensitivity" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "SVT (Supraventricular Tachycardia)",
        onset: "Immediate (seconds)",
        duration: "<30 sec (half-life <10 sec)",
        routes: [
          {
            via: ["IV"],
            amount: "6 mg",
            repeat: "If no conversion in 1-2 min: 12 mg; may repeat 12 mg x1",
            notes: [
              "RAPID IV push over 1-3 sec - slow administration is ineffective",
              "Immediately follow with 20 mL NS rapid flush",
              "Use the most proximal IV port available (antecubital preferred over hand/wrist)"
            ]
          }
        ],
        notes: [
          "NASEMSO: preferred medication for stable SVT",
          "Always attempt vagal maneuvers first (Valsalva, modified Valsalva, carotid massage, ice to face in pediatrics)",
          "Record continuous ECG rhythm strip during administration - the transient AV block can unmask underlying atrial rhythm and aid diagnosis"
        ]
      },
      {
        population: "Pediatric",
        indication: "SVT (Supraventricular Tachycardia)",
        onset: "Immediate (seconds)",
        duration: "<30 sec",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            maxDose: "6 mg first dose",
            repeat: "If no conversion: 0.2 mg/kg (max 12 mg)",
            notes: ["Rapid IV/IO push followed by ≥5 mL NS rapid flush", "Use proximal access"]
          }
        ],
        notes: ["NASEMSO: studies in infants and children demonstrate effectiveness for hemodynamically stable or unstable SVT"]
      },
      {
        population: "Adult",
        indication: "Regular Monomorphic Wide-Complex Tachycardia",
        onset: "Immediate",
        duration: "<30 sec",
        routes: [
          { via: ["IV"], amount: "6 mg → 12 mg", notes: ["Same rapid push + flush technique"] }
        ],
        notes: [
          "NASEMSO: indicated for regular monomorphic wide-complex tachycardia - may convert SVT with aberrancy or serve as diagnostic tool",
          "If rhythm does NOT respond to adenosine, it is likely VT - proceed accordingly"
        ]
      }
    ],
    adverseEffects: [
      "Chest tightness / Chest pain (most common complaint)",
      "Flushing",
      "Dyspnea / Sense of impending doom",
      "Transient asystole (expected - the therapeutic effect)",
      "Sinus bradycardia / Sinus pause",
      "Transient atrial fibrillation (~12% of patients)",
      "Bronchospasm (especially in asthmatics)",
      "Nausea / Headache / Dizziness"
    ],
    precautions: [
      '<span class="hl hl--danger">Must be given as RAPID IV push (1-3 sec) with immediate flush</span> - adenosine has a half-life &lt;10 seconds. Any delay in administration or flush allows the drug to be metabolized before reaching the heart. Slow push = wasted dose. Use two-syringe technique with a stopcock at the most proximal IV port.',
      '<span class="hl hl--warn">Warn the patient</span> - adenosine causes a brief but intense sensation of chest pressure, flushing, dyspnea, and "impending doom." These effects are self-limiting (&lt;30 sec) but can be extremely distressing. Prepare the patient: "You may feel like your heart stops and your chest gets tight for a few seconds - this is normal and very brief."',
      '<span class="hl hl--danger">Avoid in WPW with atrial fibrillation/flutter</span> - NASEMSO explicitly warns against AV nodal blocking agents (adenosine, CCBs, digoxin, beta-blockers) in pre-excited AF. Blocking the AV node forces conduction through the accessory pathway → ventricular fibrillation.',
      '<span class="hl hl--warn">Methylxanthines antagonize adenosine</span> - caffeine and theophylline are competitive antagonists at A1 receptors. Patients on theophylline or who have consumed large amounts of caffeine may require higher doses. Consider starting with 12 mg in these patients.',
      '<span class="hl hl--warn">Dipyridamole and carbamazepine potentiate adenosine</span> - these drugs block nucleoside uptake/transport, prolonging adenosine\'s half-life and intensifying its effects. Reduce the initial dose to 3 mg in patients taking these medications.',
      '<span class="hl hl--warn">Bronchoconstriction risk</span> - adenosine can trigger bronchospasm, particularly in patients with asthma or reactive airway disease. Use with caution; have albuterol available.',
      '<span class="hl hl--beta">Transient AF occurs in ~12%</span> of patients after adenosine administration due to shortening of atrial refractory period. This is usually self-limiting but can be dangerous in patients with WPW (accessory pathway conduction → VF).',
      '<span class="hl hl--beta">Diagnostic value in wide-complex tachycardia</span> - even when adenosine doesn\'t terminate the rhythm, the transient AV block can reveal the underlying atrial activity (flutter waves, P waves) and help distinguish SVT with aberrancy from VT. Always record a rhythm strip during administration.',
      'Adenosine is <span class="hl hl--beta">safe in pregnancy</span> - it is an endogenous substance that is rapidly metabolized. Does not pose risk to the fetus or nursing infant.'
    ]
  },
  {
    id: "amiodarone",
    summary: "A multichannel blocker classified as Class III but with properties of all four Vaughan-Williams classes. Used for shock-refractory VF/pVT and stable wide-complex tachycardia, with an extremely long half-life of approximately 40 days.",
    genericName: "Amiodarone",
    tradeNames: ["Pacerone", "Cordarone", "Nexterone"],
    category: ["Cardiovascular", "Resuscitation"],
    classes: ["Class III Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Primarily prolongs action potential duration and the refractory period by blocking potassium channels. Also blocks sodium channels, calcium channels, and has non-competitive anti-adrenergic activity, suppressing automaticity, slowing conduction, and stabilizing all cardiac tissue.',
        target: { name: "K⁺/Na⁺/Ca²⁺ channels + β-adrenergic receptors (cardiac)", action: "blocker", result: "↑ Refractory period, ↓ conduction velocity, ↓ automaticity", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "VF / Pulseless VT (Shock-Refractory)" },
      { name: "Stable Wide-Complex Tachycardia" },
      { name: "Refractory SVT / Rate Control" }
    ],
    contraindications: [
      { text: "Hypersensitivity to amiodarone or iodine" },
      { text: "Severe sinus node dysfunction (without pacemaker)" },
      { text: "Second- or third-degree heart block (without pacemaker)" },
      { text: "Bradycardia causing syncope (without pacemaker)" },
      { text: "Cardiogenic shock" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "VF / Pulseless VT (Shock-Refractory)",
        onset: "Rapid (IV push in arrest)",
        duration: "Half-life ~40 days (terminal elimination)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "300 mg",
            repeat: "150 mg IV/IO push if VF/pVT persists",
            notes: [
              "Rapid IV/IO push - no need for slow infusion during cardiac arrest (no BP to protect)",
              "Give AFTER at least 1 defibrillation + vasopressor (epinephrine)"
            ]
          }
        ],
        notes: [
          "NASEMSO: consider for VF/pVT unresponsive to CPR, defibrillation, AND vasopressor therapy",
          "Lidocaine 1 mg/kg IV is an alternative if amiodarone is unavailable",
          "Improves ROSC and hospital admission rates but NO proven long-term survival or neurological benefit"
        ]
      },
      {
        population: "Pediatric",
        indication: "VF / Pulseless VT (Shock-Refractory)",
        onset: "Rapid",
        duration: "Prolonged",
        routes: [
          { via: ["IV", "IO"], amount: "5 mg/kg", maxDose: "300 mg", notes: ["IV/IO push"] }
        ],
        notes: []
      },
      {
        population: "Adult",
        indication: "Stable Wide-Complex Tachycardia",
        onset: "Minutes (during loading infusion)",
        duration: "Duration of infusion + prolonged elimination",
        routes: [
          {
            via: ["IV drip"],
            amount: "150 mg over 10 min",
            repeat: "May repeat 150 mg q10 min PRN for breakthrough arrhythmias",
            notes: [
              "Dilute in 100 mL D5W",
              "Follow with maintenance: 1 mg/min x 6 hrs → 0.5 mg/min x 18 hrs",
              "Max cumulative 24-hr dose: 2.2 g"
            ]
          }
        ],
        notes: [
          "NASEMSO: amiodarone or procainamide may be used for regular or irregular wide-complex tachycardia in stable patients",
          "NASEMSO: can be used as rate-control in patients with CHF intolerant of diltiazem or metoprolol",
          "Caution: amiodarone can promote cardioversion - exercise care in patients not anticoagulated (stroke risk)"
        ]
      },
      {
        population: "Adult",
        indication: "Refractory SVT / Rate Control",
        onset: "Minutes",
        duration: "Prolonged",
        routes: [
          { via: ["IV drip"], amount: "150 mg over 10 min", notes: ["Same infusion protocol as stable wide-complex tachycardia"] }
        ],
        notes: ["NASEMSO: amiodarone given by slow IV infusion with careful hemodynamic monitoring may be considered for refractory SVT"]
      }
    ],
    adverseEffects: [
      "Hypotension (most common acute adverse effect - 16% in trials)",
      "Bradycardia",
      "QT prolongation → Torsades de pointes",
      "AV block",
      "Phlebitis (peripheral IV - use central line for concentrations >2 mg/mL)",
      "Nausea",
      "Pulmonary toxicity / Fibrosis (chronic use)",
      "Thyroid dysfunction - hypo/hyperthyroidism (chronic; amiodarone is 37% iodine by weight)",
      "Hepatotoxicity (chronic use)",
      "Corneal microdeposits (chronic use)",
      "Blue-gray skin discoloration (chronic use)"
    ],
    precautions: [
      '<span class="hl hl--danger">Hypotension is the most common acute complication</span> - occurs in ~16% of patients and is worse with rapid infusion and cumulative doses &gt;2.2 g/24 hrs. For stable tachycardia with a pulse, ALWAYS infuse slowly over 10 min. During cardiac arrest, rapid push is acceptable because there is no blood pressure to protect.',
      '<span class="hl hl--warn">Extremely long half-life (~40 days)</span> - amiodarone is highly lipophilic and distributes into virtually every tissue. Once given, its effects persist for weeks to months. This complicates post-ROSC management because you cannot "turn off" amiodarone if adverse effects develop.',
      '<span class="hl hl--warn">Do NOT combine with other QT-prolonging drugs</span> - NASEMSO and ACLS recommend giving only ONE antiarrhythmic during cardiac arrest. Combining amiodarone with procainamide, sotalol, or other QT-prolonging agents dramatically increases torsades risk.',
      '<span class="hl hl--warn">PROCAMIO trial showed procainamide was superior</span> for stable monomorphic VT - amiodarone remains standard for VF/pVT arrest, but for stable VT with a pulse, procainamide had better termination rates and fewer cardiac adverse events.',
      '<span class="hl hl--warn">Amiodarone can promote cardioversion</span> - NASEMSO cautions that in AF patients not receiving anticoagulation, amiodarone-induced cardioversion could dislodge atrial thrombus and cause stroke.',
      '<span class="hl hl--beta">Multichannel blockade is the key pharmacology concept</span> - amiodarone is uniquely classified as Class III but exhibits Class I (Na⁺ block), Class II (anti-adrenergic), Class III (K⁺ block), and Class IV (Ca²⁺ block) properties. This "dirty drug" profile is what makes it broadly effective across multiple arrhythmia types.',
      'Chronic toxicities (pulmonary fibrosis, thyroid dysfunction, hepatotoxicity, corneal deposits, blue-gray skin) are <strong>hospital/outpatient concerns</strong> - not relevant to prehospital single-dose use but important pharmacology background for understanding why amiodarone is a drug of last resort for long-term management.',
      '<span class="hl hl--warn">Nexterone formulation</span> - newer premixed IV amiodarone that does NOT contain polysorbate 80 or benzyl alcohol. Traditional formulations contain these additives which contribute to hypotension and are toxic to neonates ("gasping syndrome"). Verify which formulation your system carries.'
    ]
  },
  {
    id: "aspirin",
    summary: "An antiplatelet that irreversibly blocks COX-1 to stop platelet aggregation. First drug given for suspected acute coronary syndrome, chewed for rapid absorption.",
    genericName: "Aspirin",
    tradeNames: ["Bayer", "Ecotrin", "St. Joseph"],
    category: ["Cardiovascular"],
    classes: ["NSAID", "Antiplatelet"],
    source: "Mixed",
    moa: [
      {
        brief: 'Irreversibly acetylates COX-1 in platelets, blocking thromboxane A₂ synthesis and inhibiting platelet aggregation for the life of the platelet (approximately 10 days). A single dose disables every platelet it contacts, and no reversal agent exists.',
        target: { name: "COX-1 (platelet)", action: "inhibitor", result: "Irreversible ↓ platelet aggregation", system: "enzymatic" }
      }
    ],
    indications: [
      { name: "Acute Coronary Syndrome" }
    ],
    contraindications: [
      { text: "Hypersensitivity to aspirin or NSAIDs" },
      { text: "Active GI bleeding or bleeding GI ulcers" },
      { text: "Known bleeding disorder (hemophilia, hemorrhagic diathesis)" },
      { text: "Aspirin-intolerant asthma (aspirin-exacerbated respiratory disease)" },
      { text: "Thrombocytopenia", relative: true },
      { text: "G6PD deficiency with hemolytic anemia", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "~15 min (chewed)",
        duration: "7-10 days (irreversible COX-1 inhibition)",
        routes: [
          {
            via: ["PO"],
            amount: "162-325 mg",
            notes: [
              "Must be chewed, not swallowed whole - chewing speeds buccal absorption and onset",
              "Use non-enteric-coated tablets; enteric coating delays absorption 3-4 hrs",
              "Single dose in the prehospital setting"
            ]
          }
        ],
        notes: ["Administer as early as possible in suspected ACS - mortality benefit increases with earlier administration"]
      }
    ],
    adverseEffects: [
      "GI upset / nausea",
      "Increased bleeding risk",
      "Allergic reaction / urticaria",
      "Bronchospasm (aspirin-sensitive patients)",
      "Tinnitus (high doses)"
    ],
    precautions: [
      '<span class="hl hl--danger">No reversal agent exists</span> - once given, the antiplatelet effect lasts the life of the platelet (~10 days). Platelet transfusion is the only way to restore function.',
      'Must be <strong>chewed</strong>, not swallowed whole - enteric-coated aspirin swallowed intact delays absorption by hours and is ineffective in acute ACS.',
      '<span class="hl hl--warn">Ask about NSAID/aspirin allergy before administration</span> - aspirin-exacerbated respiratory disease (AERD) can trigger severe bronchospasm and angioedema.',
      'Concurrent use of <span class="hl hl--warn">ibuprofen</span> may interfere with aspirin\'s antiplatelet effect - ibuprofen reversibly competes for the COX-1 binding site and can block aspirin\'s irreversible acetylation if taken first.',
      'Low bleeding risk from a single prehospital dose - do not withhold for suspected ACS based on theoretical bleeding concerns alone.'
    ]
  },
  {
    id: "atropine",
    summary: "A muscarinic antagonist used to increase heart rate in symptomatic bradycardia and to dry secretions in organophosphate and nerve agent poisoning.",
    genericName: "Atropine Sulfate",
    tradeNames: ["Atropen"],
    category: ["Cardiovascular", "Toxicology"],
    classes: ["Anticholinergic", "Vagolytic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Removes vagal tone from the SA and AV nodes, increasing heart rate and AV conduction.',
        target: { name: "Muscarinic M₂ receptors (cardiac)", action: "antagonist", result: "↑ HR, ↑ AV conduction", system: "cholinergic" }
      },
      {
        brief: 'Dries salivary, bronchial, and GI secretions, relaxes bronchial smooth muscle, and reduces GI motility. Critical in organophosphate and nerve agent poisoning to reverse the cholinergic crisis.',
        target: { name: "Muscarinic receptors (glandular/smooth muscle)", action: "antagonist", result: "↓ Secretions, bronchodilation", system: "cholinergic" }
      }
    ],
    indications: [
      { name: "Symptomatic Bradycardia" },
      { name: "Organophosphate / Nerve Agent Poisoning" }
    ],
    contraindications: [
      { text: "No absolute contraindications in ACLS or nerve agent/OP poisoning" },
      { text: "Documented hypersensitivity (non-emergency use only)" },
      { text: "Narrow-angle glaucoma", relative: true },
      { text: "GI obstruction / severe ulcerative colitis / toxic megacolon", relative: true },
      { text: "Bladder outlet obstruction", relative: true },
      { text: "Myasthenia gravis", relative: true },
      { text: "Thyrotoxicosis", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Symptomatic Bradycardia",
        onset: "1-2 min (IV)",
        duration: "2-4 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mg",
            repeat: "q3-5 min",
            maxDose: "3 mg total",
            notes: ["Push rapidly - slow injection may cause paradoxical bradycardia"]
          }
        ],
        notes: ["Ineffective in hypothermic bradycardia", "Cardiac transplant patients will not respond (denervated heart) - proceed to pacing or chronotropic agents"]
      },
      {
        population: "Adult",
        indication: "Organophosphate / Nerve Agent Poisoning",
        onset: "1-2 min (IV); ~15 min (IM)",
        duration: "2-4 hrs",
        routes: [
          {
            via: ["IV", "IO", "IM"],
            amount: "2 mg",
            repeat: "q5 min until secretions dry",
            notes: ["No maximum dose in OP/nerve agent poisoning - titrate to drying of secretions", "May also use AtroPen 2 mg IM auto-injector or DuoDote"]
          }
        ],
        notes: ["Only reverses muscarinic effects (secretions, bradycardia, bronchospasm) - will NOT reverse nicotinic effects (muscle weakness, paralysis, fasciculations)", "Administer pralidoxime concurrently for organophosphate poisoning"]
      },
      {
        population: "Pediatric",
        indication: "Symptomatic Bradycardia",
        onset: "1-2 min (IV)",
        duration: "2-4 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.02 mg/kg",
            repeat: "q5 min",
            maxDose: "0.5 mg/dose; 1 mg total",
            notes: ["Minimum single dose 0.1 mg - doses below this may cause paradoxical bradycardia"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Organophosphate / Nerve Agent Poisoning",
        onset: "1-2 min (IV); ~15 min (IM)",
        duration: "2-4 hrs",
        routes: [
          {
            via: ["IV", "IO", "IM"],
            amount: "0.02 mg/kg",
            repeat: "q5 min until secretions dry",
            notes: ["Minimum single dose 0.1 mg", "No maximum dose - titrate to drying of secretions"]
          }
        ],
        notes: ["AtroPen weight-based: <15 kg → 0.5 mg IM; 15-40 kg → 1 mg IM; >40 kg → 2 mg IM"]
      }
    ],
    adverseEffects: [
      "Tachycardia",
      "Dry mouth / decreased secretions",
      "Mydriasis / blurred vision",
      "Urinary retention",
      "Flushed, warm, dry skin",
      "Confusion / agitation (especially elderly)",
      "Paradoxical bradycardia (low doses or slow IV push)"
    ],
    precautions: [
      '<span class="hl hl--danger">Ineffective in hypothermic bradycardia</span> - do not delay pacing for repeated atropine doses if the patient is hypothermic.',
      '<span class="hl hl--danger">Will not work in denervated hearts</span> (cardiac transplant patients) - proceed directly to chronotropic agents (epinephrine, dopamine) or transcutaneous pacing.',
      '<span class="hl hl--warn">Push IV atropine rapidly</span> - slow injection or doses &lt;0.1 mg can paradoxically increase vagal tone and worsen bradycardia.',
      'In organophosphate/nerve agent poisoning, <span class="hl hl--danger">there is no maximum dose</span> - titrate to drying of tracheobronchial secretions. Severe OP poisoning may require tens to hundreds of milligrams over days.',
      'Atropine <strong>only blocks muscarinic effects</strong> of OP poisoning - nicotinic effects (skeletal muscle weakness, fasciculations, respiratory muscle paralysis) require pralidoxime and/or ventilatory support.',
      '<span class="hl hl--warn">Atropine may have little or no effect</span> in beta-blocker or calcium channel blocker overdose - likely more helpful in mild poisonings. Hypotension may not respond even if bradycardia corrects.',
      'Classic atropine toxicity mnemonic: "Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter" - watch for these signs when giving large doses.'
    ]
  },
  {
    id: "bumetanide",
    summary: "A loop diuretic approximately 40 times more potent than furosemide by weight, used for acute pulmonary edema when aggressive diuresis is needed. Current evidence favors vasodilators over diuretics as first-line prehospital CHF treatment.",
    genericName: "Bumetanide",
    tradeNames: ["Bumex"],
    category: ["Cardiovascular"],
    classes: ["Loop Diuretic"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Blocks sodium and chloride reabsorption in the thick ascending limb of the loop of Henle, producing profound diuresis with loss of sodium, potassium, chloride, and water. Also causes venodilation that reduces preload before diuresis begins.',
        target: { name: "NKCC2 cotransporter (loop of Henle)", action: "blocker", result: "Profound diuresis, ↓ preload", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "Acute Pulmonary Edema / CHF" }
    ],
    contraindications: [
      { text: "Hypersensitivity to bumetanide or sulfonamides" },
      { text: "Anuria or severe renal failure" },
      { text: "Severe electrolyte depletion (hypokalemia, hyponatremia)" },
      { text: "Hepatic coma or severe hepatic impairment" },
      { text: "Hypovolemia / dehydration" },
      { text: "Hypotension (SBP <90 mmHg)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "2-5 min (IV); venodilation within minutes, diuresis peaks 15-30 min",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.5-1 mg",
            repeat: "May repeat in 2-3 hrs if inadequate response",
            maxDose: "10 mg/day",
            notes: [
              "Administer IV push over 1-2 min",
              "1 mg bumetanide ≈ 40 mg furosemide - dose accordingly when switching agents"
            ]
          }
        ],
        notes: ["Prehospital use is typically a single IV bolus - infusions and repeat dosing are hospital management"]
      }
    ],
    adverseEffects: [
      "Hypokalemia",
      "Hyponatremia / electrolyte depletion",
      "Hypotension / orthostatic hypotension",
      "Dehydration / hypovolemia",
      "Ototoxicity (especially with rapid IV push or renal impairment)",
      "Hyperglycemia",
      "Metabolic alkalosis",
      "Dizziness / headache",
      "Muscle cramps"
    ],
    precautions: [
      '<span class="hl hl--danger">NASEMSO discourages routine prehospital diuretics</span> - pulmonary edema is more commonly a problem of volume <em>redistribution</em> than total body fluid overload. Vasodilators (nitroglycerin, CPAP) are preferred first-line prehospital therapies.',
      '<span class="hl hl--warn">Potent drug - 40x furosemide</span>. A 1 mg dose of bumetanide produces diuresis equivalent to 40 mg of furosemide. Small dosing errors cause large clinical effects.',
      '<span class="hl hl--warn">Assess volume status before administration</span> - inappropriate diuresis in patients misdiagnosed with CHF (e.g., pneumonia, sepsis, COPD exacerbation) can cause profound hypotension and increased mortality.',
      'Rapid IV push increases risk of <span class="hl hl--warn">ototoxicity</span> - administer over 1-2 minutes. Risk is highest with concurrent aminoglycoside use or renal impairment.',
      '<span class="hl hl--warn">Monitor potassium</span> - loop diuretics cause significant potassium wasting. Hypokalemia increases the risk of dysrhythmias, especially in patients on digoxin.',
      'Cross-sensitivity with <span class="hl hl--warn">sulfonamide allergy</span> is historically cited but likely overstated - true cross-reactivity is rare. Use clinical judgment in the emergent setting.'
    ]
  },
  {
    id: "calcium-chloride",
    summary: "Provides elemental calcium to stabilize cardiac membranes in hyperkalemia and overcome calcium channel blockade in CCB overdose. Contains three times more elemental calcium per gram than calcium gluconate but is caustic to peripheral veins.",
    genericName: "Calcium Chloride",
    tradeNames: [],
    category: ["Cardiovascular", "Toxicology", "Endocrine & Metabolic"],
    classes: ["Electrolyte", "Antidote"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Stabilizes cardiac cell membranes by raising the threshold potential, reducing the risk of fatal dysrhythmias caused by hyperkalemia. Does not lower serum potassium; it buys time by protecting the heart while other treatments work.',
        target: { name: "Cardiac cell membranes", action: "stabilizer", result: "↑ Threshold potential, ↓ dysrhythmia risk", system: "ion-channel" }
      },
      {
        brief: 'Helps overcome competitive blockade of L-type calcium channels in CCB overdose, partially restoring cardiac contractility and vascular tone.',
        target: { name: "L-type calcium channels", action: "donor", result: "Partially restores contractility & vascular tone", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "Hyperkalemia" },
      { name: "CCB Overdose" },
      { name: "Hydrofluoric Acid Exposure (Systemic)", sameDoseAs: "Hyperkalemia" }
    ],
    contraindications: [
      { text: "Hypercalcemia" },
      { text: "Documented hypersensitivity" },
      { text: "Severe hypokalemia (may precipitate fatal arrhythmias)" },
      { text: "Digoxin toxicity (historically cited - NASEMSO states this concern is not supported and should not prevent use)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Hyperkalemia",
        onset: "1-3 min",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 g (10 mL of 10%)",
            notes: [
              "Administer over 5 minutes; ensure IV patency and do not exceed 1 mL/min",
              "In cardiac arrest with suspected hyperkalemia: administer over 2 minutes",
              "Use large-bore, patent, preferably central IV - CaCl causes severe tissue necrosis with extravasation"
            ]
          }
        ],
        notes: ["CaCl does NOT lower potassium - it stabilizes the myocardium while bicarb, albuterol, and insulin work to shift K⁺ intracellularly"]
      },
      {
        population: "Adult",
        indication: "CCB Overdose",
        onset: "1-3 min",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.5-1 g",
            repeat: "May repeat PRN",
            notes: [
              "Administer slowly at 50 mg/min",
              "Ensure IV patency - severe tissue necrosis with extravasation"
            ]
          }
        ],
        notes: ["If calcium, atropine, and vasopressors fail, consider glucagon as next-line agent"]
      },
      {
        population: "Pediatric",
        indication: "Hyperkalemia",
        onset: "1-3 min",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "20 mg/kg (0.2 mL/kg of 10%)",
            maxDose: "1 g",
            notes: [
              "Administer over 5 minutes; over 2 minutes in cardiac arrest",
              "Calcium gluconate is preferred in pediatrics - CaCl has increased risk of tissue damage"
            ]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "CCB Overdose",
        onset: "1-3 min",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "20 mg/kg (0.2 mL/kg of 10%)",
            maxDose: "1 g or 10 mL",
            notes: [
              "Administer slowly over 10 minutes (50 mg/mL)",
              "Calcium gluconate is preferred in pediatrics - CaCl has increased risk of tissue damage"
            ]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Hypotension (with rapid administration)",
      "Bradycardia",
      "Tissue necrosis / extravasation injury",
      "Flushing / warmth",
      "Nausea / vomiting",
      "Cardiac arrest (with rapid IV push)",
      "Hypercalcemia (with repeated doses)"
    ],
    precautions: [
      '<span class="hl hl--danger">Severe tissue necrosis with extravasation</span> - administer through a large-bore, patent IV, preferably central. If peripheral IV is used, confirm patency first. Calcium gluconate is less caustic and preferred when central access is unavailable.',
      '<span class="hl hl--danger">CaCl provides 3x more elemental calcium than calcium gluconate</span> (272 mg/g vs 93 mg/g) - do NOT substitute 1:1. When converting from gluconate, use roughly 1/3 the dose of CaCl.',
      '<span class="hl hl--warn">Rapid IV push can cause bradycardia, hypotension, and cardiac arrest</span> - administer over 5 minutes in non-arrest patients. Only push faster (over 2 min) in cardiac arrest.',
      'The historical concern about giving calcium to patients on <span class="hl hl--warn">digoxin</span> is addressed by NASEMSO: "felt to be a historical belief and not supported." Do not withhold calcium in life-threatening hyperkalemia or CCB overdose due to concurrent digoxin use.',
      'CaCl <strong>does not lower serum potassium</strong> - it only stabilizes the cardiac membrane. Always pair with potassium-lowering treatments (sodium bicarbonate, nebulized albuterol, insulin/dextrose in hospital).',
      'For <span class="hl hl--beta">hydrofluoric acid burns</span>, calcium gluconate (topical gel + IV) is the preferred calcium salt per NASEMSO protocols. CaCl IV may be used for systemic hypocalcemia if gluconate is unavailable.'
    ]
  },
  {
    id: "dobutamine",
    summary: "A synthetic catecholamine used as the primary inotrope for cardiogenic shock. Increases cardiac contractility and output without the vasoconstriction of dopamine or norepinephrine.",
    genericName: "Dobutamine",
    tradeNames: ["Dobutrex"],
    category: ["Cardiovascular"],
    classes: ["Sympathomimetic", "Catecholamine"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Increases contractility and cardiac output with modest heart rate increase at therapeutic doses.',
        target: { name: "β-1 receptors", action: "agonist", result: "↑ Contractility, ↑ cardiac output", system: "adrenergic" }
      },
      {
        brief: 'Produces mild peripheral vasodilation, reducing afterload. The alpha-1 effects of its two isomers cancel each other out, leaving a net inodilator profile: improved output with reduced SVR.',
        target: { name: "β-2 receptors", action: "agonist", result: "Mild vasodilation, ↓ SVR", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Cardiogenic Shock" }
    ],
    contraindications: [
      { text: "Idiopathic hypertrophic subaortic stenosis (IHSS/HOCM) - increases dynamic outflow obstruction" },
      { text: "Hypersensitivity to dobutamine or sulfites" },
      { text: "Uncorrected tachyarrhythmia", relative: true },
      { text: "Severe uncorrected hypovolemia - will worsen hypotension", relative: true },
      { text: "Use with halogenated anesthetics (halothane) - risk of fatal arrhythmia", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "1-2 min",
        duration: "Duration of infusion (half-life ~2 min)",
        routes: [
          {
            via: ["IV drip"],
            amount: "2-20 mcg/kg/min",
            notes: [
              "Start at 2-5 mcg/kg/min and titrate to hemodynamic effect",
              "Titrate to MAP ≥65 mmHg and signs of adequate perfusion (mentation, urine output, lactate)",
              "Mix 250 mg in 250 mL D5W or NS (1 mg/mL) - use infusion pump"
            ]
          }
        ],
        notes: ["Correct hypovolemia before starting - dobutamine will worsen hypotension in volume-depleted patients", "May need to pair with a vasopressor (norepinephrine) if SVR is low, as dobutamine can reduce afterload"]
      }
    ],
    adverseEffects: [
      "Tachycardia (dose-dependent)",
      "Dysrhythmias (PVCs, ventricular tachycardia)",
      "Hypotension (paradoxical - from β-2 vasodilation at higher doses)",
      "Hypertension",
      "Angina / increased myocardial oxygen demand",
      "Headache",
      "Nausea",
      "Phlebitis at injection site"
    ],
    precautions: [
      '<span class="hl hl--danger">Correct hypovolemia FIRST</span> - dobutamine in a volume-depleted patient will cause profound hypotension. Ensure adequate preload before initiating.',
      '<span class="hl hl--warn">Increases myocardial oxygen demand</span> - use cautiously in patients with acute MI or known coronary disease. The increase in contractility and heart rate raises oxygen consumption, which may extend infarct size.',
      '<span class="hl hl--warn">Paradoxical hypotension</span> can occur at higher doses due to β-2 vasodilation outpacing the increase in cardiac output. If BP drops, reduce dose and consider adding a vasopressor (norepinephrine).',
      '<span class="hl hl--danger">Contraindicated in HOCM/IHSS</span> - increased contractility worsens dynamic left ventricular outflow tract obstruction and can cause cardiovascular collapse.',
      'Not in the NASEMSO formulary - primarily a <strong>critical care transport</strong> and advanced paramedic drug. Some EMS systems carry it; many do not.',
      'Dobutamine has a <strong>2-minute half-life</strong> - effects wear off rapidly when the infusion is stopped. This is both a safety feature (easy to titrate) and a limitation (must maintain continuous infusion).',
      'In septic shock, dobutamine is recommended as an <strong>adjunct</strong> to norepinephrine when cardiac output remains inadequate despite adequate fluid resuscitation and vasopressor support - it is not a first-line vasopressor.'
    ]
  },
  {
    id: "dexamethasone",
    summary: "A long-acting corticosteroid approximately 25 times more potent than hydrocortisone, preferred in EMS for croup and bronchospasm. A single dose lasts 36 to 72 hours.",
    genericName: "Dexamethasone",
    tradeNames: ["Decadron", "Dexasone"],
    category: ["Airway & Respiratory", "Allergic & Immune"],
    classes: ["Corticosteroid"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Suppresses inflammatory mediators including prostaglandins, leukotrienes, and cytokines by altering gene transcription. Reduces airway edema, capillary permeability, and inflammatory cell migration. Minimal mineralocorticoid activity.',
        target: { name: "Glucocorticoid receptors", action: "agonist", result: "Broad anti-inflammatory & immunosuppressive effect", system: "inflammatory" }
      }
    ],
    indications: [
      { name: "Croup / Bronchospasm" },
      { name: "Adrenal Crisis", sameDoseAs: "Croup / Bronchospasm" },
      { name: "Acute Mountain Sickness" },
      { name: "HACE" }
    ],
    contraindications: [
      { text: "Documented hypersensitivity" },
      { text: "Systemic fungal infection" },
      { text: "Cerebral malaria" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Croup / Bronchospasm",
        onset: "1-2 hrs (anti-inflammatory effect)",
        duration: "36-72 hrs",
        routes: [
          {
            via: ["PO"],
            amount: "0.6 mg/kg",
            maxDose: "16 mg",
            notes: ["PO solution preferred for non-critical patients - avoids need for IV placement", "IV solution may be given PO"]
          },
          {
            via: ["IV", "IM"],
            amount: "0.6 mg/kg",
            maxDose: "16 mg",
            notes: ["IV/IM for critically ill patients or those unable to take PO"]
          }
        ],
        notes: ["Single dose is equally effective as multi-day courses of prednisone/prednisolone - NASEMSO preferred steroid for prehospital use"]
      },
      {
        population: "Pediatric",
        indication: "Croup / Bronchospasm",
        onset: "1-2 hrs (clinical benefit in croup may begin within 30 min)",
        duration: "36-72 hrs",
        routes: [
          {
            via: ["PO"],
            amount: "0.6 mg/kg",
            maxDose: "16 mg",
            notes: ["PO solution preferred - tastes better than prednisolone and requires only a single dose", "IV solution may be given PO"]
          },
          {
            via: ["IV", "IM"],
            amount: "0.6 mg/kg",
            maxDose: "16 mg",
            notes: ["Reserve IV/IM for severe respiratory distress or inability to take PO"]
          }
        ],
        notes: ["For croup: administer alongside nebulized epinephrine in moderate-to-severe cases"]
      },
      {
        population: "Adult",
        indication: "Acute Mountain Sickness",
        onset: "1-2 hrs",
        duration: "36-72 hrs",
        routes: [
          {
            via: ["IV", "IM", "PO"],
            amount: "4 mg",
            repeat: "q6 hrs until symptoms resolve",
            notes: []
          }
        ],
        notes: ["Adjunctive to descent - dexamethasone does NOT facilitate acclimatization", "Descent is the definitive therapy for all altitude illness"]
      },
      {
        population: "Pediatric",
        indication: "Acute Mountain Sickness",
        onset: "1-2 hrs",
        duration: "36-72 hrs",
        routes: [
          {
            via: ["IV", "IM", "PO"],
            amount: "0.15 mg/kg",
            repeat: "q6 hrs",
            maxDose: "4 mg/dose",
            notes: []
          }
        ],
        notes: []
      },
      {
        population: "Adult",
        indication: "HACE",
        onset: "1-2 hrs",
        duration: "36-72 hrs",
        routes: [
          {
            via: ["IV", "IM", "PO"],
            amount: "8 mg initial, then 4 mg q6 hrs",
            notes: []
          }
        ],
        notes: ["Initiate immediately - adjunctive to descent, which remains the primary treatment"]
      },
      {
        population: "Pediatric",
        indication: "HACE",
        onset: "1-2 hrs",
        duration: "36-72 hrs",
        routes: [
          {
            via: ["IV", "IM", "PO"],
            amount: "0.15 mg/kg",
            repeat: "q6 hrs",
            notes: []
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Hyperglycemia (most relevant to single-dose prehospital use)",
      "GI upset / epigastric burning",
      "Insomnia / agitation",
      "Transient immunosuppression",
      "Flushing",
      "Mood changes / euphoria"
    ],
    precautions: [
      '<span class="hl hl--warn">Onset is 1-2 hours</span> - dexamethasone does NOT provide immediate relief. Bronchodilators (albuterol) and nebulized epinephrine (for croup) are the acute treatments; steroids prevent the delayed inflammatory wave.',
      '<span class="hl hl--beta">Single dose = multi-day course</span> - NASEMSO states a single dose of dexamethasone is equally effective as several days of other steroids. This is its key advantage over prednisone/prednisolone and the reason it is the preferred prehospital steroid.',
      '<span class="hl hl--warn">Check blood glucose</span> in diabetic patients - even a single dose can cause clinically significant hyperglycemia.',
      'For <span class="hl hl--warn">adrenal crisis</span>, hydrocortisone succinate is preferred over dexamethasone because of its dual glucocorticoid + mineralocorticoid effects. Use dexamethasone only if hydrocortisone is unavailable.',
      'In altitude illness, dexamethasone treats symptoms but <strong>does not facilitate acclimatization</strong> - patients must still descend. Descent is always the definitive therapy.',
      '~25x more potent than hydrocortisone and ~6x more potent than methylprednisolone - dose accordingly when converting between steroids.'
    ]
  },
  {
    id: "dextrose",
    summary: "Intravenous glucose for correction of symptomatic hypoglycemia. D10 is the preferred prehospital concentration, equally effective as D50 with less risk of extravasation injury and overshoot hyperglycemia.",
    genericName: "Dextrose",
    tradeNames: ["D50W", "D25W", "D10W"],
    category: ["Endocrine & Metabolic"],
    classes: ["Carbohydrate"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Provides glucose directly into the bloodstream, immediately raising blood glucose and restoring substrate for cerebral and cellular metabolism.',
        target: { name: "Cellular glucose uptake", action: "donor", result: "Immediate ↑ blood glucose", system: "metabolic" }
      }
    ],
    indications: [
      { name: "Hypoglycemia" }
    ],
    contraindications: [
      { text: "Hyperglycemia" },
      { text: "Diabetic coma (hyperglycemic crisis / DKA)" },
      { text: "Intracranial or intraspinal hemorrhage" },
      { text: "Dehydrated patients with delirium" },
      { text: "Glucose-galactose malabsorption syndrome" },
      { text: "Documented hypersensitivity" }
    ],
    doses: [
      {
        population: "Adult",
        formulation: "D10W (10%) preferred",
        onset: "1-5 min",
        duration: "15-60 min (depends on underlying cause)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "25 g",
            maxDose: "25 g total field dose",
            notes: [
              "Administer in incremental doses until mental status improves",
              "D10: 250 mL; D25: 100 mL; D50: 50 mL - all deliver 25 g glucose",
              "D10 is preferred - safer, less sclerotic, lower risk of extravasation injury"
            ]
          }
        ],
        notes: ["Avoid overshoot hyperglycemia - give in small aliquots and reassess", "Recheck BGL after administration; repeat if BGL remains <60 mg/dL and symptoms persist"]
      },
      {
        population: "Pediatric",
        qualifier: ">8 yrs",
        formulation: "D25W (25%)",
        onset: "1-5 min",
        duration: "15-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.5-1 g/kg (2-4 mL/kg of D25)",
            notes: ["Administer in incremental doses until mental status improves"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        qualifier: "≤8 yrs",
        formulation: "D10W (10%)",
        onset: "1-5 min",
        duration: "15-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.5-1 g/kg (5-10 mL/kg of D10)",
            notes: ["Administer in incremental doses until mental status improves"]
          }
        ],
        notes: ["Do NOT use D50 in pediatric patients - high osmolarity causes vein sclerosis and tissue necrosis"]
      },
      {
        population: "Neonatal",
        formulation: "D10W (10%)",
        onset: "1-5 min",
        duration: "15-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.5-1 g/kg (2 mL/kg of D10)",
            notes: ["Use D10 only - higher concentrations are dangerous in neonates"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Overshoot hyperglycemia",
      "Phlebitis / vein sclerosis (especially D50)",
      "Tissue necrosis with extravasation (especially D50)",
      "Cerebral edema (rapid hyperosmolar shifts, rare)",
      "Warmth / pain at injection site"
    ],
    precautions: [
      '<span class="hl hl--beta">D10 is preferred over D50</span> - NASEMSO states D10 is as effective and safer than higher concentrations. D50 is hyperosmolar (2,525 mOsm/L) and causes severe phlebitis and tissue necrosis with extravasation.',
      '<span class="hl hl--warn">Administer in incremental doses</span> - give small aliquots and reassess mental status between doses. Do not push the entire volume at once. The goal is euglycemia (>60 mg/dL with improved mentation), not a specific number.',
      '<span class="hl hl--warn">Avoid overshoot hyperglycemia</span> - excessive dextrose worsens neurologic outcomes in stroke and post-cardiac arrest patients. Titrate to clinical effect.',
      'Consider <span class="hl hl--warn">thiamine</span> in malnourished or alcoholic patients - chronic thiamine deficiency means glucose loading can precipitate Wernicke encephalopathy. If both are available, give thiamine first or concurrently. If only dextrose is available, give it - do NOT withhold.',
      '<span class="hl hl--danger">Never use D50 or D25 in neonates</span> - use D10 only. Higher concentrations cause dangerous osmolar shifts and severe vein/tissue injury in neonatal vasculature.',
      'If IV access cannot be established, glucagon IM/IN is the alternative for hypoglycemia - dextrose requires vascular access.'
    ]
  },
  {
    id: "famotidine",
    summary: "An H2 receptor antagonist used as an adjunct to diphenhydramine for allergic reactions and urticaria. Blocks histamine at H2 receptors on vasculature and GI tract to reduce vasodilation and glandular secretion.",
    genericName: "Famotidine",
    tradeNames: ["Pepcid"],
    category: ["Toxicology", "Allergic & Immune"],
    classes: ["Antihistamine"],
    source: "Mixed",
    moa: [
      {
        brief: 'Reduces histamine-mediated vasodilation, capillary permeability, and gastric acid secretion. Complements H1 blockers like diphenhydramine by covering the approximately 15% of histamine effects mediated through H2 receptors.',
        target: { name: "Histamine H2 receptors", action: "antagonist", result: "↓ Vasodilation, ↓ capillary permeability, ↓ gastric acid", system: "histaminergic" }
      }
    ],
    indications: [
      { name: "Allergic Reaction / Urticaria" }
    ],
    contraindications: [
      { text: "Hypersensitivity to famotidine or other H2-receptor antagonists" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "15-30 min (IV)",
        duration: "10-12 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "20 mg",
            notes: ["Administer IV push over 2 minutes", "Give as adjunct to diphenhydramine (H1 blocker) - not a standalone treatment"]
          },
          {
            via: ["PO"],
            amount: "20 mg",
            notes: ["PO option for mild urticaria without IV access"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        onset: "15-30 min (IV)",
        duration: "10-12 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.25 mg/kg",
            maxDose: "20 mg",
            notes: ["Administer IV push over 2 minutes"]
          },
          {
            via: ["PO"],
            amount: "0.5 mg/kg",
            maxDose: "40 mg",
            notes: []
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Headache",
      "Dizziness",
      "Constipation / diarrhea",
      "Nausea",
      "Injection site reaction (IV)"
    ],
    precautions: [
      '<span class="hl hl--warn">Adjunct only - not a first-line treatment</span> for anaphylaxis or allergic reactions. Epinephrine is first-line for anaphylaxis; diphenhydramine (H1 blocker) is first-line for urticaria. Famotidine supplements H1 blockade by covering H2-mediated histamine effects.',
      'NASEMSO lists famotidine as a supplement to diphenhydramine for urticaria - "any H2-blocking antihistamine can be given IV or PO in conjunction with diphenhydramine."',
      '<span class="hl hl--beta">Preferred over cimetidine</span> in the prehospital setting - cimetidine causes hypotension with rapid IV infusion and has numerous drug interactions. Famotidine has a cleaner side effect profile.',
      'Reduce dose in <span class="hl hl--warn">renal impairment</span> - famotidine is primarily renally excreted. Half the dose or double the interval in patients with known severe renal disease.',
      'Antihistamines (H1 and H2) treat only the cutaneous and GI manifestations of allergic reactions - they have <strong>no role in treating the respiratory or cardiovascular collapse</strong> of anaphylaxis.'
    ]
  },
  {
    id: "fentanyl",
    summary: "A synthetic opioid analgesic used for severe pain and procedural sedation, roughly 100 times more potent than morphine by weight. Faster onset, shorter duration, and better hemodynamic stability than morphine due to no histamine release.",
    genericName: "Fentanyl",
    tradeNames: ["Sublimaze"],
    category: ["Pain Management", "Sedation & Anesthesia"],
    classes: ["Opioid Analgesic", "Sedative"],
    source: "Mixed",
    moa: [
      {
        brief: 'Suppresses pain signal transmission in the CNS by blocking neurotransmitter release, producing potent analgesia and sedation. Does not cause histamine release, making it more hemodynamically stable than morphine.',
        target: { name: "μ-opioid receptors", action: "agonist", result: "Potent analgesia & sedation", system: "opioid" }
      }
    ],
    indications: [
      { name: "Acute Pain" }
    ],
    contraindications: [
      { text: "Hypersensitivity to fentanyl" },
      { text: "Respiratory depression without ventilatory support" },
      { text: "Known or suspected paralytic ileus", relative: true },
      { text: "Concurrent MAO inhibitor use (within 14 days)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "1-2 min (IV); 1-5 min (IN); 7-15 min (IM)",
        duration: "30-60 min (IV); 1-2 hrs (IN/IM)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mcg/kg",
            repeat: "q5-15 min PRN",
            maxDose: "3 mcg/kg total",
            notes: ["Administer slow IV push over 1-2 min", "Typical adult dose 50-100 mcg"]
          },
          {
            via: ["IN"],
            amount: "1-2 mcg/kg",
            repeat: "May repeat once after 10-15 min",
            maxDose: "100 mcg per nostril",
            notes: ["Use atomizer device (MAD)", "Max 1 mL per nostril for adequate absorption - split dose between nares if volume exceeds 1 mL"]
          },
          {
            via: ["IM"],
            amount: "1-2 mcg/kg",
            notes: ["Reserve for patients without IV/IN access"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        onset: "1-2 min (IV); 1-5 min (IN); 7-15 min (IM)",
        duration: "30-60 min (IV); 1-2 hrs (IN/IM)",
        routes: [
          {
            via: ["IN"],
            amount: "1.5 mcg/kg",
            repeat: "May repeat once after 10-15 min",
            notes: ["IN is the preferred initial route in pediatrics - avoids painful IV placement", "Use atomizer device (MAD)"]
          },
          {
            via: ["IV", "IO"],
            amount: "1 mcg/kg",
            repeat: "q5-15 min PRN",
            notes: ["Administer slow IV push"]
          }
        ],
        notes: ["NASEMSO/NAEMSP: IN opioid analgesia is preferred as the initial route in pediatrics where IV access may be problematic"]
      },
      {
        population: "Geriatric",
        onset: "1-2 min (IV); 1-5 min (IN)",
        duration: "30-60 min (IV); 1-2 hrs (IN)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.5 mcg/kg",
            repeat: "q10-15 min PRN",
            notes: ["Start low and titrate - elderly are more sensitive to respiratory depression", "Typical initial dose 25 mcg"]
          },
          {
            via: ["IN"],
            amount: "1 mcg/kg",
            notes: ["Use atomizer device (MAD)"]
          }
        ],
        notes: ["Reduced dosing due to increased sensitivity and decreased clearance"]
      }
    ],
    adverseEffects: [
      "Respiratory depression (dose-dependent, most dangerous)",
      "Chest wall rigidity (especially with rapid IV push or high doses)",
      "Nausea / vomiting",
      "Sedation / altered mental status",
      "Hypotension (less common than with morphine)",
      "Bradycardia",
      "Pruritus",
      "Miosis",
      "Urinary retention"
    ],
    precautions: [
      '<span class="hl hl--danger">Respiratory depression</span> is the primary life-threatening adverse effect - have naloxone immediately available and monitor SpO₂ and EtCO₂ continuously. Risk increases with concurrent CNS depressants (benzodiazepines, alcohol).',
      '<span class="hl hl--danger">Chest wall rigidity</span> ("wooden chest") can occur with rapid IV push or high doses - makes bag-valve-mask ventilation impossible. Treat with naloxone or neuromuscular blockade (succinylcholine/rocuronium). NASEMSO notes this is especially common in fentanyl/analog overdose.',
      '<span class="hl hl--warn">Use caution in head injury</span> - opioids can raise intracranial pressure and mask neurologic findings. However, untreated pain also raises ICP; do not withhold analgesia, but use the lowest effective dose and monitor closely.',
      '<span class="hl hl--warn">Use caution in hypotension</span> - though fentanyl causes less hemodynamic compromise than morphine (no histamine release), it can still cause bradycardia and mild hypotension via vagal stimulation.',
      '<span class="hl hl--beta">~100x more potent than morphine</span> by weight - 100 mcg fentanyl ≈ 10 mg morphine. Decimal point errors are potentially fatal. Always dose in <strong>micrograms</strong>, never milligrams.',
      'IN route is <strong>preferred for pediatric initial dosing</strong> per NASEMSO - provides rapid analgesia (~60 seconds) without the pain and stress of IV placement in children already in distress.',
      'Record pain scores before and after administration per NASEMSO - documentation of analgesic response is a key quality metric.'
    ]
  },
  {
    id: "flumazenil",
    summary: "A benzodiazepine antagonist used to reverse benzo-induced sedation and respiratory depression. Short duration means resedation is common.",
    genericName: "Flumazenil",
    tradeNames: ["Romazicon"],
    category: ["Toxicology"],
    classes: ["Antidote"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Competitively displaces bound benzodiazepines from the GABA-A receptor without activating it, reversing sedation, respiratory depression, and amnesia. Has minimal intrinsic activity.',
        target: { name: "GABA-A receptor (benzodiazepine site)", action: "antagonist", result: "Reverses benzo-induced sedation & respiratory depression", system: "GABAergic" }
      }
    ],
    indications: [
      { name: "Benzodiazepine Reversal" }
    ],
    contraindications: [
      { text: "Known chronic benzodiazepine dependence (precipitates withdrawal seizures)" },
      { text: "Co-ingestion of tricyclic antidepressants or other pro-convulsants" },
      { text: "Unknown or mixed drug overdose" },
      { text: "Patients receiving benzodiazepines for seizure control" },
      { text: "Patients with signs of serious cyclic antidepressant overdose (widened QRS, anticholinergic signs)" },
      { text: "Hypersensitivity to flumazenil or benzodiazepines" },
      { text: "Elevated intracranial pressure controlled by benzodiazepines", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "1-2 min (80% response within 3 min)",
        duration: "45-60 min (resedation common with long-acting benzos)",
        routes: [
          {
            via: ["IV"],
            amount: "0.2 mg",
            repeat: "0.2 mg q1 min",
            maxDose: "1 mg total (rarely up to 3 mg)",
            notes: ["Administer each dose over 15-30 seconds", "Wait at least 1 min between doses to assess effect", "Use the minimum effective dose - do not over-reverse"]
          }
        ],
        notes: ["If no response after 1 mg total, the sedation is unlikely benzodiazepine-mediated - look for other causes", "Monitor for resedation for at least 2 hours - flumazenil wears off before most benzodiazepines"]
      },
      {
        population: "Pediatric",
        onset: "1-2 min",
        duration: "45-60 min",
        routes: [
          {
            via: ["IV"],
            amount: "0.01 mg/kg",
            repeat: "q1 min",
            maxDose: "0.05 mg/kg or 1 mg total (whichever is lower)",
            notes: ["Administer each dose over 15-30 seconds"]
          }
        ],
        notes: ["Most commonly used for accidental pediatric ingestion or iatrogenic oversedation in benzo-naïve children"]
      }
    ],
    adverseEffects: [
      "Seizures (most dangerous - especially in benzo-dependent patients or TCA co-ingestion)",
      "Agitation / anxiety / panic",
      "Nausea / vomiting",
      "Resedation (as flumazenil wears off before the benzo)",
      "Dizziness / headache",
      "Withdrawal syndrome (in chronic benzo users)",
      "Ventricular arrhythmias (rare, associated with TCA co-ingestion)"
    ],
    precautions: [
      '<span class="hl hl--danger">NASEMSO warns against flumazenil in suspected benzodiazepine overdose</span> - "Flumazenil is not indicated in a suspected benzodiazepine overdose as it can precipitate refractory/intractable seizures if the patient is a benzodiazepine dependent patient."',
      '<span class="hl hl--danger">Seizure risk is the primary concern</span> - flumazenil can precipitate refractory seizures in patients who are benzo-dependent, have co-ingested TCA/pro-convulsants, or rely on benzos for seizure control. These seizures may be resistant to benzodiazepine treatment.',
      'The <strong>ideal use case</strong> is reversal of iatrogenic oversedation in a known benzo-naïve patient (e.g., procedural sedation with midazolam where the dose was excessive).',
      '<span class="hl hl--warn">Resedation is common</span> - flumazenil has a half-life of ~50 min, shorter than most benzodiazepines. Monitor for at least 2 hours after administration. Repeat dosing or infusion may be needed.',
      'Does <strong>NOT reverse</strong> sedation from barbiturates, ethanol, opioids, or general anesthetics - only blocks the benzodiazepine binding site on GABA-A receptors.',
      '<span class="hl hl--warn">Use the minimum effective dose</span> - partial reversal is safer than complete reversal. Rapid, complete reversal increases the risk of agitation, anxiety, and withdrawal.',
      'Not in the NASEMSO formulary - some EMS systems carry it for reversal of iatrogenic oversedation; most do not stock it for field overdose management.'
    ]
  },
  {
    id: "furosemide",
    summary: "The most widely used loop diuretic for acute pulmonary edema and CHF. Current evidence favors vasodilators over diuretics as first-line prehospital CHF treatment.",
    genericName: "Furosemide",
    tradeNames: ["Lasix"],
    category: ["Cardiovascular"],
    classes: ["Loop Diuretic"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Blocks sodium and chloride reabsorption in the thick ascending limb of the loop of Henle, producing rapid diuresis with loss of sodium, potassium, chloride, magnesium, and water. Also enhances prostaglandin production, causing venodilation that reduces preload before diuresis begins.',
        target: { name: "NKCC2 cotransporter (loop of Henle)", action: "blocker", result: "Diuresis, ↓ preload", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "Acute Pulmonary Edema / CHF" }
    ],
    contraindications: [
      { text: "Hypersensitivity to furosemide or sulfonamides" },
      { text: "Anuria" },
      { text: "Severe electrolyte depletion (hypokalemia, hyponatremia)" },
      { text: "Hepatic coma or severe hepatic impairment" },
      { text: "Hypovolemia / dehydration" },
      { text: "Hypotension (SBP <90 mmHg)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "~5 min (IV); venodilation within minutes, diuresis peaks 10-30 min",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "20-80 mg",
            notes: [
              "Administer IV push slowly over 1-2 min (no faster than 20 mg/min)",
              "If patient takes furosemide at home, initial IV dose may equal their total daily PO dose",
              "40 mg furosemide ≈ 1 mg bumetanide - dose accordingly when switching agents"
            ]
          }
        ],
        notes: ["Prehospital use is typically a single IV bolus - titration and repeat dosing are hospital management"]
      }
    ],
    adverseEffects: [
      "Hypokalemia",
      "Hyponatremia / electrolyte depletion",
      "Hypotension / orthostatic hypotension",
      "Dehydration / hypovolemia",
      "Ototoxicity (especially with rapid IV push, high doses, or renal impairment)",
      "Hyperglycemia",
      "Hyperuricemia / gout exacerbation",
      "Metabolic alkalosis",
      "Dizziness / headache",
      "Muscle cramps"
    ],
    precautions: [
      '<span class="hl hl--danger">NASEMSO discourages routine prehospital diuretics</span> - "Pulmonary edema is more commonly a problem of volume redistribution than total body fluid overload, so administration of diuretics such as furosemide provide no immediate benefit for most patients and can cause significant harm."',
      '<span class="hl hl--warn">Assess volume status before administration</span> - inappropriate diuresis in patients misdiagnosed with CHF (e.g., pneumonia, sepsis, COPD exacerbation) can cause profound hypotension and increased mortality.',
      'Vasodilators (nitroglycerin, CPAP/BiPAP) are the <strong>preferred first-line prehospital treatments</strong> for acute pulmonary edema per NASEMSO. Furosemide may be considered as an adjunct, not a replacement.',
      'Rapid IV push increases risk of <span class="hl hl--warn">ototoxicity</span> - administer no faster than 20 mg/min. Risk is highest with concurrent aminoglycoside use or renal impairment.',
      '<span class="hl hl--warn">Monitor potassium</span> - loop diuretics cause significant potassium wasting. Hypokalemia increases the risk of dysrhythmias, especially in patients on digoxin.',
      'IV furosemide is <strong>twice as potent</strong> as PO furosemide - when converting from a home PO dose, the IV equivalent is half the oral dose.',
      'Cross-sensitivity with <span class="hl hl--warn">sulfonamide allergy</span> is historically cited but likely overstated - true cross-reactivity is rare. Use clinical judgment in the emergent setting.'
    ]
  },
  {
    id: "glucagon",
    summary: "A hormone that raises blood glucose in hypoglycemia when IV access is not available. Also used as an antidote for beta-blocker and calcium channel blocker overdose.",
    genericName: "Glucagon",
    tradeNames: ["GlucaGen", "Baqsimi"],
    category: ["Endocrine & Metabolic", "Toxicology", "Cardiovascular"],
    classes: ["Hormone", "Antidote"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Triggers glycogen breakdown in the liver, raising blood glucose. Requires adequate hepatic glycogen stores and is ineffective in starved, chronically malnourished, or glycogen-depleted patients.',
        target: { name: "Hepatic glycogen stores", action: "stimulator", result: "Rapid ↑ blood glucose", system: "metabolic" }
      },
      {
        brief: 'Increases cardiac contractility and heart rate by bypassing the beta-receptor entirely. This is why it works in beta-blocker overdose; it does not need functional beta-receptors.',
        target: { name: "Adenylyl cyclase (cardiac)", action: "stimulator", result: "Positive inotropy & chronotropy", system: "adrenergic" }
      },
      {
        brief: 'Relaxes lower esophageal sphincter tone, which can relieve esophageal foreign body obstruction.',
        target: { name: "GI smooth muscle", action: "relaxant", result: "Relieves esophageal obstruction", system: "other" }
      }
    ],
    indications: [
      { name: "Hypoglycemia" },
      { name: "CCB/BB Overdose" }
    ],
    contraindications: [
      { text: "Hypersensitivity to glucagon" },
      { text: "Pheochromocytoma (can trigger catecholamine surge → hypertensive crisis)" },
      { text: "Insulinoma (transient glucose rise triggers rebound insulin release → worsens hypoglycemia)" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Hypoglycemia",
        onset: "5-15 min (IM); ~15 min (IN)",
        duration: "9-25 min",
        routes: [
          {
            via: ["IM", "IN"],
            amount: "1 mg",
            notes: [
              "IM/IN when IV access cannot be established - dextrose IV is preferred if access is available",
              "Prefilled IN dry powder (Baqsimi 3 mg) or prefilled IM autoinjector are alternatives"
            ]
          }
        ],
        notes: ["Requires adequate hepatic glycogen stores - may be ineffective in alcoholics, malnourished patients, or prolonged fasting", "Nausea/vomiting are extremely common - position patient to protect airway"]
      },
      {
        population: "Adult",
        indication: "CCB/BB Overdose",
        onset: "1-5 min (IV)",
        duration: "10-20 min",
        routes: [
          {
            via: ["IV"],
            amount: "5 mg",
            repeat: "May repeat in 5-10 min; then 1 mg q5 min",
            maxDose: "10-15 mg total",
            notes: ["Administer IVP", "May require 5-15 mg to see effect in severe CCB overdose"]
          }
        ],
        notes: ["Consider ondansetron prophylaxis - vomiting is extremely common at these high doses", "Bypasses blocked β-receptors via direct adenylyl cyclase activation - this is why it works when catecholamines fail"]
      },
      {
        population: "Pediatric",
        qualifier: "≥20 kg",
        indication: "Hypoglycemia",
        onset: "5-15 min (IM); ~15 min (IN)",
        duration: "9-25 min",
        routes: [
          {
            via: ["IM", "IN"],
            amount: "1 mg",
            notes: ["Prefilled IN dry powder (4 mg) available for patients >4 yrs", "Prefilled IM autoinjector is an alternative"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        qualifier: "<20 kg",
        indication: "Hypoglycemia",
        onset: "5-15 min (IM); ~15 min (IN)",
        duration: "9-25 min",
        routes: [
          {
            via: ["IM", "IN"],
            amount: "0.5 mg",
            notes: []
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        qualifier: "25-40 kg",
        indication: "CCB/BB Overdose",
        onset: "1-5 min (IV)",
        duration: "10-20 min",
        routes: [
          {
            via: ["IV"],
            amount: "1 mg",
            repeat: "q5 min as necessary",
            notes: []
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        qualifier: "<25 kg",
        indication: "CCB/BB Overdose",
        onset: "1-5 min (IV)",
        duration: "10-20 min",
        routes: [
          {
            via: ["IV"],
            amount: "0.5 mg",
            repeat: "q5 min as necessary",
            notes: []
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Nausea / vomiting (extremely common, especially at high doses)",
      "Hyperglycemia (transient)",
      "Tachycardia",
      "Hypertension (transient)",
      "Dizziness / headache",
      "Rebound hypoglycemia (as glycogen stores deplete)"
    ],
    precautions: [
      '<span class="hl hl--danger">Nausea and vomiting are extremely common</span> - NASEMSO specifically warns about this. Position patient to protect airway. Consider ondansetron prophylaxis when using high-dose glucagon for BB/CCB overdose.',
      '<span class="hl hl--warn">Requires hepatic glycogen stores</span> - glucagon will be ineffective in patients with depleted glycogen (chronic alcoholism, prolonged starvation, adrenal insufficiency, severe liver disease). Dextrose IV is the definitive treatment.',
      'For hypoglycemia, glucagon is a <strong>bridge when IV access is unavailable</strong> - it is NOT a substitute for IV dextrose. Once access is established, switch to dextrose.',
      'In BB/CCB overdose, glucagon <strong>bypasses the blocked β-receptor</strong> by directly activating adenylyl cyclase → ↑ cAMP → positive inotropy/chronotropy. This is why it works when epinephrine and dopamine fail.',
      '<span class="hl hl--warn">Rebound hypoglycemia</span> can occur after glucagon wears off as glycogen stores are depleted. Feed the patient carbohydrates once they can safely swallow, and monitor BGL.',
      'Must be reconstituted before use - mix powder with provided diluent. Use immediately after reconstitution.'
    ]
  },
  {
    id: "haloperidol",
    summary: "A first-generation antipsychotic used to manage acute psychosis and severe agitation. Carries a black box warning for QT prolongation and torsades, especially with IV use.",
    genericName: "Haloperidol",
    tradeNames: ["Haldol"],
    category: ["Neurological", "Sedation & Anesthesia"],
    classes: ["Antipsychotic"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Reduces psychotic symptoms, agitation, and combative behavior through dopamine antagonism in the mesolimbic pathway. Also depresses the reticular activating system, producing sedation.',
        target: { name: "Dopamine D₂ receptors", action: "antagonist", result: "↓ Agitation, ↓ psychosis, sedation", system: "dopaminergic" }
      }
    ],
    indications: [
      { name: "Acute Agitation / Psychosis" }
    ],
    contraindications: [
      { text: "Documented hypersensitivity" },
      { text: "Severe CNS depression (including coma)" },
      { text: "Neuroleptic malignant syndrome (history of or active)" },
      { text: "Poorly controlled seizure disorder" },
      { text: "Parkinson's disease (blocks dopamine → worsens symptoms)" },
      { text: "Known prolonged QT interval or concurrent QT-prolonging drugs", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "5-10 min (IV); 10-20 min (IM)",
        duration: "4-8 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "5 mg",
            notes: [
              "Off-label route - carries FDA black box warning for QT prolongation, torsades, and sudden death",
              "Continuous cardiac monitoring is REQUIRED with IV administration"
            ]
          },
          {
            via: ["IM"],
            amount: "5-10 mg",
            notes: ["IM is the preferred route - avoids the QT risks associated with IV push"]
          }
        ],
        notes: ["NASEMSO notes: limited data available, optimal dose not established"]
      },
      {
        population: "Pediatric",
        qualifier: "6-12 yrs",
        onset: "10-20 min (IM)",
        duration: "4-8 hrs",
        routes: [
          {
            via: ["IM"],
            amount: "1-3 mg",
            maxDose: "0.15 mg/kg",
            notes: []
          }
        ],
        notes: ["Limited pediatric data - use with caution"]
      }
    ],
    adverseEffects: [
      "QT prolongation → Torsades de pointes (especially IV)",
      "Acute dystonia (torticollis, oculogyric crisis, trismus)",
      "Akathisia (restlessness - can be mistaken for worsening agitation)",
      "Hypotension",
      "Sedation / drowsiness",
      "Neuroleptic malignant syndrome (rare but life-threatening)",
      "Lowered seizure threshold",
      "Laryngospasm (rare)"
    ],
    precautions: [
      '<span class="hl hl--danger">FDA black box warning for IV use</span> - risk of sudden death, torsades de pointes, and prolonged QT interval with off-label IV administration. Continuous cardiac monitoring is required if administering IV.',
      '<span class="hl hl--danger">Do NOT combine with promethazine</span> - NASEMSO warns that both prolong QT. If an antiemetic is needed, use ondansetron (less seizure and QT risk).',
      '<span class="hl hl--warn">Monitor for acute dystonia</span> - treat with diphenhydramine 25-50 mg IV/IM if dystonic reactions occur (torticollis, jaw clenching, eye deviation). This is an EPS effect, not an allergic reaction.',
      '<span class="hl hl--warn">Akathisia can mimic worsening agitation</span> - if a patient becomes more restless after haloperidol, consider akathisia before giving additional doses. Treat with benzodiazepines or diphenhydramine, not more haloperidol.',
      'NASEMSO notes haloperidol has <strong>limited data available and optimal dose not established</strong> for prehospital use - droperidol and ketamine are often preferred alternatives for high-violence-risk patients.',
      '<span class="hl hl--warn">Neuroleptic malignant syndrome (NMS)</span> is a rare but life-threatening reaction - fever, muscle rigidity, altered mental status, autonomic instability. Stop haloperidol immediately and provide aggressive cooling and supportive care.',
      'Haloperidol has a <strong>lower seizure threshold</strong> - use with caution in patients with seizure history. NASEMSO lists poorly controlled seizure disorder as a contraindication.'
    ]
  },
  {
    id: "diltiazem",
    summary: "A non-dihydropyridine calcium channel blocker used for rate control of SVT and rapid atrial fibrillation/flutter. Slows AV node conduction without the bronchospasm risk of beta-blockers.",
    genericName: "Diltiazem",
    tradeNames: ["Cardizem"],
    category: ["Cardiovascular"],
    classes: ["Class IV Antiarrhythmic"],
    source: "Mixed",
    moa: [
      {
        brief: 'Slows AV conduction and prolongs AV node refractoriness, reducing ventricular rate in atrial fibrillation and flutter and terminating AV node-dependent reentrant tachycardias.',
        target: { name: "L-type calcium channels (AV node)", action: "blocker", result: "↓ AV conduction, ↓ ventricular rate", system: "ion-channel" }
      },
      {
        brief: 'Causes coronary and systemic vasodilation, reducing afterload and myocardial oxygen demand.',
        target: { name: "L-type calcium channels (vascular smooth muscle)", action: "blocker", result: "Vasodilation, ↓ afterload", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "Narrow Complex Tachycardia (SVT / AFib / AFlutter)" }
    ],
    contraindications: [
      { text: "Wolff-Parkinson-White syndrome (WPW) or Lown-Ganong-Levine syndrome - AV nodal blockade can cause VF via unopposed accessory pathway conduction" },
      { text: "Symptomatic severe hypotension (SBP <90 mmHg)" },
      { text: "Sick sinus syndrome (without pacemaker)" },
      { text: "Second- or third-degree heart block (without pacemaker)" },
      { text: "Ventricular tachycardia - must confirm rhythm is supraventricular in origin" },
      { text: "Concurrent IV beta-blocker therapy - combined AV nodal blockade risks profound bradycardia/asystole" },
      { text: "Cardiogenic shock" },
      { text: "Documented hypersensitivity" },
      { text: "Decompensated CHF", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "2-5 min (IV)",
        duration: "1-3 hrs (bolus); continuous with drip",
        routes: [
          {
            via: ["IV"],
            amount: "0.25 mg/kg",
            repeat: "0.35 mg/kg after 15 min if inadequate response",
            notes: [
              "Administer slow IV push over 2 minutes",
              "Typical adult: ~20 mg initial, ~25 mg repeat",
              "Calculate dose using actual body weight"
            ]
          },
          {
            via: ["IV drip"],
            amount: "5-15 mg/hr",
            notes: [
              "Start at 5-10 mg/hr after successful bolus",
              "Titrate to heart rate; max 15 mg/hr",
              "Drip maintains rate control after bolus wears off"
            ]
          }
        ],
        notes: ["For AF/AFlutter: target is rate control (HR <100), not rhythm conversion", "For PSVT: adenosine is first-line per NASEMSO/ACLS; diltiazem is second-line if adenosine fails"]
      }
    ],
    adverseEffects: [
      "Hypotension (most common acute concern - 16-20% of patients)",
      "Bradycardia",
      "AV block (first-degree; rarely higher-degree)",
      "Dizziness / lightheadedness",
      "Flushing",
      "Nausea / headache",
      "Heart failure exacerbation (negative inotrope)"
    ],
    precautions: [
      '<span class="hl hl--danger">NEVER give in WPW or pre-excited atrial fibrillation</span> - NASEMSO warns that blocking the AV node in pre-excitation can force all impulses down the accessory pathway, causing ventricular fibrillation and death. Look for short PR, delta wave, wide-complex irregular rhythm.',
      '<span class="hl hl--danger">Do NOT combine with IV beta-blockers</span> - NASEMSO contraindication. Combined AV nodal blockade risks profound bradycardia, heart block, and asystole. Oral beta-blocker use is a relative caution, not an absolute CI.',
      '<span class="hl hl--warn">Hypotension is common</span> - occurs in 16-20% of patients. Have a fluid bolus ready. Consider calcium pretreatment (calcium chloride 500 mg-1 g or calcium gluconate 1-2 g IV) before diltiazem to mitigate hypotension.',
      '<span class="hl hl--warn">Confirm the rhythm is supraventricular before administration</span> - if there is any doubt whether a wide-complex tachycardia is VT vs. SVT with aberrancy, treat as VT. Diltiazem in VT can cause cardiovascular collapse.',
      'NASEMSO notes that patients with <span class="hl hl--warn">CHF may not tolerate diltiazem</span> - negative inotropy can worsen heart failure. Amiodarone or procainamide are alternatives for rate control in CHF patients.',
      'Adenosine is the <strong>first-line agent for stable SVT</strong> per NASEMSO/ACLS. Diltiazem is used when adenosine fails, for rate control of AF/AFlutter, or when a longer-acting agent is needed.',
      'Not recommended for pediatric prehospital use - adenosine is the preferred agent for pediatric SVT per NASEMSO. NASEMSO specifically notes verapamil should not be routinely used in infants; same caution applies to diltiazem.'
    ]
  },
  {
    id: "diazepam",
    summary: "A long-acting benzodiazepine for seizures and acute agitation. The rectal formulation makes it useful when IV, IM, and IN routes are unavailable, though midazolam has largely replaced it as first-line prehospital benzodiazepine.",
    genericName: "Diazepam",
    tradeNames: ["Valium", "Diastat"],
    category: ["Neurological", "Sedation & Anesthesia"],
    classes: ["Benzodiazepine", "Anticonvulsant", "Sedative"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Enhances the effect of GABA at the GABA-A receptor, increasing chloride channel opening frequency and producing neuronal hyperpolarization. Provides anticonvulsant, anxiolytic, sedative, and skeletal muscle relaxant effects.',
        target: { name: "GABA-A receptors", action: "enhancer", result: "Anticonvulsant, sedation, anxiolysis, muscle relaxation", system: "GABAergic" }
      }
    ],
    indications: [
      { name: "Seizures" },
      { name: "Agitation" }
    ],
    contraindications: [
      { text: "Documented hypersensitivity to diazepam or benzodiazepines" },
      { text: "Severe respiratory depression (without ventilatory support)" },
      { text: "Acute narrow-angle glaucoma", relative: true },
      { text: "Concurrent use with opioids (increased respiratory depression risk)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Seizures",
        onset: "1-3 min (IV); 5-15 min (PR)",
        duration: "15-60 min (anticonvulsant effect)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.2 mg/kg",
            maxDose: "10 mg",
            notes: ["Administer slow IV push - no faster than 5 mg/min to avoid respiratory depression and hypotension"]
          },
          {
            via: ["PR"],
            amount: "0.2 mg/kg",
            maxDose: "20 mg",
            notes: ["Rectal route (Diastat) only when IV/IO/IM/IN routes are unavailable", "NASEMSO: midazolam IM/IN is preferred over diazepam PR when IV is absent"]
          }
        ],
        notes: []
      },
      {
        population: "Adult",
        indication: "Agitation",
        onset: "1-3 min (IV); 15-30 min (IM)",
        duration: "30-90 min (sedation)",
        routes: [
          {
            via: ["IV"],
            amount: "5 mg",
            notes: ["Onset 2-5 min"]
          },
          {
            via: ["IM"],
            amount: "10 mg",
            notes: ["Onset 15-30 min - IM absorption is erratic and painful; midazolam IM is preferred"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Seizures",
        onset: "1-3 min (IV); 5-15 min (PR)",
        duration: "15-60 min (anticonvulsant effect)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.2 mg/kg",
            maxDose: "10 mg",
            notes: ["Administer slow IV push"]
          },
          {
            via: ["PR"],
            amount: "0.2 mg/kg",
            maxDose: "20 mg",
            notes: ["Diastat rectal gel available in prefilled syringes (2.5, 5, 10, 20 mg)", "Use only when no other route is available"]
          }
        ],
        notes: ["NASEMSO: midazolam IM 0.2 mg/kg (max 10 mg) is preferred over diazepam when IV is not established"]
      },
      {
        population: "Pediatric",
        indication: "Agitation",
        onset: "1-3 min (IV); 15-30 min (IM)",
        duration: "30-90 min",
        routes: [
          {
            via: ["IV"],
            amount: "0.05-0.1 mg/kg",
            maxDose: "5 mg",
            notes: []
          },
          {
            via: ["IM"],
            amount: "0.1-0.2 mg/kg",
            maxDose: "10 mg",
            notes: ["IM absorption is erratic in pediatrics - midazolam IM/IN preferred"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Respiratory depression (dose-dependent, potentiated by opioids/alcohol)",
      "Hypotension (especially with rapid IV push)",
      "Sedation / drowsiness",
      "Paradoxical agitation (especially in elderly and pediatrics)",
      "Injection site pain / phlebitis (IV - contains propylene glycol)",
      "Ataxia / dizziness",
      "Amnesia"
    ],
    precautions: [
      '<span class="hl hl--danger">Respiratory depression</span> is the primary risk - have bag-valve-mask and flumazenil available. Risk multiplies with concurrent opioids, alcohol, or other CNS depressants.',
      '<span class="hl hl--warn">IM absorption is erratic and painful</span> - diazepam is lipophilic and precipitates in muscle tissue. NASEMSO and evidence favor <strong>midazolam IM/IN as first-line</strong> when IV access is not available for both seizures and agitation.',
      '<span class="hl hl--warn">Slow IV push only</span> - administer no faster than 5 mg/min. Rapid IV push causes respiratory depression, hypotension, and apnea. The propylene glycol vehicle is irritating to veins.',
      'The rectal route (Diastat) is diazepam\'s <strong>unique niche</strong> - it provides reliable absorption when IV/IM/IN are all unavailable. This is most commonly used in pediatric seizures by caregivers with prescribed Diastat.',
      '<span class="hl hl--warn">Very long half-life</span> (20-100 hrs including active metabolites) - the clinical sedation wears off in 30-90 min, but the drug and metabolites persist for days. This complicates repeated dosing and increases cumulative CNS depression risk.',
      'Paradoxical agitation can occur, particularly in <span class="hl hl--warn">elderly and pediatric</span> patients - if agitation worsens after diazepam, consider paradoxical reaction before redosing.',
      '<span class="hl hl--warn">Do NOT mix with other drugs in IV line</span> - diazepam is incompatible with most IV solutions and precipitates easily. Flush the line before and after administration.'
    ]
  },
  {
    id: "oxygen",
    summary: "A therapeutic gas titrated to SpO2 94-98% for most patients, with 100% FiO2 reserved for cardiac arrest, CO and cyanide poisoning, and severe shock. Both hypoxia and hyperoxia cause harm.",
    genericName: "Oxygen",
    tradeNames: [],
    category: ["Airway & Respiratory", "Resuscitation"],
    classes: [],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Increases alveolar oxygen tension, improving hemoglobin saturation and tissue oxygen delivery. In CO poisoning, high-flow oxygen competitively displaces carbon monoxide from hemoglobin, reducing COHb half-life from approximately 5 hours on room air to 90 minutes on 100% oxygen.',
        target: { name: "Hemoglobin / alveolar-capillary membrane", action: "donor", result: "↑ SpO₂, ↑ tissue O₂ delivery", system: "other" }
      }
    ],
    indications: [
      { name: "Hypoxia / Respiratory Distress" },
      { name: "CO / Cyanide Poisoning" },
      { name: "Cardiac Arrest" }
    ],
    contraindications: [
      { text: "No absolute contraindications in the emergency setting" },
      { text: "Paraquat poisoning (theoretical - high FiO₂ may worsen lung injury)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Hypoxia / Respiratory Distress",
        onset: "Seconds to minutes",
        duration: "Duration of administration",
        routes: [
          {
            via: ["Inhaled"],
            amount: "Titrate to SpO₂ 94-98%",
            notes: [
              "Nasal cannula (NC): 1-6 L/min (~24-44% FiO₂)",
              "Simple face mask: 6-10 L/min (~35-60% FiO₂)",
              "Non-rebreather mask (NRB): 10-15 L/min (~60-90% FiO₂)",
              "CPAP/BiPAP for severe respiratory distress with adequate consciousness",
              "BVM with reservoir for respiratory failure"
            ]
          }
        ],
        notes: ["NASEMSO: oxygen is a drug with an appropriate dose range and undesirable effects from both too much and too little supplementation", "Permissive hypoxia (SpO₂ ≥90%) may be appropriate in COPD patients"]
      },
      {
        population: "Adult",
        indication: "CO / Cyanide Poisoning",
        onset: "Seconds to minutes",
        duration: "Duration of administration",
        routes: [
          {
            via: ["Inhaled"],
            amount: "100% FiO₂ via NRB at 15 L/min",
            notes: [
              "Maintain 100% FiO₂ regardless of SpO₂ reading",
              "Pulse oximetry is UNRELIABLE in CO poisoning - reads falsely normal",
              "Continue until hospital evaluation; consider hyperbaric O₂ referral for CO"
            ]
          }
        ],
        notes: []
      },
      {
        population: "Adult",
        indication: "Cardiac Arrest",
        onset: "Immediate",
        duration: "Duration of resuscitation",
        routes: [
          {
            via: ["Inhaled"],
            amount: "100% FiO₂ via BVM or advanced airway",
            notes: [
              "Use highest flow rate possible during active CPR",
              "Post-ROSC: titrate DOWN to SpO₂ 94-98% - hyperoxia worsens neurologic outcomes"
            ]
          }
        ],
        notes: ["NASEMSO: high-flow 100% O₂ during resuscitation should NOT be continued into the post-resuscitation phase"]
      },
      {
        population: "Pediatric",
        indication: "Hypoxia / Respiratory Distress",
        onset: "Seconds to minutes",
        duration: "Duration of administration",
        routes: [
          {
            via: ["Inhaled"],
            amount: "Titrate to SpO₂ 94-98%",
            notes: [
              "Blow-by O₂ for infants who will not tolerate a mask",
              "Escalate NC → mask → NRB → CPAP → BVM as needed"
            ]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "CO / Cyanide Poisoning",
        onset: "Seconds to minutes",
        duration: "Duration of administration",
        routes: [
          {
            via: ["Inhaled"],
            amount: "100% FiO₂ via NRB",
            notes: ["Same principles as adult - pulse oximetry unreliable in CO poisoning"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Cardiac Arrest",
        onset: "Immediate",
        duration: "Duration of resuscitation",
        routes: [
          {
            via: ["Inhaled"],
            amount: "100% FiO₂ via BVM or advanced airway",
            notes: ["Post-ROSC: titrate to SpO₂ 94-98%"]
          }
        ],
        notes: []
      },
      {
        population: "Neonatal",
        indication: "Hypoxia / Respiratory Distress",
        onset: "Seconds to minutes",
        duration: "Duration of administration",
        routes: [
          {
            via: ["Inhaled"],
            amount: "Start with room air (21%); escalate to 30%, then 100% as needed",
            notes: [
              "Term/late preterm: initiate PPV with room air (21% FiO₂)",
              "If no improvement after 90 sec: increase to 30% FiO₂ (blender) or 100% if no blender",
              "Goal SpO₂ at 10 minutes: 85-95%",
              "Preterm neonates: use 100% FiO₂ from the start if needed"
            ]
          }
        ],
        notes: ["Avoid excessive oxygen in neonates - hyperoxia contributes to retinopathy of prematurity and oxidative injury"]
      }
    ],
    adverseEffects: [
      "Absorption atelectasis (high FiO₂ washes out alveolar nitrogen → alveolar collapse)",
      "Hyperoxic vasoconstriction (coronary and cerebral - worsens post-cardiac arrest neurologic outcomes)",
      "CO₂ retention in COPD patients (blunts hypoxic ventilatory drive)",
      "Oxygen toxicity / free radical damage (prolonged high FiO₂)",
      "Retinopathy of prematurity (neonates)",
      "Drying of mucous membranes (with high-flow delivery)"
    ],
    precautions: [
      '<span class="hl hl--danger">Oxygen is a drug - titrate, do not blast</span>. NASEMSO states oxygen has "undesirable effects from both too much and too little supplementation." The target for most patients is SpO₂ 94-98%, not 100%.',
      '<span class="hl hl--warn">Post-ROSC hyperoxia worsens outcomes</span> - after return of spontaneous circulation, titrate O₂ DOWN to 94-98%. Continuing 100% FiO₂ into post-resuscitation care causes cerebral vasoconstriction and free radical injury.',
      '<span class="hl hl--warn">COPD patients may tolerate permissive hypoxia</span> - NASEMSO notes SpO₂ ≥90% may be adequate. High-flow O₂ can blunt hypoxic ventilatory drive and worsen CO₂ retention. Use lowest FiO₂ needed to maintain target SpO₂.',
      '<span class="hl hl--danger">Pulse oximetry is UNRELIABLE in CO poisoning</span> - standard pulse ox cannot distinguish COHb from OxyHb and reads falsely normal. Maintain 100% FiO₂ based on clinical suspicion, not SpO₂ reading.',
      'In neonatal resuscitation, <span class="hl hl--warn">start with room air (21%)</span> for term/late preterm infants and escalate only as needed - excessive oxygen contributes to retinopathy of prematurity and oxidative injury.',
      'Select the <strong>delivery method that addresses both oxygenation AND ventilation</strong> - NASEMSO emphasizes choosing devices that mitigate or treat hypercarbia (e.g., CPAP/BiPAP) rather than just increasing FiO₂.'
    ]
  },
  {
    id: "oral-glucose",
    summary: "The simplest treatment for symptomatic hypoglycemia in conscious patients with a patent airway. Requires no IV access and can be administered by BLS providers.",
    genericName: "Oral Glucose",
    tradeNames: ["Glutose", "Insta-Glucose"],
    category: ["Endocrine & Metabolic"],
    classes: ["Carbohydrate"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Provides exogenous glucose that is absorbed primarily in the small intestine, directly raising blood glucose and restoring substrate for cerebral and cellular metabolism. Requires no enzymatic breakdown, so absorption is faster than complex carbohydrates.',
        target: { name: "Cellular glucose uptake", action: "donor", result: "↑ Blood glucose", system: "metabolic" }
      }
    ],
    indications: [
      { name: "Hypoglycemia" }
    ],
    contraindications: [
      { text: "Altered mental status / inability to protect airway (aspiration risk)" },
      { text: "Inability to swallow" },
      { text: "Unconscious patient" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "10-20 min",
        duration: "30-60 min (depends on underlying cause)",
        routes: [
          {
            via: ["PO"],
            amount: "25 g",
            notes: [
              "Glucose tablets: ~4 g each - give 6 tablets",
              "Glucose gel: one 15 g tube + supplement with tablets or second tube",
              "Tube of cake icing is an acceptable alternative",
              "Patient MUST be conscious with intact gag reflex and able to swallow"
            ]
          }
        ],
        notes: ["Recheck BGL after 15 min; repeat dose if BGL remains <60 mg/dL and symptoms persist", "Have patient eat a complex carbohydrate meal once able to prevent recurrence"]
      },
      {
        population: "Pediatric",
        onset: "10-20 min",
        duration: "30-60 min",
        routes: [
          {
            via: ["PO"],
            amount: "0.5-1 g/kg",
            notes: [
              "Glucose gel applied to buccal mucosa (inside cheek) for young children",
              "Patient must be conscious with intact gag reflex"
            ]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Aspiration (if given to patient with impaired consciousness or no gag reflex)",
      "Nausea / vomiting",
      "Overshoot hyperglycemia (minimal risk with oral route compared to IV dextrose)",
      "Choking hazard (tablets in young children - use gel instead)"
    ],
    precautions: [
      '<span class="hl hl--danger">Patient MUST be conscious with a patent airway and intact gag reflex</span> - oral glucose in a patient who cannot protect their airway risks aspiration. If the patient is unconscious or cannot swallow, use IV dextrose or IM/IN glucagon instead.',
      'Oral glucose is the <strong>first-line treatment for conscious hypoglycemic patients</strong> per NASEMSO - it requires no IV access and can be administered at the BLS level.',
      '<span class="hl hl--warn">Slower onset than IV dextrose</span> (~10-20 min vs 1-5 min) - if rapid correction is needed or the patient is deteriorating, establish IV access and give dextrose.',
      'After successful treatment, <strong>have the patient eat a carbohydrate meal</strong> - oral glucose is rapidly metabolized and hypoglycemia will recur without sustained caloric intake.',
      'Consider the <span class="hl hl--warn">cause of hypoglycemia</span> - patients on long-acting sulfonylureas (glipizide, glyburide) or who have taken an intentional overdose of hypoglycemic agents are at high risk for recurrent hypoglycemia and should be transported regardless of response to treatment.',
      'Buccal glucose gel absorption is <strong>unreliable</strong> - most of the glucose effect comes from swallowing, not buccal absorption. Do not rely on gel smeared in the cheek of a patient who cannot swallow.'
    ]
  },
  {
    id: "ondansetron",
    summary: "A selective 5-HT3 antagonist and the preferred prehospital antiemetic, with no extrapyramidal side effects. Carries dose-dependent QT prolongation risk.",
    genericName: "Ondansetron",
    tradeNames: ["Zofran", "Zofran ODT"],
    category: ["Nausea & Vomiting"],
    classes: ["Antiemetic"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Selectively blocks serotonin receptors in the chemoreceptor trigger zone and vagal afferents in the GI tract, suppressing nausea and vomiting. Has no effect on dopamine receptors and therefore does not cause extrapyramidal symptoms.',
        target: { name: "5-HT₃ receptors", action: "antagonist", result: "Suppresses nausea & vomiting", system: "serotonergic" }
      }
    ],
    indications: [
      { name: "Nausea & Vomiting" }
    ],
    contraindications: [
      { text: "Hypersensitivity to ondansetron" },
      { text: "Congenital long QT syndrome" },
      { text: "Coadministration with apomorphine (risk of profound hypotension and loss of consciousness)" },
      { text: "Known significant QT prolongation or concurrent QT-prolonging drugs", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "5 min (IV); 15-30 min (PO/SL)",
        duration: "4-8 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "4 mg",
            notes: [
              "Administer SLOW IV push over 2-5 minutes",
              "May give 4-8 mg in stimulant poisoning / high-acuity scenarios"
            ]
          },
          {
            via: ["IM"],
            amount: "4-8 mg",
            notes: []
          },
          {
            via: ["PO", "SL"],
            amount: "4 mg",
            notes: [
              "IV solution may be given PO at the same dose",
              "ODT (orally disintegrating tablet): 4 or 8 mg placed on tongue - dissolves without water"
            ]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        qualifier: "6 mo-14 yrs",
        onset: "5 min (IV); 15-30 min (PO/SL)",
        duration: "4-8 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.15 mg/kg",
            maxDose: "4 mg",
            notes: ["Administer slow IV push over 2-5 minutes"]
          },
          {
            via: ["PO"],
            amount: "0.15 mg/kg",
            maxDose: "4 mg",
            notes: ["IV solution may be given PO"]
          },
          {
            via: ["SL"],
            amount: "2 mg (age 1-5 yrs); 4 mg ODT (age ≥6 yrs)",
            notes: ["Place ODT on tongue - dissolves without water"]
          }
        ],
        notes: ["NASEMSO: ondansetron is preferred in children for the treatment of nausea and vomiting"]
      }
    ],
    adverseEffects: [
      "QT prolongation (dose-dependent)",
      "Headache (most common)",
      "Constipation",
      "Dizziness",
      "Injection site reaction (IV)",
      "Serotonin syndrome (rare - with concurrent serotonergic drugs)"
    ],
    precautions: [
      '<span class="hl hl--warn">Dose-dependent QT prolongation</span> - NASEMSO recommends EKG monitoring in patients with electrolyte abnormalities, CHF, bradyarrhythmias, or those receiving other QT-prolonging medications. Contraindicated in congenital long QT syndrome.',
      '<span class="hl hl--beta">No extrapyramidal side effects</span> - ondansetron has no dopamine receptor activity, making it far safer than metoclopramide and prochlorperazine which carry dystonia and akathisia risk. This is a key advantage, especially in pediatrics.',
      '<span class="hl hl--warn">First trimester pregnancy</span> - NASEMSO recommends metoclopramide 5-10 mg IV with diphenhydramine 25 mg IV over ondansetron in the first trimester due to insufficient safety data. Counsel patients regarding available data.',
      'Administer IV dose <strong>slowly over 2-5 minutes</strong> - rapid IV push increases QT prolongation risk.',
      'The IV formulation <strong>may be given PO</strong> at the same dose - useful when IV access is not established but oral route is tolerated.',
      'Nausea and vomiting are <strong>symptoms, not a diagnosis</strong> - NASEMSO emphasizes that a thorough history and physical are key to identifying emergent underlying causes (bowel obstruction, MI, pregnancy, increased ICP).'
    ]
  },
  {
    id: "normal-saline",
    summary: "An isotonic crystalloid used for volume resuscitation in shock, medication dilution, and fluid replacement. Excessive crystalloid is harmful in hemorrhagic shock and unnecessary in most pulmonary edema.",
    genericName: "Sodium Chloride 0.9%",
    tradeNames: [],
    category: ["IV Fluids", "Resuscitation"],
    classes: ["Crystalloid", "Electrolyte"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Isotonic crystalloid that expands intravascular volume, increasing preload, cardiac output, and blood pressure.',
        target: { name: "Extracellular fluid volume", action: "donor", result: "↑ Intravascular volume, ↑ preload, ↑ BP", system: "other" }
      }
    ],
    indications: [
      { name: "Volume Resuscitation / Fluid Replacement" }
    ],
    contraindications: [
      { text: "Fluid overload / decompensated CHF (without hypotension)" },
      { text: "Hypernatremia", relative: true },
      { text: "Hyperchloremia / hyperchloremic metabolic acidosis", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "Minutes (hemodynamic effect)",
        duration: "~25% remains intravascular at 1 hr",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "500 mL-1 L bolus",
            repeat: "Repeat boluses to target MAP ≥65 mmHg",
            maxDose: "30 mL/kg total (shock guideline)",
            notes: [
              "Pressure-infuse each bolus over <15 min",
              "Reassess after each bolus - stop if MAP goal achieved or pulmonary edema develops",
              "Cardiac arrest (hypovolemia): 2 L IV",
              "Pulmonary edema with SBP <100: cautious 250-500 mL bolus only"
            ]
          }
        ],
        notes: [
          "NASEMSO: excessive crystalloid has little to no value and may be harmful in hemorrhagic shock - use blood products when available",
          "Crush injury: 1000 mL NS bolus before releasing crushed limb; then 500-1000 mL/hr - avoid lactated Ringer's (contains potassium)"
        ]
      },
      {
        population: "Pediatric",
        onset: "Minutes (hemodynamic effect)",
        duration: "~25% remains intravascular at 1 hr",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "20 mL/kg bolus",
            repeat: "Repeat to total 60 mL/kg or 1 L",
            notes: [
              "Pressure-infuse each bolus over <15 min",
              "Cardiogenic shock: use smaller 10 mL/kg boluses",
              "Reassess perfusion after each bolus (HR, cap refill, mentation, pulses)"
            ]
          }
        ],
        notes: ["Neonatal resuscitation: 20 mL/kg NS IV/IO for signs of shock post-delivery"]
      }
    ],
    adverseEffects: [
      "Fluid overload / pulmonary edema (with excessive administration)",
      "Hyperchloremic metabolic acidosis (large volumes - Cl⁻ content is 154 mEq/L, supraphysiologic)",
      "Peripheral edema",
      "Dilutional coagulopathy (large-volume resuscitation)",
      "Hypothermia (if fluids are not warmed)",
      "Hypernatremia (prolonged high-volume infusion)"
    ],
    precautions: [
      '<span class="hl hl--danger">Excessive crystalloid is harmful in hemorrhagic shock</span> - NASEMSO states crystalloid has "little to no value and may in fact be harmful" in hemorrhagic shock. Whole blood or balanced blood products are preferred when available. Crystalloid dilutes clotting factors and worsens coagulopathy.',
      '<span class="hl hl--warn">Reassess after every bolus</span> - fluid resuscitation is a titrated therapy, not a standing order. Stop boluses when MAP ≥65 mmHg (adult) or perfusion targets are met (peds). Do not blindly run 30 mL/kg without reassessing.',
      '<span class="hl hl--warn">Caution in pulmonary edema</span> - most acute pulmonary edema is volume redistribution, not true volume overload. NASEMSO recommends vasodilators (nitroglycerin, CPAP) as first-line. Small (250-500 mL) boluses only for hypotensive CHF patients.',
      'For <span class="hl hl--warn">crush injury</span>, use normal saline specifically - NASEMSO warns to avoid lactated Ringer\'s because it contains potassium, which compounds the hyperkalemia released when the crushed limb is freed.',
      '<span class="hl hl--warn">Large-volume NS causes hyperchloremic metabolic acidosis</span> - NS contains 154 mEq/L chloride (plasma is ~100 mEq/L). In massive resuscitation (>3-4 L), lactated Ringer\'s or other balanced crystalloids may be preferable to reduce acidosis.',
      'Warm fluids when possible - room temperature or cold fluids contribute to <strong>hypothermia</strong>, which worsens coagulopathy, acidosis, and cardiac irritability (the "lethal triad" of trauma).',
      'Only ~25% of infused NS remains intravascular after 1 hour - the rest distributes to the interstitial space. This is why crystalloid is a temporizing measure, not a definitive treatment for hemorrhagic shock.'
    ]
  },
  {
    id: "norepinephrine",
    summary: "The preferred first-line vasopressor for septic and neurogenic shock. Increases SVR and blood pressure with modest beta-1 inotropy, with lower arrhythmia risk and mortality than dopamine in septic shock.",
    genericName: "Norepinephrine",
    tradeNames: ["Levophed"],
    category: ["Cardiovascular", "Resuscitation"],
    classes: ["Sympathomimetic", "Catecholamine", "Vasopressor"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Causes intense vasoconstriction, increasing SVR and blood pressure. This is the dominant pharmacologic effect.',
        target: { name: "α-1 receptors", action: "agonist", result: "Vasoconstriction, ↑ SVR, ↑ BP", system: "adrenergic" }
      },
      {
        brief: 'Provides moderate inotropic support, increasing contractility and cardiac output alongside the vasopressor effect.',
        target: { name: "β-1 receptors", action: "agonist", result: "↑ Contractility, ↑ cardiac output", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Shock (Fluid-Refractory)" }
    ],
    contraindications: [
      { text: "Hypersensitivity" },
      { text: "Hypotension due to uncorrected blood volume deficit (correct hypovolemia first)" },
      { text: "Peripheral vascular thrombosis (except in lifesaving situations)" },
      { text: "Use with halogenated anesthetics (halothane, cyclopropane) - risk of fatal arrhythmia", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "1-2 min",
        duration: "Duration of infusion (half-life ~2.5 min)",
        routes: [
          {
            via: ["IV drip"],
            amount: "0.05-0.5 mcg/kg/min",
            notes: [
              "Start at 0.05-0.1 mcg/kg/min and titrate to MAP ≥65 mmHg",
              "Typical concentration: 4 mg in 250 mL D5W or NS (16 mcg/mL)",
              "Use infusion pump - do not free-drip",
              "NASEMSO respiratory distress guideline allows up to 0.02-2 mcg/kg/min for hypotensive pulmonary edema"
            ]
          }
        ],
        notes: ["NASEMSO: preferred vasopressor for both neurogenic and septic (infectious) distributive shock", "Administer only after adequate fluid resuscitation - vasopressors are for fluid-refractory shock"]
      },
      {
        population: "Pediatric",
        onset: "1-2 min",
        duration: "Duration of infusion (half-life ~2.5 min)",
        routes: [
          {
            via: ["IV drip"],
            amount: "0.05-0.5 mcg/kg/min",
            notes: [
              "Titrate to physiologic targets: SBP ≥5th percentile for age, strong distal pulses, cap refill <2 sec, improving mentation",
              "Use infusion pump"
            ]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Severe tissue necrosis with extravasation (vesicant)",
      "Hypertension (with excessive dose)",
      "Reflex bradycardia",
      "Dysrhythmias",
      "Peripheral ischemia (digits, extremities)",
      "Organ ischemia (renal, mesenteric - with prolonged high-dose use)",
      "Headache / anxiety"
    ],
    precautions: [
      '<span class="hl hl--danger">Vesicant - severe tissue necrosis with extravasation</span>. Administer through a large-bore, patent IV, preferably central. If extravasation occurs, infiltrate area with phentolamine 5-10 mg in 10-15 mL NS as soon as possible.',
      '<span class="hl hl--danger">Correct hypovolemia FIRST</span> - norepinephrine in a volume-depleted patient vasoconstricts an empty tank. NASEMSO reserves vasopressors for "shock unresponsive to IV fluids." Always resuscitate with crystalloid/blood products before starting pressors.',
      '<span class="hl hl--beta">Preferred over dopamine</span> for septic and neurogenic shock per NASEMSO - dopamine causes more arrhythmias and higher mortality in both cardiogenic and septic shock.',
      '<span class="hl hl--warn">Can cause reflex bradycardia</span> - NASEMSO specifically cautions about this. The intense α-1 vasoconstriction triggers baroreceptor-mediated vagal response. If clinically significant, atropine may be needed.',
      'Do NOT run in the same IV line as <span class="hl hl--warn">alkaline solutions (sodium bicarbonate)</span> - NASEMSO warns these deactivate norepinephrine.',
      'Monitor <strong>distal perfusion</strong> closely - prolonged high-dose norepinephrine can cause digital and extremity ischemia. Check pulses, cap refill, and skin color in fingers and toes.',
      'Half-life is ~2.5 minutes - effects wear off rapidly when the infusion stops. This makes it easy to titrate but means any interruption in the drip causes immediate hemodynamic deterioration.'
    ]
  },
  {
    id: "nitrous-oxide",
    summary: "A self-administered inhaled analgesic (50% N2O / 50% O2) with rapid onset and offset, providing mild to moderate analgesia. The built-in demand valve makes oversedation nearly impossible.",
    genericName: "Nitrous Oxide",
    tradeNames: ["Nitronox"],
    category: ["Pain Management", "Sedation & Anesthesia"],
    classes: ["Analgesic", "Sedative"],
    source: "Mixed",
    moa: [
      {
        brief: 'Activates endogenous opioid peptide release and modulates descending pain pathways for analgesia. Simultaneously enhances GABA-A receptor activity for anxiolysis and antagonizes NMDA receptors for dissociative properties. Effects cease as soon as inhalation stops, with no residual effect.',
        target: { name: "Opioid / GABA-A / NMDA receptors", action: "enhancer", result: "Analgesia, anxiolysis, mild sedation", system: "glutamatergic" }
      }
    ],
    indications: [
      { name: "Acute Pain" }
    ],
    contraindications: [
      { text: "Significant respiratory compromise" },
      { text: "Suspected pneumothorax or chest trauma" },
      { text: "Bowel obstruction or suspected trapped gas in abdomen" },
      { text: "Air embolism / decompression sickness" },
      { text: "Inability to self-administer (altered mental status, inability to hold mask)" },
      { text: "Head injury with suspected increased ICP (N₂O increases cerebral blood flow)" },
      { text: "Pregnancy", relative: true },
      { text: "Known vitamin B12 deficiency", relative: true },
      { text: "Known cardiac conditions / hypotension", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "1-2 min",
        duration: "Effects cease within 1 min of discontinuation",
        routes: [
          {
            via: ["Inhaled"],
            amount: "50% N₂O / 50% O₂ via demand valve",
            notes: [
              "Patient must self-administer via demand-valve mask (Nitronox) - this is a safety feature",
              "Instruct patient to take slow, deep breaths until desired analgesia is reached",
              "If patient becomes drowsy, mask falls away and exposure stops automatically",
              "Do NOT administer via free-flow - demand valve only"
            ]
          }
        ],
        notes: [
          "Do NOT combine with opioids or benzodiazepines - risk of excessive sedation and airway compromise. Wait 30-45 min after IV opioid before initiating N₂O",
          "Administer supplemental O₂ for 3-5 min after discontinuation to prevent diffusion hypoxia"
        ]
      },
      {
        population: "Pediatric",
        onset: "1-2 min",
        duration: "Effects cease within 1 min of discontinuation",
        routes: [
          {
            via: ["Inhaled"],
            amount: "50% N₂O / 50% O₂ via demand valve",
            notes: [
              "Child must be old enough and cooperative enough to hold mask and self-administer",
              "Same demand-valve safety mechanism as adults"
            ]
          }
        ],
        notes: ["Particularly useful in pediatrics - provides rapid analgesia without IV placement"]
      }
    ],
    adverseEffects: [
      "Dizziness / lightheadedness (most common)",
      "Nausea / vomiting",
      "Euphoria / dysphoria",
      "Diffusion hypoxia (on discontinuation - N₂O rapidly exits alveoli and dilutes O₂)",
      "Paresthesias / tingling",
      "Headache",
      "Expansion of trapped gas (pneumothorax, bowel obstruction, air embolism)"
    ],
    precautions: [
      '<span class="hl hl--danger">N₂O expands trapped gas</span> - it is 34x more soluble in blood than nitrogen and rapidly diffuses into air-filled spaces, expanding them. NASEMSO contraindications include pneumothorax, bowel obstruction, and air embolism. This can convert a simple pneumothorax into a tension pneumothorax.',
      '<span class="hl hl--danger">Do NOT combine with opioids or benzodiazepines</span> - risk of excessive sedation and airway compromise. If a patient has received IV opioids, wait 30-45 minutes before initiating N₂O.',
      '<span class="hl hl--warn">Diffusion hypoxia</span> on discontinuation - when N₂O is stopped, it rapidly floods out of blood into alveoli, displacing oxygen. Administer 100% O₂ for 3-5 minutes after discontinuation to prevent transient hypoxia.',
      'Self-administration via demand valve is the <strong>built-in safety mechanism</strong> - if the patient becomes too sedated, they drop the mask, lose the seal, and stop receiving the drug. Never strap the mask to the patient or administer via free-flow.',
      '<span class="hl hl--warn">Crew exposure</span> - ensure adequate ventilation in the ambulance compartment. Chronic occupational exposure to N₂O can cause vitamin B12 inactivation leading to megaloblastic anemia and subacute combined degeneration of the spinal cord.',
      'NASEMSO notes that the effect of nitrous oxide <strong>ceases as soon as inhalation stops, with no residual effect</strong> - this rapid on/off profile makes it ideal for prehospital use with short scene times.',
      'Analgesic potency is comparable to <strong>morphine 10 mg IM</strong> - a meaningful level of pain relief without IV access or the risks of systemic opioids.'
    ]
  },
  {
    id: "nitroglycerin",
    summary: "An organic nitrate vasodilator used as first-line treatment for anginal chest pain and acute pulmonary edema. Reduces myocardial oxygen demand in ACS and reduces preload and afterload in CHF.",
    genericName: "Nitroglycerin",
    tradeNames: ["Nitrostat", "Nitrolingual Pumpspray"],
    category: ["Cardiovascular"],
    classes: ["Nitrate", "Vasodilator"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Converted to nitric oxide in vascular smooth muscle, activating guanylyl cyclase and increasing cGMP to produce vasodilation. At low doses, predominantly venodilation reduces preload. At higher doses, arteriolar dilation also reduces afterload and improves coronary collateral circulation.',
        target: { name: "Vascular smooth muscle (via NO/cGMP)", action: "relaxant", result: "Venodilation → ↓ preload; arteriolar dilation → ↓ afterload", system: "enzymatic" }
      }
    ],
    indications: [
      { name: "Chest Pain (ACS)" },
      { name: "Acute Pulmonary Edema" }
    ],
    contraindications: [
      { text: "Hypotension (SBP <90 mmHg or ≥30 mmHg below baseline)" },
      { text: "Recent PDE-5 inhibitor use: sildenafil/Viagra within 24 hrs; tadalafil/Cialis or vardenafil/Levitra within 48 hrs" },
      { text: "Right ventricular infarction (preload-dependent - NTG will cause cardiovascular collapse)" },
      { text: "Extreme bradycardia (<50 BPM)" },
      { text: "Tachycardia (>100 BPM) in the absence of heart failure" },
      { text: "Hypersensitivity to nitrates" },
      { text: "Severe anemia" },
      { text: "Narrow-angle glaucoma (controversial - may not be clinically significant)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Chest Pain (ACS)",
        onset: "1-3 min (SL)",
        duration: "20-30 min",
        routes: [
          {
            via: ["SL"],
            amount: "0.4 mg",
            repeat: "q3-5 min PRN for SBP >100 mmHg",
            maxDose: "3 doses (1.2 mg total) before reassessing",
            notes: [
              "Tablet: place under tongue and let dissolve - do not chew or swallow",
              "Spray: 1 metered spray under tongue (do not inhale)"
            ]
          }
        ],
        notes: ["A positive response to NTG (pain relief) should NOT be used as a diagnostic clue for ACS - other causes of chest pain may also respond to nitrates"]
      },
      {
        population: "Adult",
        indication: "Acute Pulmonary Edema",
        onset: "1-3 min (SL)",
        duration: "20-30 min",
        routes: [
          {
            via: ["SL"],
            amount: "0.4 mg (SBP <160) or 0.8 mg (SBP ≥160)",
            repeat: "q5 min for SBP >100 mmHg",
            notes: [
              "SBP <160: 0.4 mg SL q5 min",
              "SBP ≥160 or MAP >120: 0.8 mg SL q5 min - higher dose reduces both preload AND afterload"
            ]
          },
          {
            via: ["IV drip"],
            amount: "5-200 mcg/min",
            notes: [
              "Consider for SBP ≥160 or MAP >120 when SL dosing is insufficient",
              "Start at 5-10 mcg/min, titrate by 5-10 mcg/min q3-5 min to blood pressure response",
              "Use infusion pump and continuous BP monitoring"
            ]
          }
        ],
        notes: ["NASEMSO: nitrates provide both subjective and objective improvement, and may decrease intubation rates, incidence of MIs, and mortality", "Restoration of adequate oxygenation/ventilation (CPAP/BiPAP) should precede or be simultaneous with NTG"]
      }
    ],
    adverseEffects: [
      "Hypotension (most common clinically significant effect)",
      "Headache (very common - vasodilation of meningeal vessels)",
      "Reflex tachycardia",
      "Dizziness / lightheadedness",
      "Flushing / warmth",
      "Nausea",
      "Paradoxical bradycardia (Bezold-Jarisch reflex, especially with inferior MI)",
      "Syncope"
    ],
    precautions: [
      '<span class="hl hl--danger">Ask about PDE-5 inhibitors BEFORE every dose</span> - sildenafil (Viagra) within 24 hrs, tadalafil (Cialis) or vardenafil (Levitra) within 48 hrs. Combination causes profound, refractory hypotension that may not respond to fluids or vasopressors.',
      '<span class="hl hl--danger">Right ventricular infarction is a critical contraindication</span> - RV infarct patients are preload-dependent. NTG drops preload and causes cardiovascular collapse. Suspect RV infarct in inferior STEMI (leads II, III, aVF) with hypotension, JVD, and clear lungs. Obtain right-sided ECG (V4R) if available.',
      '<span class="hl hl--warn">Check BP before EVERY dose</span> - do not redose if SBP has fallen below 100 mmHg. NTG-induced hypotension is usually responsive to IV fluids and Trendelenburg positioning.',
      'In acute pulmonary edema, NTG is <strong>first-line pharmacotherapy</strong> per NASEMSO - it reduces preload and afterload, unloading the failing ventricle. NASEMSO states nitrates may decrease intubation rates, MIs, and mortality.',
      '<span class="hl hl--warn">High-dose NTG (0.8 mg SL or IV drip)</span> for severe hypertensive pulmonary edema - at higher doses, NTG transitions from pure venodilator to mixed venodilator/arteriolar dilator, reducing both preload AND afterload and potentially increasing cardiac output.',
      'Headache is extremely common and is NOT an allergy - it is a predictable pharmacologic effect of meningeal vasodilation. Treat with acetaminophen if needed.',
      'NTG degrades in heat, light, and plastic - tablets must be stored in original glass bottle. Check expiration. If patient reports their prescribed NTG "doesn\'t work anymore," it may be expired or improperly stored.'
    ]
  },
  {
    id: "nicardipine",
    summary: "A dihydropyridine calcium channel blocker given as an IV infusion for hypertensive emergencies. Highly selective for vascular smooth muscle with no negative inotropy or bradycardia, primarily a critical care transport drug.",
    genericName: "Nicardipine",
    tradeNames: ["Cardene"],
    category: ["Cardiovascular"],
    classes: ["Antihypertensive"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Selectively causes arteriolar vasodilation with preferential effect on coronary and peripheral vascular smooth muscle, reducing SVR and blood pressure. Unlike diltiazem and verapamil, nicardipine has minimal effect on cardiac conduction, heart rate, or contractility.',
        target: { name: "L-type calcium channels (vascular smooth muscle)", action: "blocker", result: "Arteriolar vasodilation, ↓ SVR, ↓ BP", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "Hypertensive Emergency" }
    ],
    contraindications: [
      { text: "Advanced aortic stenosis (vasodilation without compensatory cardiac output increase → cardiovascular collapse)" },
      { text: "Hypersensitivity to nicardipine or dihydropyridines" },
      { text: "Hypotension (SBP <90 mmHg)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "5-15 min",
        duration: "4-6 hrs (after stopping infusion); terminal half-life ~14 hrs",
        routes: [
          {
            via: ["IV drip"],
            amount: "Start 5 mg/hr",
            repeat: "Increase by 2.5 mg/hr every 5 min to target BP",
            maxDose: "15 mg/hr",
            notes: [
              "Once target BP achieved, decrease to 3 mg/hr and adjust to maintain",
              "Typical concentration: 25 mg in 250 mL (0.1 mg/mL)",
              "Use infusion pump with continuous BP monitoring",
              "No bolus dose - continuous infusion only",
              "BP begins to fall within minutes; reaches ~50% of ultimate decrease in ~45 min"
            ]
          }
        ],
        notes: ["Target a 10-15% reduction in SBP initially - avoid precipitous drops that can cause end-organ ischemia", "Drug of choice for hypertensive emergency with: acute stroke, acute renal failure, eclampsia/pre-eclampsia"]
      },
      {
        population: "Pediatric",
        onset: "5-15 min",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV drip"],
            amount: "0.5-3 mcg/kg/min",
            notes: [
              "Limited pediatric data - use under medical direction",
              "Titrate to target BP"
            ]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Hypotension (with excessive titration)",
      "Reflex tachycardia",
      "Headache (vasodilation of meningeal vessels)",
      "Nausea / vomiting",
      "Flushing",
      "Peripheral edema (with prolonged use)",
      "Injection site phlebitis"
    ],
    precautions: [
      '<span class="hl hl--danger">Continuous infusion only - no bolus dosing</span>. Nicardipine accumulates over time and reaches steady state at 24-48 hrs. After stopping, BP rises slowly (50% offset in ~30 min), but drug effects persist for hours due to the 14-hr terminal half-life.',
      '<span class="hl hl--warn">Titrate slowly, monitor continuously</span> - target a 10-15% SBP reduction initially. Precipitous drops in BP can worsen stroke, cause myocardial ischemia, or precipitate acute kidney injury. Continuous arterial or automated BP monitoring is essential.',
      '<span class="hl hl--beta">Key advantage over non-DHP CCBs</span> - nicardipine has high vascular selectivity with NO negative inotropy, NO bradycardia, and NO AV conduction effects. This makes it far safer than diltiazem or verapamil for BP reduction in patients with heart failure or conduction disease.',
      'Nicardipine <strong>crosses the blood-brain barrier</strong> and directly relaxes cerebrovascular smooth muscle → increases cerebral blood flow. This makes it particularly useful in hypertensive emergencies complicated by acute ischemic stroke.',
      '<span class="hl hl--warn">Reflex tachycardia</span> is common - if heart rate control is also needed, consider adding a short-acting beta-blocker (esmolol) rather than switching to a non-DHP CCB.',
      'Primarily a <strong>critical care transport and ED drug</strong> - not standard on most ground BLS/ALS units. Most commonly encountered in interfacility transports of patients on established nicardipine drips.',
      '<span class="hl hl--warn">Incompatible with sodium bicarbonate and lactated Ringer\'s</span> - use NS or D5W for dilution. Change infusion site every 12 hours to minimize phlebitis.'
    ]
  },
  {
    id: "naloxone",
    summary: "A competitive opioid antagonist that reverses opioid-induced respiratory depression. The goal is to restore adequate ventilation, not full consciousness. Available IV, IM, IN, and IO.",
    genericName: "Naloxone",
    tradeNames: ["Narcan"],
    category: ["Toxicology"],
    classes: ["Opioid Antagonist", "Antidote"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Rapidly displaces opioids from receptor binding sites, reversing respiratory depression, sedation, and miosis. Has higher receptor affinity than most opioids but shorter duration of action, so renarcotization is a constant risk.',
        target: { name: "μ-opioid receptors", action: "antagonist", result: "Reversal of respiratory depression, sedation, miosis", system: "opioid" }
      }
    ],
    indications: [
      { name: "Opioid Overdose / Reversal" }
    ],
    contraindications: [
      { text: "Hypersensitivity to naloxone" }
    ],
    doses: [
      {
        population: "Adult",
        onset: "1-2 min (IV); 2-5 min (IM/IN)",
        duration: "30-90 min (shorter than most opioids)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.4-2 mg",
            repeat: "q2-3 min PRN",
            maxDose: "10 mg total (if no response after 10 mg, reconsider diagnosis)",
            notes: [
              "IV allows titration - start with 0.4 mg and repeat to restore respirations",
              "In apneic/near-apneic patients: initial 1-2 mg IV is reasonable",
              "Titrate to adequate respiratory rate and effort, NOT full consciousness"
            ]
          },
          {
            via: ["IM"],
            amount: "0.4-2 mg",
            repeat: "q2-5 min PRN",
            notes: [
              "IM provides more prolonged effect than IV (~90 min vs ~30-45 min)",
              "ZIMHI autoinjector delivers 5 mg IM - designed for fentanyl-era dosing"
            ]
          },
          {
            via: ["IN"],
            amount: "4 mg (one spray in one nostril)",
            repeat: "May repeat in alternating nostril q2-3 min",
            notes: [
              "Narcan nasal spray: 4 mg prefilled device, no assembly required",
              "8 mg IN formulation also FDA-approved for high-potency opioid situations",
              "No needle-stick risk - preferred initial route by many EMS systems",
              "Bioavailability ~50% of IM - may need additional doses for fentanyl/analogs"
            ]
          }
        ],
        notes: [
          "NASEMSO: the essential feature requiring intervention is respiratory depression - managed by ventilation followed by naloxone",
          "BVM ventilation is the PRIMARY treatment for apnea; naloxone is ADJUNCTIVE to restore respiratory drive"
        ]
      },
      {
        population: "Pediatric",
        onset: "1-2 min (IV); 2-5 min (IM/IN)",
        duration: "30-90 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            maxDose: "2 mg",
            repeat: "q2-3 min PRN",
            notes: ["Titrate to respiratory effort"]
          },
          {
            via: ["IM"],
            amount: "0.1 mg/kg",
            maxDose: "2 mg",
            notes: []
          },
          {
            via: ["IN"],
            amount: "4 mg (if using prefilled Narcan device)",
            notes: ["Prefilled Narcan delivers a fixed 4 mg dose regardless of weight"]
          }
        ],
        notes: ["Neonates born to opioid-dependent mothers: naloxone may precipitate seizures - use with extreme caution and close monitoring"]
      }
    ],
    adverseEffects: [
      "Acute opioid withdrawal (agitation, tachycardia, hypertension, diaphoresis, nausea/vomiting)",
      "Combativeness / violence upon awakening",
      "Pulmonary edema (rare but reported, even with small doses)",
      "Seizures (in neonates with intrauterine opioid exposure)",
      "Pain (unmasking of underlying pain condition)",
      "Tachycardia / hypertension",
      "Renarcotization (naloxone wears off before the opioid)"
    ],
    precautions: [
      '<span class="hl hl--danger">Goal is to restore VENTILATION, not full consciousness</span> - titrate to adequate respiratory rate and effort. Over-reversal precipitates acute withdrawal with combativeness, vomiting (aspiration risk), and pulmonary edema. An obtunded but breathing patient does not need more naloxone.',
      '<span class="hl hl--danger">BVM ventilation is the PRIMARY treatment</span> - NASEMSO emphasizes that the essential management is ventilation FOLLOWED BY naloxone. Do not delay oxygenation/ventilation while searching for or administering naloxone.',
      '<span class="hl hl--warn">Renarcotization risk</span> - naloxone duration (30-90 min) is shorter than most opioids (especially methadone, extended-release formulations, fentanyl patches). Patients MUST be monitored for recurrent respiratory depression. All opioid overdose patients should be transported.',
      '<span class="hl hl--warn">Fentanyl/analogs may require higher or repeated doses</span> - NASEMSO notes patients with fentanyl overdose may exhibit chest wall rigidity requiring PEEP, and may need multiple/larger naloxone doses. Carfentanil is 10,000x more potent than morphine.',
      '<span class="hl hl--warn">Neonatal caution</span> - NASEMSO warns that neonates of opioid-dependent mothers who receive naloxone may be narcotic dependent and should be monitored closely for seizures.',
      'The IN route eliminates <strong>needle-stick risk</strong> - a significant safety advantage when treating IV drug users with potential blood-borne infections. NASEMSO specifically notes this benefit.',
      'If no response after 10 mg total naloxone, <strong>reconsider the diagnosis</strong> - the patient may not have an opioid overdose, or may have a mixed ingestion with non-opioid CNS depressants (benzodiazepines, alcohol, GHB) that naloxone will not reverse.'
    ]
  },
  {
    id: "morphine-sulfate",
    summary: "The prototypical opioid analgesic, providing analgesia, anxiolysis, and mild preload reduction. Slower onset than fentanyl but longer duration, useful when sustained analgesia is needed.",
    genericName: "Morphine Sulfate",
    tradeNames: ["MS Contin", "Duramorph"],
    category: ["Pain Management"],
    classes: ["Opioid Analgesic"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Inhibits ascending pain pathways in the CNS, producing potent analgesia, sedation, and euphoria. Also causes histamine release, leading to vasodilation and mild preload reduction.',
        target: { name: "μ-opioid receptors", action: "agonist", result: "Analgesia, sedation, respiratory depression", system: "opioid" }
      }
    ],
    indications: [
      { name: "Acute Pain" }
    ],
    contraindications: [
      { text: "Hypersensitivity to morphine" },
      { text: "Respiratory depression (without ventilatory support)" },
      { text: "Acute or severe bronchial asthma (without monitoring/resuscitation equipment)" },
      { text: "Upper airway obstruction" },
      { text: "Paralytic ileus / GI obstruction" },
      { text: "Hypercarbia" },
      { text: "Head injury with increased ICP (opioids raise ICP)", relative: true },
      { text: "Hypotension (SBP <90 mmHg - morphine causes histamine release and vasodilation)", relative: true },
      { text: "Acute alcoholism / delirium tremens", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "3-5 min (IV); 15-30 min (IM)",
        duration: "3-5 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            repeat: "Titrate in 2 mg increments q5-10 min PRN",
            notes: [
              "Typical initial dose: 2-4 mg IV slow push",
              "Titrate to pain relief while maintaining RR ≥12 and SpO₂ ≥94%",
              "Administer slowly over 1-2 min - rapid IV push increases histamine release and hypotension"
            ]
          },
          {
            via: ["IM"],
            amount: "0.1 mg/kg",
            notes: [
              "Typical dose: 5-10 mg IM",
              "Slower and less predictable absorption than IV - use when IV not available",
              "Avoid IM in hypotensive or poorly perfused patients (unreliable absorption)"
            ]
          }
        ],
        notes: ["NASEMSO: pain severity scores should be recorded before and after analgesic administration and upon arrival at destination"]
      },
      {
        population: "Pediatric",
        onset: "3-5 min (IV); 15-30 min (IM)",
        duration: "3-5 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            maxDose: "5 mg per dose",
            notes: [
              "Administer slowly; titrate to effect",
              "NASEMSO prefers intranasal fentanyl as initial opioid route in pediatrics"
            ]
          },
          {
            via: ["IM"],
            amount: "0.1 mg/kg",
            maxDose: "5 mg per dose",
            notes: ["Use when IV access not established"]
          }
        ],
        notes: ["NASEMSO: intranasal routes of opioid analgesia are preferred as the initial dosing route in pediatrics where IV access may be problematic"]
      }
    ],
    adverseEffects: [
      "Respiratory depression (dose-dependent - the primary lethal risk)",
      "Hypotension (histamine release → vasodilation + venous pooling)",
      "Nausea / vomiting",
      "Sedation / drowsiness",
      "Pruritus (histamine-mediated)",
      "Urinary retention",
      "Constipation / decreased GI motility",
      "Miosis (pinpoint pupils)",
      "Bronchospasm (histamine release - risk in asthmatics)",
      "Chest wall rigidity (rare, more common with fentanyl)"
    ],
    precautions: [
      '<span class="hl hl--danger">Respiratory depression is the primary lethal risk</span> - monitor RR, SpO₂, and EtCO₂ continuously. Have BVM and naloxone immediately available. Risk is greatly increased with concurrent benzodiazepines, alcohol, or other CNS depressants.',
      '<span class="hl hl--warn">Histamine release distinguishes morphine from fentanyl</span> - morphine causes more hypotension, flushing, pruritus, and bronchospasm than fentanyl. Avoid in hypotensive patients or those with active bronchospasm; fentanyl is preferred in these situations.',
      '<span class="hl hl--warn">Administer IV slowly</span> (over 1-2 min) - rapid IV push causes exaggerated histamine release, hypotension, and increases nausea/vomiting risk.',
      'NASEMSO notes that <span class="hl hl--warn">opiates may cause a rise in intracranial pressure</span> - use with extreme caution in head injury. Fentanyl has less effect on ICP and is preferred in TBI patients.',
      '<span class="hl hl--warn">Patients with acute abdominal pain SHOULD receive analgesia</span> - NASEMSO explicitly states that use of analgesics for acute abdominal pain does not mask clinical findings or delay diagnosis. Withholding pain medication is not justified.',
      'Fentanyl has largely replaced morphine as the <strong>first-line prehospital opioid</strong> due to faster onset, no histamine release, less hypotension, and availability of the IN route. Morphine remains useful when longer-duration analgesia is desired or fentanyl is unavailable.',
      '<span class="hl hl--warn">Avoid in renal failure</span> - morphine-6-glucuronide (active metabolite) accumulates in renal impairment, causing prolonged and unpredictable respiratory depression. Fentanyl is safer in renal patients.'
    ]
  },
  {
    id: "midazolam",
    summary: "The preferred prehospital benzodiazepine, with reliable IM and IN absorption, fast onset, and multiple routes. First-line for prehospital seizures when IV is unavailable, also used for agitation, procedural sedation, and shivering control.",
    genericName: "Midazolam",
    tradeNames: ["Versed"],
    category: ["Neurological", "Sedation & Anesthesia"],
    classes: ["Benzodiazepine", "Anticonvulsant", "Sedative"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Enhances the effect of GABA at the GABA-A receptor, increasing chloride channel opening frequency and producing neuronal hyperpolarization. Provides anticonvulsant, anxiolytic, sedative, amnestic, and skeletal muscle relaxant effects. Water-soluble at acidic pH, allowing reliable IM and IN absorption.',
        target: { name: "GABA-A receptors", action: "enhancer", result: "Anticonvulsant, sedation, anxiolysis, amnesia", system: "GABAergic" }
      }
    ],
    indications: [
      { name: "Seizures" },
      { name: "Agitation" }
    ],
    contraindications: [
      { text: "Documented hypersensitivity to midazolam or benzodiazepines" },
      { text: "Severe respiratory depression (without ventilatory support)" },
      { text: "Sleep apnea (unmonitored setting)" },
      { text: "Acute narrow-angle glaucoma", relative: true },
      { text: "Concurrent use with opioids (increased respiratory depression risk)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Seizures",
        onset: "1-3 min (IV); 3-5 min (IN); 5-15 min (IM)",
        duration: "30-60 min",
        routes: [
          {
            via: ["IM"],
            amount: "0.2 mg/kg",
            maxDose: "10 mg",
            notes: [
              "IM is the PREFERRED route when IV is not established - NASEMSO evidence supports midazolam IM as at least as safe and effective as IV lorazepam for prehospital seizure cessation",
              "Use 5 mg/mL concentration for IM injection"
            ]
          },
          {
            via: ["IN"],
            amount: "0.2 mg/kg",
            maxDose: "10 mg",
            notes: [
              "Use 5 mg/mL concentration - divide dose between nares",
              "Max 1 mL per nostril for reliable mucosal absorption"
            ]
          },
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            maxDose: "4 mg",
            notes: ["Administer slow IV push"]
          }
        ],
        notes: ["NASEMSO: IV placement is not necessary for treatment of seizures - IM/IN routes are preferred over IV or IO if not already established"]
      },
      {
        population: "Adult",
        indication: "Agitation",
        onset: "1-3 min (IV); 3-5 min (IN); 10-15 min (IM)",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "5 mg",
            notes: ["Onset 3-5 min"]
          },
          {
            via: ["IM"],
            amount: "5 mg",
            notes: ["Onset 10-15 min"]
          },
          {
            via: ["IN"],
            amount: "5 mg",
            notes: ["Onset 3-5 min - divide dose between nares"]
          }
        ],
        notes: ["For toxicologic agitation (SSRI, MAOI, TCA overdose): 0.1 mg/kg in 2 mg increments slow IVP q1-2 min, max 5 mg; reduce by 50% for patients ≥69 yrs old"]
      },
      {
        population: "Pediatric",
        indication: "Seizures",
        onset: "1-3 min (IV); 3-5 min (IN); 5-15 min (IM)",
        duration: "30-60 min",
        routes: [
          {
            via: ["IM"],
            amount: "0.2 mg/kg",
            maxDose: "10 mg",
            notes: ["IM preferred when IV not established", "Use 5 mg/mL concentration"]
          },
          {
            via: ["IN"],
            amount: "0.2 mg/kg",
            maxDose: "10 mg",
            notes: ["Use 5 mg/mL concentration - divide between nares"]
          },
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            maxDose: "4 mg",
            notes: ["Administer slow IV push"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Agitation",
        onset: "1-3 min (IV); 3-5 min (IN); 10-15 min (IM)",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.05-0.1 mg/kg",
            maxDose: "5 mg",
            notes: []
          },
          {
            via: ["IM"],
            amount: "0.1-0.15 mg/kg",
            maxDose: "5 mg",
            notes: []
          },
          {
            via: ["IN"],
            amount: "0.3 mg/kg",
            maxDose: "5 mg",
            notes: []
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Respiratory depression / apnea (dose-dependent - the primary lethal risk)",
      "Hypotension",
      "Sedation / drowsiness",
      "Paradoxical agitation (especially in elderly and pediatrics)",
      "Amnesia (anterograde - useful for procedural sedation, but can complicate assessment)",
      "Dizziness",
      "Nausea / vomiting",
      "Hiccups",
      "Injection site pain (IV)"
    ],
    precautions: [
      '<span class="hl hl--danger">Respiratory depression and apnea</span> are the primary risks - NASEMSO warns that midazolam may cause respiratory depression, arrest, or apnea. Have BVM and flumazenil immediately available. Risk greatly increases with concurrent opioids, alcohol, or other CNS depressants.',
      '<span class="hl hl--beta">Midazolam IM is the preferred prehospital anticonvulsant when IV is not established</span> - NASEMSO states "recent evidence supports the use of midazolam IM as an intervention that is at least as safe and effective as intravenous lorazepam for prehospital seizure cessation." Do NOT delay seizure treatment to start an IV.',
      '<span class="hl hl--beta">Water-soluble formulation = reliable IM and IN absorption</span> - this is midazolam\'s key advantage over diazepam (which is lipophilic and precipitates in muscle tissue with erratic IM absorption). This makes midazolam the prehospital benzodiazepine of choice.',
      '<span class="hl hl--warn">Reduce dose by 50% in elderly (≥69 yrs)</span> - NASEMSO specifically recommends this for toxicologic sedation dosing. Elderly patients are more sensitive to benzodiazepine effects due to decreased hepatic metabolism and increased CNS sensitivity.',
      '<span class="hl hl--warn">Use 5 mg/mL concentration for IN and IM routes</span> - NASEMSO notes this specifically. The more dilute 1 mg/mL IV concentration delivers too large a volume for reliable intranasal absorption (max ~1 mL per nostril).',
      'For IN administration, <strong>divide the dose between both nares</strong> - the nasal mucosa has limited absorptive surface area. Delivering the entire volume into one nostril causes runoff into the pharynx and reduced bioavailability.',
      'Short half-life (1.5-2.5 hrs) compared to diazepam (20-100 hrs) - less risk of prolonged sedation, but may need to redose if seizures recur or agitation returns.'
    ]
  },
  {
    id: "metoprolol",
    summary: "A beta-1 selective blocker for rate control of atrial fibrillation, atrial flutter, and SVT. Preferred over diltiazem in patients with systolic heart failure because it addresses the underlying sympathetic drive.",
    genericName: "Metoprolol",
    tradeNames: ["Lopressor"],
    category: ["Cardiovascular"],
    classes: [],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Selectively decreases heart rate, slows AV node conduction, and reduces contractility. Controls ventricular rate in atrial dysrhythmias and reduces myocardial oxygen demand. Cardioselective at low doses with little beta-2 effect.',
        target: { name: "β-1 receptors (cardiac)", action: "antagonist", result: "↓ HR, ↓ AV conduction, ↓ contractility, ↓ myocardial O₂ demand", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Narrow Complex Tachycardia (SVT / AFib / AFlutter)" }
    ],
    contraindications: [
      { text: "Sinus bradycardia (HR <45)" },
      { text: "Second- or third-degree AV block (without pacemaker)" },
      { text: "Sick sinus syndrome (without pacemaker)" },
      { text: "Cardiogenic shock" },
      { text: "Hypotension (SBP <100 mmHg)" },
      { text: "Decompensated heart failure (acute pulmonary edema)" },
      { text: "Severe peripheral vascular disease" },
      { text: "Pheochromocytoma (without prior alpha-blockade)" },
      { text: "Significant first-degree AV block (PR ≥0.24 sec)", relative: true },
      { text: "Asthma / severe COPD (β-2 blockade at higher doses → bronchospasm)", relative: true },
      { text: "Cocaine-induced MI (unopposed alpha stimulation → hypertensive crisis)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "1-5 min (IV)",
        duration: "5-8 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "5 mg",
            repeat: "May repeat q5 min up to 3 doses (15 mg total)",
            notes: [
              "Administer IV push over ~2 minutes",
              "NASEMSO: administer only to patients with SBP >120 mmHg",
              "Monitor HR, BP, and ECG continuously during and after each dose",
              "Hold further doses if HR <60, SBP <100, or signs of CHF develop"
            ]
          }
        ],
        notes: ["Diltiazem is often preferred for acute rate control in AF/AFlutter due to faster/more predictable onset; metoprolol is preferred in HFrEF patients where CCBs are contraindicated"]
      }
    ],
    adverseEffects: [
      "Bradycardia (dose-dependent)",
      "Hypotension",
      "AV block (first-, second-, or third-degree - NASEMSO warning)",
      "Bronchospasm (β-2 blockade at higher doses, especially in asthmatics)",
      "Worsening CHF / acute pulmonary edema",
      "Fatigue / dizziness",
      "Nausea",
      "Masking of hypoglycemic symptoms (tachycardia) in diabetics"
    ],
    precautions: [
      '<span class="hl hl--danger">NASEMSO restricts use to SBP >120 mmHg</span> - metoprolol reduces heart rate, contractility, and blood pressure. In borderline-hypotensive patients, it can precipitate cardiovascular collapse.',
      '<span class="hl hl--warn">NASEMSO warns: worsening CHF, COPD, asthma, hypotension, and bradycardia can all occur</span> with metoprolol. Assess for these before every dose. Amiodarone or procainamide are alternatives for patients with CHF who cannot tolerate diltiazem or metoprolol.',
      '<span class="hl hl--danger">Do NOT give in cocaine-induced chest pain / MI</span> - beta-blockade removes the β-2 vasodilatory counterbalance to cocaine\'s α-1 vasoconstriction → unopposed alpha stimulation → coronary vasospasm and hypertensive crisis. Use benzodiazepines and nitroglycerin instead.',
      '<span class="hl hl--warn">Avoid in WPW / pre-excited AFib</span> - NASEMSO warns that AV nodal blocking agents (including beta-blockers) in pre-excitation can force conduction down the accessory pathway → ventricular fibrillation.',
      'β-1 selectivity is <strong>dose-dependent and lost at higher doses</strong> - at cumulative doses approaching 15 mg IV, metoprolol begins to block β-2 receptors causing bronchospasm in susceptible patients (asthmatics, COPD).',
      'Not recommended for <strong>pediatric prehospital use</strong> - adenosine is the preferred agent for pediatric SVT per NASEMSO.',
      '<span class="hl hl--warn">May mask hypoglycemia</span> - beta-blockers blunt tachycardia, a key warning sign of low blood glucose. Diabetic patients on beta-blockers may not recognize hypoglycemic episodes.'
    ]
  },
  {
    id: "methylprednisolone",
    summary: "A systemic corticosteroid for acute bronchospasm and adrenal crisis. Takes 4 to 6 hours to produce clinical improvement, so it is always given alongside fast-acting bronchodilators.",
    genericName: "Methylprednisolone",
    tradeNames: ["Solu-Medrol"],
    category: ["Airway & Respiratory", "Allergic & Immune"],
    classes: ["Corticosteroid"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Suppresses the inflammatory cascade at multiple levels, inhibiting arachidonic acid release, suppressing neutrophil migration, reversing capillary permeability, and stabilizing lysosomal membranes. Reduces airway inflammation, edema, and mucus production. Minimal mineralocorticoid activity.',
        target: { name: "Glucocorticoid receptors (intracellular)", action: "agonist", result: "↓ Inflammation, ↓ airway edema, ↓ immune response", system: "other" }
      }
    ],
    indications: [
      { name: "Acute Bronchospasm / Asthma / COPD Exacerbation" },
      { name: "Adrenal Crisis / Shock" }
    ],
    contraindications: [
      { text: "Untreated serious infections (systemic fungal)" },
      { text: "Documented hypersensitivity" },
      { text: "IM route contraindicated in idiopathic thrombocytopenic purpura" },
      { text: "High doses contraindicated in traumatic brain injury" }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Acute Bronchospasm / Asthma / COPD Exacerbation",
        onset: "4-6 hrs (clinical effect); genomic mechanism requires protein synthesis",
        duration: "12-36 hrs",
        routes: [
          {
            via: ["IV", "IM"],
            amount: "2 mg/kg",
            maxDose: "125 mg",
            notes: [
              "IV push or short infusion",
              "NASEMSO reserves IV/IM steroids for critically ill patients",
              "For non-critical patients: dexamethasone PO (0.6 mg/kg, max 16 mg) is preferred"
            ]
          }
        ],
        notes: ["Steroids do NOT provide immediate bronchodilation - always give alongside albuterol/ipratropium. The 4-6 hr delay means prehospital administration benefits the ED and inpatient course."]
      },
      {
        population: "Adult",
        indication: "Adrenal Crisis / Shock",
        onset: "1-2 hrs (hemodynamic improvement)",
        duration: "12-36 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "2 mg/kg",
            maxDose: "125 mg",
            notes: [
              "NASEMSO: hydrocortisone succinate (2 mg/kg, max 100 mg IV/IM) is PREFERRED for adrenal insufficiency due to its dual glucocorticoid + mineralocorticoid effects",
              "Use methylprednisolone if hydrocortisone is unavailable"
            ]
          }
        ],
        notes: ["Give for adrenal insufficiency, long-term steroid dependence, or fluid-refractory shock requiring vasopressors"]
      },
      {
        population: "Pediatric",
        indication: "Acute Bronchospasm / Asthma / COPD Exacerbation",
        onset: "4-6 hrs (clinical effect)",
        duration: "12-36 hrs",
        routes: [
          {
            via: ["IV", "IM"],
            amount: "2 mg/kg",
            maxDose: "125 mg",
            notes: ["For critically ill pediatric patients requiring IV access"]
          }
        ],
        notes: ["Dexamethasone PO (0.6 mg/kg, max 16 mg) preferred for non-critical pediatric patients - single dose equals multi-day course of other steroids"]
      },
      {
        population: "Pediatric",
        indication: "Adrenal Crisis / Shock",
        onset: "1-2 hrs",
        duration: "12-36 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "2 mg/kg",
            maxDose: "125 mg",
            notes: ["Hydrocortisone preferred if available"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Hyperglycemia (common - significant in diabetics)",
      "Immunosuppression (single prehospital dose is clinically insignificant)",
      "GI irritation / peptic ulcer exacerbation",
      "Hypertension (mineralocorticoid effect minimal with methylprednisolone)",
      "Mood changes / agitation / insomnia",
      "Fluid retention",
      "Adrenal suppression (with prolonged use - not a concern with single prehospital dose)"
    ],
    precautions: [
      '<span class="hl hl--warn">Steroids take 4-6 hours to work</span> - they modify gene transcription and protein synthesis, not immediate receptor effects. The prehospital dose benefits the ED and inpatient course, not the ambulance ride. Always give fast-acting bronchodilators (albuterol, ipratropium, epinephrine) concurrently.',
      'NASEMSO reserves <strong>IV/IM methylprednisolone for critically ill patients</strong> - for non-critical bronchospasm, dexamethasone PO (0.6 mg/kg, max 16 mg) is preferred because a single dose has been found equally effective as several days of other steroids.',
      'For <span class="hl hl--warn">adrenal insufficiency, hydrocortisone is preferred</span> over methylprednisolone per NASEMSO - hydrocortisone has both glucocorticoid AND mineralocorticoid effects, which are both deficient in adrenal crisis. Methylprednisolone has minimal mineralocorticoid activity.',
      '<span class="hl hl--warn">High doses contraindicated in TBI</span> - the CRASH trial showed increased mortality with high-dose methylprednisolone in traumatic brain injury. NASEMSO lists this as a contraindication.',
      '<span class="hl hl--warn">No proven benefit in anaphylaxis</span> - NASEMSO explicitly states there is no proven benefit to using steroids in the management of allergic reactions and/or anaphylaxis. The traditional practice of giving steroids for anaphylaxis is not evidence-based.',
      'Monitor blood glucose - steroids cause <strong>hyperglycemia</strong> that can be significant in diabetic patients. A single prehospital dose will elevate glucose for 12-24 hours.',
      'Equivalent steroid doses: methylprednisolone 125 mg ≈ dexamethasone 25 mg ≈ hydrocortisone 500 mg ≈ prednisone 150 mg. Methylprednisolone is ~5x more potent than hydrocortisone.'
    ]
  },
  {
    id: "meperidine",
    summary: "A synthetic opioid largely replaced for pain management due to its neurotoxic metabolite normeperidine. Retains a niche role in anti-shivering therapy, where it is uniquely effective through kappa-opioid receptor activity.",
    genericName: "Meperidine",
    tradeNames: ["Demerol"],
    category: ["Pain Management"],
    classes: ["Opioid Analgesic"],
    source: "StatPearls",
    moa: [
      {
        brief: 'Activates mu-opioid receptors for analgesia and sedation, with kappa-opioid activity that uniquely lowers the shivering threshold more than any other opioid. Also blocks sodium channels and inhibits dopamine and norepinephrine reuptake.',
        target: { name: "μ- and κ-opioid receptors", action: "agonist", result: "Analgesia, anti-shivering, sedation", system: "opioid" }
      }
    ],
    indications: [
      { name: "Acute Pain / Shivering" }
    ],
    contraindications: [
      { text: "Concurrent or recent MAOI use (within 14 days) - risk of fatal serotonin syndrome" },
      { text: "Renal impairment (normeperidine accumulates → seizures)" },
      { text: "Seizure disorder" },
      { text: "Hypersensitivity to meperidine" },
      { text: "Respiratory depression (without ventilatory support)" },
      { text: "Elderly patients (AGS Beers Criteria - increased neurotoxicity and delirium risk)", relative: true },
      { text: "Concurrent serotonergic drugs (SSRIs, SNRIs, tramadol, triptans)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "3-5 min (IV); 10-15 min (IM)",
        duration: "2-4 hrs (parent drug); normeperidine t½ 14-48 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "25-50 mg",
            repeat: "q15-20 min PRN (if used at all)",
            notes: [
              "For shivering: 25 mg IV is typically effective",
              "For analgesia: 0.5-1 mg/kg IV (but morphine or fentanyl are strongly preferred)",
              "Administer slow IV push"
            ]
          },
          {
            via: ["IM"],
            amount: "50-100 mg",
            notes: ["IM preferred over IV for repeated doses per VA/DoD guidelines"]
          }
        ],
        notes: [
          "Limit total dose to <600 mg/24 hrs and duration to <24 hrs to minimize normeperidine accumulation",
          "Not in NASEMSO formulary - multiple organizations (NCCN, ACS, CMS, JCAHO, AHRQ) recommend AGAINST meperidine for pain management"
        ]
      }
    ],
    adverseEffects: [
      "Seizures (normeperidine accumulation - the hallmark toxicity)",
      "Serotonin syndrome (especially with MAOIs - can be fatal)",
      "Respiratory depression",
      "Hypotension / orthostatic hypotension",
      "Nausea / vomiting",
      "Tachycardia (unlike most opioids - due to atropine-like/DAT/NET activity)",
      "Delirium / hallucinations (especially in elderly)",
      "Myoclonus / tremors (early signs of normeperidine toxicity)",
      "Diaphoresis"
    ],
    precautions: [
      '<span class="hl hl--danger">ABSOLUTELY CONTRAINDICATED with MAOIs</span> - the combination causes fatal serotonin syndrome (hyperthermia, rigidity, seizures, cardiovascular collapse). This is one of the most dangerous drug interactions in medicine. Must ensure no MAOI use within 14 days.',
      '<span class="hl hl--danger">Normeperidine is neurotoxic</span> - meperidine is metabolized to normeperidine, which has a half-life of 14-48 hrs (vs 3-8 hrs for the parent drug). Normeperidine causes myoclonus, tremors, and seizures that are NOT reversed by naloxone (normeperidine is not an opioid agonist). Risk is highest with repeated doses, renal impairment, and elderly patients.',
      '<span class="hl hl--danger">Removed from WHO essential medicines list (2003)</span> - meperidine is no longer considered safer than other opioids. Its risk of addiction, biliary spasm, and renal colic are equal to other opioids, and it carries unique neurotoxic and serotonergic risks.',
      '<span class="hl hl--warn">Avoid in elderly</span> - AGS Beers Criteria lists meperidine as a drug to avoid in older adults due to ineffective analgesia at commonly used oral doses and higher risk of neurotoxicity/delirium compared to other opioids.',
      'The anti-shivering effect is meperidine\'s <strong>one remaining clinical niche</strong> - it lowers the shivering threshold more potently than any other opioid via κ-opioid receptor stimulation. Used at low doses (25 mg IV) for post-intubation shivering, therapeutic hypothermia protocols, and transfusion-related rigors.',
      'For prehospital <strong>pain management, use fentanyl or morphine instead</strong> - they are safer, more effective, and lack the normeperidine/serotonin toxicity risks. Meperidine offers no analgesic advantage over other opioids.',
      '<span class="hl hl--warn">Naloxone does NOT reverse normeperidine seizures</span> - normeperidine-induced seizures require benzodiazepines. Naloxone only reverses μ-opioid effects (respiratory depression, sedation). This is a critical distinction.'
    ]
  },
  {
    id: "magnesium-sulfate",
    summary: "An electrolyte used for torsades de pointes, severe refractory bronchospasm, and eclamptic seizures. The definitive anticonvulsant in pregnancy.",
    genericName: "Magnesium Sulfate",
    tradeNames: [],
    category: ["Cardiovascular", "Airway & Respiratory", "OB/GYN"],
    classes: ["Electrolyte", "Class V Antiarrhythmic", "Anticonvulsant"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Stabilizes excitable membranes by regulating calcium, potassium, and sodium movement across cell membranes, suppressing triggered dysrhythmias such as torsades. Depresses the CNS and blocks peripheral neuromuscular transmission, providing anticonvulsant effect in eclampsia. Relaxes bronchial smooth muscle via calcium antagonism.',
        target: { name: "Cell membrane ion channels (Ca²⁺/K⁺/Na⁺)", action: "stabilizer", result: "Antiarrhythmic, anticonvulsant, bronchodilation", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "Torsades de Pointes" },
      { name: "Severe Bronchospasm" },
      { name: "Eclampsia / Pre-eclampsia" }
    ],
    contraindications: [
      { text: "Hypermagnesemia" },
      { text: "Heart block" },
      { text: "Hypercalcemia" },
      { text: "Myocardial damage" },
      { text: "Hypersensitivity" },
      { text: "Renal failure (magnesium is renally excreted - accumulation risk)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Torsades de Pointes",
        onset: "1-2 min (IV)",
        duration: "30 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "2 g",
            notes: [
              "Administer over 1-2 minutes for pulseless torsades",
              "For torsades with a pulse: administer over 5-10 minutes"
            ]
          }
        ],
        notes: ["NASEMSO: routine use of magnesium for VF/pulseless VT is NOT recommended unless refractory, polymorphic VT, or torsades de pointes"]
      },
      {
        population: "Adult",
        indication: "Severe Bronchospasm",
        onset: "5-15 min",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV"],
            amount: "40 mg/kg",
            maxDose: "2 g",
            notes: [
              "Administer over 10-15 minutes",
              "Consider reduced dose of 1 g for geriatric patients"
            ]
          }
        ],
        notes: ["NASEMSO: reserved for severe bronchoconstriction with concern for impending respiratory failure - not first-line; give after albuterol, ipratropium, and steroids"]
      },
      {
        population: "Adult",
        indication: "Eclampsia / Pre-eclampsia",
        onset: "5-10 min",
        duration: "Duration of infusion",
        routes: [
          {
            via: ["IV"],
            amount: "4 g over 5-10 min (seizure prophylaxis: 4 g over 20-30 min)",
            notes: [
              "Follow with maintenance drip: 2 g/hr IV",
              "Active seizure management: 6 g IV over 5-10 min",
              "If no IV: 8 g IM (4 g in each buttock)"
            ]
          }
        ],
        notes: ["NASEMSO: early treatment with magnesium significantly reduces eclampsia rates. Use encouraged if signs of severe pre-eclampsia present to prevent seizure."]
      },
      {
        population: "Pediatric",
        indication: "Torsades de Pointes",
        onset: "1-2 min",
        duration: "30 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "25-50 mg/kg",
            maxDose: "2 g",
            notes: ["Administer over 1-2 min for pulseless; 5-10 min with pulse"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Severe Bronchospasm",
        onset: "5-15 min",
        duration: "30-60 min",
        routes: [
          {
            via: ["IV"],
            amount: "40 mg/kg",
            maxDose: "2 g",
            notes: ["Administer over 10-15 minutes"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Hypotension (rapid infusion → vasodilation)",
      "Flushing / warmth (vasodilation)",
      "Bradycardia",
      "Respiratory depression (at high serum levels - loss of deep tendon reflexes is an early warning)",
      "Nausea / vomiting",
      "Muscle weakness / flaccidity",
      "Cardiac arrest (at very high serum levels >12 mEq/L)"
    ],
    precautions: [
      '<span class="hl hl--danger">Monitor deep tendon reflexes (DTRs)</span> - loss of DTRs (especially patellar reflex) is the earliest clinical sign of magnesium toxicity and precedes respiratory depression and cardiac arrest. NASEMSO specifically recommends assessing DTRs after magnesium therapy.',
      '<span class="hl hl--warn">Infuse at the correct rate for each indication</span> - pulseless torsades: fast push over 1-2 min. Bronchospasm: slow over 10-15 min. Eclampsia prophylaxis: slow over 20-30 min. Rapid infusion causes hypotension, flushing, and bradycardia.',
      '<span class="hl hl--danger">Calcium is the antidote for magnesium toxicity</span> - if respiratory depression or cardiac effects occur, administer calcium chloride 500 mg-1 g IV or calcium gluconate 1-2 g IV.',
      'For eclampsia, magnesium is the <strong>first-line anticonvulsant</strong> - superior to benzodiazepines and phenytoin for eclamptic seizures per NASEMSO. Benzodiazepines are only for seizures not responding to magnesium.',
      'For bronchospasm, magnesium is a <strong>last-resort adjunct</strong> - NASEMSO reserves it for impending respiratory failure after albuterol, ipratropium, steroids, and epinephrine have been tried.',
      '<span class="hl hl--warn">Caution in renal failure</span> - magnesium is renally excreted. In renal impairment, magnesium accumulates rapidly and can reach toxic levels with standard doses.',
      'NASEMSO states routine magnesium for <strong>VF/pulseless VT is NOT recommended</strong> - only indicated for refractory polymorphic VT or confirmed torsades de pointes.'
    ]
  },
  {
    id: "diphenhydramine",
    summary: "A first-generation antihistamine used in EMS for allergic reactions, drug-induced dystonia, nausea, and sedation, and is the most commonly used IV antihistamine in prehospital care. Causes significant sedation and anticholinergic effects: dry mouth, urinary retention, confusion.",
    genericName: "Diphenhydramine",
    tradeNames: ["Benadryl"],
    category: ["Allergic & Immune", "Neurological"],
    classes: ["Anticholinergic"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Reduces urticaria, pruritus, vasodilation, and bronchoconstriction. Also has anticholinergic properties that reverse drug-induced dystonia and akathisia by restoring dopamine-acetylcholine balance in the basal ganglia.',
        target: { name: "Histamine H1 receptors", action: "antagonist", result: "↓ Urticaria, ↓ pruritus, ↓ EPS", system: "histaminergic" }
      }
    ],
    indications: [
      { name: "Allergic Reaction / Urticaria" },
      { name: "Dystonia / Akathisia (EPS)" },
      { name: "Nausea & Vomiting" }
    ],
    contraindications: [
      { text: "Documented hypersensitivity" },
      { text: "Premature infants and neonates" },
      { text: "Lower respiratory tract disease (e.g., acute asthma) - controversial due to anticholinergic drying effect on secretions", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Allergic Reaction / Urticaria",
        onset: "5-10 min (IV); 20-30 min (IM/PO)",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV", "IM", "PO"],
            amount: "25-50 mg",
            notes: [
              "IV preferred for severe symptoms per NASEMSO",
              "Weight-based: 1 mg/kg up to 50 mg",
              "Supplement with H2 blocker (famotidine) for enhanced antihistamine effect"
            ]
          }
        ],
        notes: ["Diphenhydramine treats the symptoms (urticaria/pruritus) but NOT the anaphylaxis itself - epinephrine is the definitive treatment for anaphylaxis"]
      },
      {
        population: "Adult",
        indication: "Dystonia / Akathisia (EPS)",
        onset: "5-10 min (IV); 20-30 min (IM)",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV", "IM"],
            amount: "25-50 mg",
            notes: ["Rapid relief of acute dystonic reactions from haloperidol, droperidol, metoclopramide, prochlorperazine"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Allergic Reaction / Urticaria",
        onset: "5-10 min (IV); 20-30 min (IM/PO)",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV", "IM", "PO"],
            amount: "1 mg/kg",
            maxDose: "50 mg",
            notes: ["IV preferred for severe symptoms"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Dystonia / Akathisia (EPS)",
        onset: "5-10 min (IV); 20-30 min (IM)",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV", "IM"],
            amount: "1-1.25 mg/kg",
            maxDose: "25 mg",
            notes: []
          }
        ],
        notes: []
      },
      {
        population: "Adult",
        indication: "Nausea & Vomiting",
        qualifier: "First trimester of pregnancy",
        onset: "15-30 min",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "25 mg",
            notes: ["Give with metoclopramide 5-10 mg IV"]
          }
        ],
        notes: ["Metoclopramide + diphenhydramine recommended over ondansetron in first trimester of pregnancy"]
      }
    ],
    adverseEffects: [
      "Sedation / drowsiness (most common - first-generation antihistamine crosses BBB)",
      "Dry mouth / urinary retention / blurred vision (anticholinergic effects)",
      "Tachycardia (anticholinergic)",
      "Dizziness",
      "Thickening of bronchial secretions",
      "Paradoxical excitation (especially in children)",
      "Hypotension (with rapid IV push)"
    ],
    precautions: [
      '<span class="hl hl--warn">Diphenhydramine treats symptoms, not anaphylaxis</span> - it relieves urticaria and pruritus but does NOT reverse bronchospasm, laryngeal edema, or hypotension. Epinephrine IM is always the first-line treatment for anaphylaxis. Never delay epinephrine to give diphenhydramine.',
      'NASEMSO recommends <strong>supplementing with an H2 blocker</strong> (famotidine or cimetidine) alongside diphenhydramine for urticaria - combined H1 + H2 blockade provides more complete histamine antagonism than either alone.',
      'First-generation antihistamine = <strong>significant CNS sedation</strong> - crosses the blood-brain barrier freely. This sedation can be useful (agitated allergic patient) or harmful (masks neurologic assessment, impairs airway reflexes).',
      '<span class="hl hl--warn">Anticholinergic effects</span> - dry mouth, urinary retention, blurred vision, tachycardia. Use caution in elderly patients (delirium risk), prostatic hypertrophy, and narrow-angle glaucoma.',
      'For <strong>acute dystonia from antipsychotics</strong> (torticollis, oculogyric crisis, trismus after haloperidol/droperidol), diphenhydramine 25-50 mg IV/IM provides rapid relief. This is an anticholinergic effect, not an antihistamine effect - restoring dopamine-acetylcholine balance in the basal ganglia.',
      'Controversial in acute asthma - the <strong>anticholinergic drying effect</strong> may thicken bronchial secretions. NASEMSO lists lower respiratory tract disease as a relative concern. Ipratropium (selective muscarinic antagonist) is preferred for bronchospasm.'
    ]
  },
  {
    id: "ipratropium",
    summary: "An inhaled anticholinergic bronchodilator given alongside albuterol for acute bronchospasm. Works through a different mechanism than beta-agonists, providing additive bronchodilation.",
    genericName: "Ipratropium Bromide",
    tradeNames: ["Atrovent"],
    category: ["Airway & Respiratory"],
    classes: [],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Blocks vagally-mediated bronchoconstriction, producing bronchodilation through a different pathway than beta-2 agonists like albuterol. Provides additive effect when combined. Also reduces mucus secretion from submucosal glands.',
        target: { name: "Muscarinic M3 receptors (bronchial)", action: "antagonist", result: "Bronchodilation, ↓ secretions", system: "cholinergic" }
      }
    ],
    indications: [
      { name: "Acute Bronchospasm (Asthma / COPD)" }
    ],
    contraindications: [
      { text: "Documented hypersensitivity to ipratropium, atropine, or atropine derivatives" },
      { text: "Hypersensitivity to soy lecithin or related food products (MDI formulation contains soy)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "15-30 min (peak effect 1-2 hrs)",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["Inhaled"],
            amount: "0.5 mg nebulized",
            repeat: "Up to 3 doses",
            notes: [
              "Give in conjunction with albuterol - can be co-nebulized in the same treatment",
              "Combination product (DuoNeb): albuterol 2.5 mg + ipratropium 0.5 mg per vial"
            ]
          }
        ],
        notes: ["Slower onset than albuterol (~15-30 min vs ~5 min) - the benefit is additive bronchodilation, not rapid rescue"]
      },
      {
        population: "Pediatric",
        onset: "15-30 min",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["Inhaled"],
            amount: "0.5 mg nebulized",
            repeat: "Up to 3 doses",
            notes: [
              "Same dose as adults for nebulized administration",
              "NASEMSO: do NOT give ipratropium to children with bronchiolitis"
            ]
          }
        ],
        notes: ["Contraindicated in bronchiolitis - NASEMSO specifically states ipratropium and other anticholinergics should not be given to children with bronchiolitis"]
      }
    ],
    adverseEffects: [
      "Dry mouth (most common - anticholinergic)",
      "Cough / throat irritation",
      "Headache",
      "Blurred vision (if sprayed in eyes - mydriasis)",
      "Urinary retention (anticholinergic - rare with inhaled route)",
      "Tachycardia (mild - less than atropine due to poor systemic absorption)",
      "Paradoxical bronchospasm (rare)"
    ],
    precautions: [
      'Ipratropium is an <strong>adjunct to albuterol, not a replacement</strong> - it has slower onset (15-30 min vs 5 min) and weaker bronchodilation than albuterol alone. Always give albuterol first; ipratropium adds to the effect.',
      '<span class="hl hl--warn">Do NOT give to children with bronchiolitis</span> - NASEMSO explicitly prohibits ipratropium and other anticholinergics in pediatric bronchiolitis. Bronchiolitis is viral inflammation, not bronchospasm.',
      'NASEMSO limits to <strong>3 doses</strong> - unlike albuterol (unlimited frequency), ipratropium has diminishing returns beyond 3 nebulized treatments.',
      'Minimal systemic absorption from inhaled route - anticholinergic side effects (urinary retention, tachycardia, dry mouth) are much less pronounced than with systemic atropine. This makes it safer than atropine for bronchodilation.',
      '<span class="hl hl--warn">Protect eyes during nebulization</span> - ipratropium mist contacting the eyes causes mydriasis and blurred vision. Use a mouthpiece rather than face mask when possible, especially in patients with glaucoma.',
      'Nebulizer droplets can carry <strong>viral particles and airborne pathogens</strong> - NASEMSO recommends additional PPE and placing a surgical mask over the nebulizer if feasible to limit droplet spread.'
    ]
  },
  {
    id: "lidocaine",
    summary: "A Class Ib antiarrhythmic and local anesthetic, used as an alternative to amiodarone for refractory VF/pulseless VT. Also flushed through IO lines prior to fluid administration to reduce infusion pain in conscious patients.",
    genericName: "Lidocaine",
    tradeNames: ["Xylocaine"],
    category: ["Cardiovascular", "Pain Management"],
    classes: ["Class Ib Antiarrhythmic", "Local Anesthetic"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Inhibits recovery after repolarization in cardiac myocytes, decreasing myocardial excitability and conduction velocity in ischemic tissue. Shortens action potential duration and effective refractory period, suppressing ventricular ectopy without prolonging QT.',
        target: { name: "Voltage-gated Na⁺ channels (cardiac)", action: "blocker", result: "↓ Ventricular excitability, ↓ ectopy", system: "ion-channel" }
      },
      {
        brief: 'Blocks nerve impulse conduction in peripheral nerves, producing local anesthesia. Used through IO needle to reduce infusion pain in conscious patients.',
        target: { name: "Voltage-gated Na⁺ channels (peripheral nerve)", action: "blocker", result: "Local anesthesia", system: "ion-channel" }
      }
    ],
    indications: [
      { name: "Refractory VF / Pulseless VT" },
      { name: "IO Pain Mitigation" }
    ],
    contraindications: [
      { text: "Hypersensitivity to lidocaine or amide-type local anesthetics" },
      { text: "Adams-Stokes syndrome" },
      { text: "SA, AV, or intraventricular heart block (without pacemaker)" },
      { text: "Wolff-Parkinson-White syndrome" },
      { text: "Cardiogenic shock" },
      { text: "Severe heart failure", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Refractory VF / Pulseless VT",
        onset: "1-2 min (IV)",
        duration: "10-20 min (single bolus)",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mg/kg",
            repeat: "May repeat 0.5 mg/kg q5-10 min",
            maxDose: "3 mg/kg total",
            notes: [
              "NASEMSO: alternative to amiodarone for VF/pVT unresponsive to CPR, defibrillation, and vasopressors",
              "If bolus converts rhythm, consider maintenance infusion 1-4 mg/min"
            ]
          }
        ],
        notes: ["NASEMSO: no antiarrhythmic has been proven to increase long-term survival or survival with good neurologic outcome - amiodarone and lidocaine facilitate ROSC but evidence is limited"]
      },
      {
        population: "Adult",
        indication: "IO Pain Mitigation",
        onset: "30-60 sec",
        duration: "~20 min",
        routes: [
          {
            via: ["IO"],
            amount: "0.5 mg/kg",
            maxDose: "40 mg",
            notes: [
              "Use 2% lidocaine (20 mg/mL) - slow push through IO needle",
              "Allow 15-30 sec dwell time before flushing or infusing medications"
            ]
          }
        ],
        notes: ["NASEMSO: consider for conscious patients receiving IO access to mitigate pain from IO medication administration"]
      },
      {
        population: "Pediatric",
        indication: "Refractory VF / Pulseless VT",
        onset: "1-2 min (IV)",
        duration: "10-20 min",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "1 mg/kg",
            notes: ["Alternative to amiodarone (5 mg/kg) per NASEMSO cardiac arrest guideline"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "IO Pain Mitigation",
        onset: "30-60 sec",
        duration: "~20 min",
        routes: [
          {
            via: ["IO"],
            amount: "0.5 mg/kg",
            maxDose: "40 mg",
            notes: ["Slow push through IO needle for conscious pediatric patients"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "CNS toxicity: perioral numbness → tinnitus → visual disturbance → tremors → seizures → coma (dose-dependent progression)",
      "Cardiovascular depression (at toxic levels - bradycardia, hypotension, asystole)",
      "Drowsiness / confusion",
      "Slurred speech",
      "Nausea / vomiting",
      "Respiratory depression (at very high doses)"
    ],
    precautions: [
      '<span class="hl hl--warn">CNS toxicity follows a predictable progression</span> - perioral numbness and tinnitus are early warning signs. If these appear, stop the infusion immediately. Progression to seizures and cardiovascular collapse can occur rapidly.',
      '<span class="hl hl--warn">NASEMSO: no evidence supports routine post-ROSC lidocaine</span> - there is inadequate evidence to support routine use of lidocaine or beta-blockers after cardiac arrest. Do not automatically start a maintenance drip after ROSC without clear indication.',
      'Lidocaine <strong>does NOT prolong QT</strong> - unlike amiodarone and procainamide (Class Ia/III), lidocaine (Class Ib) shortens the action potential duration. This makes it safer in patients with already prolonged QT but less effective for atrial dysrhythmias.',
      '<span class="hl hl--danger">Contraindicated in WPW</span> - NASEMSO lists Wolff-Parkinson-White as a contraindication. Lidocaine can paradoxically accelerate conduction through accessory pathways.',
      'Class Ib selectivity for <strong>ischemic tissue</strong> - lidocaine preferentially binds sodium channels in depolarized (ischemic) myocardium, which is why it suppresses ventricular ectopy in acute MI without significantly affecting normal conduction. This is called "use-dependence."',
      'For IO pain: use <strong>preservative-free</strong> lidocaine when available. The 0.5 mg/kg dose (max 40 mg) slow-pushed through the IO needle significantly reduces the burning pain of IO infusion in conscious patients.',
      'Reduce dose in <span class="hl hl--warn">liver failure and CHF</span> - lidocaine is hepatically metabolized. Decreased hepatic blood flow (CHF, shock) dramatically increases serum levels and toxicity risk. Reduce maintenance infusion to 1-2 mg/min in these patients.'
    ]
  },
  {
    id: "lorazepam",
    summary: "A benzodiazepine with longer duration than midazolam, historically the IV standard for status epilepticus. Largely replaced prehospitally by midazolam because lorazepam requires IV access and refrigeration.",
    genericName: "Lorazepam",
    tradeNames: ["Ativan"],
    category: ["Neurological", "Sedation & Anesthesia"],
    classes: ["Benzodiazepine", "Anticonvulsant", "Sedative"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Enhances the effect of GABA at the GABA-A receptor, increasing chloride channel opening frequency and producing neuronal hyperpolarization. Provides anticonvulsant, anxiolytic, sedative, and amnestic effects. Longer duration than midazolam provides sustained seizure suppression.',
        target: { name: "GABA-A receptors", action: "enhancer", result: "Anticonvulsant, sedation, anxiolysis", system: "GABAergic" }
      }
    ],
    indications: [
      { name: "Seizures" },
      { name: "Agitation" }
    ],
    contraindications: [
      { text: "Documented hypersensitivity" },
      { text: "Acute narrow-angle glaucoma" },
      { text: "Severe respiratory depression (without ventilatory support)" },
      { text: "Sleep apnea (unmonitored setting)" },
      { text: "Concurrent use with opioids (increased respiratory depression risk)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Seizures",
        onset: "2-5 min (IV)",
        duration: "6-8 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            maxDose: "4 mg",
            notes: ["Administer slow IV push over 1-2 min"]
          }
        ],
        notes: ["NASEMSO: midazolam IM is at least as safe and effective as IV lorazepam for prehospital seizure cessation - lorazepam requires IV access, midazolam does not"]
      },
      {
        population: "Adult",
        indication: "Agitation",
        onset: "2-5 min (IV); 15-30 min (IM)",
        duration: "6-8 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "2 mg",
            notes: ["Onset 2-5 min"]
          },
          {
            via: ["IM"],
            amount: "4 mg",
            notes: ["Onset 15-30 min - IM absorption is more reliable than diazepam but less than midazolam"]
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Seizures",
        onset: "2-5 min (IV)",
        duration: "6-8 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "0.1 mg/kg",
            maxDose: "4 mg",
            notes: ["Administer slow IV push"]
          }
        ],
        notes: ["Midazolam IM/IN preferred when IV not established"]
      },
      {
        population: "Pediatric",
        indication: "Agitation",
        onset: "2-5 min (IV); 15-30 min (IM)",
        duration: "6-8 hrs",
        routes: [
          {
            via: ["IV", "IM"],
            amount: "0.05 mg/kg",
            maxDose: "2 mg",
            notes: []
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Respiratory depression / apnea (dose-dependent)",
      "Hypotension",
      "Prolonged sedation (6-8 hr duration - longer than midazolam)",
      "Paradoxical agitation (especially in elderly and pediatrics)",
      "Amnesia (anterograde)",
      "Dizziness / ataxia",
      "Injection site pain (contains propylene glycol)"
    ],
    precautions: [
      '<span class="hl hl--danger">Respiratory depression and apnea</span> - same risk as all benzodiazepines. Have BVM and flumazenil available. Risk multiplies with concurrent opioids, alcohol, or other CNS depressants.',
      '<span class="hl hl--warn">Requires refrigeration</span> - lorazepam degrades at room temperature, losing potency. This is a significant logistical disadvantage for EMS compared to midazolam (which is stable at room temperature). Many services have switched to midazolam for this reason.',
      'NASEMSO evidence supports <strong>midazolam IM as equivalent to IV lorazepam</strong> for prehospital seizures - since midazolam does not require IV access and is stable at room temperature, it has become the preferred prehospital benzodiazepine.',
      '<span class="hl hl--warn">Longer duration (6-8 hrs)</span> is a double-edged sword - sustained seizure suppression is beneficial, but prolonged sedation complicates neurologic assessment and can mask deterioration. Midazolam\'s shorter duration (30-60 min) allows more frequent reassessment.',
      'Contains <strong>propylene glycol</strong> as a solvent - can cause injection site pain and, with large/repeated doses, propylene glycol toxicity (metabolic acidosis, renal dysfunction). Administer slowly.',
      '<span class="hl hl--warn">IM absorption is intermediate</span> - better than diazepam (which precipitates in muscle) but less reliable than midazolam (which is water-soluble). If IM is the only available route, midazolam is preferred.'
    ]
  },
  {
    id: "levalbuterol",
    summary: "The pure R-enantiomer of racemic albuterol, providing beta-2 bronchodilation without the theoretically pro-inflammatory S-enantiomer. Clinical evidence for superiority over albuterol is mixed.",
    genericName: "Levalbuterol",
    tradeNames: ["Xopenex"],
    category: ["Airway & Respiratory"],
    classes: [],
    source: "StatPearls",
    moa: [
      {
        brief: 'Relaxes bronchial smooth muscle by increasing intracellular cAMP, producing bronchodilation. Contains only the pharmacologically active R-enantiomer, eliminating the S-enantiomer present in racemic albuterol which may promote inflammation and paradoxical bronchoconstriction.',
        target: { name: "β-2 receptors (bronchial smooth muscle)", action: "agonist", result: "Bronchodilation", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Acute Bronchospasm (Asthma / COPD)" }
    ],
    contraindications: [
      { text: "Hypersensitivity to levalbuterol or racemic albuterol" },
      { text: "Tachyarrhythmias", relative: true },
      { text: "Severe cardiovascular disease", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "5-15 min (nebulized)",
        duration: "3-6 hrs",
        routes: [
          {
            via: ["Inhaled"],
            amount: "1.25 mg nebulized",
            repeat: "q20 min for acute exacerbation",
            notes: [
              "1.25 mg levalbuterol ≈ 2.5 mg racemic albuterol (equipotent R-albuterol content)",
              "0.63 mg levalbuterol may be sufficient for mild-moderate bronchospasm",
              "Can be co-nebulized with ipratropium"
            ]
          }
        ],
        notes: ["Not in NASEMSO formulary - NASEMSO lists racemic albuterol. Some EMS systems carry levalbuterol as an alternative, particularly for patients with cardiac comorbidities."]
      },
      {
        population: "Pediatric",
        onset: "5-15 min (nebulized)",
        duration: "3-6 hrs",
        routes: [
          {
            via: ["Inhaled"],
            amount: "0.31-1.25 mg nebulized (age/weight-dependent)",
            notes: [
              "Ages 6-11 yrs: 0.31-0.63 mg nebulized q6-8 hrs PRN",
              "Acute exacerbation: up to 1.25 mg q20 min",
              "0.63 mg levalbuterol ≈ 1.25 mg racemic albuterol in pediatric studies"
            ]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Tachycardia (theoretically less than racemic albuterol, but clinical difference is debatable)",
      "Tremor",
      "Nervousness / anxiety",
      "Headache",
      "Hypokalemia",
      "Palpitations",
      "Paradoxical bronchospasm (rare)",
      "Hyperglycemia"
    ],
    precautions: [
      '<span class="hl hl--warn">Clinical superiority over albuterol is NOT firmly established</span> - RCTs with adequate sample sizes generally show no significant differences in efficacy, adverse effects, or hospitalization rates between levalbuterol and racemic albuterol. The benefit may be greatest in severe asthma with albuterol overuse.',
      'Dose equivalence: <strong>1.25 mg levalbuterol ≈ 2.5 mg racemic albuterol</strong> - this is because racemic albuterol is a 50:50 mix of R and S enantiomers, so 2.5 mg racemic delivers ~1.25 mg of the active R-enantiomer.',
      'May be preferred in patients with <span class="hl hl--warn">cardiac comorbidities</span> (arrhythmias, decompensated CHF, valvular disease) where minimizing β-1 stimulation and tachycardia is important - though clinical evidence for this advantage is limited.',
      '<span class="hl hl--warn">Significantly more expensive</span> than generic racemic albuterol for nebulization - cost differential is the primary reason most EMS systems continue to use racemic albuterol as the standard formulary agent.',
      'Same contraindications and precautions as racemic albuterol - β-2 agonists can cause tachycardia, hypokalemia, and hyperglycemia. Monitor heart rate and rhythm in patients with cardiac disease.',
      'S-albuterol (the removed enantiomer) persists in circulation <strong>12x longer</strong> than R-albuterol after racemic dosing - this prolonged exposure to the theoretically pro-inflammatory S-enantiomer is the pharmacologic rationale for levalbuterol, though clinical significance remains debated.'
    ]
  },
  {
    id: "lactated-ringers",
    summary: "A balanced isotonic crystalloid that more closely mirrors plasma electrolyte composition than normal saline, causing less hyperchloremic acidosis in large-volume resuscitation.",
    genericName: "Lactated Ringer's Solution",
    tradeNames: [],
    category: ["IV Fluids", "Resuscitation"],
    classes: ["Crystalloid", "Electrolyte"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Balanced isotonic crystalloid that expands intravascular volume while maintaining more physiologic electrolyte balance than normal saline. Contains lactate that is converted to bicarbonate in the liver, helping prevent the hyperchloremic metabolic acidosis seen with large-volume normal saline resuscitation.',
        target: { name: "Extracellular fluid volume", action: "donor", result: "↑ Intravascular volume, ↑ preload, ↑ BP", system: "other" }
      }
    ],
    indications: [
      { name: "Volume Resuscitation / Fluid Replacement" }
    ],
    contraindications: [
      { text: "Fluid overload / decompensated CHF (without hypotension)" },
      { text: "Hyperkalemia or crush injury (LR contains 4 mEq/L potassium - NASEMSO specifically warns to avoid LR in crush injury)" },
      { text: "Severe hepatic failure (impaired lactate metabolism → lactic acidosis)", relative: true },
      { text: "Concurrent citrated blood products in same IV line (calcium in LR can cause clotting)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "Minutes (hemodynamic effect)",
        duration: "~25% remains intravascular at 1 hr",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "500 mL-1 L bolus",
            repeat: "Repeat boluses to target MAP ≥65 mmHg",
            maxDose: "30 mL/kg total (shock guideline)",
            notes: [
              "NASEMSO lists LR as interchangeable with NS for most volume resuscitation",
              "Burns: administer NS or LR per Parkland formula (4 mL × kg × %TBSA over 24 hrs, half in first 8 hrs)",
              "Pre-eclampsia: NS or LR at max 80 mL/hr continuous infusion",
              "Head injury: NS or LR boluses to maintain SBP ≥110 (adult)"
            ]
          }
        ],
        notes: ["Preferred over NS for large-volume resuscitation (>2-3 L) due to lower risk of hyperchloremic metabolic acidosis"]
      },
      {
        population: "Pediatric",
        onset: "Minutes (hemodynamic effect)",
        duration: "~25% remains intravascular at 1 hr",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "20 mL/kg bolus",
            repeat: "Repeat to total 60 mL/kg or 1 L",
            notes: [
              "Pressure-infuse each bolus over <15 min",
              "Cardiogenic shock: use smaller 10 mL/kg boluses",
              "NASEMSO: NS or LR interchangeable for pediatric resuscitation"
            ]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Fluid overload / pulmonary edema (with excessive administration)",
      "Hyperkalemia (in patients with renal failure or crush injury - 4 mEq/L K⁺ content)",
      "Peripheral edema",
      "Dilutional coagulopathy (large-volume resuscitation)",
      "Hypothermia (if fluids are not warmed)",
      "Lactic acidosis (theoretical - in severe liver failure where lactate cannot be metabolized to bicarbonate)"
    ],
    precautions: [
      '<span class="hl hl--danger">AVOID in crush injury</span> - NASEMSO specifically states: "Avoid lactated Ringer\'s solution as it contains potassium." Crushed muscle releases massive amounts of intracellular potassium; adding more potassium via LR compounds the hyperkalemia → cardiac arrest risk. Use NS for crush injury.',
      '<span class="hl hl--beta">Less hyperchloremic acidosis than NS</span> - LR contains 109 mEq/L Cl⁻ (closer to plasma at ~100) vs NS at 154 mEq/L. In massive resuscitation (>3-4 L), this translates to less iatrogenic acidosis and potentially better renal outcomes. This is LR\'s primary advantage.',
      '<span class="hl hl--warn">Contains calcium</span> - do not infuse citrated blood products (packed RBCs, FFP) through the same IV line as LR. The calcium can bind citrate anticoagulant and cause micro-clotting. Use a separate line or NS for blood products.',
      'The lactate in LR is <strong>NOT lactic acid</strong> - it is sodium lactate, which the liver converts to bicarbonate (an alkalizing buffer). LR does not cause or worsen lactic acidosis in patients with normal hepatic function. However, it can confound point-of-care lactate measurements.',
      'NASEMSO treats LR and NS as <strong>interchangeable</strong> for most indications - anaphylaxis, shock, trauma, head injury, poisoning. The choice between them is often based on local protocol and availability.',
      'Same volume kinetics as NS - only ~25% remains intravascular after 1 hour. Both are temporizing measures for hemorrhagic shock; blood products are preferred when available.'
    ]
  },
  {
    id: "labetalol",
    summary: "A combined alpha-1 and non-selective beta blocker for hypertensive emergencies, particularly in preeclampsia and eclampsia. Provides controlled blood pressure reduction without reflex tachycardia while maintaining uteroplacental perfusion.",
    genericName: "Labetalol",
    tradeNames: ["Trandate"],
    category: ["Cardiovascular", "OB/GYN"],
    classes: ["Antihypertensive"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Causes vasodilation and reduces SVR through alpha-1 blockade. Simultaneously blocks beta-1 and beta-2 receptors, preventing the reflex tachycardia that would otherwise occur from vasodilation. The alpha-to-beta blockade ratio is approximately 1:7 IV, producing smooth, controlled blood pressure reduction.',
        target: { name: "α-1 + β-1/β-2 receptors", action: "antagonist", result: "↓ SVR, ↓ BP without reflex tachycardia", system: "adrenergic" }
      }
    ],
    indications: [
      { name: "Severe Hypertension with Pre-eclampsia" }
    ],
    contraindications: [
      { text: "Asthma or obstructive airway disease (non-selective β-blockade → bronchospasm)" },
      { text: "Severe bradycardia (HR <60)" },
      { text: "Second- or third-degree heart block (without pacemaker)" },
      { text: "Cardiogenic shock" },
      { text: "Uncompensated cardiac failure" },
      { text: "Sick sinus syndrome (without pacemaker)" },
      { text: "Hypersensitivity" },
      { text: "Conditions associated with prolonged or severe hypotension" },
      { text: "Concurrent calcium channel blocker use (combined negative inotropy/chronotropy)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "2-5 min (IV)",
        duration: "2-4 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "20 mg",
            repeat: "May repeat q10 min × 2 doses",
            maxDose: "60 mg total (3 doses of 20 mg)",
            notes: [
              "Administer IV push over 2 minutes",
              "Ensure HR >60 BPM before each dose",
              "Goal: reduce MAP by 20-25% initially",
              "Target BP approximately 140/90 to reduce stroke risk while maintaining uteroplacental perfusion"
            ]
          }
        ],
        notes: ["NASEMSO: for severe hypertension (SBP >160 or DBP >110) lasting >15 min with pre-eclampsia symptoms. Alternatives: hydralazine 5 mg IV or nifedipine 10 mg PO."]
      }
    ],
    adverseEffects: [
      "Hypotension (most common acute concern)",
      "Bradycardia",
      "Dizziness / lightheadedness",
      "Nausea",
      "Bronchospasm (non-selective β-blockade)",
      "Heart block (first-degree; rarely higher)",
      "Fatigue",
      "Scalp tingling (common, benign)"
    ],
    precautions: [
      '<span class="hl hl--danger">Non-selective β-blocker - contraindicated in asthma</span>. Unlike metoprolol (β-1 selective), labetalol blocks β-2 receptors and WILL cause bronchospasm in asthmatics. This is a critical distinction between the two beta-blockers in the EMS drug box.',
      '<span class="hl hl--warn">Ensure HR >60 BPM before each dose</span> - NASEMSO specifically requires this check. The β-blockade component can cause significant bradycardia, especially with repeat dosing.',
      '<span class="hl hl--warn">Goal is 140/90, NOT normotensive</span> - in pre-eclampsia, aggressive BP lowering below 140/90 compromises uteroplacental perfusion and causes fetal distress. Reduce MAP by 20-25% initially, then reassess.',
      '<span class="hl hl--danger">Patients on beta-blockers may be resistant to epinephrine</span> - NASEMSO warns that patients taking beta-blockers who experience anaphylaxis may not respond to epinephrine, or epinephrine may cause unopposed α-stimulation (hypertension). Consider glucagon as an alternative in beta-blocker-resistant anaphylaxis.',
      'The α-1 blockade prevents <strong>reflex tachycardia</strong> - this is labetalol\'s key advantage over pure vasodilators (hydralazine, nifedipine) which cause compensatory tachycardia that increases myocardial oxygen demand.',
      'Do NOT confuse with metoprolol - both are beta-blockers in the EMS drug box, but labetalol is <strong>non-selective β + α-1 blocker</strong> (contraindicated in asthma) while metoprolol is <strong>β-1 selective</strong> (relatively safer in mild COPD). Different drugs, different indications, different contraindications.',
      '<span class="hl hl--warn">Use with caution alongside calcium channel blockers</span> - NASEMSO warns about concurrent use. Combined negative inotropic and chronotropic effects risk profound bradycardia, heart block, and heart failure.'
    ]
  },
  {
    id: "ketorolac",
    summary: "The only injectable NSAID commonly carried in EMS, providing analgesia and anti-inflammatory effects without respiratory depression, sedation, or abuse potential. Used for renal colic, musculoskeletal pain, and as an opioid-sparing adjunct.",
    genericName: "Ketorolac",
    tradeNames: ["Toradol"],
    category: ["Pain Management"],
    classes: ["NSAID"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Blocks prostaglandin synthesis by inhibiting COX-1 and COX-2, producing analgesia, anti-inflammatory, and antipyretic effects. Analgesic potency comparable to moderate-dose opioids without CNS depression.',
        target: { name: "COX-1 / COX-2 enzymes", action: "inhibitor", result: "↓ Prostaglandins → analgesia, ↓ inflammation, ↓ fever", system: "enzymatic" }
      }
    ],
    indications: [
      { name: "Acute Pain" }
    ],
    contraindications: [
      { text: "Allergy to aspirin, ketorolac, or other NSAIDs" },
      { text: "Active or history of GI bleeding / peptic ulcer disease" },
      { text: "Intracranial bleeding or high risk of bleeding" },
      { text: "Coagulation defects / concurrent anticoagulant therapy" },
      { text: "Significant renal impairment (especially with volume depletion)" },
      { text: "Active labor or breastfeeding" },
      { text: "Infants <6 months of age (for antipyretic use)" },
      { text: "Third trimester pregnancy (risk of premature ductus arteriosus closure)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        onset: "10 min (IV); 30-60 min (IM)",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV", "IO"],
            amount: "15-30 mg",
            notes: [
              "15 mg IV for patients ≥65 yrs, <50 kg, or renal impairment",
              "30 mg IV for standard adult dosing",
              "Administer IV push over 15-30 sec"
            ]
          },
          {
            via: ["IM"],
            amount: "30-60 mg",
            notes: [
              "30 mg IM for patients ≥65 yrs, <50 kg, or renal impairment",
              "60 mg IM for standard adult dosing",
              "Onset slower than IV - 30-60 min"
            ]
          }
        ],
        notes: ["Limit total ketorolac use to ≤5 days (all routes combined) to minimize GI and renal toxicity"]
      },
      {
        population: "Pediatric",
        onset: "10 min (IV); 30-60 min (IM)",
        duration: "4-6 hrs",
        routes: [
          {
            via: ["IV"],
            amount: "1 mg/kg",
            maxDose: "15 mg",
            notes: ["NASEMSO febrile seizure dosing - also applicable for acute pain"]
          },
          {
            via: ["IM"],
            amount: "1 mg/kg",
            maxDose: "30 mg",
            notes: []
          }
        ],
        notes: ["NSAIDs are contraindicated in infants <6 months of age per NASEMSO"]
      }
    ],
    adverseEffects: [
      "GI bleeding / peptic ulcer (COX-1 inhibition reduces protective gastric prostaglandins)",
      "Renal impairment / acute kidney injury (prostaglandins maintain renal blood flow in hypovolemia)",
      "Platelet dysfunction / increased bleeding time (COX-1 inhibits thromboxane A₂)",
      "Nausea / dyspepsia",
      "Headache / dizziness",
      "Injection site pain (IM)",
      "Hypertension (prostaglandin-mediated sodium/water retention)"
    ],
    precautions: [
      '<span class="hl hl--danger">Bleeding risk</span> - ketorolac inhibits platelet aggregation via COX-1/thromboxane pathway. Contraindicated in patients with coagulopathy, active bleeding, concurrent anticoagulants, or intracranial hemorrhage. Do not give in trauma with suspected internal hemorrhage.',
      '<span class="hl hl--danger">Renal toxicity</span> - prostaglandins maintain renal blood flow during hypovolemia and shock. Ketorolac in dehydrated, hypotensive, or elderly patients can precipitate acute kidney injury. Ensure adequate hydration before administration.',
      '<span class="hl hl--warn">Reduce dose in elderly (≥65 yrs) and patients <50 kg</span> - use 15 mg IV or 30 mg IM. Elderly patients have decreased renal clearance and increased GI bleeding risk.',
      'Ketorolac is an excellent <strong>opioid-sparing analgesic</strong> - provides analgesia comparable to moderate-dose morphine for many pain types (renal colic, musculoskeletal, dental) without respiratory depression, sedation, nausea, or abuse potential.',
      '<span class="hl hl--warn">Limit total duration to ≤5 days</span> (all routes combined) - FDA black box warning. Prolonged NSAID use dramatically increases GI bleeding and renal toxicity risk. The prehospital single dose is well within this limit.',
      'Particularly effective for <strong>renal colic</strong> - prostaglandin inhibition reduces ureteral smooth muscle spasm and inflammation. Often provides superior relief to opioids for kidney stones with fewer side effects.',
      '<span class="hl hl--warn">Cross-reactivity with aspirin allergy</span> - patients with aspirin-induced asthma (Samter triad: aspirin sensitivity, nasal polyps, asthma) must NOT receive ketorolac or any NSAID. Can trigger severe bronchospasm.'
    ]
  },
  {
    id: "ketamine",
    summary: "A dissociative anesthetic that preserves airway reflexes, spontaneous respirations, and hemodynamic stability. Used at full dissociative doses for severe agitation and at subdissociative doses for pain management.",
    genericName: "Ketamine",
    tradeNames: ["Ketalar"],
    category: ["Neurological", "Pain Management", "Sedation & Anesthesia"],
    classes: ["Dissociative Anesthetic"],
    source: "NASEMSO 2022 v3.0",
    moa: [
      {
        brief: 'Blocks NMDA receptors, functionally disconnecting thalamocortical and limbic systems while preserving airway reflexes and spontaneous breathing. At subdissociative doses, this same blockade modulates central pain transmission, providing potent analgesia without respiratory depression.',
        target: { name: "NMDA receptors", action: "antagonist", result: "Dissociative anesthesia, analgesia", system: "glutamatergic" }
      }
    ],
    indications: [
      { name: "Acute Agitation / Excited Delirium" },
      { name: "Acute Pain (Subdissociative)" }
    ],
    contraindications: [
      { text: "Hypersensitivity to ketamine" },
      { text: "Head trauma / intracranial mass / intracranial hemorrhage (may increase ICP - relative/controversial per NASEMSO)", relative: true },
      { text: "Hypertension / angina / stroke (sympathomimetic effects)", relative: true },
      { text: "Underlying psychiatric disorder (emergence reactions)", relative: true },
      { text: "Age <3 months (immature airway reflexes)", relative: true }
    ],
    doses: [
      {
        population: "Adult",
        indication: "Acute Agitation / Excited Delirium",
        onset: "1 min (IV); 3-5 min (IM)",
        duration: "10-20 min (IV); 20-30 min (IM)",
        routes: [
          {
            via: ["IV"],
            amount: "2 mg/kg",
            notes: [
              "Onset ~1 min - provides rapid dissociative sedation",
              "NASEMSO: option for high-violence-risk patients"
            ]
          },
          {
            via: ["IM"],
            amount: "4 mg/kg",
            notes: [
              "Onset 3-5 min - IM is often the practical choice for combative patients where IV is impossible",
              "Can be administered through clothing in extremis"
            ]
          }
        ],
        notes: ["NASEMSO stimulant poisoning guideline: ketamine should be considered for delirium with agitated behavior - may improve behavior and compliance"]
      },
      {
        population: "Adult",
        indication: "Acute Pain (Subdissociative)",
        onset: "1-2 min (IV); 5-10 min (IN/IM)",
        duration: "15-30 min",
        routes: [
          {
            via: ["IV"],
            amount: "0.1-0.3 mg/kg",
            notes: [
              "Administer slow IV push over 1-2 min to minimize dysphoria",
              "Typical adult: 10-20 mg IV",
              "May repeat 0.1 mg/kg q15-20 min PRN"
            ]
          },
          {
            via: ["IN"],
            amount: "0.5-1 mg/kg",
            notes: [
              "Use concentrated solution (100 mg/mL) to minimize volume",
              "Divide between nares; max ~1 mL per nostril"
            ]
          },
          {
            via: ["IM"],
            amount: "0.5-1 mg/kg",
            notes: ["Slower onset than IV but useful when IV not established"]
          }
        ],
        notes: ["Subdissociative ketamine provides potent analgesia WITHOUT respiratory depression - a key advantage over opioids, especially in trauma patients where hemodynamic stability matters"]
      },
      {
        population: "Pediatric",
        indication: "Acute Agitation / Excited Delirium",
        onset: "1 min (IV); 3-5 min (IM)",
        duration: "10-20 min (IV); 20-30 min (IM)",
        routes: [
          {
            via: ["IV"],
            amount: "1 mg/kg",
            notes: ["Lower dose than adults per NASEMSO"]
          },
          {
            via: ["IM"],
            amount: "3 mg/kg",
            notes: []
          }
        ],
        notes: []
      },
      {
        population: "Pediatric",
        indication: "Acute Pain (Subdissociative)",
        onset: "1-2 min (IV); 5-10 min (IN)",
        duration: "15-30 min",
        routes: [
          {
            via: ["IV"],
            amount: "0.1-0.3 mg/kg",
            notes: ["Administer slowly to minimize dysphoria"]
          },
          {
            via: ["IN"],
            amount: "0.5-1 mg/kg",
            notes: ["Excellent option for pediatric pain - avoids IV placement"]
          }
        ],
        notes: []
      }
    ],
    adverseEffects: [
      "Emergence reactions (vivid dreams, hallucinations, dysphoria, agitation - 10-30% of adults)",
      "Nausea / vomiting",
      "Hypertension (sympathomimetic - releases endogenous catecholamines)",
      "Tachycardia",
      "Hypersalivation (can compromise airway if not managed)",
      "Laryngospasm (rare but most serious airway complication - more common in pediatrics)",
      "Nystagmus",
      "Transient increase in ICP (controversial - may not be clinically significant)"
    ],
    precautions: [
      '<span class="hl hl--beta">Preserves airway reflexes and spontaneous respirations</span> - this is ketamine\'s defining advantage over other sedatives. However, this is dose-dependent and NOT absolute. At high doses or with rapid IV push, apnea can occur. Always have BVM and suction ready.',
      '<span class="hl hl--warn">Emergence reactions</span> occur in 10-30% of adults (less common in children) - vivid hallucinations, dysphoria, agitation upon waking. Risk factors: female sex, age >16, large doses, rapid IV administration. Pre-treatment with midazolam 0.05 mg/kg IV may reduce but does not eliminate emergence phenomena.',
      '<span class="hl hl--warn">Hypersalivation</span> - ketamine stimulates salivary secretions which can compromise the airway. Position patient on their side (recovery position). Some protocols recommend atropine 0.01 mg/kg or glycopyrrolate pretreatment.',
      '<span class="hl hl--danger">Sympathomimetic effects</span> - ketamine releases endogenous catecholamines → hypertension and tachycardia. NASEMSO lists hypertension, angina, and stroke as relative contraindications. Use with extreme caution in patients with aortic dissection, intracranial hemorrhage, or severe uncontrolled hypertension.',
      'ICP concerns are <strong>controversial</strong> - traditional teaching warned against ketamine in head injury. NASEMSO lists this as relative/controversial. Recent evidence suggests ketamine does not significantly raise ICP when ventilation is maintained, and it may be the safest induction agent in hypotensive TBI patients due to hemodynamic stability.',
      'For subdissociative pain dosing, administer IV <strong>slowly over 1-2 minutes</strong> - rapid IV push at even low doses can cause brief dissociation and dysphoria that alarms patients. Slow push produces analgesia with minimal psychoactive effects.',
      '<span class="hl hl--warn">Laryngospasm</span> is the most serious airway complication (rare, ~0.3%) - more common in children, with pharyngeal stimulation, and at dissociative doses. Treat with positive pressure ventilation (BVM); if refractory, succinylcholine 0.5-1 mg/kg IV.'
    ]
  }

];
