import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { ChatCard } from 'components/cards'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { CustomButton } from 'components'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

export const ChatsScreen = () => {

    const { t } = useTranslation()
    const navigation = useNavigation<any>()
    const toogleButton = () => {
        navigation.navigate("ContactsPages")
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <Text style={style.text}>
                    {t("ChatscreenTextOne")}
                </Text>
                <View style={style.divider} />
                <View style={style.infoView}>
                    <Icon
                        name={"lock"}
                        style={style.icon}
                    />
                    <Text style={style.infoText}>
                        {t("infoTextOne")}
                        <Text style={style.innerInfoText}>
                            {" "}{t("infoTextTwo")}
                        </Text>
                    </Text>
                </View>
            </ScrollView>
            <View style={style.buttonView}>
                <CustomButton
                    iconName='comment'
                    onPress={toogleButton}
                />
            </View>
        </View>
    )
}
