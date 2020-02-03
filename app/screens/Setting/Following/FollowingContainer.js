import { connect } from 'react-redux';
import FollowingView from './FollowingView';

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(FollowingView);