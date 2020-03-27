import * as types from './actionTypes'
import service from '../../services/user'
import axios from 'axios'

const userLoading = () => {
  return { type: types.USER_LOADING }
}

const userOk = payload => {
  return { type: types.USER_OK, payload }
}

const userFail = () => {
  return { type: types.USER_FAIL }
}

const logout = () => {
  return { type: types.LOGOUT }
}

export function register(username, password) {
  return dispatch => {
    dispatch(userLoading())
    service
      .register(username, password)
      .then(async (res) => {
        const user = res.data;
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${user.access_token}`;
        const payload = await service.getProfile();
        dispatch(userOk(payload.data.result));
      })
      .catch((err) => {
        dispatch(userFail())
      })
  }
}

export function login(username, password) {
  return dispatch => {
    dispatch(userLoading())
    service
      .login(username, password)
      .then(async res => {
        const user = res.data
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${user.access_token}`
        const payload = await service.getProfile()
        dispatch(userOk(payload.data.result))
      })
      .catch(err => {
        dispatch(userFail())
      })
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(userLoading())
    delete axios.defaults.headers.common['Authorization']
    dispatch(logout())
  }
}

export function loginByFacebook() {
  return dispatch => {
    dispatch(userLoading())
    service
      .loginByFacebook()
      .then(async res => {
        const user = res.data
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${user.access_token}`
        const payload = await service.getProfile()
        dispatch(userOk(payload.data.result))
      })
      .catch(err => {
        dispatch(userFail())
      })
  }
}

export function loginByGoogle() {
  return dispatch => {
    dispatch(userLoading())
    service
      .loginByGoogle()
      .then(async res => {
        const user = res.data
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${user.access_token}`
        const payload = await service.getProfile()
        dispatch(userOk(payload.data.result))
      })
      .catch(err => {
        dispatch(userFail())
      })
  }
}

export function followUserById(id) {
  return async (dispatch, getState) => {
    try {
      // dispatch(userLoading())
      const { user } = getState().userReducer
      const updatedUser = { ...user }
      const index = user.following.indexOf(id) // check if that id is following
      if (index > -1)
        user.following.splice(index, 1) // remove if it is
      else
        user.following.push(id)
      dispatch(userOk(updatedUser))
      await service.followUserById(id)
    }
    catch (err) {
      console.log(err)
      dispatch(userFail())
    }
  }
}