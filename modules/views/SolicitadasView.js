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
import { CitasSolicitadasHoy } from "../componentes/solicitadas";


function SolicitadasView() {
  const navigation = useNavigation();

  const [citas, setCitasSolicitadasHoy] = useState([
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
  return (
    <View style={homeView.container}>
      <View style ={{height:"85%"}}>
      <ScrollView style={{paddingBottom: 50}}>
      
      
      <CitasSolicitadasHoy citas={citas} setCitasSolicitadasHoy={setCitasSolicitadasHoy}/>
      </ScrollView>
      </View>

      <Footer />
    </View>
  );
}

export default SolicitadasView;
