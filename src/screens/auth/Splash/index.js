import React, { useRef, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: true
        }
      ).start(() => spin());
    };
    spin();
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#0E121B" />
      <Image source={require('../../../../assets/Logo.png')} />
      <Text style={style.text}>People. Places. Proof.</Text>
      <Animated.Image 
        style={[
          style.loader, 
          { 
            transform: [{ rotate: spin }],
            position: 'absolute',
            bottom: windowHeight * 0.1
          }
        ]} 
        source={require('../../../../assets/loader.png')} 
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#0E121B",
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8
  },
  loader: {
    width: 40,
    height: 40
  }
});

export default Splash;