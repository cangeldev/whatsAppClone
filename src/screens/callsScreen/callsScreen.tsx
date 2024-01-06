import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/FontAwesome6'
import { CustomButton } from 'components'
import { CallCard } from 'components/cards'
import { useTranslation } from 'react-i18next'

export const CallsScreen = () => {

    const { t } = useTranslation()
    return (
        <View style={style.mainContainer}>
            <View style={style.headerSection}>
                <Icon
                    name={"link"}
                    style={style.linkIcon}
                />
                <View style={style.headerInnerSection}>
                    <Text style={style.headerTitle}>
                        {t("callScreentextOne")}
                    </Text>
                    <Text style={style.headerDescription}>
                        {t("callScreentextTwo")}
                    </Text>
                </View>
            </View>
            <Text style={style.title}>
                {t("recent")}
            </Text>
            {/* temize geçir kaldır ileride  */}
            <View >
                <CallCard />
                <CallCard />
            </View>
            <View style={style.sectionDivider} />
            <View style={style.infoSection}>
                <IconF
                    name={"lock"}
                    style={style.infoIcon}
                />
                <Text style={style.infoText}>
                    {t("infoTextOne")}
                    <Text style={style.innerInfoTextHighlight}>
                        {""} {t("infoTextTwo")}
                    </Text>
                </Text>
            </View>
            <View style={style.floatingButtonSection}>
                <CustomButton iconName='add-ic-call' />
            </View>
        </View>
    )
}