import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { PRIMARY_COLOR } from '../../../assets/css/color'

export default StyleSheet.create({
    container: {
        // flex: 1
        height: Constants.statusBarHeight,
        backgroundColor: PRIMARY_COLOR
    }
});
