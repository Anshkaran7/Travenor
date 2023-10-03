import React, { useState } from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Styles } from '../../constants/Styles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';

const Register = () => {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const [isNameFocused, setIsNameFocused] = useState(false);

    const handleNameFocus = () => {
        setIsNameFocused(true);
    }

    const handleNameBlur = () => {
        setIsNameFocused(false);
    }

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    };

    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
    };


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const inputNameBorderStyle = isNameFocused
        ? { borderWidth: 1, borderColor: '#0D6EFD' }
        : { borderWidth: 0 };


    const inputEmailBorderStyle = isEmailFocused
        ? { borderWidth: 1, borderColor: '#0D6EFD' }
        : { borderWidth: 0 };

    const inputPasswordBorderStyle = isPasswordFocused
        ? { borderWidth: 1, borderColor: '#0D6EFD' }
        : { borderWidth: 0 };

    const handleTouchablePress = () => {
        // Handle blur when the overlay is pressed
        Keyboard.dismiss();
        setIsEmailFocused(false);
        setIsPasswordFocused(false);
    };
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate('Login' as never)
    }
    return (
        <KeyboardAvoidingView
            style={{flex:1  }}
        >
            <Navbar title=''/>
            <ScrollView contentContainerStyle={{paddingTop:60, backgroundColor: 'white' , height:'100%'}} >
                <TouchableWithoutFeedback onPress={handleTouchablePress}>

                    <View style={{  }}>
                        <View style={{  alignItems: 'center' }}>

                            <Text style={[Styles.mdBoldText, { color: '#1B1E28', fontSize: 24 }]}>Sign up now</Text>
                            <Text style={[Styles.mdText, { color: '#7D848D' }]}>Please fill the details and create account</Text>


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
                                        ...inputNameBorderStyle,
                                    },
                                ]}
                                placeholder="Name"
                                onFocus={handleNameFocus}
                                onBlur={handleNameBlur}
                            />
                            <TextInput
                                style={[
                                    Styles.mdText,
                                    {
                                        backgroundColor: '#F7F7F9',
                                        width: 300,
                                        marginTop: 20,
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
                            <View style={{
                                flexDirection: 'row', width: 300, marginTop: 20,
                                backgroundColor: '#F7F7F9',
                                paddingVertical: 10,
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                ...inputPasswordBorderStyle,

                            }}
                            >
                                <TextInput
                                    placeholder="Password"
                                    onFocus={handlePasswordFocus}
                                    onBlur={handlePasswordBlur}
                                    style={[Styles.mdText, { width: 250 }]}
                                    secureTextEntry={!isPasswordVisible}
                                />
                                <TouchableOpacity onPress={togglePasswordVisibility}>
                                    <FontAwesome name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="#7D848D" />
                                </TouchableOpacity>
                            </View>
                            <Text style={[Styles.smText, { color: '#7D848D', marginTop: 10, textAlign: 'left', width: 300 }]}>Password must be 8 character</Text>
                            <TouchableOpacity style={{
                                backgroundColor: '#0D6EFD',
                                width: 300,
                                marginTop: 20,
                                paddingVertical: 10,
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={[Styles.mdBoldText, { color: 'white' }]}>Sign Up</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Text style={[Styles.mdText, { color: '#7D848D' }]}>Already have an account?</Text>
                                <TouchableOpacity onPress={handleRegister}>
                                    <Text style={[Styles.mdSemiBold, { color: '#0D6EFD' }]}> Sign in</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={[Styles.mdText, { color: '#7D848D', marginTop: 10 }]}>Or sign up with</Text>

                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 4, flexDirection: 'column', marginTop: 20 }}>

                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    backgroundColor: 'white',
                                    borderColor: '#4285F4',
                                    borderWidth: 1,
                                    width: 300,
                                    
                                    marginBottom: 20,
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 10,

                                }}>

                                    <Image source={require('../../../assets/images/google.png')} style={{ width: 20, height: 20 }} />

                                    <Text style={[Styles.mdBoldText, { color: '#4285F4' }]}>Sign up with Google</Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../../assets/images/facebook.png')} style={{ width: 40, height: 40 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('../../../assets/images/twitter.png')} style={{ width: 40, height: 40 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('../../../assets/images/insta.png')} style={{ width: 40, height: 40 }} />
                                    </TouchableOpacity>

                                </View>
                            </View>


                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export default Register;
