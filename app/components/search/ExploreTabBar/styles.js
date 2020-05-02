import { StyleSheet } from 'react-native'
import { REGULAR_FONT, } from '../../../assets/css/typography'

export default StyleSheet.create({
    containter: {
        // flex: 1,
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
    searchContainer: {
        backgroundColor: 'white',
    },
    searchText: {
        color: 'grey',
        fontFamily: REGULAR_FONT,
    },
})