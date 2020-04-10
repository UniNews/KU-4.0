import { StyleSheet } from 'react-native'
import { BOLD_FONT, REGULAR_FONT } from '../../../../assets/css/typography'
import { PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../../assets/css/color'
import Constants from 'expo-constants'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    avatar: {
        marginTop: 10 + Constants.statusBarHeight,
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 150 / 2,
    },
    profileInfoContainer: {
        alignItems: 'center',
        height: 350 + Constants.statusBarHeight,
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
    verticalLine: {
        marginVertical: 2
    },
    backButton: {
        alignSelf: 'flex-start',
        position: 'absolute',
        paddingHorizontal: 15,
        paddingVertical: 15 + Constants.statusBarHeight,
    },
    tabWrapper: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        zIndex: 100,
    },
    labelStyle: {
        fontFamily: BOLD_FONT,
        fontSize: 15,
        textAlign: 'center',
    },
    indicatorStyle: {
        // width: 50,
        // height: 3,
        // left: '18%',
        backgroundColor: KU_SECONDARY_COLOR,
    },
    tabStyle: {
        backgroundColor: 'white',
        elevation: 0,
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        height: 50
    }
})