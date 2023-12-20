import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/FontAwesome6'
import { CustomButton } from 'components'
import { CallCard } from 'components/cards'

export const CallsScreen = () => {
    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <Icon
                    name={"link"}
                    style={style.linkIcon}
                />
                <View style={style.headerInnerView}>
                    <Text style={style.headerViewTitle}>
                        Arama bağlantısı oluştur
                    </Text>
                    <Text style={style.headerViewText}>
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
            <View style={style.divider} />
            <View style={style.infoView}>
                <IconF
                    name={"lock"}
                    style={style.icon}
                />
                <Text style={style.infoText}>
                    Kişisel aramalarınız
                    <Text style={style.innerInfoText}>
                        {" "}uçtan uca şifrelidir
                    </Text>
                </Text>
            </View>
            <View style={style.buttonView}>
                <CustomButton iconName='add-ic-call' />
            </View>
        </View>
    )
}