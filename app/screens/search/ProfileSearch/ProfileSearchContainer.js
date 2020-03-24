import { connect } from 'react-redux';
import ProfileSearchView from './ProfileSearchView';

const mapStateToProps = state => {
    return {
        loading: state.searchReducer.loading,
        result: state.searchReducer.user,
        error: state.searchReducer.error,
        query: state.searchReducer.query,
        user: state.userReducer.user
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSearchView);