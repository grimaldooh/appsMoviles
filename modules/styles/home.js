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

export default function CitasProximas() {
    const citas = [
        { nombre: 'Angel Grimaldo', fecha: 'hoy : 10:45 a.m' },
        { nombre: 'Azael Hernandez', fecha: 'hoy : 12:30 p.m' },
        { nombre: 'Tilin Gonzalez', fecha: 'mañana : 4:30 p.m' },
        { nombre: 'Elon Musk', fecha: '14,4,24' },
    ];

    return (
        <View style={{ borderRadius: 15}}>
            {citas.map((cita, index) => (
                <View key={index} style={[homeView.citas, { borderRadius: 25 }]}>
                    <Text>{cita.nombre} , {cita.fecha}</Text>
                </View>
            ))}
        </View>
    );
}

export function CitasSolicitadasHoy(){
    
    const citas = [
        { nombre: 'Bart Simpson', fecha: 'hoy : 10:45 a.m' },
        { nombre: 'Lionel Messi', fecha: 'hoy : 12:30 p.m' },
        { nombre: 'CR7', fecha: 'mañana : 4:30 p.m' },
        { nombre: 'Elon Musk', fecha: '14,4,24 11:00 a.m' },
    ];


    return (
        <View style={{ borderRadius: 15 }}>
            {citas.map((cita, index) => (
                <View key={index} style={[homeView.citas, { borderRadius: 25 , borderWidth: 5, backgroundColor: "lightpink"}]}>
                    <Text>{cita.nombre} , {cita.fecha}</Text>
                    <TouchableOpacity style={{ width: 25, height: 28, marginLeft: 18}} onPress={() => navigation.navigate("Iniciar sesión")}>
                        <Image source={checkButton} style={globalStyles.footerImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 25, height: 28, marginLeft: 18}} onPress={() => navigation.navigate("Iniciar sesión")}>
                        <Image source={crossButton} style={globalStyles.footerImage} />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}