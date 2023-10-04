import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import HomeHeader from "../../components/HomeHeader";
import { Styles } from "../../constants/Styles";
import BestDestinationCard from "../../components/Card/BestDestinationCard";


const data = [
    {
        id: 1,
        title: 'Bali, Indonesia',
        rating: 4.8,
        location: 'Indonesia',
        peoples: 30,
    },
    {
        id: 2,
        title: 'Himachal, India',
        rating: 4.9,
        location: 'India',
        peoples: 30,
    }
]

const MainHome = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <HomeHeader />
            <View style={styles.main}>
                <Text style={[Styles.xlText, { color: '#1B1E28', fontSize: 30 }]}>
                    Explore the {'\n'}
                    Beautiful <Text style={{ color: '#FF7029' }}>world!</Text>
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                    <Text style={[Styles.mdSemiBold, { color: '#1B1E28', fontSize: 16, marginTop: 10 }]}>
                        Best Destination
                    </Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Text style={[Styles.mdSemiBold, { color: '#0D6EFD', fontSize: 16 }]}>view all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal >
                    {data.map((item, key) => (
                        <View key={key} style={{ marginRight:10 }}>
                            <BestDestinationCard key={item.id} data={item} />
                        </View>
                    ))}
                </ScrollView>
                
            </View>
        </ScrollView>
        </View>
    );
};

export default MainHome;

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
