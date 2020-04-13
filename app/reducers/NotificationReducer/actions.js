import * as types from './actionTypes'
import service from '../../services/notifications'

const notificationLoading = () => {
  return { type: types.NOTIFICATION_LOADING }
}

const notificationOk = payload => {
  return { type: types.NOTIFICATION_OK, payload }
}

const notificationFail = () => {
  return { type: types.NOTIFICATION_FAIL }
}

export function getUnReadNotification() {
  return async dispatch => {
    try {
      dispatch(notificationLoading())
      const result = await service.getALLNotifications()
      console.log(result,'ssss')
      const notification = result.data.notifications.filter(e => e.isRead)
      console.log(notification,'ssss')
      dispatch(notificationOk(notification))
    } catch(err) {
      console.log(err)
      dispatch(notificationFail())
    }
  }
}