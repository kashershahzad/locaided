import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Molecules/Header'
import { Images } from '../../../../assets'
import ScreenWrapper from '../../../../components/ScreenWrapper'
import SearchInput from '../../../../components/SearchInput'
import Optionbar from './Molecules/Optionbar'
import Slider from '@react-native-community/slider'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Trending = () => {
    const [Search, setSearch] = useState('')
    const [sliderValue, setSliderValue] = useState(0.5)
    return (
        <ScreenWrapper
            headerUnScrollable={() => (<Header title={'What s Hot Right Now'} righticon={Images.loop} />)}
            backgroundColor
        >
            <View style={styles.container}>
                <SearchInput value={Search} onChangeText={setSearch} placeholder={'Search any city or neighborhood...'} />
                <Optionbar title={'Customize Radius'} btn={'Manchester City Center'} location={'25km'} icon={Images.location} />
                <MultiSlider
                    values={[50]}
                    min={0}
                    max={100}
                    sliderLength={335}
                    onValuesChange={(val) => console.log(val)}
                    selectedStyle={{ backgroundColor: '#FF2D55', height: 6, borderRadius: 15 }}
                    unselectedStyle={{ backgroundColor: '#E5E7EB', height: 6, borderRadius: 15 }}
                    trackStyle={{ height: 6 }}
                    customMarker={() => (
                        <View style={{
                            width: 16,
                            height: 16,
                            marginTop: 5,
                            backgroundColor: 'white',
                            borderRadius: 15,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }} />
                    )}
                />
            </View>
        </ScreenWrapper>
    )
}

export default Trending

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
})