import {useContext, useMemo} from 'react';
import {ThemeContext} from './context.tsx';
import {ThemeColors, ThemeContextType} from './types.ts';

export const useTheme = (): ThemeContextType & {Colors: ThemeColors} => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const colors = useMemo<ThemeColors>(() => context.colors, [context.colors]);

  return {Colors: colors, ...context};
};
