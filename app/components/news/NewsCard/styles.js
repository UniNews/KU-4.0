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
        // flex: 1,
    },
    image: {
        height: 115,
        resizeMode: 'cover',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
    },
    textContainer: {
        flex: 1,
        paddingTop: entryBorderRadius,
        paddingBottom: entryBorderRadius,
        paddingHorizontal: 14,
        // backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
    },
    titleContainer: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: BOLD_FONT,
        letterSpacing: 0.5,
        // backgroundColor: 'black',
    },
    nameText: {
        fontFamily: BOLD_FONT,
        letterSpacing: 0.5,
        color: KU_SECONDARY_COLOR
    },
    date: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 13,
    },
    border: {
        elevation: 3,
        marginBottom: 5, // for shadow
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
    },
    dateIconContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
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
})