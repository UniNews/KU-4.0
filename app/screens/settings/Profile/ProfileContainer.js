import { connect } from 'react-redux'
import ProfileView from './ProfileView'
import { updateProfile } from '../../../reducers/UserReducer/actions'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        loading: state.userReducer.loading,
    }
}

const mapDispatchToProps = {
    updateProfile,
    showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)