import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import InputMoney from '../../../components/Core/InputMoney'

import Colors from '../../../styles/colors'

const OnboardingBalanceInput = ({ value, onChangeValue }) => {
  return (
    <View>
      <Text style={styles.label}>Informe Seu Saldo</Text>
      <InputMoney
        value={value} startWithDebit={false} onChangeValue={onChangeValue} />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: Colors.white,
    fontSize: 28,
    textAlign: 'center'
  }
})

export default OnboardingBalanceInput