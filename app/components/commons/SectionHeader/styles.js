import { StyleSheet } from 'react-native';
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftColor: PRIMARY_COLOR,
        borderLeftWidth: 4,
    },
    title: {
        fontSize: 16, paddingLeft: 10, fontFamily: BOLD_FONT
    },
    subtitle: {
        fontSize: 15, textAlign: 'right', fontFamily: REGULAR_FONT, color: 'grey'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
