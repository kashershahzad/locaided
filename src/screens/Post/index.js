import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../../components/ScreenWrapper'
import CustomText from '../../../components/CustomText'
import Header from './molecules/Header'
import CustomInput from '../../../components/CustomInput'
import Footer from './molecules/Footer'

const Post = () => {
  return (
    <ScreenWrapper
    scrollEnabled
     headerUnScrollable={() => (<Header />)}
      footerUnScrollable={() => (<Footer />)}>
      <CustomInput placeholder={' Share whats happening around you...'} backgroundColor={'transparent'} placeholderTextColor={'#99A0AE'} cursercolor={'#FF2557'} />
    </ScreenWrapper>
  )
}

export default Post

const styles = StyleSheet.create({})