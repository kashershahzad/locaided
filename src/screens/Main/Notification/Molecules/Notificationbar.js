import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import fonts from '../../../../../assets/fonts'


const Notificationbar = ({bottons}) => {



    const [activeButton, setActiveButton] = useState('All')
    
    const handleButtonPress = (title) => {
        setActiveButton(title)
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                {
                    bottons.map(((item, i) => (
                        <TouchableOpacity
                            key={i}
                            style={[
                                styles.button,
                                {
                                    backgroundColor: activeButton === item.title ? '#FF2557' : 'transparent',
                                    borderColor: '#E1E4EA'
                                }
                            ]}
                            onPress={() => handleButtonPress(item.title)}
                        >
                            <Text style={[
                                styles.buttonText,
                                {
                                    color: activeButton === item.title ? 'white' : '#525866',
                                    fontFamily: fonts.semiBold
                                }
                            ]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )))
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
    },
    button: {
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 14,
    }
})