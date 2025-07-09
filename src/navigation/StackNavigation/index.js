import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./Authstack";
import Mainstack from "./Mainstack";

import React from 'react'

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Mainstack" screenOptions={{
                headerShown: false,

            }}>
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="Mainstack" component={Mainstack} />
                 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation