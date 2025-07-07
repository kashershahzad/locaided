import React, {useState, useRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomText from './CustomText';
import Icons from './Icons';
import {COLORS} from '../src/utiles/COLORS';
import fonts from '../assets/fonts';
import ImageFast from './ImageFast';
import {Images} from '../assets';

const SearchInput = ({
  placeholder,
  value,
  onChangeText,
  maxLength,
  marginBottom,
  isFocus,
  isBlur,
  autoFocus,
  marginTop,
  isBack,
  onPress,
  editable = true,
  isDropdown,
  select,
  setSelect,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef();
  const navigation = useNavigation();

  const handleFocus = () => {
    setIsFocused(true);
    isFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    isBlur?.();
  };

  const handleContainerPress = () => {
    if (onPress) {
      onPress();
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleContainerPress}
      style={[
        styles.mainContainer,
        {
          marginBottom,
          marginTop,
          // borderColor: isFocused ? COLORS.primaryColor : '#F2F2F2',
        },
      ]}>
      {isBack && (
        <Icons
          family="Ionicons"
          name="arrow-back-outline"
          color="#0F1621"
          size={25}
          style={{marginRight: 10}}
          onPress={() => {
            if (navigation.canGoBack()) navigation.goBack();
          }}
        />
      )}

      <ImageFast source={Images.search} style={styles.search} />

      {editable ? (
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          placeholderTextColor="#9B9E9F"
          autoFocus={autoFocus}
          editable={editable}
        />
      ) : (
        <View style={{flex: 1}}>
          <CustomText
            label={placeholder}
            color="black"
            fontSize={13}
            fontFamily={fonts.regular}
          />
        </View>
      )}

      {isDropdown && (
        <>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={0.6}
            onPress={() => setOpen(!isOpen)}>
            <CustomText
              label={select}
              fontSize={10}
              fontFamily={fonts.bold}
              textTransform="uppercase"
              marginRight={2}
            />
            <Icons
              family="Entypo"
              name={isOpen ? 'chevron-up' : 'chevron-down'}
              size={12}
              color={COLORS.black}
            />
          </TouchableOpacity>
          {isOpen && (
            <TouchableOpacity activeOpacity={1} style={styles.list}>
              {['schedule', 'now'].map((item, i) => (
                <CustomText
                  key={item}
                  label={item}
                  fontSize={12}
                  fontFamily={fonts.semiBold}
                  textTransform="uppercase"
                  marginBottom={i == 0 ? 7 : 0}
                  onPress={() => {
                    setSelect(item);
                    setOpen(false);
                  }}
                />
              ))}
            </TouchableOpacity>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5F7FA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    // borderWidth: 1,
    height: 40,
    width: '100%',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 0,
    margin: 0,
    marginLeft: 10,
    fontFamily: fonts.medium,
    fontSize: 13,
    color: COLORS.black,
  },
  search: {
    height: 16,
    width: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  list: {
    backgroundColor: COLORS.white,
    elevation: 2,
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    bottom: -60,
    zIndex: 10,
  },
});

export default SearchInput;