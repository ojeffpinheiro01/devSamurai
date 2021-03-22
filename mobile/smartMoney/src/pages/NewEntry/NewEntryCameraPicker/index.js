import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import NewEntryCameraPickerModal from './NewEntryCameraPickerModal'

import Colors from '../../../styles/colors'

const NewEntryCameraPicker = ({photo, onChangePhoto}) => {
  const [isModalVisible, setIsModalVisible] = useState()

  const onChangePhotoPress = (newPhoto) => {
    onChangePhoto(newPhoto)
    onClosePress()
  }

  const onDeletePhotoPress = () => {
    onChangePhoto(null)
    onClosePress()
  }

  const onClosePress = () => {
    setIsModalVisible(false)
  }

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, photo ? styles.buttonActived : '']}
         onPress={() => {setIsModalVisible(true)} }>
        <Icon name="photo-camera" size={30} color={Colors.white} />
      </TouchableOpacity>
      <NewEntryCameraPickerModal 
        photo={photo}
        isVisible={isModalVisible}
        onChangePhoto={onChangePhotoPress}
        onDelete={onDeletePhotoPress}
        onClose={onClosePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    marginHorizontal: 3,
  },
  buttonActived: {
    backgroundColor: Colors.blue,
  }
})

export default NewEntryCameraPicker