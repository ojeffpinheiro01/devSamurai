import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter' 
import OnboardingMessage from './OnboardingMessage'
import OnboardingBalanceInput from './OnboardingBalanceInput'

import useCategories from '../../hooks/useCategories'
import { saveEntry } from '../../services/Entries'
import { setInitialized } from '../../services/Onboarding'

import logo from '../../assets/logo-white.png'

import Colors from '../../styles/colors'

const Onboarding = ({ navigation }) => {
  const [, , , initCategories] = useCategories()
  const [amount, setAmount] = useState(0)
  const onSavePress = () => {
    saveEntry({
      amount: parseFloat(amount),
      isInit: true,
      category: initCategories
    })
    setInitialized()
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
      <OnboardingMessage />
      <OnboardingBalanceInput
        value={amount} onChangeValue={setAmount} />
      <ActionFooter>
        <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  }
})

export default Onboarding