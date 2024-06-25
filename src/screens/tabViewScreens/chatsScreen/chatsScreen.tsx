import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native' //Navigation
import { useTranslation } from 'react-i18next' //Multi Language
import Icon from 'react-native-vector-icons/FontAwesome6' //Icons
import { fetchUsers } from 'services/firebase/firebase' //Firebase

//Components
import { ChatCard } from 'components/cards'
import { CustomButton } from 'components'

export const ChatsScreen = () => {

    const { t } = useTranslation()
    const navigation = useNavigation<any>()
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const fetchedUsersInfo = await fetchUsers()
            setUsers(fetchedUsersInfo)
        }
        getUsers()
    }, [])

    const renderItem = ({ item }: any) =>
        <ChatCard
            profilePicture={{ uri: item.profileImageUrl }}
            username={item.username}
        />

    const toogleButton = () => {
        navigation.navigate("ContactsPages")
    }

    return (
        <View style={style.container}>
            <View>
                <FlatList
                    data={users}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            </View>

            <View style={style.footer}>
                <Text style={style.text}>
                    {t("ChatscreenTextOne")}
                </Text>
                <View style={style.divider} />
                <View style={style.infoView}>
                    <Icon
                        name={"lock"}
                        style={style.icon}
                    />
                    <Text style={style.infoText}>
                        {t("infoTextOne")}
                        <Text style={style.innerInfoText}>
                            {" "}{t("infoTextTwo")}
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={style.buttonView}>
                <CustomButton
                    iconName='comment'
                    onPress={toogleButton}
                />
            </View>
        </View>
    )
}
