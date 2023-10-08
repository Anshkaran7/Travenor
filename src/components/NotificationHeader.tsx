import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../constants/Styles";

type NotificationHeaderProps = {
  title: string;
  clearAllNotifications: () => void; 
};

const NotificationHeader = ({ title, clearAllNotifications }: NotificationHeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? 48 : 64,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom:20
        
      }}
    >
      <TouchableOpacity
        onPress={handleGoBack}
        style={{
          backgroundColor:'#F7F7F9',
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          padding:5
        }}
      >
        <MaterialIcons size={30} color="#1B1E28" name="keyboard-arrow-left" />
      </TouchableOpacity>
      <Text style={[Styles.mdSemiBold, { color: "#1B1E28", fontSize: 18 }]}>{title}</Text>
      <TouchableOpacity onPress={clearAllNotifications}> 
        <Text style={[Styles.smText, { color: "#0D6EFD", fontSize: 12 }]}>Clear all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationHeader;
 