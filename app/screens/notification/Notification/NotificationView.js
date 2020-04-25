import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import NotificationItem from '../../../components/notification/NotificationItem'

class NotificationView extends React.Component {

    constructor(props) {
        super(props)
    }

    onNotificationPressed = (notification) => {
        const { navigation, readNotification } = this.props
        readNotification(notification._id)
        if (notification.type === 'news')
            navigation.push('NewsDetail', { newsId: notification.redirectId })
        else if (notification.type === 'community')
            this.props.navigation.push('CommunityDetail', { newsId: notification.redirectId })
        else if (notification.type === 'follower')
            navigation.push('ProfileDetail', { userId: notification.redirectId })
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

    renderEmpty = () => {
        return <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
                ไม่มีการแจ้งเตือนเลย ลองติดตามใครซักคนสิ
            </Text>
        </View>
    }

    render() {
        const { notifications, loading } = this.props

        return (
            <View style={styles.containter}>
                <Header title={'การแจ้งเตือน'} />
                {
                    notifications && notifications.length < 0 ?
                        <FlatList
                            contentContainerStyle={styles.listContainer}
                            refreshing={loading}
                            onRefresh={this.onRefresh}
                            keyExtractor={(notification) => notification._id}
                            data={notifications}
                            initialNumToRender={10}
                            renderItem={this.renderItem}
                        />
                        :
                        this.renderEmpty()
                }
            </View>
        )
    }
}

export default NotificationView