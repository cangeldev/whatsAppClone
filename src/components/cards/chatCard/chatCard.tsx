import { View, Text } from 'react-native'
import React from 'react'
import style from './style'

export const ChatCard = () => {
    return (
        <View style={style.container}>
            <View style={style.image} />
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
