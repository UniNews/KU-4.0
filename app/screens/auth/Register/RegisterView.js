import React from 'react'
import { Text, TextInput, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import Button from '../../../components/commons/Button'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'
import userservice from '../../../services/user'
import LoadingModal from '../../../components/modals/LoadingModal'

class RegisterView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            isHide: true,
            loading: false,
            usernameError: false,
            usernameErrorMessage: null,
            passwordError: false,
            passwordErrorMessage: null,
        }
    }

    register = async () => {
        const { password, username, passwordConfirm } = this.state
        const { login } = this.props
        this.setError('reset', null)
        if (!this.isPasswordMatch(password, passwordConfirm)) {
            this.setError('password', 'รหัสผ่านไม่ตรงกัน')
        }
        else if (username.length < 5) {
            this.setError('username', 'ชื่อผู้ใช้ต้องมีขนาดมากกว่า 5 ตัวอักษร')
        }
        else if (password.length < 5) {
            this.setError('password', 'รหัสผ่านต้องมีขนาดมากกว่า 5 ตัวอักษร')
        }
        else {
            try {
                this.setState({
                    loading: true
                })
                const res = await userservice.register(username, password)
                login(username, password)
                this.setError('reset', null)
            }
            catch (err) {
                const statusCode = err.response.status
                let message = null
                if (statusCode === 409)
                    message = 'บัญชีผู้ใช้ถูกใช้ไปแล้ว'
                else
                    message = 'การสมัครบัญชีผู้ใช้ผิดพลาด'
                this.setError('username', message)
            }
            finally {
                this.setState({
                    loading: false
                })
            }
        }

    }

    setError = (type, message) => {
        if (type === 'username') {
            this.setState({
                usernameError: true,
                usernameErrorMessage: message
            })
        } else if (type === 'password') {
            this.setState({
                passwordError: true,
                passwordErrorMessage: message
            })
        } else if (type === 'reset') {
            this.setState({
                usernameError: false,
                usernameErrorMessage: null,
                passwordError: false,
                passwordErrorMessage: null
            })
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    renderHideIcon() {
        const { isHide } = this.state
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({ isHide: !isHide })}>
                <FontAwesome style={styles.icon} name={isHide ? 'eye' : 'eye-slash'} size={20} color='white' />
            </TouchableWithoutFeedback>
        )
    }

    renderUserValidationMessage() {
        const { usernameError, usernameErrorMessage } = this.state
        if (usernameError)
            return (
                <View>
                    <Text style={styles.errorText}>{usernameErrorMessage}</Text>
                </View>
            )
        else return null
    }

    renderPasswordValidationMessage() {
        const { passwordError, passwordErrorMessage } = this.state
        if (passwordError)
            return (
                <View>
                    <Text style={styles.errorText}>{passwordErrorMessage}</Text>
                </View>
            )
        else return null
    }

    isPasswordMatch(password, passwordConfirm) {
        return (password === passwordConfirm)
    }

    render() {
        const { isHide, loading } = this.state
        const { loginByFacebook, loginByGoogle } = this.props
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
                    <View style={styles.inputContainer}>
                        <Text style={styles.headLogin}>ลงทะเบียน</Text>
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
                        {this.renderUserValidationMessage()}
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
                        {this.renderPasswordValidationMessage()}
                        <View style={styles.textInputContainer}>
                            <FontAwesome name='lock' style={styles.icon} size={20} color='white' />
                            <TextInput
                                secureTextEntry={true}
                                style={styles.textInput}
                                placeholder='ยืนยันรหัสผ่าน'
                                placeholderTextColor='white'
                                secureTextEntry={isHide}
                                onChangeText={(text) => this.setState({ passwordConfirm: text })}
                                value={this.state.text}>
                            </TextInput>
                        </View>
                        {this.renderPasswordValidationMessage()}
                        <Button rounded style={styles.buttonContainer} disabled={loading} onPress={this.register}>
                            <Text style={styles.textButton}>ลงทะเบียน</Text>
                        </Button>
                    </View>
                    <TouchableOpacity onPress={this.goBack} style={styles.registerContainer}>
                        <Ionicons name='ios-arrow-round-back' size={25} color='white' />
                        <Text style={[styles.regularText, styles.goBackText]}>
                            {`มีบัญชีผู้ใช้อยู่แล้ว?`}
                        </Text>
                        <Text style={styles.underlineText}>เข้าสู่ระบบ</Text>
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
                <LoadingModal message={'กำลังสมัคร...'} visible={loading} />
            </LinearGradient >
        )
    }
}

RegisterView.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object,
    error: PropTypes.string,
    completed: PropTypes.bool,
    navigation: PropTypes.object
}

export default RegisterView