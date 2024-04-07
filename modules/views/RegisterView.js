import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles, colors} from '../styles/global';
import { loginview } from '../styles/login';
import { useNavigation } from '@react-navigation/native';

export default function RegisterView() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput style={styles.input} placeholder="Nombre completo" />
            <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Profesión" />
            <TextInput style={styles.input} placeholder="Dirección" />
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#26EAB9',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});