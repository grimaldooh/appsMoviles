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
 


function CalendarioView() {
  const navigation = useNavigation();
  return (
    <View style={homeView.container}>

      <Calendario/>
      

      <Footer />
    </View>
  );
}

export default CalendarioView;
