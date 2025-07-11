import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../../../components/ScreenWrapper'
import CustomText from '../../../components/CustomText'
import Header from './molecules/Header'
import CustomInput from '../../../components/CustomInput'
import Footer from './molecules/Footer'
import ImageFast from '../../../components/ImageFast'
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
        marginBottom={1}
        fontsize={16}
      />

      {selectedImage && (
        <View style={styles.imageContainer}>
          <ImageFast
            source={{ uri: selectedImage }}
            style={styles.image}
            resizeMode="cover" 
          />
          <ImageFast 
            source={Images.postclose}
            style={styles.icon} 
            resizeMode={'contain'} 
            onPress={() => setSelectedImage(null)} 
          />
        </View>
      )}
    </ScreenWrapper>
  )
}

export default Post

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    paddingHorizontal:10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },

  icon: {
    width: 32,
    height: 32,
    position: 'absolute',
    right: 13,
    top: 4,
    borderRadius: 16,
    zIndex: 1,
  },
})
