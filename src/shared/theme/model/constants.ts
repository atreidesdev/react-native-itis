import {ThemeColors, ThemeType} from './types';

export const THEME_KEY = '@THEME';

export const ThemeColorsMap: Record<ThemeType, ThemeColors> = {
  light: {
    main: '#ffffff',
    secondary: '#f0f0f0',
    background: '#ffffff',
    textPrimary: '#000000',
    textSecondary: '#666666',
  },
  dark: {
    main: '#000000',
    secondary: '#1a1a1a',
    background: '#121212',
    textPrimary: '#ffffff',
    textSecondary: '#aaaaaa',
  },
  ocean: {
    main: '#006994',
    secondary: '#00a0b0',
    background: '#e0f7fa',
    textPrimary: '#004d61',
    textSecondary: '#007c91',
  },
};
