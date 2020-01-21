import * as types from './actionTypes';

const initialState = {
    loading: false,
    user: null,
    error: false,
    completed: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                user: null,
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
                user: null,
                error: true,
                completed: true
            };
        case types.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default reducer;