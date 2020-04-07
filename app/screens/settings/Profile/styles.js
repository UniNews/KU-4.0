import { StyleSheet } from 'react-native'
import { viewportWidth } from '../../../assets/javascripts/spacing'
import { BOLD_FONT, REGULAR_FONT } from '../../../assets/css/typography'

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
        backgroundColor: 'white'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        borderWidth: 4,
        borderColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
    },
    headerContainer: {
        paddingTop: 20,
    },
    linearGradient: {
        width: circleWidth,
        height: 150
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
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    },
    settingTitleText: {
        fontFamily: REGULAR_FONT,
        color: 'grey',
        fontSize: 15,
    },
    settingValueText: {
        fontFamily: REGULAR_FONT,
        fontSize: 17,
    },
    descriptionContainer: {
        paddingVertical: 70,
    },
    uploadingSpinner: {
        flex: 1,
    },
    updaingSpinner: {
        
    }
})
