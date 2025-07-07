import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Trending/Molecules/Header'
import { Images } from '../../../../assets'
import Emptynotification from './Molecules/Emptynotification'
import Notificationbar from './Molecules/Notificationbar'
import NotificationContainer from './Molecules/NotificationContainer'

const Notification = () => {
    return (
        <View>
            <Header righticon={Images.filter} title={'Notification Center'} />
            {/* <Emptynotification /> */}
            
            <Notificationbar />
            <View style={styles.notification}>
                <NotificationContainer/>
                <NotificationContainer/>
                <NotificationContainer/>
                <NotificationContainer/>
            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    notification:{
        marginTop:8,
    }
})