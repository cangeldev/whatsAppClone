import React, { FC } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import style from './style'
import { useTranslation } from 'react-i18next' //Multi Language
import IconA from 'react-native-vector-icons/AntDesign' //Icons

interface IChannelCard {
    title: string
    image: any
}

export const ChannelCard: FC<IChannelCard> = ({ title, image }) => {

    const { t } = useTranslation()

    return (
        <View style={style.channelCardContainer}>
            <View>
                <View style={style.channelCardImage}>
                    <Image
                        source={image}
                        style={style.image}
                    />
                </View>
                <View style={style.iconContainer}>
                    <IconA
                        name={"checkcircle"}
                        style={style.channelCardIcon}
                    />
                </View>
            </View>
            <Text numberOfLines={1} style={style.channelCardTitle}>
                {title}
            </Text>
            <TouchableOpacity>
                <Text style={style.followButton}>
                    {t("follow")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}