import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomText from '../CustomText'
import ImageFast from '../ImageFast'
import { useNavigation } from '@react-navigation/native'
import fonts from '../../assets/fonts'

const NotCompletedCard = ({title, des, icon, action}) => {
    const navigation = useNavigation()
  return (
     <TouchableOpacity onPress={action}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <ImageFast source={icon} resizeMode={'contain'} style={styles.infoicon} />
            <View style={styles.cardText}>
              <View style={styles.header1}>
                <CustomText label={title} fontSize={14} textAlign={'center'} marginRight={6} marginBottom={5} fontFamily={fonts.semiBold} />
              </View>
              <CustomText label={des} fontSize={12} color={'#525866'} fontFamily={fonts.regular}/>
            </View>
          </View>
          
          <View style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
            <Image source={require('../../assets/auth/points.png')} />
            <View style={styles.pointsBadgeButton}>
              <Text style={styles.pointsTextButton}>50 Points</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity> 
  )
}

export default NotCompletedCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E1E4EA',
        padding: 12,
        marginBottom: 15,
    },
    infoicon: {
        height: 38,
        width: 38,
        marginRight: 10
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardText: {
        flex: 1,
    },
    header1: {
        flexDirection: 'row'
    },
    continueButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E1E4EA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    continueButtonText: {
        fontSize: 12,
        color: '#666',
        fontFamily:fonts.regular,
    },
    pointsBadgeButton: {
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    pointsTextButton: {
        fontSize: 10,
        color: '#FF2557',
        fontWeight: '500',
        fontFamily:fonts.regular,
    }
})