import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

import { isInitialized } from '../../services/Onboarding'

import logo from '../../assets/logo-white.png'

import Colors from '../../styles/colors'

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if (loading === false) {
      setLoading(true)
      const {loginSuccess} = await login({
        email,
        password,
      })

      if (loginSuccess === true) {
        const initiated = await isInitialized()
        navigation.reset({
          index: 0,
          key: null,
          routes: [{name: initiated ? 'Main' : 'Welcome'}],
        })
      } else {
        setLoading(false)
      }
    }
  }

  return (
    <KeyboardAvoidingView 
        behavior="padding" style={styles.container}>
      <Image source={logo} />
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor={Colors.carbon}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(t) => { setEmail(t) }}
      />
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        placeholderTextColor={Colors.carbon}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(t) => { setPassword(t) }}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>
          {loading ? 'Aguarde...' : 'Entrar'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.textSignUp}>Ainda não tem uma conta?</Text>
      <TouchableOpacity
        onPress={() => { navigation.navigate('SignUp') }}>
        <Text style={styles.buttonSignUpText}>Criar uma conta</Text>
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

export default SignIn