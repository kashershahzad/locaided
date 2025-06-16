import {Image, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import CustomText from './CustomText';
import ImageFast from './ImageFast';
import Icons from './Icons';

import {Images} from '../assets/images';
import {COLORS} from '../utils/COLORS';
import i18n from '../language/i18n';
import fonts from '../assets/fonts';

const CustomInput = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  multiline,
  maxLength,
  placeholderTextColor,
  editable,
  textAlignVertical,
  marginBottom,
  height = 56,
  autoCapitalize,
  error,
  isFocus,
  isBlur,
  width,
  onEndEditing,
  autoFocus,
  ref,
  borderRadius,
  marginTop,
  withLabel,
  isError,
  labelColor,
  borderColor = '#E8ECF4',
  borderWidth,
  search,
  backgroundColor,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
    isFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    isBlur?.();
  };

  return (
    <View style={{width: width || '100%'}}>
      {withLabel && (
        <CustomText
          label={withLabel}
          marginBottom={8}
          color={labelColor || COLORS.black}
        />
      )}
      <View
        style={[
          styles.mainContainer,
          {
            marginBottom: error ? 5 : marginBottom || 20,
            marginTop,
            borderColor:
              error || isError
                ? COLORS.red
                : isFocused
                ? COLORS.primaryColor
                : borderColor,
            borderWidth: borderWidth || 1,
            height: height ? height : multiline ? 180 : 56,
            width: '100%',
            borderRadius: borderRadius || 8,
            paddingLeft: 20,
            backgroundColor: backgroundColor || '#F7F8F9',
          },
        ]}>
        {search ? (
          <Icons family="Feather" name="search" size={25} color={COLORS.gray} />
        ) : null}
        <TextInput
          ref={ref}
          placeholder={i18n.t(placeholder)}
          style={[
            styles.input,
            {
              width: secureTextEntry ? '91%' : '99%',
              paddingVertical: multiline ? 18 : 0,
              paddingLeft: search ? 5 : 0,
            },
          ]}
          secureTextEntry={secureTextEntry ? (hidePass ? true : false) : false}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          onEndEditing={onEndEditing}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor || '#8391A1'}
          editable={editable}
          textAlignVertical={multiline ? 'top' : textAlignVertical}
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
        />

        {secureTextEntry && (
          <ImageFast
            source={!hidePass ? Images.eye : Images.eyeLine}
            resizeMode="contain"
            style={{
              position: 'absolute',
              right: 17,
              width: 22,
              height: 22,
            }}
            onPress={() => setHidePass(!hidePass)}
          />
        )}
      </View>
      {error && (
        <CustomText
          label={error}
          color={COLORS.red}
          fontFamily={fonts.semiBold}
          fontSize={10}
          marginBottom={15}
        />
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: {
    height: '100%',
    padding: 0,
    margin: 0,
    fontFamily: fonts.medium,
    fontSize: 14,
    color: COLORS.black,
  },
});
