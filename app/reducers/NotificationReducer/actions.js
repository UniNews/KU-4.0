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
      const notifications = result.data.notifications.filter(e => !e.isRead)
      dispatch(notificationOk(notifications))
    } catch (err) {
      dispatch(notificationFail())
    }
  }
}

export function readNotification(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(notificationLoading())
      const { notifications } = getState().notificationsReducer
      const updatedNotifications = [...notifications]
      const result = updatedNotifications.find(e => e._id === id)
      if (result) {
        const index = updatedNotifications.indexOf(result)
        if (index > -1) {
          updatedNotifications.splice(index, 1)
          dispatch(notificationOk(updatedNotifications))
        }
      }
    } catch (err) {
      dispatch(notificationFail())
    }
  }
}