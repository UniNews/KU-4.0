import { StyleSheet } from 'react-native';
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography';
import { PRIMARY_COLOR } from '../../../assets/css/color';

export default StyleSheet.create({
    containter: {
        // flex: 1,
    },
    tagContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        height: 55,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgb(242, 242, 242)',
    },
    tagButton: {
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: 100
    },
    tagText: {
        flex: 1,
        textAlign: 'center',
        paddingLeft: 5,
        fontSize: 14
    },
    notFocusTagButton: {
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'transparent',
    },
    notFocusTagText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
    },
    focusTagText: {
        fontFamily: BOLD_FONT,
        color: 'white',
    },
    focusTagButton: {
        backgroundColor: '#588E57',
    },
    threadContainer: {
        paddingBottom: 10
    }
});