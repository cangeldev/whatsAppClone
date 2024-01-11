import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ISettingsMenuCard {
    icon: Image
    title: string
}

export const SettingsCard: FC<ISettingsMenuCard> = ({ icon, title }) => {
    return (
        <View style={style.container}>
            <Image
                source={icon as any}
                style={style.icon}
            />
            <Text style={style.titleText}>
                {title}
            </Text>
        </View>
    )
}