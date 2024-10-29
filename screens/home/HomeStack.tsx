import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { Button } from 'react-native';
import { AboutScreen } from './AboutScreen';

const Stack = createNativeStackNavigator();

const AboutButton = ({ navigation }: { navigation: NativeStackScreenProps<any>['navigation'] }) => (
  <Button
    title="О приложении"
    color="blue"
    onPress={() => {
      navigation.navigate('About');
    }}
  />
);

export const HomeStack = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <AboutButton navigation={navigation} />,
        }}
      />
      <Stack.Screen name="About" component={AboutScreen} initialParams={{ itemId: 42 }} />
    </Stack.Navigator>
  );
};
