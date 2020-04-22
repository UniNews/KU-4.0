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

export function getNotifications() {
  return async (dispatch, getState) => {
    try {
      dispatch(notificationLoading())
      const result = await service.getAllNotifications()
      const allNotifications = result.data.notifications
      dispatch(notificationOk(allNotifications))
    } catch (err) {
      dispatch(notificationFail())
    }
  }
}

export function readNotification(id) {
  return async (dispatch, getState) => {
    try {
      const { notifications } = getState().notificationsReducer
      const result = notifications.find(e => e._id === id)
      if (result && !result.isRead) {
        result.isRead = true
        service.postNotificationsView(id)
        dispatch(notificationOk([...notifications]))
      }
    } catch (err) {
      dispatch(notificationFail())
    }
  }
}