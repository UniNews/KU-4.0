import * as types from './actionTypes'

const initialState = {
    query: '',
    history: [],
    historyError: false,
    searchError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.QUERY_SET:
            return {
                ...state,
                query: action.payload,
                searchError: false
            }
        case types.HISTORY_SET:
            return {
                ...state,
                history: action.payload,
                historyError: false
            }
        case types.HISTORY_FAIL:
            return {
                ...state,
                historyError: false
            }
        case types.SEARCH_FAIL:
            return {
                ...state,
                searchError: false
            }
        case types.QUERY_RESET:
            return {
                ...state,
                query: '',
                searchError: false
            }
        default:
            return state
    }
}

export default reducer