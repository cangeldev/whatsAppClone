import React from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import style from './style'
import { group, meta } from 'assets'
import { ProfileImage, SettingsCard, SettingsMenuCard } from 'components/cards' //Components
import { settingsList } from 'utils/helper'
import { useTranslation } from 'react-i18next' //Multi Language

//Icons
import IconF from 'react-native-vector-icons/FontAwesome'
import IconE from 'react-native-vector-icons/AntDesign'

export const SettingsPages = () => {

    const { t } = useTranslation()
    const render = ({ item }: any) =>
        <SettingsMenuCard
            icon={item.image}
            description={t(item.text)}
            title={t(item.title)}
            navigationPage={item.navigationPage}
        />

    return (
        <ScrollView style={style.container}>
            <View style={style.headerContainer}>
                <View style={style.profileImage}>
                    <ProfileImage />
                </View>
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
                    title={t("inviteAFriend")}
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
