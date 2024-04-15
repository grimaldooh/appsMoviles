import { StyleSheet ,View,Text, TouchableOpacity,Image} from 'react-native';
import checkButton from "../../Imagenes/check.png";
import crossButton from "../../Imagenes/cross.png";
import { globalStyles } from "../styles/global";

export const homeView = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
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
    citas:{
        backgroundColor: '#26EAB9',
        padding: 20,
        color: '#1e2935',
        marginTop: 35,
        borderRadius: 30,
        marginTop: 20,
        flexDirection: "row",
        justifyContent : "space-between" 
    },
});
