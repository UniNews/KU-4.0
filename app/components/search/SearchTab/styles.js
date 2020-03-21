import { StyleSheet } from 'react-native';
import { REGULAR_FONT } from '../../../assets/css/typography';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    listContainer: {
        flexDirection: 'row',
    },
    listItem: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 20,
    },
    searchIconContainer: {
        paddingLeft: 10
    },
    clearIconContainer: {
        paddingHorizontal: 10
    },
    textInputField: {
        flex: 1,
        paddingLeft: 20,
        height: 40,
        fontFamily: REGULAR_FONT,
    },
});