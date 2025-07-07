import {
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from './CustomText';

const CustomButton = ({
  onPress,
  title,
  disabled,
  loading,
  customStyle,
  customText,
  marginBottom,
  marginTop,
  backgroundColor,
  color,
  height, // Make height optional
  borderRadius = 8,
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row',
  alignSelf = 'flex-start', // Change to flex-start for better content sizing
  fontSize,
  indicatorColor,
  marginRight,
  borderWidth,
  borderColor,
  fontFamily,
  loadingSize,
  mainStyle,
  icon,
  icnWidth,
  icnHeight,
  paddingVertical=5,
  paddingHorizontal = 0, // Add paddingHorizontal prop
}) => {
  const [animation] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[mainStyle, {transform: [{scale: animation}], alignSelf}]}>
      <TouchableOpacity
        disabled={loading || disabled}
        activeOpacity={0.6}
        style={[
          {
            backgroundColor: backgroundColor,
            marginTop,
            marginBottom,
            borderRadius,
            flexDirection,
            alignItems,
            justifyContent,
            marginRight,
            borderWidth,
            borderColor,
            paddingHorizontal,
            paddingVertical: paddingVertical,   // Add horizontal padding
            height: height || undefined, // Make height optional
            // minHeight: 37, // Set a minimum height if needed
          },
          customStyle,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        {loading && (
          <ActivityIndicator
            size={loadingSize || 25}
          />
        )}
        {icon && (
          <Image
            source={icon}
            style={{
              width: icnWidth || 20,
              height: icnHeight || 20,
              resizeMode: 'contain',
              marginRight: 8,
            }}
          />
        )}

        {!loading && (
          <CustomText
            textStyle={customText}
            label={title}
            color={color ? color : 'black'}
            fontSize={fontSize || 15}
            textTransform={'capitalize'}
            lineHeight={22}
            marginTop={-2}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomButton;