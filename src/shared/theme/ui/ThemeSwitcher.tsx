import React from 'react';
import {View} from 'react-native';
import {ThemeButton} from './ThemeButton';
import {ThemeColorsMap} from '../model/constants.ts';
import {useTheme} from '../model/hooks.ts';
import {ThemeTypes} from '../model/types.ts';

export const ThemeSwitcher = () => {
  const {theme, changeTheme} = useTheme();

  const themes: ThemeTypes[] = Object.keys(ThemeColorsMap) as ThemeTypes[];

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
      }}>
      {themes.map(themeOption => (
        <ThemeButton
          key={themeOption}
          themeOption={themeOption}
          currentTheme={theme}
          onPress={() => changeTheme(themeOption)}
        />
      ))}
    </View>
  );
};
