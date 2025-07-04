import React from 'react';
import { View, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const CustomInputSlider = ({
  value = 50,
  min = 0,
  max = 100,
  sliderLength = 120,
  onChange = () => {},
}) => {
  return (
    <View style={styles.container}>
      <MultiSlider
        values={[value]}
        min={min}
        max={max}
        sliderLength={sliderLength}
        onValuesChange={(val) => onChange(val[0])}
        selectedStyle={{ backgroundColor: '#FF2D55', height: 6, borderRadius:15 }}
        unselectedStyle={{ backgroundColor: '#E5E7EB', height: 6 , borderRadius:15}}
        trackStyle={{ height: 6 }}
        customMarker={() => (
          <View style={styles.thumb} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  thumb: {
    width: 16,
    height: 16,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CustomInputSlider;
