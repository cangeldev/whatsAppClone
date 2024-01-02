import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from 'screens'
import { ContactsPages, MessagePages, ProfileInfoPages, SettingsPages } from 'screens/pages'
import colors from 'assets/colors/colors'
import Icon from 'react-native-vector-icons/Fontisto'
import IconE from 'react-native-vector-icons/Entypo'
import style from './style'


export const Container = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='MessagePages'
                    component={MessagePages}
                />
                <Stack.Screen
                    name='ProfileInfoPages'
                    component={ProfileInfoPages}
                />
                <Stack.Screen
                    name='ContactsPages'
                    component={ContactsPages}
                    options={{
                        headerShown: true,
                        headerRight: () => (
                            <View style={style.contactsPagesContainer}>
                                <Icon
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
                    }}
                />
                <Stack.Screen
                    name='SettingsPages'
                    component={SettingsPages}
                    options={{
                        headerShown: true,
                        headerRight: () => (
                            <Icon
                                name={"search"}
                                style={style.contactsPagesIcon}
                            />
                        ),
                        headerStyle: {
                            backgroundColor: colors.whatsAppGreen
                        },
                        headerTintColor: colors.white,
                        headerTitle: "Ayarlar",
                        headerTitleStyle: {
                            color: colors.white,
                            fontSize: 23
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}