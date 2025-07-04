import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ImageFast from '../../../../components/ImageFast'
import CustomText from '../../../../components/CustomText'
import CustomButton from '../../../../components/CustomButton'
import fonts from '../../../../assets/fonts'
import { useNavigation } from '@react-navigation/native'

export default function Allset() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageFast source={require('../../../../assets/allset.gif')} style={styles.animation} resizeMode={'cover'} />
            <View style={styles.container}>
                <ImageFast source={require('../../../../assets/auth/Customtick.png')} resizeMode={'contain'} style={styles.icon} />
                <CustomText label={'You re all set!'} fontSize={24} textAlign={'center'} fontFamily={fonts.semiBold}/>
                <CustomText label={'Explore your city, share moments, and earn Social Score!'} fontSize={14} textAlign={'center'} marginTop={10} fontFamily={fonts.regular} color={'#525866'} />
                <CustomButton title={'Enter Locaided'} backgroundColor={'black'} color={'white'} marginTop={170} borderRadius={16} fontFamily={fonts.semiBold} onPress={()=>navigation.navigate('Mainstack')}/>
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
        opacity: 0.6,
    },
})