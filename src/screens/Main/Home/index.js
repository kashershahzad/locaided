import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from './Molecules/HomeHeader'
import ScreenWrapper from '../../../../components/ScreenWrapper'
import Stories from './Molecules/Stories'
import Post from './Molecules/Post'

const Home = () => {
    return (
        <ScreenWrapper
            headerUnScrollable={() => (<HomeHeader />)}
        >
            <ScrollView>
                <Stories />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </ScrollView>
        </ScreenWrapper>


    )
}

export default Home

const styles = StyleSheet.create({})