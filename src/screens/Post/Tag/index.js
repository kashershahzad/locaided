import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Main/Trending/Molecules/Header'
import { Images } from '../../../../assets'
import CustomText from '../../../../components/CustomText'
import ImageFast from '../../../../components/ImageFast'
import fonts from '../../../../assets/fonts'

const Tag = () => {
    return (
        <View>
            <Header title={'Add Caption'} righticon={Images.filter2} />
            <View style={styles.info}>
                <CustomText label={'Select from a wide range of tags to categorize your content, ensuring it reaches the right audience swiftly and effectively.'} fontFamily={fonts.regular} fontSize={11} lineHeight={15}/>
                <ImageFast source={Images.close2} style={styles.closeicon} resizeMode={'contain'} />
            </View>
        </View>
    )
}

export default Tag

const styles = StyleSheet.create({
    info: {
        backgroundColor: '#F1F5F9',
        borderRadius: 8,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingRight:20,
        
    },
    closeicon: {
        height: 8,
        width: 8,
    }
})