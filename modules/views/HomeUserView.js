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
 


function HomeUserView() {
  const navigation = useNavigation();

  const [citasSolicitadasHoy, setCitasSolicitadasHoy] = useState([
    {
      nombre: "Bart Simpson",
      fecha: "hoy : 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 1,
      state: "",
    },
    {
      nombre: "Lionel Messi",
      fecha: "hoy : 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 2,
      state: "",
    },
    {
      nombre: "CR7",
      fecha: "mañana : 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
      id: 3,
      state: "",
    },
    {
      nombre: "Elon Musk",
      fecha: "14,4,24 11:00 a.m",
      image: require("../../Imagenes/foto.png"),
      id: 4,
      state: "",
    },
  ]);

  const [citasProximas, setCitasProximas] = useState([
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
      <View style ={{height:"90%", width: "85%"}}>
      <ScrollView style={{paddingBottom: 50}} showsVerticalScrollIndicator={false}>
      <Text style={globalStyles.title}>Citas proximas{" "}</Text>
      <CitasProximas citas={citasProximas} setCitasProximas={setCitasProximas}/>
      

      <Text style={globalStyles.title}>Citas solicitadas hoy{" "}</Text>
      <CitasSolicitadasHoy citas={citasSolicitadasHoy} setCitasSolicitadasHoy={setCitasSolicitadasHoy}/>
      
      </ScrollView>
      </View>

      <Footer />
    </View>
  );
}

export default HomeUserView;