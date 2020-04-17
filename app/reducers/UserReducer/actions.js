import * as types from './actionTypes'
import service from '../../services/user'
import notifications from '../../configs/notifications'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

const userLoading = () => {
  return { type: types.USER_LOADING }
}

const userOk = payload => {
  return { type: types.USER_OK, payload }
}

const userFail = payload => {
  return { type: types.USER_FAIL, payload }
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
      await notifications.registerForPushNotificationsAsync()
      dispatch(userOk(payload.data))
    }
    catch (err) {
      dispatch(userFail('การเข้าสู่ระบบผิดพลาด'))
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
        await notifications.registerForPushNotificationsAsync()
        await AsyncStorage.setItem('accessToken', user.accessToken)
        dispatch(userOk(payload.data))
      })
      .catch((err) => {
        const statusCode = err.response.status
        if (statusCode === 409)
          dispatch(userFail('บัญชีผู้ใช้ถูกใช้ไปแล้ว'))
        else
          dispatch(userFail('การสมัครบัญชีผู้ใช้ผิดพลาด'))
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
        await notifications.registerForPushNotificationsAsync()
        await AsyncStorage.setItem('accessToken', user.accessToken)
        dispatch(userOk(payload.data))
      })
      .catch(err => {
        const statusCode = err.response.status
        if (statusCode === 422)
          dispatch(userFail('บัญชีผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง'))
        else
          dispatch(userFail('การเข้าสู่ระบบผิดพลาด'))
      })
  }
}

export function logoutUser() {
  return async dispatch => {
    try {
      dispatch(userLoading())
      await notifications.unregisterForPushNotificationsAsync()
      AsyncStorage.clear()
      delete axios.defaults.headers.common['Authorization']
      dispatch(userPurge())
    }
    catch (err) {
      dispatch(userFail('การออกสู่ระบบผิดพลาด'))
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
        await notifications.registerForPushNotificationsAsync()
        await AsyncStorage.setItem('accessToken', user.accessToken)
        dispatch(userOk(payload.data))
      })
      .catch(err => {
        dispatch(userFail('การเข้าสู่ระบบผิดพลาด'))
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
        await notifications.registerForPushNotificationsAsync()
        await AsyncStorage.setItem('accessToken', user.accessToken)
        dispatch(userOk(payload.data))
      })
      .catch(err => {
        dispatch(userFail('การเข้าสู่ระบบผิดพลาด'))
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
      dispatch(userFail('การอัพเดตโปรไฟล์ผิดพลาด'))
    }
  }
}