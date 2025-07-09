import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Images } from "../../../assets";
import Home from "../../screens/Main/Home";
import Post from "../../screens/Post";
import ImageFast from "../../../components/ImageFast";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const icons = {
            Home: Images.homeicon,
            Location: Images.homeicon1,
            Post: Images.homeicon3,
            Videos: Images.homeicon4,
            Profile: Images.homeicon2,
          };
          return (
            <ImageFast
              source={icons[route.name]} 
              style={[styles.icon]} 
              resizeMode="contain"
            />
          );
        },
        // tabBarActiveTintColor: '#1A73E8',
        // tabBarInactiveTintColor: '#5F6368',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        // tabBarLabelStyle: styles.label,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Location" component={Post}/>
      <Tab.Screen name="Post" component={Post}/>
      <Tab.Screen name="Videos" component={Post}/>
      <Tab.Screen name="Profile" component={Post}/>
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