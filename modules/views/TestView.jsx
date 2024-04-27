import React, { useState } from "react";
import { Button, Platform, View , Text} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TestView() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setIsDatePickerVisible(Platform.OS === "ios");
    setDate(currentDate);
    console.log(
      currentDate.toLocaleString("en-US", { timeZone: "America/Tijuana" })
    );
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setIsTimePickerVisible(Platform.OS === "ios");
    setTime(currentTime);
  };

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const showTimePicker = () => {
    setIsTimePickerVisible(true);
  };

  return (
    <View>
      <Button onPress={showDatePicker} title="Show date picker!" />
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
      <Button onPress={showTimePicker} title="Show time picker!" />
      {isTimePickerVisible && (
        <DateTimePicker
          testID="timePicker"
          value={time}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={onTimeChange}
        />
      )}

      <Text>Fecha seleccionada: {date.toLocaleString()}</Text>
    </View>
  );
}
