import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalcView from './CalcView';
import HomeView from './HomeView';
import LoginView from './LoginView';
import RegisterView from './RegisterView';
import HomeUserView from './HomeUserView';
import ProximasView from './ProximasView';
import SolicitadasView from './SolicitadasView';
import SettingsView from './SettingsView';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function MainView() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Iniciar sesión">
				<Stack.Screen
					name="Inicio"
					component={HomeView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
					}}
				/>
				<Stack.Screen
					name="Calculadora"
					component={CalcView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
					}}
				/>
				<Stack.Screen
					name="Iniciar sesión"
					component={LoginView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
						headerBackVisible:false
					}}
				/>
				<Stack.Screen
					name="Registrarse"
					component={RegisterView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
						
					}}
				/>
				<Stack.Screen
					name="Home"
					component={HomeUserView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
					}}
				/>
				{/* <Stack.Screen
					name="Calendario"
					component={CalendarioView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
					}}
				/> */}
				<Stack.Screen
					name="Citas proximas"
					component={ProximasView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
						headerBackVisible:false
					}}
				/>
				<Stack.Screen 
					name="Citas solicitadas"
					component={SolicitadasView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
						headerBackVisible:false
					}}
				/>
				<Stack.Screen 
					name="Ajustes"
					component={SettingsView}
					options={{
						headerStyle: styles.headerStyle,
						headerTitleStyle: styles.headerTitleStyle,
						headerBackVisible:false
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
