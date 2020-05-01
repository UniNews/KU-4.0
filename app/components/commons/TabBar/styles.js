import { StyleSheet } from 'react-native'
import { BOLD_FONT } from '../../../assets/css/typography'
import { wp } from '../../../assets/javascripts/spacing'
export default StyleSheet.create({
    headContainer: {
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    labelStyle: {
        fontFamily: BOLD_FONT,
        fontSize: 15,
        textAlign: 'center',
    },
    indicatorStyle: {
        marginBottom: 3,
        backgroundColor: 'white',
    },
    tabStyle: {
        backgroundColor: 'transparent',
    },
    imageAvatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    logoContainer: {
        position: 'absolute',
        top: 10,
        left: -wp(20),
        right: wp(20),
        bottom: -10,
    },
    searchIcon: {
        paddingTop: 20
    }
})