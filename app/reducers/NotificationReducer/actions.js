import * as types from './actionTypes'
import service from '../../services/notifications'

const notificationLoading = () => {
  return { type: types.NOTIFICATION_LOADING }
}

const notificationOk = payload => {
  return { type: types.NOTIFICATION_OK, payload }
}

const unReadnotificationOk = payload => {
  return { type: types.NOTIFICATION_UNREAD_OK, payload }
}

const notificationFail = () => {
  return { type: types.NOTIFICATION_FAIL }
}

export function getNotifications() {
  return async (dispatch, getState) => {
    try {
      dispatch(notificationLoading())
      const result = await service.getAllNotifications()
      // const allnotification = [...getState().notificationsReducer.notifications, ...result.data.notifications]
      const oldData = result.data.notifications.filter(data => !getState().notificationsReducer.notifications.some(newData => newData._id === data._id));
      const allnotification = oldData.concat(getState().notificationsReducer.notifications);
      const notifications = allnotification.filter(e => !e.isRead)
      dispatch(unReadnotificationOk(notifications))
      dispatch(notificationOk(allnotification))
    } catch (err) {
      dispatch(notificationFail())
    }
  }
}

export function readNotification(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(notificationLoading())
      const { unreadNotifications } = getState().notificationsReducer
      const updatedNotifications = [...unreadNotifications]
      const result = updatedNotifications.find(e => e._id === id)
      if (result) {
        const index = updatedNotifications.indexOf(result)
        if (index > -1) {
          updatedNotifications.splice(index, 1)
          dispatch(unReadnotificationOk(updatedNotifications))
        }
      }
    } catch (err) {
      dispatch(notificationFail())
    }
  }
}