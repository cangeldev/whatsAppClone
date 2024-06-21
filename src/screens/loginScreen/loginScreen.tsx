import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Entypo'
import colors from 'assets/colors/colors'
import { useTranslation } from 'react-i18next'
import { VerificationCodeModal } from 'components/modals'
import { NextButton, StatusBarComponent } from 'components'
import {  signInWithPhoneNumber } from 'services/firebase/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'services/features/store'
import { setNumber, setVerificationId } from 'services/features/userSlice'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation()
    const [verificationModal, setVerificationModal] = useState(false) // doğrulama kodu giriş modal
    const { phoneNumber } = useSelector((state: RootState) => state.users.UserInfo);
    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

    // Telefon numarası girişinde sayıları ayırmak için
    const handleNumberChange = (input: any) => {
        // Girilen değeri boşlukları ekleyerek formatlayan fonksiyon
        const formatNumber = (input: any) => {
            input = input.replace(/\D/g, '') // Sayısal olmayan karakterleri kaldır
            let formattedNumber = ''
            for (let i = 0; i < input.length; i++) {
                if (i === 3 || i === 6) {
                    formattedNumber += ' ' // 3. ve 6. hanelerden sonra boşluk ekle
                }
                if (i === 8) {
                    formattedNumber += ' ' // 8. hane sonrasında boşluk ekle
                }
                formattedNumber += input[i]
            }
            return formattedNumber
        }

        const formattedInput = formatNumber(input)
        dispatch(setNumber(formattedInput))
    }

    const toggleChatModal = async () => {
        if (phoneNumber.length !== 13) {
            Alert.alert(
                t("loginFailed"),
                t("loginFailedText")
            )
        } else {
            try {
                const confirmation = await signInWithPhoneNumber(phoneNumber);
                if (confirmation) {
                    setConfirm(confirmation);
                    dispatch(setVerificationId(confirmation.verificationId));
                    setVerificationModal(!verificationModal)
                }

            } catch (error) {
                Alert.alert(
                    t("loginFailed"),
                    t("phoneAuthError")
                )
            }
        }
    }

    return (
        <View style={style.container}>
            <StatusBarComponent />
            <VerificationCodeModal
                confirmation={confirm}
                closeModal={toggleChatModal}
                visibleModal={verificationModal}
                number={phoneNumber}
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
                    maxLength={13}
                    placeholder={t("phoneNumber")}
                    placeholderTextColor={colors.grey}
                    style={style.numberInput}
                    autoFocus
                    keyboardType='number-pad'
                    value={phoneNumber}
                    onChangeText={handleNumberChange}
                />
            </View>
            <Text style={style.info}>
                {t("carrierChargesMayApply")}
            </Text>
            <NextButton onPress={toggleChatModal} />
        </View>
    )
}
