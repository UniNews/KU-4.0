import { connect } from 'react-redux'
import PopupModalView from './PopupModalView'
// import { hideModal } from '../../../reducers/ErrorModalReducer/actions'

const mapStateToProps = state => {
    return {
        // isShowing: state.errorReducer.isShowing,
    }
}

const mapDispatchToProps = {
    // hideModal
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupModalView)