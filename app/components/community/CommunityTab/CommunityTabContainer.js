import { connect } from 'react-redux';
import CommunityTabView from './CommunityTabView';
import { selectCommunityTag } from '../../../reducers/CommunityTagReducer/actions';

const mapStateToProps = state => {
    return {
        selectedTag: state.communityTagReducer.selectedTag,
        loading: state.communityTagReducer.loading,
        error: state.communityTagReducer.error,
    }
};

const mapDispatchToProps = {
    selectCommunityTag
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunityTabView);