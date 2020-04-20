import { StyleSheet, Platform, StatusBar } from 'react-native'
import * as Device from 'expo-device';
// import Constants from 'expo-constants'

export default StyleSheet.create({
    topContainer: {
        flex: 0,
        paddingTop: Platform.OS === 'android' ? Device.brand === 'HUAWEI' ? 0 : StatusBar.currentHeight : 0,
        backgroundColor: '#465859'
    },
    bottomContainer: {
        flex: 1
    }
})