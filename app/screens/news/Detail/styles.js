import { StyleSheet } from 'react-native';
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
import { wp } from '../../../assets/javascripts/spacing'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    newsImage: {
        height: 250,
        width: null,
        resizeMode: 'cover'
    },
    topIconContainer: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        padding: 10
    },
    heartIcon: {
        paddingHorizontal: 16
    },
    posterText: {
        fontSize: 15,
        fontFamily: REGULAR_FONT
    },
    titleText: {
        fontSize: 20,
        fontFamily: BOLD_FONT
    },
    innerTitleContainer: {
        flex: 1,
        marginLeft: 10,
    },
    titleContainer: {
        flexDirection: 'row',
    },
    topContainer: {
        padding: 15
    },
    textIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    iconContainer: {
        paddingTop: 5,
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    iconText: {
        paddingLeft: 5,
        fontSize: 13,
        fontFamily: REGULAR_FONT,
    },
    newsInfoText: {
        fontFamily: REGULAR_FONT,
        fontSize: 15
    },
    commentHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    gapButton: {
        marginLeft: 10
    },
    hr: {
        marginVertical: 15
    },
    innerCommentContainer: {
        paddingVertical: 10
    },
    commentIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageAvatar: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
    },
    descriptionHeaderText: {
        fontFamily: BOLD_FONT,
        fontSize: 15
    },
    loader: {
        flex: 1,
        justifyContent: 'center'
    },
});