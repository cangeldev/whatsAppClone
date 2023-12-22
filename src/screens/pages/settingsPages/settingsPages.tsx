import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import { example } from 'assets'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconE from 'react-native-vector-icons/AntDesign'
import colors from 'assets/colors/colors'

export const SettingsPages = () => {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={colors.whatsAppGreen}/>
            <View style={style.headerView}>
                <Image
                    source={example}
                    style={style.image}
                />
                <View style={style.textView}>
                    <Text style={style.name}>
                        Can GEL
                    </Text>
                    <Text>
                        Deneme Metni
                    </Text>
                </View>

                <View style={style.iconView}>
                    <IconF
                        name={"qrcode"}
                        style={style.icon}
                    />
                    <IconE
                        name={"downcircleo"}
                        style={style.icon}
                    />
                </View>
            </View>
            <View style={style.divider} />
        </View>
    )
}
