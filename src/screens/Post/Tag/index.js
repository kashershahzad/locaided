import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Main/Trending/Molecules/Header'
import { Images } from '../../../../assets'
import CustomText from '../../../../components/CustomText'
import ImageFast from '../../../../components/ImageFast'
import fonts from '../../../../assets/fonts'
import ScreenWrapper from '../../../../components/ScreenWrapper'

import { useNavigation } from '@react-navigation/native'

const TagsData = [
    {
        title: 'Activity',
        description: 'Fitness, clubs, workshops, crafts.',
        icon: Images.activitytag,
    },
    {
        title: 'Hot Spot',
        description: 'Trending places, events, and new openings.',
        icon: Images.hotspottag,
    },
    {
        title: 'Lifestyle',
        description: 'Beauty, food, hobbies, travel, and leisure.',
        icon: Images.lifestyletag,
    },
    {
        title: 'Traffic',
        description: 'Road closures, traffic jams, speed alerts.',
        icon: Images.traffictag,
    },
    {
        title: 'News',
        description: 'Local headlines, stories, and daily updates.',
        icon: Images.newstag,
    },
    {
        title: 'Events',
        description: 'Concerts, meetups, sports, and festivals.',
        icon: Images.eventstag,
    },
    {
        title: 'Search',
        description: 'Explore local services, shops, and more.',
        icon: Images.searchtag,
    },
    {
        title: 'Offer',
        description: 'Discounts, promos, giveaways, and deals.',
        icon: Images.offertag,
    },
    {
        title: 'Education',
        description: 'Courses, programs, seminars, and talks.',
        icon: Images.eductiontag,
    },
    {
        title: 'Career',
        description: 'Jobs, advice, networking, and skills.',
        icon: Images.careertag,
    },
    {
        title: 'Milestones',
        description: 'Achievements, launches, and breakthroughs.',
        icon: Images.milestonestag,
    },
    {
        title: 'Missing',
        description: 'Report or find lost people or items.',
        icon: Images.missingtag,
    },
    {
        title: 'Alert',
        description: 'Weather, safety, and critical incident notices.',
        icon: Images.alerttag
    },
    {
        title: 'SOS',
        description: 'Emergency help request to the community.',
        icon: Images.sostag,
    },
];

const Tag = () => {
    const navigation = useNavigation()
    return (
        <ScreenWrapper
            scrollEnabled
            headerUnScrollable={() => (<Header title={'Add Caption'} righticon={Images.filter2} />)}>

            <View style={styles.info}>
                <CustomText label={'Select from a wide range of tags to categorize your content, ensuring it reaches the right audience swiftly and effectively.'} fontFamily={fonts.regular} fontSize={11} lineHeight={15} />
                <ImageFast source={Images.close2} style={styles.closeicon} resizeMode={'contain'} />
            </View>
            {TagsData.map((item, i) => (
                <TouchableOpacity key={i} style={styles.container} onPress={() => {
                    navigation.navigate('MainTabs', {
                        screen: 'Post',
                        params: { tag: item.title }
                    });
                }}>
                    <ImageFast source={item.icon} style={styles.icon} resizeMode={'contain'} />
                    <View style={styles.mincontainer}>
                        <CustomText label={item.title} fontSize={14} fontFamily={fonts.semiBold} marginTop={3} />
                        <CustomText label={item.description} fontSize={12} fontFamily={fonts.regular} color={'#525866'} />
                    </View>
                </TouchableOpacity>
            ))}
        </ScreenWrapper>
    )
}

export default Tag

const styles = StyleSheet.create({
    info: {
        backgroundColor: '#F1F5F9',
        borderRadius: 8,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingRight: 20,

    },
    closeicon: {
        height: 8,
        width: 8,
    },
    icon: {
        height: 50,
        width: 48
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        gap: 15,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: '#E1E4EA',
        paddingVertical: 8,
        borderRadius: 16,
        marginTop: 9,
    },
    mincontainer: {
        gap: 8,
    }
})