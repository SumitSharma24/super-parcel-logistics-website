import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const STORAGE_KEY = 'super-parcel-theme';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
