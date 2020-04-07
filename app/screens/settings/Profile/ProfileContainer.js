import { connect } from 'react-redux';
import ProfileView from './ProfileView';
import { updateProfile } from '../../../reducers/UserReducer/actions'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = {
    updateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);