import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AnimeDetailsScreen from './AnimeDetailsScreen';
import AnimeScreen from './AnimeScreen';

export type AnimeStackParamList = {
    AnimeList: undefined;
    AnimeDetails: { animeId: number; title: string };
};

const Stack = createNativeStackNavigator<AnimeStackParamList>();

export const AnimeStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="AnimeList"
            component={AnimeScreen}
            options={{ title: 'Anime List' }}
        />
        <Stack.Screen
            name="AnimeDetails"
            component={AnimeDetailsScreen}
            options={{ title: '' }}
        />
    </Stack.Navigator>
);
