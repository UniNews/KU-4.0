import { StyleSheet, Platform } from 'react-native'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'

const entryBorderRadius = 10

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 5,
        marginRight: 10
    },
    rightContainer: {
        flex: 4,
        flexDirection: 'row'
    },
    imageContainer: {
        height: 100,
        flex: 1
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: entryBorderRadius
    },
    title: {
        fontFamily: REGULAR_FONT,
        letterSpacing: 0.5,
        fontSize: 15,
    },
    nameText: {
        fontFamily: BOLD_FONT,
        color: KU_SECONDARY_COLOR,
        letterSpacing: 0.5,
    },
    date: {
        color: 'grey',
        fontFamily: REGULAR_FONT,
        fontSize: 13,
    },
    icon: {
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
    iconContainer: {
        flexDirection: 'row',
    },
    descriptionContainer: {
        paddingVertical: 10,
    }
})