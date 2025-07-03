import React, { useState } from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    Image
} from 'react-native';

import Topbar from '../../../../components/auth/Topbar';
import { useNavigation } from '@react-navigation/native';
import fonts from '../../../../assets/fonts';

const Emaillogin = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Topbar
                    title="Login with Email"
                />

                <View style={styles.content}>
                    <View style={styles.logoSection}>
                        <Image style={styles.logo} source={require('../../../../assets/auth/logo.png')} />
                        <Text style={styles.tagline}>people. places. proof.</Text>
                    </View>

                    <Text style={styles.title}>Login to Your Account</Text>
                    <Text style={styles.subtitle}>Login to continue sharing your local moments.</Text>

                    {/* Email Input */}
                    <View style={styles.inputSection}>
                        <Text style={styles.inputLabel}>Email address</Text>
                        <View style={styles.inputContainer}>
                            <Image source={require('../../../../assets/auth/email.png')} style={styles.inputIcon} />
                            <TextInput
                                style={styles.textInput}
                                value={email}
                                onChangeText={setEmail}
                                placeholder="johndoe@example.com"
                                placeholderTextColor="#99A0AE"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputSection}>
                        <View style={styles.passwordHeader}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TouchableOpacity>
                                <Text style={styles.forgotPassword}>Forgot password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Image source={require('../../../../assets/auth/pass.png')} style={styles.inputIcon} />
                            <TextInput
                                style={styles.textInput}
                                value={password}
                                onChangeText={setPassword}
                                placeholder="••••••••••"
                                placeholderTextColor="#999"
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity
                                style={styles.eyeIcon}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Image source={require('../../../../assets/auth/eye.png')} style={styles.inputIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Social Login Buttons */}
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../../../../assets/auth/apple.png')} style={styles.inputIcon} />
                        <Text style={styles.socialButtonText}>Continue with Apple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
                        <Image source={require('../../../../assets/auth/google.png')} style={styles.inputIcon} />
                        <Text style={styles.socialButtonText}>Continue with Google</Text>
                    </TouchableOpacity>



                </View>
                <View style={styles.createAccountContainer}>
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>DON'T HAVE AN ACCOUNT</Text>
                        <View style={styles.dividerLine} />
                    </View>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('CreateAccount') }}
                    >
                        <Text style={styles.createAccountLink}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardView: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    backButton: {
        marginRight: 15,
    },
    backArrow: {
        fontSize: 24,
        color: '#333',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logoSection: {
        alignItems: 'center',
        marginBottom: 24,
    },
    logo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
        marginTop: 20
    },
    tagline: {
        fontSize: 12,
        color: '#666',
        fontStyle: 'italic',
    },
    title: {
        fontSize: 20,
        fontFamily:fonts.semiBold,
        color: '#333',
        marginBottom: 6,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        lineHeight: 18,
        textAlign: 'center',
        fontFamily:fonts.regular,
    },
    inputSection: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 13,
        color: '#333',
        marginBottom: 6,
        fontWeight: '500',
        fontFamily:fonts.regular,
    },
    passwordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    forgotPassword: {
        fontSize: 13,
        color: '#525866',
        textDecorationLine: 'underline',
        fontFamily:fonts.regular,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: 'white'
    },
    inputIcon: {
        fontSize: 14,
        marginRight: 10,
        color: '#666',
        backgroundColor: 'white'
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        color: '#333',
        height: '100%',
        backgroundColor: 'white'
    },
    eyeIcon: {
        padding: 2,
    },
    eyeIconText: {
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: 'black',
        borderRadius: 16,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 15,
        fontFamily:fonts.semiBold,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    dividerText: {
        marginHorizontal: 12,
        fontSize: 12,
        color: '#666',
        fontFamily:fonts.regular,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 16,
        height: 45,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    googleButton: {
        marginBottom: 20,
    },
    appleIcon: {
        fontSize: 16,
        marginRight: 6,
    },
    googleIcon: {
        fontSize: 16,
        marginRight: 6,
        fontWeight: 'bold',
        color: '#4285F4',
    },
    socialButtonText: {
        fontSize: 14,
        color: '#333',
        fontFamily:fonts.semiBold,
        fontWeight: '500',
    },
    footer: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 10,
        color: '#999',
        letterSpacing: 0.5,
        marginBottom: 6,
    },
    createAccountText: {
        fontSize: 14,
        color: '#333',
        fontWeight: '600',
        fontFamily:fonts.semiBold,
    },
    dottedLine: {
        
        borderWidth: 1,
        borderColor: '#E1E4EA',

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
        position: "relative",
        bottom: 12,
        backgroundColor: 'white',
        paddingHorizontal: 8,
    },
    createAccountLink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        position: "relative",
        bottom: 8,
        textAlign: 'center',
        borderWidth: 1,
        paddingHorizontal: 90,
        paddingVertical: 10,
        borderRadius: 16,
        marginTop:7,
        borderColor: '#E1E4EA'
    },
});

export default Emaillogin;