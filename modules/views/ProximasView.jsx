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
  return (
    <View style={homeView.container}>
      <View style ={{height:"90%", width :"80%"}}>
      <ScrollView style={{paddingBottom: 50}} showsVerticalScrollIndicator={false}>
      
      <CitasProximas/>
       
      </ScrollView>
      </View>

      <Footer />
    </View>
  );
}

export default ProximasView;
