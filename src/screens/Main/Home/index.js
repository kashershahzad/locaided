import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from './Molecules/HomeHeader'
import ScreenWrapper from '../../../../components/ScreenWrapper'

const Home = () => {
    return (
        <ScreenWrapper
            headerUnScrollable={() => (<HomeHeader />)}
        >

        </ScreenWrapper>


    )
}

export default Home

const styles = StyleSheet.create({})