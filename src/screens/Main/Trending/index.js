import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Molecules/Header'
import { Images } from '../../../../assets'
import ScreenWrapper from '../../../../components/ScreenWrapper'
import SearchInput from '../../../../components/SearchInput'
import Optionbar from './Molecules/Optionbar'
import CustomInputSlider from '../../../../components/CustomInputSlider'
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine'
import Stories from '../Home/Molecules/Stories'
import TrendingOptions from './Molecules/TrendingOptions'

const Trending = () => {
    const [Search, setSearch] = useState('')
    const [sliderValue, setsliderValue] = useState(50)
    const Trendinglocation = [
        {
            location: 'Frankfurt',
            distance: '2 km away',
            post: '542 posts',
            tag: '198 trending moments'
        },
        {
            location: 'Offenbach',
            distance: '15 km away',
            post: '173 posts',
            tag: '79 alerts'
        },
        {
            location: 'Offenbach',
            distance: '15 km away',
            post: '173 posts',
            tag: '79 alerts'
        },
        {
            location: 'Langen',
            distance: '22 km away',
            post: '214 posts',
            tag: '55 traffic updates'
        },
        {
            location: 'New York',
            distance: '150 km away',
            post: '4,564 posts',
            tag: '2,320 local stories'
        }
    ];
    return (
        <ScreenWrapper
        scrollEnabled
            headerUnScrollable={() => (<Header title={'What s Hot Right Now'} righticon={Images.loop} />)}
        >
            <View style={styles.container}>
                <SearchInput value={Search} onChangeText={setSearch} placeholder={'Search any city or neighborhood...'} />
                <Optionbar title={'Customize Radius'} btn={'Manchester City Center'} location={'25km'} icon={Images.location} />
                <CustomInputSlider
                    value={sliderValue}
                    min={0}
                    max={100}
                    sliderLength={335}
                    onChange={(val) => setsliderValue(val)}
                />
            </View>
            <CustomHorizontalLine />
            <View style={styles.container}>
                <Optionbar title={'Trending Categories'} btn={"View All"} />
            </View>
            <Stories />

            <CustomHorizontalLine style={styles.line} />

            <View style={styles.container}>
                <Optionbar title={'Trending Locations'} btn={"View All"} />
            </View>

            {
                Trendinglocation.map((item, i) => (
                    <View index={i} style={styles.containertrending}>

                        <TrendingOptions location={item.location} distance={item.location} post={item.post} tag={item.tag} />
                    </View>
                ))
            }
        </ScreenWrapper>
    )
}

export default Trending

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    line: {
        marginTop: 15
    },
    containertrending: {
        marginTop: 25,
        marginHorizontal: 15,
        gap: 30
    }
})