import { StyleSheet } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    textInput: {
        marginTop: 10,
        flex: 1,
        fontSize: 18,
        textAlignVertical: 'top',
        fontFamily: REGULAR_FONT,
        color: 'black',
    },
    topContainer: {
        flexDirection: 'row',
    },
    tagContainer: {
        padding: 6,
        borderRadius: 30,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    pressedTagBackgroud: {
        backgroundColor: KU_SECONDARY_COLOR,
    },
    notPressedTagBackgroud: {
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'transparent',
    },
    tagText: {
        paddingLeft: 5,
    },
    pressedTagText: {
        fontFamily: BOLD_FONT,
        color: 'white',
    },
    notPressedTagText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
    },
    contentContainer: {
        flex: 1,
        padding: 15,
    },
    modelContainer: {
        flex: 1,
        // backgroundColor: "black",
        // height: '50%'
    },
    selectTagButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectText: {
        paddingLeft: 10,
        fontSize: 15,
        fontFamily: REGULAR_FONT,
    },
    selectIcon: {
        width: 25,
        textAlign: 'center'
    },
    saveButton: {
        paddingTop: 5,
        paddingRight: 10,
    }
})