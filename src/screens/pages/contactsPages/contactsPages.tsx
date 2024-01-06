import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { AddContactsCard, ChatCard } from 'components/cards'
import { iconaddContactList } from 'utils/helper'
import { useTranslation } from 'react-i18next'

export const ContactsPages = () => {

    const { t } = useTranslation()
    const navigation = useNavigation()
    const addContact =
        ({ item }: any) =>
            <AddContactsCard
                icon={item.iconName}
                title={t(item.title)}
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
                {t("WhatsAppContacts")}
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
                {t("invitetoWhatsApp")}
            </Text>
            <View style={style.contentView}>
                <ChatCard status='addContact' />
                <ChatCard status='addContact' />
                <ChatCard status='addContact' />
            </View>
        </ScrollView>
    )
}