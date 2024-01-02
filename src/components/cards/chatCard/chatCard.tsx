import { View, Text, Image, Pressable } from 'react-native'
import React, { useState, FC } from 'react'
import style from './style'
import { example } from 'assets'
import { ChatModal } from 'components/modals'
import { useNavigation } from '@react-navigation/native'

interface IChatCard {
    status?: string
}
export const ChatCard: FC<IChatCard> = ({ status }) => {
    const [chatModal, setChatModal] = useState(false)
    const navigation = useNavigation<any>()

    const toogleButton = () => {
        navigation.navigate("MessagePages")
    }

    const toggleChatModal = () => {
        setChatModal(!chatModal)
    }

    return (
        <Pressable
            onPress={toogleButton}
            style={style.chatContainer}>
            <ChatModal
                visibleModal={chatModal}
                closeModal={toggleChatModal}
            />
            <Pressable onPress={toggleChatModal}>
                <Image
                    source={example}
                    style={style.chatImage}
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
                                    Davet et
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
