import React, { FC } from 'react'
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, FlatList, Image } from 'react-native'
import style from './style'
import { example } from 'assets'
import { iconButtonList } from 'utils/helper'

//Components
import { ProfileImage } from 'components/cards'
import { IconButton } from 'components/iconButton/iconButton'

interface IChatModal {
    visibleModal: boolean
    closeModal: () => void
}

export const ChatModal: FC<IChatModal> = ({ visibleModal, closeModal }) => {

    const renderItem = ({ item }: any) =>
        <IconButton
            icon={item.iconName}
            navigatePage={item.navigatePage}
        />

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
                style={style.modalBackground}
            >
                <TouchableWithoutFeedback>
                    <View style={style.modalContent}>
                        <Image
                            source={example}
                            style={style.image}
                        />
                        <Text style={style.nameContainer} >
                            Babam
                        </Text>
                        <View style={style.dividerLine} />
                        <FlatList
                            horizontal
                            data={iconButtonList}
                            renderItem={renderItem}
                            style={style.iconList}
                            contentContainerStyle={style.iconListContainer}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    )
}
