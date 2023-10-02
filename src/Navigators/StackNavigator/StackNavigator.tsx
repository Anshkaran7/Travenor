import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useTailwind } from "nativewind/dist";
import React from "react"; // Make sure to import React

import 'react-native-gesture-handler'
import Home from "../../screens/Travenor/Home";
import Login from "../../screens/login/login";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0D6EFD" /> 
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
