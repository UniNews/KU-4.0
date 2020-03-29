import { StyleSheet } from 'react-native'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    avatar: {
        marginTop: 10,
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 150 / 2,
    },
    profileInfoContainer: {
        alignItems: 'center',
    },
    nameText: {
        marginTop: 10,
        fontFamily: BOLD_FONT,
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    },
    buttonContainer: {
        marginVertical: 10,
        height: 50
    },
    followingButtonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: BOLD_FONT
    },
    notFollowingButtonText: {
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontFamily: BOLD_FONT,
    },
    followingButton: {
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    notFollowingButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    infoContainer: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    indicatorContainer: {
        alignItems: 'center',
        flex: 1,
    },
    numberText: {
        fontFamily: BOLD_FONT,
        fontSize: 25,
        color: 'white',
    },
    indicatorText: {
        fontFamily: REGULAR_FONT,
        fontSize: 15,
        color: 'white',
    },
    profileContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    profileTitleText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 15,
    },
    profileValueText: {
        fontFamily: REGULAR_FONT,
        fontSize: 15,
    },
    verticalLine: {
        marginVertical: 2
    },
    profileSectionContainer: {
        paddingVertical: 10,
    },
    backButton: {
        alignSelf: 'flex-start',
        position: 'absolute',
        padding: 15,
    }
})