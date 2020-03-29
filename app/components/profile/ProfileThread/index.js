import React, { Component } from 'react'
import { View, Image, Text, TouchableNativeFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Button from '../../commons/Button'

class ProfileThread extends Component {

    constructor(props) {
        super(props)
    }

    onButtonPressedHandler = () => {
        const { onFollowPressed, data } = this.props
        if (onFollowPressed)
            onFollowPressed(data._id)
    }

    onProfilePressedHandler = () => {
        const { onProfilePressed, data } = this.props
        if (onProfilePressed)
            onProfilePressed(data._id)
    }

    render() {
        const { data, following } = this.props
        return (
            <TouchableNativeFeedback onPress={this.onProfilePressedHandler}>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Image
                            source={{ uri: data.avatarURL }}
                            style={styles.avatar}
                        />
                        <Text numberOfLines={1} style={styles.nameText}>
                            {data.displayName}
                        </Text>
                    </View>
                    <View style={styles.rightContainer}>
                        {
                            following
                                ?
                                <Button style={styles.followingButton} rounded onPress={this.onButtonPressedHandler}>
                                    <Text style={styles.followingText}>
                                        กำลังติดตาม
                                    </Text>
                                </Button>
                                :
                                <Button style={styles.followButton} rounded onPress={this.onButtonPressedHandler}>
                                    <Text style={styles.followText}>
                                        ติดตาม
                                    </Text>
                                </Button>

                        }

                    </View>
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
    following: PropTypes.bool,
    onProfilePressed: PropTypes.func,
    onFollowPressed: PropTypes.func
}

ProfileThread.defaultProps = {
    data: {
        _id: null,
        displayName: '',
        avatarURL: '',
    },
}

export default ProfileThread