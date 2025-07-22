import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../../../components/ScreenWrapper'
import MessageHeader from './Molecules/MessageHeader'
import ToggleButtons from '../Home/Molecules/ToggleButtons'
import Notificationbar from '../Notification/Molecules/Notificationbar'
import MessageContainer from './Molecules/MessageContainer'


const button = [
    {
        title: 'All',
    },
    {
        title: 'Unread',
    },
    {
        title: 'Groups',
    }
]

const Message = () => {
    return (
        <ScreenWrapper
            headerUnScrollable={() => (<MessageHeader />)}
        >
            <View>
                <ToggleButtons
                    option1={'Private'}
                    option2={"Location"}
                />
                <View style={styles.container}>
                    <Notificationbar bottons={button} />
                </View>
                <MessageContainer />
            </View>
        </ScreenWrapper>
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    }
})