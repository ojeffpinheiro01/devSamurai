import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native'

import Colors from '../../../styles/colors'

const NewEntryCategoryPicker = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => { setIsModalVisible(true) }}>
        <Text style={styles.pickerButtonText}>Alimentação</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        <Text>Modal</Text>
        <TouchableOpacity onPress={() => { setIsModalVisible(false) }}>
          <Text>x</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20
  },

  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center'
  },
});

export default NewEntryCategoryPicker;