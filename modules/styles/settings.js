import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';



export const settingsStyle = StyleSheet.create({
	container: {
		flex: 1,
		
		justifyContent : "flex-start",
		backgroundColor: 'white',
	},
    userContainer: {
        backgroundColor: "white",
        width: '90%',
        borderRadius: 16,
        marginTop: 20,
        padding: 20
    },
    title :{
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    },
    userInformation:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      citasModalView: {
        margin: 35,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 5,
        marginTop: "22%",
        shadowColor: "#000",
        marginBottom: "35%",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Esto crea un fondo negro semi-transparente
      },
      citasOverlay: {

      },
      input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius : 20,
        
      },
	
});

