import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ImageFast from '../../../../components/ImageFast'
import CustomText from '../../../../components/CustomText'
import CustomButton from '../../../../components/CustomButton'

export default function Allset() {
    return (
        <View>
            <ImageFast source={require('../../../../assets/allset.gif')} style={styles.animation} resizeMode={'cover'} />
            <View style={styles.container}>
                <ImageFast source={require('../../../../assets/auth/Customtick.png')} resizeMode={'contain'} style={styles.icon} />
                <CustomText label={'You re all set!'} fontSize={24} textAlign={'center'} />
                <CustomText label={'Explore your city, share moments, and earn Social Score!'} fontSize={14} textAlign={'center'} marginTop={10} />
                <CustomButton title={'Enter lociated'} backgroundColor={'black'} color={'white'} marginTop={170} borderRadius={16} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        marginTop: '280',
        paddingHorizontal: 24
    },
    icon: {
        height: 96,
        with: 96
    },
    animation: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,

    },
})