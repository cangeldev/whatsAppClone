import { Text, Modal, View, FlatList } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { selectImageList } from 'utils/helper'
import { SelectImageCard } from 'components/cards'
import Icon from 'react-native-vector-icons/FontAwesome5' // Icons
import { useTranslation } from 'react-i18next' // Multi Language
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker'
import { saveProfileImage } from 'services/asyncStorage/asyncStorage'

interface IimagePickerModal {
    visibleModal: boolean
    closeModal: () => void
}

export const ImagePickerModal: FC<IimagePickerModal> = ({ visibleModal, closeModal }) => {
    const { t } = useTranslation()

    const selectImageRender = ({ item }: any) => (
        <SelectImageCard
            icon={item.iconName}
            title={item.name}
            onPress={item.void == "openImagePicker" ? openImagePicker : handleCameraLaunch}
        />
    )

    const openImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.errorCode) {
                console.log('Image picker error: ', response.errorMessage)
            } else {
                let imageUri = response.assets?.[0]?.uri
                if (imageUri) {
                    saveProfileImage(imageUri, closeModal)
                }
            }
        })
    }

    const handleCameraLaunch = () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera')
            } else if (response.errorCode) {
                console.log('Camera error: ', response.errorMessage)
            } else {
                let imageUri = response.assets?.[0]?.uri
                if (imageUri) {
                    saveProfileImage(imageUri, closeModal)
                }
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
