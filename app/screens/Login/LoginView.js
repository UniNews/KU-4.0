import React from 'react'
import { Text, TextInput, View ,TouchableWithoutFeedback ,Alert } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';

class LoginView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isHide:true
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.user) {
            this.props.navigation.navigate('News');
        }
    }
    renderIcons() {
        if (this.state.isHide) {
            return (
                <TouchableWithoutFeedback onPress={() => this.setState({isHide:!this.state.isHide})}>
                    <FontAwesome name="eye" size={20} color="#B3C1B8"/>
                </TouchableWithoutFeedback>
            )
        } else {
            return (
                <TouchableWithoutFeedback onPress={() => this.setState({isHide:!this.state.isHide})}>
                    <FontAwesome name="eye-slash" size={20} color="#B3C1B8"/>
                </TouchableWithoutFeedback>
            )
        }
    }
    render() {
        return (
            <LinearGradient colors={['#465859','#588E57']} style={styles.linearGradient} >
                <View style={styles.row}>
                    <Text style={styles.logoText}>KU </Text>
                    <Text style={[styles.logoText, styles.secondLogo]}>4.0</Text>
                </View>
                <Text style={styles.underLogoText}>แหล่งข้อมูลสำหรับนิสิต</Text>
                <Text style={styles.headLogin}>เข้าสู่ระบบด้วยบัญชีนนทรี</Text>
                <View style={[styles.searchSection,styles.gapInput]}>
                    <FontAwesome name="user" style={styles.icon} size={20} color="#B3C1B8"/>
                    <TextInput
                        style={styles.widthInput}
                        placeholder="ชื่อผู้ใช้"
                        placeholderTextColor="white"
                        onChangeText={(text) => this.setState({username:text})}
                        value={this.state.text}>
                    </TextInput>
                </View>
                <View style={styles.searchSection}>
                    <FontAwesome name="user" style={styles.icon} size={20} color="#B3C1B8"/>
                    <TextInput
                        style={styles.widthInput}
                        placeholder="รหัสผ่าน"
                        placeholderTextColor="white"
                        secureTextEntry={this.state.isHide}
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.text}>
                    </TextInput>
                    {this.renderIcons()}
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => {
                        this.props.login({"grant_type":"password","username":this.state.username, "password":this.state.password})
                        Alert.alert(JSON.stringify(this.props.user))
                        }}>
                        <View style={styles.myButton}>
                            <Text style={styles.textButton}>เข้าสู่ระบบ</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.underButton}>นโยบายคุ้มครอง</Text>
                </View>
                <View>
                    <Text style={styles.lastText}>
                        from
                    </Text>
                </View>
            </LinearGradient>
        );
    }
}

export default LoginView;