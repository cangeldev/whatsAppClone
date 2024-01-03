import { View, Text } from 'react-native'
import React, { FC } from 'react'
import IconM from 'react-native-vector-icons/MaterialIcons'
import style from './style'

interface IMessageBoxCard {
    info: string
}
export const MessageBoxCard: FC<IMessageBoxCard> = ({ info }) => {
    return (
        <View style={[style.baseContainer, info == "to" ? style.toContainer : style.fromContainer]}>
            <IconM
                name={"mode-comment"}

                style={[style.baseIcon, info == "to" ? style.toIcon : style.fromIcon]}
            />
            <Text style={style.message}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus possimus nobis, nis!
            </Text>

            <Text style={style.messageInfo}>
                15.02{" "}
                {
                    info == "from" ?
                        <Text style={{ letterSpacing: -3 }}>
                            ✓✓
                        </Text> : null
                }
            </Text>
        </View>
    )
}
