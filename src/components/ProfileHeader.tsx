import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../constants/Styles";

type ProfileHeaderProps = {
    title: string;
};

const ProfileHeader = ({ title }: ProfileHeaderProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleEdit = () => {
        navigation.navigate("EditProfile" as never);
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
                    backgroundColor: '#F7F7F9',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    padding: 5
                }}
            >
                <MaterialIcons size={30} color="#1B1E28" name="keyboard-arrow-left" />
            </TouchableOpacity>
            <Text style={[Styles.mdSemiBold, { color: "#1B1E28", fontSize: 20 }]}>{title}</Text>
            <TouchableOpacity
                onPress={handleEdit}
                style={{
                    backgroundColor: '#F7F7F9',
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                    padding: 5
                }}
            >
                <FontAwesome size={20} color="#0D6EFD" name="pencil" />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileHeader;
