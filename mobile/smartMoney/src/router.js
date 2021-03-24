import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Preloading from './pages/Preloading'
import Onboarding from './pages/Onboarding'
import Main from './pages/Main'
import NewEntry from './pages/NewEntry'
import Report from './pages/Report'


const Router = createAppContainer(
    createSwitchNavigator(
        { Preloading, Onboarding, Main, NewEntry, Report },
        { initialRouteName: 'Preloading', backBehavior: 'order' }
    )
)

export default Router