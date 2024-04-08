import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,ScrollView
} from "react-native";
import Footer, { globalStyles, colors, footer } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { homeView } from "../styles/home";
import CitasProximas from "../styles/home";
import { CitasSolicitadasHoy } from "../styles/home";


function SolicitadasView() {
  const navigation = useNavigation();
  return (
    <View style={homeView.container}>
      <View style ={{height:"85%"}}>
      <ScrollView style={{paddingBottom: 50}}>
      
      
      <CitasSolicitadasHoy/>
      </ScrollView>
      </View>

      <Footer />
    </View>
  );
}

export default SolicitadasView;
