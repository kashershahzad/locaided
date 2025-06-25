import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from './Molecules/HomeHeader'
import ScreenWrapper from '../../../../components/ScreenWrapper'
import Stories from './Molecules/Stories'
import Post from './Molecules/Post'
import HomeFooter from './Molecules/HomeFooter'
import Postbutton from './Molecules/Postbutton'
import HomeModel from './Molecules/HomeModel'
import PostRateModel from './Molecules/PostRateModel'

const Home = () => {
    const [modal, setmodal] = useState(false)
    const [ratemodel, setratemodal] = useState(false)
    return (
        <ScreenWrapper
            headerUnScrollable={() => (<HomeHeader />)}
            footerUnScrollable={() => (<HomeFooter />)}
        >
            <View>
                <ScrollView>
                    <Stories />
                    <Post model={() => setratemodal(true)} />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </ScrollView>
                <Postbutton modal={() => setmodal(true)} />

                {

                    modal &&
                    <HomeModel
                    modal={() => { setmodal(true) }}
                    onClose={() => setmodal(false)} />

                }

                {
                    ratemodel &&
                    <PostRateModel
                    modal={() => { setratemodal(true) }}
                    onClose={() => setratemodal(false)} />
                }
            </View>
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({})