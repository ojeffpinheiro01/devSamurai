import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Preloading from './pages/Preloading'
import Onboarding from './pages/Onboarding'
import Main from './pages/Main'
import NewEntry from './pages/NewEntry'
import Report from './pages/Report'

const Stack = createStackNavigator()

const StackScreens = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Preloading">
            <Stack.Screen name="Preloading" component={Preloading} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="NewEntry" component={NewEntry} />
            <Stack.Screen name="Report" component={Report} />
        </Stack.Navigator>
    )
}

const Router = () => {
    return (
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    )
  }

export default Router