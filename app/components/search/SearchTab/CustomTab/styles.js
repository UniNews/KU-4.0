import { StyleSheet } from 'react-native';
import { BOLD_FONT, REGULAR_FONT } from '../../../../assets/css/typography';
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../../assets/css/color';

export default StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
    },
    textFocus: {
        color: KU_SECONDARY_COLOR,
        borderColor: 'transparent',
        borderBottomColor: KU_SECONDARY_COLOR,
        borderWidth: 1,
        fontFamily: BOLD_FONT,
    },
    textNormal: {
        fontFamily: REGULAR_FONT
    }
});