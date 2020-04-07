import { StyleSheet } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR, SECONDARY_COLOR, KU_SECONDARY_COLOR, KU_PRIMARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1,
        // backgroundColor: 'white'
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    headerContainer: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        padding: 5,
        elevation: 2,
    },
    userText: {
        color: KU_SECONDARY_COLOR,
        fontFamily: BOLD_FONT,
        letterSpacing: 0.5,
    },
    dateText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
    },
    profileContainer: {
        paddingTop: 5,
    },
    infoContainer: {
        flexDirection: 'row'
    },
    descriptionContainer: {
        paddingVertical: 10,
    },
    contentContainer: {
        paddingHorizontal: 10,
    },
    commentContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        padding: 5,
        elevation: 1,
    },
    descriptionText: {
        letterSpacing: 0.5,
        fontFamily: REGULAR_FONT,
    },
    iconContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
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
    commentHeaderText: {
        fontFamily: BOLD_FONT,
        color: SECONDARY_COLOR,
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
        paddingRight: 10,
    },
    textInputField: {
        marginRight: 10,
        flex: 1,
        paddingLeft: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgb(242, 242, 242)',
        fontFamily: REGULAR_FONT,
        margin: 10,
    },
    postText: {
        fontFamily: BOLD_FONT,
        color: PRIMARY_COLOR
    },
    idleText: {
        fontFamily: REGULAR_FONT,
        color: 'grey'
    },
    keyboard: {
        flex: 1,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dotIcon: {
        // alignSelf: 'flex-end'
    },
    infoGap: {
        paddingHorizontal: 10,
        flex: 1,
    },
    clockIconContainer: {
        paddingRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    commentHeaderContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    commentsContainer: {
        flex: 1,
    }
})