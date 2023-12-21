import { View } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'
import { CustomHeader } from 'components'
import colors from 'assets/colors/colors'
import { ChatsScreen } from 'screens/chatsScreen/chatsScreen'
import { StatusScreen } from 'screens/statusScreen/statusScreen'
import { CallsScreen } from 'screens/callsScreen/callsScreen'

export const HomeScreen = () => {

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

    const [index, setIndex] = useState(3)
    const [routes] = React.useState([
        { key: 'first' },
        { key: 'second', title: 'Sohbetler' },
        { key: 'third', title: 'Güncellemeler' },
        { key: 'fourth', title: 'Aramalar' }
    ])

    return (
        <View style={style.container}>
            <CustomHeader />
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
