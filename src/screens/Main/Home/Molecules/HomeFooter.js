import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'

export default function HomeFooter() {
  return (
    <View style={styles.container}>
      <ImageFast source={Images.homeicon} resizeMode={'contain'} style={styles.icon} />

      <ImageFast source={Images.homeicon1} resizeMode={'contain'} style={styles.icon} />

      <ImageFast source={Images.homeicon3} resizeMode={'contain'} style={styles.icon} />

      <ImageFast source={Images.homeicon4} resizeMode={'contain'} style={styles.icon} />

      <ImageFast source={Images.homeicon2} resizeMode={'contain'} style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
    justifyContent: 'space-between'
  },
  icon: {
    height: 24,
    width: 24
  }
})

