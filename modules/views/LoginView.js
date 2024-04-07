import React from 'react';
import { View, Text, TextInput,Button, TouchableOpacity } from 'react-native';
import { globalStyles, colors} from '../styles/global';
import { loginview } from '../styles/login';
import { useNavigation } from '@react-navigation/native';

function LoginView() {
    const navigation = useNavigation();
    return (
        
        <View style={loginview.container}>
            <TextInput
                style={globalStyles.input}
                placeholder="Correo electrónico"
                placeholderTextColor={colors.text}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Contraseña"
                placeholderTextColor={colors.text}
                secureTextEntry
            />
            <TouchableOpacity style={[loginview.loginButton, { borderRadius: 25 }]}>
                <Text onPress={() => navigation.navigate('Home')}>Iniciar sesión</Text>
            </TouchableOpacity>
            
            
            <View style={[loginview.footer, { alignItems: 'flex-start', justifyContent: 'center' , fontSize: 6,}]}>
                <Text style={loginview.text}> ¿No tienes una cuenta aún? </Text>
                <TouchableOpacity>
                    <Text style={[loginview.text,{color : '#AE3838', textDecorationLine : 'underline'}]} onPress={() => navigation.navigate('Registrarse')}> Haz click aqui </Text>
                </TouchableOpacity>
            </View>

            
        </View>
         
        
    );

   
}

export default LoginView;

