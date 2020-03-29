import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import Header from '../../../components/commons/Header'
import ProfileThread from '../../../components/profile/ProfileThread'
import StatusBar from '../../../components/commons/StatusBar'
import userService from '../../../services/user'
import Spinner from '../../../components/commons/Spinner'

class FollowingView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            following: [],
            loading: true,
            error: false
        }
    }

    follow = (id) => {
        const { followUserById } = this.props
        followUserById(id)
    }

    isFollowing = (profile) => {
        const { user } = this.props
        return user.following.indexOf(profile._id) > -1
    }

    goProfile = (id) => {
        const { navigation } = this.props
        navigation.push('ProfileDetail', {
            userId: id
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    async componentDidMount() {
        const { userId } = this.props.navigation.state.params
        try {
            const response = await userService.getUserById(userId)
            this.setState({
                loading: false,
                error: false,
                following: response.data.data.following
            })
        }
        catch (err) {
            this.setState({
                loading: false,
                error: true
            })
        }
    }

    render() {
        const { following, loading } = this.state
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header title={'กำลังติดตาม'} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                {
                    !loading
                        ?
                        <View style={styles.followingContainer}>
                            {
                                following.map((profile) => {
                                    return (
                                        <ProfileThread following={this.isFollowing(profile)} key={profile._id} onFollowPressed={this.follow} onProfilePressed={this.goProfile} data={profile} />
                                    )
                                })
                            }
                        </View>
                        :
                        <Spinner />
                }
            </View>
        )
    }
}

export default FollowingView