import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native' //Navigation

interface ISettingsMenuCard {
    icon: Image
    title: string
    description: string
    navigationPage?: string
}

export const SettingsMenuCard: FC<ISettingsMenuCard> = ({ icon, title, description, navigationPage }) => {
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
            <View style={style.textContainer}>
                <Text style={style.titleText}>
                    {title}
                </Text>
                <Text>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
