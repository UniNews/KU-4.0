import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import searchReducer from './SearchReducer'
import errorReducer from './ErrorModalReducer'

export default combineReducers({
    userReducer,
    searchReducer,
    errorReducer
})