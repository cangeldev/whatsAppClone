import { View, Text, Image, StatusBar } from 'react-native'
import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group'
import { welcomeImg } from 'assets'
import style from './style'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { radioButtons } from 'utils/helper'
import colors from 'assets/colors/colors';

export const WelcomeScreen = () => {

    const navigation = useNavigation<any>()
    const [selectedId, setSelectedId] = useState<string | undefined>("1")
    const handleButton = () => {
        navigation.navigate("HomeScreen")
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
            <Icon
                name={"arrowright"}
                style={style.icon}
                onPress={handleButton}
            />
        </View>
    )
}