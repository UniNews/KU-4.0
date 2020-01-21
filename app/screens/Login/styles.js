import { StyleSheet } from 'react-native';
import { wp, viewportWidth } from '../../assets/javascripts/spacing'
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
        fontFamily: 'Kanit-Regular'
    },
    caption: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Kanit-Light'
    },
    headLogin: {
        marginBottom: 15,
        fontSize: 27,
        color: 'white',
        fontFamily: 'Kanit-Regular'
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
        fontFamily: 'Kanit-Light',
        color: 'white'
    },
    button: {
        backgroundColor: '#F0F0F0',
        borderRadius: 30,
        width: 200,
        padding: 15
    },
    textButton: {
        color: '#69C4BF',
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'Kanit-Regular'
    },
    policyText: {
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: 0.1,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        fontFamily: 'Kanit-Light'
    },
    buttonContainer: {
        marginTop: 15
    }
});