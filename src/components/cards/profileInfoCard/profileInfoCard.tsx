import React, { FC } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' //Icons

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