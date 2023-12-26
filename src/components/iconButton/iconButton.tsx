import { View } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'

interface IButtonIcon {
    icon: string,
    onPress?: () => void
}

export const IconButton: FC<IButtonIcon> = ({ icon, onPress }) => {
    return (
        <Icon
            onPress={onPress}
            name={icon}
            style={style.icon}
        />
    )
}
