import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoreContext, store} from './store.ts';
import {TabNavigation} from '../navigation/TabNavigation.tsx';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Tab'}
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
}
