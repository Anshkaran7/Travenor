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
import Register from "../../screens/login/register";
import ForgotPassword from "../../screens/login/forgetPassword";
import OtpScreen from "../../screens/login/OtpScreen";
import BottomTabNavigator from "../Bottom/BottomTab";
import Profile from "../../screens/Travenor/Profile";
import ProfileScreen from "../../screens/Travenor/ProfileScreen";
import Message from "../../screens/Travenor/Message";

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
        <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
        />
        <Stack.Screen
        options={{headerShown:false}}
        name="ForgotPassword"
        component={ForgotPassword}
        />
        <Stack.Screen
        options={{headerShown:false}}
        name="OtpScreen"
        component={OtpScreen}
        />
        <Stack.Screen
        options={{headerShown:false}}
        name="BottomTab"
        component={BottomTabNavigator}
        />

        
        <Stack.Screen options={{ headerShown: false }} name="ProfileScreen" component={ProfileScreen} />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}
