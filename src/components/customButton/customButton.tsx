import { TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconM from 'react-native-vector-icons/MaterialIcons'

interface ICustomButton {
    iconName: string
    onPress?: () => void
}

export const CustomButton: FC<ICustomButton> = ({ iconName, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={style.container}>
            <IconM
                name={iconName}
                style={style.icon}
            />
        </TouchableOpacity>
    )
}