import React from 'react'
import { Text, View, Image, TouchableNativeFeedback, ScrollView, TouchableOpacity } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import LoadingModal from '../../../components/modals/LoadingModal'

class MyProfileView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
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

    goMyPosts = () => {
        const { navigation } = this.props
        navigation.push('MyPosts')
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
        const { logoutUser, showModal } = this.props
        try {
            this.setState({
                loading: true
            })
            await logoutUser()
        }
        catch (err) {
            showModal()
        }
        finally {
            this.setState({
                loading: false
            })
        }
    }

    goSettings = () => {

    }

    render() {
        const { user } = this.props
        const { loading } = this.state
        return (
            <View style={styles.containter}>
                <View style={styles.headContainer}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.8 }} colors={['#465859', '#588E57']}>
                        <TouchableOpacity onPress={this.goSettings} style={styles.logoutButton}>
                            <MaterialCommunityIcons
                                color='white'
                                size={28}
                                name={'settings'}
                            />
                        </TouchableOpacity>
                        <View style={styles.innerHeadContainer}>
                            <Image
                                source={{ uri: user?.avatarURL }}
                                style={styles.avatar}
                            />
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>
                                    {user?.displayName}
                                </Text>
                            </View>
                            <View style={styles.bioContainer}>
                                <Text style={styles.bio}>
                                    {user?.bio}
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
                <ScrollView>
                    <TouchableNativeFeedback onPress={this.goProfileSetting}>
                        <View style={styles.settingContainer}>
                            <Text style={styles.settingText}>รูป และชื่อผู้ใช้</Text>
                            <Feather name={'chevron-right'} size={20} color={'gray'} />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.goMyPosts}>
                        <View style={styles.settingContainer}>
                            <Text style={styles.settingText}>โพสต์ของฉัน</Text>
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
                </ScrollView>
                <LoadingModal message={'ออกจากระบบ...'} visible={loading} />
            </View>
        )
    }
}

export default MyProfileView