import React, { useState, useCallback } from 'react'
import { View, TextInput, Image } from 'react-native'
import style from './style'
import { attach } from 'assets'

// Icons
import IconF from 'react-native-vector-icons/FontAwesome5'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconI from 'react-native-vector-icons/Ionicons'

export const CustomInput = () => {
    const [message, setMessage] = useState('')

    const handleChangeText = useCallback((text: any) => {
        setMessage(text)
    }, [])

    return (
        <View style={style.inputContainer}>
            <TextInput
                placeholder="Mesaj"
                style={style.messageInput}
                multiline
                onChangeText={handleChangeText}
            />
            <IconM
                name="insert-emoticon"
                style={style.inputEmojiIcon}
            />
            <View style={style.inputIconContainer}>
                <Image
                    source={attach}
                    style={style.attachIcon}
                />
                {message === '' && (
                    <IconM
                        name="camera-alt"
                        style={style.inputIcon}
                    />
                )}
            </View>
            {message !== '' ? (
                <IconI
                    name="send"
                    style={style.sendIcon}
                />
            ) : (
                <IconF
                    name="microphone"
                    style={style.microphoneIcon}
                />
            )}
        </View>
    )
}
