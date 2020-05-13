import React, { Component } from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import PlatformTouchable from '../../commons/PlatformTouchable'

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
            onProfilePressed(data.sender?._id)
    }

    render() {
        const { data } = this.props
        return (
            data ?
                <PlatformTouchable onPress={this.onNotificationPressedHandler}>
                    <View style={data.isRead ? styles.readBackground : styles.notReadBackground}>
                        <View style={styles.container}>
                            <View style={styles.leftContainer}>
                                <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
                                    <Image
                                        source={{ uri: data.sender?.avatarURL }}
                                        style={styles.avatar}
                                    />
                                </TouchableWithoutFeedback>
                                <View style={styles.descriptionContainer}>
                                    <Text style={styles.profileNameText}>
                                        {data.sender?.displayName}
                                    </Text>
                                    <Text numberOfLines={2} style={styles.description}>
                                        {data.type === 'follower' ? data.title : data.body}
                                    </Text>
                                    <View style={styles.dateIconContainer}>
                                        <FontAwesome name='clock-o' size={13} color='grey' />
                                        <Text style={styles.date}>
                                            {`${convertTimestamptoDate(data.createdAt)}`}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rightContainer}>
                                <View style={styles.buttonContainer}>
                                    <Feather name={'chevron-right'} size={20} color={'gray'} />
                                </View>
                            </View>
                        </View>
                    </View>
                </PlatformTouchable>
                :
                null
        )
    }
}

export default NotificationItem