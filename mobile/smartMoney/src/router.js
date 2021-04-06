import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Preloading from './pages/Preloading'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Onboarding from './pages/Onboarding'
import Main from './pages/Main'
import NewEntry from './pages/NewEntry'
import Report from './pages/Report'

import { isInitialized } from './services/Onboarding'

const Stack = createStackNavigator()

const StackScreens = ({ logged, initiated }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={logged ? (initiated ? 'Main' : 'Onboarding') : 'SignIn'}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  )
}

const Router = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [initiated, setInitiated] = useState(false)
  const [logged, setLogged] = useState(false)
  
  useEffect(() => {
    async function initialVerifications() {
      if (await isInitialized()) {
        setInitiated(true)
      }

      /*if (await isLogged()) {
        setLogged(true)
      }*/

      setIsLoading(false)
    }
    initialVerifications()
  })

  if (isLoading) {
    return <Preloading />;
  }

  return (
    <NavigationContainer>
      <StackScreens logged={logged} initiated={initiated} />
    </NavigationContainer>
  )
}

export default Router