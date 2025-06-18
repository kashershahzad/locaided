import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageFast from '../../../../components/ImageFast';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';

const Ready = ({ route }) => {
  const navigation = useNavigation()
  // Get the parameters from navigation
  const fromCompleteAndEarn = route.params?.fromCompleteAndEarn || false;
  const avatarCompleted = route.params?.avatarCompleted || false;
  const personalInfoCompleted = route.params?.personalInfoCompleted || fromCompleteAndEarn;
  const phoneVerified = route.params?.phoneVerified || false;

  // Completion messages for each section
  const completionMessages = {
    personalInfo: personalInfoCompleted
      ? "You’ve successfully signed up."
      : "Let others recognize and connect with you",
    avatar: avatarCompleted
      ? "Avatar set successfully."
      : "Pick a character that represents you",
    phone: phoneVerified
      ? "You’ve verified phone number."
      : "Build trust and unlock more features"
  };

  return (
    <View style={styles.container}>
      <ImageFast source={require('../../../../assets/auth/Ready.png')} resizeMode={'contain'} style={styles.icon} />

      <CustomText label={'Your Account is Ready'} fontSize={20} textAlign={'center'} marginBottom={6} />

      <CustomText label='Lets complete your profile to unlock all features and start earning Social Score.' fontSize={13} textAlign={'center'} marginBottom={25}  />



      {/* Account Status Card */}
      <View style={[styles.card, styles.completedCard]}>
        <View style={styles.cardContent}>


          <ImageFast source={require('../../../../assets/auth/icon1.png')} resizeMode={'contain'} style={styles.infoicon} />


          <View style={styles.cardText}>
            <View style={styles.cardHeader}>
              <CustomText label={'Locaided Account'} fontSize={14} textAlign={'center'} marginRight={6} />
              <View style={styles.pointsBadge}>
                <ImageFast source={require('../../../../assets/auth/points.png')} style={styles.pointsimg} />
                <CustomText label={'+25 points'} fontSize={10} color={'#FF2557'} />
              </View>
            </View>
            <CustomText label={'You ve successfully signed up'} fontSize={12} color={'#525866'} marginBottom={5} />
          </View>
          <ImageFast source={require('../../../../assets/auth/tick.png')} resizeMode={'contain'} style={styles.tick} />
        </View>
      </View>

      {/* Personal Information Card */}
      <TouchableOpacity onPress={() => { navigation.navigate('PersonalInformation') }}>
        <View style={[
          styles.card,
          personalInfoCompleted && styles.completedCard
        ]}>
          <View style={styles.cardContent}>
            <ImageFast source={require('../../../../assets/auth/icon2.png')} resizeMode={'contain'} style={styles.infoicon} />
            <View style={styles.cardText}>
              <View style={styles.header1}>
                <CustomText label={'Personal Information'} fontSize={14} textAlign={'center'} marginRight={6} marginBottom={5} />
                {
                  personalInfoCompleted && (
                    <View style={styles.pointsBadge}>
                      <ImageFast source={require('../../../../assets/auth/points.png')} style={styles.pointsimg} />
                      <CustomText label={'+25 points'} fontSize={10} color={'#FF2557'} />
                    </View>
                  )
                }
              </View>

              <CustomText label={completionMessages.personalInfo} fontSize={12} color={'#525866'} />
            </View>
            {personalInfoCompleted && (
              <View>
                <Image source={require('../../../../assets/auth/tick.png')} />
              </View>
            )}
          </View>
          {!personalInfoCompleted && (
            <View style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
              <Image source={require('../../../../assets/auth/points.png')} />
              <View style={styles.pointsBadgeButton}>
                <Text style={styles.pointsTextButton}>50 Points</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>

      {/* Choose Avatar Card */}
      <TouchableOpacity onPress={() => { navigation.navigate('Avtar') }}>
        <View style={[
          styles.card,
          avatarCompleted && styles.completedCard
        ]}>
          <View style={styles.cardContent}>
            <ImageFast source={require('../../../../assets/auth/icon3.png')} resizeMode={'contain'} style={styles.infoicon} />
            <View style={styles.cardText}>

              <View style={styles.header1}>
                <CustomText label={'Choose an Avatar'} fontSize={14} textAlign={'center'} marginRight={6}  marginBottom={5} />
                {
                  avatarCompleted && (
                    <View style={styles.pointsBadge}>
                      <ImageFast source={require('../../../../assets/auth/points.png')} style={styles.pointsimg} />
                      <CustomText label={'+25 points'} fontSize={10} color={'#FF2557'} />
                    </View>
                  )
                }
              </View>
              <Text style={styles.cardSubtitle}>{completionMessages.avatar}</Text>
            </View>
            {avatarCompleted && (
              <View>
                <Image source={require('../../../../assets/auth/tick.png')} />
              </View>
            )}
          </View>
          {!avatarCompleted && (
            <View style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
              <Image source={require('../../../../assets/auth/points.png')} />
              <View style={styles.pointsBadgeButton}>
                <Text style={styles.pointsTextButton}>25 Points</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>

      {/* Phone Verification Card */}
      <TouchableOpacity onPress={() => { navigation.navigate('PhoneVerify') }}>
        <View style={[
          styles.card,
          phoneVerified && styles.completedCard
        ]}>
          <View style={styles.cardContent}>
            <ImageFast source={require('../../../../assets/auth/icon4.png')} resizeMode={'contain'} style={styles.infoicon} />
            <View style={styles.cardText}>
              <View style={styles.header1}>
               <CustomText label={'Phone Verification'} fontSize={14} textAlign={'center'} marginRight={6}  marginBottom={5} />
                {
                  phoneVerified && (
                    <View style={styles.pointsBadge}>
                      <ImageFast source={require('../../../../assets/auth/points.png')} style={styles.pointsimg} />
                      <CustomText label={'+25 points'} fontSize={10} color={'#FF2557'} />
                    </View>
                  )
                }
              </View>
              <Text style={styles.cardSubtitle}>{completionMessages.phone}</Text>
            </View>
            {phoneVerified && (
              <View>
                <Image source={require('../../../../assets/auth/tick.png')} />
              </View>
            )}
          </View>
          {!phoneVerified && (
            <View style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
              <Image source={require('../../../../assets/auth/points.png')} />
              <View style={styles.pointsBadgeButton}>
                <Text style={styles.pointsTextButton}>25 Points</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
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
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#1a1a1a',
  //   marginBottom: 6,
  //   textAlign: 'center',
  // },
  // subtitle: {
  //   fontSize: 12,
  //   color: '#666',
  //   textAlign: 'center',
  //   lineHeight: 16,
  //   paddingHorizontal: 8,
  // },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    padding: 12,
    marginBottom: 10,
  },
  infoicon: {
    height: 38,
    width: 38,
    marginRight: 10
  },
  completedCard: {
    borderWidth: 1.5,
    borderColor: '#ff6b8a',
    backgroundColor: '#fff',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardText: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  // cardTitle: {
  //   fontSize: 14,
  //   fontWeight: '600',
  //   color: '#1a1a1a',
  //   marginRight: 6,
  // },
  cardSubtitle: {
    fontSize: 11,
    color: '#666',
    lineHeight: 14,
  },
  pointsBadge: {
    flexDirection: 'row',
    gap: 3
  },
  pointsimg: {
    height: 16,
    width: 16
  },
  // pointsText: {
  //   fontSize: 10,
  //   color: '#FF2557',
  //   fontWeight: '500',
  //   fontWeight: 'bold'
  // },
  continueButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
  continueButtonText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  pointsBadgeButton: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  pointsTextButton: {
    fontSize: 10,
    color: '#FF2557',
    fontWeight: '500',
  },
  icon: {
    marginVertical: 20,
    height: 96,
    width: 96,
    alignSelf: 'center'
  },
  header1: {
    flexDirection: 'row'
  },
  tick: {
    height: 24,
    width: 24,
    marginTop: 5,
  }

});

export default Ready;