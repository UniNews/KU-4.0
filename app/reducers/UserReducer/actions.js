import * as types from './actionTypes';
import service from '../../services/user';
import axios from 'axios'

const userLoading = () => {
    return { type: types.USER_LOADING };
}

const userOk = (payload) => {
    return { type: types.USER_OK, payload };
}

const userFail = () => {
    return { type: types.USER_FAIL };
}

const logout = () => {
    return { type: types.LOGOUT };
}

export function login(username, password) {
    return (dispatch) => {
        dispatch(userLoading())
        service.login(username, password)
            .then(async (res) => {
                const user = res.data;
                axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
                const payload = await service.getProfile()
                dispatch(userOk(payload.data))
            }).catch(err => {
                dispatch(userFail())
            }
            );
    };
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(userLoading());
        delete axios.defaults.headers.common['Authorization']
        dispatch(logout());
    };
}