import React, { useState } from "react";
import { CalendarList } from "react-native-calendars";
import { View, Text, Image, ScrollView, Modal, Button } from "react-native";
import { CitasProximas } from "./proximas";
import { CitasCalendario } from "./citasCalendario";

export default function Calendario({ citas, setCitasProximas }) {
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(null);
  const fechas = citas.map(cita => cita.fecha.split(",")[0]);


  function filtrarCitasPorFecha(citas, fechaSeleccionada) {
    
    return citas.filter((cita) => cita.fecha.split(",")[0] === fechaSeleccionada);
  }

  const closeModal = () => {
    setModalVisible(false);
    setCitaSeleccionada(null);
  };

  const markedDates = fechas.reduce((acc, fecha) => {
    acc[fecha] = {
      selected: true,
      marked: true,
      selectedColor: "darkgreen",
    };
    return acc;
  }, {});

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 0.5 }}>
        <CalendarList
          // Habilita el deslizamiento horizontal
          horizontal={true}
          // Habilita el desplazamiento de páginas
          pagingEnabled={true}
          // Establece el estilo del calendario
          calendarStyle={{
            height: 350,
          }}
          // Establece el estilo del día actual
          markedDates={markedDates}
          theme={{
            backgroundColor: "#f7f7f7",
            calendarBackground: "#f7f7f7",
            textSectionTitleColor: "#b6c1cd",
            textSectionTitleDisabledColor: "#d9e1e8",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "black",
            indicatorColor: "blue",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          // Establece la cita seleccionada cuando se presiona un día
          onDayPress={(day) => {
            console.log("selected day", day);
            // const formattedDateString = day.dateString.replace(/-/g, '/');
            const cita = citas.find((cita) => cita.fecha.split(",")[0] === day.dateString);
            
            console.log("cita", cita);
            setDate(day.dateString);  
            setCitaSeleccionada(cita);
            setFiltered(filtrarCitasPorFecha(citas, day.dateString));
            setModalVisible(true);
          }}
        />
      </View>

      {citaSeleccionada && (
        
        <View style={{  }}>
           <CitasCalendario citas={filtered} setCitasProximas={setFiltered} date={date} onClose={closeModal}/>
        </View>
      )}
    </View>
  );
}
