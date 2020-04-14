import { connect } from 'react-redux'
import PostCommunityView from './PostCommunityView'
import { showModal } from '../../../reducers/ErrorModalReducer/actions';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
  showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommunityView)