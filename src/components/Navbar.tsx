import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../constants/Styles";

type NavbarProps = {
  title: string;
};

const Navbar = ({ title }: NavbarProps) => {
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
      <Text style={[Styles.lgText, { color: "#1B1E28", fontSize: 20 }]}>{title}</Text>
      <View style={{ width: 7, height: 7 }}></View>
    </View>
  );
};

export default Navbar;
 