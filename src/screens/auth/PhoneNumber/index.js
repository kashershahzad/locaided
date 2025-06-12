import React, { useState } from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    FlatList,
    Dimensions,
    Image
} from 'react-native';
import Topbar from '../../../../components/auth/Topbar';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');


const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+92', country: 'PK', flag: '🇵🇰' },
];

const PhoneNumber = () => {
    const navigation = useNavigation()
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setModalVisible(false);
    };

    const renderCountryItem = ({ item }) => (
        <TouchableOpacity
            style={styles.countryItem}
            onPress={() => handleCountrySelect(item)}
        >
            <Text style={styles.countryFlag}>{item.flag}</Text>
            <Text style={styles.countryText}>{item.country}</Text>
            <Text style={styles.countryCode}>{item.code}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Topbar title='Phone Number' />
            
            <View style={styles.content}>
                <View style={styles.phonelogo}> <Image source={require('../../../../assets/auth/phoneicon.png')}/></View>
                
                <Text style={styles.title}>What's Your Phone Number?</Text>
                <Text style={styles.subtitle}>
                    We'll send you a 6 digit code to verify your number.
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Phone Number *</Text>
                    
                    <View style={styles.phoneInputRow}>
                        <TouchableOpacity 
                            style={styles.countrySelector}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.flagText}>{selectedCountry.flag}</Text>
                            <Text style={styles.codeText}>{selectedCountry.code}</Text>
                            <View style={styles.dropdownArrow}>
                                <View style={styles.arrowDown} />
                            </View>
                        </TouchableOpacity>

                        <TextInput
                            style={styles.phoneInput}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            placeholder="(555) 000-0000"
                            placeholderTextColor="#999"
                            keyboardType="phone-pad"
                            maxLength={15}
                        />
                    </View>
                </View>

                <View style={styles.disclaimer}>
                    <View style={styles.infoIcon}>
                        <Text style={styles.infoIconText}>i</Text>
                    </View>
                    <Text style={styles.disclaimerText}>
                        Message and data rates may apply.
                    </Text>
                </View>

                <TouchableOpacity 
                    style={[
                        styles.getStartedButton,
                        phoneNumber.length > 0 ? styles.buttonActive : styles.buttonInactive
                    ]}
                    disabled={phoneNumber.length === 0}
                    onPress={()=>{navigation.navigate('Verify')}}
                >
                    <Text style={[
                        styles.buttonText,
                        phoneNumber.length > 0 ? styles.buttonTextActive : styles.buttonTextInactive
                    ]}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Country Selection Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Select Country</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>×</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <FlatList
                            data={countryCodes}
                            renderItem={renderCountryItem}
                            keyExtractor={(item) => item.code}
                            style={styles.countryList}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
        textAlign:'center'
    },
    subtitle: {
        fontSize: 12,
        color: '#666666',
        lineHeight: 22,
        marginBottom: 40,
        textAlign:'center'
    },
    inputContainer: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 12,
    },
    phoneInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countrySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e1e5e9',
        paddingHorizontal: 12,
        paddingVertical: 16,
        minWidth: 100,
    },
    flagText: {
        fontSize: 18,
        marginRight: 8,
    },
    codeText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '500',
        marginRight: 6,
    },
    dropdownArrow: {
        marginLeft: 4,
    },
    arrowDown: {
        width: 0,
        height: 0,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderTopWidth: 6,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#666666',
    },
    phoneInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e1e5e9',
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#ffffff',
    },
    disclaimer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 40,
        paddingHorizontal: 4,
    },
    infoIcon: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#e1e5e9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 2,
    },
    infoIconText: {
        fontSize: 12,
        color: '#666666',
        fontWeight: 'bold',
    },
    disclaimerText: {
        fontSize: 14,
        color: '#666666',
        flex: 1,
        lineHeight: 20,
    },
    getStartedButton: {
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 32,
    },
    buttonActive: {
        backgroundColor: '#0E121B',
        color:'white'
    },
    buttonInactive: {
        backgroundColor: '#f0f0f0',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    buttonTextActive: {
        color: '#ffffff',
    },
    buttonTextInactive: {
        color: '#cccccc',
    },
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: height * 0.7,
        paddingBottom: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e5e9',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
    },
    closeButton: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        fontSize: 24,
        color: '#666666',
        fontWeight: '300',
    },
    countryList: {
        paddingHorizontal: 20,
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    countryFlag: {
        fontSize: 18,
        marginRight: 12,
    },
    countryText: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
    },
    countryCode: {
        fontSize: 16,
        color: '#666666',
        fontWeight: '500',
    },
    phonelogo:{
        alignItems:"center",
        marginBottom:10
    }
});

export default PhoneNumber;