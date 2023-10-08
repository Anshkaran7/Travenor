import { View, Text, TouchableOpacity, Platform, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../constants/Styles";


const data = {
    Image: require('../../assets/images/profile.png'),
    name: 'Karan',
};

const HomeHeader = () => {
    const navigation = useNavigation();

    const handleProfile = () => {
        navigation.navigate("Profile" as never);
    };

    return (
        <View
            style={{
                paddingTop: Platform.OS === "android" ? 48 : 64,
                backgroundColor: "#fff",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 15,
               marginTop: 5,

            }}
        >
            <TouchableOpacity
                onPress={handleProfile}
                style={{
                    backgroundColor: '#F7F7F9',
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    borderRadius: 20,

                    gap: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 8
                }}
            >
                <Image source={data.Image} style={{ width: 30, height: 30 }} />
                <Text style={[Styles.mdSemiBold, { color: "#1B1E28" }]}>{data.name}  </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Notification" as never)}>
            <FontAwesome name="bell-o" size={24} color="#1B1E28" />
            </TouchableOpacity>
        </View>
    );
};

export default HomeHeader;
