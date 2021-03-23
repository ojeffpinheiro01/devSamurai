import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Onboarding from './pages/Onboarding'
import Main from './pages/Main'
import NewEntry from './pages/NewEntry'
import Report from './pages/Report'


const Router = createAppContainer(
    createSwitchNavigator(
        { Onboarding, Main, NewEntry, Report },
        { initialRouteName: 'Onboarding', backBehavior: 'order' }
    )
)

export default Router