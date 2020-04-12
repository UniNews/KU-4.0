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
    },
    left: {
        // textAlign: 'left',
        position: 'absolute',
        zIndex: 1
    },
    right: {
        alignSelf: 'flex-end',
        // textAlign: 'right',
        position: 'absolute',
        zIndex: 1
    }
});
