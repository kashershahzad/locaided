import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  FlatList,
  UIManager,
  TextInput,
  Platform,
  View,
} from 'react-native';

import CustomText from './CustomText';
import Icons from './Icons';

import {COLORS} from '../utils/COLORS';
import fonts from '../assets/fonts';
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const PAGE_SIZE = 20;

const CustomDropdown = ({
  data = [],
  value,
  setValue,
  showIcon,
  placeholder,
  error,
  withLabel,
  disabled,
  isSearch = false,
  errorMess,
}) => {
  const user_lang = useSelector(state => state.users.user_lang);

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  const [displayData, setDisplayData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data || []);

  useEffect(() => {
    if (value) {
      if (value._id) {
        setText(value.title);
      } else if (typeof value === 'string') {
        setText(value);
      }
    } else {
      setText('');
    }
  }, [value]);

  useEffect(() => {
    if (!data || data.length === 0) {
      setFilteredData([]);
      return;
    }

    if (searchText.trim() === '') {
      setFilteredData(data);
    } else {
      const lowerSearch = searchText.toLowerCase();
      const filtered = data.filter(item => {
        if (!item) return false;
        const title = item._id ? item.title : item;
        return (
          typeof title === 'string' && title.toLowerCase().includes(lowerSearch)
        );
      });
      setFilteredData(filtered);
    }
    setPage(1);
  }, [searchText, data]);

  useEffect(() => {
    if (isOpen) {
      setDisplayData(filteredData.slice(0, PAGE_SIZE));
      setPage(1);
    }
  }, [isOpen, filteredData]);

  const loadMoreData = () => {
    if (page * PAGE_SIZE >= filteredData.length) return;

    const nextPage = page + 1;
    const newData = filteredData.slice(0, nextPage * PAGE_SIZE);
    setDisplayData(newData);
    setPage(nextPage);
  };

  const toggleDropdown = () => {
    if (Platform.OS === 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchText('');
    }
  };

  const selectOption = option => {
    if (Platform.OS === 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    if (!option) return;

    if (option._id) {
      setValue(option);
      setText(option.title);
    } else {
      setValue(option);
      setText(option);
    }
    setIsOpen(false);
  };

  const renderItem = ({item}) => {
    if (!item) return null;

    const itemText = item._id ? item.title : item;

    return (
      <TouchableOpacity style={styles.list} onPress={() => selectOption(item)}>
        <CustomText
          label={itemText || ''}
          fontSize={12}
          color={COLORS.primaryColor}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {withLabel && (
        <CustomText
          label={withLabel}
          fontFamily={fonts.medium}
          marginBottom={8}
        />
      )}
      <View
        style={[
          styles.dropdownMainContainer,
          {
            marginBottom: error ? 5 : 15,
            borderColor: error
              ? COLORS.red
              : isOpen
              ? COLORS.white
              : 'transparent',
            borderRadius: 12,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            styles.container,
            {
              flexDirection: user_lang == 'ar' ? 'row-reverse' : 'row',
            },
          ]}
          onPress={toggleDropdown}
          disabled={disabled}>
          <CustomText
            label={text || value?.title || value || placeholder || ''}
            color={COLORS.primaryColor}
            fontFamily={fonts.bold}
          />
          {!showIcon ? (
            <Icons
              family="Entypo"
              name={isOpen ? 'chevron-up' : 'chevron-down'}
              color={COLORS.primaryColor}
              size={20}
            />
          ) : (
            <View />
          )}
        </TouchableOpacity>

        {isOpen && (
          <>
            {isSearch && (
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchText}
                onChangeText={setSearchText}
                autoFocus={Platform.OS === 'android'} // Only autoFocus on Android
                clearButtonMode="while-editing"
              />
            )}

            {displayData && displayData.length > 0 ? (
              <FlatList
                data={displayData}
                keyExtractor={(item, index) =>
                  item && item._id ? item._id.toString() : index.toString()
                }
                renderItem={renderItem}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.5}
                nestedScrollEnabled
                style={{maxHeight: 200}}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <CustomText
                  label={errorMess || 'No results found'}
                  color={errorMess ? COLORS.red : COLORS.inputLabel}
                  fontSize={12}
                  style={{textAlign: 'center'}}
                />
              </View>
            )}
          </>
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

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdownMainContainer: {
    width: '100%',
    maxHeight: 250,
    borderWidth: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
    width: '100%',
    height: 51,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 8,
  },
  list: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    fontFamily: fonts.bold,
    fontSize: 17,
    alignItems: 'center',
  },
  searchInput: {
    height: 45,
    padding: 0,
    margin: 0,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.inputLabel,
    fontFamily: fonts.regular,
    fontSize: 12,
    backgroundColor: '#fff',
  },
  noDataContainer: {
    padding: 15,
  },
});
