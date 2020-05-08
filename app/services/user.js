import constants from '../configs/constants'
import axios from 'axios'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'

const USER_PROFILE_PER_PAGE = 12
const USER_ARTICLES_PER_PAGE = 10

export default {
    login: (username, password) => {
        const json = {
            username: username,
            password: password
        }
        return axios.post(`${constants.API_URL}/signin`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    register: (username, password) => {
        const json = {
            displayName: username,
            username: username,
            password: password
        }
        return axios.post(`${constants.API_URL}/signup`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    getProfile: () => {
        return axios.get(`${constants.API_URL}/profile`)
    },
    loginByFacebook: async () => {
        const app_id = constants.APP_ID
        const permissions = ['public_profile', 'email']
        try {
            await Facebook.initializeAsync(app_id)
            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync(
                app_id,
                { permissions }
            )
            if (type === 'success') {
                const response = await axios.post(`${constants.API_URL}/signin/facebook`, { access_token: token }, {
                    headers: { 'Content-Type': 'application/json' }
                })
                return Promise.resolve(response)
            } else {
                return Promise.reject('Cancel by user')
            }
        } catch (err) {
            Promise.reject('Facebook Login Error')
        }
    },
    loginByGoogle: async () => {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                androidStandaloneAppClientId: '1045585339073-mi412ka3jab2bhktcjelgfr8jiracooq.apps.googleusercontent.com',
                androidClientId: '1045585339073-q94tvjltprjskr44seopqrsq4qa4tauc.apps.googleusercontent.com',
                iosClientId: '1045585339073-vgejvthvp0173sdhbmelcmbe0hq5q0v4.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            })
            if (type === 'success') {
                const json = {
                    access_token: accessToken
                }
                const response = await axios.post(`${constants.API_URL}/signin/google`, json, {
                    headers: { 'Content-Type': 'application/json' }
                })
                return Promise.resolve(response)
            }
            else
                return Promise.reject('Cancel by user')
        }
        catch (err) {
            Promise.reject('Google Login Error')
        }
    },
    getUserById: (id) => {
        return axios.get(`${constants.API_URL}/users/${id}`)
    },
    updateProfile: (data) => {
        return axios.put(`${constants.API_URL}/profile`, data, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    getUserFollowers: (id, page) => {
        const offset = (page - 1) * USER_PROFILE_PER_PAGE
        return axios.get(`${constants.API_URL}/users/${id}/followers?offset=${offset}&limit=${USER_PROFILE_PER_PAGE}`)
    },
    getUserFollowings: (id, page) => {
        const offset = (page - 1) * USER_PROFILE_PER_PAGE
        return axios.get(`${constants.API_URL}/users/${id}/followings?offset=${offset}&limit=${USER_PROFILE_PER_PAGE}`)
    },
    getUserNewsById: (id) => {
        // const offset = (page - 1) * USER_ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/users/${id}/articles`)
    },
    unfollowUserById: (id) => {
        return axios.delete(`${constants.API_URL}/users/${id}/follow`)
    },
    followUserById: (id) => {
        return axios.post(`${constants.API_URL}/users/${id}/follow`)
    },
}