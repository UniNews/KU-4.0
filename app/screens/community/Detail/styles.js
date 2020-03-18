import { StyleSheet } from 'react-native';
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography';
import { PRIMARY_COLOR, SECONDARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color';

export default StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageAvatar: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userText: {
        color: KU_SECONDARY_COLOR,
        fontFamily: BOLD_FONT,
        fontSize: 15,
    },
    dateText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
    },
    gapTitleText: {
        flex: 1,
        paddingHorizontal: 10,
    },
    contentContainer: {
        padding: 10,
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    descriptionContainer: {
        paddingHorizontal: 10
    },
    descriptionText: {
        fontFamily: REGULAR_FONT,
    },
    iconContainer: {
        flexDirection: 'row',
        padding: 10,
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
    commentContainer: {
        padding: 10,
    },
    commentTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    commentInfoContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    commentText: {
        fontFamily: REGULAR_FONT,
        paddingTop: 5,
    },
    descriptionHeaderText: {
        fontFamily: BOLD_FONT,
        color: SECONDARY_COLOR,
        paddingTop: 10,
        paddingHorizontal: 10,
        fontSize: 15
    },
    commentIconContainer: {
        paddingTop: 5,
    },
    numberText: {
        fontSize: 13,
        fontFamily: BOLD_FONT,
    },
    indicatorText: {
        fontSize: 13,
        fontFamily: REGULAR_FONT,
    },
    inputContainer: {
        borderTopWidth: 1,
        borderColor: 'rgb(242, 242, 242)',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textInputField: {
        marginRight: 10,
        flex: 1,
        paddingLeft: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgb(242, 242, 242)',
        fontFamily: REGULAR_FONT,
    },
    postText: {
        fontFamily: REGULAR_FONT,
        color: 'grey'
    },
    keyboard: {
        flex: 1,
    }
});