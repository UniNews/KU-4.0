import { connect } from 'react-redux'
import NewsTagSearchView from './NewsTagSearchView'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NewsTagSearchView)