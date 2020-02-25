import { StyleSheet } from 'react-native';
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 4,
        flexDirection: 'row',
    },
    rightContainer: {
        flex: 1,
    },
    avatar: {
        alignSelf: 'flex-start',
        width: 70,
        height: 70,
        // borderRadius: 70 / 2,
    },
    profileNameText: {
        color: KU_SECONDARY_COLOR,
        paddingHorizontal: 20,
        fontFamily: BOLD_FONT
    },
    buttonContainer: {
        alignSelf: 'flex-end',
    },
    description: {
        paddingHorizontal: 20,
        fontFamily: REGULAR_FONT,
    },
    date: {
        color: 'grey',
        fontSize: 13
    }
});
