import React, { FC } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'

interface ISettingsMenuCard {
    icon: Image
    title: string
    description: string
}

export const SettingsMenuCard: FC<ISettingsMenuCard> = ({ icon, title, description }) => {

    return (
        <View style={style.container}>
            <Image
                source={icon as any}
                style={style.icon}
            />
            <View style={style.textContainer}>
                <Text style={style.titleText}>
                    {title}
                </Text>
                <Text>
                    {description}
                </Text>
            </View>
        </View>
    )
}
