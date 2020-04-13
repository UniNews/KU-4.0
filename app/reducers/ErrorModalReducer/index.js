import * as types from './actionTypes'

const initialState = {
    isShowing: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MODAL:
            return {
                isShowing: true
            }
        case types.HIDE_MODAL:
            return {
                isShowing: false
            }
        default:
            return state
    }
}

export default reducer