import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Images } from '../../../../../assets'
import ImageFast from '../../../../../components/ImageFast'
import { COLORS } from '../../../../utiles/COLORS'
import fonts from '../../../../../assets/fonts'

const Stories = () => {
    const storiesData = [
        { id: 1, name: 'Sophia', image: Images.sophia },
        { id: 2, name: 'Activity', image: Images.activity },
        { id: 3, name: 'Alert', image: Images.alert },
        { id: 4, name: 'News', image: Images.news },
        { id: 5, name: 'Activity', image: Images.activity },
        { id: 6 , name: 'Alert', image: Images.alert },
        { id: 7, name: 'News', image: Images.news },
       
    ]

    const renderStoryItem = (item) => (
        <View key={item.id} style={styles.storyItem}>
            <View style={styles.imgcontainer}>
                <ImageFast
                    source={item.image}
                    resizeMode={'cover'}
                    style={styles.icon}
                />
            </View>
            <Text style={styles.storyName}>{item.name}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {storiesData.map(renderStoryItem)}
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10, 
        paddingTop:10
    },
    scrollContainer: {
        paddingHorizontal: 3,
        gap: 15,
    },
    storyItem: {
        alignItems: 'center',
        width: 65,
    },
    imgcontainer: {
        backgroundColor: 'white',
        padding: 1,
        borderRadius: 50,
        marginBottom: 8,
        borderWidth: 2,
        borderColor: COLORS.red
    },
    icon: {
        height: 65,
        width: 65,
        borderRadius: 100,
    },
    storyName: {
        fontSize: 12,
        color: COLORS.gray,
        textAlign: 'center',
        fontFamily:fonts.semiBold,
    }
})