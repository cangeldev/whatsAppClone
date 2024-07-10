import React, { FC, useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' //Icons
import { useNavigation } from '@react-navigation/native' //Navigation

interface IProfileInfoCard {
    title: string
    iconName: string
    navigatePage: string
}

export const ProfileInfoCard: FC<IProfileInfoCard> = React.memo(({ iconName, title, navigatePage }) => {
    const navigation = useNavigation<any>()

    const handleButton = useCallback(() => {
        navigation.navigate(navigatePage)
    }, [navigation, navigatePage])

    return (
        <TouchableOpacity onPress={handleButton} style={style.container}>
            <Icon name={iconName} style={style.icon} />
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
})
