import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Logo = () => {
    return (
        <Text style={style.logoText}>InstaCat</Text>
    )
}

const style = StyleSheet.create({
    logoText: {
        alignSelf: 'center',
        marginTop: 50,
        marginVertical: 20,
        color: '#000'
    }
})

export default Logo