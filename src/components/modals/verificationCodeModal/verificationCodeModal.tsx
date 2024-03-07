import { View, Text, Modal, TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useTranslation } from 'react-i18next' //Multi Language
import colors from 'assets/colors/colors'
import Icon from 'react-native-vector-icons/Entypo' //Icons
import { useNavigation } from '@react-navigation/native'
import { NextButton } from 'components/nextButton/nextButton'

interface IVerificationCodeModal {
    visibleModal: boolean
    closeModal: () => void
    number: string
}

export const VerificationCodeModal: FC<IVerificationCodeModal> = ({ visibleModal, closeModal, number }) => {

    const { t } = useTranslation()
    const navigation = useNavigation<any>()

    const handleButton = () => {
        navigation.navigate('UserLoginInfoPage')
        closeModal()
    }
    
    return (
        <Modal
            visible={visibleModal}
            onRequestClose={closeModal}
            animationType="slide">
            <View style={style.container}>
                <Icon
                    name={"dots-three-vertical"}
                    size={18}
                    style={style.icon}
                />
                <Text style={style.title}>
                    {t("verifyingyournumber")}
                </Text>
                <Text style={style.infoText}>
                    {t("verifyingInfo")}
                </Text>
                <View style={style.innerContainer}>
                    <Text style={style.number}>
                        +90 {number}.
                    </Text>
                    <Text style={style.wrongNumber}>
                        {" "}{t("wrongNumber")}
                    </Text>
                </View>
                <TextInput
                    maxLength={6}
                    placeholder="— — —   — — —"
                    placeholderTextColor={colors.grey}
                    style={style.numberInput}
                    autoFocus
                    keyboardType='number-pad'
                />
                <Text style={style.receiveCodeText}>
                    {t("didntReceiveCode")}
                </Text>
                <NextButton onPress={handleButton} />
            </View>
        </Modal>
    )
}
