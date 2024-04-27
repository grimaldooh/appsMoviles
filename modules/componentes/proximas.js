import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Divider, NativeBaseProvider, Heading } from "native-base";
import checkButton from "../../Imagenes/check.png";
import crossButton from "../../Imagenes/cross.png";
import { globalStyles } from "../styles/global";
import { homeView } from "../styles/home";
import { citaGestor } from "../styles/global";
import changeDate from "../../Imagenes/change.png";
import ModalEdicion from "./modalEdicion";

export function CitasProximas() {
  const [modalEdicionVisible, setModalEdicionVisible] = useState(false);
  const [selectedCita, setselectedCita] = useState(null);

  const closeModal = () => {
    setModalEdicionVisible(false);
  };

  const editarCita = (id) => {
    // Implementar la lógica para editar el usuario con `id`
    console.log("Editar usuario con ID:", id);
    const citaSeleccionada = citas.find((cita) => cita.id === id);
    if (citaSeleccionada) {
      setModalEdicionVisible(true);
      setselectedCita(citaSeleccionada);
    }
  };

  const [citas, setCitas] = useState([
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
    <NativeBaseProvider>
      <View style={[{ marginTop: 10, marginBottom: 50 }]}>
        {citas.map((cita) => (
          <View
            key={cita.id}
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
                bottom: "50%",
              }}
            >
              <TouchableOpacity onPress={() => editarCita(cita.id)}>
                <Image source={changeDate} style={globalStyles.footerImage} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View>
          {selectedCita && (
            <ModalEdicion
              cita={selectedCita}
              onClose={closeModal}
              modalVisible={modalEdicionVisible}
              citas={citas}
              setCitas={setCitas}
              oldCita={true}
            />
          )}
        </View>
      </View>
    </NativeBaseProvider>
  );
}
