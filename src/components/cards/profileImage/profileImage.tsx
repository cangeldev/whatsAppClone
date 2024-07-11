import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import style from './style'
import { example } from 'assets' //Images
import { getUserData } from 'services/firebase/firebase' //Firebase

export const ProfileImage = () => {

    const [profileImage, setProfileImage] = useState()
    const imageSource = profileImage ? { uri: profileImage as any } : example

    useEffect(() => {
        const getUsers = async () => {
            const fetchedUsersInfo = await getUserData("profileImageUrl")
            setProfileImage(fetchedUsersInfo)
        }
        getUsers()
    }, [])

    return (
        <Image
            source={imageSource}
            style={style.container}
        />
    )
}
