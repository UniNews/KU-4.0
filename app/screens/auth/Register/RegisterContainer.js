import { connect } from 'react-redux';
import RegisterView from './RegisterView';
import { login, loginByFacebook, loginByGoogle } from '../../../reducers/UserReducer/actions';

const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading,
        user: state.userReducer.user,
        error: state.userReducer.error,
        completed: state.userReducer.completed,
    }
};

const mapDispatchToProps = {
    login, loginByFacebook, loginByGoogle
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);