import React from 'react'
import { Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'
import DropdownAlert from 'react-native-dropdownalert'
import PropTypes from 'prop-types';

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
        if (this.props.user) {
            this.props.navigation.navigate('Main')
        }
    }
    renderHideIcon() {
        const { isHide } = this.state
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({ isHide: !isHide })}>
                <FontAwesome style={styles.icon} name={isHide ? 'eye' : 'eye-slash'} size={20} color='white' />
            </TouchableWithoutFeedback>
        )
    }
    renderLoading() {
        const { loading } = this.props
        if (loading) {
            return (
                <View style={styles.button}>
                    <Text style={styles.textButton}>เข้าสู่ระบบ</Text>
                    <ActivityIndicator size="small" color="#69C4BF" />
                </View>
            )
        } else {
            return (
                <View style={styles.button}>
                    <Text style={styles.textButton}>เข้าสู่ระบบ</Text>
                </View>
            )
        }
    }
    render() {
        const { isHide, username, password } = this.state
        const { login } = this.props
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
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={ () => {
                            login(username, password).then(()=>{
                                if(this.props.error === true) {
                                    this.dropDownAlertRef.alertWithType('error', 'Error', 'Wrong username or password')
                                }
                            })
                        }}>
                            { this.renderLoading() }
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.policyText}>นโยบายคุ้มครอง</Text>
                <DropdownAlert errorColor="yellow" ref={ref => this.dropDownAlertRef = ref} />
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