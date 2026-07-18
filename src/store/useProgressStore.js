import { create } from 'zustand';
import { PHASES, getAllTopics, getTotalXP } from '../data/roadmap';
import { ACHIEVEMENTS } from '../data/achievements';

const STORAGE_KEY = 'javapath_progress';

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveToStorage = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completedTopics: state.completedTopics,
      completedExercises: state.completedExercises,
      completedSubtopics: state.completedSubtopics,
      completedProjects: state.completedProjects,
      totalXP: state.totalXP,
      streak: state.streak,
      lastStudyDate: state.lastStudyDate,
      notes: state.notes,
      selectedGoal: state.selectedGoal,
      unlockedAchievements: state.unlockedAchievements,
      languageSwitched: state.languageSwitched,
      maxTopicsInDay: state.maxTopicsInDay,
      nightOwlUnlocked: state.nightOwlUnlocked,
      topicsCompletedToday: state.topicsCompletedToday,
      studyDate: state.studyDate,
    }));
  } catch {
    // ignore storage errors
  }
};

const getInitialState = () => {
  const saved = loadFromStorage();
  const today = new Date().toDateString();

  if (saved) {
    // Reset daily tracker if new day
    if (saved.studyDate !== today) {
      saved.topicsCompletedToday = 0;
      saved.studyDate = today;
    }
    
    // Check if properties exist to support backward compatibility
    if(!saved.completedProjects) saved.completedProjects = [];

    // Check streak
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const lastStudy = new Date(saved.lastStudyDate);
    if (saved.lastStudyDate && lastStudy.toDateString() !== yesterday.toDateString() && lastStudy.toDateString() !== today) {
      saved.streak = 0;
    }
    return saved;
  }

  return {
    completedTopics: [],
    completedExercises: [],
    completedSubtopics: [],
    completedProjects: [],
    totalXP: 0,
    streak: 0,
    lastStudyDate: null,
    notes: {},
    selectedGoal: null,
    unlockedAchievements: [],
    languageSwitched: false,
    maxTopicsInDay: 0,
    nightOwlUnlocked: false,
    topicsCompletedToday: 0,
    studyDate: today,
  };
};

const checkAchievements = (state) => {
  const newlyUnlocked = [];

  for (const achievement of ACHIEVEMENTS) {
    if (state.unlockedAchievements.includes(achievement.id)) continue;

    const unlocked = achievement.condition(state, PHASES);
    if (unlocked) {
      newlyUnlocked.push(achievement.id);
    }
  }

  return newlyUnlocked;
};

const useProgressStore = create((set, get) => ({
  ...getInitialState(),

  // ─── Topic Completion ───
  completeTopic: (topicId, xpAmount) => {
    const state = get();
    if (state.completedTopics.includes(topicId)) return;

    const today = new Date().toDateString();
    const hour = new Date().getHours();
    const isNightOwl = hour >= 0 && hour < 5;

    const newTopicsToday = state.studyDate === today
      ? state.topicsCompletedToday + 1
      : 1;

    // Update streak
    let newStreak = state.streak;
    const lastStudy = state.lastStudyDate;
    if (!lastStudy || lastStudy !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastStudy === yesterday.toDateString()) {
        newStreak = state.streak + 1;
      } else if (lastStudy !== today) {
        newStreak = 1;
      }
    }

    const newState = {
      completedTopics: [...state.completedTopics, topicId],
      totalXP: state.totalXP + xpAmount,
      streak: newStreak,
      lastStudyDate: today,
      topicsCompletedToday: newTopicsToday,
      studyDate: today,
      maxTopicsInDay: Math.max(state.maxTopicsInDay, newTopicsToday),
      nightOwlUnlocked: state.nightOwlUnlocked || isNightOwl,
    };

    const newlyUnlocked = checkAchievements({ ...state, ...newState });
    let xpFromAchievements = 0;

    for (const achId of newlyUnlocked) {
      const ach = ACHIEVEMENTS.find(a => a.id === achId);
      if (ach) xpFromAchievements += ach.xpReward;
    }

    const finalState = {
      ...newState,
      totalXP: newState.totalXP + xpFromAchievements,
      unlockedAchievements: [...state.unlockedAchievements, ...newlyUnlocked],
    };

    set(finalState);
    saveToStorage({ ...state, ...finalState });
  },

  uncompleteTopic: (topicId, xpAmount) => {
    const state = get();
    const newState = {
      completedTopics: state.completedTopics.filter(id => id !== topicId),
      totalXP: Math.max(0, state.totalXP - xpAmount),
    };
    set(newState);
    saveToStorage({ ...state, ...newState });
  },

  // ─── Project Completion ───
  completeProject: (projectId, xpAmount) => {
    const state = get();
    if (state.completedProjects.includes(projectId)) return;

    const newState = {
      completedProjects: [...state.completedProjects, projectId],
      totalXP: state.totalXP + xpAmount,
    };

    const newlyUnlocked = checkAchievements({ ...state, ...newState });
    let xpFromAchievements = 0;

    for (const achId of newlyUnlocked) {
      const ach = ACHIEVEMENTS.find(a => a.id === achId);
      if (ach) xpFromAchievements += ach.xpReward;
    }

    const finalState = {
      ...newState,
      totalXP: newState.totalXP + xpFromAchievements,
      unlockedAchievements: [...state.unlockedAchievements, ...newlyUnlocked],
    };

    set(finalState);
    saveToStorage({ ...state, ...finalState });
  },
  
  uncompleteProject: (projectId, xpAmount) => {
      const state = get();
      const newState = {
         completedProjects: state.completedProjects.filter(id => id !== projectId),
         totalXP: Math.max(0, state.totalXP - xpAmount)
      };
      set(newState);
      saveToStorage({ ...state, ...newState});
  },

  // ─── Subtopic Completion ───
  toggleSubtopic: (subtopicId) => {
    const state = get();
    const completed = state.completedSubtopics.includes(subtopicId);
    const newState = {
      completedSubtopics: completed
        ? state.completedSubtopics.filter(id => id !== subtopicId)
        : [...state.completedSubtopics, subtopicId],
    };
    set(newState);
    saveToStorage({ ...state, ...newState });
  },

  // ─── Exercise Completion ───
  completeExercise: (exerciseId, xpAmount = 30) => {
    const state = get();
    if (state.completedExercises.includes(exerciseId)) return;

    const newState = {
      completedExercises: [...state.completedExercises, exerciseId],
      totalXP: state.totalXP + xpAmount,
    };

    const newlyUnlocked = checkAchievements({ ...state, ...newState });
    let xpFromAchievements = 0;
    for (const achId of newlyUnlocked) {
      const ach = ACHIEVEMENTS.find(a => a.id === achId);
      if (ach) xpFromAchievements += ach.xpReward;
    }

    const finalState = {
      ...newState,
      totalXP: newState.totalXP + xpFromAchievements,
      unlockedAchievements: [...state.unlockedAchievements, ...newlyUnlocked],
    };

    set(finalState);
    saveToStorage({ ...state, ...finalState });
  },

  // ─── Notes ───
  setNote: (topicId, content) => {
    const state = get();
    const newNotes = { ...state.notes, [topicId]: content };
    const newState = { notes: newNotes };
    set(newState);
    saveToStorage({ ...state, ...newState });
  },

  deleteNote: (topicId) => {
    const state = get();
    const { [topicId]: removed, ...rest } = state.notes;
    const newState = { notes: rest };
    set(newState);
    saveToStorage({ ...state, ...newState });
  },

  // ─── Goal Selection ───
  setSelectedGoal: (goalId) => {
    const state = get();
    const newState = { selectedGoal: goalId };
    set(newState);
    saveToStorage({ ...state, ...newState });
  },

  // ─── Language switched ───
  markLanguageSwitched: () => {
    const state = get();
    if (state.languageSwitched) return;

    const newState = { languageSwitched: true };
    const newlyUnlocked = checkAchievements({ ...state, ...newState });

    const finalState = {
      ...newState,
      unlockedAchievements: [...state.unlockedAchievements, ...newlyUnlocked],
    };
    set(finalState);
    saveToStorage({ ...state, ...finalState });
  },

  // ─── Computed values ───
  getPhaseProgress: (phaseId) => {
    const state = get();
    const phase = PHASES.find(p => p.id === phaseId);
    if (!phase) return { completed: 0, total: 0, percentage: 0 };

    const total = phase.topics.length;
    const completed = phase.topics.filter(t =>
      state.completedTopics.includes(t.id)
    ).length;

    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  },

  getOverallProgress: () => {
    const state = get();
    const allTopics = getAllTopics();
    const total = allTopics.length;
    const completed = state.completedTopics.length;
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  },

  getXPProgress: () => {
    const state = get();
    const maxXP = getTotalXP();
    return { current: state.totalXP, max: maxXP, percentage: Math.round((state.totalXP / maxXP) * 100) };
  },

  getLevel: () => {
    const state = get();
    const xp = state.totalXP;
    if (xp < 500) return { level: 1, title: "Newbie", next: 500 };
    if (xp < 1500) return { level: 2, title: "Beginner", next: 1500 };
    if (xp < 3000) return { level: 3, title: "Apprentice", next: 3000 };
    if (xp < 6000) return { level: 4, title: "Learner", next: 6000 };
    if (xp < 10000) return { level: 5, title: "Practitioner", next: 10000 };
    if (xp < 15000) return { level: 6, title: "Skilled", next: 15000 };
    if (xp < 22000) return { level: 7, title: "Advanced", next: 22000 };
    if (xp < 30000) return { level: 8, title: "Expert", next: 30000 };
    if (xp < 40000) return { level: 9, title: "Master", next: 40000 };
    return { level: 10, title: "Grand Master", next: xp };
  },

  // ─── Reset ───
  resetProgress: () => {
    localStorage.removeItem(STORAGE_KEY);
    set(getInitialState());
  },

  exportProgress: () => {
    const state = get();
    const data = JSON.stringify({
      completedTopics: state.completedTopics,
      completedProjects: state.completedProjects,
      totalXP: state.totalXP,
      streak: state.streak,
      unlockedAchievements: state.unlockedAchievements,
      exportedAt: new Date().toISOString(),
    }, null, 2);

    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'javapath-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  },
}));

export default useProgressStore;