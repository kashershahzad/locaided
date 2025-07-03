import React, { useState } from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Modal,
    Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../../../assets/fonts';

const Locationaccess = () => {
    const navigation = useNavigation()
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [createAccountModalVisible, setCreateAccountModalVisible] = useState(false);
    const [slideAnim] = useState(new Animated.Value(0));

    const openModal = (modalType) => {
        if (modalType === 'login') {
            setLoginModalVisible(true);
        } else {
            setCreateAccountModalVisible(true);
        }

        Animated.timing(slideAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <>
            <View style={style.container}>
                <View style={style.icon}>
                    <Image source={require('../../../../assets/auth/locationicon.png')} />
                </View>
                <View style={style.imageContainer}>
                    <Image
                        source={require('../../../../assets/auth/location.png')}
                        style={style.image}
                    />
                    <View style={style.shadowOverlay} />
                    <View style={style.textContainer}>
                        <Text style={style.heading}>We Need Your Location</Text>
                        <Text style={style.subheading}>Locaided uses your location to help you discover and share real-time moments happening around you.</Text>
                        <View style={style.btns}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Ready')}} >
                                <Text style={style.btn}>Grant Access to Location</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 80,
        position: 'relative',
    },
    imageContainer: {
        position: 'relative',
    },
    shadowOverlay: {
        position: 'absolute',
        bottom: 150,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: 'white',
        opacity: 0.5,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        elevation: 20,
    },
    textContainer: {
        position: 'absolute',
        bottom: -70,
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        flex: 1,
        height: 280,
    },
    heading: {
        color: 'black',
        fontSize: 24,
        fontFamily:fonts.semiBold,
        textAlign: 'center',
        marginBottom: 10,
    },
    subheading: {
        color: '#525866',
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 22,
        fontFamily:fonts.regular,
        marginBottom:10,
    },
    frame: {
        marginVertical: 20,
    },
    btn: {
        backgroundColor: "black",
        color: '#FFFFFF',
        borderRadius: 10,
        fontFamily:fonts.semiBold,
        textAlign: "center",
        fontSize: 14,
        width: 300,
        paddingVertical: 20,
    },
    btns: {
        gap: 10,
        paddingVertical: 10
    },
    icon: {
        position: 'absolute',
        alignItems: 'center',
        top: 230,
        left: 130,
        zIndex: 10,
    }
});



export default Locationaccess;