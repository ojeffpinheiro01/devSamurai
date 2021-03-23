import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter' 
import OnboardingMessage from './OnboardingMessage'
import OnboardingBalanceInput from './OnboardingBalanceInput'

import logo from '../../assets/logo-white.png'

import Colors from '../../styles/colors'

const Onboarding = ({ navigation }) => {
  const [amount, setAmount] = useState(0)
  const onSavePress = () => {}

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
  },
});

export default Onboarding;