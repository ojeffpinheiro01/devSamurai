import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Modal, StyleSheet, FlatList } from 'react-native'

import { getAllCategories } from '../../../services/Categories'

import Colors from '../../../styles/colors'

const NewEntryCategoryPicker = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await getAllCategories()
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => { setIsModalVisible(true) }}>
        <Text style={styles.pickerButtonText}>Alimentação</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.pickerButton}>
                <Text 
                  style={[styles.modalItemText, { color: item.color }]}>
                    {item.name}
                </Text>
              </TouchableOpacity>
            )} />
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => { setIsModalVisible(false) }}>
              <Text style={styles.closeButtonText}>FECHAR</Text>
          </TouchableOpacity>
        </View>
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
  modal: {
    flex: 1,
    backgroundColor: Colors.background
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor: Colors.background,
    borderColor: Colors.green,
    borderWidth: 2,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 3,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: Colors.green,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default NewEntryCategoryPicker;