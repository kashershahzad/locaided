import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import ImageFast from '../../../../components/ImageFast'
import { Images } from '../../../../assets'
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine'
import { useNavigation } from '@react-navigation/native'
import CustomText from '../../../../components/CustomText'
import { COLORS } from '../../../utiles/COLORS'
import fonts from '../../../../assets/fonts'
import ImagePicker from 'react-native-image-crop-picker';

const Footer = ({ tag, setSelectedImage, selectedImage }) => {
    const navigation = useNavigation()
    const [location, setlocation] = useState(false)
    const [Tag, settag] = useState(tag)
    const handlelocation = () => {
        setlocation(true)
    }

    const openCamera = () => {
        const screenWidth = Dimensions.get('window').width;
        const containerWidth = screenWidth - 20;
        const containerHeight = 300;
        ImagePicker.openCamera({
            width: containerWidth,
            height: containerHeight,
            cropping: true,
            cropperCircleOverlay: false,
            compressImageMaxWidth: containerWidth,
            compressImageMaxHeight: containerHeight,
            compressImageQuality: 0.8,
            cropperToolbarTitle: 'Crop Image',
            freeStyleCropEnabled: true,
            includeBase64: false,
        }).then(image => {
            setSelectedImage(image.path);
        }).catch(error => {
            console.log(error);
        });
    };

    const openGallery = () => {
        const screenWidth = Dimensions.get('window').width;
        const containerWidth = screenWidth - 20;
        const containerHeight = 300;

        ImagePicker.openPicker({
            width: containerWidth,
            height: containerHeight,
            cropping: true,
            cropperCircleOverlay: false,
            compressImageMaxWidth: containerWidth,
            compressImageMaxHeight: containerHeight,
            compressImageQuality: 0.8,
            cropperToolbarTitle: 'Crop Image',
            freeStyleCropEnabled: true,
            includeBase64: false,
        }).then(image => {
            setSelectedImage(image.path);
        }).catch(error => {
            console.log(error);
        });
    };
    return (
        <>
            <View style={styles.container}>

                {
                    location === true ?
                        <ImageFast source={Images.activelocation} style={styles.icon} resizeMode={'contain'} />
                        :
                        <ImageFast source={Images.locationicon} style={styles.icon} resizeMode={'contain'} onPress={handlelocation} />
                }


                {Tag ?
                    <ImageFast source={Images.tag2} style={styles.icon} resizeMode={'contain'} onPress={() => navigation.navigate('Tag')} />
                    :
                    <ImageFast source={Images.tagicon} style={styles.icon} resizeMode={'contain'} onPress={() => navigation.navigate('Tag')} />}

                {location === true ?
                    <View style={styles.location}>
                        <CustomText label={'Park Road 24, 63225 Langen...'} color={COLORS.primaryColor} fontFamily={fonts.regular} />
                        <ImageFast source={Images.redclose} resizeMode={'contain'} style={styles.icon3} onPress={() => { setlocation(false) }} />
                    </View>
                    : null}

                {Tag ?
                    <View style={styles.tagtext}>
                        <CustomText label={Tag} color={'#7D52F4'} fontFamily={fonts.regular} />
                        <ImageFast source={Images.purpleclose} resizeMode={'contain'} style={styles.icon3}
                            onPress={() => settag(null)}
                        />
                    </View> : null
                }
            </View>
            <CustomHorizontalLine height={1} />
            <View style={styles.container}>
                <ImageFast source={Images.newpost} style={styles.icon2} resizeMode={'contain'} />
                <ImageFast source={Images.camera} style={styles.icon2} resizeMode={'contain'} onPress={openCamera} />
                <ImageFast source={Images.gallery} style={styles.icon2} resizeMode={'contain'} onPress={openGallery} />
                <ImageFast source={Images.gif} style={styles.icon2} resizeMode={'contain'} />
                <ImageFast source={Images.eys2} style={styles.icon2} resizeMode={'contain'} />
                <ImageFast source={Images.newpost2} style={styles.icon2} resizeMode={'contain'} />
            </View>
        </>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 9,
        marginLeft: 15,
        marginVertical: 7,
    },
    icon: {
        height: 20,
        width: 20,
    },
    icon2: {
        height: 24,
        width: 24,
    },
    icon3: {
        height: 16,
        width: 16,
        marginTop: 2,
    },
    location: {
        backgroundColor: '#FFE9EE',
        paddingVertical: 2,
        paddingLeft: 8,
        paddingRight: 4,
        flexDirection: 'row',
        borderRadius: 15,
    },

    tagtext: {
        backgroundColor: '#EFEBFF',
        paddingVertical: 2,
        paddingLeft: 8,
        paddingRight: 4,
        flexDirection: 'row',
        borderRadius: 15,
    },


})