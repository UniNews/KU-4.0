import { StyleSheet } from 'react-native';
import Constants from '../../configs/constants';
import { Button } from 'native-base';

export default StyleSheet.create({
    linearGradient: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 48,
        lineHeight: 59,
        alignItems: 'center',
        color: '#FFFFFF',
        bottom: 210,
        fontFamily:'Kanit-Regular'
    },
    underLogoText: {
        fontStyle: 'normal',
        fontSize: 25,
        lineHeight: 30,
        alignItems: 'center',
        color: '#FFFFFF',
        bottom: 200,
        fontFamily:'Kanit-Light'
    },
    headLogin: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 30,
        alignItems: 'center',
        color: '#FFFFFF',
        bottom: 90,
        fontFamily:'Kanit-Regular'
    },
    row: {
        flexDirection: 'row'
    },
    secondLogo: {
        color: '#AFEEEE'
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DFDEDE',
        opacity: 0.3,
        borderRadius: 10,
        height: 40,
        width: 300,
        bottom: 70  
    },
    icon: {
        marginHorizontal: 10
    },
    gapInput: {
        marginBottom: 10
    },
    widthInput: {
        width: 230
    },
    myButton: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor:'#F0F0F0',
        borderRadius: 27.5,
        width: 250,
        bottom: 40
    },
    textButton: {
        color:'#69C4BF',
        textAlign: 'center',
        fontSize: 16,
        fontFamily:'Kanit-Light'
    },
    underButton: {
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.1,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        bottom: 30,
        fontFamily:'Kanit-Regular'
    },
    lastText: {
        top: 180,
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        fontFamily:'Kanit-Regular',
        letterSpacing: 0.1,
        color: '#FFFFFF'
    }
});