import { connect } from 'react-redux'
import CommunityTagSearchView from './CommunityTagSearchView'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityTagSearchView)