import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Trending/Molecules/Header'
import { Images } from '../../../../assets'

const Notification = () => {
  return (
    <View>
      <Header righticon={Images.filter} title={'Notification Center'}/>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})