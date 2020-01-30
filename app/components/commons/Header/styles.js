import { StyleSheet } from 'react-native';
import { BOLD_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    linearGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 65,
    },
    title: {
        fontFamily: BOLD_FONT,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        flex: 1
    },
    left: {
        textAlign: 'left',
        flex: 1
    },
    right: {
        textAlign: 'right',
        flex: 1,
    }
});
