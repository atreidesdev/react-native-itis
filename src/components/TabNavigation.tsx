import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { CreateTodoScreen } from '../screens/CreateTodoScreen.tsx';
import { PendingTodoScreen } from '../screens/PendingTodosScreen.tsx';
import { CompletedTodoScreen } from '../screens/CompletedTodosScreen.tsx';


const Tab = createBottomTabNavigator();

const getTabIcon = (iconName: string) => ({ color, size }: { color: string; size: number }) => (
  <Icon name={iconName} color={color} size={size} />
);

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Создать задачу"
        component={CreateTodoScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('add-circle-outline'),
        }}
      />
      <Tab.Screen
        name="Выполняемые"
        component={PendingTodoScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('time-outline'),
        }}
      />
      <Tab.Screen
        name="Выполнены"
        component={CompletedTodoScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('checkmark-done-outline'),
        }}
      />
    </Tab.Navigator>
  );
};
