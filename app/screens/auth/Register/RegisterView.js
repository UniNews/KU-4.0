import React from 'react'
import { Text, TextInput, View, TouchableWithoutFeedback, ActivityIndicator, TouchableOpacity } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { AlertHelper } from '../../../configs/alertHelper'
import Button from '../../../components/commons/Button'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'

class RegisterView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            isHide: true
        }
    }

    register = () => {
        const { password, username, passwordConfirm } = this.state
        const { register } = this.props
        if (!this.isPasswordMatch(password, passwordConfirm))
            AlertHelper.alert('error', 'เกิดข้อผิดพลาด', 'รหัสผ่านไม่ตรงกัน')
        else if (username.length < 5 || username.length > 12)
            AlertHelper.alert('error', 'เกิดข้อผิดพลาด', 'ชื่อผู้ใช้ต้องมีขนาดมากกว่า 5 ตัวอักษร')
        else if (password.length < 5 || password.length > 12)
            AlertHelper.alert('error', 'เกิดข้อผิดพลาด', 'รหัสผ่านต้องมีขนาดมากกว่า 5 ตัวอักษร')
        else register()
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

    isPasswordMatch(password, passwordConfirm) {
        return (password === passwordConfirm)
    }

    render() {
        const { isHide } = this.state
        const { loading, loginByFacebook, loginByGoogle } = this.props
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
                                style={styles.textInput}
                                placeholder='รหัสผ่าน'
                                placeholderTextColor='white'
                                secureTextEntry={isHide}
                                onChangeText={(text) => this.setState({ password: text })}
                            >
                            </TextInput>
                            {this.renderHideIcon()}
                        </View>
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