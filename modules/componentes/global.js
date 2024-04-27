import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import button_icon from "../../Imagenes/home.png";
import button_icon2 from "../../Imagenes/agenda.png";
import button_icon3 from "../../Imagenes/settings.png";
import button_icon4 from "../../Imagenes/calendario.png";
import button_icon5 from "../../Imagenes/citato.png";
import { globalStyles, colors, footer } from "../styles/global";


export default function Footer() {
    const navigation = useNavigation();
    return (
        <View style={[globalStyles.footer, { color: "black" }]}>
            <TouchableOpacity style={{ width: 25, height: 28, marginLeft: 18}} onPress={() => navigation.navigate("Calendario")}>
                <Image source={button_icon4} style={globalStyles.footerImage} />
            </TouchableOpacity>
			<TouchableOpacity style={{ width: 25, height: 28}} onPress={() => navigation.navigate("Citas solicitadas")}>
                <Image source={button_icon5} style={globalStyles.footerImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={button_icon} style={globalStyles.footerImage} resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 25, height: 25}} onPress={() => navigation.navigate("Citas proximas")}>
                <Image source={button_icon2} style={globalStyles.footerImage} resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 25, height: 25 , marginRight: 18}} onPress={() => navigation.navigate("Ajustes")}>
                <Image source={button_icon3} style={globalStyles.footerImage} resizeMode="contain"/>
            </TouchableOpacity>
        </View>
    );
}

