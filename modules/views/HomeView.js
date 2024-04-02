import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import button_icon from '../../Imagenes/FastBooking.jpeg';

function HomeView() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				{"Bienvenido a Fast Booking "}
			</Text>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Image source={button_icon} style={styles.image} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#1e2935',
	},
	image: {
		width: 250,
		height: 250,
		resizeMode: 'contain',
	},
	text:{
		fontSize: 24,
		textAlign: 'center',
		color: '#d8d3c5'
	},
});

export default HomeView;
