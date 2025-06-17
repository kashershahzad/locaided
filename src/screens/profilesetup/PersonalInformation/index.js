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
    Image,
    ScrollView
} from 'react-native';
import Topbar from '../../../../components/auth/Topbar';
import { useNavigation } from '@react-navigation/native';

const PersonalInformation = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('joe34');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('Male');
    const [showGenderDropdown, setShowGenderDropdown] = useState(false);

    const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

    const handleCompleteAndEarn = () => {
        // Navigate to Ready screen with a parameter indicating this is from Complete and Earn
        navigation.navigate('Ready', { fromCompleteAndEarn: true });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Topbar title='Personal Information' />

            <View style={styles.mainContent}>
                {/* Profile Image */}
                <View style={styles.acc}>
                    <Image source={require('../../../../assets/auth/profile.png')} style={styles.profileImage} />
                </View>

                <Text style={styles.title}>Personal Information</Text>

                {/* Subtitle */}
                <Text style={styles.subtitle}>Let others recognize and connect with you.</Text>

                {/* Form Fields */}
                <View style={styles.formContainer}>
                    {/* First Name */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>First Name</Text>
                        <View style={styles.inputWrapper}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../../../assets/auth/ppl.png')} />
                            </View>
                            <TextInput
                                style={styles.textInput}
                                value={firstName}
                                onChangeText={setFirstName}
                                placeholder="Enter first name"
                                placeholderTextColor="#999"
                            />
                        </View>
                    </View>

                    {/* Last Name */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Last Name</Text>
                        <View style={styles.inputWrapper}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../../../assets/auth/ppl.png')} />
                            </View>
                            <TextInput
                                style={styles.textInput}
                                value={lastName}
                                onChangeText={setLastName}
                                placeholder="Enter last name"
                                placeholderTextColor="#999"
                            />
                        </View>
                    </View>

                    {/* Username */}
                    <View style={styles.inputContainer}>
                        <View style={styles.username}>
                            <Text style={styles.label}>Username</Text>
                            <View style={styles.availableContainer}>
                                <Text style={styles.availableText}>✓ Available</Text>
                            </View>
                        </View>
                        <View style={styles.inputWrapper}>
                            <View style={styles.iconContainer}>
                                <Text style={styles.icon}>@</Text>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                value={username}
                                onChangeText={setUsername}
                                placeholder="Enter username"
                                placeholderTextColor="#999"
                            />
                        </View>
                        <Text style={styles.helperText}> @ Your public handle, like @coolname123</Text>
                    </View>

                    {/* Date of Birth */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Date of birth</Text>
                        <View style={styles.inputWrapper}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../../../assets/auth/calendar.png')} />
                            </View>
                            <TextInput
                                style={styles.textInput}
                                value={dateOfBirth}
                                onChangeText={setDateOfBirth}
                                placeholder="Select date"
                                placeholderTextColor="#999"
                            />
                        </View>
                    </View>

                    {/* Gender */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Gender</Text>
                        <TouchableOpacity
                            style={styles.dropdownWrapper}
                            onPress={() => setShowGenderDropdown(!showGenderDropdown)}
                        >
                            <Text style={styles.dropdownText}>{gender}</Text>
                            <Image source={require('../../../../assets/auth/arrowdown.png')} />
                        </TouchableOpacity>

                        {showGenderDropdown && (
                            <View style={styles.dropdownOptions}>
                                {genderOptions.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.dropdownOption}
                                        onPress={() => {
                                            setGender(option);
                                            setShowGenderDropdown(false);
                                        }}
                                    >
                                        <Text style={[
                                            styles.dropdownOptionText,
                                            gender === option && styles.selectedOption
                                        ]}>
                                            {option}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                </View>

                {/* Complete Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.completeButton}
                        onPress={handleCompleteAndEarn}
                    >
                        <Text style={styles.buttonText}>Complete and earn </Text>
                        <View style={styles.pointsContainer}>
                            <Image source={require('../../../../assets/auth/points.png')} />
                            <Text style={styles.pointsText}>+50 Points</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    mainContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    keyboardAvoid: {
        flex: 1,
    },
    acc: {
        alignItems: "center",
        marginBottom: 5,
        marginTop: 10,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 13,
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
        lineHeight: 18,
    },
    formContainer: {
        paddingHorizontal: 20,
        flex: 1,
    },
    inputContainer: {
        marginBottom: 7,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        paddingHorizontal: 10,
        height: 45,
    },
    iconContainer: {
        marginRight: 12,
    },
    icon: {
        fontSize: 18,
        color: '#666',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        paddingVertical: 0,
    },
    availableContainer: {
        marginLeft: 8,
        flexDirection: 'row'
    },
    availableText: {
        fontSize: 14,
        color: '#10B981',
        fontWeight: '500',
    },
    helperText: {
        fontSize: 11,
        color: '#666',
        marginTop: 6,
        marginLeft: 4,
    },
    dropdownWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 14,
        height: 45,
        
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    dropdownArrow: {
        fontSize: 12,
        color: '#666',
    },
    dropdownOptions: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 12,
        marginTop: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        position:'relative',
        bottom:300
    },
    dropdownOption: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    dropdownOptionText: {
        fontSize: 16,
        color: '#333',
    },
    selectedOption: {
        color: '#007AFF',
        fontWeight: '600',
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingBottom: Platform.OS === 'ios' ? 25 : 15,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    completeButton: {
        backgroundColor: '#1a1a1a',
        borderRadius: 15,
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
    pointsIcon: {
        fontSize: 16,
        marginRight: 4,
    },
    pointsText: {
        color: '#FFA500',
        fontSize: 16,
        fontWeight: '600',
    },
    username:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

export default PersonalInformation;