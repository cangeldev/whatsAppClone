import { View, Text, StatusBar, Image, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import IconF from 'react-native-vector-icons/FontAwesome5'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconE from 'react-native-vector-icons/Entypo'
import { attach, example, messageBackground } from 'assets'

export const MessagePages = () => {
    return (
        <ImageBackground
            source={messageBackground}
            style={style.container}>
            <View style={style.headerContainer}>
                <IconM
                    name={"arrow-back"}
                    style={style.backIcon}
                />
                <StatusBar
                    backgroundColor={colors.whatsAppGreen}
                    barStyle={'light-content'}
                />
                <Image
                    source={example}
                    style={style.image}
                />
                <Text style={style.headerTitle}>
                    Can
                </Text>
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
            <View style={style.inputContainer}>

                <TextInput
                    placeholder='Mesaj'
                    style={style.messageInput}
                    multiline={true}
                />
                <IconM
                    name={"insert-emoticon"}
                    style={style.inputEmojiIcon}
                />
                <View style={style.inputIconContainer}>
                    <Image
                        source={attach}
                        style={style.attachIcon}
                    />
                    <IconM
                        name={"camera-alt"}
                        style={style.inputIcon}
                    />
                </View>
                <IconF
                    name={"microphone"}
                    style={style.microphoneIcon}
                />
            </View>
        </ImageBackground>
    )
}