import * as types from './actionTypes';

const initialState = {
    loading: false,
    user:{},
    error: false,
    completed: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return {
                ...state,
                loading: true,
                error: false,
                user: {},
                completed: false
            };
        case types.USER_OK:
            return {
                ...state,
                loading: false,
                error: false,
                user: action.payload,
                completed: true
            };
        case types.USER_FAIL:
            return {
                ...state,
                loading: false,
                user: {},
                error: true,
                completed: true
            };
        default:
            return state;
    }
};

export default reducer;