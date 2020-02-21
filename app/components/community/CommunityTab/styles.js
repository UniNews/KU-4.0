import { StyleSheet } from 'react-native';
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography';

export default StyleSheet.create({
    headContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontFamily: BOLD_FONT,
        fontSize: 30,
        color: 'white',
    },
    listContainer: {
        flexDirection: 'row',
    },
    listItem: {
        flex: 1,
        paddingBottom: 3,
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
});