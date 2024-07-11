import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { messageBackground } from 'assets' // Images
import { useNavigation, useRoute } from '@react-navigation/native' // Navigation

// Components
import { CustomInput } from 'components'
import { MessageBoxCard } from 'components/cards'

// Icons
import IconF from 'react-native-vector-icons/FontAwesome5'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconE from 'react-native-vector-icons/Entypo'
import { currentUserphoneNumber, listenForMessages, sendMessage } from 'services/firebase/firebase'


function replaceAll(str: any, from: any, to: any) {
    var idx = str.indexOf(from)
    while (idx > -1) {
        str = str.replace(from, to)
        idx = str.indexOf(from)
    }
    return str
}

const generateChatID = (number1: any, number2: any) => { //Benzersiz bir chatID oluşturmak için 
    const sortedNumbers = [number1, number2].sort()
    return `${sortedNumbers[0]}-${sortedNumbers[1]}`
}

export const MessagePage = () => {

    const navigation = useNavigation<any>()
    const route = useRoute()
    const { profilePicture, username, phoneNumber }: any = route.params
    const fromNumber = replaceAll(currentUserphoneNumber(), "+90", "")
    const toNumber = replaceAll(phoneNumber, " ", "")
    const chatID = generateChatID(fromNumber, toNumber)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const goProfileInfo = () => {
        navigation.navigate("ProfileInfoPages", { profilePicture, username, phoneNumber })
    }

    useEffect(() => {
        const unsubscribe = listenForMessages(chatID, setMessages)
        return () => unsubscribe()
    }, [chatID])

    const handleSend = () => {
        sendMessage(chatID, message, fromNumber)
        setMessage('')
    }

    const renderItem = ({ item }: any) => (
        <MessageBoxCard info={fromNumber === item.senderId ? 'from' : 'to'} message={item.text} />
    )

    const handleInputChange = (inputText: string) => {
        setMessage(inputText)
    }

    return (
        <ImageBackground source={messageBackground} style={style.container}>
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
            </View>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <CustomInput
                onPress={handleSend}
                onInputChange={handleInputChange}
            />
        </ImageBackground>
    )
}
