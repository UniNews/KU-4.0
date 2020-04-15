import { StyleSheet } from 'react-native';
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    nameText: {
        color: KU_SECONDARY_COLOR,
        fontFamily: BOLD_FONT,
        letterSpacing: 0.5,
    },
    dateText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 13,
    },
    descriptionText: {
        letterSpacing: 0.5,
        paddingVertical: 10,
        fontFamily: REGULAR_FONT,
    },
    innerContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomContainer: {
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
    // dotIcon: {
    //     width: 30,
    //     backgroundColor: 'red',
    //     textAlign: 'right'
    // }
});