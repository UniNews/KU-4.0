import { StyleSheet, Platform, StatusBar } from 'react-native'
import * as Device from 'expo-device'

export default StyleSheet.create({
    topContainer: {
        flex: 0,
        // paddingTop: Platform.OS === 'android' && Device.brand !== 'HUAWEI' ? StatusBar.currentHeight : 0,
        backgroundColor: '#465859'
    },
    bottomContainer: {
        flex: 1,
        // backgroundColor: '#465859'
    }
})