import { StyleSheet } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR, SECONDARY_COLOR, } from '../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    inputContainer: {
        borderTopWidth: 1,
        borderColor: 'rgb(242, 242, 242)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10
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
        color: PRIMARY_COLOR
    },
    tagContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        height: 55,
        flexDirection: 'row',
        borderBottomWidth: 1,
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
    searchContainer: {
        backgroundColor: 'white'
    },
    indicatorContainer: {
        padding: 10
    },
    indicatorText: {
        fontFamily: BOLD_FONT,
        color: SECONDARY_COLOR,
        fontSize: 15
    }
})