import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimeStack } from '../screens/animes/AnimeStack.tsx';
import { LastAnimeScreen } from '../screens/animes/LastAnimeScreen.tsx';

const Tab = createBottomTabNavigator();

const getTabIcon =
    (iconName: string) =>
    ({ color, size }: { color: string; size: number }) => (
        <Icon name={iconName} color={color} size={size} />
    );

export const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Anime"
                component={AnimeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: getTabIcon('film'),
                }}
            />
            <Tab.Screen
                name="LastAnime"
                component={LastAnimeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: getTabIcon('random'),
                }}
            />
        </Tab.Navigator>
    );
};
