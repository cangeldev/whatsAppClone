import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view' //Tabview
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' //Icons
import { CustomHeader } from 'components' // Components
import { useTranslation } from 'react-i18next' // Multi Language
import { CallsScreen, ChatsScreen, StatusScreen } from 'screens/tabViewScreens' //Pages
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

export const HomeScreen = () => {
    const { profileName, profileImage } = useSelector((state: RootState) => state.users.UserInfo)
    const { t } = useTranslation()
    const [index, setIndex] = useState(1)

    const renderIcon = ({ route, focused }: any) => {
        if (route.key === 'first') {
            return (
                <Icon
                    name="account-group"
                    size={20}
                    color={focused ? colors.white : "#88b6ac"}
                />
            )
        }
    }

    const routes = [
        { key: 'first' },
        { key: 'second', title: t('chats') },
        { key: 'third', title: t('status') },
        { key: 'fourth', title: t('calls') },
    ]

    return (
        <View style={style.container}>
            <CustomHeader />
            <Text>{profileName}</Text>
            <Image source={{ uri: profileImage as any }} style={{ width: 200, height: 200 }} />
            <TabView
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        renderIcon={renderIcon}
                        style={style.tabBar}
                        indicatorStyle={style.indicatorStyle}
                        labelStyle={style.labelStyle}
                        tabStyle={style.tabStyle}
                    />
                )}
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={SceneMap({
                    first: ChatsScreen,
                    second: ChatsScreen,
                    third: StatusScreen,
                    fourth: CallsScreen
                })}
            />
        </View>
    )
}
