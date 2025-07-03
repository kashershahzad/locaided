import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Pressable } from 'react-native';
import Topbar from '../../../../components/auth/Topbar';
import { useNavigation } from '@react-navigation/native';
import ImageFast from '../../../../components/ImageFast';
import ImagePicker from 'react-native-image-crop-picker';
import fonts from '../../../../assets/fonts';
import Pointsbtn from '../../../../components/auth/Pointsbtn';

const Avatar = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleCompleteAndEarn = () => {
        navigation.navigate('Ready', {
            avatarCompleted: true
        });
    };

    const openCamera = () => {
        setModalVisible(false);
        ImagePicker.openCamera({
            width: 400,
            height: 400,
        }).then(image => {
            setSelectedImage(image.path);
        }).catch(error => {
            console.log(error);
        });
    };

    const openGallery = () => {
        setModalVisible(false);
        ImagePicker.openPicker({
            width: 400,
            height: 400,
        }).then(image => {
            setSelectedImage(image.path);
        }).catch(error => {
            console.log(error);
        });
    };



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Topbar title='Choose an avatar' />
            <View style={style.container}>
                {selectedImage ? (
                    <ImageFast source={{ uri: selectedImage }} style={style.img} />
                ) : (
                    <ImageFast source={require('../../../../assets/auth/icon3.png')} style={style.img} />
                )}
                <Text style={style.title}>Set profile Image</Text>
                <Text style={style.subtitle}>Min 400x400px, PNG or JPEG</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={style.btn}> {selectedImage === null ? 'Choose Avatar' : 'Change'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Ready')}}>
                <Text style={style.des}>I will do later</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={style.buttonContainer}>
                <TouchableOpacity
                    style={style.completeButton}
                    onPress={handleCompleteAndEarn}
                >
                    <Text style={style.buttonText}>Complete and earn </Text>
                    <View style={style.pointsContainer}>
                        <Image source={require('../../../../assets/auth/points.png')} />
                        <Text style={style.pointsText}>+50 Points</Text>
                    </View>
                </TouchableOpacity>
            </View> */}
            <Pointsbtn action={handleCompleteAndEarn} />

            {/* Image Picker Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Choose Option</Text>

                        <TouchableOpacity
                            style={style.modalButton}
                            onPress={openCamera}
                        >
                            <Text style={style.modalButtonText}>Take Photo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={style.modalButton}
                            onPress={openGallery}
                        >
                            <Text style={style.modalButtonText}>Choose from Gallery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[style.modalButton, { borderBottomWidth: 0 }]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={[style.modalButtonText, { color: 'red' }]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
    },
    title: {
        marginTop: 12,
        fontSize: 14,
        fontFamily:fonts.semiBold,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 12,
        fontFamily:fonts.light,
    },
    btn: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#E1E4EA',
        padding: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 12
    },
    des: {
        textDecorationLine: 'underline',
        marginBottom:130
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        backgroundColor: 'white',
        marginTop: 150,
    },
    completeButton: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily:fonts.semiBold,
    },
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    pointsText: {
        fontSize: 15,
        color: '#F6B51E',
        fontFamily:fonts.regular,
    },
    img: {
        height: 120,
        width: 120,
        borderRadius: 120
    },
    // Modal styles
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButton: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 16,
    },
})

export default Avatar;