import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../constants/Styles";

type ChatHeaderProps = {
  title: string;
    label:string;
};

const ChatHeader = ({ title, label }: ChatHeaderProps) => {
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
      <View style={{flexDirection:'column'}}>
      <Text style={[Styles.mdSemiBold, { color: "#1B1E28", fontSize: 16}]}>{title}</Text>
      <Text style={[Styles.smText, { color: "green", fontSize: 12, textAlign:'center' }]}>{label}</Text>
        </View>
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
        <MaterialIcons size={20} color="#1B1E28" name="phone" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;
 