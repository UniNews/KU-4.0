import { StyleSheet } from 'react-native'
import { KU_SECONDARY_COLOR, PRIMARY_COLOR } from '../../../../assets/css/color'
import { REGULAR_FONT } from '../../../../assets/css/typography'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    threadContainer: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 2,
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