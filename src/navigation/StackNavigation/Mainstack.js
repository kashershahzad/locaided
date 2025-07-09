import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Trending from '../../screens/Main/Trending';
import Notification from '../../screens/Main/Notification';
import MainTabNavigator from './MainTabNavigator';

export default function Mainstack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='MainTabs' component={MainTabNavigator} />
            <Stack.Screen name='Trending' component={Trending} />
            <Stack.Screen name='Notification' component={Notification} />
        </Stack.Navigator>
    );
}