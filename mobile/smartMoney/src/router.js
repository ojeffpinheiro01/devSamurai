import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from './pages/Main'
import NewEntry from './pages/NewEntry'
import Report from './pages/Report'

const Router = createAppContainer(
    createSwitchNavigator(
        { Main, NewEntry, Report },
        { initialRouteName: 'Main', backBehavior: 'order' }
    )
)

export default Router