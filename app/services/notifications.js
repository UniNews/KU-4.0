import constants from '../configs/constants'
import axios from 'axios'

const NOTIFICATIONS_PER_PAGE = 15

export default {
    postNotificationToken: (token) => {
        const json = {
            token
        }
        return axios.post(`${constants.API_URL}/notifications/token`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    deleteNotificationToken: (token) => {
        const json = {
            token
        }
        return axios.delete(`${constants.API_URL}/notifications/token`, {
            data: json
        })
    },
    getNotifications: (page) => {
        const offset = (page - 1) * NOTIFICATIONS_PER_PAGE
        return axios.get(`${constants.API_URL}/notifications?offset=${offset}&limit=${NOTIFICATIONS_PER_PAGE}`)
    },
    postNotificationsView: (id) => {
        return axios.post(`${constants.API_URL}/notifications/${id}/view`)
    },
    getAllNotifications: () => {
        return axios.get(`${constants.API_URL}/notifications`)
    }
}