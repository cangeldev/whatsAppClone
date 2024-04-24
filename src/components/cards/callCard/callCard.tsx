import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import style from './style'
import { example } from 'assets'
import { ChatModal } from 'components/modals' //Components

//Icons
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconF from 'react-native-vector-icons/MaterialCommunityIcons'

export const CallCard = () => {

    const [chatModalVisible, setChatModalVisible] = useState(false)
    const toggleChatModal = () => {
        setChatModalVisible(!chatModalVisible)
    }

    return (
        <View style={style.container}>
            <ChatModal
                visibleModal={chatModalVisible}
                closeModal={toggleChatModal}
            />
            <Pressable onPress={toggleChatModal}>
                <Image
                    source={example}
                    style={style.image}
                />
            </Pressable>
            <View style={style.infoContainer}>
                <Text style={style.titleText}>
                    Kırıklar
                </Text>
                <View style={style.dateInfoContainer}>
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
            <IconM
                name={"call"}
                style={style.callIcon}
            />
        </View>
    )
}
