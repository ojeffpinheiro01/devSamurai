import React, { useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, StatusBar, Image } from 'react-native'

import { isInitialized } from '../../services/Onboarding'

import logo from '../../assets/logo-white.png'
import Colors from '../../styles/colors'

const Preloading = ({navigation}) => {
    useEffect(() => {
        async function makeRedirect() {
            (await isInitialized())
              ? navigation.navigate('Main')
              : navigation.navigate('Onboarding')
          }
        makeRedirect()
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content" backgroundColor={Colors.background} />
            <View style={styles.logo}>
                <Image source={logo} />
            </View>
            <ActivityIndicator
                color={Colors.violet} size={60} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        marginBottom: 40,
    }
})

export default Preloading