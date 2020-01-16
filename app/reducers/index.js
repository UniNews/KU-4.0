import { combineReducers } from 'redux';
import newsReducer from './NewsReducer'
import userReducer from './UserReducer'


export default combineReducers({
    newsReducer, userReducer
});