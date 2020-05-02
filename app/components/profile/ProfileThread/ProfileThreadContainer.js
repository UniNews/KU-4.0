import { connect } from 'react-redux'
import ProfileThreadView from './ProfileThreadView'

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileThreadView)