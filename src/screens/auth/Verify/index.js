import React, { useState, useRef } from 'react';
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

const { width } = Dimensions.get('window');

const Verify = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace to go to previous input
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    // Handle resend code logic here
    console.log('Resend code');
  };

  const handleVerify = () => {
    const verificationCode = code.join('');
    if (verificationCode.length === 6) {
      // Handle verification logic here
      console.log('Verification code:', verificationCode);
    }
  };

  const isCodeComplete = code.every(digit => digit !== '');

  return (
    <View style={styles.container}>
      <Topbar title='Verification Code' />
      <View style={{alignItems:'center', marginVertical:10}}>
        <Image source={require('../../../../assets/auth/Verify.png')} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Enter Your Verification Code</Text>
        <Text style={styles.subtitle}>We sent a code to +1 555-123-4567.</Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[
                styles.codeInput,
                digit ? styles.codeInputFilled : null
              ]}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              selectTextOnFocus
            />
          ))}
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Experiencing issues receiving the code?</Text>
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.resendLink}>Resend code</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.verifyButton,
            isCodeComplete ? styles.verifyButtonActive : styles.verifyButtonInactive
          ]}
          onPress={handleVerify}
          disabled={!isCodeComplete}
        >
          <Text style={[
            styles.verifyButtonText,
            isCodeComplete ? styles.verifyButtonTextActive : styles.verifyButtonTextInactive
          ]}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    marginBottom: 40,
  },
  codeInput: {
    width: 45,
    height: 55,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  codeInputFilled: {
    borderColor: '#007AFF',
    backgroundColor: '#F8F9FA',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  resendText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
    textAlign: 'center',
  },
  resendLink: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    width: width * 0.9,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonActive: {
    backgroundColor: '#0E121B',
  },
  verifyButtonInactive: {
    backgroundColor: '#E5E5E5',
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  verifyButtonTextActive: {
    color: '#FFFFFF',
  },
  verifyButtonTextInactive: {
    color: '#999999',
  },
});

export default Verify;