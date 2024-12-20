import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Content} from '../screens/Content.tsx';
import {Settings} from '../screens/Settings.tsx';

const Tab = createBottomTabNavigator();

const getTabIcon =
  (iconName: string) =>
  ({color, size}: {color: string; size: number}) => (
    <Icon name={iconName} color={color} size={size} />
  );

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Настройки"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('random'),
        }}
      />
      <Tab.Screen
        name="Контент"
        component={Content}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('random'),
        }}
      />
    </Tab.Navigator>
  );
};
