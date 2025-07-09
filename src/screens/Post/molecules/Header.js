import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../components/ImageFast'
import { Images } from '../../../../assets'
import CustomText from '../../../../components/CustomText'
import fonts from '../../../../assets/fonts'
import CustomButton from '../../../../components/CustomButton'
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine'


const Header = ({navigation}) => {
    return (
        <>
            <View style={styles.mincontainer}>
                <View style={styles.container}>
                    <ImageFast source={Images.back2} style={styles.icon} resizeMode={'contain'} />
                    <CustomText label={'New Post'} fontSize={16} fontFamily={fonts.regular} />
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.goback()}>
                    <CustomText color={'white'} label={"Post"} fontFamily={fonts.regular} />
                </TouchableOpacity>
            </View>
            <CustomHorizontalLine height={1} />
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    mincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    container: {
        flexDirection: 'row',
        gap: 10,
    },
    icon: {
        height: 14,
        width: 14,
        marginTop: 3,
    },
    btn: {
        borderRadius: 12,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 4
    }
})