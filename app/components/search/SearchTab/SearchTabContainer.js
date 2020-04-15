import { connect } from 'react-redux'
import SearchTabView from './SearchTabView'
import { setQuery, reset } from '../../../reducers/SearchReducer/actions'

const mapStateToProps = state => {
    return {
        // query: state.searchReduer.query,
    }
}

const mapDispatchToProps = {
    setQuery,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTabView)