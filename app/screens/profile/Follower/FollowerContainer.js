import { connect } from 'react-redux'
import FollowerView from './FollowerView'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FollowerView)