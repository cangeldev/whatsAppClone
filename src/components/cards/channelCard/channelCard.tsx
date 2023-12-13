import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { example } from 'assets'
import IconA from 'react-native-vector-icons/AntDesign'


export const ChannelCard = () => {
    return (
        <View style={style.container}>
            <View>
                <Image
                    source={example}
                    style={style.image}
                />
                <View style={style.iconView}>
                    <IconA
                        name={"checkcircle"}
                        style={style.imageIcon}
                    />
                </View>
            </View>
            <Text numberOfLines={1} style={style.title}>
                SURVİVOR TÜRKİYE
            </Text>
            <TouchableOpacity>
                <Text style={style.buttonText}>
                    Takip et
                </Text>
            </TouchableOpacity>
        </View>
    )
}