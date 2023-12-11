import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { ChatCard } from 'components/cards'

export const ChatsScreen = () => {
    return (
        <View style={style.container}>
            <ChatCard />
            <ChatCard />
        </View>
    )
}
