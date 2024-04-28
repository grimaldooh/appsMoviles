import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from "react-native";
import { Divider, NativeBaseProvider, Heading, ScrollView } from "native-base";
import checkButton from "../../Imagenes/check.png";
import crossButton from "../../Imagenes/cross.png";
import { globalStyles } from "../styles/global";
import { homeView } from "../styles/home";
import { citaGestor } from "../styles/global";
import changeDate from "../../Imagenes/change.png";
import ModalEdicion from "./modalEdicion";
import { settingsStyle } from "../styles/settings";
import backArrow from "../../Imagenes/backArrow.png";

export function CitasCalendario({ citas, setCitasProximas, date, onClose }) {
  const [modalEdicionVisible, setModalEdicionVisible] = useState(false);
  const [selectedCita, setselectedCita] = useState(null);
  const [modalVisible, setModalVisible] = useState(true);

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

  return (
    <NativeBaseProvider>
      
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={onClose}
          style={{ borderRadius: 20 }}
        >
          <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 1 }}>
            <View
              style={[
                settingsStyle.citasModalView,
                {
                  height: "80%",
                },
              ]}
            >
              <View
                style={{
                  position: "absolute",
                  padding: 5,
                }}
              >
                <TouchableOpacity onPress={onClose}>
                  <Image
                    source={backArrow}
                    style={{
                      width: 25, // Ajusta el ancho de la imagen
                      height: 25, // Ajusta la altura de la imagen
                      // Posiciona la imagen de manera absoluta
                      top: 10, // Ajusta la distancia desde la parte superior del modal
                      left: 10, // Ajusta la distancia desde el lado izquierdo del modal
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{ marginBottom: 20, alignSelf: "center", marginTop: "15%" }}
              >
                <Heading size="md">Citas para : {date}</Heading>
              </Text>
              <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                    }}
                  >
                    <View
                      style={[
                        {
                          justifyContent: "center",
                        },
                      ]}
                    >
                      {citas.map((cita) => (
                        <View
                          key={cita.id}
                          style={[
                            {
                              padding: 10,
                              marginBottom: 20,
                              flexDirection: "row",
                            },
                          ]}
                        >
                          <Divider
                            bg="black"
                            thickness="1"
                            mx="2"
                            orientation="vertical"
                          />
                          <View style={{}}>
                            <View style={[{ flexDirection: "column", alignItems: "flex-start" }]}>
                              <View style={citaGestor.citasTop}>
                                <Heading size="md">{cita.nombre}</Heading>
                              </View>

                              <View style={citaGestor.citas}>
                                <Text>{cita.fecha}</Text>
                              </View>
                              <Button
                                title="Cambiar horario"
                                onPress={() => editarCita(cita.id)}
                              />
                            </View>
                            
                          </View>

                          <View style={{}}></View>
                          
                        </View>
                      ))}
                      <View>
                        {selectedCita && (
                          <ModalEdicion
                            cita={selectedCita}
                            onClose={closeModal}
                            modalVisible={modalEdicionVisible}
                            citas={citas}
                            setCitas={setCitasProximas}
                            oldCita={true}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
     
    </NativeBaseProvider>
  );
}
