import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import CustomText from '../../../../../components/CustomText'
import fonts from '../../../../../assets/fonts'

const MessageHeader = () => {
  return (
    <View style={styles.container}>
      <CustomText label={'Messages'} fontSize={20} fontFamily={fonts.semiBold}/>
      <ImageFast source={Images.messages} resizeMode={'contain'} style={styles.icon}/>
    </View>
  )
}

export default MessageHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
        marginBottom:0,
    },
    icon:{
        height:24,
        width:24
    }
})