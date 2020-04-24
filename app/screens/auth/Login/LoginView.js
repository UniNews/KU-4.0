import React from 'react'
import { Text, TextInput, View, TouchableWithoutFeedback, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { AlertHelper } from '../../../configs/alertHelper'
import Button from '../../../components/commons/Button'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'
import LoadingModal from '../../../components/modals/LoadingModal'
import { STATUS_BAR_HEIGHT } from '../../../assets/css/device'

class LoginView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isHide: true
        }
    }

    componentDidUpdate(prevProps) {
        const { user, error, getNotifications } = this.props
        if (user) {
            getNotifications()
            this.props.navigation.navigate('Main')
            AlertHelper.alert('info', 'ล็อกอินสำเร็จ', 'สวัสดีคุณ ' + user.displayName)
        }
        else if (error && prevProps.error != error) {
            AlertHelper.alert('error', 'เกิดข้อผิดพลาด', error)
        }
    }

    goRegister = () => {
        this.props.navigation.navigate('Register')
    }

    renderHideIcon() {
        const { isHide } = this.state
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({ isHide: !isHide })}>
                <FontAwesome style={styles.icon} name={isHide ? 'eye' : 'eye-slash'} size={20} color='white' />
            </TouchableWithoutFeedback>
        )
    }

    render() {
        const { isHide, username, password } = this.state
        const { login, loading, loginByFacebook, loginByGoogle } = this.props
        return (
            <LinearGradient colors={[KU_PRIMARY_COLOR, KU_SECONDARY_COLOR]} style={styles.container} >
                <View style={styles.innerContainer}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoTextContainer}>
                            <Text style={styles.logoText}>Uni</Text>
                            <Text style={[styles.logoText, styles.secondLogoText]}>News</Text>
                        </View>
                        <Text style={styles.caption}>แหล่งข้อมูลสำหรับนิสิต</Text>
                    </View>

                    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={STATUS_BAR_HEIGHT + 50} style={styles.inputContainer}>
                        <Text style={styles.headLogin}>เข้าสู่ระบบ</Text>
                        <View style={styles.textInputContainer}>
                            <FontAwesome name='user' style={styles.icon} size={20} color='white' />
                            <TextInput
                                maxLength={12}
                                style={styles.textInput}
                                placeholder='ชื่อผู้ใช้งาน'
                                placeholderTextColor='white'
                                onChangeText={(text) => this.setState({ username: text })}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.textInputContainer}>
                            <FontAwesome name='lock' style={styles.icon} size={20} color='white' />
                            <TextInput
                                maxLength={12}
                                style={styles.textInput}
                                placeholder='รหัสผ่าน'
                                placeholderTextColor='white'
                                secureTextEntry={isHide}
                                onChangeText={(text) => this.setState({ password: text })}
                            >
                            </TextInput>
                            {this.renderHideIcon()}
                        </View>
                        <Button rounded style={styles.buttonContainer} disabled={loading} onPress={() => {
                            login(username, password)
                        }}>
                            <Text style={styles.textButton}>เข้าสู่ระบบ</Text>
                        </Button>
                    </KeyboardAvoidingView>
                    <TouchableOpacity onPress={this.goRegister} style={styles.registerContainer}>
                        <Text style={[styles.regularText]}>
                            {`ไม่มีบัญชีผู้ใช้งาน?`}
                        </Text>
                        <Text style={styles.underlineText}>ลงทะเบียน</Text>
                        <Ionicons name='ios-arrow-round-forward' size={25} color='white' />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.bottomText}>หรือเชื่อมต่อกับบัญชีอื่นของคุณ</Text>
                    <View style={styles.bottomContainer}>
                        <Button onPress={() => {
                            loginByFacebook()
                        }} style={styles.facebookButton}>
                            <View style={styles.facebookContainer}>
                                <FontAwesome name='facebook' size={25} color='white' />
                                <Text style={styles.facebookText}>Facebook</Text>
                            </View>
                        </Button>
                        <Button onPress={() => {
                            loginByGoogle()
                        }} style={styles.googleButton}>
                            <View style={styles.googleContainer}>
                                <FontAwesome name='google' size={25} color='white' />
                                <Text style={styles.googleText}>Google</Text>
                            </View>
                        </Button>
                    </View>
                </View>
                <LoadingModal message={'กำลังดึงข้อมูล...'} visible={loading} />
            </LinearGradient >
        )
    }
}

LoginView.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object,
    error: PropTypes.string,
    completed: PropTypes.bool,
    navigation: PropTypes.object
}

export default LoginView