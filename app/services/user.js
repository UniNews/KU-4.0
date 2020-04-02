import constants from '../configs/constants'
import axios from 'axios'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'

export default {
    login: async (username, password) => {
        const json = {
            username: username,
            password: password
        }
        const result = await axios.post(`${constants.API_URL}/signin`, json,{})
        return result
    },
    register: async (username, password) => {
        const json = {
            displayName: username,
            username: username,
            password: password
        }
        const result = await axios.post(`${constants.API_URL}/signup`, json, {
        });
        return result
    },
    getProfile: async () => {
        const result = await axios.get(`${constants.API_URL}/profile`)
        return result
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
                const response = await axios.post(`${constants.API_URL}/signin/facebook`,{
                    access_token: token
                },{
                })
                console.log(response,'ssss')
                return Promise.resolve(response)
            } else {
                return Promise.reject('Cancel by user')
            }
        } catch (err) {
            console.log(err.response,'sss')
            Promise.reject('Facebook Login Error')
        }
    },
    loginByGoogle: async () => {
        try {
            console.log('ssss')
            const { type, accessToken, user } = await Google.logInAsync({
                androidClientId: '319434606205-n3k9ijd91al3h7bcropp4e17rf8j1klk.apps.googleusercontent.com',
                iosClientId: '319434606205-c5ooi2joi9d4un5pi227aitkpls5ku10.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            }
            )
            if (type === 'success') {
                const json = {
                    access_token :accessToken
                }
                let user_token = await axios.post(`${constants.API_URL}/signin/google`, json)
                console.log(user_token)
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
    followUserById: (id) => {
        return axios.post(`${constants.API_URL}/users/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    getFollowingById: (id) => {
        return axios.get(`${constants.API_URL}/users/${id}/following`)
    }
}