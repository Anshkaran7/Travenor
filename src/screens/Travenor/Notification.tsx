import { Text, View, TouchableOpacity, Image } from 'react-native';
import NotificationHeader from "../../components/NotificationHeader";
import { Styles } from '../../constants/Styles';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

const Notification = () => {
    const navigation = useNavigation();

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            name: "Ansh Karan",
            notificationMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            notificationTime: "10:00 AM",
        }, {
            id: 2,
            name: "Ansh Karan",
            notificationMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            notificationTime: "10:00 AM",
        },
        {
            id: 3,
            name: "Ansh Karan",
            notificationMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            notificationTime: "10:00 AM",
        }
    ]);

    const clearAllNotifications = () => {
        setNotifications([]);
    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%', flex: 1 }}>
            <NotificationHeader title="Notification" clearAllNotifications={clearAllNotifications} />

            {notifications.map((item) => (
                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', width: '95%', gap: 34, marginBottom: 10, marginHorizontal: 10, padding: 6,  }}> 
                                   <View style={{ width: 14 }}>
                        <Image
                            source={require("../../../assets/images/chat/chat1.png")}
                            style={{ width: 40, height: 40, borderRadius: 100, }}
                        />
                    </View>

                    <View style={{ marginLeft: 4, flex: 1, marginTop: 2 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[Styles.mdSemiBold, {}]}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={[Styles.smText, { color: "#7D848D" }]}>{item.notificationTime}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[Styles.smText, { color: "#7D848D" }]}>{item.notificationMessage}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

export default Notification;
