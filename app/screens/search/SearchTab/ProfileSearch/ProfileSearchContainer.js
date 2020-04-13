import { connect } from 'react-redux'
import ProfileSearchView from './ProfileSearchView'
import { followUserById } from '../../../../reducers/UserReducer/actions'

const mapStateToProps = state => {
    return {
        loading: state.searchReducer.loading,
        result: state.searchReducer.user,
        error: state.searchReducer.error,
        query: state.searchReducer.query,
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    followUserById
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSearchView)