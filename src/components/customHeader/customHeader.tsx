import React from 'react'
import { View, Text, StatusBar, TouchableWithoutFeedback } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'
import { useNavigation } from '@react-navigation/native' //Navigation
import { useTranslation } from 'react-i18next' //Multi Language

//Icons
import IconF from 'react-native-vector-icons/Feather'
import IconE from 'react-native-vector-icons/Entypo'
import IconFO from 'react-native-vector-icons/Fontisto'

export const CustomHeader = () => {

    const { t } = useTranslation()
    const navigation = useNavigation<any>()
    const onOptionSelect = (value: any) => {
        navigation.navigate(value)
    }
    const renderMenuOption = (value: any, text: any) => (
        <MenuOption
            onSelect={() => onOptionSelect(value)}
            text={text}
        />
    )

    return (
        <View style={style.headerContainer}>
            <StatusBar
                backgroundColor={colors.whatsAppGreen}
                barStyle={'light-content'}
            />
            <Text style={style.headerTitle}>
                WhatsApp
            </Text>
            <View style={style.iconContainer}>
                <IconF
                    name={"camera"}
                    style={style.headerIcon}
                />
                <IconFO
                    name={"search"}
                    style={style.middleIcon}
                />
                <Menu>
                    <MenuTrigger
                        customStyles={{ TriggerTouchableComponent: TouchableWithoutFeedback }}>
                        <IconE
                            name={"dots-three-vertical"}
                            style={style.headerIcon}
                        />
                    </MenuTrigger>
                    <MenuOptions
                        customStyles={{
                            optionText: style.menuOptionText,
                            OptionTouchableComponent: TouchableWithoutFeedback
                        }}
                        optionsContainerStyle={style.menuOptionsContainer}>
                        {renderMenuOption('Seçenek 1', t('newGroup'))}
                        {renderMenuOption('Seçenek 2', t('newBroadcast'))}
                        {renderMenuOption('Seçenek 3', t('linkedDevices'))}
                        {renderMenuOption('Seçenek 4', t('starredMessages'))}
                        {renderMenuOption('SettingsPageStack', t('settings'))}
                    </MenuOptions>
                </Menu>
            </View>
        </View >
    )
}