import { Image, View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../../constants/Styles";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

interface BestDestinationCardProps {
    data: {
        title: string;
        rating: number;
        location: string;
        peoples: number;
    };
}

const BestDestinationCard = ({ data }: BestDestinationCardProps) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };


    return (
        <View style={[Styles.shadow, { backgroundColor: 'white', padding: 12, borderRadius: 20, marginTop: 30, marginLeft: 4, marginRight: 4, marginBottom: 10 }]}>
            <Image source={require('../../../assets/images/destination/home1.jpeg')} style={{ width: 240, height: 280, borderRadius: 20 }} />

            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={[Styles.mdSemiBold, { color: '#1B1E28', fontSize: 16, marginTop: 10 }]}>
                            {data.title}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="star" size={20} color="#FFD336" style={{ marginTop: 5 }} />
                        <Text style={[Styles.mdSemiBold, { color: '#1B1E28', fontSize: 16, marginTop: 10 }]}>
                            {data.rating}
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="location-pin" size={18} color="#7D848D" style={{ marginTop: 5 }} />
                        <Text style={[Styles.mdText, { color: '#7D848D', marginTop: 10 }]}>
                            {data.location}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20, marginLeft: 35 }}>
                        <Image source={require('../../../assets/images/destination/men3.png')} style={{
                            width: 28, height: 28, borderRadius: 100,
                            position: 'absolute',
                            left: 38,
                        }} />
                        <Image source={require('../../../assets/images/destination/men2.png')} style={{
                            width: 28, height: 28, borderRadius: 100,
                            position: 'absolute',
                            left: 56,
                        }} />
                        <Image source={require('../../../assets/images/destination/men1.png')} style={{
                            width: 28, height: 28, borderRadius: 100,
                            position: 'absolute',
                            left: 72,
                        }} />
                        <Text style={[Styles.smText, { left: 90, backgroundColor: '#E5F4FF', padding: 3, paddingVertical: 5, borderRadius: 100, position: 'absolute' }]} >+{data.peoples}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={toggleBookmark}
                style={{
                    position: 'absolute',
                    right: 20,
                    top: 16,
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                    borderRadius: 100,
                }}
            >

                {/* Semi-transparent background */}
                <View style={{
                    backgroundColor: "rgba(27, 30, 40, 0.2)", // 50% opacity
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 100,
                }} />
                {isBookmarked ? (
                    <FontAwesome name="bookmark" size={20} color="#19B000" style={{ marginTop: 5 }} />
                ) : (
                    <FontAwesome name="bookmark-o" size={20} color="#fff" style={{ marginTop: 5 }} />
                )}

            </TouchableOpacity>
        </View>
    );
}

export default BestDestinationCard;
