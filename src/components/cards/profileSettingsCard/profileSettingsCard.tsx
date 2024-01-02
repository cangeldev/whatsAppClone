import { View, Text, Image, Switch } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'
import colors from 'assets/colors/colors'

interface IProfileSettingsCard {
    icon: Image
    title: string
    switchStatus?: boolean
    description?: string | null
    red?: boolean
}

export const ProfileSettingsCard: FC<IProfileSettingsCard> = ({ title, icon, switchStatus = false, description = null, red = false }) => {

    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const switchStyle = isEnabled ? [style.switch, style.switchEnabled] : [style.switch, style.switchDisabled]
    const switchTrackColor = isEnabled ? colors.whatsAppGreen : "#f1f2f6"
    const switchThumbColor = isEnabled ? colors.white : '#83919a'

    return (
        <View style={style.container}>
            <Image
                source={icon as any}
                style={red ? [style.icon, { tintColor: colors.red }] : style.icon}
            />
            <View style={{ flex: 1 }}>
                <Text style={red ? [style.titleText, { color: colors.red }] : style.titleText}>
                    {title}
                </Text>
                {description !== null && <Text>{description}</Text>}
            </View>
            {switchStatus && (
                <View style={switchStyle}>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        thumbColor={switchThumbColor}
                        trackColor={{ false: "#f1f2f6", true: switchTrackColor }}
                    />
                </View>
            )}
        </View>
    )
}
