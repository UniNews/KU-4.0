import { connect } from 'react-redux'
import UserProfileView from './UserProfileView'
import { showModal } from '../../../reducers/ErrorModalReducer/actions';

const mapStateToProps = state => {
    return {
        myUser: state.userReducer.user,
    }
}

const mapDispatchToProps = {
    showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView)