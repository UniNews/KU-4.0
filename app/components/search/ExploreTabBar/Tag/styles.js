import { StyleSheet } from 'react-native'
import { BOLD_FONT, REGULAR_FONT } from '../../../../assets/css/typography'

export default StyleSheet.create({
    tagContainer: {
        paddingVertical: 10,
        // paddingHorizontal: 5,
        height: 55,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgb(242, 242, 242)',
    },
    tagButton: {
        marginHorizontal: 5,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 30,
    },
    tagText: {
        // flex: 1,
        textAlign: 'center',
        paddingLeft: 5,
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
})