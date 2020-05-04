import React, { Component } from 'react'
import { View, Image, Text, TouchableNativeFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Button from '../../commons/Button'
import userService from '../../../services/user'

class ProfileThread extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profile: this.props.data
        }
    }

    onFollowPressedHandler = () => {
        const { profile } = this.state
        if (typeof profile.isFollowing !== 'undefined') {
            profile.isFollowing = !profile.isFollowing
            if (profile.isFollowing)
                userService.followUserById(profile._id)
            else
                userService.unfollowUserById(profile._id)
            this.setState({ profile })
        }
    }

    onProfilePressedHandler = () => {
        const { navigation, user } = this.props
        const { profile } = this.state
        if (user._id === profile._id)
            navigation.navigate('MyProfile')
        else
            navigation.push('ProfileDetail', {
                userId: profile._id,
                setProfileThreadIsFollowing: this.setProfileThreadIsFollowing
            })
    }

    setProfileThreadIsFollowing = (isFollowing) => {
        const { profile } = this.state
        profile.isFollowing = isFollowing
        this.setState({ profile })
    }

    render() {
        const { profile } = this.state
        const { user } = this.props
        return (
            <TouchableNativeFeedback onPress={this.onProfilePressedHandler}>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Image
                            source={{ uri: profile.avatarURL }}
                            style={styles.avatar}
                        />
                        <View style={styles.profileDescriptionContainer}>
                            <Text numberOfLines={1} style={styles.nameText}>
                                {profile.displayName}
                            </Text>
                            {
                                profile.bio
                                    ?
                                    <Text numberOfLines={1} style={styles.bioText}>
                                        {profile.bio}
                                    </Text>
                                    :
                                    null
                            }
                        </View>
                    </View>
                    {
                        user._id !== profile._id ?
                            <View style={styles.rightContainer}>
                                {
                                    profile.isFollowing
                                        ?
                                        <Button style={styles.followingButton} rounded onPress={this.onFollowPressedHandler}>
                                            <Text style={styles.followingText}>
                                                กำลังติดตาม
                                    </Text>
                                        </Button>
                                        :
                                        <Button style={styles.followButton} rounded onPress={this.onFollowPressedHandler}>
                                            <Text style={styles.followText}>
                                                ติดตาม
                                    </Text>
                                        </Button>
                                }
                            </View>
                            :
                            null
                    }
                </View>
            </TouchableNativeFeedback>
        )
    }
}

ProfileThread.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired,
    }).isRequired,
    navigation: PropTypes.object.isRequired,
}

export default ProfileThread