/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './components/HomeScreen';
import SuccessScreen from './components/SuccessScreen';
import BudgetScreen from './components/Budget/BudgetScreen';
import BudgetDetails from './components/Budget/BudgetDetails/BudgetDetails';

const Stack = createNativeStackNavigator();

const App = (): React.ReactElement => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Budget" component={BudgetScreen} />
          <Stack.Screen name="BudgetDetails" component={BudgetDetails} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Success" component={SuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
