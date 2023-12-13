import { View, Text, Modal, Image, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { example } from 'assets'
import { IconButton } from 'components/iconButton/iconButton'
import { iconButtonList } from 'utils/helper'

interface IChatModal {
    visibleModal: boolean
    closeModal: () => void
}

export const ChatModal: FC<IChatModal> = ({ visibleModal, closeModal }) => {

    const renderItem = ({ item }: any) => <IconButton icon={item.iconName} />

    return (
        <Modal
            statusBarTranslucent={true}
            transparent={true}
            visible={visibleModal}
            onRequestClose={closeModal}
            animationType="slide"
        >
            <TouchableOpacity
                onPressOut={closeModal}
                style={style.container}
            >
                <TouchableWithoutFeedback>
                    <View style={style.innerContainer}>
                        <Image
                            source={example}
                            style={style.image}
                        />
                        <Text style={style.name} >
                            Babam
                        </Text>
                        <View style={style.divider} />
                        <FlatList
                            horizontal
                            data={iconButtonList}
                            renderItem={renderItem}
                            style={style.flatlist}
                            contentContainerStyle={style.contentContainerStyle}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    )
}
