import { connect } from 'react-redux'
import LatestView from './LatestView'
import { showModal } from '../../../../reducers/ErrorModalReducer/actions'
import { fetchCommunities, refreshCommunities } from '../../../../reducers/LatestCommunityReducer/actions'

const mapStateToProps = state => {
  return {
    fetching: state.communityReducer.fetching,
    refreshing: state.communityReducer.refreshing,
    communities: state.communityReducer.communities,
    error: state.communityReducer.error,
  }
}

const mapDispatchToProps = {
  showModal,
  fetchCommunities,
  refreshCommunities
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestView)