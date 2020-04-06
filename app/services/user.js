import constants from '../configs/constants'
import axios from 'axios'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'

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
                androidClientId: '319434606205-n3k9ijd91al3h7bcropp4e17rf8j1klk.apps.googleusercontent.com',
                iosClientId: '319434606205-c5ooi2joi9d4un5pi227aitkpls5ku10.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            })
            if (type === 'success') {
                const json = {
                    access_token: accessToken
                }
                let user_token = await axios.post(`${constants.API_URL}/signin/google`, json, {
                    headers: { 'Content-Type': 'application/json' }
                })
                return Promise.resolve(user_token)
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
    followUserById: async (id) => {
        const data = await axios.post(`${constants.API_URL}/users/${id}/follow`)
        return data
    },
    getFollowingById: (id) => {
        return axios.get(`${constants.API_URL}/users/${id}/following`)
    },
    changeProfile: async (data) => {
        const sd = await axios.put(`${constants.API_URL}/profile`, data)
        return sd
    },
    getUserFollower: async (id) => {
        const sd = await axios.get(`${constants.API_URL}/users/${id}/followers`)
        return sd
    },
    getProfileFollower: async () => {
        const sd = await axios.get(`${constants.API_URL}/profile/followers`)
        return sd
    },
    getUserFollowing: async (id) => {
        const sd = await axios.get(`${constants.API_URL}/users/${id}/followings`)
        return sd
    },
    getProfileFollowing: async () => {
        const sd = await axios.get(`${constants.API_URL}/profile/followings`)
        return sd
    },
    getUserArticle: async (id) => {
        const sd = await axios.get(`${constants.API_URL}/users/${id}/articles`)
        return sd
    },
    unFollowUserById: async (id) => {
        const data = await axios.delete(`${constants.API_URL}/users/${id}/follow`)
        return data
    }
}