import React, { useState, FC, useCallback } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native' //Navigation
import { useTranslation } from 'react-i18next'  //Multi Language
import { ChatModal } from 'components/modals'   //Components
import style from './style'

interface IChatCard {
    status?: string,
    profilePicture: any,
    username: string,
    phoneNumber?: any
}

export const ChatCard: FC<IChatCard> = ({ status, profilePicture, username, phoneNumber }) => {
    const [chatModalVisible, setChatModalVisible] = useState(false)
    const navigation = useNavigation<any>()
    const { t } = useTranslation()

    const toggleButton = useCallback(() => {
        navigation.navigate("MessagePages", { profilePicture, username, phoneNumber })
    }, [navigation, profilePicture, username, phoneNumber])

    const toggleChatModal = useCallback(() => {
        setChatModalVisible(!chatModalVisible)
    }, [chatModalVisible])

    const renderStatusText = () => {
        if (status === 'date') {
            return <Text style={style.chatDate}>12:58</Text>
        }
        if (status === 'addContact') {
            return <Text style={style.chatInvite}>{t("invite")}</Text>
        }
        return null
    }

    return (
        <Pressable onPress={toggleButton} style={style.chatContainer}>
            <ChatModal
                profilePicture={profilePicture}
                username={username}
                visibleModal={chatModalVisible}
                closeModal={toggleChatModal}
            />
            <Pressable onPress={toggleChatModal} style={style.chatImage}>
                <Image source={profilePicture} style={style.image} />
            </Pressable>
            <View style={style.chatInfoView}>
                <View style={style.chatInfoInner}>
                    <Text style={style.chatName}>{username}</Text>
                    {renderStatusText()}
                </View>
                {status !== 'addContact' && <Text style={style.chatMessage}>C</Text>}
            </View>
        </Pressable>
    )
}