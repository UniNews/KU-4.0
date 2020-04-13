import { StyleSheet } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR, SECONDARY_COLOR, } from '../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: 'rgb(242, 242, 242)',
    },
    searchIconContainer: {
        paddingLeft: 15
    },
    textInputField: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        height: 40,

        fontFamily: REGULAR_FONT,
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
        padding: 5,
        borderRadius: 30,
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
        backgroundColor: 'white',
    },
    searchText: {
        color: 'grey',
        fontFamily: REGULAR_FONT,
    },
    threadContainer: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 2,
    },
})