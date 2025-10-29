import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabNavigator } from './presentation/routes/BottomTabsNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <SideMenuNavigator /> */}
      {/* <BottomTabNavigator /> */}

      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={SideMenuNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
