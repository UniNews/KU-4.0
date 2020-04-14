import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import NotificationItem from '../../../components/notification/NotificationItem'
import notificationsService from '../../../services/notifications'
import Spinner from '../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class NotificationView extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
        this.state = {
            notifications: [],
            error: false,
            loading: true,
            fetching: false,
            refreshing: false
        }
    }

    onNotificationPressed = (notification) => {
        const { navigation ,readNotification } = this.props
        if (notification.type === 'article') {
            navigation.push('NewsDetail', { newsId: notification.redirectId })
            notification.isRead = true
            this.setState({
                notifications: [...this.state.notifications]
            })
            readNotification(notification._id)
            notificationsService.postNotificationsView(notification._id)
        }
    }

    goProfile = (profileId) => {
        const { navigation } = this.props
        navigation.push('ProfileDetail', {
            userId: profileId
        })
    }

    componentDidMount() {
        this.fetchNotifications()
    }

    async fetchNotifications() {
        try {
            const res = await notificationsService.getNotifications(this.page)
            this.setState({
                notifications: this.page === 1 ? res.data.notifications : [...this.state.notifications, ...res.data.notifications],
                error: false,
                loading: false,
                fetching: false,
                refreshing: false
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
                fetching: false,
                refreshing: false
            })
        }
    }

    renderItem = ({ item }) => {
        return <NotificationItem key={item._id} onNotificationPressed={this.onNotificationPressed} onProfilePressed={this.goProfile} data={item} />
    }

    renderFooter = () => {
        if (!this.state.fetching)
            return null
        return (
            <ActivityIndicator
                color={PRIMARY_COLOR}
            />
        )
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.page = 1
        this.fetchNotifications()
    }

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({ fetching: true })
            this.page += 1
            this.fetchNotifications()
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    render() {
        const { notifications, loading, refreshing } = this.state
        return (
            <View style={styles.containter}>
                <Header title={'การแจ้งเตือน'} />
                {
                    loading
                        ?
                        <Spinner />
                        :
                        <FlatList
                            contentContainerStyle={styles.listContainer}
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                            keyExtractor={(notification) => notification._id}
                            data={notifications}
                            initialNumToRender={10}
                            renderItem={this.renderItem}
                            ListFooterComponent={this.renderFooter}
                            onEndReachedThreshold={0.5}
                            onEndReached={this.onEndReached}
                            onMomentumScrollBegin={() => {
                                this.onEndReachedCalledDuringMomentum = false
                            }}
                        />
                }
            </View>
        )
    }
}

export default NotificationView