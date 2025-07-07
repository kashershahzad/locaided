import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrendingOptions from './TrendingOptions'

const TrendingLocations = ({value}) => {
    return (
        <View>
            {
                value.map((item, i) => (
                    <View index={i} style={styles.containertrending}>
                        <TrendingOptions location={item.location} distance={item.location} post={item.post} tag={item.tag} />
                    </View>
                ))
            }
        </View>
    )
}

export default TrendingLocations

const styles = StyleSheet.create({
        containertrending: {
        marginTop: 25,
        marginHorizontal: 15,
        gap: 30
    }
})