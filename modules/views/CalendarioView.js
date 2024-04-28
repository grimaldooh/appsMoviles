import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,ScrollView
} from "react-native";
import { globalStyles, colors, footer } from "../styles/global";
import Footer from "../componentes/global";
import { useNavigation } from "@react-navigation/native";
import { homeView } from "../styles/home";
import {CitasProximas} from "../componentes/proximas";
import {CitasSolicitadasHoy} from "../componentes/solicitadas";
import Calendario from "../componentes/calendario";
import {CitasCalendario} from "../componentes/citasCalendario";
 


function CalendarioView() {
  const navigation = useNavigation();

  const [citas, setCitasProximas] = useState([
    {
      nombre: "Angel Grimaldo ",
      fecha: "2024-04-14, 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 1,
    },
    //fechas aleatorias dentro del mismo mes
    {
      nombre: "Azael Espergencia",
      fecha: "2024-04-14, 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 2,
    },
    {
      nombre: "Tilin Hernandez",
      fecha: "2024-04-15, 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 3,
    },
    {
      nombre: "Elon Musk",
      fecha: "2024-04-24, 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 4,
    },
    {
      nombre: "Gabriel Huicochea",
      fecha: "2024-04-14, 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 5,
    },
    {
      nombre: "Azael Hernandez",
      fecha: "2024-04-14, 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 6,
    },
    {
      nombre: "Tilin Gonzalez",
      fecha: "2024-04-15, 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 7,
    },
    {
      nombre: "Elon Musk",
      fecha: "2024-03-24, 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 8,
    },
    {
      nombre: "Gabriel Huicochea",
      fecha: "2024-06-14, 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 9,
    },
    {
      nombre: "Azael Hernandez",
      fecha: "2024-05-14, 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 10,
    },
    {
      nombre: "Tilin Gonzalez",
      fecha: "2024-04-03, 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 11,
    },
    {
      nombre: "Elon Musk",
      fecha: "2024-04-01, 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 12,
    },
    //fechas dentro de marzo
    {
      nombre: "Gabriel Huicochea",
      fecha: "2024-03-14, 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 13,
    },
    {
      nombre: "Azael Hernandez",
      fecha: "2024-03-14, 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 14,
    },
    {
      nombre: "Tilin Gonzalez",
      fecha: "2024-03-15, 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 15,
    },
    {
      nombre: "Elon Musk",
      fecha: "2024-03-24, 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 16,
    },
    {
      nombre: "Gabriel Huicochea",
      fecha: "2024-03-14, 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 17,
    },
    {
      nombre: "Azael Hernandez",
      fecha: "2024-05-11, 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 18,
    },
    {
      nombre: "Tilin Gonzalez",
      fecha: "2024-05-16, 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 19,
    },
    {
      nombre: "Elon Musk",
      fecha: "2024-05-03, 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 20,
    },
    
   
    
  ]);
  
  return (
    <View style={homeView.container}>

      <Calendario citas={citas} setCitasProximas={setCitasProximas} />
      

      <Footer />
    </View>
  );
}

export default CalendarioView;
