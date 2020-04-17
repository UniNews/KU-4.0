import * as types from './actionTypes'

const initialState = {
    loading: false,
    notifications: [],
    error: false,
    // unreadNotifications: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NOTIFICATION_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case types.NOTIFICATION_OK:
            return {
                ...state,
                loading: false,
                error: false,
                notifications: action.payload,
            }
        case types.NOTIFICATION_FAIL:
            return {
                ...state,
                loading: false,
                notifications: [],
                error: true,
            }
        // case types.NOTIFICATION_UNREAD_OK:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: false,
        //         unreadNotifications: action.payload,
        //     }
        default:
            return state
    }
}

export default reducer