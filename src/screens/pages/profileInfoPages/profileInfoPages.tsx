import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import colors from 'assets/colors/colors'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconE from 'react-native-vector-icons/MaterialCommunityIcons'
import { example } from 'assets'

export const ProfileInfoPages = () => {
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={colors.white}
            />
            <View style={style.headerIconContainer}>
                <IconM
                    name={"arrow-back"}
                    style={style.backIcon}
                    onPress={navigation.goBack}
                />
                <View style={style.profileContainer}>
                    <Image
                        source={example}
                        style={style.ProfileImage}
                    />
                    <Text style={style.profileName}>
                        Can GEL
                    </Text>
                    <Text>
                        +90 535 237 71 92
                    </Text>
                </View>
                <IconE
                    name={"dots-vertical"}
                    style={style.backIcon}
                    onPress={navigation.goBack}
                />
            </View>
        </View>
    )
}