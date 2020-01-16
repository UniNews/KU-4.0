import { StyleSheet } from 'react-native';
import Constants from '../../configs/constants';

export default StyleSheet.create({
    headContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontFamily: Constants.BOLD_FONT,
        fontSize: 30,
        color: 'white',
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',

    },
    listItem: {
        flex: 1
    }
});