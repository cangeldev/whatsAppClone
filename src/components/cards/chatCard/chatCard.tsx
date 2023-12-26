import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { example } from 'assets'
import { ChatModal } from 'components/modals'

export const ChatCard = () => {
    const [chatModal, setChatModal] = useState(false)

    const toggleChatModal = () => {
        setChatModal(!chatModal)
    }

    return (
        <View style={style.chatContainer}>
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
                    <Text style={style.chatDate}>
                        12:58
                    </Text>
                </View>
                <Text style={style.chatMessage}>
                    C
                </Text>
            </View>
        </View>
    )
}
