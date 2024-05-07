import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles, colors} from '../styles/global';
import { loginview } from '../styles/login';
import { useNavigation } from '@react-navigation/native';

export default function RegisterView() {
    const navigation = useNavigation();
    const [validatePassword, setValidatePassword] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        profession: "",  
        address: "",
        name: "",
    });

    function validateRegister(user) {
        if (user.password === validatePassword) {
            //   result= llamada a a la api parametro result
            if (result) {
                navigation.navigate('Home');
            }
            else {
                alert('Usuario o contraseña incorrectos');
            }
        }
        else {
            alert('Las contraseñas no coinciden');
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput style={styles.input} placeholder="Nombre completo" onChangeText={(text) => setUser({ ...user, name: text })}/>
            <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" onChangeText={(text) => setUser({ ...user, email: text })}/>
            <TextInput style={styles.input} placeholder="Profesión" onChangeText={(text) => setUser({ ...user, profession: text })}/>
            <TextInput style={styles.input} placeholder="Dirección" onChangeText={(text) => setUser({ ...user, address: text })}/>
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} onChangeText={(text) => setUser({ ...user, password: text })} />
            <TextInput style={styles.input} placeholder="Confirmar contraseña" secureTextEntry={true} onChangeText={(text) => setValidatePassword(text)}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => validateRegister(user)}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
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