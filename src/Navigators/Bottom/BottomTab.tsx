import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import MainHome from '../../screens/Travenor/MainHome';
import Calendar from '../../screens/Travenor/Calendar';
import Search from '../../screens/Travenor/Search';
import Message from '../../screens/Travenor/Message';
import Profile from '../../screens/Travenor/Profile';
import { Styles } from '../../constants/Styles';
import { View } from 'react-native';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0D6EFD',
        tabBarInactiveTintColor: '#7D848D',
        
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 14,
          fontFamily: 'Poppins_400Regular',
        },
        tabBarIcon: ({ color, size }) => {
          let iconComponent;

          if (route.name === 'Home') {
            iconComponent = <FontAwesome name="home" size={24} color={color} />;
          } else if (route.name === 'Calendar') {
            iconComponent = <FontAwesome name='calendar' size={24} color={color} />;
          } else if (route.name === 'Search') {
            iconComponent = 
            <View style={{ transform: "translateY(5px)", backgroundColor: "#0D6EFD", height: 60, width: 60, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 100, }}>
              <FontAwesome name='search' size={24} color={"white"} />
            </View>
          } else if (route.name === 'Messages') {
            iconComponent = <FontAwesome name='envelope-o' size={24} color={color} />;
          } else if (route.name === 'Profile') {
            iconComponent = <FontAwesome name='user-o' size={24} color={color} />;
          }

          return iconComponent;
        },
        tabBarStyle: {
          minHeight: 80,
          paddingVertical: 16,
          borderStyle: 'solid',
          paddingBottom: 16,
          paddingTop: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: '#aaaaaa',
        },
        tabBarLabel: (route.name === 'Search') ? '' : route.name, 
      })}
    >
      <BottomTab.Screen name="Home" component={MainHome} />
      <BottomTab.Screen name="Calendar" component={Calendar} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Messages" component={Message} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
}
