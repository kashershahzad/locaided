import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import CustomText from '../../../../../components/CustomText'
import fonts from '../../../../../assets/fonts'

const Emptynotification = () => {
  return (
    <View style={styles.container}>
      <ImageFast source={Images.emptynotification} resizeMode={'contain'} style={styles.icon} />
      <CustomText label={'You’re All Caught Up!'} fontSize={22} fontFamily={fonts.semiBold} textAlign={'center'} />
      <CustomText label={' There’s nothing new right now. Check back later to see updates from your posts, offers, and connections.'} fontSize={16} fontFamily={fonts.light} textAlign={'center'} color={'#525866'} marginLeft={15} marginRight={15} lineHeight={23}/>
    </View>
  )
}

export default Emptynotification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap:7,
    marginTop:230,
  },
  icon: {
    height: 96,
    width: 96,
    alignSelf: 'center'
  }
})