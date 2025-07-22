import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import CustomText from '../../../../../components/CustomText'
import fonts from '../../../../../assets/fonts'

const MessageContainer = ({ chatinfo }) => {
  return (
    <>
      {
        chatinfo.map(((item, i) => (
          <View key={i} style={styles.container}>
            <ImageFast source={item.avatar} resizeMode={'contain'} style={styles.avatar} />
            <View style={styles.maxcontainer}>
              <View style={styles.mincontainer}>
                <CustomText label={item.name} fontFamily={fonts.semiBold} fontSize={16} />
                <CustomText label={item.time} fontFamily={fonts.regular} fontSize={14} />
              </View>
              <CustomText label={item.message} fontFamily={fonts.regular} fontSize={14} />
            </View>
            <ImageFast source={item.status} resizeMode={'contain'} style={styles.statusicon} />
          </View>
        )))
      }
    </>
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
    gap: 120,
  },

  maxcontainer: {
    gap: 8,
  },

  avatar: {
    height: 56,
    width: 56
  },
  statusicon: {
    height: 24,
    width: 24,
    position: 'absolute',
    top: 44,
    right: 263,
  }
})