import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../../../components/ScreenWrapper'
import MessageHeader from './Molecules/MessageHeader'
import ToggleButtons from '../Home/Molecules/ToggleButtons'
import Notificationbar from '../Notification/Molecules/Notificationbar'

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
                <Notificationbar/>
            </View>
        </ScreenWrapper>
    )
}

export default Message

const styles = StyleSheet.create({})