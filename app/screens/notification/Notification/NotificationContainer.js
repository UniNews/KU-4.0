import { connect } from 'react-redux'
import NotificationView from './NotificationView'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'
import { readNotification, getNotifications } from '../../../reducers/NotificationReducer/actions'

const mapStateToProps = state => {
  return {
    notifications: state.notificationsReducer.notifications
  }
}

const mapDispatchToProps = {
  showModal,
  readNotification,
  getNotifications
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationView)
