import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Hr from '../../components/commons/Hr'
import Switch from '../../components/commons/Switch'

class ProfileView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            switchValue: false,
            language: 'th'
        }
    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    changeLanguage = (language) => {
        this.setState({ language })
    }

    render() {
        console.log(this.props.user,"ss")
        const { language } = this.state
        return (
            <View style={styles.containter}>
                <View style={styles.headContainer}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.8 }} colors={['#465859', '#588E57']}>
                        <View style={styles.innerHeadContainer}>
                            <Image
                                source={{ uri: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_oc=AQmNpBihC6kLplVjqVJTIrCFMMm59mZi4qLk9VaYlJEaVjaWaGnRNVpvjGEXBl3tINA&_nc_ht=scontent.fbkk2-5.fna&oh=326e11cf10014a155dd953be098951f0&oe=5E90FC5F' }}
                                style={styles.avatar}
                            />
                            <Text style={styles.name}>
                                Jame Sathira
                            </Text>
                            <Text style={styles.faculty}>
                                ซอฟแวร์ และความรู้
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ProfileSetting')}>
                    <View style={styles.settingContainer}>
                        <Text style={styles.settingText}>รูป และชื่อผู้ใช้</Text>
                        <Feather name={'chevron-right'} size={20} color={'gray'} />
                    </View>
                </TouchableWithoutFeedback>
                <Hr />
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('FollowingSetting')}>
                    <View style={styles.settingContainer}>
                        <Text style={styles.settingText}>กำลังติดตาม</Text>
                        <Feather name={'chevron-right'} size={20} color={'gray'} />
                    </View>
                </TouchableWithoutFeedback>
                <Hr />
                <View style={styles.settingContainer}>

                    <Text style={styles.settingText}>การแจ้งเตือน</Text>
                    <Switch
                        toggleSwitch={this.toggleSwitch}
                        switchValue={this.state.switchValue} />
                </View>
                <Hr />
                <View style={styles.settingContainer}>
                    <Text style={styles.settingText}>ภาษา</Text>
                    <View style={styles.flagContainer}>
                        <TouchableWithoutFeedback onPress={() => this.changeLanguage('th')}>
                            <Image style={language == 'th' ? styles.flagImage : [styles.flagImage, styles.isFocused]} source={require('../../assets/imgs/thai.jpg')} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.changeLanguage('eng')}>
                            <Image style={language == 'eng' ? styles.flagImage : [styles.flagImage, styles.isFocused]} source={require('../../assets/imgs/eng.jpg')} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <Hr />
                <View style={styles.settingContainer}>
                    <Text style={styles.settingText}>ออกจากระบบ</Text>
                </View>
            </View>
        )
    }
}

export default ProfileView