import ThreadView from './ThreadView';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadView);