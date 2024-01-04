import React, { useState, useCallback } from 'react'
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RadioGroup from 'react-native-radio-buttons-group'
import { welcomeImg } from 'assets'
import style from './style'
import { radioButtons } from 'utils/helper'
import colors from 'assets/colors/colors'

export const WelcomeScreen = () => {
    const navigation = useNavigation<any>()
    const [selectedId, setSelectedId] = useState("1")

    const handleButton = useCallback(async () => {
        const selectedLanguage = radioButtons.find(button => button.id === selectedId)?.value

        if (selectedLanguage) {
            await dilKaydet(selectedLanguage)
            navigation.navigate("HomeScreen")
        }
        else {
            console.error('Hiçbir dil seçilmedi!')
        }
    }, [navigation, selectedId])

    const dilKaydet = async (language: any) => {
        try {
            await AsyncStorage.setItem('language', language)
            console.log('Seçilen dil:', language);
        } catch (err) {
            console.error('Dil seçme kaydetme hatası:', err)
        }
    }

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.white}
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
                onPress={handleButton}
            >
                <Icon
                    size={24}
                    color={colors.white}
                    name={"arrowright"}
                />
            </TouchableOpacity>
        </View>
    );
};

