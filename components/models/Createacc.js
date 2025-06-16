// components/CreateAccountModal.js
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Createacc= ({ visible, closeModal, openLoginModal }) => {
    const navigation = useNavigation();

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <View style={modalStyles.overlay}>
                <View
                    style={[
                        modalStyles.container,
                    ]}
                >
                    <View style={modalStyles.header}>
                        <Text style={modalStyles.headerTitle}>Create Account</Text>
                        <TouchableOpacity onPress={closeModal} style={modalStyles.closeButton}>
                            <Image style={modalStyles.closeButtonText2} source={require('../../assets/auth/close.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={modalStyles.dottedLine} />

                    <View style={modalStyles.brandContainer}>
                        <Image source={require('../../assets/auth/logo.png')} />
                        <Text style={modalStyles.brandTagline}>people. places. proof.</Text>
                    </View>

                    <View style={modalStyles.welcomeContainer}>
                        <Text style={modalStyles.welcomeTitle}>Welcome Back!</Text>
                        <Text style={modalStyles.welcomeSubtitle}>Sign in to book unforgettable experiences and manage your upcoming sessions.</Text>
                    </View>

                    <View style={modalStyles.optionsContainer}>
                        <TouchableOpacity style={modalStyles.appleButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../assets/auth/apple.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Apple</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.googleButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../assets/auth/google.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.phoneButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../assets/auth/iphone.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Phone</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{navigation.navigate('Emaillogin')}} style={modalStyles.emailButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../assets/auth/mail.png')} />
                            <Text style={modalStyles.emailButtonText}>Continue with Email</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={modalStyles.dottedLine} />
                    <View style={modalStyles.createAccountContainer}>
                        <Text style={modalStyles.noAccountText}>HAVE AN ACCOUNT?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                closeModal();
                                setTimeout(() => openLoginModal(), 300);
                            }}
                        >
                            <Text style={modalStyles.createAccountLink2}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={modalStyles.termsText}>
                        By continuing, you agree to our Terms & Privacy Policy
                    </Text>

                    <View style={modalStyles.bottomIndicator} />
                </View>
            </View>
        </Modal>
    );
};

export default Createacc;



export const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 20,
        maxHeight: '88%',
    },
    blueBorder: {
        height: 4,
        backgroundColor: '#007AFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        position: 'relative',
    },
    headerTitle: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
    closeButton: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        marginLeft: 230
    },
    dottedLine: {
        height: 1,
        borderColor: '#E1E4EA',
        marginBottom: 30,
        backgroundColor: '#E1E4EA',
    },
    brandContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    brandName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    brandTagline: {
        fontSize: 12,
        color: '#666',
        fontStyle: 'italic',
        marginTop: 5,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 0,
    },
    welcomeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 8,
    },
    welcomeSubtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
    optionsContainer: {
        paddingHorizontal: 20,
        gap: 12,
        marginBottom: 25,
    },
    appleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E1E4EA',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E1E4EA',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    phoneButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E1E4EA',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    emailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    appleIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    googleIcon: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4285F4',
        marginRight: 10,
    },
    phoneIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    emailIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    emailButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    createAccountContainer: {
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    noAccountText: {
        fontSize: 12,
        color: '#999',
        letterSpacing: 0.5,
        marginBottom: 5,
        position:"relative",
        bottom:41,
        backgroundColor:'white',
        paddingHorizontal:8,
    },
    createAccountLink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        position:"relative",
        bottom:30,
        textAlign:'center',
        borderWidth:1,
        paddingHorizontal:90,
        paddingVertical:10,
        borderRadius:10,
        borderColor:'#E1E4EA'
    },
    termsText: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        paddingHorizontal: 10,
        lineHeight: 16,
        marginTop: 10,
        position:'relative',
        bottom :45,
    },
    bottomIndicator: {
        width: 40,
        height: 4,
        backgroundColor: '#E1E4EA',
        borderRadius: 2,
        alignSelf: 'center',
    },
    closeButtonText2:{
        marginLeft: 170
    },
    createAccountLink2:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        position:"relative",
        bottom:30,
        textAlign:'center',
        borderWidth:1,
        paddingHorizontal:125,
        paddingVertical:10,
        borderRadius:10,
        borderColor:'#E1E4EA'
    }
});