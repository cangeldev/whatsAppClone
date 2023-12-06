import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { CustomHeader } from 'components'

export const HomeScreen = () => {
    return (
        <View style={style.container}>
            <CustomHeader />
        </View>
    )
}
