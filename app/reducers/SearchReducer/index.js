import * as types from './actionTypes';

const initialState = {
    loading: false,
    news: [],
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                news: [],
            };
        case types.SEARCH_OK:
            return {
                ...state,
                loading: false,
                error: false,
                news: action.payload,
            };
        case types.SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                news: [],
                error: true,
            };
        default:
            return state;
    }
};

export default reducer;