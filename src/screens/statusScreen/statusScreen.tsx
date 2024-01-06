import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import IconA from 'react-native-vector-icons/AntDesign'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'
import { example } from 'assets'
import { CustomButton } from 'components'
import { ChannelCard } from 'components/cards'
import { useTranslation } from 'react-i18next'

export const StatusScreen = () => {

    const { t } = useTranslation()
    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.headerText}>
                    {t("status")}
                </Text>
                <Icon
                    name={"dots-three-vertical"}
                    size={20}
                />
            </View>
            <View style={style.statusSection}>
                <View style={style.userImageContainer}>
                    <Image
                        source={example}
                        style={style.userImage}
                    />
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
                <Icon
                    name={"plus"}
                    size={24}
                />
            </View>
            <Text style={style.informationText}>
                {t("statusScreenTextTwo")}
            </Text>
            <View style={style.addButtonContainer}>
                <CustomButton iconName='camera-alt' />
            </View>
            <View style={style.channelCardsContainer}>
                <ChannelCard />
                <ChannelCard />
            </View>
            <TouchableOpacity>
                <Text style={style.exploreButtonText}>
                    {t("exploreMore")}
                </Text>
            </TouchableOpacity>
            <IconM
                name={"pencil"}
                style={style.editIcon}
            />
        </View>
    )
}