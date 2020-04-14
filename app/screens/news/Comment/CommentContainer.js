import { connect } from 'react-redux';
import CommentView from './CommentView';
import { login } from '../../../reducers/UserReducer/actions';
import { showModal } from '../../../reducers/ErrorModalReducer/actions'

const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading,
        user: state.userReducer.user,
        error: state.userReducer.error,
        completed: state.userReducer.completed,
        accessToken: state.userReducer.accessToken
    }
};

const mapDispatchToProps = {
    login,
    showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentView);