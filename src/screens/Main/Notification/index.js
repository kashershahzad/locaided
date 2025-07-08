import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Trending/Molecules/Header'
import { Images } from '../../../../assets'
import Emptynotification from './Molecules/Emptynotification'
import Notificationbar from './Molecules/Notificationbar'
import NotificationContainer from './Molecules/NotificationContainer'

const Notificationdata = [
    {
        img: Images.person1,
        title: 'Patrick commented on your post',
        catagorie: 'Comments',
        catagorieicon: Images.comments,
        time: 'Just now',
        description: "“Looks perfect, send it for review tomorro...",
        button: 'View Comment'
    },
    {
        img: Images.person2,
        title: 'Lisa liked your post',
        catagorie: 'Likes',
        catagorieicon: Images.likes,
        time: 'Just now',
        description: "“Your post 'Stuck in traffic' got 1 like.”",
        button: 'View Post'
    },
    {
        img: Images.person3,
        title: 'You were mentioned by Steve',
        catagorie: 'Mentions',
        catagorieicon: Images.mentions,
        time: 'Just now',
        description: "“@you check this post, might help!”",
        button: 'View Mention'
    },
    {
        img: Images.coinsadded,
        title: 'You earned 75 EYS Coins',
        catagorie: 'Coins',
        catagorieicon: Images.eys,
        time: 'Just now',
        description: "From your recent post 'Local Coffee Spot...",
        button: 'See balance'
    },
    {
        img: Images.coinsadded,
        title: 'Coins added successfully',
        catagorie: 'Coins',
        catagorieicon: Images.coinsaddedicon,
        time: 'Just now',
        description: "4200 EYS added to your balance.",
        button: 'See balance'
    }
];

const Notification = () => {
    return (
        <View>
            <Header righticon={Images.filter} title={'Notification Center'} />
            {/* <Emptynotification /> */}
            
            <Notificationbar />
            <View style={styles.notification}>
                {Notificationdata.map((item, index) => (
                    <NotificationContainer 
                        key={index} 
                        data={item}
                    />
                ))}
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