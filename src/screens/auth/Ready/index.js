import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
      {/* Header */}
      <View style={styles.icon}>
        <Image source={require('../../../../assets/auth/Ready.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Your Account is Ready</Text>
        <Text style={styles.subtitle}>
          Let's complete your profile to unlock all features and start earning Social Score.
        </Text>
      </View>

      {/* Account Status Card */}
      <View style={[styles.card, styles.completedCard]}>
        <View style={styles.cardContent}>
          <View style={styles.iconContainer}>
            <View style={styles.personIcon}>
              <Image source={require('../../../../assets/auth/icon1.png')} />
            </View>
          </View>
          <View style={styles.cardText}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Locaided Account</Text>
              <View style={styles.pointsBadge}>
                <Image source={require('../../../../assets/auth/points.png')} />
                <Text style={styles.pointsText}>+25 Points</Text>
              </View>
            </View>
            <Text style={styles.cardSubtitle}>You've successfully signed up.</Text>
          </View>
          <View>
            <Image source={require('../../../../assets/auth/tick.png')} />
          </View>
        </View>
      </View>

      {/* Personal Information Card */}
      <TouchableOpacity onPress={() => { navigation.navigate('PersonalInformation') }}>
        <View style={[
          styles.card,
          personalInfoCompleted && styles.completedCard
        ]}>
          <View style={styles.cardContent}>
            <View style={styles.iconContainer}>
              <View style={styles.personIcon}>
                <Image source={require('../../../../assets/auth/icon2.png')} />
              </View>
            </View>
            <View style={styles.cardText}>
              <View style={styles.header1}>
              <Text style={styles.cardTitle}>Personal Information</Text>
              {
                personalInfoCompleted && (
                  <View style={styles.pointsBadge}>
                    <Image source={require('../../../../assets/auth/points.png')} />
                    <Text style={styles.pointsText}>+25 Points</Text>
                  </View>
                )
              }
              </View>

              <Text style={styles.cardSubtitle}>{completionMessages.personalInfo}</Text>
            </View>
            {personalInfoCompleted && (
              <View>
                <Image source={require('../../../../assets/auth/tick.png')} />
              </View>
            )}
          </View>
          {!personalInfoCompleted && (
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
              <Image source={require('../../../../assets/auth/points.png')} />
              <View style={styles.pointsBadgeButton}>
                <Text style={styles.pointsTextButton}>50 Points</Text>
              </View>
            </TouchableOpacity>
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
            <View style={styles.iconContainer}>
              <View style={styles.personIcon}>
                <Image source={require('../../../../assets/auth/icon3.png')} />
              </View>
            </View>
            <View style={styles.cardText}>

              <View style={styles.header1}>
              <Text style={styles.cardTitle}>Choose an Avatar</Text>
              {
                avatarCompleted&& (
                  <View style={styles.pointsBadge}>
                    <Image source={require('../../../../assets/auth/points.png')} />
                    <Text style={styles.pointsText}>+25 Points</Text>
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
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
              <Image source={require('../../../../assets/auth/points.png')} />
              <View style={styles.pointsBadgeButton}>
                <Text style={styles.pointsTextButton}>25 Points</Text>
              </View>
            </TouchableOpacity>
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
            <View style={styles.iconContainer}>
              <View style={styles.personIcon}>
                <Image source={require('../../../../assets/auth/icon4.png')} />
              </View>
            </View>
            <View style={styles.cardText}>
              <View style={styles.header1}>
              <Text style={styles.cardTitle}>Personal Information</Text>
              {
                phoneVerified  && (
                  <View style={styles.pointsBadge}>
                    <Image source={require('../../../../assets/auth/points.png')} />
                    <Text style={styles.pointsText}>+25 Points</Text>
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
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
              <Image source={require('../../../../assets/auth/points.png')} />
              <View style={styles.pointsBadgeButton}>
                <Text style={styles.pointsTextButton}>25 Points</Text>
              </View>
            </TouchableOpacity>
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
    padding: 12,
    paddingTop: 20,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
  iconContainer: {
    width: 28,
    height: 28,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginRight: 6,
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#666',
    lineHeight: 14,
  },
  pointsBadge: {
    flexDirection: 'row',
    gap: 3
  },
  pointsText: {
    fontSize: 10,
    color: '#FF2557',
    fontWeight: '500',
    fontWeight: 'bold'
  },
  continueButton: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
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
    alignItems: 'center',
    marginVertical: 20
  },
  header1:{
    flexDirection:'row'
  }

});

export default Ready;