import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { example } from 'assets'
import IconA from 'react-native-vector-icons/AntDesign'


export const ChannelCard = () => {
    return (
        <View style={style.channelCardContainer}>
            <View>
                <Image
                    source={example}
                    style={style.channelCardImage}
                />
                <View style={style.iconContainer}>
                    <IconA
                        name={"checkcircle"}
                        style={style.channelCardIcon}
                    />
                </View>
            </View>
            <Text numberOfLines={1} style={style.channelCardTitle}>
                SURVİVOR TÜRKİYE
            </Text>
            <TouchableOpacity>
                <Text style={style.followButton}>
                    Takip et
                </Text>
            </TouchableOpacity>
        </View>
    )
}