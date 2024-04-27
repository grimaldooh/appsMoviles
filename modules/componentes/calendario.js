import React from 'react';
import { CalendarList } from 'react-native-calendars';
import { View } from 'react-native';

export default function Calendario() {
  return (
    <View style={{flex : 1}}>
      <CalendarList
        // Habilita el deslizamiento horizontal
        horizontal={true}
        // Habilita el desplazamiento de páginas
        pagingEnabled={true}
        // Establece el estilo del calendario
        calendarStyle={{
          
          height: 350
        }}
        // Establece el estilo del día actual
        markedDates={{
          '2024-04-16': {selected: true, marked: true, selectedColor: 'blue'}
        }}
        // Establece el tema del calendario
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />
    </View>
  );
}