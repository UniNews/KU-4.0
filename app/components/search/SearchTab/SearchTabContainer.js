import { connect } from 'react-redux';
import SearchTabView from './SearchTabView';
import { search, reset } from '../../../reducers/SearchReducer/actions';

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = {
    search,
    reset
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTabView);