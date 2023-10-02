import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Bar from '../../components/Bar';
import { Styles } from '../../constants/Styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNextButtonClick = () => {
    if (currentScreen === 3) {
      // Navigate to the Login screen when on the 3rd screen
      navigation.navigate('Login' as never);
    } else {
      setCurrentScreen(currentScreen + 1);
    }
  };
  const screens = [
    {
      image: require('../../../assets/images/image1.png'),
      heading: "Life is short and the\nworld is wide",
      description: "At Friends tours and travel, we customize\nreliable and trustworthy educational tours to destinations all over the world",
      buttonLabel: "Get Started",
      barStyle: "first",
    },
    {
      image: require('../../../assets/images/image2.jpeg'),
      heading: "It’s a big world out there go explore",
      description: "To get the best of your adventure you just need to leave and go where you like. We are waiting for you.",
      buttonLabel: "Next",
      barStyle: "second",
    },
    {
      image: require('../../../assets/images/image3.jpeg'), 
      heading: "People don’t take trips, trips take people",
      description: "To get the best of your adventure you just need to leave and go where you like. We are waiting for you.",
      buttonLabel: "Next", 
      barStyle: "third", 
    },
  ];

  const currentScreenState = screens[currentScreen - 1];
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Login' as never);
  };
  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Image source={currentScreenState.image} style={styles.image} />
        <Text style={[Styles.xlBoldText, styles.heading]}>
          {currentScreenState.heading}
        </Text>
        <Text style={[Styles.smText, styles.description]}>
          {currentScreenState.description}
        </Text>
        <Bar style={currentScreenState.barStyle} />
        <Pressable style={styles.button} onPress={handleNextButtonClick}>
          <Text style={[Styles.mdSemiBold, styles.buttonText]}>
            {currentScreenState.buttonLabel}
          </Text>
        </Pressable>
        <TouchableOpacity onPress={handleClick} style={styles.skip}>
          <Text style={[Styles.mdSemiBold, { color: '#CAEAFF', fontSize: 16 }]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '65%',
    width: '100%',
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  heading: {
    textAlign: 'center',
    color: '#1B1E28',
    fontSize: 22,
    marginTop: 16,
  },
  description: {
    textAlign: 'center',
    color: '#7D848D',
    marginHorizontal: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0D6EFD',
    padding: 13,
    borderRadius: 12,
    marginTop: 20,
    width: '85%',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  skip: {
    position: 'absolute',
    right: 15,
    top: 50,
  },
});

export default Home;
