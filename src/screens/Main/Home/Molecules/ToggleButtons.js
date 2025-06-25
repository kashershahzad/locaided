import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../../../../../components/CustomText';

const ToggleButtons = ({title, option1, option2, defaultOption}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const screenWidth = Dimensions.get('window').width;

  const handleToggle = (option) => {
    setSelectedOption(option);
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
      <CustomText label={title} marginBottom={8} fontSize={12} marginTop={5} />
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            styles.leftButton,
            selectedOption === 'Misleading' ? styles.activeButton : styles.inactiveButton,
            { paddingHorizontal: getHorizontalPadding(option1) }
          ]}
          onPress={() => handleToggle('Misleading')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'Misleading' ? styles.activeText : styles.inactiveText
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
            selectedOption === 'Factual' ? styles.activeButton : styles.inactiveButton,
            { paddingHorizontal: getHorizontalPadding(option2) }
          ]}
          onPress={() => handleToggle('Factual')}
        >
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'Factual' ? styles.activeText : styles.inactiveText
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop:0,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: '#F5F5F5', 
    alignSelf:'center',
    padding:4,
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
    borderRadius:12
  },
  rightButton: {
    borderRadius:12,
  },
  activeButton: {
    backgroundColor: 'white', 
  },
  inactiveButton: {
    backgroundColor: '#F5F5F5', 
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeText: {
    color: '#0E121B',
  },
  inactiveText: {
    color: '#666666',
  },
});

export default ToggleButtons;