import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import CustomText from '../../../../../components/CustomText'
import fonts from '../../../../../assets/fonts'

const TrendingOptions = ({ location, distance, post, tag }) => {
    return (
        <View style={styles.container}>
            <ImageFast source={Images.trending} resizeMode={'contain'} style={styles.icon} />
            <View>
                <View style={styles.mincontainer}>
                    <CustomText label={location} fontFamily={fonts.semiBold} fontSize={16} />
                    <CustomText label={distance} fontFamily={fonts.extraLight} fontSize={14} />
                </View>
                <View style={styles.mincontainer2}>
                    <CustomText label={post} fontFamily={fonts.light} fontSize={14} />
                    <CustomText label={tag} fontFamily={fonts.light} fontSize={14} />
                </View>
            </View>
        </View>
    )
}

export default TrendingOptions

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        gap: 10,
    },

    icon: {
        height: 48,
        width: 48
    },
    mincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 150
    },
    mincontainer2: {
        marginTop: 10,
        flexDirection: 'row',
        gap:10
    }
})