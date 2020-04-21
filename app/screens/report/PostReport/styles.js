import { StyleSheet, } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1
    },
    descriptionContainer: {
        padding: 20
    },
    descriptionText: {
        fontFamily: REGULAR_FONT,
        fontSize: 15,
    },
    topicContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        paddingHorizontal: 10,
    },
    listContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 10,
    },
    selectIconContainer: {
        width: 30
    },
    topicText: {
        fontFamily: REGULAR_FONT,
        // paddingLeft: 10,
        fontSize: 15,
        // textAlign: 'center'
    },
    saveButton: {
        paddingTop: 5,
        paddingRight: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    textInputFieldContainer: {
        marginTop: 10,
        borderRadius: 10,
        // height: 50,
        padding: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
        backgroundColor: 'white',
    },
    textInputField: {
        fontFamily: REGULAR_FONT,

    }
})