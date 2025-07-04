import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import CustomText from '../../../../../components/CustomText'
import { COLORS } from '../../../../utiles/COLORS'
import fonts from '../../../../../assets/fonts'
export default function Post({model}) {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.mincontainer}>
                <ImageFast source={Images.profile} resizeMode={'contain'} style={styles.profileimg} />
                <CustomText label={'Max Schmidt'} fontSize={14} marginLeft={5} fontFamily={fonts.semiBold} />
                <CustomText label={'@MaxSchmidt'} fontSize={10} marginLeft={7} marginTop={4} fontFamily={fonts.light} color={'#525866'} />
                <ImageFast source={Images.verify} resizeMode={'contain'} style={styles.verifyimg} />
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>
                        Traffic
                    </Text>
                </View>
            </View>

            <CustomText label={'Stuck on the M6 again 😓 crazy traffic jam! If you’re heading this way, maybe grab a coffee first ☕'} marginLeft={45} marginTop={-13} fontSize={13} fontFamily={fonts.light} color={'#0E121B'} />

            <Image source={require('../../../../../assets/postimg.png')} style={styles.postimg} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 20, marginTop: 8 }}>
                <CustomText label={'3456 London, United Kingdom'} fontSize={10} color={COLORS.gray} fontFamily={fonts.regular}/>
                <CustomText label={'3mins ago'} fontSize={10} color={COLORS.gray} fontFamily={fonts.regular}/>
            </View>

            <View style={styles.postresponce}>
                <View style={styles.icon2}>
                    <ImageFast source={Images.share} resizeMode={'contain'} style={styles.icons} />
                    <CustomText label={'30'} fontSize={10} marginTop={4} color={COLORS.gray} />
                </View>

                <View style={styles.icon2}>
                    <ImageFast source={Images.like} resizeMode={'contain'} style={styles.icons} />
                    <CustomText label={'30'} fontSize={10} marginTop={4} color={COLORS.gray} />
                </View>

                <View style={styles.icon2}>
                    <ImageFast source={Images.repost} resizeMode={'contain'} style={styles.icons} />
                    <CustomText label={'30'} fontSize={10} marginTop={4} color={COLORS.gray} />
                </View>

                <View style={styles.icon2}>
                    <ImageFast source={Images.dislike} resizeMode={'contain'} style={styles.icons} />
                    <CustomText label={'30'} fontSize={10} marginTop={4} color={COLORS.gray} />
                </View>


                 <View style={styles.icon2}>
                    <ImageFast source={Images.share2} resizeMode={'contain'} style={styles.icons} onPress={model} />
                    <CustomText label={'30'} fontSize={10} marginTop={4} color={COLORS.gray}/>
                </View>
            </View>
           
        </View>
         <View style={styles.horizontalLine} />
         </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 17,
        padding: 10,
    },
    mincontainer: {
        flexDirection: 'row'
    },
    profileimg: {
        height: 40,
        width: 40
    },
    verifyimg: {
        height: 24,
        width: 24
    },
    tagContainer: {
        marginLeft: 45
    },
    tag: {
        backgroundColor: '#F2F5F8',
        paddingHorizontal: 12,
        paddingVertical: 6,
        fontSize: 10,
        fontWeight: '500',
        color: COLORS.gray,
        borderRadius: 20,
        textAlign: 'center',
        overflow: 'hidden'
    },
    postimg: {
        marginTop: 10,
        alignSelf: 'center',
        marginLeft: 30,
        width: 290,
        height: 224,
        borderRadius: 12,
    },
    postresponce: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:27,
        marginLeft:30,
        marginRight:10,
        marginTop:9,

    },
    icon2: {
        flexDirection: 'row',
        gap:3
    },
    icons: {
        height: 20,
        width: 20
    },
 horizontalLine: {
        borderBottomColor: '#E1E4EA',
        borderBottomWidth: 1,
        marginTop: 10,
       
    },
}) 