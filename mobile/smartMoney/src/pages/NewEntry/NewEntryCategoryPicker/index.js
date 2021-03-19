import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import CategoryModal from '../../../components/CategoryModal'

import Colors from '../../../styles/colors'

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onCategoryPress = (item) => {
    onChangeCategory(item)
    onClosePress()
  }

  const onClosePress = () => {
    setIsModalVisible(false)
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => { setIsModalVisible(true) }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <CategoryModal
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={isModalVisible}
        onConfirm={onCategoryPress}
        onCancel={onClosePress} />
    </View>
  )
}

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
  }
})

export default NewEntryCategoryPicker