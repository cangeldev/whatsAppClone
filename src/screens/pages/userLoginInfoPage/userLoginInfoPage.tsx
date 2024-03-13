import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState} from 'react'
import style from './style'
import { useTranslation } from 'react-i18next' //Multi Language
import Icon from 'react-native-vector-icons/Entypo' //Icons
import IconI from 'react-native-vector-icons/MaterialIcons' //Icons
import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage
import colors from 'assets/colors/colors'
import { useNavigation } from '@react-navigation/native'
import { ImagePickerModal } from 'components/modals'
import { NextButton, StatusBarComponent } from 'components'
import { ProfileImage } from 'components/cards'

export const UserLoginInfoPage = () => {

    const { t } = useTranslation()
    const navigation = useNavigation<any>()

    const [imagePickerModal, setImagePickerModal] = useState(false)
    const [name, setName] = useState("")

    const toggleImagePickerModal = () => {
        setImagePickerModal(!imagePickerModal)
    }

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
            <StatusBarComponent />
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
            <Pressable onPress={toggleImagePickerModal}>
                <View style={style.profileImageView}>
                    <ProfileImage />
                </View>
            </Pressable>
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
            </View>
            <ImagePickerModal
                closeModal={toggleImagePickerModal}
                visibleModal={imagePickerModal}
            />
            <View style={style.buttonView}>
                <NextButton
                    onPress={() => saveUsername(name)}
                />
            </View>
        </View>
    )
}
