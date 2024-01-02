import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { AddContactsCard } from 'components/cards'
import { iconaddContactList } from 'utils/helper'

export const ContactsPages = () => {

    const navigation = useNavigation()
    const addContact =
        ({ item }: any) =>
            <AddContactsCard icon={item.iconName} title={item.title}
            />

    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <FlatList
                    data={iconaddContactList}
                    renderItem={addContact}
                />
            </View>
        </View>
    )
}