import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import CustomText from './CustomText';
import Icons from './Icons';
// import {COLORS} from '../utils/COLORS';
import { COLORS } from '../src/utiles/COLORS';
// import i18n from '../language/i18n';
import fonts from '../assets/fonts';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import ImageFast from './ImageFast';
import { Images } from '../assets';

const SearchInput = ({
  placeholder,
  value,
  onChangeText,
  maxLength,
  marginBottom,
  isFocus,
  isBlur,
  autoFocus,
  ref,
  marginTop,
  isBack,
  onPress,
  editable,
  isDropdown,
  select,
  setSelect,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const navigation = useNavigation();
  const handleFocus = () => {
    setIsFocused(true);
    isFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    isBlur?.();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.mainContainer,
        {
          marginBottom,
          marginTop,
          borderColor: isFocused ? COLORS.primaryColor : '#F2F2F2',
        },
      ]}>
      {isBack ? (
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
      ) : null}
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={onPress}>
        <ImageFast source={Images.search} style={styles.search}/>
      </TouchableOpacity>
      {editable ? (
        <TextInput
          ref={ref}
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

      {isDropdown ? (
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
          {isOpen ? (
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
          ) : null}
        </>
      ) : null}
    </TouchableOpacity>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5F7FA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderWidth: 1,
    height: 40,
    width: '100%',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 0,
    margin: 0,
    fontFamily: fonts.medium,
    fontSize: 13,
    borderRadius:10
    // color: COLORS.black,
  },
  searchIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    // backgroundColor: COLORS.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    // backgroundColor: COLORS.white,
    elevation: 2,
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    bottom: -20,
  },
  search:{
    height:16,
    width:16,
  }
});
