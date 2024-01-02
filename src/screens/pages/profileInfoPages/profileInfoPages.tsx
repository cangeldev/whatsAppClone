import { View, Text, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from 'assets/colors/colors'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconE from 'react-native-vector-icons/MaterialCommunityIcons'
import { example, negative, noEntry } from 'assets'
import { ProfileInfoCard, ProfileSettingsCard } from 'components/cards'
import { FlatList } from 'react-native-gesture-handler'
import { profileInfoList, profileSettingList } from 'utils/helper'

export const ProfileInfoPages = () => {
    const navigation = useNavigation()

    const renderProfileInfo =
        ({ item }: any) =>
            <ProfileInfoCard
                iconName={item.iconName}
                title={item.name}
            />

    const renderProfileSetting =
        ({ item }: any) =>
            <ProfileSettingsCard
                title={item.title}
                icon={item.iconName}
                description={item.description}
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
                        <Image
                            source={example}
                            style={style.ProfileImage}
                        />
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
                    title='Can kişisini engelle'
                    red={true}
                />
                <ProfileSettingsCard
                    icon={negative}
                    title='Can kişisini şikayet et'
                    red={true}
                />
            </View>
        </ScrollView>
    )
}