// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import ImageFast from './ImageFast';

// import {COLORS} from '../utils/COLORS';
// import {Images} from '../assets/images';
// import FullScreenBlurOverlay from './FullScreenBlurOverlay';

const {width, height} = Dimensions.get('window');

const FocusAwareStatusBar = props => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar
      // barStyle="dark-content"
      backgroundColor='white'
      {...props}
    />
  ) : null;
};

const ScreenWrapper = ({
  children,
  statusBarColor = 'white',
  translucent = false,
  scrollEnabled = false,
  backgroundImage,
  backgroundColor = 'white',
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  barStyle = 'dark-content',
  refreshControl,
  paddingBottom,
  nestedScrollEnabled,
  paddingHorizontal ,
  isAuth,
  paddingLeft,
  paddingRight,
  isBlur,
  onBlurBack,
}) => {
  const navigation = useNavigation();

  const content = () => {
    return (
      <View
        style={[
          styles.container,
          {
            paddingBottom,
            backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
          },
        ]}>
        {/* {isBlur ? <FullScreenBlurOverlay onBackPress={onBlurBack} /> : null} */}
        <FocusAwareStatusBar
          barStyle={barStyle}
          backgroundColor={statusBarColor}
          translucent={translucent}
        />
        {!translucent && (
          <SafeAreaView
            style={(styles.container, {backgroundColor: statusBarColor})}
          />
        )}
        {isAuth ? (
          <ImageFast
            // source={Images.backIcon}
            style={{width: 41, height: 41, margin: 16}}
            onPress={() => {
              if (navigation.canGoBack()) navigation.goBack();
            }}
          />
        ) : null}
        {headerUnScrollable()}

        {scrollEnabled ? (
          <KeyboardAwareScrollView
            nestedScrollEnabled={nestedScrollEnabled}
            refreshControl={refreshControl}
            style={[
              styles.container,
              {
                backgroundColor,
                paddingHorizontal,
                paddingLeft,
                paddingRight,
              },
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {children}
          </KeyboardAwareScrollView>
        ) : (
          <View style={{paddingHorizontal, flex: 1, paddingLeft, paddingRight}}>
            {children}
          </View>
        )}
        {footerUnScrollable()}
      </View>
    );
  };
  return backgroundImage ? (
    <View style={{width, height: height + 70, zIndex: 999}}>
      {content()}
      <ImageFast
        // source={backgroundImage}
        style={{
          width,
          height: height + 70,
          position: 'absolute',
          zIndex: -1,
        }}
        resizeMode="cover"
      />
    </View>
  ) : (
    content()
  );
};

export default ScreenWrapper;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
