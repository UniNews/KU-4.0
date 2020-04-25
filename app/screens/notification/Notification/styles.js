import { StyleSheet } from 'react-native'
import { REGULAR_FONT, BOLD_FONT } from '../../../assets/css/typography'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    listContainer: {
        backgroundColor: 'white'
    },
    emptyContainer: {
        alignItems: 'center',
        flex: 1,
    },
    emptyText: {
        fontFamily: REGULAR_FONT,
        fontSize: 16,
        paddingTop: 5
    }
})