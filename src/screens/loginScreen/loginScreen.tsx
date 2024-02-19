import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Entypo' //Icons
import colors from 'assets/colors/colors'

export const LoginScreen = () => {
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
                Telefon numaranızı girin
            </Text>
            <Text style={style.headerText}>
                WhatsApp'ın hesabınızı doğrulaması gerekecek.
            </Text>
            <Text style={style.headerInfo}>
                Numaram nedir?
            </Text>
            <View style={style.selectCountryView}>
                <Text style={style.selectCountry}>
                    Türkiye
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
                    placeholder='telefon numarası'
                    placeholderTextColor={colors.grey}
                    style={style.numberInput}
                    autoFocus
                    keyboardType='number-pad'
                />
            </View>
            <Text style={style.info}>
                Operatörünüz tarafından ücret uygulanabilir
            </Text>
            <TouchableOpacity>
                <Text style={style.loginButton}>
                    İleri
                </Text>
            </TouchableOpacity>
        </View>
    )
}