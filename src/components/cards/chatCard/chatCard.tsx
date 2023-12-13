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
        <View style={style.container}>
            <ChatModal
                visibleModal={chatModal}
                closeModal={toggleChatModal}
            />
            <Pressable onPress={toggleChatModal}>
                <Image
                    source={example}
                    style={style.image}
                />
            </Pressable>
            <View style={style.infoView}>
                <View style={style.innerContainer}>
                    <Text style={style.name}>
                        Can
                    </Text>
                    <Text style={style.date}>
                        12:58
                    </Text>
                </View>
                <Text style={style.message}>
                    C
                </Text>
            </View>
        </View>
    )
}
