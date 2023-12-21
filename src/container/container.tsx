import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from 'screens'

export const Container = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator >
                <Stack.Screen
                    options={{ headerShown: false }}
                    name='HomeScreen'
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}