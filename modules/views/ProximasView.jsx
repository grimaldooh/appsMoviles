import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,ScrollView
} from "react-native";
import { globalStyles, colors, footer ,citaGestor} from "../styles/global";
import Footer from "../componentes/global";
import { useNavigation } from "@react-navigation/native";
import { homeView } from "../styles/home";
import {CitasProximas, Aligner} from "../componentes/proximas";
import {CitasSolicitadasHoy} from "../componentes/solicitadas";



function ProximasView() {
  const navigation = useNavigation();

  const [citas, setCitasProximas] = useState([
    {
      nombre: "Angel Grimaldo ",
      fecha: "Hoy : 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 1,
    },
    {
      nombre: "Azael Espergencia",
      fecha: "Hoy : 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 2,
    },
    {
      nombre: "Tilin Gonzalez",
      fecha: "Mañana : 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 3,
    },
    {
      nombre: "Elon Musk",
      fecha: "14,4,24 : 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 4,
    },
    {
      nombre: "Gabriel Huicochea",
      fecha: "Hoy : 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 5,
    },
    {
      nombre: "Azael Hernandez",
      fecha: "Hoy : 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 6,
    },
    {
      nombre: "Tilin Gonzalez",
      fecha: "Mañana : 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 7,
    },
    {
      nombre: "Elon Musk",
      fecha: "14,4,24 : 10:30 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 8,
    },
  ]);

  return (
    <View style={homeView.container}>
      <View style ={{height:"90%", width :"80%"}}>
      <ScrollView style={{paddingBottom: 50}} showsVerticalScrollIndicator={false}>
      
      <CitasProximas citas={citas} setCitasProximas={setCitasProximas} />       
      </ScrollView>
      </View>

      <Footer />
    </View>
  );
}

export default ProximasView;
