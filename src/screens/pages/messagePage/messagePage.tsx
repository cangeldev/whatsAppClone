import React, { useRef } from 'react'
import { View, Text, StatusBar, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { messageBackground } from 'assets'//Images
import { useNavigation, useRoute } from '@react-navigation/native' //Navigation

//Components
import { CustomInput } from 'components'
import { MessageBoxCard } from 'components/cards'

//Icons
import IconF from 'react-native-vector-icons/FontAwesome5'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconE from 'react-native-vector-icons/Entypo'

export const MessagePage = () => {

    const navigation = useNavigation<any>()
    const route = useRoute()
    const { profilePicture, username, phoneNumber }: any = route.params
    const scrollViewRef = useRef<ScrollView>(null)

    const goProfileInfo = () => {
        navigation.navigate("ProfileInfoPages", { profilePicture, username, phoneNumber })
    }

    return (
        <ImageBackground
            source={messageBackground}
            style={style.container}>
            <View style={style.headerContainer}>
                <IconM
                    name={"arrow-back"}
                    style={style.backIcon}
                    onPress={navigation.goBack}
                />
                <StatusBar
                    backgroundColor={colors.whatsAppGreen}
                    barStyle={'light-content'}
                />
                <Image
                    source={profilePicture}
                    style={style.image}
                />
                <TouchableOpacity
                    onPress={goProfileInfo}
                    style={style.headerTitleButton}>
                    <Text style={style.headerTitle}>
                        {username}
                    </Text>
                </TouchableOpacity>
                <View style={style.iconContainer}>
                    <IconF
                        name={"video"}
                        style={style.headerIcon}
                    />
                    <IconM
                        name={"call"}
                        style={style.headerIcon}
                    />
                    <IconE
                        name={"dots-three-vertical"}
                        style={style.headerIcon}
                    />
                </View>
            </View >
            <ScrollView onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
                ref={scrollViewRef} style={style.contentView}>
                <MessageBoxCard info='to' />
                <MessageBoxCard info='from' />
            </ScrollView>
            <CustomInput />
        </ImageBackground>
    )
}