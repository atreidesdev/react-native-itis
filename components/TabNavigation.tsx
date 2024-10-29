import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStack } from '../screens/home/HomeStack';
import { NewsScreen } from '../screens/NewsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const getTabIcon = (iconName: string) => ({ color, size }: { color: string; size: number }) => (
  <Icon name={iconName} color={color} size={size} />
);

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainHome"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('home-outline'),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('newspaper-outline'),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('chatbubble-outline'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('settings-outline'),
        }}
      />
    </Tab.Navigator>
  );
};
