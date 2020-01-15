import { connect } from 'react-redux';
import LoginView from './LoginView';
import { getNewsRecommendation } from '../../reducers/NewsReducer/actions';

const mapStateToProps = state => {
    return {
        loading: state.newsReducer.loading,
        article: state.newsReducer.news,
        error: state.newsReducer.loading,
        completed: state.newsReducer.news,
        text:''
    }
};

const mapDispatchToProps = {
    getNewsRecommendation
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);