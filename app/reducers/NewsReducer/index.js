import * as types from './actionTypes';

const initialState = {
    loading: false,
    news: [],
    error: false,
    completed: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NEWS:
            return {
                ...state,
                loading: true,
                error: false,
                news: [],
                completed: false
            };
        case types.NEWS_OK:
            return {
                ...state,
                loading: false,
                error: false,
                news: action.payload,
                completed: true
            };
        case types.NEWS_FAIL:
            return {
                ...state,
                loading: false,
                news: [],
                error: true,
                completed: true
            };
        default:
            return state;
    }
};

export default reducer;