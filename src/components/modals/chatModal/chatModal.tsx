import React, { FC, useCallback } from 'react'
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, FlatList, Image } from 'react-native'
import style from './style'
import { iconButtonList } from 'utils/helper' 
import { IconButton } from 'components/iconButton/iconButton' //Components

interface IChatModal {
    visibleModal: boolean
    closeModal: () => void
    profilePicture: any
    username: string
}

export const ChatModal: FC<IChatModal> = React.memo(({ visibleModal, closeModal, profilePicture, username }) => {

    const renderItem = useCallback(({ item }: { item: { iconName: string; navigatePage: string } }) => (
        <IconButton
            icon={item.iconName}
            navigatePage={item.navigatePage}
        />
    ), [])

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
                            source={profilePicture}
                            style={style.image}
                        />
                        <Text style={style.nameContainer}>
                            {username}
                        </Text>
                        <View style={style.dividerLine} />
                        <FlatList
                            horizontal
                            data={iconButtonList}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            style={style.iconList}
                            contentContainerStyle={style.iconListContainer}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    )
})
