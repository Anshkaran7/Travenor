import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Platform,
    KeyboardAvoidingView,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome} from "@expo/vector-icons";

import { Styles } from "../../constants/Styles";
import ChatHeader from "../../components/ChatHeader";

const UserChat = () => {
    const navigation = useNavigation();
    const [messageFocus, setMessageFocus] = useState(false);

    const [title, setTitle] = useState("Ansh Karan");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hello!", sender: "user" },
        { text: "Hi there!", sender: "other" },
        { text: "How are you?", sender: "user" },
        { text: "I'm good, thanks!", sender: "other" },
        { text: "I'm good, thanks!", sender: "other" },
        { text: "I'm good, thanks!", sender: "other" },
        

    ]);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const sendMessage = () => {
        if (message.trim() === "") return;
        const newMessage = { text: message, sender: "user" };
        setMessages([...messages, newMessage]);
        setMessage("");
    };

    const flatListRef = useRef<FlatList | null>(null);

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: "white" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ChatHeader title={title} label="Online" />
            <View style={{borderBottomWidth:1, borderBottomColor:'#e0e0e0', marginVertical:6}}></View>
            <View style={{ flex: 1, paddingHorizontal: 16, justifyContent: "flex-end", }}>
                <FlatList
                    ref={flatListRef}
                    showsVerticalScrollIndicator={false}
                    data={messages}
                    renderItem={({ item, index }) => {
                        const isUserMessage = item.sender === "user";
                        const isOtherMessage = item.sender === "other";
                        const isLastMessage = index === messages.length - 1;

                        let showImage = false;

                        if (isOtherMessage) {
                            if (index === messages.length - 1) {
                                showImage = true;
                            } else {
                                const nextMessage = messages[index + 1];
                                if (!nextMessage || nextMessage.sender !== "other") {
                                    showImage = true;
                                }
                            }
                        }

                        const borderRadiusStyle = {
                            borderBottomLeftRadius: isUserMessage ? (index === messages.length - 0 ? 0 : 10) : 0,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: isOtherMessage ? (index === messages.length - 0 ? 0 : 10) : 0,
                        };
                        
                        return (
                            <View style={{ flexDirection: 'row', alignSelf: isUserMessage ? "flex-end" : "flex-start" }}>
                                <View style={{ width: 41 }}>
                                {showImage && (
                                    <Image source={require('../../../assets/images/chat/chat1.png')} style={{ width: 40, height: 40, borderRadius: 20, marginTop: 5, marginRight: 5, alignSelf: isUserMessage ? "flex-end" : "flex-start" }} />
                                )}

                                </View>
                                <View
                                    style={[
                                        {
                                            backgroundColor: isUserMessage ? "#CAEAFF" : "#F7F7F9",
                                            padding: 8,
                                            marginVertical: 8,
                                            maxWidth: "70%",
                                        },
                                        borderRadiusStyle
                                    ]}
                                >
                                    <Text style={{ color: "black" }}>
                                        {item.text}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />

                <View
                    style={{
                        flexDirection: "row",
                        borderColor: messageFocus ? "#0D6EFD" : "#e0e0e0",
                        borderWidth: 1,
                        borderRadius: 10,
                        alignItems: "center",
                        marginBottom: 16,
                    }}
                >
                    <TextInput
                        style={[Styles.mdText, { flex: 1, paddingHorizontal: 14, paddingVertical: 12 }]}
                        placeholder="Type your message..."
                        value={message}
                        onFocus={() => setMessageFocus(true)}
                        onBlur={() => setMessageFocus(false)}
                        onChangeText={(text) => setMessage(text)}
                    />
                    <TouchableOpacity onPress={sendMessage} style={{ width: 40, alignItems: "center" }}>
                        <FontAwesome name="send" size={18} color={'#0D6EFD'} />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default UserChat;
