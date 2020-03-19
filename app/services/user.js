import constants from '../configs/constants'
import axios from 'axios'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'

export default {
    login: (email, password) => {
        const json = {
            grant_type: 'password',
            email: email,
            password: password
        }
        return axios.post(`${constants.API_URL}/token`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    register: (email, password) => {
      const json = {
        displayName: email,
        email: email,
        password: password
      }
      return axios.post(`${constants.API_URL}/registerByEmail`, json, {
        headers: { 'Content-Type': 'application/json' }
      });
    },
    getProfile: () => {
        return axios.get(`${constants.API_URL}/profile`)
    },
    getUserById: (id) => {
        return axios.get(`${constants.API_URL}/users/${id}`).then(response => response.data)
            .catch(error => error)
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
                const response = await axios.get(`https://graph.facebook.com/me?access_token=${token}`)
                const json = {
                    displayName: response.data.name,
                    loginType: 'facebook',
                    collectedId: response.data.id
                }
                let user = await axios.post(`${constants.API_URL}/register`, json, {
                    headers: { 'Content-Type': 'application/json' }
                })
                return Promise.resolve(user)
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
                scopes: ['profile', 'email'],
            }
            )
            if (type === 'success') {
                const json = {
                    displayName: user.name,
                    loginType: 'google',
                    collectedId: user.id
                }
                let user_token = await axios.post(`${constants.API_URL}/register`, json, {
                    headers: { 'Content-Type': 'application/json' }
                })
                return Promise.resolve(user_token)
            }
            else {
                return Promise.reject('Cancel by user')
            }
        }
        catch (err) {
            Promise.reject('Google Login Error')
        }
    },
}