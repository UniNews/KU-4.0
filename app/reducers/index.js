import { combineReducers } from 'redux';
import userReducer from './UserReducer'
import searchReducer from './SearchReducer'
import notificationsReducer from './NotificationReducer'

export default combineReducers({
    userReducer,
    searchReducer,
    notificationsReducer
});