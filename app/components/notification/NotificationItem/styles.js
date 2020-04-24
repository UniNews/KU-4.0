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
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
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
        paddingLeft: 5,
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 13
    },
    descriptionContainer: {
        paddingHorizontal: 10,
    },
    notReadBackground: {
        backgroundColor: 'rgba(88, 142, 87, 0.15)'
    },
    readBackground: {
        backgroundColor: 'white'
    },
    dateIconContainer: {
        paddingTop: 2,
        alignItems: 'center',
        flexDirection: 'row',
    },
})
