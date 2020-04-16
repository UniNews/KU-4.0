import { connect } from 'react-redux'
import NotificationView from './NotificationView'
import { readNotification } from '../../../reducers/NotificationReducer/actions'
const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {
    readNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationView)