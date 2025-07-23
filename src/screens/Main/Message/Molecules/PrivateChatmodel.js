import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomModal from '../../../../../components/CustomModal'
import CustomText from '../../../../../components/CustomText'
import { Images } from '../../../../../assets'
import ImageFast from '../../../../../components/ImageFast'
import fonts from '../../../../../assets/fonts'
import CustomHorizontalLine from '../../../../../components/CustomHorizontalLine'
import SearchInput from '../../../../../components/SearchInput'
import NewChatbtn from './NewChatbtn'


const PrivateChatmodel = ({ model, privatechat }) => {
    const [Search, setSearch] = useState('')
    const closebtn = () => {

        model(false)
        privatechat(false)
    }

    const btnData = [
        {
            title: 'Lisa Moon',
            desc: '@Lisemoon',
            icon: Images.avatar1,
        },
        {
            title: 'Oliver Mustermann',
            desc: '@oliver_dev',
            icon: Images.avatar2,
            status: Images.online
        },
        {
            title: 'James Lee',
            desc: '@james.lee',
            icon: Images.avatar3,
            status: Images.online
        },
        {
            title: 'Katie',
            desc: '@katie_me',
            icon: Images.avatar4,
        },
        {
            title: 'Lisa Moon',
            desc: '@Lisemoon',
            icon: Images.avatar1,
        },
        {
            title: 'Oliver Mustermann',
            desc: '@oliver_dev',
            icon: Images.avatar2,
            status: Images.online
        },
        {
            title: 'James Lee',
            desc: '@james.lee',
            icon: Images.avatar3,
            status: Images.online
        },
        {
            title: 'Katie',
            desc: '@katie_me',
            icon: Images.avatar4,
        },

    ]

    return (
        <View>
            <CustomModal
                isBlur
                blurType='light'
                blurAmount={10}
                isChange
                isVisible
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modelheader}>
                        <ImageFast source={Images.back} resizeMode={'contain'} style={styles.backicon} onPress={() => model(true)} />
                        <CustomText label={'Start New Chat'} fontSize={18} fontFamily={fonts.regular} />
                        <ImageFast source={Images.close} resizeMode={'contain'} style={styles.closeicon} onPress={closebtn} />
                    </View>
                    <CustomHorizontalLine />
                    <View style={styles.search}>
                        <SearchInput value={Search} onChangeText={setSearch} placeholder={'Search users by username'} />

                    </View>

                    <CustomText label={'Recents'} fontSize={14} fontFamily={fonts.regular} marginLeft={15} />
                    <ScrollView style={styles.container}>
                        <NewChatbtn info={btnData} margintop={8} />
                    </ScrollView>
                </View>
            </CustomModal>
        </View>
    )
}

export default PrivateChatmodel

const styles = StyleSheet.create({
    modalContainer: {
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 16,
    },
    modelheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        height: 500,
    },
    closeicon: {
        height: 12,
        width: 12,
        marginTop: 5,
    },
    backicon: {
        height: 24,
        width: 24,
        marginTop: 5,
    },
    search: {
        margin: 15,
        marginBottom: 5,
    },
    recent: {
        marginRight: 20,
    }
})