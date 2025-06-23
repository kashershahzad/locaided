import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import ScreenWrapper from '../../../../../components/ScreenWrapper'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <ImageFast source={Images.logo} resizeMode={'contain'} style={styles.icon} />
      <View style={styles.mincontainer}>
        <ImageFast source={Images.message} resizeMode={'contain'} style={styles.icon2}/>
        <ImageFast source={Images.fireicon} resizeMode={'contain'} style={styles.icon2} />
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 102
  },
  icon2: {
    height: 38,
    width: 38
  },
  container: {
    paddingTop: 20,
    paddingHorizontal:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  mincontainer:{
    flexDirection:'row',
    gap:7
  }
})