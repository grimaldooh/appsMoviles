import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import button_icon from '../../Imagenes/FastBooking.jpeg';

function HomeView() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Iniciar sesión')}>
            <Image source={button_icon} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
    },
    image: {
        width: '100%', // o puedes usar un valor fijo como 300
        height: '100%', // o puedes usar un valor fijo como 300
    },
    text:{
        fontSize: 24,
        textAlign: 'center',
        color: '#d8d3c5'
    },
});
export default HomeView;
