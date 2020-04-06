import React, { Component } from 'react'
import { View, Image, Text, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'

class NotificationItem extends Component {

    constructor(props) {
        super(props)
    }

    onNotificationPressedHandler = () => {
        const { onNotificationPressed, data } = this.props
        if (onNotificationPressed)
            onNotificationPressed(data)
    }

    onProfilePressedHandler = () => {
        const { onProfilePressed, data } = this.props
        if (onProfilePressed)
            onProfilePressed(data.sender._id)
    }

    render() {
        const { data } = this.props
        return (
            <TouchableNativeFeedback onPress={this.onNotificationPressedHandler}>
                <View style={data.isRead ? styles.readBackground : styles.notReadBackground}>
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
                                <Image
                                    source={{ uri: data.sender.avatarURL }}
                                    style={styles.avatar}
                                />
                            </TouchableWithoutFeedback>
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.profileNameText}>
                                    {data.sender.displayName}
                                </Text>
                                <Text numberOfLines={2} style={styles.description}>
                                    {data.title}
                                </Text>
                                <Text style={styles.date}>
                                    {`${convertTimestamptoDate(data.createdAt)}`}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <View style={styles.buttonContainer}>
                                <Feather name={'chevron-right'} size={20} color={'gray'} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

NotificationItem.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        sender: PropTypes.shape({
            avatarURL: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired,
            displayName: PropTypes.string.isRequired
        }).isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        isRead: PropTypes.bool.isRequired,
    }).isRequired,
    onProfilePressed: PropTypes.func,
    onNewsPressed: PropTypes.func
}

export default NotificationItem