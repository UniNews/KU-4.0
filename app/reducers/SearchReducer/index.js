import * as types from './actionTypes'

const initialState = {
    query: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_QUERY:
            return {
                query: action.payload
            }
        case types.RESET_QUERY:
            return initialState
        default:
            return state
    }
}

export default reducer