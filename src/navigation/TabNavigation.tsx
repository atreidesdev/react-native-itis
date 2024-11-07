import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Screen1} from '../screens/Screen1.tsx';
import {Screen2} from '../screens/Screen2.tsx';
import {Screen3} from '../screens/Screen3.tsx';

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
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('random'),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('magic'),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('money'),
        }}
      />
    </Tab.Navigator>
  );
};
