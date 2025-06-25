import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomModal from '../../../../../components/CustomModal'
import CustomText from '../../../../../components/CustomText'
import { COLORS } from '../../../../utiles/COLORS'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import ToggleButtons from './ToggleButtons'
const PostRateModel = ({ modal, onClose }) => {
    return (
        <View>
            <CustomModal
                isVisible={modal}
                isBlur
                blurType='light'
                blurAmount={5}
                isChange
            >
                <View style={styles.modalContainer}>
                    <View style={styles.mincontainer}>
                        <ImageFast source={Images.back} style={styles.backicon}/>
                        <CustomText
                        label="Rate this post"
                        fontSize={16}/>
                        <ImageFast onPress={onClose} source={Images.close} style={styles.closeicon}/>
                    </View>
                    <View style={styles.horizontalLine} />


                    <ToggleButtons title='Accuracy' option1='Misleading' option2='Factual'/>

                    <ToggleButtons title='Source Credibility' option1='Fabricated' option2='Out of context'/>

                    <ToggleButtons title='Select Content Risk Level' option1='Illegal' option2='Harmful' option3='Safe'/>
                </View>
            </CustomModal>
        </View>
    )
}

export default PostRateModel

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
        justifyContent:'space-between',
        // alignItems:'center',
        // justifyContent:'space-between',
        // marginLeft:110,
        // justifyContent: 'flex-end',
        // gap: 90,
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    closeicon: {
        height: 12,
        width: 12,
        marginTop:5,
    },

    backicon:{
        height:20,
        width:20,
        marginTop:5,
    },

     horizontalLine: {
        borderBottomColor: '#E1E4EA',
        borderBottomWidth: 1,
        marginTop: 10,
    },
})