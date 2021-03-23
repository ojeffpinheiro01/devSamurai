import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../../../styles/colors'

const OnboardingMessage = () => {
  return (
      <View>
          <Text style={styles.title}>Olá!</Text>
          <Text style={styles.message}>
            Para começar a usar o SmartMoney, você precisa informar o saldo atual.
            Vamos lá?
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    title: {
      color: Colors.white,
      fontSize: 28,
      textAlign: 'center',
      marginTop: 20,
    },
    message: {
      color: Colors.white,
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 40,
    },
  })

export default OnboardingMessage;