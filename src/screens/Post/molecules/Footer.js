import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../components/ImageFast'
import { Images } from '../../../../assets'
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine'
import { useNavigation } from '@react-navigation/native'
import CustomText from '../../../../components/CustomText'

const Footer = ({ tag }) => {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.container}>
                <ImageFast source={Images.locationicon} style={styles.icon} resizeMode={'contain'} />

                {tag  ? <ImageFast source={Images.tag2} style={styles.icon} resizeMode={'contain'} onPress={() => navigation.navigate('Tag')} /> : <ImageFast source={Images.tagicon} style={styles.icon} resizeMode={'contain'} onPress={() => navigation.navigate('Tag')} />}

                <CustomText label={tag} />
            </View>
            <CustomHorizontalLine height={1} />
            <View style={styles.container}>
                <ImageFast source={Images.newpost} style={styles.icon2} resizeMode={'contain'} />
                <ImageFast source={Images.camera} style={styles.icon2} resizeMode={'contain'} />
                <ImageFast source={Images.gallery} style={styles.icon2} resizeMode={'contain'} />
                <ImageFast source={Images.gif} style={styles.icon2} resizeMode={'contain'} />
                <ImageFast source={Images.eys2} style={styles.icon2} resizeMode={'contain'} />
                <ImageFast source={Images.newpost2} style={styles.icon2} resizeMode={'contain'} />
            </View>
        </>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 9,
        marginLeft: 15,
        marginVertical: 7,
    },
    icon: {
        height: 15,
        width: 16,
    },
    icon2: {
        height: 24,
        width: 24,
    },

})