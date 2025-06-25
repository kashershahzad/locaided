import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomModal from '../../../../../components/CustomModal'
import CustomText from '../../../../../components/CustomText'
import { COLORS } from '../../../../utiles/COLORS'
import ImageFast from '../../../../../components/ImageFast'
import { Images } from '../../../../../assets'
import ToggleButtons from './ToggleButtons'
import CustomCheckbox from '../../../../../components/CustomCheckBox'
import CustomButton from '../../../../../components/CustomButton'
const PostRateModel = ({ modal, onClose }) => {
    const [offensiveLanguage, setOffensiveLanguage] = useState(false);
    const [abuseHarassment, setAbuseHarassment] = useState(false);
    const [intrusiveAdvertising, setIntrusiveAdvertising] = useState(false);
    const [sensitiveMedia, setSensitiveMedia] = useState(false);
    const [spamContent, setSpamContent] = useState(false);
    return (
        <View>
            <CustomModal
                isVisible={modal}
                isBlur
                blurType='light'
                blurAmount={5}
                isChange
            >
                <View style={styles.modalContainer}>
                    <View style={styles.mincontainer}>
                        <ImageFast source={Images.back} style={styles.backicon} />
                        <CustomText
                            label="Rate this post"
                            fontSize={16} />
                        <ImageFast onPress={onClose} source={Images.close} style={styles.closeicon} />
                    </View>
                    <View style={styles.horizontalLine} />


                    <ToggleButtons title='Accuracy' option1='Misleading' option2='Factual' />

                    <ToggleButtons title='Source Credibility' option1='Fabricated' option2='Out of context' />

                    <ToggleButtons title='Select Content Risk Level' option1='Illegal' option2='Harmful' option3='Safe' defaultOption={'Harmful'} />

                    <View style={styles.warn}>
                        <Text style={{ fontSize: 10 }}>
                            Selecting Harmful will reduce the visibility time of this post. Please use this feature responsibly. Misuse or consistently opposing majority ratings can negatively impact your account.
                        </Text>
                    </View>
                    <CustomText label={'Choose the Most Relevant Issue'} fontSize={12} marginTop={10} marginBottom={10} marginLeft={20} />

                    <View style={styles.checkbox}>
                        <CustomCheckbox value={offensiveLanguage} onValueChange={setOffensiveLanguage} />
                        <CustomText label={'Offensive Language'} />
                    </View>

                    <View style={styles.checkbox}>
                        <CustomCheckbox value={abuseHarassment} onValueChange={setAbuseHarassment} />
                        <CustomText label={'Abuse & Harassment'} />
                    </View>

                    <View style={styles.checkbox}>
                        <CustomCheckbox value={intrusiveAdvertising} onValueChange={setIntrusiveAdvertising} />
                        <CustomText label={'Intrusive Advertising'} />
                    </View>

                    <View style={styles.checkbox}>
                        <CustomCheckbox value={sensitiveMedia} onValueChange={setSensitiveMedia} />
                        <CustomText label={'Sensitive or Disturbing Media'} />
                    </View>

                    <View style={styles.checkbox}>
                        <CustomCheckbox value={spamContent} onValueChange={setSpamContent} />
                        <CustomText label={'Potential Spam or Suspicious Content'} />
                    </View>
                    <View style={styles.horizontalLine} />

                    <View style={{ marginHorizontal: 20, marginTop: 10 }}>

                        <CustomButton title={'Submit'} backgroundColor={'black'} color={'white'} borderRadius={16} />

                    </View>
                </View>
            </CustomModal>
        </View>
    )
}

export default PostRateModel

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        paddingVertical: 10,
        backgroundColor: COLORS.white,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    mincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2,
        paddingHorizontal: 20
    },

    closeicon: {
        height: 12,
        width: 12,
        marginTop: 5,
    },

    backicon: {
        height: 20,
        width: 20,
        marginTop: 5,
    },

    horizontalLine: {
        borderBottomColor: '#E1E4EA',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    warn: {
        backgroundColor: '#FFEBEC',
        padding: 7,
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 8
    },
    checkbox: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 6,
    }
})