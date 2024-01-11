import React, { useState, FC } from 'react'
import { View, Text, Pressable } from 'react-native'
import style from './style'
import { example } from 'assets'
import { useNavigation } from '@react-navigation/native' //Navigation
import { useTranslation } from 'react-i18next' //Multi Language

//Components
import { ChatModal } from 'components/modals'
import { ProfileImage } from '../profileImage/profileImage'

interface IChatCard {
    status?: string
}

export const ChatCard: FC<IChatCard> = ({ status }) => {

    const [chatModalVisible, setChatModalVisible] = useState(false)
    const navigation = useNavigation<any>()
    const { t } = useTranslation()

    const toogleButton = () => {
        navigation.navigate("MessagePages")
    }

    const toggleChatModal = () => {
        setChatModalVisible(!chatModalVisible)
    }

    return (
        <Pressable
            onPress={toogleButton}
            style={style.chatContainer}>
            <ChatModal
                visibleModal={chatModalVisible}
                closeModal={toggleChatModal}
            />
            <Pressable onPress={toggleChatModal} style={style.chatImage}>
                <ProfileImage
                    image={example}
                />
            </Pressable>
            <View style={style.chatInfoView}>
                <View style={style.chatInfoInner}>
                    <Text style={style.chatName}>
                        Can
                    </Text>
                    {
                        status === "date" ?
                            <Text style={style.chatDate}>
                                12:58
                            </Text> : status == "addContact" ?
                                <Text style={style.chatInvite}>
                                    {t("invite")}
                                </Text> : null
                    }
                </View>
                <Text style={style.chatMessage}>
                    C
                </Text>
            </View>
        </Pressable>
    )
}
