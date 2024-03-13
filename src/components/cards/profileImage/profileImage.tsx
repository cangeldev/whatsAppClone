import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import style from './style'
import AsyncStorage from '@react-native-async-storage/async-storage' //AsyncStorage
import { example } from 'assets'

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

    if (!selectedImage) {
        return (
            <Image
                source={example}
                style={style.container}
            />
        )
    }

    return (
        <Image
            source={{ uri: selectedImage }}
            style={style.container}
        />
    )
}
