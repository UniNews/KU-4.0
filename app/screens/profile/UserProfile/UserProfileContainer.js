import { connect } from 'react-redux';
import UserProfileView from './UserProfileView';
import { followUserById } from '../../../reducers/UserReducer/actions';

const mapStateToProps = state => {
    return {
        myUser: state.userReducer.user,
    }
};

const mapDispatchToProps = {
    followUserById
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView);