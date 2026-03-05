import { create } from 'zustand';

type themeMode = 'light' | 'dark';

export interface themeStore {
  mode: themeMode;
  toggle: () => void;
}

export const useThemeStore = create<themeStore>((set) => ({
  mode: 'light',
  toggle: () => set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
}));
