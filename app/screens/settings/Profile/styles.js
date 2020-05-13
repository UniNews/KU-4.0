import { StyleSheet } from 'react-native'
import { viewportWidth } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR, SECONDARY_COLOR, KU_SECONDARY_COLOR, KU_PRIMARY_COLOR } from '../../../assets/css/color'

const circleWidth = viewportWidth

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        marginTop: 75,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 150 / 2,
        borderWidth: 4,
        borderColor: 'white',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 150 / 2,
        alignSelf: 'center',

    },
    uploadIconContainer: {
        paddingTop: 55,
        paddingLeft: 55,
        backgroundColor: 'rgba(0,0,0,0.3)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 150 / 2,
    },
    headerContainer: {
        paddingTop: 20,
    },
    linearGradient: {
        width: circleWidth,
        height: 150,
    },
    headerText: {
        paddingTop: 20,
        fontFamily: BOLD_FONT,
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    backButton: {
        paddingTop: 20,
        paddingLeft: 15,
        position: 'absolute',
        alignSelf: 'flex-start'
    },
    saveButton: {
        paddingTop: 20,
        paddingRight: 15,
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    settingContainer: {
        paddingHorizontal: 20,
        paddingVertical: 13,
    },
    settingTitleText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 15,
    },
    settingErrorTitleText: {
        fontFamily: REGULAR_FONT,
        color: 'red',
        fontSize: 15,
    },
    settingValueText: {
        fontFamily: REGULAR_FONT,
        fontSize: 17,
    },
    descriptionContainer: {
        // flex: 1,
        marginVertical: 70,
    },
    uploadingSpinner: {
        flex: 1,
    },
    errorHr: {
        backgroundColor: 'red'
    },
    // uploadImageIconContainer: {
    //     backgroundColor: KU_SECONDARY_COLOR,
    //     position: 'absolute',
    //     left: 150 - 20,
    //     top: 150 - 20,
    //     padding: 5,
    //     borderRadius: 30,
    // }
})
