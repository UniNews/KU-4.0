import { StyleSheet, Platform } from 'react-native';
import { wp, viewportWidth, viewportHeight } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography';

const IS_IOS = Platform.OS === 'ios';
const cardHeight = viewportHeight * 0.4;
const cardMargin = wp(5);
const entryBorderRadius = 10;

export default StyleSheet.create({
    cardContainer: {
        width: viewportWidth,
        height: cardHeight,
        paddingHorizontal: cardMargin,
        paddingVertical: 10
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
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
        fontSize: 14,
        letterSpacing: 0.5
    },
    subtitle: {
        fontFamily: REGULAR_FONT,
        marginTop: 6,
        fontSize: 13,
    },
    date: {
        color: 'grey',
    }
});