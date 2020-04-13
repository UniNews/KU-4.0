import { StyleSheet, } from 'react-native'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'

const errorColor = '#AE2519'

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        elevation: 5,
        backgroundColor: 'white',
        height: 200,
        width: 250,
        borderRadius: 20,
    },
    topView: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: errorColor
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: BOLD_FONT
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: REGULAR_FONT
    },
    bottomView: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        backgroundColor: errorColor,
        alignItems: 'center'
    },
    closeText: {
        paddingLeft: 5,
        fontSize: 15,
        fontFamily: BOLD_FONT,
        color: 'white'
    }

})