import { Text, View, ScrollView, Image } from 'react-native';
import { StyleSheet } from "react-native";
import { Styles } from "../../constants/Styles";
import HomeHeader from '../../components/HomeHeader';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileOptions from '../../components/ProfileOptions';
import OptionItem from '../../components/ProfileOptions';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';

type Option = {
    title: string;
    icon: string;
    screen: string;
};

const Profile = () => {
    const navigation = useNavigation();
    const data = {
        name: "Ansh Karan",
        email: "karan@gmail.com",
    }
    const options: Option[] = [
        {
            title: 'Profile',
            icon: 'user-o',
            screen: 'ProfileScreen', 
        },
        {
            title: 'Bookmarked',
            icon: 'bookmark-o',
            screen: 'BookmarkedScreen', 
        },
        {
            title: 'About Us',
            icon: 'info-circle',
            screen: 'AboutUsScreen', 
        },
    ];

    const handleOptionPress = (screenName: string) => {
        navigation.navigate(screenName as never);
    };


    return (
        <View style={styles.container}>
            <ScrollView>
                <Navbar title="Profile" />
                <View style={styles.main}>
                    <Image style={{ width: 100, height: 100, borderRadius: 100, alignSelf: "center" }} source={require("../../../assets/images/profile.png")} />
                    <Text style={[Styles.mdSemiBold, { color: '#1B1E28', fontSize: 18, alignSelf: "center", marginTop: 15 }]}>
                        {data.name}
                    </Text>
                    <Text style={[Styles.smText, { color: '#7D848D', alignSelf: "center" }]}>
                        {data.email}
                    </Text>
                </View>

                <View style={{marginTop: 20,}}>
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            title={option.title}
                            icon={option.icon}
                            onPress={() => handleOptionPress(option.screen)}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

export default Profile;

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
