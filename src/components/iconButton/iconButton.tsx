import React, { FC } from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' //Icons
import { useNavigation } from '@react-navigation/native' //Navigation

interface IButtonIcon {
    icon: string
    navigatePage: string
}

export const IconButton: FC<IButtonIcon> = ({ icon, navigatePage }) => {

    const navigation = useNavigation<any>()
    const toogleButton = () => {
        navigation.navigate(navigatePage)
    }

    return (
        <Icon
            onPress={toogleButton}
            name={icon}
            style={style.icon}
        />
    )
}
