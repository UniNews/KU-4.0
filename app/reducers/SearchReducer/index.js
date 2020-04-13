import * as types from './actionTypes'

const initialState = {
    newsLoading: false,
    news: null,
    user: null,
    newsError: false,
    query: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_QUERY:
            return {
                ...state,
                newsLoading: true,
                newsError: false,
                news: null,
                user: null,
                query: action.payload
            }
        case types.NEWS_SEARCH_OK:
            return {
                ...state,
                newsLoading: false,
                newsError: false,
                news: action.payload.news,
            }
        case types.NEWS_SEARCH_FAIL:
            return {
                ...state,
                newsLoading: false,
                newsError: true,
                news: null,
            }
        case types.SEARCH_RESET:
            return initialState
        default:
            return state
    }
}

export default reducer