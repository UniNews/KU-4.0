import { connect } from 'react-redux';
import AnyNewsView from './AnyNewsView';
import { showModal } from '../../../reducers/ErrorModalReducer/actions'

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = {
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(AnyNewsView);