import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR, KU_SECONDARY_COLOR, SECONDARY_COLOR, KU_PRIMARY_COLOR } from '../../../assets/css/color'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    nameText: {
        fontFamily: BOLD_FONT,
    },
    bioText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
    },
    profileDescriptionContainer: {
        paddingHorizontal: 20,
    },
    followingButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
    },
    followingText: {
        color: PRIMARY_COLOR,
        fontFamily: BOLD_FONT,
        fontSize: 13
    },
    followButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: KU_SECONDARY_COLOR,
    },
    followText: {
        color: 'white',
        fontFamily: BOLD_FONT,
    },
})
