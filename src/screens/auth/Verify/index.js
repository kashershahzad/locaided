import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Topbar from '../../../../components/auth/Topbar';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CELL_COUNT = 6;

const Verify = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleResendCode = () => {
    // Handle resend code logic here
    console.log('Resend code');
  };

  const handleVerify = () => {
    if (value.length === CELL_COUNT) {
      // Handle verification logic here
      console.log('Verification code:', value);
      navigation.navigate('Locationaccess');
    }
  };

  const isCodeComplete = value.length === CELL_COUNT;

  return (
    <View style={styles.container}>
      <Topbar title='Verification Code' />
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Image source={require('../../../../assets/auth/Verify.png')} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Enter Your Verification Code</Text>
        <Text style={styles.subtitle}>We sent a code to +1 555-123-4567.</Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[
                styles.cell,
                symbol && styles.cellFilled,
                isFocused && styles.cellFocused
              ]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

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
    fontSize: 22,
    fontWeight: 'bold',
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
  codeFieldRoot: {
    marginBottom: 40,
  },
  cell: {
    width: 45,
    height: 55,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
  cellText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  cellFilled: {
    borderColor: '#007AFF',
    backgroundColor: '#F8F9FA',
  },
  cellFocused: {
    borderColor: '#007AFF',
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