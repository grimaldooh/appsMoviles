import React from 'react';
import { View, Text } from 'react-native';
import Footer, { globalStyles, colors, footer } from "../styles/global";

import { useNavigation } from '@react-navigation/native';


function SettingsView() {
    const navigation = useNavigation();
    const user = {
        nombre: 'Juan Pérez',
        correo: 'juan.perez@example.com',
        domicilio: 'Calle Falsa 123, Ciudad, País',
        profesion: 'Ingeniero de Software',
      };
    
      return (
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Ajustes</Text>
          <Text style={globalStyles.text}>Nombre: {user.nombre}</Text>
          <Text style={globalStyles.text}>Correo: {user.correo}</Text>
          <Text style={globalStyles.text}>Domicilio: {user.domicilio}</Text>
          <Text style={globalStyles.text}>Profesión: {user.profesion}</Text>
          <Footer />
        </View>
      );
}

export default SettingsView;