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
  return (
    <View style={homeView.container}>
      <View style ={{height:"90%", width: "85%"}}>
      <ScrollView style={{paddingBottom: 50}} showsVerticalScrollIndicator={false}>
      <Text style={globalStyles.title}>Citas proximas{" "}</Text>
      <CitasProximas/>
      <Text style={globalStyles.title}>Citas solicitadas hoy{" "}</Text>
      <CitasSolicitadasHoy/>
      </ScrollView>
      </View>

      <Footer />
    </View>
  );
}

export default HomeUserView;
