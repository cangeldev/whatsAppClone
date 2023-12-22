import { View, Text, StatusBar, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import IconF from 'react-native-vector-icons/Feather'
import IconE from 'react-native-vector-icons/Entypo'
import IconFO from 'react-native-vector-icons/Fontisto'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'
import { useNavigation } from '@react-navigation/native'

export const CustomHeader = () => {
    const navigation = useNavigation<any>()
    const onOptionSelect = (value: any) => {
        navigation.navigate(value)
    }
    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.whatsAppGreen}
                barStyle={'light-content'}
            />
            <Text style={style.title}>
                WhatsApp
            </Text>
            <View style={style.iconContainer}>
                <IconF
                    name={"camera"}
                    style={style.icon}
                />
                <IconFO
                    name={"search"}
                    style={style.iconMiddle}
                />
                <Menu>
                    <MenuTrigger
                        customStyles={{ TriggerTouchableComponent: TouchableWithoutFeedback }}>
                        <IconE
                            name={"dots-three-vertical"}
                            style={style.icon}
                        />
                    </MenuTrigger>
                    <MenuOptions
                        customStyles={{
                            optionText: style.optionText,
                            OptionTouchableComponent: TouchableWithoutFeedback
                        }}
                        optionsContainerStyle={style.optionsContainerStyle}>
                        <MenuOption onSelect={() => onOptionSelect('Seçenek 1')} text="Yeni grup" />
                        <MenuOption onSelect={() => onOptionSelect('Seçenek 2')} text="Yeni toplu mesaj" />
                        <MenuOption onSelect={() => onOptionSelect('Seçenek 3')} text="Bağlı cihazlar" />
                        <MenuOption onSelect={() => onOptionSelect('Seçenek 4')} text="Yıldızlı mesajlar" />
                        <MenuOption onSelect={() => onOptionSelect('SettingsPages')} text="Ayarlar" />
                    </MenuOptions>
                </Menu>
            </View>
        </View >
    )
}