import React from 'react'
import { View, Text, FlatList } from 'react-native'
import style from './style'
import { useTranslation } from 'react-i18next'

//Icons
import IconE from 'react-native-vector-icons/Entypo'
import IconA from 'react-native-vector-icons/AntDesign'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

//Components
import { CustomButton, NextButton } from 'components'
import { ChannelCard, ProfileImage } from 'components/cards'
import { channelsList } from 'utils/helper'

export const StatusScreen = () => {

    const { t } = useTranslation()

    const renderChannel = ({ item }: any) =>
        <ChannelCard
            image={item.image}
            title={item.title}
        />

    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.headerText}>
                    {t("status")}
                </Text>
                <IconE
                    name={"dots-three-vertical"}
                    size={20}
                />
            </View>
            <View style={style.statusSection}>
                <View style={style.userImageContainer}>
                    <View style={style.userImage}>
                        <ProfileImage />
                    </View>
                    <IconA
                        name={"pluscircle"}
                        style={style.plusIcon}
                    />
                </View>
                <View>
                    <Text style={style.statusTitle}>
                        {t("myStatus")}
                    </Text>
                    <Text style={style.statusDescription}>
                        {t("statusScreenTextOne")}
                    </Text>
                </View>
            </View>
            <View style={style.dividerLine} />
            <View style={style.headerContainer}>
                <Text style={style.headerText}>
                    {t("channels")}
                </Text>
                <IconE
                    name={"plus"}
                    size={24}
                />
            </View>
            <Text style={style.informationText}>
                {t("statusScreenTextTwo")}
            </Text>
            <View style={style.addButtonContainer}>
                <CustomButton
                    iconName='camera-alt'
                />
            </View>
            <View style={style.channelCardsContainer}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={channelsList}
                    renderItem={renderChannel}
                />
            </View>
            <View style={style.nextButtonView}>
                <NextButton title='exploreMore' />
            </View>
            <IconM
                name={"pencil"}
                style={style.editIcon}
            />
        </View>
    )
}