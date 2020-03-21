import { connect } from 'react-redux';
import MainSearchView from './MainSearchView';

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MainSearchView);