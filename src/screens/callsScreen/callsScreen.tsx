import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/FontAwesome6'
import { CustomButton } from 'components'
import { CallCard } from 'components/cards'

export const CallsScreen = () => {
    return (
        <View style={style.mainContainer}>
            <View style={style.headerSection}>
                <Icon
                    name={"link"}
                    style={style.linkIcon}
                />
                <View style={style.headerInnerSection}>
                    <Text style={style.headerTitle}>
                        Arama bağlantısı oluştur
                    </Text>
                    <Text style={style.headerDescription}>
                        WhatsApp aramanız için bağlantı paylaşın
                    </Text>
                </View>
            </View>
            <Text style={style.title}>
                En son
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
                    Kişisel aramalarınız
                    <Text style={style.innerInfoTextHighlight}>
                        {" "}uçtan uca şifrelidir
                    </Text>
                </Text>
            </View>
            <View style={style.floatingButtonSection}>
                <CustomButton iconName='add-ic-call' />
            </View>
        </View>
    )
}