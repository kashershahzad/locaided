import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageFast from '../../../../components/ImageFast';
import CustomText from '../../../../components/CustomText';;
import CompletedCard from '../../../../components/AccountReady/CompletedCard';
import NotCompletedCard from '../../../../components/AccountReady/NotCompletedCard';

const Ready = ({ route }) => {
  const navigation = useNavigation();
  const [fromCompleteAndEarn, setFromCompleteAndEarn] = useState(false);
  const [avatarCompleted, setAvatarCompleted] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedFromCompleteAndEarn = await AsyncStorage.getItem('fromCompleteAndEarn');
        const savedAvatarCompleted = await AsyncStorage.getItem('avatarCompleted');
        const savedPhoneVerified = await AsyncStorage.getItem('phoneVerified');

        if (savedFromCompleteAndEarn !== null) {
          setFromCompleteAndEarn(savedFromCompleteAndEarn === 'true');
        }
        if (savedAvatarCompleted !== null) {
          setAvatarCompleted(savedAvatarCompleted === 'true');
        }
        if (savedPhoneVerified !== null) {
          setPhoneVerified(savedPhoneVerified === 'true');
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        if (route.params?.fromCompleteAndEarn !== undefined) {
          await AsyncStorage.setItem('fromCompleteAndEarn', route.params.fromCompleteAndEarn.toString());
          setFromCompleteAndEarn(route.params.fromCompleteAndEarn);
        }
        if (route.params?.avatarCompleted !== undefined) {
          await AsyncStorage.setItem('avatarCompleted', route.params.avatarCompleted.toString());
          setAvatarCompleted(route.params.avatarCompleted);
        }
        if (route.params?.phoneVerified !== undefined) {
          await AsyncStorage.setItem('phoneVerified', route.params.phoneVerified.toString());
          setPhoneVerified(route.params.phoneVerified);
        }
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    };

    saveData();
  }, [route.params]);

  const handleRemoveAllData = async () => {
    try {
      // Remove all the stored parameters
      await AsyncStorage.multiRemove([
        'fromCompleteAndEarn',
        'avatarCompleted',
        'phoneVerified'
      ]);
      
      // Reset all states to false
      setFromCompleteAndEarn(false);
      setAvatarCompleted(false);
      setPhoneVerified(false);
      
      // Optional: You can also clear any route params if needed
      navigation.setParams({
        fromCompleteAndEarn: undefined,
        avatarCompleted: undefined,
        phoneVerified: undefined
      });
      
      console.log('All data removed from storage');
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageFast source={require('../../../../assets/auth/Ready.png')} resizeMode={'contain'} style={styles.icon} />

      <CustomText label={'Your Account is Ready'} fontSize={20} textAlign={'center'} marginBottom={6} />

      <CustomText label='Lets complete your profile to unlock all features and start earning Social Score.' fontSize={13} textAlign={'center'} marginBottom={25} />

      {/* Remove All Data Button */}
      {/* <TouchableOpacity 
        style={styles.removeButton} 
        onPress={handleRemoveAllData}
      >
        <CustomText label="Remove All Data" color="#FF0000" textAlign={'center'} />
      </TouchableOpacity> */}

      <CompletedCard title="Locaided Account" icon={require('../../../../assets/auth/icon1.png')} des='You’ve successfully signed up' />

      {
        fromCompleteAndEarn ?
          <CompletedCard
            title={'Personal information'}
            des={'You’ve successfully signed up'}
            icon={require('../../../../assets/auth/icon2.png')}
          />
          :
          <NotCompletedCard
            title={'Personal information'}
            des={"Let others recognize and connect with you"}
            icon={require('../../../../assets/auth/icon2.png')}
            action={() => { navigation.navigate('PersonalInformation') }}
          />
      }

      {
        avatarCompleted ?
          <CompletedCard
            title={'Choose Avatar'}
            des={'Avatar set successfully.'}
            icon={require('../../../../assets/auth/icon3.png')}
          />
          :
          <NotCompletedCard
            title={'Choose Avatar'}
            des={"Pick a character that represents you"}
            icon={require('../../../../assets/auth/icon3.png')}
            action={() => { navigation.navigate('Avtar') }}
          />
      }

      {
        phoneVerified ?
          <CompletedCard
            title={'Phone Verification'}
            des={'Build trust and unlock more features'}
            icon={require('../../../../assets/auth/icon4.png')}
          />
          :
          <NotCompletedCard
            title={'Phone Verification'}
            des={"You’ve verified phone number."}
            icon={require('../../../../assets/auth/icon4.png')}
            action={() => { navigation.navigate('PhoneVerify') }}
          />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    paddingTop: 20,
  },
  icon: {
    marginVertical: 20,
    height: 96,
    width: 96,
    alignSelf: 'center'
  },
  removeButton: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#FFEEEE',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF0000'
  }
});

export default Ready;