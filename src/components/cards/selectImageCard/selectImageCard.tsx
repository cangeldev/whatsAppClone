import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import style from './style'

import Icon from 'react-native-vector-icons/FontAwesome5' // Icons
import { useTranslation } from 'react-i18next' //Multi Language

interface ISelectImageCard {
    title: string
    icon: string
    onPress?: () => void
}

export const SelectImageCard: FC<ISelectImageCard> = ({ icon, title, onPress }) => {

    const { t } = useTranslation()

    return (
        <Pressable
            style={style.container}
            onPress={onPress}>
            <View style={style.iconView}>
                <Icon
                    name={icon}
                    style={style.icon}
                />
            </View>
            <Text>
                {t(title)}
            </Text>
        </Pressable>
    )
}
