import React from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import Button from '../../../components/commons/Button'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'
import userservice from '../../../services/user'
import LoadingModal from '../../../components/modals/LoadingModal'
import { AlertHelper } from '../../../configs/alertHelper'
import KeyboardShift from '../../../components/commons/KeyboardShift'

class RegisterView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            loading: false,
            usernameError: false,
            passwordError: false,
            passwordConfirmError: false,
            hideFooter: false
        }
    }

    register = async () => {
        const { password, username, passwordConfirm } = this.state
        const { login } = this.props
        this.setState({
            loading: true,
            usernameError: false,
            passwordError: false,
            passwordConfirmError: false,
        })
        let message = []
        let valid = true
        if (username.length < 5) {
            this.setState({ usernameError: true })
            message.push('ชื่อผู้ใช้ต้องมีขนาดมากกว่า 5 ตัวอักษร')
            valid = false
        }
        else if (!username.match(/^[0-9a-zA-Z]+$/)) {
            this.setState({ usernameError: true })
            message.push('ชื่อผู้ใช้ต้องเป็นตัวอักษร หรือตัวเลขเท่านั้น')
            valid = false
        }
        if (password.length < 5) {
            this.setState({ passwordError: true })
            message.push('รหัสผ่านต้องมีขนาดมากกว่า 5 ตัวอักษร')
            valid = false
        }
        else if (!password.match(/^[0-9a-zA-Z]+$/)) {
            this.setState({ passwordError: true })
            message.push('รหัสผ่านต้องเป็นตัวอักษร หรือตัวเลขเท่านั้น')
            valid = false
        }
        else if (!this.isPasswordMatch(password, passwordConfirm)) {
            this.setState({ passwordConfirmError: true })
            message.push('รหัสผ่านไม่ตรงกัน')
            valid = false
        }
        if (!valid)
            AlertHelper.alert('error', 'เกิดข้อผิดพลาด (422)', message.join('\n'))
        else {
            try {
                const res = await userservice.register(username, password)
                login(username, password)
                this.setError('reset', null)
            }
            catch (err) {
                const statusCode = err.response.status
                if (statusCode === 409) {
                    this.setState({ usernameError: true })
                    AlertHelper.alert('error', 'เกิดข้อผิดพลาด', 'บัญชีผู้ใช้ถูกใช้ไปแล้ว')
                }
                else
                    this.props.showModal()
            }
        }
        this.setState({
            loading: false
        })
    }

    // keyboardDidHide = () => {
    //     this.setState({
    //         hideFooter: false
    //     })
    // }

    // keyboardDidShow = () => {
    //     this.setState({
    //         hideFooter: true
    //     })
    // }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    isPasswordMatch(password, passwordConfirm) {
        return (password === passwordConfirm)
    }

    render() {
        const { loading, usernameError, passwordError, passwordConfirmError, hideFooter } = this.state
        const { loginByFacebook, loginByGoogle } = this.props
        return (
            <KeyboardShift>
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
                            <View style={usernameError ? styles.textInputErrorContainer : styles.textInputContainer}>
                                <FontAwesome name='user' style={styles.icon} size={20} color='white' />
                                <TextInput
                                    maxLength={12}
                                    style={styles.textInput}
                                    placeholder='ชื่อผู้ใช้งาน'
                                    placeholderTextColor='white'
                                    onChangeText={(text) => this.setState({ username: text })}
                                />
                            </View>
                            <View style={passwordError ? styles.textInputErrorContainer : styles.textInputContainer}>
                                <FontAwesome name='lock' style={styles.icon} size={20} color='white' />
                                <TextInput
                                    maxLength={12}
                                    style={styles.textInput}
                                    placeholder='รหัสผ่าน'
                                    placeholderTextColor='white'
                                    secureTextEntry
                                    onChangeText={(text) => this.setState({ password: text })}
                                />
                            </View>
                            <View style={passwordConfirmError ? styles.textInputErrorContainer : styles.textInputContainer}>
                                <FontAwesome name='lock' style={styles.icon} size={20} color='white' />
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.textInput}
                                    placeholder='ยืนยันรหัสผ่าน'
                                    placeholderTextColor='white'
                                    secureTextEntry
                                    onChangeText={(text) => this.setState({ passwordConfirm: text })}
                                />
                            </View>
                            <Button rounded style={styles.buttonContainer} disabled={loading} onPress={this.register}>
                                <Text style={styles.textButton}>ลงทะเบียน</Text>
                            </Button>
                        </View>
                    </View>
                    {
                        !hideFooter ?
                            <View>
                                <TouchableOpacity onPress={this.goBack} style={styles.registerContainer}>
                                    <Ionicons name='ios-arrow-round-back' size={25} color='white' />
                                    <Text style={[styles.regularText, styles.goBackText]}>
                                        {`มีบัญชีผู้ใช้อยู่แล้ว?`}
                                    </Text>
                                    <Text style={styles.underlineText}>เข้าสู่ระบบ</Text>
                                </TouchableOpacity>
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
                            :
                            null
                    }
                    <LoadingModal message={'กำลังสมัคร...'} visible={loading} />
                </LinearGradient >
            </KeyboardShift>
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