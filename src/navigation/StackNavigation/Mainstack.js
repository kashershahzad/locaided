import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Trending from '../../screens/Main/Trending';
import Notification from '../../screens/Main/Notification';
import MainTabNavigator from './MainTabNavigator';
import Tag from '../../screens/Post/Tag';
import Post from '../../screens/Post';

export default function Mainstack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='MainTabs' component={MainTabNavigator} />
            <Stack.Screen name='Post' component={Post} />
            <Stack.Screen name='Trending' component={Trending} />
            <Stack.Screen name='Notification' component={Notification} />
            <Stack.Screen name='Tag' component={Tag} />
        </Stack.Navigator>
    );
}