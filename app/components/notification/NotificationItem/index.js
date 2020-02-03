import React, { Component } from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Hr from '../../commons/Hr'
import { Feather } from '@expo/vector-icons'

class NotificationItem extends Component {

    constructor(props) {
        super(props)
    }

    onNewsPressedHandler = () => {
        const { onNewsPressed, data } = this.props
        if (onNewsPressed)
            onNewsPressed(data.newsId)
    }

    onProfilePressedHandler = () => {
        const { onProfilePressed, data } = this.props
        if (onProfilePressed)
            onProfilePressed(data.profileId)
    }

    render() {
        const { data } = this.props
        return (
            <TouchableWithoutFeedback onPress={this.onNewsPressedHandler}>
                <View>
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
                                <Image
                                    source={{ uri: data.profileImg }}
                                    style={styles.avatar}
                                />
                            </TouchableWithoutFeedback>
                            <View>
                                <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
                                    <Text style={styles.profileNameText}>
                                        {data.profileName}
                                    </Text>
                                </TouchableWithoutFeedback>
                                <Text style={styles.description}>
                                    {data.description}
                                    <Text style={styles.date}>
                                        {' • ' + data.date}
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <View style={styles.buttonContainer}>
                                <Feather name={'chevron-right'} size={20} color={'gray'} />
                            </View>
                        </View>
                    </View>
                    <Hr />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

NotificationItem.propTypes = {
    data: PropTypes.shape({
        profileId: PropTypes.number.isRequired,
        profileName: PropTypes.string.isRequired,
        profileImg: PropTypes.string.isRequired,
        newsId: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    onProfilePressed: PropTypes.func,
    onNewsPressed: PropTypes.func
}

NotificationItem.defaultProps = {
    data: {
        profileId: null,
        profileName: '',
        profileImg: '',
        newsId: null,
        description: '',
    },
}

export default NotificationItem