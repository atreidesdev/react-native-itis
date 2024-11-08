import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { store, StoreContext } from './store.ts';
import { TabNavigation } from '../navigation/TabNavigation.tsx';
import { queryClient } from '../shared/api/query.ts';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <StoreContext.Provider value={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name={'Tab'}
                            component={TabNavigation}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </StoreContext.Provider>
        </QueryClientProvider>
    );
}
