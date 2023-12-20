import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { example } from 'assets'
import style from './style'
import { ChatModal } from 'components/modals'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconF from 'react-native-vector-icons/MaterialCommunityIcons'

export const CallCard = () => {

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
            <View style={style.textView}>
                <Text style={style.textViewTitle}>
                    Kırıklar
                </Text>
                <View style={style.dateView}>
                    <IconF
                        name={"arrow-bottom-left"}
                        size={16}
                        color={"red"}
                    />
                    <Text>
                        19 Kasım 20:02
                    </Text>
                </View>
            </View>
            <Icon
                name={"call"}
                style={style.icon}
            />
        </View>
    )
}
