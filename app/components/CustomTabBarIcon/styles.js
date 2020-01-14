import { StyleSheet } from 'react-native';
import Constants from '../../configs/constants'

export default StyleSheet.create({
    textStyle: {
        fontSize: 15,
        color: 'white',
        fontFamily:'Kanit-Light'
    },
    textFocuse:{
        fontSize: 15,
        color: 'white',
        borderColor:'transparent',
        borderBottomColor:'white',
        borderWidth: 1,
        fontFamily:'Kanit-Light'
    }
    ,textNormal:{
        color:'rgba(255, 255, 255, 0.5)',
        fontSize: 15,
        fontFamily:'Kanit-Regular'
    }
});