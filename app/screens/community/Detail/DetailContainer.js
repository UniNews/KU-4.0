import { connect } from 'react-redux'
import DetailView from './DetailView'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'
import { refreshCommunities } from '../../../reducers/LatestCommunityReducer/actions'

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  showModal,
  refreshCommunities
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView)