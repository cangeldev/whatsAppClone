import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Entypo' //Icons
import colors from 'assets/colors/colors'
import { useTranslation } from 'react-i18next' //Multi Language

export const LoginScreen = () => {

    const { t } = useTranslation()

    return (
        <View style={style.container}>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={"white"}
            />
            <Icon
                name={"dots-three-vertical"}
                size={18}
                style={style.icon}
            />
            <Text style={style.headerTitle}>
                {t("enterYourNumber")}
            </Text>
            <Text style={style.headerText}>
                {t("verifyYourAccount")}
            </Text>
            <Text style={style.headerInfo}>
                {t("whatsMyNumber")}
            </Text>
            <View style={style.selectCountryView}>
                <Text style={style.selectCountry}>
                    {t("turkey")}
                </Text>
                <Icon
                    name={"triangle-down"}
                    size={18}
                    style={style.downIcon}
                />
            </View>
            <View style={style.numberView}>
                <Text style={style.numberText}>
                    +    <Text style={style.innerText}>
                        90
                    </Text>
                </Text>
                <TextInput
                    placeholder={t("phoneNumber")}
                    placeholderTextColor={colors.grey}
                    style={style.numberInput}
                    autoFocus
                    keyboardType='number-pad'
                />
            </View>
            <Text style={style.info}>
                {t("carrierChargesMayApply")}
            </Text>
            <TouchableOpacity>
                <Text style={style.loginButton}>
                    {t("next")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}