import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Topbar from '../../../../components/auth/Topbar';
import { useNavigation } from '@react-navigation/native';

const Avatar = () => {
    const navigation = useNavigation()
    const handleCompleteAndEarn = () => {
        navigation.navigate('Ready', { 
            fromCompleteAndEarn: true,
            avatarCompleted: true 
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Topbar title='Choose an avatar' />
            <View style={style.container}>
                <View >
                <Image source={require('../../../../assets/auth/icon3.png')} style={style.img}/>
                </View>
                <Text style={style.title}>Set profile Image</Text>
                <Text style={style.subtitle}>Min 400x400px, PNG or JPEG</Text>
                <TouchableOpacity>
                    <Text style={style.btn}>Choose Avatar</Text>
                </TouchableOpacity>
                <Text style={style.des}>I will do later</Text>
            </View>
            <View style={style.buttonContainer}>
                <TouchableOpacity
                    style={style.completeButton}
                    onPress={handleCompleteAndEarn}
                >
                    <Text style={style.buttonText}>Complete and earn </Text>
                    <View style={style.pointsContainer}>
                        <Image source={require('../../../../assets/auth/points.png')} />
                        <Text style={style.pointsText}>+50 Points</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        
    },
    title: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'light'
    },
    btn: {
        marginVertical: 15,
        borderWidth: 1,
        borderColor: '#E1E4EA',
        padding: 10,
        paddingHorizontal:15,
        borderRadius: 8,
    },
    des: {
        textDecorationLine: 'underline'
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        backgroundColor: 'white',
        marginTop: 150,
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
    img:{
        height:120,
        width:120,
        borderRadius:120
    }
})

export default Avatar;