import { connect } from 'react-redux'
import RegisterView from './RegisterView'
import { login, loginByFacebook, loginByGoogle, register } from '../../../reducers/UserReducer/actions'

const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading,
        user: state.userReducer.user,
        error: state.userReducer.error,
        completed: state.userReducer.completed,
    }
}

const mapDispatchToProps = {
    login, loginByFacebook, loginByGoogle, register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)