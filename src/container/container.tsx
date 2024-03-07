import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { useTranslation } from 'react-i18next' //Multi Language

//Navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

//Pages
import { HomeScreen, LoginScreen, WelcomeScreen } from 'screens'
import { ContactsPage, MessagePage, ProfileInfoPage, SettingsPages, UserLoginInfoPage } from 'screens/pages'
import { SettingsAccountPage } from 'screens/pages/settingsPages/settingsInnerPages'

//Icons
import IconF from 'react-native-vector-icons/Fontisto'
import IconE from 'react-native-vector-icons/Entypo'


export const Container = () => {
    const Stack = createStackNavigator()
    const { t } = useTranslation()

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='WelcomeScreen'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name='WelcomeScreen'
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='MessagePages'
                    component={MessagePage}
                />
                <Stack.Screen
                    name='SettingsPageStack'
                    component={SettingsPageStack}
                />
                <Stack.Screen
                    name='ProfileInfoPages'
                    component={ProfileInfoPage}
                />
                 <Stack.Screen
                    name='UserLoginInfoPage'
                    component={UserLoginInfoPage}
                />
                <Stack.Screen
                    name='ContactsPages'
                    component={ContactsPage}
                    options={{
                        headerShown: true,
                        headerRight: () => (
                            <View style={style.contactsPagesContainer}>
                                <IconF
                                    name={"search"}
                                    style={style.contactsPagesIcon}
                                />
                                <IconE
                                    name={"dots-three-vertical"}
                                    style={style.contactsPagesIcon}
                                />
                            </View>
                        ),
                        headerStyle: {
                            backgroundColor: colors.whatsAppGreen
                        },
                        headerTintColor: colors.white,
                        headerTitle: () => (
                            <View>
                                <Text style={style.contactsPagesTitle}>
                                    Kişi seç{"\n"}
                                    <Text style={{ fontSize: 12 }}>
                                        145 kişi
                                    </Text>
                                </Text>
                            </View>)
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function SettingsPageStack() {
    const settingsNavigator = createStackNavigator()
    const { t } = useTranslation()
    return (
        <settingsNavigator.Navigator screenOptions={{
            headerTitleStyle: style.settingsNavigatorTitleStyle
        }}>
            <settingsNavigator.Screen
                name='SettingsPages'
                component={SettingsPages}
                options={{
                    headerRight: () => (
                        <IconF
                            name={"search"}
                            style={style.contactsPagesIcon}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: colors.whatsAppGreen
                    },
                    headerTintColor: colors.white,
                    headerTitle: t("settings")
                }}
            />
            <settingsNavigator.Screen
                name='SettingsAccountPage'
                component={SettingsAccountPage}
                options={{
                    headerStyle: {
                        backgroundColor: colors.whatsAppGreen
                    },
                    headerTintColor: colors.white,
                    headerTitle: t("account")
                }}
            />
        </settingsNavigator.Navigator>
    )

}