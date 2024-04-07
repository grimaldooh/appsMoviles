import { StyleSheet } from 'react-native';


export const loginview = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 45,
        backgroundColor: '#f7f7f7',
    },
    image: {
        width: '100%', 
        height: '100%',
    },
    text:{
        fontSize: 14,
        textAlign: 'left',
        color: 'grey'
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        height: 70,
       flexDirection: 'row',
        width: '100%',
    },
    loginButton:{
        backgroundColor: '#26EAB9',
        padding: 20,
        color: '#1e2935',
        marginTop: 35,
        borderRadius: 10,
        
    },
});