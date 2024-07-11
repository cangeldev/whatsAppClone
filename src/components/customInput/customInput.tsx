import React, { useState, FC } from 'react'
import { View, TextInput, Image } from 'react-native'
import style from './style'
import { attach } from 'assets'

// Icons
import IconF from 'react-native-vector-icons/FontAwesome5'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconI from 'react-native-vector-icons/Ionicons'

interface ICustomInput {
    onPress?: () => void
    onInputChange: (inputText: string) => void
}

export const CustomInput: FC<ICustomInput> = ({ onPress, onInputChange }) => {
    const [inputText, setInputText] = useState('')

    const handleTextChange = (text: string) => {
        setInputText(text)
        onInputChange(text)
    }

    const handleButton = () => {
        if (onPress) {
            onPress()
        }
        setInputText('')
    }
    return (
        <View style={style.inputContainer}>
            <TextInput
                value={inputText}
                placeholder="Mesaj"
                style={style.messageInput}
                multiline
                onChangeText={handleTextChange}
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
                {inputText === '' && (
                    <IconM
                        name="camera-alt"
                        style={style.inputIcon}
                    />
                )}
            </View>
            {inputText !== '' ? (
                <IconI
                    name="send"
                    style={style.sendIcon}
                    onPress={handleButton}
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
