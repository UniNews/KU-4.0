import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import NotificationItem from '../../../components/notification/NotificationItem'

class NotificationView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notifications: this.props.notifications,
        }
    }

    onNotificationPressed = (notification) => {
        const { navigation, readNotification } = this.props
        if (notification.type === 'article') {
            navigation.push('NewsDetail', { newsId: notification.redirectId })
            readNotification(notification._id)
        }
    }

    goProfile = (profileId) => {
        const { navigation } = this.props
        navigation.push('ProfileDetail', {
            userId: profileId
        })
    }

    renderItem = ({ item }) => {
        return <NotificationItem key={item._id} onNotificationPressed={this.onNotificationPressed} onProfilePressed={this.goProfile} data={item} />
    }

    onRefresh = () => {
        this.props.getNotifications()
    }

    render() {
        const { notifications, loading } = this.props
        return (
            <View style={styles.containter}>
                <Header title={'การแจ้งเตือน'} />
                {
                    <FlatList
                        contentContainerStyle={styles.listContainer}
                        refreshing={loading}
                        onRefresh={this.onRefresh}
                        keyExtractor={(notification) => notification._id}
                        data={notifications}
                        initialNumToRender={10}
                        renderItem={this.renderItem}
                    />
                }
            </View>
        )
    }
}

export default NotificationView