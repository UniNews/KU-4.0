import { connect } from 'react-redux'
import TagNewsView from './TagNewsView'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
  showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(TagNewsView)