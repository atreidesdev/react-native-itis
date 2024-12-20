import {createContext} from 'react';
import {ThemeContextType} from './types.ts';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
