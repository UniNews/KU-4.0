import { StyleSheet, Platform } from 'react-native';
import { wp, viewportWidth, viewportHeight } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography';

const IS_IOS = Platform.OS === 'ios';
const slideHeight = viewportHeight * 0.4;
const cardMargin = wp(5);

const entryBorderRadius = 8;
export default StyleSheet.create({
    containter: {
    },
    cardContainer: {
        flex: 1,
        width: viewportWidth,
        height: slideHeight,
        paddingHorizontal: cardMargin,
        paddingTop: 20
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
        color: 'black',
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