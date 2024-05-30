import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import style from './style'
import { example } from 'assets'
import { getProfilePhoto } from 'services/asyncStorage/asyncStorage'

export const ProfileImage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    useEffect(() => {
        const fetchProfilePhoto = async () => {
            const profileImage = await getProfilePhoto()
            setSelectedImage(profileImage)
        }
        fetchProfilePhoto()
    })

    return (
        <Image
            source={selectedImage ? { uri: selectedImage } : example}
            style={style.container}
        />
    )
}
