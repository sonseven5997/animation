/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/Home';
import StickyHeader from './src/StickyHeader';

export type RootStackParamList = {
  Home: () => JSX.Element;
  StickyHeader: () => JSX.Element;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StickyHeader" component={StickyHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
