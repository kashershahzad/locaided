import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import ScreenWrapper from '../../../../../components/ScreenWrapper'
import { useNavigation } from '@react-navigation/native'

const HomeHeader = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageFast source={Images.logo} resizeMode={'contain'} style={styles.icon} />
      <View style={styles.mincontainer}>
        <ImageFast source={Images.message} resizeMode={'contain'} style={styles.icon2}  onPress={()=>navigation.navigate('Notification')}/>
        <ImageFast source={Images.fireicon} resizeMode={'contain'} style={styles.icon2} onPress={()=>navigation.navigate('Trending')}/>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  icon: {
    marginTop:10,
    height: 20,
    width: 102
  },
  icon2: {
    height: 38,
    width: 38
  },
  container: {
    paddingTop: 20,
    paddingBottom:3,
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  mincontainer:{
    flexDirection:'row',
    gap:7
  }
})