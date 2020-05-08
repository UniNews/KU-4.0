import { StyleSheet, } from 'react-native'
import { REGULAR_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        alignItems: 'center',
        padding: 20,

    },
    modalText: {
        fontFamily: REGULAR_FONT,
    },
    border: {
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 4,
    }
})