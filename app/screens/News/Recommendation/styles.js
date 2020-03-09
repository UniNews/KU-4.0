import { StyleSheet } from 'react-native';
import { wp, viewportHeight } from '../../../assets/javascripts/spacing'

const slideHeight = viewportHeight * 0.3;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth - itemHorizontalMargin * 5;

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    newsScrollView: {
        paddingVertical: 15
    },
    newsCardContainer: {
        width: itemWidth,
        height: slideHeight,
        marginHorizontal: itemHorizontalMargin,
    },
    sectionContainer: {
        paddingTop: wp(3),
        paddingHorizontal: wp(2),
    },
});