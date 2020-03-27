import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Hr from '../../../components/commons/Hr'
import Switch from '../../../components/commons/Switch'
import StatusBar from '../../../components/commons/StatusBar'

class MyProfileView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            switchValue: false,
            language: 'th'
        }
    }

    goFollowing = () => {
        const { navigation } = this.props
        // TODO: call /users/me/follower
        // navigation.push('Following', {
        //     title: 'ผู้ติดตาม',
        //     following: user.follower
        // })
    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    changeLanguage = (language) => {
        this.setState({ language })
    }

    render() {
        const { language } = this.state
        return (
            <View style={styles.containter}>
                <StatusBar />
                <View style={styles.headContainer}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.8 }} colors={['#465859', '#588E57']}>
                        <View style={styles.innerHeadContainer}>
                            <Image
                                source={{ uri: this.props.user.avatarURL }}
                                style={styles.avatar}
                            />
                            <Text style={styles.name}>
                                {this.props.user.displayName}
                            </Text>
                            <Text style={styles.faculty}>
                                {this.props.user.description}
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
                <TouchableWithoutFeedback onPress={this.goFollowing}>
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
                            <Image style={language == 'th' ? styles.flagImage : [styles.flagImage, styles.isFocused]} source={require('../../../assets/imgs/thai.jpg')} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.changeLanguage('eng')}>
                            <Image style={language == 'eng' ? styles.flagImage : [styles.flagImage, styles.isFocused]} source={require('../../../assets/imgs/eng.jpg')} />
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

export default MyProfileView