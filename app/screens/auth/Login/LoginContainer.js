import { connect } from 'react-redux'
import LoginView from './LoginView'
import { login, loginByFacebook, loginByGoogle } from '../../../reducers/UserReducer/actions'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'
import { getNotifications } from '../../../reducers/NotificationReducer/actions'

const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading,
        user: state.userReducer.user,
        error: state.userReducer.error,
        completed: state.userReducer.completed,
    }
}

const mapDispatchToProps = {
    login, loginByFacebook, loginByGoogle, showModal, getNotifications
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)