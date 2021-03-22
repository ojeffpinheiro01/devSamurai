import React, { useState } from 'react'
import { Alert, View, Modal, ImageBackground, StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../../styles/colors'

const NewEntryCameraPickerModal = ({
    photo,
    isVisible,
    onChangePhoto,
    onDelPhoto,
    onClose
}) => {
    const [camera, setCamera] = useState()

    const onTakePicture = async () => {
        try {
            const { uri } = await camera.takePictureAsync({
                qualit: 0.5,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true
            })
            onChangePhoto(uri)
        } catch (err) {
            console.log('NewEntryCameraPickerModal :: erro', err)
            Alert.alert('Oops', 'Houve um erro ao tirar a foto')
        }
    }

    return (
        <View>
            <Modal
                animationType="slide" transparent={false} visible={isVisible}>
                {photo
                    ? (
                        <ImageBackground 
                            style={styles.imagePreview} source={{ uri: photo }}>
                            <View style={styles.pictureButtonActions}>
                                <Icon
                                    name="delete"
                                    size={50}
                                    color={Colors.white}
                                    onPress={onDelPhoto}
                                    style={styles.buttonClose}
                                />
                                <Icon
                                    name="check"
                                    size={50}
                                    color={Colors.white}
                                    onPress={onClose}
                                    style={styles.buttonCheck}
                                />
                            </View>
                        </ImageBackground>
                    )
                    : (
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
                                onPress={onTakePicture}
                                size={40}
                                color={Colors.white}
                                style={styles.buttonTakePicture} />
                            <Icon
                                name="close"
                                onPress={onClose}
                                size={50}
                                color={Colors.white}
                                style={styles.buttonDeletePicture} />
                        </RNCamera>
                    )}
            </Modal>
        </View >
    )
}

const styles = StyleSheet.create({
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

export default NewEntryCameraPickerModal