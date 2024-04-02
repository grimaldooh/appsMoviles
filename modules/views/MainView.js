import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalcView from './CalcView';
import HomeView from './HomeView';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function MainView() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Inicio">
				<Stack.Screen
					name="Inicio"
					component={HomeView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={CalcView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	headerStyle: {
		backgroundColor: '#26EAB9',
	},
	headerTitleStyle: {
		fontSize: 24,
		color: '#1e2935',
	},
});

export default MainView;
