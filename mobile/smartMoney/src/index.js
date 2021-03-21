import React from 'react'
import { YellowBox } from 'react-native'
import Router from './router'

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested'])

const App = () => {
  return <Router />
}

export default App
