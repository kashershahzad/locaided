import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import CustomText from '../../../../../components/CustomText'
import { Images } from '../../../../../assets'

const SuccessfullPostRating = () => {
    return (
        <View>
            <View style={styles.mincontainer}>

                <CustomText label="Rate this post" fontSize={16} textAlign={'center'} />

            </View>
            <View style={styles.horizontalLine} />
            
            <ImageFast source={Images.postrate} style={styles.post} resizeMode={'contain'} />
        </View>
    )
}

export default SuccessfullPostRating

const styles = StyleSheet.create({
    mincontainer: {
        paddingVertical: 2,
        paddingHorizontal: 20
    },
    horizontalLine: {
        borderBottomColor: '#E1E4EA',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    post:{
        height:96,
        width:96,
        alignSelf:'center',
        marginVertical:25,
    }
})