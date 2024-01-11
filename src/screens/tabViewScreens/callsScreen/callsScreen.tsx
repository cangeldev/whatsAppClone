import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
import { useTranslation } from 'react-i18next' //Multi Language

//Icons
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/FontAwesome6'

//Components
import { CustomButton } from 'components'
import { CallCard } from 'components/cards'

export const CallsScreen = () => {

    const { t } = useTranslation()

    return (
        <View style={style.mainContainer}>
            <View style={style.headerSection}>
                <IconI
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
            <View>
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