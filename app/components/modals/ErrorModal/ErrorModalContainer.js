import { connect } from 'react-redux'
import ErrorModalView from './ErrorModalView'
import { hideModal } from '../../../reducers/ErrorModalReducer/actions'

const mapStateToProps = state => {
    return {
        isShowing: state.errorReducer.isShowing,
    }
}

const mapDispatchToProps = {
    hideModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModalView)