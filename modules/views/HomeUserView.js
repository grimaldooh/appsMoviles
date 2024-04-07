import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import Footer, { globalStyles, colors , footer} from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { loginview } from "../styles/login";


function HomeUserView() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Footer />
    </View>
  );
}

export default HomeUserView;
