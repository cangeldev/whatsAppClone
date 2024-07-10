import React, { useState, useCallback } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style'
import { welcomeImg } from 'assets'
import { radioButtons } from 'utils/helper'
import i18n from 'utils/i18next'  //Multi Language
import { useNavigation } from '@react-navigation/native' //Navigation
import RadioGroup from 'react-native-radio-buttons-group'
import Icon from 'react-native-vector-icons/AntDesign' //Icons
import { StatusBarComponent } from 'components' //Components
import { saveLanguage } from 'services/asyncStorage/asyncStorage' //AsyncStorage

export const WelcomeScreen = () => {

    const navigation = useNavigation<any>()
    const [selectedId, setSelectedId] = useState("1")

    const handleButton = useCallback(async () => {
        try {
            const selectedLanguage = radioButtons.find(button => button.id === selectedId)?.value
            await saveLanguage(selectedLanguage)
            i18n.changeLanguage(selectedLanguage)
            navigation.navigate('LoginScreen')
        } catch (error) {
            console.error('Dil seçme kaydetme hatası:', error)
        }
    }, [navigation, selectedId])

    return (
        <View style={style.container}>
            <StatusBarComponent />
            <Image
                source={welcomeImg}
                style={style.image}
            />
            <Text style={style.title}>
                Başlamak için dilinizi seçin
            </Text>
            <RadioGroup
                containerStyle={style.containerStyle}
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
            />
            <TouchableOpacity
                style={style.button}
                onPress={handleButton}>
                <Icon
                    size={24}
                    color={"white"}
                    name={"arrowright"}
                />
            </TouchableOpacity>
        </View>
    )
}
