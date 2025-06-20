import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Pointsbtn = ({action}) => {
    return (
        <View style={style.buttonContainer}>
            <TouchableOpacity
                style={style.completeButton}
                onPress={action}
            >
                <Text style={style.buttonText}>Complete and earn </Text>
                <View style={style.pointsContainer}>
                    <Image source={require('../../assets/auth/points.png')} />
                    <Text style={style.pointsText}>+50 Points</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Pointsbtn

const style = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        backgroundColor: 'white',
        marginTop: 15,
    },
    completeButton: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    pointsText: {
        fontSize: 15,
        color: '#F6B51E',
        fontWeight: '500',
    },
})