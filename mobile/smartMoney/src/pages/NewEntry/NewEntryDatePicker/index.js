import React, { useState } from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'

import DateTimePicker from 'react-native-modal-datetime-picker'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/colors'

const NewEntryDatePicker = ({value, onChange}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const onChangeValue = (date) => {
    onChange(date)
    onCancel()
  };

  const onCancel = () => {
    setModalIsVisible(false)
  };

  return (
    <View>
      <TouchableOpacity 
        style={styles.btn} onPress={() => setModalIsVisible(true)}>
        <Icon
          name="today"
          size={30}
          color={Colors.white}
        />
      </TouchableOpacity>

      <DateTimePicker
        mode="date"
        datePickerModeAndroid="calendar"
        titleIOS="Data de vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
        date={value}
        isVisible={modalIsVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    borderRadius: 59/2,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default NewEntryDatePicker