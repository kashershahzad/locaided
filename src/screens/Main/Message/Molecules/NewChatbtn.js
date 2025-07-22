import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import CustomText from '../../../../../components/CustomText'
import fonts from '../../../../../assets/fonts'

const NewChatbtn = ({ info }) => {
    return (
        <>
            {
                info.map(((item, i) =>(
                    <View key={i} style={styles.container}>
                        <ImageFast source={item.icon} style={styles.icon} resizeMode={'contain'} />
                        <View style={styles.mincontainer} >
                            <CustomText label={item.title} fontSize={14} fontFamily={fonts.semiBold} />
                            <CustomText label={item.desc} fontSize={14} fontFamily={fonts.regular} color={'#525866'} />
                        </View>
                        <ImageFast source={Images.arrowright} style={styles.icon2} resizeMode={'contain'} />
                    </View>
                )))
            }
        </>
    )
}

export default NewChatbtn

const styles = StyleSheet.create({
    icon: {
        height: 46,
        width: 46
    },
    container: {
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: '#E1E4EA',
        borderRadius: 16,
        marginTop: 20,
        padding: 10,

        flexDirection: 'row',
        gap: 10,
    },
    mincontainer: {
        gap: 5,
    },
    icon2: {
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 20,
    }
})