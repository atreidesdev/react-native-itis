import React from 'react';
import {View} from 'react-native';
import {ThemeButton} from './ThemeButton';
import {ThemeColorsMap} from '../model/constants.ts';
import {useTheme} from '../model/hooks.ts';
import {ThemeTypes} from '../model/types.ts';
import {useTranslation} from 'react-i18next';

export const ThemeSwitcher = () => {
  const {theme, changeTheme} = useTheme();
  const {t} = useTranslation();

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
          themeOption={t(`themes.${themeOption}`)}
          currentTheme={t(`themes.${theme}`)}
          onPress={() => changeTheme(themeOption)}
        />
      ))}
    </View>
  );
};
