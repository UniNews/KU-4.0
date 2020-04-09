import { StyleSheet } from 'react-native'
import { BOLD_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    headContainer: {
        paddingTop: 20,
        paddingBottom: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontFamily: BOLD_FONT,
        fontSize: 30,
        color: 'white',
    },
    labelStyle: {
        fontFamily: BOLD_FONT,
        fontSize: 15,
        textAlign: 'center',
    },
    indicatorStyle: {
        marginBottom: 3,
        backgroundColor: 'white',
    },
    tabStyle: {
        backgroundColor: 'transparent',
    }
})