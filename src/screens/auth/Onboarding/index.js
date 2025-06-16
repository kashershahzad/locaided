import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import ScreenWrapper from '../../../../components/ScreenWrapper';
import CustomButton from '../../../../components/CustomButton';
import CustomText from '../../../../components/CustomText';
import ImageFast from '../../../../components/ImageFast';
import Login from '../../../../components/models/Login';
import Createacc from '../../../../components/models/Createacc';

const { width, height } = Dimensions.get('window');

const OnBoarding = () => {
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [createAccountModalVisible, setCreateAccountModalVisible] = useState(false);
    const flatListRef = useRef();
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
    }, [currentIndex]);
    const onboardingData = [
        {
            heading: "Welcome to Locaided",
            subheading: "Capture what's happening around you, share it instantly, and earn for every impactful moment.",
            image: require('../../../../assets/auth/Phone.png'),
            bgColor: '#FFFFFF'
        },
        {
            heading: "Discover Local Events",
            subheading: "Find and attend exciting events happening around you in real-time.",
            image: require('../../../../assets/auth/Phone.png'),
            bgColor: '#F8F8F8'
        },
        {
            heading: "Earn Rewards",
            subheading: "Get rewarded for sharing authentic local experiences with your community.",
            image: require('../../../../assets/auth/Phone.png'),
            bgColor: '#F5F5F5'
        },
        {
            heading: "Connect Locally",
            subheading: "Build your local network and discover hidden gems in your area.",
            image: require('../../../../assets/auth/Phone.png'),
            bgColor: '#F0F0F0'
        },
        {
            heading: "Real-time Updates",
            subheading: "Stay informed with live updates from places and events around you.",
            image: require('../../../../assets/auth/Phone.png'),
            bgColor: '#EBEBEB'
        },
    ];
    return (
        <ScreenWrapper
            paddingHorizontal={0.1}
            translucent
            statusBarColor="transparent"
            barStyle="light-content"
        >
            <Animated.FlatList
                data={onboardingData}
                showsHorizontalScrollIndicator={false}
                horizontal
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
                onScrollToIndexFailed={info => {
                    console.error('Failed to scroll to index:', info.index);
                }}
                ref={flatListRef}
                onMomentumScrollEnd={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex((x / width)?.toFixed(0));
                }}
                initialScrollIndex={currentIndex}
                pagingEnabled
                renderItem={({ item }) => (
                    <Animated.View style={styles.sliderItem}>
                        <ImageFast source={item.image} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                        <ImageFast source={require('../../../../assets/auth/Overlay.png')} style={{ width: '100%', height: '100%', position: 'absolute', top: 220, }} resizeMode='contain' />
                    </Animated.View>
                )}
            />
            <View style={styles.container}>
                <CustomText
                    label={
                        onboardingData[currentIndex].heading
                    }
                    fontSize={22}
                    marginBottom={10}
                    textAlign="center"
                />

                <CustomText
                    label={
                        onboardingData[currentIndex].subheading
                    }
                    fontSize={12}
                    marginBottom={5}
                    textAlign="center"
                    lineHeight={16}
                />
                <View style={styles.progressContainer}>
                    {onboardingData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.progressBar,
                                { backgroundColor: currentIndex == index ? 'red' : '#E0E0E0' }
                            ]}
                        />
                    ))}
                </View>
                <CustomButton title='Create Account' height={48} backgroundColor='black' color={'white'} borderRadius={10} onPress={() => setCreateAccountModalVisible(true)} />
                <CustomButton onPress={() => { setLoginModalVisible(true) }} title='Login' height={48} color={'black'} borderColor={'black'} borderWidth={1} marginTop={10} borderRadius={10} />
            </View>
            <Login
                visible={loginModalVisible}
                closeModal={() => setLoginModalVisible(false)}
                openCreateAccountModal={() => {
                    setLoginModalVisible(false);
                    setCreateAccountModalVisible(true);
                }}
            />
            <Createacc
                visible={createAccountModalVisible}
                closeModal={() => setCreateAccountModalVisible(false)}
                openLoginModal={() => {
                    setCreateAccountModalVisible(false);
                    setLoginModalVisible(true);
                }}
            />
        </ScreenWrapper>
    );
};
export default OnBoarding;
const styles = StyleSheet.create({
    sliderItem: {
        width: width,
        height: height + 30,
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    container: {
        width: width,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        paddingHorizontal: 40,
    },
    progressBar: {
        flex: 1,
        height: 6,
        marginHorizontal: 3,
        borderRadius: 100,
    },
});


