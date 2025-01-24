import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {TabNavigation} from '../navigation/TabNavigation';
import {ThemeProvider} from '../shared/theme/model/provider.tsx';
import '../shared/localization/i18n.ts';
import {loadLanguage} from '../shared/localization/languageManager.ts';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    loadLanguage();
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Tab'}
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
