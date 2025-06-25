import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { COLORS } from '../src/utiles/COLORS';
import Icons from './Icons';

const CustomCheckbox = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => onValueChange(!value)}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, value && styles.checked]}>
        {value && <Icons name="check" family={"AntDesign"} size={16} color="black" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#1B1C1D1F',
    marginRight: 10,
  },
  checkbox: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
    // Checkbox background when unchecked
  },
  checked: {
    backgroundColor: '#FFEBEC',
     // Background color when checked
  },
});

export default CustomCheckbox;
