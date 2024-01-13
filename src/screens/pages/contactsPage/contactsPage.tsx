import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import style from './style'
import { iconaddContactList } from 'utils/helper'
import { useNavigation } from '@react-navigation/native' //Navigation
import { AddContactsCard, ChatCard } from 'components/cards' //Components
import { useTranslation } from 'react-i18next' //Multi Language

export const ContactsPage = () => {

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