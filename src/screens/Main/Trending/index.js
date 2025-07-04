import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Molecules/Header'
import { Images } from '../../../../assets'
import ScreenWrapper from '../../../../components/ScreenWrapper'
import SearchInput from '../../../../components/SearchInput'
import Optionbar from './Molecules/Optionbar'
import Slider from '@react-native-community/slider'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomInputSlider from '../../../../components/CustomInputSlider'
import CustomHorizontalLine from '../../../../components/CustomHorizontalLine'
import Stories from '../Home/Molecules/Stories'

const Trending = () => {
    const [Search, setSearch] = useState('')
    const [sliderValue, setsliderValue] = useState(50)
    return (
        <ScreenWrapper
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
    }
})