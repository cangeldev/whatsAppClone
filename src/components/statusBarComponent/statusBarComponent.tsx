import { StatusBar } from 'react-native'
import React, { FC } from 'react'
import colors from 'assets/colors/colors'

interface IStatusBar {
    bgColor?: string
}

export const StatusBarComponent: FC<IStatusBar> = ({ bgColor }) => {
    return (
        <StatusBar
            backgroundColor={bgColor || "white"}
            barStyle={'dark-content'} />
    )
}
