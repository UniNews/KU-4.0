import { connect } from 'react-redux';
import MyProfileView from './MyProfileView';
import { logoutUser } from '../../../reducers/UserReducer/actions';

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
};

const mapDispatchToProps = {
    logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileView);