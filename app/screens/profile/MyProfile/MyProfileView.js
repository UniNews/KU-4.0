import React from 'react'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

class MyProfileView extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        const { user } = this.props
        if (!user)
            this.goLogin()
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

    goProfileSetting = () => {
        const { navigation } = this.props
        navigation.navigate('ProfileSetting')
    }

    logout = async () => {
        const { logoutUser } = this.props
        logoutUser()
    }

    render() {
        const { user } = this.props
        return (
            <View style={styles.containter}>
                <View style={styles.headContainer}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.8 }} colors={['#465859', '#588E57']}>
                        <View style={styles.innerHeadContainer}>
                            <Image
                                source={{ uri: user?.avatarURL }}
                                style={styles.avatar}
                            />
                            <Text style={styles.name}>
                                {user?.displayName}
                            </Text>
                            <Text style={styles.faculty}>
                                {user?.bio}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <TouchableNativeFeedback onPress={this.goProfileSetting}>
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

export default MyProfileView