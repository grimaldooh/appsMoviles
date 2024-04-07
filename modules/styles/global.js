import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import button_icon from "../../Imagenes/home.png";
import button_icon2 from "../../Imagenes/agenda.png";
import button_icon3 from "../../Imagenes/settings.png";
import button_icon4 from "../../Imagenes/calendario.png";

export const colors = {
	primary: '#AE3838',
	secondary: '#2A5D90',
	tertiary: '#3fb76b',
	foreground: '#1B232B',
	background: '#1B232B',
	text: 'grey',
};


export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	text: {
		fontSize: 24,
		color: colors.text,
	},
	footer: {
		position: 'absolute',
		bottom: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '85%',
		height: 50, // puedes ajustar esto a la altura que prefieras
		fontSize: 14,
		color: 'black',
		backgroundColor: "white",
		borderRadius: 30,
		borderColor: 'black',
		borderWidth: 1,
	},
	footerImage: {
		width: 30,
		height: 30,
		padding: 10,
	},
	flatContainer: {
		backgroundColor: colors.primary,
		width: '90%',
		borderRadius: 16,
		marginTop: 20,
		padding: 20
	},
	pokemonContainer: {
		marginVertical: 10,
		alignItems: 'center',
	},
	condition: {
		fontSize: 24,
		color: '#2A5D90',
		backgroundColor: "colors.background",
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	sprite: {
		width: 200,
		height: 200,
		backgroundColor: colors.background,
		borderRadius: 24,
	},
	input: {
		width: '80%',
		height: 40,
		borderColor: colors.text,
		borderBottomWidth: 1,
		marginTop: 20,
		color: colors.text,
	},
	link: {
		color: colors.secondary,
		marginTop: 20,
	},
});

export default function Footer() {
    const navigation = useNavigation();
    return (
        <View style={[globalStyles.footer, { color: "black" }]}>
            <TouchableOpacity style={{ width: 25, height: 28, marginLeft: 18}} onPress={() => navigation.navigate("Iniciar sesión")}>
                <Image source={button_icon4} style={globalStyles.footerImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Iniciar sesión")}>
                <Image source={button_icon} style={globalStyles.footerImage} resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 25, height: 25}} onPress={() => navigation.navigate("Iniciar sesión")}>
                <Image source={button_icon2} style={globalStyles.footerImage} resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 25, height: 25 , marginRight: 18}} onPress={() => navigation.navigate("Iniciar sesión")}>
                <Image source={button_icon3} style={globalStyles.footerImage} resizeMode="contain"/>
            </TouchableOpacity>
        </View>
    );
}
