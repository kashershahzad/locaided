import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../utiles/COLORS'
import CustomModal from '../../../../../components/CustomModal'
import CustomText from '../../../../../components/CustomText'
import CustomButton from '../../../../../components/CustomButton'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import fonts from '../../../../../assets/fonts'

export default function HomeModel({ modal, onClose }) {
    return (
        <CustomModal
            isBlur
            blurType='light'
            isChange
            isVisible={modal}
            onDisable={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.mincontainer}>
                    <CustomText
                        label="Post Options"
                        fontSize={16}
                        fontFamily={fonts.light}
                    />
                    <ImageFast source={Images.close} resizeMode={'contain'} style={styles.closeicon} onPress={onClose} />
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.btnContainer}>
                    <CustomButton marginTop={15} fontFamily={fonts.regular} icon={Images.link} title={'Copy link'} borderWidth={1} borderColor={'#E1E4EA'} borderRadius={16} />


                    <CustomButton marginTop={15} icon={Images.share3} title={'Share'} borderWidth={1} borderColor={'#E1E4EA'} borderRadius={16} fontFamily={fonts.regular} />


                    <CustomButton marginTop={15} icon={Images.screenshot} title={'Screenshot'} borderWidth={1} borderColor={'#E1E4EA'} borderRadius={16} fontFamily={fonts.regular} />


                    <CustomButton marginTop={15} icon={Images.route} title={'Route'} borderWidth={1} borderColor={'#E1E4EA'} borderRadius={16} fontFamily={fonts.regular}/>


                    <CustomButton marginTop={15} icon={Images.delete} title={'Delete'} borderWidth={1} borderColor={'#FB3748'} color={'#FB3748'} borderRadius={16} fontFamily={fonts.regular}/>
                </View>
            </View>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        // paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: COLORS.white,
        // alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    mincontainer: {
        flexDirection: 'row',
        // alignItems:'center',
        // justifyContent:'space-between',
        // marginLeft:110,
        justifyContent: 'flex-end',
        gap: 90,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    closeicon: {
        height: 12,
        width: 12,
        marginTop:5,
    },
    horizontalLine: {
        borderBottomColor: '#E1E4EA',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    btnContainer: {
        marginHorizontal: 20,

    }
})