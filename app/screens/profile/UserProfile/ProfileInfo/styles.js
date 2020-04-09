import { StyleSheet } from 'react-native'
import { REGULAR_FONT } from '../../../../assets/css/typography'

export default StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: 'black'
    },
    profileContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
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