import React from 'react';
import { Pressable, Text, View, StyleSheet } from "react-native";

export default function Button({ label, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable 
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.pressedButton : styles.notPressedButton
                ]}
                onPress={onPress}
            >
                {({ pressed }) => (
                    <Text style={[styles.buttonText, { color: pressed ? '#FF0000' : 'white' }]}>{label}</Text>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    button: {
        borderRadius: 16,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notPressedButton: {
        backgroundColor: '#FF0000', // Assuming this is the color for 'bg-theme-red'
    },
    pressedButton: {
        backgroundColor: 'transparent',
        borderColor: '#FF0000', // Assuming this is the color for 'border-theme-red'
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});