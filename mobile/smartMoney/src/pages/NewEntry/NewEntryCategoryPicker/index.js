import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Modal, StyleSheet, FlatList } from 'react-native'

import { getDebitCategories, getCreditCategories } from '../../../services/Categories'

import Colors from '../../../styles/colors'

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [debitCategories, setDebitCategories] = useState([])
  const [creditCategories, setCreditCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      setDebitCategories(await getDebitCategories())
      setCreditCategories(await getCreditCategories())
    }
    loadCategories()
  }, []);

  const onCategoryPress = (item) => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => { setIsModalVisible(true) }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={debit ? debitCategories : creditCategories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.pickerButton}
                onPress={() => { onCategoryPress(item) } }>
                  <Text 
                    style={[styles.modalItemText, { color: item.color }]}>
                      {item.name}
                  </Text>
              </TouchableOpacity>
            )} />
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={onClosePress}>
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