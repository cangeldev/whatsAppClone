import { View, Text, StatusBar, Image, ImageBackground, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import IconF from 'react-native-vector-icons/FontAwesome5'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconE from 'react-native-vector-icons/Entypo'
import IconI from 'react-native-vector-icons/Ionicons'
import { attach, example, messageBackground } from 'assets'
import { useNavigation } from '@react-navigation/native'

export const MessagePages = () => {
    const [message, SetMessage] = useState("")
    const navigation = useNavigation()

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
            <ScrollView style={style.contentView}>

                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>
                <Text>
                    ContentView
                </Text>


            </ScrollView>
            <View style={style.inputContainer}>
                <TextInput
                    placeholder='Mesaj'
                    style={style.messageInput}
                    multiline={true}
                    onChangeText={(text: any) => SetMessage(text)}
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
                    {
                        message != "" ?
                            null :
                            <IconM
                                name={"camera-alt"}
                                style={style.inputIcon}
                            />
                    }
                </View>
                {message != "" ?
                    <IconI
                        name={"send"}
                        style={style.sendIcon}
                    /> :
                    <IconF
                        name={"microphone"}
                        style={style.microphoneIcon}
                    />
                }
            </View>

        </ImageBackground>
    )
}