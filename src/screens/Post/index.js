import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../../../components/ScreenWrapper'
import CustomText from '../../../components/CustomText'
import Header from './molecules/Header'
import CustomInput from '../../../components/CustomInput'
import Footer from './molecules/Footer'
import ImageFast from '../../../components/ImageFast'  // Make sure this is properly imported
import { Images } from '../../../assets'

const Post = ({ route }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const tagname = route.params?.tag;

  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (<Header />)}
      footerUnScrollable={() => (
        <Footer
          tag={tagname}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    >
      <CustomInput
        placeholder={' Share whats happening around you...'}
        backgroundColor={'transparent'}
        placeholderTextColor={'#99A0AE'}
        cursercolor={'#FF2557'}
      />

      {selectedImage && (
        <View style={styles.imageContainer}>
          <ImageFast
            source={{ uri: selectedImage }}
            style={styles.image}
            resizeMode="cover"
          />
          <ImageFast source={Images.postclose}
            style={styles.icon} resizeMode={'contain'} onPress={()=>setSelectedImage(null)} />
        </View>
      )}
    </ScreenWrapper>
  )
}

export default Post

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10
  },
  icon: {
    width: 36,
    height: 36,
    position: 'absolute',
    right: 35,
    top:5,
  }
})