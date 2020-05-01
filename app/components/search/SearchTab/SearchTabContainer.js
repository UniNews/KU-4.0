import { connect } from 'react-redux'
import SearchTabView from './SearchTabView'
import {
    setQuery,
    reset,
    getHistory,
    addHistory,
    deleteAllHistory,
    deleteHistory
} from '../../../reducers/SearchReducer/actions'

const mapStateToProps = state => {
    return {
        history: state.searchReducer.history,
        query: state.searchReducer.query,
    }
}

const mapDispatchToProps = {
    setQuery,
    reset,
    getHistory,
    addHistory,
    deleteAllHistory,
    deleteHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTabView)