import { StyleSheet } from 'react-native'
import { REGULAR_FONT } from '../../../../assets/css/typography'
import { PRIMARY_COLOR, SECONDARY_COLOR, } from '../../../../assets/css/color'

export default StyleSheet.create({
    indicatorContainer: {
        paddingTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    indicatorText: {
        fontFamily: REGULAR_FONT,
        color: SECONDARY_COLOR,
    },
    container: {
        flex: 1,
    },
    newsContainer: {
        backgroundColor: 'white',
    },
    queryText: {
        fontFamily: REGULAR_FONT,
        color: PRIMARY_COLOR,
    },
    spinner: {
        paddingLeft: 5
    }
})