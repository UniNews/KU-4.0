import { StyleSheet } from 'react-native';
import { BOLD_FONT, REGULAR_FONT } from '../../../../assets/css/typography';

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
        fontFamily: BOLD_FONT
    },
    textNormal: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: REGULAR_FONT
    }
});