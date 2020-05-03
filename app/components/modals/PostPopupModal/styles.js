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
        elevation: 4,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
    },
    modalText: {
        fontFamily: REGULAR_FONT,
    },
})