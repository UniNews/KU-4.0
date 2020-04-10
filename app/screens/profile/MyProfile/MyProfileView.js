import React from 'react'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import PropTypes from 'prop-types'

class MyProfileView extends React.Component {

    constructor(props) {
        super(props)
    }

    goFollowing = async () => {
        const { user } = this.props
        const { navigation } = this.props
        navigation.push('Following', {
            userId: user._id
        })
    }

    goFollower = () => {
        const { user } = this.props
        const { navigation } = this.props
        navigation.push('Follower', {
            userId: user._id
        })
    }

    goLogin = () => {
        const { navigation } = this.props
        navigation.navigate('Auth')
    }

    logout = () => {
        const { logoutUser } = this.props
        this.goLogin()
        logoutUser()
    }

    render() {
        const { user, navigation } = this.props
        return (
            <View style={styles.containter}>
                <View style={styles.headContainer}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.8 }} colors={['#465859', '#588E57']}>
                        <View style={styles.innerHeadContainer}>
                            <Image
                                source={{ uri: user.avatarURL }}
                                style={styles.avatar}
                            />
                            <Text style={styles.name}>
                                {user.displayName}
                            </Text>
                            <Text style={styles.faculty}>
                                {user.bio}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <TouchableNativeFeedback onPress={() => navigation.navigate('ProfileSetting')}>
                    <View style={styles.settingContainer}>
                        <Text style={styles.settingText}>รูป และชื่อผู้ใช้</Text>
                        <Feather name={'chevron-right'} size={20} color={'gray'} />
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.goFollowing}>
                    <View style={styles.settingContainer}>
                        <Text style={styles.settingText}>กำลังติดตาม</Text>
                        <Feather name={'chevron-right'} size={20} color={'gray'} />
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.goFollower}>
                    <View style={styles.settingContainer}>
                        <Text style={styles.settingText}>ผู้ติดตาม</Text>
                        <Feather name={'chevron-right'} size={20} color={'gray'} />
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.logout}>
                    <View style={styles.settingContainer}>
                        <Text style={styles.settingText}>ออกจากระบบ</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

MyProfileView.propTypes = {
    user: PropTypes.shape({
        _id: PropTypes.string,
        avatarURL: PropTypes.string,
        displayName: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.object.isRequired,
}

export default MyProfileView