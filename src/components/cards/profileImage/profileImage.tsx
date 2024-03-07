import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import style from './style'
import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage

export const ProfileImage = () => {

    const [selectedImage, setSelectedImage] = useState()

    useEffect(() => {
        getProfilePhoto()
    })   

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
        <Image
            source={{ uri: selectedImage }}
            style={style.container}
        />
    )
}
