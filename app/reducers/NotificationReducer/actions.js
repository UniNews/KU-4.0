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

export function getUnreadNotifications() {
  return async dispatch => {
    try {
      dispatch(notificationLoading())
      const result = await service.getAllNotifications()
      const notification = result.data.notifications.filter(e => !e.isRead)
      dispatch(notificationOk(notification))
    } catch (err) {
      dispatch(notificationFail())
    }
  }
}

export function readNotification(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(notificationLoading())
      const { notification } = getState().notificationsReducer
      const result = notification.find(e => e._id === id)
      if (result) {
        const index = notification.indexOf(result)
        if (index > -1) {
          notification.splice(index, 1)
          dispatch(notificationOk(notification))
        }
      }
    } catch (err) {
      dispatch(notificationFail())
    }
  }
}