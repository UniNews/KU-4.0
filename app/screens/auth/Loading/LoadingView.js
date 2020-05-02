import React from 'react'
import { View, AsyncStorage, Vibration, Image } from 'react-native'
import styles from './styles'
import { AlertHelper } from '../../../configs/alertHelper'
import { Notifications } from 'expo'
import { LinearGradient } from 'expo-linear-gradient'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'

class LoadingView extends React.Component {

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const { autoLogin, getNotifications } = this.props
        try {
            const accessToken = await AsyncStorage.getItem('accessToken')
            if (accessToken) {
                autoLogin(accessToken)
                getNotifications()
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
        else {
            this.props.getNotifications()
            Vibration.vibrate()
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
            <LinearGradient colors={[KU_PRIMARY_COLOR, KU_SECONDARY_COLOR]} style={styles.container} >
                <View style={styles.logoContainer}>
                    <Image style={styles.imageAvatar}
                        source={require('../../../assets/imgs/enter-logo.png')}
                    />
                </View>
            </LinearGradient >

        )
    }
}

export default LoadingView