import React, { useState } from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Modal } from 'react-native';
import { Styles } from '../../constants/Styles';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';
import { FontAwesome } from '@expo/vector-icons';


const data = {
    userEmail: 'karan@gmail.com'
}

const OtpScreen = () => {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    };




    const inputEmailBorderStyle = isEmailFocused
        ? { borderWidth: 1, borderColor: '#0D6EFD' }
        : { borderWidth: 0 };


    const handleTouchablePress = () => {

        Keyboard.dismiss();
        setIsEmailFocused(false);

    };

    const navigation = useNavigation();
    const handleSignUp = () => {
        navigation.navigate('Register' as never)
    };


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}

        >
            <Navbar title='' />
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 40, backgroundColor: 'white' }} >
                <TouchableWithoutFeedback onPress={handleTouchablePress}>

                    <View style={{}}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                            <Text style={[Styles.mdBoldText, { color: '#1B1E28', fontSize: 24 }]}>OTP Verification</Text>
                            <Text style={[Styles.mdText, { color: '#7D848D', width: 300, textAlign: 'center' }]}>Please check your email {data.userEmail} to see the verification code</Text>

                            <TextInput
                                style={[
                                    Styles.mdText,
                                    {
                                        width: 300,
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: '#F3F4F6',
                                        paddingLeft: 20,
                                        marginTop: 30,
                                        ...inputEmailBorderStyle,
                                    },
                                ]}
                                placeholder="Enter OTP"
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                                keyboardType="email-address"
                            />

                            <TouchableOpacity
                                onPress={() => setIsModalVisible(true)}
                                style={{
                                    backgroundColor: '#0D6EFD',
                                    width: 300,
                                    height: 50,
                                    borderRadius: 10,
                                    marginTop: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={[Styles.mdText, { color: 'white' }]}>Verify</Text>
                            </TouchableOpacity>

                           <Text style={[Styles.mdText, { color: '#7D848D', width: 300, textAlign: 'center', marginTop: 30 }]}>Didn't receive the code? <Text style={[Styles.mdText, { color: '#0D6EFD', width: 300, textAlign: 'center', marginTop: 30 }]}>Resend</Text></Text>



                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export default OtpScreen;
