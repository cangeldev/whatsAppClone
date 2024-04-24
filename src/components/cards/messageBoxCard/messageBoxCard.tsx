import React, { FC } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import IconM from 'react-native-vector-icons/MaterialIcons' //Icons

interface IMessageBoxCard {
    info: string
}

export const MessageBoxCard: FC<IMessageBoxCard> = ({ info }) => {

    const isTo = info === "to"
    const isFrom = info === "from"
    const containerStyle = isTo ? style.toContainer : style.fromContainer
    const iconStyle = isTo ? style.toIcon : style.fromIcon

    const messageInfoText = isFrom ? (
        <Text style={{ letterSpacing: -3 }}>
            ✓✓
        </Text>
    ) : null

    return (
        <View style={[style.baseContainer, containerStyle]}>
            <IconM
                name={"mode-comment"}
                style={[style.baseIcon, iconStyle]}
            />
            <Text style={style.message}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus possimus nobis, nis!
            </Text>
            <Text style={style.messageInfo}>
                15.02  {messageInfoText}
            </Text>
        </View>
    )
}
