import { View, Text } from 'react-native'
import React from 'react'
import { MenuProvider } from 'react-native-popup-menu'
import { Container } from 'container/container'

const App = () => {
  return (
    <MenuProvider>
      <Container />
    </MenuProvider>
  )
}
export default App