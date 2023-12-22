import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ISettingsMenuCard {
    image: Image
    title: string,
    text: string
}

export const SettingsMenuCard: FC<ISettingsMenuCard> = ({ image, title, text }) => {

    return (
        <View style={style.container}>
            <Image
                source={image as any}
                style={style.image}
            />
            <View style={style.textView}>
                <Text style={style.title}>
                    {title}
                </Text>
                <Text>
                    {text}
                </Text>
            </View>
        </View>
    )
}
