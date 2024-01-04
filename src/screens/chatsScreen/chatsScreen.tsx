import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from './style'
import { ChatCard } from 'components/cards'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { CustomButton } from 'components'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ChatsScreen = () => {

    const navigation = useNavigation<any>()
    const toogleButton = () => {
        navigation.navigate("ContactsPages")
    }
    const [language, setLanguage] = useState('')
    useEffect(() => {
        getLanguage()
    }, [])

    const getLanguage = async () => {
        try {
            const language = await AsyncStorage.getItem('language')
            if (language !== null) {
                setLanguage(language)
                console.log('Kullanıcı adı:', language)
            } else {
                console.log('Kullanıcı adı bulunamadı.')
            }
        } catch (error) {
            console.error('Kullanıcı adını alma hatası:', error)
        }
    }
    return (
        <View style={style.container}>
            <ScrollView>
                <Text>
                    {
                        language
                    }
                </Text>
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <ChatCard status='date' />
                <Text style={style.text}>
                    Daha fazla seçenek için istediğiniz sohbeti basılı tutun
                </Text>
                <View style={style.divider} />
                <View style={style.infoView}>
                    <Icon
                        name={"lock"}
                        style={style.icon}
                    />
                    <Text style={style.infoText}>
                        Kişisel mesajlarınız
                        <Text style={style.innerInfoText}>
                            {" "}uçtan uca şifrelidir
                        </Text>
                    </Text>
                </View>
            </ScrollView>
            <View style={style.buttonView}>
                <CustomButton
                    iconName='comment'
                    onPress={toogleButton}
                />
            </View>
        </View>
    )
}
