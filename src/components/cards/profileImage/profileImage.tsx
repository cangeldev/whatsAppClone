import React from 'react'
import { Image } from 'react-native'
import style from './style'
import { example } from 'assets'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

export const ProfileImage = () => {
    const profileImage = useSelector((state: RootState) => state.users.UserInfo.profileImage)
    const imageSource = profileImage ? { uri: profileImage as any } : example
    return (
        <Image
            source={imageSource}
            style={style.container}
        />
    )
}
