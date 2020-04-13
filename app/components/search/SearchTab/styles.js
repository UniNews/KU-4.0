import { StyleSheet } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 20,
    },
    clearIconContainer: {
        paddingHorizontal: 10
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
        marginBottom: 3,
        // backgroundColor: 'white',
        backgroundColor: KU_SECONDARY_COLOR,
    },
    tabStyle: {
        backgroundColor: 'transparent',
    }
})