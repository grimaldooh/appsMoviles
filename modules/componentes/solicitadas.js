import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
import {
  Divider,
  NativeBaseProvider,
  Heading,
  Stack,
  Button,
} from "native-base";
import checkButton from "../../Imagenes/check.png";
import crossButton from "../../Imagenes/cross.png";
import { globalStyles } from "../styles/global";
import { homeView } from "../styles/home";
import { citaGestor } from "../styles/global";
import button_icon5 from "../../Imagenes/change.png";
import { settingsStyle } from "../styles/settings";

export function CitasSolicitadasHoy() {
  const [modalVisible, setModalVisible] = useState(false);

  const citas = [
    {
      nombre: "Bart Simpson",
      fecha: "hoy : 10:45 a.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Lionel Messi",
      fecha: "hoy : 12:30 p.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "CR7",
      fecha: "mañana : 4:30 p.m",
      image: require("../../Imagenes/foto.png"),
    },
    {
      nombre: "Elon Musk",
      fecha: "14,4,24 11:00 a.m",
      image: require("../../Imagenes/foto.png"),
    },
  ];

  return (
    <NativeBaseProvider>
      <View style={[{ marginTop: 10, marginBottom: 50 }]}>
        {citas.map((cita, index) => (
          <View
            key={index}
            style={[
              {
                flexDirection: "column",
                borderRadius: 20,
                padding: 10,
                borderWidth: 1,
                borderColor: "black",
                marginTop: 35,
              },
            ]}
          >
            <View
              style={[
                {
                  flexDirection: "row",
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
                <TouchableOpacity>
                  <Image
                    source={button_icon5}
                    style={globalStyles.footerImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[{ marginTop: 10, marginBottom: 10, maxWidth: "95%" }]}
            >
              <Divider
                bg="black"
                thickness="1"
                mx="2"
                orientation="horizontal"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: "80%",
                marginLeft: "10%",
              }}
            >
              <Stack
                mb="2.5"
                mt="1.5"
                direction={{
                  base: "row",
                  md: "row",
                }}
                space={2}
                mx={{
                  base: "auto",
                  md: "0",
                }}
              >
                <Button size="sm" variant="subtle">
                  <Text>Aceptar</Text>
                </Button>
                <Button
                  size="sm"
                  variant="subtle"
                  colorScheme="emerald"
                  onPress={handlePress}
                >
                  <Text>Modificar fecha</Text>
                </Button>
                <Button size="sm" variant="subtle" colorScheme="secondary">
                  <Text>Rechazar</Text>
                </Button>
              </Stack>
            </View>
          </View>
        ))}

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={settingsStyle.overlay}>
            <View
              style={[
                settingsStyle.modalView,
                { justifyContent: "flex-start" },
              ]}
            >
              <Text style={{ fontWeight: "bold" }}>Modificar información</Text>

              <Text style={{ marginTop: 25, marginLeft: 10 }}>Nombre : </Text>
              <TextInput
                style={[settingsStyle.input, { justifyContent: "flex-start" }]}
                onChangeText={(value) => handleChange("nombre", value)}
                value={user.nombre}
              />
              <Text style={{ marginTop: 10, marginLeft: 10 }}>
                Correo electronico:{" "}
              </Text>
              <TextInput
                style={settingsStyle.input}
                onChangeText={(value) => handleChange("correo", value)}
                value={user.correo}
              />
              <Text style={{ marginTop: 10, marginLeft: 10 }}>Domicilio: </Text>
              <TextInput
                style={settingsStyle.input}
                onChangeText={(value) => handleChange("domicilio", value)}
                value={user.domicilio}
              />
              <Text style={{ marginTop: 10, marginLeft: 10 }}>Profesión: </Text>
              <TextInput
                style={settingsStyle.input}
                onChangeText={(value) => handleChange("profesion", value)}
                value={user.profesion}
              />
              <Button
                title="Guardar cambios"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </NativeBaseProvider>
  );
}

const handlePress = () => {
  setModalVisible(true);
};
