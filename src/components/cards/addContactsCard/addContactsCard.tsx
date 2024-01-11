import React, { FC } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' // Icons

interface IAddContactsCard {
    icon: string
    title: string
}

export const AddContactsCard: FC<IAddContactsCard> = ({ icon, title }) => {
    return (
        <View style={style.container}>
            <Icon
                name={icon}
                style={style.icon}
            />
            <Text style={style.title}>
                {title}
            </Text>
            {
                icon == "account-plus" ?
                    <Icon
                        name={"qrcode"}
                        style={style.qrIcon}
                    /> : null
            }
        </View>
    )
}
