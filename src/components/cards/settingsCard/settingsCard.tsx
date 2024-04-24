import { Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native' //Navigation

interface ISettingsMenuCard {
    icon: Image
    title: string
    navigationPage?: string
}

export const SettingsCard: FC<ISettingsMenuCard> = ({ icon, title, navigationPage }) => {
    const navigation = useNavigation<any>()
    const navigatePage = () => {
        navigation.navigate(navigationPage)
    }
    return (
        <TouchableOpacity
            onPress={navigatePage}
            style={style.container}>
            <Image
                source={icon as any}
                style={style.icon}
            />
            <Text style={style.titleText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}