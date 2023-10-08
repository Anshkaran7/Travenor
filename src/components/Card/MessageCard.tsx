import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../../constants/Styles";
import { useNavigation } from "@react-navigation/native";

interface MessageCardProps {
  data: {
    id: number;
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    status: string;
    message_Read: boolean;
  };
  onDelete: () => void;
  onSelect: (id: number) => void;
  isSelected: boolean;
}

export const MessageCard = ({ data, onDelete, onSelect, isSelected }: MessageCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const statusTextStyle = {
    color: data.status === 'online' ? 'green' : '#7D848D',
    fontSize: 10,
  };

  const messageIcon =
    data.status === 'online' && data.message_Read ? (
      <MaterialIcons name="done-all" size={20} color="#19B000" />
    ) : data.status === 'online' ? (
      <MaterialIcons name="done-all" size={20} color="#7D848D" />
    ) : (
      <MaterialIcons name="check" size={20} color="#7D848D" />
    );

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
    onSelect(data.id);
  };

  const navigation = useNavigation();

  const handleChat = () => {
    navigation.navigate("Chat" as never);
  };

  return (
    <TouchableOpacity onPress={handleChat} style={{ flexDirection: 'row', alignItems: 'center', width: '87%', gap: 34, marginHorizontal: 20, padding: 6 }}>
      <View style={{ width: 14 }}>
        <Image
          source={require("../../../assets/images/chat/chat1.png")}
          style={{ width: 50, height: 50, borderRadius: 100, opacity: isSelected ? 0.5 : 1 }}
        />
        {isSelected ? (
          <TouchableOpacity style={{ position: 'absolute', top: 18, left: 16 }} onPress={handleCheckboxToggle}>

            <View style={{ width: 18, height: 18, borderColor: '#1B1E28', borderWidth: 1, borderRadius: 4 }}>
              {isChecked ? (
                <MaterialIcons name="check" size={16} color="#1B1E28" />
              ) :
                null
              }
            </View>
          </TouchableOpacity>
        ) : (
          null
        )}
      </View>
      <View style={{ marginLeft: 10, flex: 1, marginTop: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={[Styles.mdSemiBold, {}]}>{data.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            {messageIcon}
            <Text style={[Styles.smText, { color: "#7D848D" }]}>{data.lastMessageTime}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[Styles.smText, { color: "#7D848D" }]}>{data.lastMessage}</Text>
          <Text style={[Styles.smText, statusTextStyle]}>{data.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
