import { StyleSheet } from 'react-native'
import { wp, viewportWidth, hp } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
const textInputContainerHorizontalMargin = viewportWidth - wp(20)

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
    },
    headLogin: {
        marginBottom: 15,
        fontSize: 27,
        color: 'white',
        fontFamily: BOLD_FONT
    },
    logoContainer: {
        height: hp(40),
        width: wp(100),
        // backgroundColor: 'black',
        position: 'absolute',
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
        paddingTop: hp(35),
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
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    imageAvatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})