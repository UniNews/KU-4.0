import { StyleSheet } from 'react-native'
import { wp, viewportWidth } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
const textInputContainerHorizontalMargin = viewportWidth - wp(20)

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    },
    logoText: {
        fontSize: 50,
        color: 'white',
        fontFamily: BOLD_FONT
    },
    caption: {
        fontSize: 25,
        color: 'white',
        fontFamily: REGULAR_FONT
    },
    headLogin: {
        marginBottom: 15,
        fontSize: 27,
        color: 'white',
        fontFamily: BOLD_FONT
    },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 50,
    },
    logoTextContainer: {
        flexDirection: 'row',
    },
    secondLogoText: {
        color: '#80FFF8'
    },
    textInputContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF60',
        borderRadius: 10,
        height: 50,
        width: textInputContainerHorizontalMargin
    },
    inputContainer: {
        alignItems: 'center',
        // justifyContent: 'center',
        // flex: 1,
        // backgroundColor: 'white'
    },
    icon: {
        marginHorizontal: 10
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: REGULAR_FONT,
        color: 'white'
    },
    textButton: {
        color: '#69C4BF',
        textAlign: 'center',
        fontSize: 17,
        fontFamily: BOLD_FONT
    },
    underlineText: {
        fontSize: 15,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        fontFamily: BOLD_FONT,
        paddingHorizontal: 5
    },
    buttonContainer: {
        width: 200,
        height: 55,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        marginTop: 15,
    },
    bottomContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: viewportWidth,
        padding: 15,
    },
    facebookButton: {
        backgroundColor: '#3b5998',
        borderRadius: 5,
        elevation: 3,
    },
    facebookContainer: {
        paddingVertical: 7,
        width: 130,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    facebookText: {
        color: 'white',
        fontSize: 15,
        fontFamily: BOLD_FONT
    },
    googleButton: {
        backgroundColor: '#DB4437',
        borderRadius: 5,
        elevation: 3,
    },
    googleContainer: {
        paddingVertical: 7,
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    googleText: {
        color: 'white',
        fontSize: 15,
        fontFamily: BOLD_FONT
    },
    bottomText: {
        paddingVertical: 5,
        color: 'white',
        fontSize: 15,
        fontFamily: BOLD_FONT,
        textAlign: 'center',
        paddingVertical: 5
    },
    regularText: {
        color: 'white',
        fontSize: 15,
        fontFamily: REGULAR_FONT,
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },

    footerContainer: {
        position:'relative',
        bottom: 0
    },
    coverContainer: {
        height:'100%'
    }
})