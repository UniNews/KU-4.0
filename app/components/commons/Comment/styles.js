import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    profileContainer: {
        padding: 10,
    },
    infoContainer: {
        flexDirection: 'row'
    },
    descriptionContainer: {
        paddingVertical: 10,
    },
    contentContainer: {
        paddingHorizontal: 10,
    },
    descriptionText: {
        fontFamily: REGULAR_FONT,
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    infoGap: {
        paddingHorizontal: 10, flex: 1
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userText: {
        color: KU_SECONDARY_COLOR,
        fontFamily: BOLD_FONT,
        letterSpacing: 0.5,
    },
    clockIconContainer: {
        paddingRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    dateText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
    },
    iconContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    iconTextContainer: {
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textIconContainer: {
        flexDirection: 'row',
        paddingRight: 10,
        alignItems: 'center'
    },
    numberText: {
        fontSize: 13,
        fontFamily: BOLD_FONT,
    },
    indicatorText: {
        fontSize: 13,
        fontFamily: REGULAR_FONT,
    },
    dotIcon: {
        width: 30,
        textAlign: 'right',
    },
});