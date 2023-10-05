import { Text, View, ScrollView, Image, Pressable, TextInput } from 'react-native';
import { StyleSheet } from "react-native";
import { Styles } from "../../constants/Styles";
import ProfileHeader from '../../components/ProfileHeader';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

type Option = {
    title: string;
    icon: string;
    screen: string;
};

const ProfileScreen = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [data, setData] = useState({
        name: 'Ansh Karan',
        firstName: "Ansh",
        lastName: "Karan",
        location: "Ahmedabad",
        phoneNumber:" 7766005876",
        email: "karan@gmail.com",
    });

    const navigation = useNavigation();



    const handleOptionPress = (screenName: string) => {
        navigation.navigate(screenName as never);
    };
    const handleEditPress = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <ProfileHeader title="Profile" isEditMode={isEditMode} onEditPress={handleEditPress} />
                <View style={styles.main}>
                    <Image style={{ width: 100, height: 100, borderRadius: 100, alignSelf: "center" }} source={require("../../../assets/images/profile.png")} />
                    <Text style={[Styles.mdSemiBold, { color: '#1B1E28', fontSize: 20, alignSelf: "center", marginTop: 15 }]}>
                        {data.name}
                    </Text>
                    <Pressable onPress={() => navigation.navigate('HVGDS' as never)}>
                        <Text style={[Styles.mdText, { color: '#0D6EFD', alignSelf: "center" }]}>
                            Change Profile Photo
                        </Text>
                    </Pressable>
                </View>
                <View style={{ marginHorizontal: 16 }}>
                    <View style={{ marginTop: 6 }}>
                        <Text style={[Styles.mdSemiBold, { fontSize: 16, marginBottom: 5 }]}>First Name</Text>
                        {isEditMode ? (
                            <TextInput
                                style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#0D6EFD', borderRadius: 4, paddingHorizontal: 10, color: '#1B1E28' }]}
                                value={data.firstName}
                                onChangeText={(text) => {
                                    setData({ ...data, firstName: text });
                                }}
                            />
                        ) : (
                            <Text style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#eeeeee', borderRadius: 4, paddingHorizontal: 10, color: '#9e9e9e' }]}>
                                {data.firstName}
                            </Text>
                        )}
                    </View>
                    <View style={{ marginTop: 3 }}>
                        <Text style={[Styles.mdSemiBold, { fontSize: 16, marginBottom: 5 }]}>Last Name</Text>
                        {isEditMode ? (
                            <TextInput
                                style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#0D6EFD', borderRadius: 4, paddingHorizontal: 10, color: '#1B1E28' }]}
                                value={data.lastName}
                                onChangeText={(text) => {
                                    setData({ ...data, lastName: text });
                                }}
                            />
                        ) : (
                            <Text style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#eeeeee', borderRadius: 4, paddingHorizontal: 10, color: '#9e9e9e' }]}>
                                {data.lastName}
                            </Text>
                        )}
                    </View>
                    <View style={{ marginTop: 3 }}>
                        <Text style={[Styles.mdSemiBold, { fontSize: 16, marginBottom: 5 }]}>Location</Text>
                        {isEditMode ? (
                            <TextInput
                                style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#0D6EFD', borderRadius: 4, paddingHorizontal: 10, color: '#1B1E28' }]}
                                value={data.location}
                                onChangeText={(text) => {
                                    setData({ ...data, location: text });
                                }}
                            />
                        ) : (
                            <Text style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#eeeeee', borderRadius: 4, paddingHorizontal: 10, color: '#9e9e9e' }]}>
                                {data.location}
                            </Text>
                        )}
                    </View>

                    <View style={{ marginTop: 3 }}>
                        <Text style={[Styles.mdSemiBold, { fontSize: 16, marginBottom: 5 }]}>Contact Number</Text>
                        {isEditMode ? (
                            <TextInput
                                style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#0D6EFD', borderRadius: 4, paddingHorizontal: 10, color: '#1B1E28' }]}
                                value={"+91" + data.phoneNumber}
                                onChangeText={(text) => {
                                    setData({ ...data, phoneNumber: text });
                                }}
                            />
                        ) : (
                            <Text style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#eeeeee', borderRadius: 4, paddingHorizontal: 10, color: '#9e9e9e' }]}>
                                {"+91" + data.phoneNumber}
                            </Text>
                        )}
                    </View>

                    <View style={{ marginTop: 3 }}>
                        <Text style={[Styles.mdSemiBold, { fontSize: 16, marginBottom: 5 }]}>Email</Text>
                        {isEditMode ? (
                            <TextInput
                                style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#0D6EFD', borderRadius: 4, paddingHorizontal: 10, color: '#1B1E28' }]}
                                value={ data.email}
                                onChangeText={(text) => {
                                    setData({ ...data, email: text });
                                }}
                            />
                        ) : (
                            <Text style={[Styles.mdText, { paddingVertical: 10, borderWidth: 1, borderColor: '#eeeeee', borderRadius: 4, paddingHorizontal: 10, color: '#9e9e9e' }]}>
                                {data.email}
                            </Text>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        flex: 1,
        marginTop: 10,
        backgroundColor: "#ffffff",
    },
    main: {
        paddingHorizontal: 20,
        marginTop: 30,
    }
});
