import React from 'react'
import { View, FlatList } from 'react-native'
import style from './style'
import { settingsAccountList } from 'utils/helper'
import { useTranslation } from 'react-i18next' //Multi Language
import { SettingsCard } from 'components/cards' //Components
import { NextButton } from 'components'
import auth from '@react-native-firebase/auth' //Firebase
import { useNavigation } from '@react-navigation/native'
import { handleSignOut } from 'services/firebase/firebase'

export const SettingsAccountPage = () => {
  const navigation = useNavigation<any>()
  const { t } = useTranslation()

  const Separator = () => {
    return <View style={style.separator} />
  }

  const renderSettingsCard = ({ item }: any) =>
    <SettingsCard
      icon={item.image}
      title={t(item.title)}
      navigationPage={item.navigationPage}
    />
  return (
    <View style={style.container}>
      <FlatList
        data={settingsAccountList}
        renderItem={renderSettingsCard}
        ItemSeparatorComponent={Separator}
      />
      <View style={style.buttonView}>
        <NextButton
          title='exit'
          onPress={() => handleSignOut(navigation)}
        />
      </View>
    </View>
  )
}
