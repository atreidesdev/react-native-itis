import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useCallback, ReactNode} from 'react';
import {Appearance, NativeEventSubscription} from 'react-native';
import {THEME_KEY, ThemeColorsMap} from './constants.ts';
import {ThemeContext} from './context.tsx';
import {ThemeType, ThemeTypes} from './types.ts';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [selectTheme, setSelectTheme] = useState<ThemeTypes>('light');

  const getCurrentColors = useCallback(() => ThemeColorsMap[theme], [theme]);

  useEffect(() => {
    (async () => {
      const savedTheme = (await AsyncStorage.getItem(THEME_KEY)) as ThemeTypes;
      if (savedTheme) {
        changeTheme(savedTheme);
      }
    })();
  }, []);

  useEffect(() => {
    let listener: NativeEventSubscription | undefined;
    if (selectTheme === 'system') {
      listener = Appearance.addChangeListener(({colorScheme}) => {
        if (colorScheme) {
          setTheme(colorScheme as ThemeType);
        }
      });
    }
    return () => {
      if (listener) {
        listener.remove();
      }
    };
  }, [selectTheme]);

  const changeTheme = (newTheme: ThemeTypes) => {
    setSelectTheme(newTheme);
    AsyncStorage.setItem(THEME_KEY, newTheme);
    if (newTheme === 'system') {
      const colorScheme = Appearance.getColorScheme() as ThemeType;
      if (colorScheme) {
        setTheme(colorScheme);
      }
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: getCurrentColors(),
        selectTheme,
        changeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
