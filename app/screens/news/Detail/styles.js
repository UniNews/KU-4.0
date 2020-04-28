import { StyleSheet } from 'react-native'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
import { KU_PRIMARY_COLOR, SECONDARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        color: KU_SECONDARY_COLOR,
        fontFamily: BOLD_FONT
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
        alignItems: 'center'
    },
    topContainer: {
        padding: 15,
    },
    textIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    iconContainer: {
        paddingTop: 5,
        flexDirection: 'row',
        // justifyContent: 'center'
    },
    dateIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingRight: 10,
        paddingTop: 5,
        flex: 1,
    },
    dateText: {
        fontFamily: REGULAR_FONT,
        color: 'grey'
    },
    numberText: {
        fontSize: 13,
        fontFamily: BOLD_FONT,
    },
    indicatorText: {
        fontSize: 13,
        fontFamily: REGULAR_FONT,
    },
    iconTextContainer: {
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
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
    dotIcon: {
        paddingTop: 3,
        paddingRight: 3,
    },
    descriptionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tagIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: SECONDARY_COLOR,
        borderWidth: 1,
        height: 20,
        padding: 12,
        borderRadius: 30,
    },
    tagText: {
        color: SECONDARY_COLOR,
        fontFamily: REGULAR_FONT
    },
    footerInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})