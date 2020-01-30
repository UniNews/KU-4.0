import { StyleSheet } from 'react-native';
import { wp, viewportWidth } from '../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../assets/css/typography'
const textInputContainerHorizontalMargin = viewportWidth - wp(20);

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
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
        alignItems: 'center'
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
    policyText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        fontFamily: REGULAR_FONT
    },
    buttonContainer: {
        width: 200,
        height: 55,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        marginTop: 15,
    }
});