import { View, Text } from 'react-native'
import React from 'react'
import { HomeScreen } from 'screens/index'
import { MenuProvider } from 'react-native-popup-menu'

const App = () => {
  return (
    <MenuProvider>
      <HomeScreen />
    </MenuProvider>
  )
}
export default App