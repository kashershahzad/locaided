import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import CustomText from '../../../../../components/CustomText'
import fonts from '../../../../../assets/fonts'
import CustomButton from '../../../../../components/CustomButton'

const NotificationContainer = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.imageContainer}>
          <ImageFast source={Images.person1} resizeMode={'contain'} style={styles.img} />
          <ImageFast source={Images.comments} resizeMode={'contain'} style={styles.icon} />
        </View>
        
        <View style={styles.textContainer}>
          <View style={styles.mincontainer}>
            <CustomText label={'Patrick commented on your post'} fontFamily={fonts.regular} fontSize={12} />
            <CustomText label={'Just Now'} fontFamily={fonts.light} color={'#0E121B'} fontSize={12} />
          </View>
          <CustomText 
            label={'“Looks perfect, send it for review tomorrow.”'} 
            fontFamily={fonts.light} 
            color={'#0E121B'} 
            fontSize={12}
          />
          <CustomButton title={'View Comment'} color={'#FF2557'} borderWidth={1} borderColor={'#FF2557'} paddingHorizontal={6} marginTop={10} paddingVertical={4}/>
        </View>
      </View>
    </View>
  )
}

export default NotificationContainer

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#E1E4EA',
  },
  imageContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  mincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  img: {
    height: 64,
    width: 64,
  },
  icon: {
    height: 34,
    width: 34,
    position: 'absolute',
    bottom:-2,
    left: 36,
  },
})