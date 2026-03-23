// data/protocol-map.js — authoring reference, not loaded by front-end
//
// Maps NASEMSO guideline names to drug IDs that appear in their
// Treatment and Interventions sections. Used for QA cross-referencing
// and future "which protocols use this drug?" features.
//
// Keys = NASEMSO guideline titles (exact match)
// Values = array of drug IDs from drugs.js

const PROTOCOL_MAP = {
  "Anaphylaxis and Allergic Reaction": ["epinephrine", "diphenhydramine", "famotidine", "albuterol", "methylprednisolone", "dexamethasone"],
  "Agitated or Violent Patient/Behavioral Emergency": ["midazolam", "ketamine", "haloperidol", "droperidol", "diphenhydramine"],
  "Bradycardia": ["atropine", "epinephrine", "dopamine"],
  "Cardiac Arrest": ["epinephrine", "amiodarone", "lidocaine", "sodium-bicarbonate", "calcium-chloride", "magnesium-sulfate"],
  "Chest Pain/ACS/STEMI": ["aspirin", "nitroglycerin", "fentanyl", "morphine"],
  "Eclampsia/Pre-Eclampsia": ["magnesium-sulfate"],
  "Hypoglycemia": ["dextrose", "glucagon", "oral-glucose"],
  "Nausea-Vomiting": ["ondansetron"],
  "Pain Management": ["fentanyl", "morphine", "ketamine", "ketorolac", "acetaminophen", "nitrous-oxide"],
  "Respiratory Distress": ["albuterol", "ipratropium", "epinephrine", "methylprednisolone", "dexamethasone", "magnesium-sulfate"],
  "Seizures": ["midazolam", "diazepam", "lorazepam"],
  "Shock": ["epinephrine", "dopamine", "norepinephrine", "lactated-ringers"],
  "Tachycardia with a Pulse": ["adenosine", "amiodarone", "diltiazem", "metoprolol"],
  "Poisoning/Overdose Universal Care": ["naloxone", "flumazenil", "activated-charcoal"],
  "Beta Blocker Poisoning/Overdose": ["glucagon", "atropine", "epinephrine", "calcium-chloride"],
  "Calcium Channel Blocker Poisoning/Overdose": ["calcium-chloride", "glucagon", "atropine", "epinephrine"],
  "Cyanide Exposure": ["hydroxocobalamin"],
  "Stimulant Poisoning/Overdose": ["midazolam", "diazepam"],
  "Pediatric Respiratory Distress (Croup)": ["epinephrine", "dexamethasone"],
  "Neonatal Resuscitation": ["epinephrine"],
  "Head Injury": ["mannitol"],
  "Crush Injury/Crush Syndrome": ["calcium-chloride", "sodium-bicarbonate", "albuterol"]
};

export default PROTOCOL_MAP;
