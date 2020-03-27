import { connect } from 'react-redux';
import MyProfileView from './MyProfileView';

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileView);