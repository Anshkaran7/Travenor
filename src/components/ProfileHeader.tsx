import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../constants/Styles";

type ProfileHeaderProps = {
    title: string;
    isEditMode: boolean; // Pass isEditMode as a prop
    onEditPress: () => void;
  };
  
  const ProfileHeader = ({ title, onEditPress, isEditMode }: ProfileHeaderProps) => {
    const navigation = useNavigation();
    const [editing, setEditing] = useState(isEditMode);
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    const handleEditPress = () => {
        setEditing(!editing);
        onEditPress(); // Call the provided onEditPress callback
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
            backgroundColor: "#F7F7F9",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            padding: 5,
          }}
        >
          <MaterialIcons size={30} color="#1B1E28" name="keyboard-arrow-left" />
        </TouchableOpacity>
        <Text style={[Styles.mdSemiBold, { color: "#1B1E28", fontSize: 20 }]}>
          {title}
        </Text>
        <TouchableOpacity
          onPress={handleEditPress}
          style={{
            backgroundColor: "#F7F7F9",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            padding: 5,
          }}
        >
          {editing ? (
            <FontAwesome size={20} color="#19B000" name="check" />
          ) : (
            <FontAwesome size={20} color="#0D6EFD" name="pencil" />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  
  export default ProfileHeader;