import { View, Text, Image, StatusBar, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { example } from 'assets'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconE from 'react-native-vector-icons/AntDesign'
import colors from 'assets/colors/colors'
import { SettingsMenuCard } from 'components/cards'
import { settingsList } from 'utils/helper'

export const SettingsPages = () => {

    const render = ({ item }: any) =>
        <SettingsMenuCard
            image={item.image}
            text={item.text}
            title={item.title}
        />

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.whatsAppGreen}
            />
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
            <View style={style.settingsView}>
                <FlatList
                    data={settingsList}
                    renderItem={render}
                />
            </View>
        </View>
    )
}
