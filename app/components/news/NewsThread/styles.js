import { StyleSheet, Platform } from 'react-native';
import { wp, viewportWidth, viewportHeight } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography';
import { KU_SECONDARY_COLOR } from '../../../assets/css/color';

const entryBorderRadius = 10;

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 1,
        marginRight: 10
    },
    rightContainer: {
        flex: 1,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
    },

    imageContainer: {
        flex: 1,
        height: 100,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: entryBorderRadius
    },
    title: {
        fontFamily: BOLD_FONT,
        letterSpacing: 0.5,
        fontSize: 15,
    },
    nameText: {
        fontFamily: BOLD_FONT,
        color: KU_SECONDARY_COLOR
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
        flex: 1,
        flexDirection: 'row-reverse',
    }
});