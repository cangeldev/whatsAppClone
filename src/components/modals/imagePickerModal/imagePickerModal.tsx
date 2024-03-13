import { Text, Modal, View, FlatList } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { selectImageList } from 'utils/helper'
import { SelectImageCard } from 'components/cards'

import Icon from 'react-native-vector-icons/FontAwesome5' // Icons
import { useTranslation } from 'react-i18next' // Multi Language
import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'

interface IimagePickerModal {
    visibleModal: boolean
    closeModal: () => void
}

export const ImagePickerModal: FC<IimagePickerModal> = ({ visibleModal, closeModal }) => {

    const { t } = useTranslation()

    const selectImageRender = ({ item }: any) =>
        <SelectImageCard
            icon={item.iconName}
            title={item.name}
            onPress={item.void == "openImagePicker" ? openImagePicker : handleCameraLaunch}
        />

    const saveProfileImage = async (profileImage: any) => {
        try {
            await AsyncStorage.setItem('profileImage', profileImage)
            closeModal()

        } catch (error) {
            console.error('Profil resmi kaydetme hatası:', error)
        }
    }

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('Image picker error: ', response.error)
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri
                saveProfileImage(imageUri)
                closeModal()
            }
        })
    }

    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled camera')
            } else if (response.error) {
                console.log('Camera Error: ', response.error)
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri
                saveProfileImage(imageUri)
            }
        })
    }

    return (
        <Modal
            statusBarTranslucent
            transparent
            visible={visibleModal}
            onRequestClose={closeModal}
            animationType="slide">
            <View style={style.container}>
                <View style={style.innerContainer}>
                    <Icon
                        name="minus"
                        style={style.iconMinus}
                    />
                    <Text
                        style={style.title}>
                        {t("profilePhoto")}
                    </Text>
                    <FlatList
                        data={selectImageList}
                        horizontal
                        renderItem={selectImageRender}
                    />
                </View>
            </View>
        </Modal>
    )
}
