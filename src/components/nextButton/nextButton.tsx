import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
style
import { useTranslation } from 'react-i18next' //Multi Language
import style from './style'

interface INextButton {
    onPress?: () => void
    title?: string
}

export const NextButton: FC<INextButton> = ({ onPress, title }) => {

    const { t } = useTranslation()

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text style={style.container}>
                {title != null ? t(title) : t("next")}
            </Text>
        </TouchableOpacity>
    )
}