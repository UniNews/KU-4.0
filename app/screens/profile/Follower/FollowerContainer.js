import { connect } from 'react-redux';
import FollowerView from './FollowerView';
import { followUserById } from '../../../reducers/UserReducer/actions';

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = {
    followUserById
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowerView);