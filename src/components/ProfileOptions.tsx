import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Styles } from "../constants/Styles";


type OptionItemProps = {
    title: string;
    icon: string;
    onPress: () => void;
};

const OptionItem = ({ title, icon, onPress }: OptionItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      borderColor: "#7D848D",
      borderWidth: 0.3,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 8,
      justifyContent: "space-between",
      paddingVertical: 15,
      marginHorizontal: 20,
      marginVertical: 10,
      
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10, gap: 10 }}>
      <FontAwesome name={icon} size={20} color="#7D848D" />
      <Text style={[Styles.mdText, { color: "#1B1E28", fontSize: 14, marginLeft: 5 }]}>
        {title}
      </Text>
    </View>
    <FontAwesome name="chevron-right" size={12}  color="#7D848D" />
  </TouchableOpacity>
);

export default OptionItem;
