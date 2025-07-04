import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Main/Home'
import Trending from '../../screens/Main/Trending'

export default function Mainstack() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Trending' component={Trending}/>
        </Stack.Navigator>
    )
}