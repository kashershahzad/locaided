import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../../../../assets'
import ImageFast from '../../../../../components/ImageFast'
import CustomText from '../../../../../components/CustomText'
import fonts from '../../../../../assets/fonts'
import { useNavigation } from '@react-navigation/native'
import CustomHorizontalLine from '../../../../../components/CustomHorizontalLine'

const Header = ({ title, righticon }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.mincontainer}>
            <View style={styles.container}>
                <ImageFast onPress={() => { navigation.goBack() }} source={Images.back} style={styles.icon} resizeMode={'contain'} />
                <CustomText label={title} fontSize={17} fontFamily={fonts.regular} color={'#0E121B'} />
                <ImageFast source={righticon} style={styles.icon} resizeMode={'contain'} />

            </View>
            <CustomHorizontalLine style={styles.line} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    mincontainer: {

        marginVertical: 20
    },
    icon: {
        height: 24,
        width: 24
    },
    line: {
        marginTop: 15,
    }

})