export type ThemeTypes = 'light' | 'dark';

export type ThemeColors = {
  main: string;
  secondary: string;
  background: string;
  textPrimary: string;
  textSecondary: string;
};

export type ThemeType = 'light' | 'dark' | any;

export type ThemeContextType = {
  theme: ThemeType;
  colors: ThemeColors;
  selectTheme: ThemeTypes;
  changeTheme: (value: ThemeTypes) => void;
};
