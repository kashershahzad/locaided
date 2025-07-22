import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomModal from '../../../../../components/CustomModal'
import { COLORS } from '../../../../utiles/COLORS'
import CustomText from '../../../../../components/CustomText'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import fonts from '../../../../../assets/fonts'
import CustomHorizontalLine from '../../../../../components/CustomHorizontalLine'
import NewChatbtn from './NewChatbtn'

const btnData = [
    {
        title: 'Private Chat',
        desc: 'Chat 1-on-1 by searching a user.',
        icon: Images.privatechat,
    },
    {
        title: 'Private Chat',
        desc: 'Chat 1-on-1 by searching a user.',
        icon: Images.chatlocation,
    },
    {
        title: 'Private Chat',
        desc: 'Chat 1-on-1 by searching a user.',
        icon: Images.chatlocation,
    },
]

const NewChatModel = ({model}) => {
    return (
        <View>
            <CustomModal 
                isBlur
                blurType='light'
                blurAmount={10}
                isChange
                isVisible
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modelheader}>
                        <CustomText label={'Start New Chat'} fontSize={18} fontFamily={fonts.regular} />
                        <ImageFast source={Images.close} resizeMode={'contain'} style={styles.closeicon} onPress={()=>model(false)}/>
                    </View>
                    <CustomHorizontalLine />
                    <NewChatbtn info={btnData} />
                </View>
            </CustomModal>
        </View>
    )
}

export default NewChatModel

const styles = StyleSheet.create({
    modalContainer: {
        paddingVertical: 10,
        backgroundColor: COLORS.white,
        borderRadius:16,
    },
    modelheader: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        gap: 90,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 15,
    },
    closeicon: {
        height: 12,
        width: 12,
        marginTop: 5,
    }
})