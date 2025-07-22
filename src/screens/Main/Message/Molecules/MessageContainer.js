import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import CustomText from '../../../../../components/CustomText'
import fonts from '../../../../../assets/fonts'

const MessageContainer = () => {
  return (
    <View style={styles.container}>
      <ImageFast source={Images.avatar1} resizeMode={'contain'} style={styles.avatar} />
      <View style={styles.maxcontainer}>
        <View style={styles.mincontainer}>
          <CustomText label={'Lisa Moon'} fontFamily={fonts.semiBold} fontSize={16} />
          <CustomText label={'3m ago'} fontFamily={fonts.regular} fontSize={14} />
        </View>
        <CustomText label={'Got it! I’m already on my way 🚗'} fontFamily={fonts.regular} fontSize={14}/>
      </View>
    </View>
  )
}

export default MessageContainer

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    borderRadius: 16,
    padding: 12,
  },

  mincontainer: {
    flexDirection: 'row',
    gap:120,
  },

  maxcontainer:{
    gap:8,
  },

  avatar: {
    height: 56,
    width: 56
  }
})