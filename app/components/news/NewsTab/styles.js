import { StyleSheet } from 'react-native';
import { BOLD_FONT } from '../../../assets/css/typography';

export default StyleSheet.create({
    headContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontFamily: BOLD_FONT,
        fontSize: 30,
        color: 'white',
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    listItem: {
        flex: 1,
        paddingBottom: 3,
    }
});