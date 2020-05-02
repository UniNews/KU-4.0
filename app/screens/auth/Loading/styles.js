import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../assets/javascripts/spacing';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    logoContainer: {
        marginBottom: hp(10),
        height: hp(40),
        width: wp(100),
    },
    imageAvatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})