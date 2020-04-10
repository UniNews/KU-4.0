import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    topContainer: {
        flex: 0,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        backgroundColor: '#465859'
    },
    bottomContainer: {
        flex: 1
    }
})