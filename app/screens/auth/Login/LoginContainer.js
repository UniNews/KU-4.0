import { connect } from 'react-redux';
import LoginView from './LoginView';
import { login, loginByFacebook, loginByGoogle } from '../../../reducers/UserReducer/actions';
import { showModal } from '../../../reducers/ErrorModalReducer/actions';

const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading,
        user: state.userReducer.user,
        error: state.userReducer.error,
        completed: state.userReducer.completed,
    }
};

const mapDispatchToProps = {
    login, loginByFacebook, loginByGoogle, showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);