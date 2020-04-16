import { connect } from 'react-redux'
import NotificationView from './NotificationTabBarIconView'

const mapStateToProps = state => {
    return {
        notifications: state.notificationsReducer.notification,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationView)