import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { AddContactsCard, ChatCard } from 'components/cards'
import { iconaddContactList } from 'utils/helper'

export const ContactsPages = () => {

    const navigation = useNavigation()
    const addContact =
        ({ item }: any) =>
            <AddContactsCard icon={item.iconName} title={item.title}
            />

    return (
        <ScrollView style={style.container}>
            <View style={style.headerContainer}>
                <FlatList
                    scrollEnabled={false}
                    data={iconaddContactList}
                    renderItem={addContact}
                />
            </View>
            <Text style={style.title}>
                WhatsApp'taki kişiler
            </Text>
            <View style={style.contentView}>
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
            </View>
            <Text style={style.title}>
                WhatsApp'a davet et
            </Text>
            <View style={style.contentView}>
                <ChatCard status='addContact' />
                <ChatCard status='addContact' />
                <ChatCard status='addContact' />
            </View>
        </ScrollView>
    )
}