import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from 'screens'
import { MessagePages, ProfileInfoPages, SettingsPages } from 'screens/pages'
import colors from 'assets/colors/colors'
import Icon from 'react-native-vector-icons/Fontisto'

export const Container = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' >
                <Stack.Screen
                    options={{ headerShown: false }}
                    name='HomeScreen'
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name='MessagePages'
                    component={MessagePages}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name='ProfileInfoPages'
                    component={ProfileInfoPages}
                />
                <Stack.Screen
                    name='SettingsPages'
                    component={SettingsPages}
                    options={{
                        headerRight: () => (
                            <Icon
                                name={"search"}
                                size={20}
                                color={colors.white}
                                style={{ marginRight: 20 }}
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