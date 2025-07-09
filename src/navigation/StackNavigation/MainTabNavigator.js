import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Images } from "../../../assets";
import Home from "../../screens/Main/Home";
import Post from "../../screens/Post";
import ImageFast from "../../../components/ImageFast";
import { COLORS } from "../../utiles/COLORS";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({

                // screenOptions={({ route }) => ({
                //     tabBarIcon: () => {
                //         const icons = {
                //             Home: Images.homeicon,
                //             Location: Images.homeicon1,
                //             Post: Images.homeicon3,
                //             Videos: Images.homeicon4,
                //             Profile: Images.homeicon2,
                //         };
                //         return (
                //             <ImageFast
                //                 source={icons[route.name]}
                //                 style={[styles.icon]}
                //                 resizeMode="contain"
                //             />
                //         );
                //     },
                // tabBarActiveTintColor: '#1A73E8',
                // tabBarInactiveTintColor: '#5F6368',
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                // tabBarLabelStyle: styles.label,
                headerShown: false,
                tabBarHideOnKeyboard:true
            })}
        >

            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Images.homeicon}
                        style={[
                            styles.icon,
                           
                        ]}
                    />
                ),
            }}
                name="Home"
                component={Home}
            />

            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Images.homeicon1}
                        style={[
                            styles.icon,
                           
                        ]}
                    />
                ),
            }}
                name="Location"
                component={Post}
            />


            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Images.homeicon3}
                        style={[
                            styles.icon,
                           
                        ]}
                    />
                ),
            }}
                name="Post"
                component={Post}
            />


            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Images.homeicon4}
                        style={[
                            styles.icon,
                           
                        ]}
                    />
                ),
            }}
                name="Videos"
                component={Post}
            />

            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Images.homeicon2}
                        style={[
                            styles.icon,
                           
                        ]}
                    />
                ),
            }
        }
                name="Profile"
                component={Post}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        paddingVertical: 10,
        paddingHorizontal: 28,
    },
    //   label: {
    //     fontSize: 12,
    //     marginBottom: 5,
    //   },
    icon: {
        width: 24,
        height: 24,
    },
});

export default MainTabNavigator;