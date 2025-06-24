import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../utiles/COLORS'
import CustomModal from '../../../../../components/CustomModal'
import CustomText from '../../../../../components/CustomText'
import CustomButton from '../../../../../components/CustomButton'
import ImageFast from '../../../../../components/ImageFast'

export default function HomeModel({ modal, onClose }) {
    return (
        <CustomModal
            isBlur
            isVisible={modal}
            onDisable={onClose}>
            <View style={styles.modalContainer}>
                <ImageFast
                    // source={Images.confirmBid}
                    style={{ width: 112, height: 90 }}
                    resizeMode="contain"
                />
                <CustomText
                    label="Confirm Bid"
                    // fontFamily={fonts.semiBold}
                    fontSize={36}
                />
                <CustomText
                    label={'dhcskl'}
                    textAlign="center"
                    lineHeight={21}
                    marginBottom={40}
                />
                <CustomButton
                    title="Yes, Place My Bid"
                    marginBottom={20}
                    // loading={BidLoading}
                    // onPress={MakeBide}
                />
                <CustomButton
                    title="Cancel"
                    backgroundColor="transparent"
                    borderWidth={1}
                    borderColor={COLORS.primaryColor}
                    color={COLORS.primaryColor}
                    onPress={onClose}
                />
            </View>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: COLORS.white,
        borderRadius: 16,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})