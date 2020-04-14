import { connect } from 'react-redux'
import NewsSearchView from './NewsSearchView'

const mapStateToProps = state => {
    return {
        loading: state.searchReducer.loading,
        news: state.searchReducer.news,
        error: state.searchReducer.error,
        query: state.searchReducer.query
    }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSearchView)