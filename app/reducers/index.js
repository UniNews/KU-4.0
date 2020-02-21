import { combineReducers } from 'redux';
import userReducer from './UserReducer'
import communityTagReducer from './CommunityTagReducer'

export default combineReducers({
    userReducer,
    communityTagReducer
});