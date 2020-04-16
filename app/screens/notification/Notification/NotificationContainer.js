import { connect } from 'react-redux'
import NotificationView from './NotificationView'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'
import { readNotification } from '../../../reducers/NotificationReducer/actions'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
  showModal,
  readNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationView)
