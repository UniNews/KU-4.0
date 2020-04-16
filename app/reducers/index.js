import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import searchReducer from './SearchReducer'
import errorReducer from './ErrorModalReducer'
import notificationsReducer from './NotificationReducer'

export default combineReducers({
    userReducer,
    searchReducer,
    errorReducer,
    notificationsReducer
})
