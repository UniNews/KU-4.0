import { connect } from 'react-redux'
import NewsThreadView from './NewsThreadView';

const mapStateToProps = state => {
  return {
      user: state.userReducer.user,
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsThreadView);