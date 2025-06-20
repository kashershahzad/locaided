import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageFast from '../ImageFast'
import CustomText from '../CustomText'

const CompletedCard = ({title, icon, des}) => {
    return (
        <View style={[styles.card, styles.completedCard]}>
            <View style={styles.cardContent}>
                <ImageFast source={icon} resizeMode={'contain'} style={styles.infoicon} />
                <View style={styles.cardText}>
                    <View style={styles.cardHeader}>
                        <CustomText label={title} fontSize={14} textAlign={'center'} marginRight={6} />
                        <View style={styles.pointsBadge}>
                            <ImageFast source={require('../../assets/auth/points.png')} style={styles.pointsimg} />
                            <CustomText label={'+25 points'} fontSize={10} color={'#FF2557'} />
                        </View>
                    </View>
                    <CustomText label={des} fontSize={12} color={'#525866'} />
                </View>
                <ImageFast source={require('../../assets/auth/tick.png')} resizeMode={'contain'} style={styles.tick} />
            </View>
        </View>
    )
}

export default CompletedCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E1E4EA',
        padding: 10,
        marginBottom: 15,
    },
    infoicon: {
        height: 38,
        width: 38,
        marginRight: 10
    },
    completedCard: {
        borderWidth: 1.5,
        borderColor: '#ff6b8a',
        backgroundColor: '#fff',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardText: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    pointsBadge: {
        flexDirection: 'row',
        gap: 3
    },
    pointsimg: {
        height: 16,
        width: 16
    },
    tick: {
        height: 24,
        width: 24,
        marginTop: 5,
    }
})