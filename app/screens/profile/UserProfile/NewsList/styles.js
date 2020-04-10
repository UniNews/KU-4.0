import { StyleSheet } from 'react-native'
import { BOLD_FONT, REGULAR_FONT } from '../../../../assets/css/typography'
import { PRIMARY_COLOR } from '../../../../assets/css/color'
import Constants from 'expo-constants'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },

    contentGap: {
        paddingTop: 400 + Constants.statusBarHeight,
    },
    newsContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
})