import { StyleSheet } from 'react-native';
import Constants from '../../configs/constants';

export default StyleSheet.create({
    textStyle: {
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 15,
    },
    textFocus: {
        color: 'white',
        borderColor: 'transparent',
        borderBottomColor: 'white',
        borderWidth: 1,
        fontFamily: Constants.BOLD_FONT
    },
    textNormal: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: Constants.REGULAR_FONT
    }
});