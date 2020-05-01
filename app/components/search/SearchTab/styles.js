import { StyleSheet } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { KU_SECONDARY_COLOR, SECONDARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    container: {

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 20,
    },
    clearIconContainer: {
        paddingHorizontal: 10,
    },
    textInputField: {
        flex: 1,
        paddingLeft: 20,
        height: 40,
        fontFamily: REGULAR_FONT,
    },
    labelStyle: {
        fontFamily: BOLD_FONT,
        fontSize: 15,
        textAlign: 'center',
    },
    indicatorStyle: {
        // marginBottom: 3,
        backgroundColor: KU_SECONDARY_COLOR,
    },
    tabStyle: {
        backgroundColor: 'transparent',
    },
    searchIconContainer: {
        paddingLeft: 15
    },
    searchHistoryText: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontFamily: BOLD_FONT
    },
    searchHistoryContainer: {
        height: '100%'
    },
    whiteBackgroud: {
        backgroundColor: 'white'
    },
    searchHistoryTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    deleteAllText: {
        fontFamily: REGULAR_FONT,
        color: 'grey'
    },
    searchItemText: {
        fontFamily: REGULAR_FONT,
        fontSize: 15,
    }
})