import { connect } from 'react-redux'
import LoadingModalView from './LoadingModalView'

const mapStateToProps = state => {
    return {
        isShowing: state.errorReducer.isShowing,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingModalView)