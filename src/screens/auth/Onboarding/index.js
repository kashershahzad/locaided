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

const Onboarding = () => {
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

    const closeModal = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setLoginModalVisible(false);
            setCreateAccountModalVisible(false);
        });
    };

    const LoginModal = () => (
        <Modal
            animationType="none"
            transparent={true}
            visible={loginModalVisible}
            onRequestClose={closeModal}
        >
            <View style={modalStyles.overlay}>
                <Animated.View
                    style={[
                        modalStyles.container,
                        {
                            transform: [{
                                translateY: slideAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [600, 0]
                                })
                            }],
                            opacity: slideAnim
                        }
                    ]}
                >
                    <View style={modalStyles.header}>
                        <Text style={modalStyles.headerTitle}>Login</Text>
                        <TouchableOpacity onPress={closeModal} style={modalStyles.closeButton}>
                            <Image style={modalStyles.closeButtonText} source={require('../../../../assets/auth/close.png')} />
                        </TouchableOpacity>
                    </View>

                    {/* Dotted line */}
                    <View style={modalStyles.dottedLine} />

                    {/* Logo and brand */}
                    <View style={modalStyles.brandContainer}>
                        <Image source={require('../../../../assets/auth/logo.png')} />
                        <Text style={modalStyles.brandTagline}>people. places. proof.</Text>
                    </View>

                    {/* Welcome text */}
                    <View style={modalStyles.welcomeContainer}>
                        <Text style={modalStyles.welcomeTitle}>Welcome Back!</Text>
                        <Text style={modalStyles.welcomeSubtitle}>Login to continue sharing your local moments.</Text>
                    </View>

                    {/* Login options */}
                    <View style={modalStyles.optionsContainer}>
                        <TouchableOpacity style={modalStyles.appleButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../../../assets/auth/apple.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Apple</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.googleButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../../../assets/auth/google.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.phoneButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../../../assets/auth/iphone.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Phone</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{navigation.navigate('Emaillogin')}} style={modalStyles.emailButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../../../assets/auth/mail.png')} />
                            <Text style={modalStyles.emailButtonText}>Continue with Email</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Create account link */}
                    <View style={modalStyles.dottedLine} />
                    <View style={modalStyles.createAccountContainer}>
                        <Text style={modalStyles.noAccountText}>DON'T HAVE AN ACCOUNT?</Text>
                        <TouchableOpacity
                            onPress={()=>{navigation.navigate('CreateAccount')}}
                        >
                            <Text style={modalStyles.createAccountLink}>Create account</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Terms */}
                    <Text style={modalStyles.termsText}>
                        By continuing, you agree to our Terms & Privacy Policy
                    </Text>

                    {/* Bottom indicator */}
                    <View style={modalStyles.bottomIndicator} />
                </Animated.View>
            </View>
        </Modal>
    );

    const CreateAccountModal = () => (
        <Modal
            animationType="none"
            transparent={true}
            visible={createAccountModalVisible}
            onRequestClose={closeModal}
        >
            <View style={modalStyles.overlay}>
                <Animated.View
                    style={[
                        modalStyles.container,
                        {
                            transform: [{
                                translateY: slideAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [600, 0]
                                })
                            }],
                            opacity: slideAnim
                        }
                    ]}
                >
                    <View style={modalStyles.header}>
                        <Text style={modalStyles.headerTitle}>Create Account</Text>
                        <TouchableOpacity onPress={closeModal} style={modalStyles.closeButton}>
                            <Image style={modalStyles.closeButtonText2} source={require('../../../../assets/auth/close.png')} />
                        </TouchableOpacity>
                    </View>

                    {/* Dotted line */}
                    <View style={modalStyles.dottedLine} />

                    {/* Logo and brand */}
                    <View style={modalStyles.brandContainer}>
                        <Image source={require('../../../../assets/auth/logo.png')} />
                        <Text style={modalStyles.brandTagline}>people. places. proof.</Text>
                    </View>

                    {/* Welcome text */}
                    <View style={modalStyles.welcomeContainer}>
                        <Text style={modalStyles.welcomeTitle}>Welcome Back!</Text>
                        <Text style={modalStyles.welcomeSubtitle}>Sign in to book unforgettable experiences and manage your upcoming sessions.</Text>
                    </View>

                    {/* Login options */}
                    <View style={modalStyles.optionsContainer}>
                        <TouchableOpacity style={modalStyles.appleButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../../../assets/auth/apple.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Apple</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.googleButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../../../assets/auth/google.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.phoneButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../../../assets/auth/iphone.png')} />
                            <Text style={modalStyles.buttonText}>Continue with Phone</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={modalStyles.emailButton}>
                            <Image style={modalStyles.appleIcon} source={require('../../../../assets/auth/mail.png')} />
                            <Text style={modalStyles.emailButtonText}>Continue with Email</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Create account link */}
                    <View style={modalStyles.dottedLine} />
                    <View style={modalStyles.createAccountContainer}>
                        <Text style={modalStyles.noAccountText}>HAVE AN ACCOUNT?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                closeModal();
                                setTimeout(() => openModal('login'), 300);
                            }}
                        >
                            <Text style={modalStyles.createAccountLink2}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Terms */}
                    <Text style={modalStyles.termsText}>
                        By continuing, you agree to our Terms & Privacy Policy
                    </Text>

                    {/* Bottom indicator */}
                    <View style={modalStyles.bottomIndicator} />
                </Animated.View>
            </View>
        </Modal>
    );

    return (
        <>
            <View style={style.container}>
                <View style={style.imageContainer}>
                    <Image
                        source={require('../../../../assets/auth/Phone.png')}
                        style={style.image}
                    />
                    <View style={style.shadowOverlay} />

                    <View style={style.textContainer}>
                        <Text style={style.heading}>Welcome to Locaided</Text>
                        <Text style={style.subheading}>Capture what's happening around you, share it instantly, and earn for every impactful moment.</Text>

                        <Image style={style.frame}
                            source={require('../../../../assets/auth/frame.png')} />

                        <View style={style.btns}>
                            <TouchableOpacity onPress={() => openModal('create')}>
                                <Text style={style.btn}>Create Account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => openModal('login')}>
                                <Text style={style.btn1}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <LoginModal />
            <CreateAccountModal />
        </>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
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
        bottom: -50,
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
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subheading: {
        color: '#525866',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 22,
    },
    frame: {
        marginVertical: 20,
    },
    btn: {
        backgroundColor: "black",
        color: '#FFFFFF',
        paddingHorizontal: 80,
        paddingVertical: 12,
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: "center"
    },
    btn1: {
        color: 'black',
        paddingHorizontal: 80,
        paddingVertical: 12,
        borderRadius: 10,
        fontWeight: 'bold',
        borderColor: "#E1E4EA",
        borderWidth: 2,
        textAlign: "center"
    },
    btns: {
        gap: 10,
        paddingVertical: 10
    }
});

const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 20,
        maxHeight: '85%',
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
        borderWidth: 1,
        borderColor: '#E1E4EA',
        marginBottom: 30,
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
        marginBottom: 15,
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

export default Onboarding;