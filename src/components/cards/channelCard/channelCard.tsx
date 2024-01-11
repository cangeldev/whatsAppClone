import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'
import { example } from 'assets'
import { useTranslation } from 'react-i18next' //Multi Language
import IconA from 'react-native-vector-icons/AntDesign' //Icons
import { ProfileImage } from '../profileImage/profileImage' //Components

export const ChannelCard = () => {
    const { t } = useTranslation()
    return (
        <View style={style.channelCardContainer}>
            <View>
                <View style={style.channelCardImage}>
                    <ProfileImage
                        image={example}
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
                Deneme kanalı
            </Text>
            <TouchableOpacity>
                <Text style={style.followButton}>
                    {t("follow")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}