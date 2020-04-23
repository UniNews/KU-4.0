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
        elevation: 5,
        backgroundColor: 'white',
        height: 125,
        width: 125,
        borderRadius: 20,
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    loadingText: {
        paddingTop: 15,
        fontFamily: REGULAR_FONT,
        fontSize: 15,
        textAlign: 'center'
    }
})