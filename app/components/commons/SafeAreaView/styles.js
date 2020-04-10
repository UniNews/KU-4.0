import { StyleSheet, Platform, StatusBar } from 'react-native'
// import Constants from 'expo-constants'

export default StyleSheet.create({
    topContainer: {
        flex: 0,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#465859'
    },
    bottomContainer: {
        flex: 1
    }
})