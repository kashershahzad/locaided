import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../../components/CustomButton'
import fonts from '../../../../../assets/fonts'

const button = [
    {
        title: 'All',
    },
    {
        title: 'Comments',
    },
    {
        title: 'Likes',
    },
    {
        title: 'Mentions',
    },
    {
        title: 'EYS Coins',
    },
]

const Notificationbar = () => {
    const [activeButton, setActiveButton] = useState('All')
    
    const handleButtonPress = (title) => {
        setActiveButton(title)
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                {
                    button.map(((item, i) => (
                        <CustomButton
                            key={i}
                            title={item.title}
                            borderWidth={1}
                            borderRadius={15}
                            paddingVertical={5}
                            paddingHorizontal={10}
                            fontSize={14}
                            borderColor={'#E1E4EA'}
                            backgroundColor={activeButton === item.title ? '#FF2557' : 'transparent'}
                            fontFamily={fonts.semiBold}
                            color={activeButton === item.title ? 'white' : 'black'}
                            onPress={() => handleButtonPress(item.title)}
                        />)))
                }
            </View>
        </ScrollView>
    )
}

export default Notificationbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        marginHorizontal: 10,
    }
})