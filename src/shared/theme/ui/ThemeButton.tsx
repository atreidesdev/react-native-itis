import React from 'react';
import {Button, View} from 'react-native';

type ThemeProps = {
  themeOption: string;
  currentTheme: string;
  onPress: () => void;
};

export const ThemeButton = ({
  themeOption,
  currentTheme,
  onPress,
}: ThemeProps) => {
  return (
    <View style={{margin: 5}}>
      <Button
        title={themeOption}
        onPress={themeOption !== currentTheme ? onPress : undefined}
        color={themeOption === currentTheme ? 'blue' : 'gray'}
      />
    </View>
  );
};
