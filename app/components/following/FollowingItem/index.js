import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Button from '../../commons/Button'
import Hr from '../../commons/Hr'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

class FollowingItem extends Component {

    constructor(props) {
        super(props)
    }

    onButtonPressedHandler = () => {
        const { onFollowPressed, profile } = this.props
        if (onFollowPressed)
            onFollowPressed(profile._id)
    }

    onProfilePressedHandler = () => {
        const { onProfilePressed, profile } = this.props
        if (onProfilePressed)
            onProfilePressed(profile._id)
    }

    render() {
        const { profile } = this.props
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
                            <Image
                                source={{ uri: profile.avatarURl }}
                                style={styles.avatar}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
                            <Text style={styles.nameText}>
                                {profile.displayName}
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.rightContainer}>
                        <Button customStyle={styles.buttonContainer} rounded onPress={this.onButtonPressedHandler}>
                            <Text style={styles.followingText}>
                                กำลังติดตาม
                            </Text>
                        </Button>
                    </View>
                </View>
                <Hr />
            </View>
        )
    }
}

FollowingItem.propTypes = {
    profile: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        followed: PropTypes.bool.isRequired,
    }).isRequired,
    onProfilePressed: PropTypes.func,
    onFollowPressed: PropTypes.func
}

FollowingItem.defaultProps = {
    profile: {
        id: null,
        name: '',
        followed: false
    },
}

export default FollowingItem