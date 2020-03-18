import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    container: {
        // marginTop: 10,
        // marginHorizontal: 10,
        // borderRadius: 10,
        backgroundColor: 'white',
    },
    nameText: {
        color: KU_SECONDARY_COLOR,
        fontFamily: BOLD_FONT,
    },
    dateText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 13,
    },
    descriptionText: {
        paddingVertical: 5,
        fontFamily: REGULAR_FONT,
    },
    innerContainer: {
        marginVertical: 10,
        marginHorizontal: 15,
        backgroundColor: 'white',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomContainer: {
        paddingTop: 5,
        flexDirection: 'row',
    },
    iconContainer: {
        paddingRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    numberText: {
        fontSize: 13,
        paddingLeft: 5,
        fontFamily: BOLD_FONT,
    },
    indicatorText: {
        fontSize: 13,
        fontFamily: REGULAR_FONT,
    },
});