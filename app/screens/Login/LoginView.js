import React from 'react'
import { Text, TextInput, View, TouchableWithoutFeedback, ActivityIndicator,TouchableOpacity } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types';
import { AlertHelper } from '../../configs/alertHelper';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Button from '../../components/commons/Button'

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
        const { user, error } = this.props
        if (user) {
            this.props.navigation.navigate('Main')
            AlertHelper.alert('info', 'ล็อกอินสำเร็จ', 'สวัสดีคุณ ' + user.name)
        }
        else if (error && prevProps.error != error)
            AlertHelper.alert('error', 'เกิดข้อผิดพลาด', 'บัญชีผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง')
    }

    renderHideIcon() {
        const { isHide } = this.state
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({ isHide: !isHide })}>
                <FontAwesome style={styles.icon} name={isHide ? 'eye' : 'eye-slash'} size={20} color='white' />
            </TouchableWithoutFeedback>
        )
    }

    renderButton() {
        const { loading } = this.props
        return loading ? <ActivityIndicator size='small' color='#69C4BF' />
            : <Text style={styles.textButton}>เข้าสู่ระบบ</Text>
    }

    render() {
        const { isHide, username, password } = this.state
        const { login, loading, loginByFacebook, loginByGoogle } = this.props
        return (
            <LinearGradient colors={['#465859', '#588E57']} style={styles.container} >
                <View style={styles.logoContainer}>
                    <View style={styles.logoTextContainer}>
                        <Text style={styles.logoText}>KU </Text>
                        <Text style={[styles.logoText, styles.secondLogoText]}>4.0</Text>
                    </View>
                    <Text style={styles.caption}>แหล่งข้อมูลสำหรับนิสิต</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headLogin}>เข้าสู่ระบบด้วยบัญชีนนทรี</Text>
                    <View style={styles.textInputContainer}>
                        <FontAwesome name='user' style={styles.icon} size={20} color='white' />
                        <TextInput
                            style={styles.textInput}
                            placeholder='ชื่อผู้ใช้'
                            placeholderTextColor='white'
                            onChangeText={(text) => this.setState({ username: text })}
                            value={this.state.text}>
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
                            value={this.state.text}>
                        </TextInput>
                        {this.renderHideIcon()}
                    </View>
                    <Button rounded customStyle={styles.buttonContainer} disabled={loading} onPress={() => {
                        login(username, password)
                    }}>
                        {this.renderButton()}
                    </Button>
                </View>
                <KeyboardSpacer topSpacing={-120} />
                <Text style={styles.policyText}>นโยบายคุ้มครอง</Text>
                <TouchableOpacity onPress={() => {
                    loginByFacebook()
                }}>
                    <View>
                        <FontAwesome name='facebook' size={30} color='white'></FontAwesome>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    loginByGoogle()
                }}>
                    <View>
                        <FontAwesome name='google' size={30} color='white'></FontAwesome>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

LoginView.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object,
    error: PropTypes.bool,
    completed: PropTypes.bool,
};

export default LoginView;