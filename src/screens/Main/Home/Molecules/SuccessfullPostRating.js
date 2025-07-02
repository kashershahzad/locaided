import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import CustomText from '../../../../../components/CustomText'
import CustomButton from '../../../../../components/CustomButton'
import { Images } from '../../../../../assets'

const SuccessfullPostRating = ({close}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.mincontainer}>

                    <CustomText label="Rate this post" fontSize={16} textAlign={'center'} />

                </View>
                <View style={styles.horizontalLine} />

                <ImageFast source={Images.postrate} style={styles.post} resizeMode={'contain'} />

                <CustomText label={'Rating successfully submitted.'} textAlign={'center'} fontSize={18} marginTop={7} />

                <CustomText label={'Thank you for fact-checking. Accurate contributions help others trust what they see.'} textAlign={'center'} fontSize={12} marginTop={10} />

                <View style={styles.coin}>
                    <ImageFast source={Images.coins} style={styles.coinimg} resizeMode={'contain'} />
                    <CustomText label={'You earned'} fontSize={14} />
                    <CustomText label={'+25 social score points'} color={'#FF2557'} fontSize={14} />
                </View>

                <View style={styles.horizontalLine} />


            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <CustomButton
                    title={'Got it'}
                    backgroundColor={'black'}
                    color={'white'}
                    borderRadius={16}
                    onPress={close}
                />
            </View>
        </>
    )
}

export default SuccessfullPostRating

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    mincontainer: {
        paddingVertical: 2,
        paddingHorizontal: 20
    },
    horizontalLine: {
        borderBottomColor: '#E1E4EA',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    post: {
        height: 96,
        width: 96,
        alignSelf: 'center',
        marginTop: 25,
    },

    coinimg: {
        height: 24,
        width: 24,
    },
    coin: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
        gap: 3,
        marginTop:20
    }

})