import { create } from 'zustand';

const SETTINGS_KEY = 'javapath_settings';

const load = () => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const save = (state) => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({
      language: state.language,
      theme: state.theme,
      sidebarCollapsed: state.sidebarCollapsed,
      fontSize: state.fontSize,
      codeTheme: state.codeTheme,
      notificationsEnabled: state.notificationsEnabled,
    }));
  } catch {}
};

const defaults = {
  language: 'en',
  theme: 'light', // Changed default to light
  sidebarCollapsed: false,
  fontSize: 'medium',
  codeTheme: 'light', // Changed default to light
  notificationsEnabled: true,
};

const useSettingsStore = create((set, get) => ({
  ...(load() || defaults),

  setLanguage: (lang) => {
    const state = get();
    const newState = { language: lang };
    set(newState);
    save({ ...state, ...newState });
    document.documentElement.lang = lang;
  },

  setTheme: (theme) => {
    const state = get();
    const newState = { theme };
    set(newState);
    save({ ...state, ...newState });
    document.documentElement.setAttribute('data-theme', theme);
  },

  toggleTheme: () => {
    const state = get();
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    state.setTheme(newTheme);
  },

  toggleSidebar: () => {
    const state = get();
    const newState = { sidebarCollapsed: !state.sidebarCollapsed };
    set(newState);
    save({ ...state, ...newState });
  },

  setFontSize: (size) => {
    const state = get();
    const newState = { fontSize: size };
    set(newState);
    save({ ...state, ...newState });
  },

  setCodeTheme: (theme) => {
    const state = get();
    const newState = { codeTheme: theme };
    set(newState);
    save({ ...state, ...newState });
  },

  toggleNotifications: () => {
    const state = get();
    const newState = { notificationsEnabled: !state.notificationsEnabled };
    set(newState);
    save({ ...state, ...newState });
  },
}));

// Apply theme on load
const saved = load();
// Ensure light theme is applied by default if nothing is saved
const initialTheme = saved?.theme || 'light';
document.documentElement.setAttribute('data-theme', initialTheme);

if (saved?.language) {
  document.documentElement.lang = saved.language;
}

export default useSettingsStore;