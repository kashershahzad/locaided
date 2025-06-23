import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Images } from '../../../../../assets'
import ImageFast from '../../../../../components/ImageFast'
import { COLORS } from '../../../../utiles/COLORS'

const Stories = () => {
    const storiesData = [
        { id: 1, name: 'Sophia', image: Images.sophia },
        { id: 2, name: 'Activity', image: Images.activity },
        { id: 3, name: 'Alert', image: Images.alert },
        { id: 4, name: 'News', image: Images.news },
        { id: 5, name: 'More', image: Images.placeholder },
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
        paddingHorizontal: 10,
        paddingTop:10
    },
    scrollContainer: {
        paddingHorizontal: 3,
        gap: 15,
    },
    storyItem: {
        alignItems: 'center',
        width: 62,
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
        height: 62,
        width: 62,
        borderRadius: 100,
    },
    storyName: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        fontWeight: '500',
    }
})