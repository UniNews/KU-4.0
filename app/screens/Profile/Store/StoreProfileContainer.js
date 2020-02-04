import { connect } from 'react-redux';
import StoreProfileView from './StoreProfileView';

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(StoreProfileView);