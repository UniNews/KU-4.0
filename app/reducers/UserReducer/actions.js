import * as types from './actionTypes';
import service from '../../utils/user';
const jwtDecode = require("jwt-decode")

const fetch_user = () => {
    return { type: types.FETCH_USER };
}

const userOk = (payload) => {
    return { type: types.USER_OK, payload };
}

const userFail = () => {
    return { type: types.USER_FAIL };
}

export function login(information) {
    return (dispatch) => {
        dispatch(fetch_user());
        service.login(information)
            .then((res) => {
                const user = res;
                const payload = jwtDecode(user.id_token)
                dispatch(userOk({
                    ...payload,
                    'access_token': user.access_token
                }))
            }).catch(err => dispatch(userFail()));
    };
}