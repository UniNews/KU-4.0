import { connect } from 'react-redux';
import NotificationView from './NotificationView';
import { showModal } from '../../../reducers/ErrorModalReducer/actions';

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = {
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationView);