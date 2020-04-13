import * as types from './actionTypes'
import service from '../../services/user'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

const userLoading = () => {
  return { type: types.USER_LOADING }
}

const userOk = payload => {
  return { type: types.USER_OK, payload }
}

const userFail = () => {
  return { type: types.USER_FAIL }
}

const userPurge = () => {
  return { type: types.USER_PURGE }
}

export function autoLogin(accessToken) {
  return async dispatch => {
    try {
      dispatch(userLoading())
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accessToken}`
      const payload = await service.getProfile()
      dispatch(userOk(payload.data))
    }
    catch (err) {
      dispatch(userFail())
    }
  }
}

export function register(username, password) {
  return dispatch => {
    dispatch(userLoading())
    service
      .register(username, password)
      .then(async (res) => {
        const user = res.data
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${user.accessToken}`
        const payload = await service.getProfile()
        await AsyncStorage.setItem('accessToken', user.accessToken);
        dispatch(userOk(payload.data))
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
        ] = `Bearer ${user.accessToken}`
        const payload = await service.getProfile()
        await AsyncStorage.setItem('accessToken', user.accessToken);
        dispatch(userOk(payload.data))
      })
      .catch(err => {
        dispatch(userFail())
      })
  }
}

export function logoutUser() {
  return dispatch => {
    try {
      dispatch(userLoading())
      AsyncStorage.clear()
      delete axios.defaults.headers.common['Authorization']
      dispatch(userPurge())
    }
    catch (err) {
      dispatch(userFail())
    }
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
        ] = `Bearer ${user.accessToken}`
        const payload = await service.getProfile()
        await AsyncStorage.setItem('accessToken', user.access_token);
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
        ] = `Bearer ${user.accessToken}`
        const payload = await service.getProfile()
        await AsyncStorage.setItem('accessToken', user.accessToken);
        dispatch(userOk(payload.data.result))
      })
      .catch(err => {
        dispatch(userFail())
      })
  }
}

export function updateProfile(profile) {
  return async dispatch => {
    try {
      dispatch(userLoading())
      await service.updateProfile(profile)
      const payloads = await service.getProfile()
      dispatch(userOk(payloads.data))
    } catch (err) {
      dispatch(userFail())
    }
  }
}