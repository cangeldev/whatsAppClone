import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { useTranslation } from 'react-i18next' //Multi Language
import Icon from 'react-native-vector-icons/Entypo' //Icons
import IconI from 'react-native-vector-icons/MaterialIcons' //Icons
import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage
import colors from 'assets/colors/colors'
import { useNavigation } from '@react-navigation/native'

export const UserLoginInfoPage = () => {

    const { t } = useTranslation()
    const [name, setName] = useState("")
    const navigation = useNavigation<any>()

    const saveUsername = async (username: string) => {
        try {
            await AsyncStorage.setItem('username', username)
            navigation.navigate("HomeScreen")
        } catch (error) {
            console.error('Kullanıcı adını kaydetme hatası:', error)
        }
    }
    return (
        <View style={style.container}>
            <Icon
                name={"dots-three-vertical"}
                size={18}
                style={style.icon}
            />
            <Text style={style.title}>
                {t("profileInfo")}
            </Text>
            <Text style={style.infoText}>
                {t("profileInfoText")}
            </Text>
            <View style={style.inputView}>
                <TextInput
                    style={style.textInput}
                    placeholder={t("writeYourNameHere")}
                    placeholderTextColor={colors.grey}
                    onChangeText={setName}
                />

                <IconI
                    name={"tag-faces"}
                    size={24}
                    style={style.emojiIcon}
                />
                <TouchableOpacity
                    onPress={() => saveUsername(name)}
                >
                    <Text>
                        deneme
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
