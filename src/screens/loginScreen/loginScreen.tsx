import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Entypo' //Icons
import colors from 'assets/colors/colors'
import { useTranslation } from 'react-i18next' //Multi Language
import auth from '@react-native-firebase/auth' //Firebase
import { VerificationCodeModal } from 'components/modals'

export const LoginScreen = () => {

    const { t } = useTranslation()
    const [phoneNumber, setPhoneNumber] = useState('') // Telefon numarası 
    const [confirmCode, setConfirmCode] = useState('')  // doğrulama kodu
    const [verificationId, setVerificationId] = useState('')
    const [verificationModal, setVerificationModal] = useState(false) // doğrulama kodu giriş modal

    const handleSendCode = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(("+90" + phoneNumber))
            setVerificationId(confirmation.verificationId)
        } catch (error) {
            console.error('Phone authentication error:', error)
        }
    };

    const handleConfirmCode = async () => {
        try {
            const credential = auth.PhoneAuthProvider.credential(verificationId, confirmCode)
            await auth().signInWithCredential(credential)
        } catch (error) {
            console.error('Confirmation code error:', error)
        }
    }

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
        setPhoneNumber(formattedInput)
    }
    const toggleChatModal = () => {
        setVerificationModal(!verificationModal)
    }
    return (
        <View style={style.container}>
            <VerificationCodeModal
                closeModal={toggleChatModal}
                visibleModal={verificationModal}
                number={phoneNumber}
            />
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
            <TouchableOpacity
                // onPress={handleSendCode}
                onPress={toggleChatModal}
            >
                <Text style={style.loginButton}>
                    {t("next")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}