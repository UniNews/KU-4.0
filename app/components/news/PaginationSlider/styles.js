import { StyleSheet, } from 'react-native';
import { viewportWidth } from '../../../assets/javascripts/spacing'

export default StyleSheet.create({
    imgContainer: {
        alignSelf: 'center',
    },
    paginationBoxStyle: {
        position: 'absolute',
        bottom: 0,
        padding: 0,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: 'rgba(128, 128, 128, 0.92)'
    }
});
