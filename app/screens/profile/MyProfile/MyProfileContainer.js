import { connect } from 'react-redux'
import MyProfileView from './MyProfileView'
import { logoutUser } from '../../../reducers/UserReducer/actions'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'


const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = {
    logoutUser,
    showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileView)