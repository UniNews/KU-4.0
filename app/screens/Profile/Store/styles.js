import { StyleSheet } from 'react-native'
import { viewportWidth, wp } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    coverImg: {
        width: viewportWidth,
    },
    avatar: {
        marginTop: 10,
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        borderWidth: 2,
        borderColor: 'white',
    },
    profileInfoContainer: {
        alignItems: 'center',
    },
    nameText: {
        marginTop: 10,
        fontFamily: BOLD_FONT,
        color: 'white',
        fontSize: 30
    },
    followingTextButton: {
        color: PRIMARY_COLOR,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: BOLD_FONT
    },
    notFollowingTextButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: BOLD_FONT
    },
    followingButtonContainer: {
        marginTop: 10,
        width: 150,
        backgroundColor: 'white',
        padding: 7,
    },
    notFollowingButtonContainer: {
        marginTop: 10,
        width: 150,
        backgroundColor: '#4AAF54',
        padding: 7,
    },
    followContainer: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    amount1Container: {
        alignItems: 'center',
        paddingRight: 20,
    },
    amount2Container: {
        borderLeftWidth: 1,
        paddingLeft: 20,
        borderLeftColor: 'white',
        alignItems: 'center'
    },
    numberText: {
        fontFamily: BOLD_FONT,
        fontSize: 30,
        color: 'white',
    },
    indicatorText: {
        fontFamily: REGULAR_FONT,
        fontSize: 15,
        color: 'white',
    },
    settingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 13,
    },
    settingTitleText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 15,
    },
    settingValueText: {
        fontFamily: REGULAR_FONT,
        fontSize: 17,
    }
})