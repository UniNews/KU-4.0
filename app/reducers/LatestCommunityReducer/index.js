import * as types from './actionTypes'

const initialState = {
    fetching: false,
    refreshing: false,
    communities: [],
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.COMMUNITY_FETCHING:
            return {
                ...state,
                fetching: true,
                error: false,
            }
        case types.COMMUNITY_REFRESHING:
            return {
                ...state,
                refreshing: true,
                error: false,
                communities: [],
            }
        case types.COMMUNITY_OK:
            return {
                ...state,
                fetching: false,
                refreshing: false,
                error: false,
                communities: action.payload,
            }
        case types.COMMUNITY_FAIL:
            return {
                ...state,
                fetching: false,
                refreshing: false,
                communities: [],
                error: true,
            }
        default:
            return state
    }
}

export default reducer