import { StyleSheet } from 'react-native'
import { viewportWidth } from '../../../assets/javascripts/spacing'
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
    buttonContainer: {
        marginTop: 10,
        marginBottom: 5
    },
    followingButtonText: {
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontFamily: BOLD_FONT,
    },
    notFollowingButtonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: BOLD_FONT
    },
    followingButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    notFollowingButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#4AAF54',
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
        fontSize: 30,
        color: 'white',
    },
    indicatorText: {
        fontFamily: REGULAR_FONT,
        // fontSize: 15,
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
        fontSize: 17,
    },
    verticalLine: {
        marginVertical: 10
    },
    profileSectionContainer: {
        paddingVertical: 10,
    },
    loader: {
        flex: 1,
        justifyContent: 'center'
    },
})