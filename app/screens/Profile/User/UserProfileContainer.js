import { connect } from 'react-redux';
import UserProfileView from './UserProfileView';

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView);