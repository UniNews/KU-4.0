import React from 'react'
import { View, AsyncStorage, Image } from 'react-native'
import styles from './styles'
import { AlertHelper } from '../../../configs/alertHelper'
import { Notifications } from 'expo'
import { LinearGradient } from 'expo-linear-gradient'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'
import * as Font from 'expo-font'

class LoadingView extends React.Component {

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Kanit-Regular': require('../../../assets/fonts/Kanit-Medium.ttf'),
            'Kanit-Light': require('../../../assets/fonts/Kanit-Light.ttf'),
        })
        const { autoLogin } = this.props
        try {
            const accessToken = await AsyncStorage.getItem('accessToken')
            if (accessToken)
                autoLogin(accessToken)
            else
                this.goLogin()
        } catch (err) {
            this.goLogin()
            this.props.showModal()
        }
    }

    handleNotification = notification => {
        if (notification.origin === 'selected') {
            if (this.props.navigation)
                this.props.navigation.navigate('แจ้งเตือน')
        }
        else {
            if (this.props.getNotifications)
                this.props.getNotifications()
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
        const { user, error, getNotifications } = this.props
        if (user) {
            getNotifications()
            Notifications.addListener(
                this.handleNotification
            )
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