import React from 'react'
import { Alert, View, TouchableOpacity, StyleSheet } from 'react-native'

import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/colors'

const getLocation = (latitude, longitude) => {
    Geocoder.init('AIzaSyBGigREJ4fqi8n4x7-kovxPgh2Xoe3xSj8')

    Geocoder.from({ latitude, longitude })
        .then((json) => {
            const formattedAddress = json.results[0].formatted_Address
            Alert.alert('Endereço Formatado', formattedAddress)
        })
        .catch((error) => {
            console.log(
                'NewEntryAddressPicker :: getLocation :: erro ao recuperar a Localização',
                error
            )
            Alert.alert(
                'Houve um Erro ao recuperar sua posição, por favor, tenha certeza que autorizou o aplicativo',
            )
        })
}

const getPosition = () => {
    Geolocation.getCurrentPosition(
        pos => {
            const latitude = pos.coords.latitude
            const longitude = pos.coords.longitude
            
            getLocation(latitude, longitude)
        },
        error => {
            console.error('NewEntryAddressPicker :: erro:', error)
        }
    )
}

const NewEntryAddressPicker = () => {
    const onButtonPress = () => { getPosition() }
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Icon name='location-on' size={30} color={Colors.white} />
            </TouchableOpacity>
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
    }
})

export default NewEntryAddressPicker;