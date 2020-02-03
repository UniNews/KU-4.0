import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 10
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    commentInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin:10,
        marginVertical:5
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
        paddingLeft: 18,
        borderRadius: 10,
        backgroundColor: 'white',
        width: '83%'
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconE: {
        right:15,
        top: 7
    }
});