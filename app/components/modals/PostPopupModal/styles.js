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
        elevation: 4,
        backgroundColor: 'white',
        padding: 20,
    },
    modalText: {
        fontFamily: REGULAR_FONT,

    }
})