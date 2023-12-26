import { TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import IconM from 'react-native-vector-icons/MaterialIcons'

interface ICustomButton {
    iconName: string
}

export const CustomButton: FC<ICustomButton> = ({ iconName }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log("first")}
            style={style.container}>
            <IconM
                name={iconName}
                style={style.icon}
            />
        </TouchableOpacity>
    )
}