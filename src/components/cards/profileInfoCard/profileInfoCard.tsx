import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'

interface IProfileInfoCard {
    title: string,
    iconName: string
}
export const ProfileInfoCard: FC<IProfileInfoCard> = ({ iconName, title }) => {
    return (
        <View style={style.container}>
            <Icon
                name={iconName}
                style={style.icon}
            />
            <Text style={style.title}>
                {title}
            </Text>
        </View>
    )
}