import { View } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'

interface IButtonIcon {
    icon: string
}

export const IconButton: FC<IButtonIcon> = ({ icon }) => {
    return (
        <Icon
            onPress={() => console.log("first")}
            name={icon}
            style={style.icon}
        />
    )
}
