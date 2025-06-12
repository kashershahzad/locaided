import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Ready = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.icon}>
        <Image source={require('../../../../assets/auth/Ready.png')}/>
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
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.iconContainer}>
             <View style={styles.personIcon}>
              <Image source={require('../../../../assets/auth/icon2.png')} />
            </View>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Personal Information</Text>
            <Text style={styles.cardSubtitle}>Let others recognize connect with you.</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
          <View style={styles.pointsBadgeButton}>
            <Text style={styles.pointsTextButton}>50 Points</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Choose Avatar Card */}
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.iconContainer}>
            <View style={styles.personIcon}>
              <Image source={require('../../../../assets/auth/icon3.png')} />
            </View>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Choose an Avatar</Text>
            <Text style={styles.cardSubtitle}>Pick a character that represents you.</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
          <View style={styles.pointsBadgeButton}>
            <Text style={styles.pointsTextButton}>25 Points</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Phone Verification Card */}
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.iconContainer}>
             <View style={styles.personIcon}>
              <Image source={require('../../../../assets/auth/icon4.png')} />
            </View>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Phone Verification</Text>
            <Text style={styles.cardSubtitle}>Build trust and unlock more features.</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
          <View style={styles.pointsBadgeButton}>
            <Text style={styles.pointsTextButton}>25 Points</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#fff3cd',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffeaa7',
  },
  pointsText: {
    fontSize: 10,
    color: '#d68910',
    fontWeight: '500',
  },
  checkmark: {
    width: 18,
    height: 18,
    backgroundColor: '#ff6b8a',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  pointsBadgeButton: {
    backgroundColor: '#fff3cd',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffeaa7',
  },
  pointsTextButton: {
    fontSize: 10,
    color: '#d68910',
    fontWeight: '500',
  },
  // Custom icons using basic shapes
//   personIcon: {
//     alignItems: 'center',
//   },
//   personHead: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#666',
//     marginBottom: 1,
//   },
//   personBody: {
//     width: 12,
//     height: 8,
//     backgroundColor: '#666',
//     borderTopLeftRadius: 6,
//     borderTopRightRadius: 6,
//   },
//   editIcon: {
//     position: 'relative',
//   },
//   editPencil: {
//     width: 14,
//     height: 2,
//     backgroundColor: '#666',
//     borderRadius: 1,
//     transform: [{ rotate: '45deg' }],
//     position: 'absolute',
//     top: 6,
//     left: 7,
//   },
//   editBase: {
//     width: 12,
//     height: 12,
//     borderWidth: 1.5,
//     borderColor: '#666',
//     borderRadius: 1,
//     marginTop: 8,
//   },
//   avatarIcon: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatarCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#ccc',
//     backgroundColor: '#f0f0f0',
//   },
//   phoneIcon: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   phoneBody: {
//     width: 12,
//     height: 20,
//     backgroundColor: '#666',
//     borderRadius: 3,
//     position: 'relative',
//   },
//   phoneScreen: {
//     width: 8,
//     height: 14,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 1,
//     position: 'absolute',
//     top: 3,
//   },
  icon:{
    alignItems:'center',
    marginVertical:20
  }
});

export default Ready;