import tearUpImage from "../../assets/skillsImgs/hein01-Tear-Up.png";
import mutilateImage from "../../assets/skillsImgs/hein02-Mutilate.png";
import identifyWeaknessImage from "../../assets/skillsImgs/hein03-Identify-Weakness.png";
import assaultSlashImage from "../../assets/skillsImgs/hein04-Assault-Slash.png";
import intimidationImage from "../../assets/skillsImgs/hein05-Intimidation.png";
import bloodRefluxImage from "../../assets/skillsImgs/hein06-Blood-Reflux.png";
import mercilessExplosionImage from "../../assets/skillsImgs/hein07-Merciless-Explosion.png";
import endOfTheLineImage from "../../assets/skillsImgs/hein08-End-Of-The-Line.png";
import rageSlashImage from "../../assets/skillsImgs/hein09-Rage-Slash.png";
import bloodStormImage from "../../assets/skillsImgs/hein10-Blood-Storm.png";
import endlessRageImage from "../../assets/skillsImgs/hein11-Endless-Rage.png";
import bloodiedRevengeImage from "../../assets/skillsImgs/hein13-Bloodied-Revenge.png";

const skills = [
  {
    id: 1,
    character: "Hein",
    name: "Tear Up",
    image: tearUpImage,
    targetting: "Single Enemy",
    cost: "Cost: 1 Mana",
    stats01: "Damage: 15 - Accuracy: 84% - Critical Hit: 0%.",
    Overload: "Overload",
    Countdown: "Countdown 1.",
    IgnoreTaunt: "Ignore Taunt.",
    "Cannot be fixed": "Cannot be fixed.",
    castEffectLine01: "- Always lands against targets with a Weakening debuff.",
    castEffectLine02: "- Attack an additional enemy with the lowest health.",
    castEffectLine03: "- If Facing one enemy, damage is increased by 7.",
    synergies: [
      "Overload",
      "Countdown",
      "Ignore Taunt",
      "Additional Damage",
      "Attack",
    ],
  },
  {
    id: 2,
    character: "Hein",
    name: "Mutilate",
    image: mutilateImage,
    targetting: "Random Enemy",
    cost: "Cost: 2 Mana",
    stats01: "Damage: 27 - Accuracy: 96% - Critical Hit: 0%.",
    Overload: "Overload",
    PriorityLowHP: "Priority Low HP",
    synergies: ["Overload", "Priority Low HP", "Attack"],
  },
  {
    id: 3,
    character: "Hein",
    name: "Identify Weakness",
    image: identifyWeaknessImage,
    targetting: "Single Enemy",
    cost: "Cost: 0 Mana",
    stats02:
      "Detect Weakness - Debuff Success: 150% - Stacks inflicted: (2/2).",
    Swiftness: "Swiftness",
    Once: "Once",
    DetectWeakness: "Detect Weakness",
    castEffectLine01: "- Inflicts Detect Weakness.png",
    castEffectLine02: "- Each stack inflicts an instance of the debuff",
    synergies: ["Swiftness", "Once", "Detect-Weakness", "Debuff"],
  },
  {
    id: 4,
    character: "Hein",
    name: "Assault Slash",
    image: assaultSlashImage,
    targetting: "All Enemies",
    cost: "Cost: 2 Mana",
    stats01: "Damage: 18 - Accuracy: 80% - Critical Hit: -10%",
    Overload: "Overload",
    Countdown: "Countdown 01",
    castEffectLine01: "- Always lands against targets with a weakening debuff.",
    castEffectLine02: "- If Facing one enemy, damage is increased by 7.",
    synergies: [
      "Overload",
      "Countdown",
      "Debuff",
      "Additional Damage",
      "Attack",
    ],
  },
  {
    id: 5,
    character: "Hein",
    name: "Intimidation",
    image: intimidationImage,
    targetting: "All Enemies",
    cost: "Cost: 1 Mana",
    stats01: "Damage: 5 - Accuracy: 102% - Critical Hit: 0%.",
    stats02: " Fear - Debuff Success Chance: 115% - Stacks Inflicted (1/2).",
    Swiftness: "Swiftness",
    Fear: "Fear",
    synergies: ["Switness", "Once", "Debuff", "Attack"],
  },
  {
    id: 6,
    character: "Hein",
    name: "Blood Reflux",
    image: bloodRefluxImage,
    targetting: "Other Ally",
    cost: "Cost: 0 mana",
    stats01:
      "Damage: Missing healing guage - Accuracy: Guarenteed hit - Critical Hit: N/A.",
    stats02:
      " Tenacity - Buff Success Chance: Guarenteed application - Stacks Inflicted (1/2).",
    Swiftness: "Swiftness",
    Bloodthirst: "Bloodthirst",
    Tenacity: "Tenacity",
    PainDamage: "Pain Damage",
    RestoreHealingGauge: "Restore Healing Gauge",
    castEffectLine01:
      "- Restore the target's healing guage but receive Pain damage equal to half of the amount.",
    castEffectLine02: "- Inflicts the Target with Bloodthirst.",
    castEffectLine03: "- Inflicts Target with Tenacity.",
    synergies: [
      "Switness",
      "Bloodthirst",
      "Tenacity",
      "Pain Damage",
      "Restore Healing Guage",
      "Buff",
    ],
  },
  {
    id: 7,
    character: "Hein",
    name: "Merciless Explosion",
    image: mercilessExplosionImage,
    targetting: "Single Enemy",
    cost: "Cost: 3 mana",
    stats01: "Damage: 5 - Accuracy: 93% - Critical Hit: -5%",
    Swiftness: "Swiftness",
    IgnoreTaunt: "Ignore Taunt",
    Tenacity: "Tenacity",
    PainDamage: "Pain Damage",
    RestoreHealingGauge: "Restore Healing Gauge",
    castEffectLine01: "- Cannot be used at Death's Door.",
    castEffectLine02:
      "- Recieve Pain damage equal to 50% of Max Health (12), and deal additional damage equal to 2x missing health.",
    castEffectLine03: "- This skill cannot defeat an enemy.",
    castEffectLine04: "- Self: Tenacity (1/2).",
    synergies: [
      "Switness",
      "Tenacity",
      "Pain Damage",
      "Healing Guage Protection",
      "Additional Damage",
      "Attack",
    ],
  },
  {
    id: 8,
    character: "Hein",
    name: "End-Of-The-Line",
    image: endOfTheLineImage,
    targetting: "Single Enemy",
    cost: "Cost: 2 Mana",
    stats01: "Damage: 21 - Accuracy: 89% - Critical Hit: 0%",
    Overload: "Overload",
    IgnoreTaunt: "Ignore Taunt",
    castEffectLine01:
      "- Gain Igtnore Taunt and guaranteed Critical against targets whose health is 50% or below.",
    castEffectLine02:
      "- When the user is at Death's Door, gain Swiftness and deal 15 additional damage.",
    synergies: ["Overload", "Switness", "Ignore Taunt", "Crit Up", "Attack"],
  },
  {
    id: 9,
    character: "Hein",
    name: "Rage-Slash",
    image: rageSlashImage,
    targetting: "Single Enemy",
    cost: "Cost: 2 Mana",
    stats01: "Damage: 22 - Accuracy: 89% - Critical Hit: 0%",
    stats02: "Evade Reduced - Debuff Success: 105% - Stacks inflicted: (1/3)",
    Swiftness: "Swiftness",
    Countdown: "Countdown 2",
    IgnoreTaunt: "Ignore Taunt",
    EvadeReduced: "Evade Reduced",
    castEffectLine01:
      "- Reduce this skill's cost by 1 if the user has remaining Healing Guage.",
    castEffectLine02: "- Reduce cost to 0 at Death's Door.",
    synergies: [
      "Switness",
      "Countdown",
      "Ignore Taunt",
      "Death's Door",
      "Mana Reduction",
      "Evade Down",
      "Attack",
    ],
  },
  {
    id: 10,
    character: "Hein",
    name: "Blood Storm",
    image: bloodStormImage,
    targetting: "Single Enemy",
    cost: "Cost: 2 Mana",
    stats01: "Damage: 18 - Accuracy: 89% - Critical Hit: 0%",
    Overload: "Overload",
    Countdown: "Countdown 2",
    IgnoreTaunt: "Ignore Taunt",
    castEffectLine01:
      "- Deal damage equal to 70% of Max Health (17) + 50% of lost Health.",
    castEffectLine02:
      "- If you defeat an enemy with this skill, overheal 25% of Max Health.",
    synergies: ["Overload", "Ignore Taunt", "Additional Damage", "Attack"],
  },
  {
    id: 11,
    character: "Hein",
    name: "Endless Rage",
    image: endlessRageImage,
    targetting: "Single Enemy",
    cost: "Cost: 1 Mana",
    stats01: "Damage: 6 - Accuracy: 89% - Critical Hit: 0%",
    Swiftness: "Swiftness",
    CannotBeFixed: "Cannot Be Fixed",
    castEffectLine01: "- Deal additional damage equal to 25% of Max Health (6)",
    castEffectLine02:
      "- Whenever this skill is played from hand, receive Pain damage equal to additional damage.",
    castEffectLine02: "- This skill can be played repeatedly during this turn.",
    synergies: [
      "Swiftness",
      "Cannot Be Fixed",
      "Additional Damage",
      "Pain Damage",
      "Attack",
    ],
  },
  {
    id: 12,
    character: "Hein",
    name: "Bloodied Revenge",
    image: bloodiedRevengeImage,
    targetting: "Single Enemy",
    cost: "Cost: 2 Mana",
    stats01: "Damage: 13 - Accuracy: 89% - Critical Hit: 0%",
    Swiftness: "Swiftness",
    CannotBeFixed: "Cannot Be Fixed",
    IgnoreTaunt: "Ignore Taunt",
    castEffectLine01:
      "- Converts damage recieved by party members into bonus damage for this skill. Cannot exceed Max health x2 (50)",
    castEffectLine02:
      "- Whenever this skill is played from hand, receive Pain damage equal to additional damage.",
    synergies: [
      "Swiftness",
      "Cannot Be Fixed",
      "Ignore Taunt",
      "Additional Damage",
      "Attack",
    ],
  },
];

export default skills;
