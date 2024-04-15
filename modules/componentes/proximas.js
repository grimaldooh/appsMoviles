import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Divider, NativeBaseProvider, Heading } from "native-base";
import checkButton from "../../Imagenes/check.png";
import crossButton from "../../Imagenes/cross.png";
import { globalStyles } from "../styles/global";
import { homeView } from "../styles/home";
import { citaGestor } from "../styles/global";
import button_icon5 from "../../Imagenes/change.png";

export function CitasProximas() {
  const citas = [
    {
      nombre: "Angel Grimaldo ",
      fecha: "Hoy : 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Azael Espergencia",
      fecha: "Hoy : 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Tilin Gonzalez",
      fecha: "Mañana : 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Elon Musk",
      fecha: "14,4,24 : 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Gabriel Huicochea",
      fecha: "Hoy : 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Azael Hernandez",
      fecha: "Hoy : 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Tilin Gonzalez",
      fecha: "Mañana : 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Elon Musk",
      fecha: "14,4,24 : 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
    },
  ];

  return (
    <NativeBaseProvider>
      <View style={[{ marginTop: 10, marginBottom: 50 }]}>
        {citas.map((cita, index) => (
          <View
            key={index}
            style={[
              {
                borderRadius: 20,
                padding: 10,
                borderWidth: 1,
                borderColor: "black",
                flexDirection: "row",
                marginTop: 35,
              },
            ]}
          >
            <Image
              source={cita.image}
              style={{ width: 90, height: 90, borderRadius: 25 }}
            />
            <Divider bg="black" thickness="1" mx="2" orientation="vertical" />
            <View style={[citaGestor.citasContainer, { borderRadius: 25 }]}>
              <View style={[{ flexDirection: "column" }]}>
                <View style={citaGestor.citasTop}>
                  <Heading size="md">{cita.nombre}</Heading>
                </View>

                <View style={citaGestor.citas}>
                  <Text>{cita.fecha}</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                flex: 1,
                marginRight: 5,
                width: 20,
                alignItems: "center", 
                position: "absolute", 
                right: "3%",
                bottom: "50%"
              }}
            >
              <TouchableOpacity>
                <Image source={button_icon5} style={globalStyles.footerImage} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </NativeBaseProvider>
  );
}


export function Aligner() {
    return(
    <View>
      <Text style={{color :"#f8f4f4"}}>No quitar este texto...yo se que esto esta muy mal, perdoname dios {" "}</Text>
      </View>
    );
}




