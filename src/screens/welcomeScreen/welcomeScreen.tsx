import React, { useState, useCallback } from 'react'
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RadioGroup from 'react-native-radio-buttons-group'
import { welcomeImg } from 'assets'
import style from './style'
import { radioButtons } from 'utils/helper'
import i18n from 'utils/i18next'

export const WelcomeScreen = () => {
    const navigation = useNavigation<any>()
    const [selectedId, setSelectedId] = useState("1")


    const handleButton = useCallback(async () => {
        try {
            const selectedLanguage = radioButtons.find(button => button.id === selectedId)?.value
            await saveLanguage(selectedLanguage)
            i18n.changeLanguage(selectedLanguage)
            navigation.navigate('HomeScreen')
        } catch (error) {
            console.error('Dil seçme kaydetme hatası:', error)
        }
    }, [navigation, selectedId]);

    const saveLanguage = async (language: any) => {
        try {
            await AsyncStorage.setItem('language', language)
        } catch (error) {
            console.error('Dil seçme kaydetme hatası:', error)
        }
    }

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={"white"}
                barStyle={'dark-content'}
            />
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
