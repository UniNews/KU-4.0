import * as types from './actionTypes'

const initialState = {
    loading: false,
    user: null,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case types.USER_OK:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            }
        case types.USER_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,
            }
        case types.USER_PURGE:
            return initialState
        default:
            return state
    }
}

export default reducer