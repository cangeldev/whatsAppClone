
import React from 'react'
import { View, FlatList } from 'react-native'
import style from './style'
import { settingsAccountList } from 'utils/helper'
import { useTranslation } from 'react-i18next' //Multi Language
import { SettingsCard } from 'components/cards' //Components

export const SettingsAccountPage = () => {

  const { t } = useTranslation()

  const Separator = () => {
    return <View style={style.separator} />
  }

  const renderSettingsCard = ({ item }: any) =>
    <SettingsCard
      icon={item.image}
      title={t(item.title)}
    />
  return (
    <View style={style.container}>
      <FlatList
        data={settingsAccountList}
        renderItem={renderSettingsCard}
        ItemSeparatorComponent={Separator}
      />
    </View>
  )
}
