import * as types from './actionTypes';

const initialState = {
    loading: false,
    notification: null,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NOTIFICATION_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case types.NOTIFICATION_OK:
            return {
                ...state,
                loading: false,
                error: false,
                notification: action.payload,
            };
        case types.NOTIFICATION_FAIL:
            return {
                ...state,
                loading: false,
                notification: null,
                error: true,
            };
        case types.NOTIFICATION_PURGE:
            return initialState;
        default:
            return state;
    }
};

export default reducer;