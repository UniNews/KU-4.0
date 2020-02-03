import * as types from './actionTypes';
import service from '../../services/user';
const jwtDecode = require("jwt-decode")
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
            .then((res) => {
                const user = res;
                const payload = jwtDecode(user.id_token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
                dispatch(userOk(payload))
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