import { connect } from 'react-redux'
import NotificationView from './NotificationTabBarIconView'

const mapStateToProps = state => {
    return {
        notifications: state.notificationsReducer.unreadNotifications,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationView)