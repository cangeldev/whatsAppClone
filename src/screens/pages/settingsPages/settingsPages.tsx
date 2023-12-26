import { View, Text, Image, StatusBar, FlatList, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { example, group, meta } from 'assets'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconE from 'react-native-vector-icons/AntDesign'
import colors from 'assets/colors/colors'
import { SettingsCard, SettingsMenuCard } from 'components/cards'
import { settingsList } from 'utils/helper'

export const SettingsPages = () => {

    const render = ({ item }: any) =>
        <SettingsMenuCard
            icon={item.image}
            description={item.text}
            title={item.title}
        />

    return (
        <ScrollView style={style.container}>
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
                    scrollEnabled={false}
                    data={settingsList}
                    renderItem={render}
                    keyExtractor={(item, index) => index.toString()}
                />
                <SettingsCard
                    icon={group}
                    title='Arkadaşları davet edin'
                />
            </View>
            <Text style={style.description}>
                from
            </Text>
            <View style={style.titleView}>
            <Image
                    source={meta}
                    style={style.metaImage}
                />
                <Text style={style.title}>
                    Meta
                </Text>
            </View>
        </ScrollView>
    )
}
