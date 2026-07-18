// ============================================================
// ACHIEVEMENTS / BADGES SYSTEM
// ============================================================

export const ACHIEVEMENTS = [
  // ─── Milestone Badges ───
  {
    id: "first-step",
    title: "First Step",
    description: "Complete your very first topic",
    icon: "👣",
    rarity: "common",
    category: "milestone",
    condition: (progress) => progress.completedTopics.length >= 1,
    xpReward: 50,
  },
  {
    id: "curious-learner",
    title: "Curious Learner",
    description: "Complete 5 topics",
    icon: "🔍",
    rarity: "common",
    category: "milestone",
    condition: (progress) => progress.completedTopics.length >= 5,
    xpReward: 100,
  },
  {
    id: "dedicated",
    title: "Dedicated",
    description: "Complete 15 topics",
    icon: "📚",
    rarity: "uncommon",
    category: "milestone",
    condition: (progress) => progress.completedTopics.length >= 15,
    xpReward: 250,
  },
  {
    id: "halfway-hero",
    title: "Halfway Hero",
    description: "Complete 35 topics",
    icon: "⚔️",
    rarity: "rare",
    category: "milestone",
    condition: (progress) => progress.completedTopics.length >= 35,
    xpReward: 500,
  },
  {
    id: "java-master",
    title: "Java Master",
    description: "Complete all 71 topics",
    icon: "☕",
    rarity: "legendary",
    category: "milestone",
    condition: (progress) => progress.completedTopics.length >= 71,
    xpReward: 2000,
  },

  // ─── Phase Badges ───
  {
    id: "phase-1-complete",
    title: "Fundamentals Complete",
    description: "Complete Phase 1: Programming Fundamentals",
    icon: "🌱",
    rarity: "uncommon",
    category: "phase",
    phaseId: 1,
    condition: (progress, phases) => {
      const phase = phases.find(p => p.id === 1);
      return phase?.topics.every(t => progress.completedTopics.includes(t.id));
    },
    xpReward: 200,
  },
  {
    id: "oop-graduate",
    title: "OOP Graduate",
    description: "Complete Phase 3: Object-Oriented Programming",
    icon: "🧩",
    rarity: "rare",
    category: "phase",
    phaseId: 3,
    condition: (progress, phases) => {
      const phase = phases.find(p => p.id === 3);
      return phase?.topics.every(t => progress.completedTopics.includes(t.id));
    },
    xpReward: 400,
  },
  {
    id: "spring-developer",
    title: "Spring Developer",
    description: "Complete Phase 15: Spring Framework",
    icon: "🌿",
    rarity: "epic",
    category: "phase",
    phaseId: 15,
    condition: (progress, phases) => {
      const phase = phases.find(p => p.id === 15);
      return phase?.topics.every(t => progress.completedTopics.includes(t.id));
    },
    xpReward: 800,
  },
  {
    id: "cloud-native",
    title: "Cloud Native",
    description: "Complete Phase 20: Deployment & DevOps",
    icon: "☁️",
    rarity: "epic",
    category: "phase",
    phaseId: 20,
    condition: (progress, phases) => {
      const phase = phases.find(p => p.id === 20);
      return phase?.topics.every(t => progress.completedTopics.includes(t.id));
    },
    xpReward: 800,
  },

  // ─── Streak Badges ───
  {
    id: "streak-3",
    title: "3-Day Streak",
    description: "Learn for 3 consecutive days",
    icon: "🔥",
    rarity: "common",
    category: "streak",
    condition: (progress) => progress.streak >= 3,
    xpReward: 75,
  },
  {
    id: "streak-7",
    title: "Week Warrior",
    description: "Learn for 7 consecutive days",
    icon: "🔥🔥",
    rarity: "uncommon",
    category: "streak",
    condition: (progress) => progress.streak >= 7,
    xpReward: 200,
  },
  {
    id: "streak-30",
    title: "Monthly Master",
    description: "Learn for 30 consecutive days",
    icon: "🔥🔥🔥",
    rarity: "legendary",
    category: "streak",
    condition: (progress) => progress.streak >= 30,
    xpReward: 1000,
  },

  // ─── XP Badges ───
  {
    id: "xp-1000",
    title: "Rising Star",
    description: "Earn 1,000 XP",
    icon: "⭐",
    rarity: "common",
    category: "xp",
    condition: (progress) => progress.totalXP >= 1000,
    xpReward: 0,
  },
  {
    id: "xp-5000",
    title: "Java Veteran",
    description: "Earn 5,000 XP",
    icon: "🌟",
    rarity: "rare",
    category: "xp",
    condition: (progress) => progress.totalXP >= 5000,
    xpReward: 0,
  },
  {
    id: "xp-15000",
    title: "Java Legend",
    description: "Earn 15,000 XP",
    icon: "✨",
    rarity: "legendary",
    category: "xp",
    condition: (progress) => progress.totalXP >= 15000,
    xpReward: 0,
  },

  // ─── Practice Badges ───
  {
    id: "first-exercise",
    title: "Code Runner",
    description: "Complete your first exercise",
    icon: "💻",
    rarity: "common",
    category: "practice",
    condition: (progress) => progress.completedExercises.length >= 1,
    xpReward: 50,
  },
  {
    id: "exercise-25",
    title: "Problem Solver",
    description: "Complete 25 exercises",
    icon: "🧠",
    rarity: "rare",
    category: "practice",
    condition: (progress) => progress.completedExercises.length >= 25,
    xpReward: 500,
  },
  {
    id: "exercise-all",
    title: "Exercise Champion",
    description: "Complete all exercises",
    icon: "🏆",
    rarity: "legendary",
    category: "practice",
    condition: (progress) => progress.completedExercises.length >= 100,
    xpReward: 1500,
  },

  // ─── Special Badges ───
  {
    id: "notes-writer",
    title: "Note Taker",
    description: "Write notes for 10 topics",
    icon: "📝",
    rarity: "uncommon",
    category: "special",
    condition: (progress) => Object.keys(progress.notes || {}).length >= 10,
    xpReward: 150,
  },
  {
    id: "polyglot",
    title: "Polyglot",
    description: "Switch the interface language",
    icon: "🌍",
    rarity: "common",
    category: "special",
    condition: (progress) => progress.languageSwitched === true,
    xpReward: 25,
  },
  {
    id: "night-owl",
    title: "Night Owl",
    description: "Complete a topic after midnight",
    icon: "🦉",
    rarity: "uncommon",
    category: "special",
    condition: (progress) => progress.nightOwlUnlocked === true,
    xpReward: 100,
  },
  {
    id: "speed-learner",
    title: "Speed Learner",
    description: "Complete 3 topics in one day",
    icon: "⚡",
    rarity: "rare",
    category: "special",
    condition: (progress) => progress.maxTopicsInDay >= 3,
    xpReward: 200,
  },
];

export const RARITY_CONFIG = {
  common: { label: "Common", color: "#9090b0", gradient: "linear-gradient(135deg, #9090b0, #5a5a78)" },
  uncommon: { label: "Uncommon", color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #059669)" },
  rare: { label: "Rare", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)" },
  epic: { label: "Epic", color: "#7c6ef7", gradient: "linear-gradient(135deg, #7c6ef7, #5a4fd4)" },
  legendary: { label: "Legendary", color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
};
