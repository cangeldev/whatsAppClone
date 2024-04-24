import { StatusBar } from 'react-native'
import React, { FC } from 'react'

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
