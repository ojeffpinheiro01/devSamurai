import React, { useState } from 'react'
import { Modal, TouchableOpacity, View, StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/colors'

const NewEntryCameraPicker = () => {
  const [isModalVisible, setIsModalVisible] = useState()
  const [camera, setCamera] = useState()

  const onTakePicture = () => {
    
  }
  const onDelPicture = () => {
    setIsModalVisible(false)
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.button} onPress={() => { setIsModalVisible(true) }}>
        <Icon name="photo-camera" size={30} color={Colors.white} />
      </TouchableOpacity>
      <Modal
        animationType="slide" transparent={false} visible={isModalVisible}>
        <RNCamera
          ref={(ref) => setCamera(ref)}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          autofocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar câmera.',
            message: 'Precisamos da sua permissão para usar câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          captureAudio={false}>
            <Icon 
              name="photo-camera" 
              size={40} 
              color={Colors.white} 
              style={styles.buttonTakePicture} />
            <Icon 
              name="close"
              onPress={onDelPicture}
              size={50} 
              color={Colors.white} 
              style={styles.buttonDeletePicture} />
          </RNCamera>
      </Modal>
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
  },

  imagePreview: {
    width: '100%',
    height: '100%',
  },
  pictureButtonActions: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
  buttonClose: {
    marginLeft: 16,
  },
  buttonCheck: {
    marginRight: 16,
  },
  camera: {
    flex: 1,
  },
  buttonTakePicture: {
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonDeletePicture: {
    flex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
  }
})

export default NewEntryCameraPicker