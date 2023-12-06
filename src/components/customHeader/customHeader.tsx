import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import IconF from 'react-native-vector-icons/Feather'
import IconE from 'react-native-vector-icons/Entypo'
import IconFO from 'react-native-vector-icons/Fontisto'

export const CustomHeader = () => {
    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.whatsAppGreen}
                barStyle={'light-content'}
            />
            <Text style={style.title}>
                WhatsApp
            </Text>
            <View style={style.iconContainer}>
                <IconF
                    name={"camera"}
                    style={style.icon}
                />
                <IconFO
                    name={"search"}
                    style={style.iconMiddle}
                />
                <IconE
                    name={"dots-three-vertical"}
                    style={style.icon}
                />
            </View>
        </View>
    )
}