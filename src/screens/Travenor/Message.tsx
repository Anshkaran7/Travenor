import { ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Navbar from "../../components/Navbar";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../../constants/Styles";
import { TextInput } from "react-native-gesture-handler";
import data from '../../components/json/chats.json'
import { useState } from "react";
import { MessageCard } from "../../components/Card/MessageCard";



const Message = () => {
  const [isSelected, setIsSelected] = useState(false);

  const showToast = () => {
    ToastAndroid.show('Chat deleted', ToastAndroid.SHORT);
  };
  const toggleSelection = () => {
    setIsSelected(!isSelected);

    if (isSelected) {
      showToast();
    }
  };

  return (
   
    <View style={{ backgroundColor: 'white', height: '100%', flex: 1 }}>
      <Navbar title="Message" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
        <Text style={[Styles.mdSemiBold, { color: "#1B1E28", fontSize: 16 }]}>Messages</Text>
        <TouchableOpacity onPress={toggleSelection}>
          <FontAwesome
            name={isSelected ? "trash" : "pencil-square-o"} 
            size={24}
            color={isSelected ? "red" : "#1B1E28"} 
          />
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 12, marginHorizontal: 20, marginTop: 20, padding: 10, flexDirection: 'row', gap: 10 }}>
        <MaterialIcons name="search" size={24} color="#7D848D" />
        <TextInput placeholder="Search for chats & messages" style={[Styles.mdText, { color: "#1B1E28", width: "80%" }]} />
      </View>
      <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ marginTop: 16 }}>

        {data.map((item, index) => {
          return (
            <View style={{ marginBottom: 9 }}>
            <MessageCard
              data={item}
              isSelected={isSelected} 
              key={index}
              onDelete={() => {}}
              onSelect={() => {}}
            />
            </View>
          );
        })}
      </View>

     
    </ScrollView>
    </View>
  );
}

export default Message;