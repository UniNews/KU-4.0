import { connect } from 'react-redux';
import UniversityView from './UniversityView';
import { getNewsRecommendation } from '../../../reducers/NewsReducer/actions';

const mapStateToProps = state => {
    return {
        loading: state.newsReducer.loading,
        article: state.newsReducer.news,
        error: state.newsReducer.loading,
        completed: state.newsReducer.news,
    }
};

const mapDispatchToProps = {
    getNewsRecommendation
};

export default connect(mapStateToProps, mapDispatchToProps)(UniversityView);