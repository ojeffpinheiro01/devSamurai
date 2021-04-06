import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

import { signUp as register } from '../../services/Auth'

import logo from '../../assets/logo-white.png'

import Colors from '../../styles/colors'

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if (loading === false) {
      setLoading(true)

      const { registerSuccess } = await register({ name, email, password })

      if (registerSuccess === true) {
        navigation.reset({
          index: 0,
          key: null,
          routes: [ {name: 'Onboarding' }]
        })
      } else {
        setLoading(false)
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo} />
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor={Colors.carbon}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(text) => { setName(text) }}
      />
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor={Colors.carbon}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => { setEmail(text) }}
      />
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        placeholderTextColor={Colors.carbon}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => { setPassword(text) }}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>
          {loading ? 'Aguarde...' : 'Criar conta'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.textSignUp}>Já possui uma conta?</Text>
      <TouchableOpacity
        onPress={() => { navigation.navigate('SignIn') }}>
        <Text style={styles.buttonSignUpText}>Faça o login! </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.champagne,
    borderRadius: 8,
    width: '80%',
    paddingHorizontal: 20,
    fontSize: 16,
    color: Colors.white,
    height: 44,
    marginTop: 20
  },
  button: {
    height: 44,
    width: '80%',
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16
  },
  textSignUp: { marginTop: 10 },
  buttonSignUpText: {
    color: Colors.blueDark,
    textDecorationLine: 'none'
  }
})

export default SignUp