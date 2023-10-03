
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Modal } from 'react-native';
import { Styles } from '../../constants/Styles';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';
import { FontAwesome } from '@expo/vector-icons';
import OtpScreen from './OtpScreen';

const ForgotPassword = () => {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
        // Simulate OTP sent after 5 seconds
        setTimeout(() => {
          setIsModalVisible(false);
          setOtpSent(true);
        }, 5000); // Adjust the delay time as needed
      };
    
      const navigateToOtpScreen = () => {
        navigation.navigate('OtpScreen' as never); // Replace 'OtpScreen' with your actual screen name
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

                            <Text style={[Styles.mdBoldText, { color: '#1B1E28', fontSize: 24 }]}>Forgot Password</Text>
                            <Text style={[Styles.mdText, { color: '#7D848D', width: 250, textAlign: 'center' }]}>Enter your email account to reset  your password</Text>

                            <TextInput
                                style={[
                                    Styles.mdText,
                                    {
                                        backgroundColor: '#F7F7F9',
                                        width: 300,
                                        marginTop: 30,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        ...inputEmailBorderStyle,
                                    },
                                ]}
                                placeholder="Email"
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                            />

                            <TouchableOpacity
                                onPress={showModal}
                                style={{
                                    backgroundColor: '#0D6EFD',
                                    width: 300,
                                    marginTop: 30,
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text style={[Styles.mdBoldText, { color: 'white' }]}>Reset Password</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={isModalVisible}
                               
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: 'white',
                                            padding: 20,
                                            borderRadius: 10,
                                            width: 300,
                                            alignItems: 'center',
                                        }}
                                    >
                                       <FontAwesome name="paper-plane" size={20} color="#0D6EFD" />
                                        <Text style={[Styles.mdSemiBold, {marginTop:8, color:"#1B1E28"}]}>Check your email</Text>
                                        <Text style={[Styles.smText,{color:"#7D848D", textAlign:'center'}]}>We have send password recovery instruction to your email </Text>
                                      
                                    </View>
                                </View>
                            </Modal>
                            {otpSent && navigateToOtpScreen()}


                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export default ForgotPassword;
