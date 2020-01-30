import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../../assets/css/color'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContainer: {
        flex: 1,
    },
    avatar: {
        alignSelf: 'flex-start',
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
    },
    nameText: {
        fontSize: 16,
        paddingHorizontal: 20,
        fontFamily: BOLD_FONT
    },
    buttonContainer: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        backgroundColor: '#F0F0F0',
    },
    followingText: {
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontFamily: BOLD_FONT
    }
});
