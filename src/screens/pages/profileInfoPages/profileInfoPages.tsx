import React from 'react'
import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import colors from 'assets/colors/colors'
import style from './style'
import { example, negative, noEntry } from 'assets'
import { profileInfoList, profileSettingList } from 'utils/helper'
import { useNavigation } from '@react-navigation/native' //Navigation
import { useTranslation } from 'react-i18next' //Multi Language
import { ProfileImage, ProfileInfoCard, ProfileSettingsCard } from 'components/cards' //Components

//Icons
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconE from 'react-native-vector-icons/MaterialCommunityIcons'

export const ProfileInfoPages = () => {

    const navigation = useNavigation()
    const { t } = useTranslation()
    const renderProfileInfo =
        ({ item }: any) =>
            <ProfileInfoCard
                iconName={item.iconName}
                title={t(item.name)}
            />

    const renderProfileSetting =
        ({ item }: any) =>
            <ProfileSettingsCard
                title={t(item.title)}
                icon={item.iconName}
                description={t(item.description)}
                switchStatus={item.switchStatus}
            />

    return (
        <ScrollView style={style.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={colors.white}
            />
            <View style={style.headerContainer}>
                <View style={style.headerIconContainer}>
                    <IconM
                        name={"arrow-back"}
                        style={style.backIcon}
                        onPress={navigation.goBack}
                    />
                    <View style={style.profileContainer}>
                        <View style={style.ProfileImage}>
                            <ProfileImage
                                image={example}
                            />
                        </View>
                        <Text style={style.profileName}>
                            Can GEL
                        </Text>
                        <Text style={style.profileNumber}>
                            +90 535 237 71 92
                        </Text>
                    </View>
                    <IconE
                        name={"dots-vertical"}
                        style={style.backIcon}
                        onPress={navigation.goBack}
                    />
                </View>
                <FlatList
                    scrollEnabled={false}
                    horizontal
                    data={profileInfoList}
                    renderItem={renderProfileInfo}
                    contentContainerStyle={style.contentContainerStyle}
                />
            </View>
            <View style={style.settingsContainer}>
                <Text style={style.statusText}>
                    Uyuyor
                </Text>
                <Text style={style.statusDate}>
                    5 Ocak 2021
                </Text>
            </View>
            <View style={style.settingsContainer}>
                <FlatList
                    scrollEnabled={false}
                    data={profileSettingList.slice(0, 3)}
                    renderItem={renderProfileSetting}
                />
            </View>
            <View style={style.settingsContainer}>
                <FlatList
                    scrollEnabled={false}
                    data={profileSettingList.slice(3, 6)}
                    renderItem={renderProfileSetting}
                />
            </View>
            <View style={[style.settingsContainer, { marginBottom: 10 }]}>
                <ProfileSettingsCard
                    icon={noEntry}
                    title={t("block")}
                    red={true}
                />
                <ProfileSettingsCard
                    icon={negative}
                    title={t("report")}
                    red={true}
                />
            </View>
        </ScrollView>
    )
}