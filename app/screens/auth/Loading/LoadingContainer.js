import { connect } from 'react-redux';
import LoadingView from './LoadingView';
import { autoLogin } from '../../../reducers/UserReducer/actions';
import { getUnReadNotification } from '../../../reducers/NotificationReducer/actions'
const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading,
        user: state.userReducer.user,
        error: state.userReducer.error,
    }
};

const mapDispatchToProps = {
    autoLogin, getUnReadNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingView);