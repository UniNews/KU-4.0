import React from 'react'
import { View, AsyncStorage } from 'react-native'
import styles from './styles'
import { AlertHelper } from '../../../configs/alertHelper'
import Spinner from '../../../components/commons/Spinner'
// import registerForPushNotificationsAsync from '../../../configs/registerForPushNotificationsAsync'

class LoadingView extends React.Component {

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        // registerForPushNotificationsAsync()
        const { autoLogin, getUnreadNotifications } = this.props
        try {
            const accessToken = await AsyncStorage.getItem('accessToken')
            if (accessToken) {
                autoLogin(accessToken)
                getUnreadNotifications()
            }
            else
                this.goLogin()
        } catch (err) {
            this.goLogin()
        }
    }

    goLogin = () => {
        const { navigation } = this.props
        navigation.navigate('Auth')
    }

    goMain = () => {
        const { navigation } = this.props
        navigation.navigate('Main')
    }

    componentDidUpdate(prevProps) {
        const { user, error } = this.props
        if (user) {
            this.goMain()
            AlertHelper.alert('info', 'ล็อกอินสำเร็จ', 'สวัสดีคุณ ' + user.displayName)
        }
        else if (error && prevProps.error != error)
            this.goLogin()
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner />
            </View>
        )
    }
}

export default LoadingView