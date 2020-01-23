import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    commentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    commentInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarName: {
        fontFamily: 'Kanit-Regular',
        fontSize: 15,
    },
    commentDate: {
        fontSize: 13,
        fontFamily: 'Kanit-Light',
        color: 'grey',
    },
    commentMessage: {
        fontFamily: 'Kanit-Light',
        fontSize: 15
    },
    gapComment: {
        paddingLeft: 10
    },
});