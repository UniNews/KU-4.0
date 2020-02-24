import { StyleSheet, Platform } from 'react-native';
import { wp, viewportWidth, viewportHeight } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography';
import { KU_SECONDARY_COLOR } from '../../../assets/css/color';

const IS_IOS = Platform.OS === 'ios';
const cardHeight = viewportHeight * 0.4;
const cardMargin = wp(5);
const entryBorderRadius = 10;

export default StyleSheet.create({
    cardContainer: {
        width: viewportWidth,
        height: cardHeight,
        paddingHorizontal: cardMargin,
        paddingVertical: 10,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
    },
    textContainer: {
        paddingTop: entryBorderRadius,
        paddingBottom: entryBorderRadius,
        paddingHorizontal: 14,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
    },
    title: {
        fontFamily: BOLD_FONT,
        letterSpacing: 0.5
    },
    nameText: {
        fontFamily: BOLD_FONT,
        color: KU_SECONDARY_COLOR
    },
    date: {
        color: 'grey',
        fontFamily: REGULAR_FONT,
        fontSize: 13,
        marginTop: 3,
    },
    paddingShadow: {
        paddingBottom: 5
    },
    shadow: {
        flex: 1,
        elevation: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
    }
});