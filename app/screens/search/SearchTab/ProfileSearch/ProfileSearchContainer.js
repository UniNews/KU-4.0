import { connect } from 'react-redux'
import ProfileSearchView from './ProfileSearchView'
import { showModal } from '../../../../reducers/ErrorModalReducer/actions'

const mapStateToProps = state => {
    return {
        query: state.searchReducer.query
    }
}

const mapDispatchToProps = {
    showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSearchView)