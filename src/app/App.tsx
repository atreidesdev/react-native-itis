import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { DeepLinking } from '../navigation/DeepLinking.ts';
import Navigation from '../navigation/Navigation.ts';
import { TabNavigation } from '../navigation/TabNavigation.tsx';
import { queryClient } from '../shared/api/query.ts';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    Linking.getInitialURL().then((url) => {
      if (url) {
        DeepLinking.handleNavigate(url);
      }
    });

    const subscription = Linking.addEventListener('url', ({ url }) => {
      if (url) {
        DeepLinking.handleNavigate(url);
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        ref={Navigation.navigationRef}
        linking={DeepLinking.linking}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
