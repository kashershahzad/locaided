import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from '../../../../../components/CustomText'
import ImageFast from '../../../../../components/ImageFast'
import fonts from '../../../../../assets/fonts'

const Optionbar = ({ title, location, icon, btn, onpress }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', gap:3}} >
                <CustomText label={title} fontFamily={fonts.semiBold} fontSize={13}/>
                <CustomText label={location} fontSize={13} fontFamily={fonts.light} color={'#525866'} />
            </View>
            <TouchableOpacity style={{flexDirection:'row', gap:3}} onpress={onpress}>
                <ImageFast source={icon} style={styles.icon} resizeMode={'contain'} />
                <CustomText label={btn} color={'#FF2557'} fontSize={13} fontFamily={fonts.regular} />
            </TouchableOpacity>
        </View>
    )
}

export default Optionbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    icon:{
        height:16,
        width:16
    }
})