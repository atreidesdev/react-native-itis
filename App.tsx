import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './src/components/TabNavigation.tsx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';
import { StoreProvider } from './src/store/RootStore.tsx';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Host>
        <StoreProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={'Tab'} component={TabNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </StoreProvider>
      </Host>
    </GestureHandlerRootView>
  );
}
