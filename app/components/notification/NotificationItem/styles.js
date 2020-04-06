import { StyleSheet } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'

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
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
    },
    profileNameText: {
        color: KU_SECONDARY_COLOR,
        fontFamily: BOLD_FONT,
        fontSize: 15,
    },
    buttonContainer: {
        alignSelf: 'flex-end',
    },
    description: {
        fontFamily: REGULAR_FONT,
    },
    date: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 13
    },
    descriptionContainer: {
        paddingHorizontal: 10,
    },
    notReadBackground: {
        backgroundColor: 'rgba(88, 142, 87, 0.1)'
    },
    readBackground: {
        backgroundColor: 'white'
    }
})
