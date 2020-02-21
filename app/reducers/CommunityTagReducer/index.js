import * as types from './actionTypes'

const initialState = {
    selectedTag: '',
    loading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SELECT_COMMUNITY_TAG_OK:
            return {
                ...state,
                loading: false,
                error: false,
                selectedTag: action.payload,
            }
        case types.USER_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state
    }
}

export default reducer