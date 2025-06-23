import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'

export default function Postbutton() {
    return (
        <View style={styles.container}>
            <ImageFast source={Images.homebutton} style={styles.button}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20, 
        zIndex: 100
    },
    button: {
        width: 56, 
        height: 56,
        resizeMode: 'contain'
    }
})