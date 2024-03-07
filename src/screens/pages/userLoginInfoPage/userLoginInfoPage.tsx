import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import { useTranslation } from 'react-i18next' //Multi Language
import Icon from 'react-native-vector-icons/Entypo' //Icons
import IconI from 'react-native-vector-icons/MaterialIcons' //Icons
import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage
import colors from 'assets/colors/colors'
import { useNavigation } from '@react-navigation/native'

import { ImagePickerModal } from 'components/modals'
export const UserLoginInfoPage = () => {
    const [selectedImage, setSelectedImage] = useState()
    const [imagePickerModal, setImagePickerModal] = useState(false)
    const { t } = useTranslation()
    const [name, setName] = useState("")
    const navigation = useNavigation<any>()
    useEffect(() => {
        getProfilePhoto()
    })
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

    const getProfilePhoto = async () => {
        try {
            const profileImage = await AsyncStorage.getItem('profileImage')
            if (profileImage !== null) {
                setSelectedImage(profileImage as any)

            } else {
                console.log('Kullanıcı resmi bulunamadı.')
            }
        } catch (error) {
            console.error('Kullanıcı adını alma hatası:', error)
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

            <Pressable onPress={toggleImagePickerModal}>
                <View style={{ width: 150, height: 150 }}>
                    <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%' }} />
                </View>
            </Pressable>
            <ImagePickerModal
                closeModal={toggleImagePickerModal}
                visibleModal={imagePickerModal}
            />
        </View>
    )
}
