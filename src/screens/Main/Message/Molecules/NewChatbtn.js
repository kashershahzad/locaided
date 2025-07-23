import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
                    <TouchableOpacity key={i} style={styles.container} onPress={item.function}>
                        <ImageFast source={item.icon} style={styles.icon} resizeMode={'contain'} />
                        <View style={styles.mincontainer} >
                            <View style={styles.mxcontainer}>
                            <CustomText label={item.title} fontSize={14} fontFamily={fonts.semiBold} />
                            <ImageFast source={item.status} style={styles.icon3} resizeMode={'contain'}/>
                            </View>
                            <CustomText label={item.desc} fontSize={12} fontFamily={fonts.regular} color={'#525866'} />
                        </View>
                        <ImageFast source={Images.arrowright} style={styles.icon2} resizeMode={'contain'} />
                    </TouchableOpacity>
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
    mxcontainer:{
      flexDirection:'row',
      gap:5,
    },
    icon2: {
        height: 20,
        width: 20,
        position:'absolute',
        left:300,
        top:25,

    },
    icon3:{
        height:17,
        width:56,
    }
})