import { connect } from 'react-redux';
import DetailView from './DetailView';
import { login } from '../../reducers/UserReducer/actions';

const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading,
        user: state.userReducer.user,
        error: state.userReducer.error,
        completed: state.userReducer.completed,
        accessToken: state.userReducer.accessToken
    }
};

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);