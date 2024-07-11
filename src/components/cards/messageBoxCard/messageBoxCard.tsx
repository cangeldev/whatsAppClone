import React, { FC } from 'react'
import { View, Text } from 'react-native'
import style from './style'
import IconM from 'react-native-vector-icons/MaterialIcons' // Icons

interface IMessageBoxCard {
    info: 'to' | 'from',
    message: string
}
const MESSAGE_TIME = "15.02"

export const MessageBoxCard: FC<IMessageBoxCard> = React.memo(({ info, message }) => {

    const isTo = info === "to"
    const isFrom = info === "from"
    const containerStyle = isTo ? style.toContainer : style.fromContainer
    const iconStyle = isTo ? style.toIcon : style.fromIcon

    return (
        <View style={[style.baseContainer, containerStyle]}>
            <IconM
                name={"mode-comment"}
                style={[style.baseIcon, iconStyle]}
            />
            <Text style={style.message}>
                {message}
            </Text>
            <Text style={style.messageInfo}>
                {MESSAGE_TIME} {isFrom && <Text style={{ letterSpacing: -3 }}>✓✓</Text>}
            </Text>
        </View>
    )
})
