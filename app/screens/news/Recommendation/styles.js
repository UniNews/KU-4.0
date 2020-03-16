import { StyleSheet } from 'react-native';
// import { wp, viewportHeight } from '../../../assets/javascripts/spacing'

const slideWidth = 225;
const itemWidth = slideWidth

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    newsScrollView: {
        paddingVertical: 15
    },
    newsCardContainer: {
        width: itemWidth,
        // height: slideHeight,
        marginLeft: 15,
    },
    lastNewsCardContainer: {
        width: itemWidth,
        // height: slideHeight,
        marginHorizontal: 15,
    },
    sectionContainer: {
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    horizontalLine: {
        marginHorizontal: 15,
    }
});