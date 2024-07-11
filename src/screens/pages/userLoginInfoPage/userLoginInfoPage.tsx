import { View, Text, TextInput, Pressable, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import { useNavigation } from '@react-navigation/native' //Navigation
import { useTranslation } from 'react-i18next' //Multi Language
import { currentUser, saveUserProfile, uploadProfileImage } from 'services/firebase/firebase' //Firebase

//Icons
import Icon from 'react-native-vector-icons/Entypo'
import IconI from 'react-native-vector-icons/MaterialIcons' //Icons

//Components
import { ImagePickerModal } from 'components/modals'
import { NextButton, StatusBarComponent } from 'components'

//Redux Toolkit
import { useDispatch, useSelector } from 'react-redux'
import { setProfileName } from 'services/features/userSlice'
import { RootState } from 'services/features/store'
import { example } from 'assets'

export const UserLoginInfoPage = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const navigation = useNavigation<any>()
    const profileImage = useSelector((state: RootState) => state.users.UserInfo.profileImage)
    const [imagePickerModal, setImagePickerModal] = useState(false)
    const [name, setName] = useState("")
    const phoneNumber = useSelector((state: RootState) => state.users.UserInfo.phoneNumber)
    const toggleImagePickerModal = () => {
        setImagePickerModal(!imagePickerModal)
    }

    const saveUserProfileToFirebase = async (phoneNumber: string, username: string, profileImage: string) => {
        try {
            const user = currentUser()
            if (user) {
                const profileImageUrl = await uploadProfileImage(user.uid, { uri: profileImage })
                await saveUserProfile(phoneNumber, user.uid, username, profileImageUrl)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const saveUsername = async (username: string) => {
        if (username == "") {
            Alert.alert(
                t("loginFailed"),
                t("nameFailedText")
            )
        }
        else if (!profileImage) {
            Alert.alert(
                t("loginFailed"),
                t("imageFailedText")
            )
        }
        else {
            await saveUserProfileToFirebase(phoneNumber, username, profileImage)
            dispatch(setProfileName(username))
            navigation.navigate("HomeScreen")
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
                    <Image
                        source={profileImage ? { uri: profileImage } : example}
                        style={style.profileImage} />
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
