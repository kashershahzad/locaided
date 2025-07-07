import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Main/Home'
import Trending from '../../screens/Main/Trending'
import Notification from '../../screens/Main/Notification'

export default function Mainstack() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Trending' component={Trending}/>
            <Stack.Screen name='Notification' component={Notification}/>
        </Stack.Navigator>
    )
}