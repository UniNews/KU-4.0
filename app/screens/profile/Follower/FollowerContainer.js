import { connect } from 'react-redux'
import FollowerView from './FollowerView'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
  showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowerView)