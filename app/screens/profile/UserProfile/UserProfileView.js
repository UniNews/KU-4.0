import React from 'react'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Hr from '../../../components/commons/Hr'
import Button from '../../../components/commons/Button'
import StatusBar from '../../../components/commons/StatusBar'
import userService from '../../../services/user'
import Vr from '../../../components/commons/Vr'
import { KU_SECONDARY_COLOR, KU_PRIMARY_COLOR } from '../../../assets/css/color'
import Spinner from '../../../components/commons/Spinner'

class UserProfileView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            postNews: null,
            loading: true
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    async componentDidMount() {
        const userId = this.props.navigation.state.params.userId
        const result = await userService.getUserById(userId)
        this.setState(
            {
                user: result.data.data,
                postNews: result.data.news,
                loading: false
            }
        )
    }

    isFollowing = () => {
        const { myUser } = this.props
        const userId = this.props.navigation.state.params.userId
        return myUser.following.indexOf(userId) > -1
    }

    follow = (id) => {
        const { followUserById } = this.props
        followUserById(id)
    }

    goPostedNews = () => {
        const { user } = this.state
        const { navigation } = this.props
        navigation.push('AnyNews', {
            userId: user._id
        })
    }

    goPostedCommunities = () => {
        const { user } = this.state
        const { navigation } = this.props
        navigation.push('AnyCommunity', {
            userId: user._id
        })
    }

    goFollower = () => {
        const { user } = this.state
        const { navigation } = this.props
        navigation.push('Follower', {
            userId: user._id
        })
    }

    render() {
        const { user, loading, postNews } = this.state
        const isFollowing = this.isFollowing()
        return (
            <View style={styles.containter}>
                <StatusBar />
                {
                    !loading ?
                        <View>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={[KU_PRIMARY_COLOR, KU_SECONDARY_COLOR]} style={styles.profileInfoContainer}>
                                <View style={styles.backButton}>
                                    <Feather
                                        color='white'
                                        onPress={this.goBack}
                                        size={28}
                                        name={'chevron-left'}
                                    />
                                </View>
                                <Image
                                    source={user ? { uri: user.avatarURL } : require('../../../assets/imgs/avatar-default.png')}
                                    style={styles.avatar}
                                />
                                <Text numberOfLines={2} style={styles.nameText}>
                                    {user.displayName}
                                </Text>
                                <View style={styles.buttonContainer}>
                                    <Button style={isFollowing ? styles.followingButton : styles.notFollowingButton} rounded onPress={() => this.follow(user._id)}>
                                        <Text style={isFollowing ? styles.followingButtonText : styles.notFollowingButtonText}>{isFollowing ? 'ติดตามอยู่' : 'ติดตาม'}</Text>
                                    </Button>
                                </View>
                                <View style={styles.infoContainer}>
                                    <TouchableNativeFeedback onPress={user.accessType ? this.goPostedNews : this.goPostedCommunities}>
                                        <View style={styles.indicatorContainer}>
                                            <Text style={styles.numberText}>
                                                {postNews ? postNews.length : 0}
                                            </Text>
                                            <Text style={styles.indicatorText}>
                                                โพสต์
                                            </Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <Vr style={styles.verticalLine} />
                                    <TouchableNativeFeedback onPress={this.goFollower}>
                                        <View style={styles.indicatorContainer}>
                                            <Text style={styles.numberText}>
                                                {user.follwer ? user.follower.length : 0}
                                            </Text>
                                            <Text style={styles.indicatorText}>
                                                ผู้ติดตาม
                                            </Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </LinearGradient>
                            <View style={styles.profileContainer}>
                                <View style={styles.profileSectionContainer}>
                                    <Text style={styles.profileTitleText}>ชื่อ</Text>
                                    <Text style={styles.profileValueText}>{user.displayName}</Text>
                                </View>
                                <Hr />
                                <View style={styles.profileSectionContainer}>
                                    <Text style={styles.profileTitleText}>คำอธิบาย</Text>
                                    <Text style={styles.profileValueText}>{user.description}</Text>
                                </View>
                                <Hr />
                                <View style={styles.profileSectionContainer}>
                                    <Text style={styles.profileTitleText}>หมวดหมู่</Text>
                                    <Text style={styles.profileValueText}>{user.category}</Text>
                                </View>
                                <Hr />
                            </View>
                        </View>
                        :
                        <Spinner />
                }
            </View>
        )
    }
}

export default UserProfileView