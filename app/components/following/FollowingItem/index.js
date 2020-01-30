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
            onFollowPressed(profile.id)
    }

    onProfilePressedHandler = () => {
        const { onProfilePressed, profile } = this.props
        if (onProfilePressed)
            onProfilePressed(profile.id)
    }

    render() {
        const { profile } = this.props
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
                            <Image
                                source={{ uri: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_oc=AQmNpBihC6kLplVjqVJTIrCFMMm59mZi4qLk9VaYlJEaVjaWaGnRNVpvjGEXBl3tINA&_nc_ht=scontent.fbkk2-5.fna&oh=326e11cf10014a155dd953be098951f0&oe=5E90FC5F' }}
                                style={styles.avatar}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
                            <Text style={styles.nameText}>
                                {profile.name}
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.rightContainer}>
                        <Button customStyle={styles.buttonContainer} rounded onPress={this.onButtonPressedHandler}>
                            <Text style={styles.followingText}>
                                {profile.followed ? 'กำลังติดตาม' : 'ติดตาม'}
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