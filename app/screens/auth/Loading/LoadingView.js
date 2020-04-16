import React from 'react'
import { View, AsyncStorage, Vibration } from 'react-native'
import styles from './styles'
import { AlertHelper } from '../../../configs/alertHelper'
import Spinner from '../../../components/commons/Spinner'
import registerForPushNotificationsAsync from '../../../configs/registerForPushNotificationsAsync'
import { Notifications } from 'expo'

class LoadingView extends React.Component {

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        registerForPushNotificationsAsync()
        const { autoLogin, getUnreadNotifications } = this.props
        try {
            const accessToken = await AsyncStorage.getItem('accessToken')
            if (accessToken) {
                autoLogin(accessToken)
                getUnreadNotifications()
                Notifications.addListener(
                    this.handleNotification
                )
            }
            else
                this.goLogin()
        } catch (err) {
            this.goLogin()
            this.props.showModal()
        }
    }

    handleNotification = notification => {
        if (notification.origin === 'selected')
            this.props.navigation.navigate('แจ้งเตือน')
        else
            Vibration.vibrate()
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