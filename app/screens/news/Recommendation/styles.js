import { StyleSheet } from 'react-native'
const slideWidth = 225
const itemWidth = slideWidth

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    newsCardContainer: {
        width: itemWidth,
        marginLeft: 15,
    },
    lastNewsCardContainer: {
        width: itemWidth,
        marginHorizontal: 15,
    },
    section: {
        padding: 15,
    },
    sectionList: {
        paddingBottom: 15,
    }

})