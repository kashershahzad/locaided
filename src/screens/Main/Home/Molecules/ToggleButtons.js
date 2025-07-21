import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../../../../../components/CustomText';
import fonts from '../../../../../assets/fonts';

const ToggleButtons = ({ 
  title, 
  option1, 
  option2, 
  option3, 
  defaultOption = null, 
  onFactual, 
  onIllegal 
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption || option1);

  const handleToggle = (option) => {
    setSelectedOption(option);
    
    // Handle factual callback
    if (onFactual) {
      onFactual(option === 'Factual');
    }
    
    // Handle illegal callback
    if (onIllegal) {
      onIllegal(option === 'Illegal');
    }
  };

  const getHorizontalPadding = (text) => {
    const basePadding = 16;
    const minPadding = 8;
    const maxTextLength = 10;

    if (text.length > maxTextLength) {
      return Math.max(minPadding, basePadding - (text.length - maxTextLength));
    }
    return basePadding;
  };

  return (
    <View style={styles.container}>
      <CustomText label={title} fontSize={12} fontFamily={fonts.regular} />
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            styles.leftButton,
            selectedOption === option1 ? styles.activeButton : styles.inactiveButton,
            { paddingHorizontal: getHorizontalPadding(option1) }
          ]}
          onPress={() => handleToggle(option1)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedOption === option1 ? styles.activeText : styles.inactiveText
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {option1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            styles.rightButton,
            selectedOption === option2 ? styles.activeButton : styles.inactiveButton,
            { paddingHorizontal: getHorizontalPadding(option2) }
          ]}
          onPress={() => handleToggle(option2)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedOption === option2 ? styles.activeText : styles.inactiveText
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {option2}
          </Text>
        </TouchableOpacity>

        {option3 && (
          <TouchableOpacity
            style={[
              styles.button,
              styles.rightButton,
              selectedOption === option3 ? styles.activeButton : styles.inactiveButton,
              { paddingHorizontal: getHorizontalPadding(option3) }
            ]}
            onPress={() => handleToggle(option3)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedOption === option3 ? styles.activeText : styles.inactiveText
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {option3}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    padding: 4,
    maxWidth: '100%',
  },
  button: {
    paddingVertical: 8,
    minWidth: 100,
    maxWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  leftButton: {
    borderRadius: 12
  },
  rightButton: {
    borderRadius: 12,
  },
  activeButton: {
    backgroundColor: 'white',
  },
  inactiveButton: {
    backgroundColor: '#F5F5F5',
  },
  buttonText: {
    fontSize: 14,
    fontFamily:fonts.semiBold,
  },
  activeText: {
    color: '#0E121B',
  },
  inactiveText: {
    color: '#525866',
  },
});

export default ToggleButtons;