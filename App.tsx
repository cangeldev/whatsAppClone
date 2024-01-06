import { View, Text } from 'react-native'
import React from 'react'
import { MenuProvider } from 'react-native-popup-menu'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import i18n from 'utils/i18next'

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <MenuProvider>
        <Container />
      </MenuProvider>
    </I18nextProvider>
  )
}
export default App