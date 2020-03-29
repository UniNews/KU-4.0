import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Hr from '../../../components/commons/Hr'
import StatusBar from '../../../components/commons/StatusBar'

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

    render() {
        const { user, navigation } = this.props
        return (
            <View style={styles.containter}>
                <StatusBar />
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
                                {user.description}
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ProfileSetting')}>
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
                <TouchableWithoutFeedback onPress={this.goFollower}>
                    <View style={styles.settingContainer}>
                        <Text style={styles.settingText}>ผู้ติดตาม</Text>
                        <Feather name={'chevron-right'} size={20} color={'gray'} />
                    </View>
                </TouchableWithoutFeedback>
                <Hr />
                <View style={styles.settingContainer}>
                    <Text style={styles.settingText}>ออกจากระบบ</Text>
                </View>
            </View>
        )
    }
}

export default MyProfileView