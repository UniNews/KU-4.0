import { StyleSheet } from 'react-native'
import { REGULAR_FONT } from '../../../../assets/css/typography'
import Constants from 'expo-constants'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    profileContainer: {
        // backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 405 + Constants.statusBarHeight,
        // paddingVertical: 10,
    },
    profileTitleText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 15,
    },
    profileValueText: {
        fontFamily: REGULAR_FONT,
        fontSize: 15,
    },
    profileSectionContainer: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
})