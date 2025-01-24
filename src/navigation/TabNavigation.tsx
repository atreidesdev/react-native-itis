import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Content} from '../screens/Content.tsx';
import {Settings} from '../screens/Settings.tsx';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const getTabIcon =
  (iconName: string) =>
  ({color, size}: {color: string; size: number}) => (
    <Icon name={iconName} color={color} size={size} />
  );

export const TabNavigation = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('random'),
          title: t('navigation.settings'),
        }}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={{
          headerShown: false,
          tabBarIcon: getTabIcon('random'),
          title: t('navigation.content'),
        }}
      />
    </Tab.Navigator>
  );
};
