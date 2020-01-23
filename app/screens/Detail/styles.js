import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../assets/css/color'

export default StyleSheet.create({
    container: {
        // flex: 1
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
        fontFamily: 'Kanit-Light'
    },
    titleText: {
        fontSize: 25,
        fontFamily: 'Kanit-Regular'
    },
    innerTitleContainer: {
        paddingHorizontal: 10
    },
    titleContainer: {
        borderLeftColor: PRIMARY_COLOR,
        borderLeftWidth: 4,
    },
    dateIconContainer: {
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateText: {
        paddingLeft: 5,
        fontSize: 13,
        fontFamily: 'Kanit-Light',
    },
    newsInfoText: {
        fontFamily: 'Kanit-Light',
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
        marginVertical: 20
    },
    innerCommentContainer: {
        paddingVertical: 10
    },
    commentContainer: {
        paddingTop: 5
    }
});