import React, { FC, useState } from 'react'
import { View, Text, Image, Switch, ImageSourcePropType } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'

interface IProfileSettingsCard {
    icon: ImageSourcePropType
    title: string
    switchStatus?: boolean
    description?: string | null
    red?: boolean
}

export const ProfileSettingsCard: FC<IProfileSettingsCard> = ({
    icon,
    title,
    switchStatus = false,
    description = null,
    red = false
}) => {
    const [isEnabled, setIsEnabled] = useState(switchStatus)

    const toggleSwitch = () => setIsEnabled(prevState => !prevState)

    const switchStyle = {
        ...style.switch,
        ...(isEnabled ? style.switchEnabled : style.switchDisabled)
    }

    const iconStyle = red ? [style.icon, { tintColor: colors.red }] : style.icon
    const titleStyle = red ? [style.titleText, { color: colors.red }] : style.titleText

    return (
        <View style={style.container}>
            <Image source={icon} style={iconStyle} />
            <View style={{ flex: 1 }}>
                <Text style={titleStyle}>{title}</Text>
                {description !== null ? <Text>{description}</Text> : null}
            </View>
            {switchStatus && (
                <View style={switchStyle}>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        thumbColor={isEnabled ? colors.white : '#83919a'}
                        trackColor={{
                            false: '#f1f2f6',
                            true: isEnabled ? colors.whatsAppGreen : '#f1f2f6'
                        }}
                    />
                </View>
            )}
        </View>
    )
}
