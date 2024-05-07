import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import {
  Divider,
  NativeBaseProvider,
  Heading,
  Stack,
  Button,
  Text,
} from "native-base";
import { settingsStyle } from "../styles/settings";
import DateTimePicker from "@react-native-community/datetimepicker";
import backArrow from "../../Imagenes/backArrow.png";
import { globalStyles, colors } from "../styles/global";

const ModalAgenda = ({ onClose, modalVisible, setCitas }) => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isDateChangeAllowed, setIsDateChangeAllowed] = useState(false);

  const [newCita, setNewCita] = useState({
    nombre: "",
    fecha: "",
    state: "agendada",
  });

  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [state, setState] = useState("");

  //   useEffect(() => {
  //     setNombre(cita.nombre);
  //     setFecha(cita.fecha);
  //     setIsDatePickerVisible(false);
  //     setIsDateChangeAllowed(false);
  //     setIsOldCita(oldCita);
  //   }, [cita]);

  // modalVisible = true;

  const onDateChange = (event, selectedDate) => {
    setIsDateChangeAllowed(true);
    if (isDateChangeAllowed) {
      const currentDate = selectedDate || date;
      setIsDatePickerVisible(Platform.OS === "ios");
      setFecha(
        `${currentDate.getFullYear()}-${(
          "0" +
          (currentDate.getMonth() + 1)
        ).slice(-2)}-${("0" + currentDate.getDate()).slice(-2)}, ${(
          "0" + currentDate.getHours()
        ).slice(-2)}:${("0" + currentDate.getMinutes()).slice(-2)}`
      );
      setIsDateChangeAllowed(false);
    }
    newCita.fecha = fecha;
  };

  const confirmarCita = () => {
    Alert.alert(
      "Notificación enviada",
      "La cita fue agendada exitosamente.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const handleGuardar = () => {
    newCita.nombre = nombre;
    console.log("Cita agendada:", newCita.fecha, newCita.nombre, newCita.state);
    //setNombre(cita.nombre);
    setIsDatePickerVisible(false);
    //Aqui se debe guardar la cita en la base de datos
    onClose();
    confirmarCita();
  };

  const showDatePicker = () => {
    setIsDateChangeAllowed(true);

    setIsDatePickerVisible(true);
  };

  return (
    <View style={[{}]}>
      <Modal
        animationType="fade"
        transparent={true}
        // visible={modalVisible}
        visible={modalVisible}
        onRequestClose={onClose}
      >
        <View style={settingsStyle.overlay}>
          <View
            style={[settingsStyle.modalView, { justifyContent: "flex-start" }]}
          >
            <View
              style={{
                position: "absolute",
                padding: 10,
              }}
            >
              <TouchableOpacity onPress={onClose}>
                <Image
                  source={backArrow}
                  style={{
                    width: 30, // Ajusta el ancho de la imagen
                    height: 30, // Ajusta la altura de la imagen
                    // Posiciona la imagen de manera absoluta
                    top: 10, // Ajusta la distancia desde la parte superior del modal
                    left: 10, // Ajusta la distancia desde el lado izquierdo del modal
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={[{ width: 250, marginTop: 15 }]}>
              <Text
                style={{
                  fontWeight: "bold",
                  alignSelf: "center",
                  fontSize: 20,
                }}
              >
                Agendar cita
              </Text>

              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold", marginTop: 30 }}>Nombre del cliente: </Text>
                <TextInput
                style={globalStyles.input}
                placeholder="Ingresa un nombre"
                placeholderTextColor={colors.text}
                onChangeText={(text) => setNombre({ nombre: text })}

            />
              </View>
            </View>
            <Text style={{ marginTop: 25, marginLeft: 10 }}>
              Añadir mensaje :{" "}
            </Text>
            <TextInput
              style={[
                settingsStyle.input,
                {
                  justifyContent: "flex-start",
                  padding: 10,
                  width: 250,
                  height: 100,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 10,
                  textAlignVertical: "top",
                },
              ]}
              placeholder={"Escribe un mensaje para el cliente"}
              borderRadius={10}
              multiline={true}
              //onChangeText={setNombre}
            />
            {/* <Text style={{ marginTop: 10, marginLeft: 10 }}>Fecha : </Text>
            <TextInput
              style={settingsStyle.input}
              onChangeText={setFecha}
              placeholder={cita ? cita.fecha : ""}
            /> */}

            <Button
              onPress={showDatePicker}
              style={{
                marginBottom: 15,
                marginTop: 5,
              }}
              size="sm"
              variant="subtle"
              colorScheme="cyan"
            >
              <Text style={{ textAlign: "left" }}>Ingresar fecha y hora</Text>
            </Button>
            <View style={{ width: "85%" }}>
              {isDatePickerVisible && (
                <DateTimePicker
                  testID="datePicker"
                  value={date}
                  mode={"datetime"}
                  is24Hour={true}
                  display="default"
                  onChange={onDateChange}
                />
              )}
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Button
                onPress={() => {
                  console.log("Botón Guardar cambios presionado");
                  handleGuardar();
                  onClose();
                }}
                style={{ marginTop: 35 }}
                size="sm"
                variant="subtle"
                colorScheme="emerald"
              >
                <Text>Agendar cita </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalAgenda;
