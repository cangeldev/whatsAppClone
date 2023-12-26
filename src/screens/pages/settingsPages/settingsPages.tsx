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
            icon={item.image}
            description={item.text}
            title={item.title}
        />

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.whatsAppGreen}
            />
            <View style={style.headerContainer}>
                <Image
                    source={example}
                    style={style.profileImage}
                />
                <View style={style.textContainer}>
                    <Text style={style.nameText}>
                        Can GEL
                    </Text>
                    <Text>
                        Deneme Metni
                    </Text>
                </View>

                <View style={style.iconContainer}>
                    <IconF
                        name={"qrcode"}
                        style={style.iconStyle}
                    />
                    <IconE
                        name={"downcircleo"}
                        style={style.iconStyle}
                    />
                </View>
            </View>
            <View style={style.dividerLine} />
            <View style={style.settingsContainer}>
                <FlatList
                    data={settingsList}
                    renderItem={render}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}
