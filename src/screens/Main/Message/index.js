import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../../../components/ScreenWrapper'
import MessageHeader from './Molecules/MessageHeader'
import ToggleButtons from '../Home/Molecules/ToggleButtons'
import Notificationbar from '../Notification/Molecules/Notificationbar'
import MessageContainer from './Molecules/MessageContainer'
import { Images } from '../../../../assets'
import CustomModal from '../../../../components/CustomModal'


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

const ChatInfo = [
  {
    avatar: Images.avatar1,
    name: 'Lisa Moon',
    time: '3m ago',
    message: 'Got it! I’m already on my way 🚗',
    status: Images.redstatus,
  },
  {
    avatar: Images.avatar2,
    name: 'Sasha Fire',
    time: '1h ago',
    message: 'Traffic alert near 5th Street. Expect delays."',
    status: Images.graystatus,
  },
  {
    avatar: Images.avatar3,
    name: 'Sasha Fire',
    time: '1h ago',
    message: 'Cool. Will update you after gym 💪',
    status: Images.graystatus,
  },
  {
    avatar: Images.avatar4,
    name: 'Lola Ice',
    time: '2 days ago',
    message: 'Meeting moved to 7PM tonight. 🔥',
    status: Images.redstatus,
  },
  {
    avatar: Images.avatar5,
    name: 'Bella Noir',
    time: '5 days ago',
    message: 'I added a new photo to my profile 💃',
    status: Images.greenstatus,
  },
];


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
                <MessageContainer chatinfo={ChatInfo}/>
                {/* <CustomModal isBlur isVisible={true}>
                    <View><Text>hi lorem
                        sakbdhjb dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddkkkkkkkkkkkkkknnnnnnnnnnnnnn</Text></View>
                </CustomModal> */}
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