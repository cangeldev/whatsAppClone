import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { ChatCard } from 'components/cards'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { CustomButton } from 'components'
import { useNavigation } from '@react-navigation/native'

export const ChatsScreen = () => {

    const navigation = useNavigation<any>()
    const toogleButton = () => {
        navigation.navigate("ContactsPages")
    }

    return (
        <View style={style.container}>
            <ScrollView>
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
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
