import { StyleSheet } from 'react-native'
import { REGULAR_FONT } from '../../../../assets/css/typography'
import { PRIMARY_COLOR } from '../../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey'
    },
    profileThreadContainer: {
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey'
    },
    textContainer: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    indicatorText: {
        fontFamily: REGULAR_FONT
    },
    queryText: {
        fontFamily: REGULAR_FONT,
        color: PRIMARY_COLOR
    }
})