import React, { FC } from 'react'
import { Image } from 'react-native'
import style from './style'

interface IProfileImage {
    image: Image
}

export const ProfileImage: FC<IProfileImage> = ({ image }) => {
    return (
        <Image
            source={image as any}
            style={style.container}
        />
    )
}
