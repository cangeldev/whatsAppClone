import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import style from './style'
import { iconaddContactList } from 'utils/helper'
import { AddContactsCard, ChatCard } from 'components/cards' //Components
import { useTranslation } from 'react-i18next' //Multi Language
import { fetchUsers } from 'services/firebase/firebase'
import { example } from 'assets'

export const ContactsPage = () => {

    const { t } = useTranslation()
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const fetchedUsersInfo = await fetchUsers()
            setUsers(fetchedUsersInfo)
        }
        getUsers()
    }, [])

    const renderItem = ({ item }: any) =>
        <ChatCard
            profilePicture={{ uri: item.profileImageUrl }}
            username={item.username}
        />

    const addContact =
        ({ item }: any) =>
            <AddContactsCard
                icon={item.iconName}
                title={t(item.title)}
            />

    return (
        <View style={style.container}>
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
            <View>
                <FlatList
                    data={users}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            </View>
            <Text style={style.title}>
                {t("invitetoWhatsApp")}
            </Text>
            <View>
                <ChatCard status='addContact' profilePicture={example} username='+90 555 555 55 55' />
                <ChatCard status='addContact' profilePicture={example} username='+90 444 444 44 44' />
            </View>
        </View>
    )
}