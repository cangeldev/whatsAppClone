import { Text, Button, Modal } from 'react-native'
import React, { FC } from 'react'
import { launchImageLibrary,  } from 'react-native-image-picker'

import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage

interface IimagePickerModal {
    visibleModal: boolean
    closeModal: () => void
}

export const ImagePickerModal: FC<IimagePickerModal> = ({ visibleModal, closeModal }) => {

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
        };

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
        });
    };
    
    return (
        <Modal
            visible={visibleModal}
            onRequestClose={closeModal}
            animationType="slide"
        >
            <Text>imagePickerModal</Text>
            <Button title="Choose from Device" onPress={openImagePicker} />
           

        </Modal>
    )
}
