import React, { FC, useState, useMemo } from 'react'
import { View, Text, Image, Switch, ImageSourcePropType } from 'react-native'
import styles from './style'
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

    const switchStyle = useMemo(() => ({
        ...styles.switch,
        ...(isEnabled ? styles.switchEnabled : styles.switchDisabled)
    }), [isEnabled])

    const iconStyle = useMemo(() => red ? [styles.icon, { tintColor: colors.red }] : styles.icon, [red])
    const titleStyle = useMemo(() => red ? [styles.titleText, { color: colors.red }] : styles.titleText, [red])

    return (
        <View style={styles.container}>
            <Image source={icon} style={iconStyle} />
            <View style={styles.textContainer}>
                <Text style={titleStyle}>{title}</Text>
                {description && <Text>{description}</Text>}
            </View>
            {switchStatus && (
                <View style={switchStyle}>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        thumbColor={isEnabled ? colors.white : '#83919a'}
                        trackColor={{
                            false: '#f1f2f6',
                            true: colors.whatsAppGreen
                        }}
                    />
                </View>
            )}
        </View>
    )
}
