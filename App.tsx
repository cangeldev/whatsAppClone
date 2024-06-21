import React from 'react'
import { MenuProvider } from 'react-native-popup-menu'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import i18n from 'utils/i18next'
import { Provider } from 'react-redux'
import { store } from 'services/features/store'

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <MenuProvider>
          <Container />
        </MenuProvider>
      </I18nextProvider>
    </Provider>
  )
}
export default App