import { connect } from 'react-redux';
import NewsTabView from './NewTabView';

const mapStateToProps = state => {
    return {
        loading: state.newsReducer.loading,
        article: state.newsReducer.news,
        error: state.newsReducer.loading,
        completed: state.newsReducer.news,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsTabView);