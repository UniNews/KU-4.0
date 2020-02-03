import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../../assets/css/color'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    imageAvatar: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    avatarName: {
        fontFamily: BOLD_FONT,
        fontSize: 15,
    },
    commentDate: {
        fontSize: 14,
        fontFamily: REGULAR_FONT,
        color: 'grey',
    },
    commentMessage: {
        fontFamily: REGULAR_FONT,
        fontSize: 14
    },
    gapComment: {
        padding: 10,
        marginLeft: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        alignSelf: 'center'
    },
    likeContainer: {
        alignItems: 'center',
        paddingTop: 5,
        flexDirection: 'row',
    },
    likeIconText: {
        paddingLeft: 5,
        fontSize: 13,
        fontFamily: REGULAR_FONT,
    },
});