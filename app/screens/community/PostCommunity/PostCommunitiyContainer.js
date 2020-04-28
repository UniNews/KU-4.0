import { connect } from 'react-redux'
import PostCommunityView from './PostCommunityView'
import { showModal } from '../../../reducers/ErrorModalReducer/actions';
import { refreshCommunities } from '../../../reducers/LatestCommunityReducer/actions'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
  showModal,
  refreshCommunities
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommunityView)